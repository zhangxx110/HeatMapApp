/**
 * Created by zhangxiongxiang on 16/12/14.
 */
angular.module('app').component("revertAdd", {
    templateUrl: 'template/file-manager.template.html',
    controller: function FileManager($scope, LoadFileService) {
        $scope.validDataIndex = 0;
        $scope.totalDataIndex = 0;
        $scope.fileName = 'testAddress.txt';
        $scope.addressData;
        var revertAdd = [];
        var heatmapOverlay;
        console.log('revertAdd');
        $scope.readFile = function () {
            $scope.myGeo = new BMap.Geocoder();
            $scope.addressData = [];
            LoadFileService.loadFile($scope.fileName, function (err, lineData, isEnd) {
                if (err) {
                    console.log('loadFile err:' + err);
                } else if (lineData) {
                    $scope.addressData.push(lineData);
                } else if (isEnd) {
                    $scope.validDataIndex = 0;
                    $scope.totalDataIndex = 0;
                    for (i = 0; i < $scope.addressData.length; i++) {
                        $scope.geocodeSearch($scope.addressData[i], $scope.addressData.length);
                    }
                }
            });
        }

        $scope.geocodeSearch = function (add, maxSize) {

            $scope.myGeo.getPoint(add, function (point) {
                $scope.totalDataIndex++;
                if (point) {
                    //var address = new BMap.Point(point.lng, point.lat);
                    //addMarker(address, new BMap.Label(validDataIndex + ":" + add, {offset: new BMap.Size(20, -10)}));
                    var obj = new creatHeatMapObj(point.lng, point.lat, $scope.validDataIndex * 10);
                    revertAdd[$scope.validDataIndex] = obj;
                    $scope.validDataIndex++;
                }
                if (maxSize === $scope.totalDataIndex) {
                    $scope.showHeatMap(revertAdd);
                }
            }, "合肥市");
        }
        $scope.showHeatMap = function (addresss) {
            var point = JSON.stringify(addresss);
            console.log('point:' + point);
            heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 20});
            map.addOverlay(heatmapOverlay);
            heatmapOverlay.setDataSet({data: addresss, max: 100});
            //显示热力图
            $scope.openHeatmap();
        }
        //是否显示热力图
        $scope.openHeatmap = function () {
            heatmapOverlay.show();
        }
        $scope.closeHeatmap = function () {
            heatmapOverlay.hide();
        }
    }
});
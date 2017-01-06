/**
 * Created by zhangxiongxiang on 16/12/14.
 */

angular.module("fileManager").factory('LoadFileService', function () {
    var service = this;

    /**
     * 读取文件夹所有文件
     * @param dirPath
     * @param callback
     */
    service.loadDir = function (dirPath, callback) {
        console.log("loadDir");
        fs.readdir(dirPath, function (err, files) {
            if (err) {
                callback(err, null);
                return;
            }
            files.sort();
            callback(null, files);
        });
    }

    /**
     * 按行读取文件
     * @param fileName 文件名
     * @param callback
     */
    service.loadFile = function (fileName, callback) {
        var rd = readline.createInterface({
            input: fs.createReadStream(fileName),
            output: process.stdout,
            terminal: true
        });
        rd.on('line', function (line) {
            console.log(line);
            callback(null, line, false);
        });
        rd.on('close', function () {
            console.log('on close');
            callback(null, null, true);
        });


    }

    return service;
});
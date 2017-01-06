/**
 * Created by zhangxiongxiang on 16/12/19.
 */
var app = angular.module('app', ['fileManager']);
window.onload = function() {
    if (!isSupportCanvas()) {
        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }
};

/**
 *  判断浏览区是否支持canvas
 */
function isSupportCanvas() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
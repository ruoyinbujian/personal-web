/**
 * Created by hxsd on 2016/9/1.
 */
angular.module("foodsOrder").controller("homeCtrl",function ($scope,$http) {
    // 获取首页数据
    $scope.homeData = {};
    var url_home = "data/home.json";
    $http.get(url_home).success(function (data) {
        $scope.homeData = data;
    });
});
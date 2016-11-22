/**
 * Created by hxsd on 2016/9/2.
 */
angular.module("foodsOrder").controller("sellersCtrl",function ($scope,$http) {
    $scope.page = 0;    // 用来保存当前请求的页码
    $scope.totalPages = 1;   // 用来保存总页数
    $scope.seller = [];
    $scope.getSellers = function () {
        $scope.page++;  // 页数++
        var url = "data/seller.json";   // 请求的url
        $http.get(url)
            .success(function (data) {
                angular.forEach(data.sellers, function (data) {
                    $scope.seller.push(data);
                });
                // 更新总页面数，基于API发送的值
                $scope.totalPages = data.totalPages; // 示例数据中为10
            })
            .finally(function () {
                // 广播事件，告诉无限滚动组件everything is done
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    $scope.getSellers();
    $scope.onRefresh = function () {
        $scope.page = 0;
        $scope.seller = [];
        $http.get("data/seller.json")
            .success(function (data) {
                $scope.seller = data.sellers;
            })
            .finally(function () {
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
    $scope.isShow = {
        hot:function (item) {
            return item.protect=="true";
        },
        protect:function (item) {
            return item.protect=="true";
        },
        bill:function (item) {
            return item.bill=="true";
        },
        intime:function (item) {
            return item.intime=="true";
        },
        express:function (item) {
            return item.express=="true";
        }
    };
    $scope.howOrderBy = 'howfar';
    $scope.chooseOrder = function (type) {
        $scope.howOrderBy = type;
    }
});
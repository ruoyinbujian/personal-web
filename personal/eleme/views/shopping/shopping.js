/**
 * Created by hxsd on 2016/9/2.
 */
angular.module("foodsOrder").controller("shoppingCtrl",function ($scope,$http,$ionicScrollDelegate,shopCart) {
    var url = "data/goods.json";
    $scope.data = [];
    $scope.types = [];
    $scope.nowType = "";
    $http.get(url).success(function (data) {
        angular.forEach(data, function (data) {
            $scope.types.push(data.type);
            for(var i=0; i<data.foods.length; i++){
                data.foods[i].sales = parseInt(data.foods[i].sales*(Math.random()*299+1)/100);
                data.foods[i].price = parseInt(data.foods[i].price*(Math.random()*299+1)/100);
                data.foods[i].likes = parseInt(data.foods[i].likes*Math.random());
            }
        });
        $scope.data = data;
    });
    $scope.thistype = function (item) {
        $scope.nowType = item;
        $ionicScrollDelegate.$getByHandle('foodsScroll').scrollTop();
    };
    $scope.add = function (product) {
        shopCart.add(product);
    };
    $scope.totalNumber = function () {
        shopCart.totalNumber();
    }
});
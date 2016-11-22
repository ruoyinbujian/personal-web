/**
 * Created by hxsd on 2016/9/1.
 */
angular.module("foodsOrder").controller("orderListCtrl",function ($scope,$http) {
    $scope.isShowDelete = false;
    $scope.orders = [];
    var url = "data/orderList.json";
    $http.get(url).success(function (data) {
        $scope.orders = data;
    });
    $scope.totals = function (foods,toggle) {
        var total = 0;
        var price = 0;
        for(var i=0;i<foods.length;i++){
            var amount = parseInt(foods[i].amount);
            price+= amount*foods[i].price;
            total+= amount;
        }
        return toggle?total:price;
    };
    $scope.remove = function(product){
        var index = $scope.orders.indexOf(product);
        $scope.orders.splice(index,1);
    };
});
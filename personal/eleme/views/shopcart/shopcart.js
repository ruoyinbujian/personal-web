/**
 * Created by ETIFHL on 2016/9/3.
 */
angular.module("foodsOrder").controller("shopCartCtrl",function ($scope,shopCart, $ionicPopup,$state) {
    var cart = shopCart.findAll();
    $scope.gift = 3*(Math.random()+1);
    $scope.totalNumber = function(){
        var total = 0;
        for(var i=0;i<cart.length;i++){
            total += cart[i].number;
        }
        return total;
    };
    $scope.totalMoney = function(){
        var total = 0;
        for(var i=0;i<cart.length;i++){
            total += cart[i].number * cart[i].product.price;
        }
        return total;
    };
    $scope.cartData = cart;
    $scope.clearCart = function () {
        return shopCart.clear();
    };
    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: '感谢您的购买！',
            template: '我们会尽快安排送餐！',
            buttons: [
                {
                    text: '<b>返回首页</b>',
                    type: 'button-calm',
                    onTap: function() {$state.go('tabs.home');$scope.clearCart();}
                },
                {
                    text: '<b>再来一单</b>',
                    type: 'button-positive',
                    onTap: function() {$state.go('tabs.shopping');$scope.clearCart();}
                }
            ]
        });
    };
});
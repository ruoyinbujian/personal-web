/**
 * Created by hxsd on 2016/9/1.
 */
var myapp = angular.module("foodsOrder",["ionic"]);
myapp.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    // 主页
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"
        }}
    });
    // 商家列表
    $stateProvider.state("tabs.sellers",{
        url:"/sellers",
        views:{"tab-sellers":{
            templateUrl:"views/sellers/sellers.html",
            controller:"sellersCtrl"
        }}
    });
    // 商家列表/商品详情页
    $stateProvider.state("tabs.shopping",{
        url:"/shopping",
        views:{"tab-sellers":{
            templateUrl:"views/shopping/shopping.html",
            controller:"shoppingCtrl"
        }}
    });
    // 订单列表
    $stateProvider.state("tabs.orderList",{
        url:"/orderList",
        views:{"tab-orderList":{
            templateUrl:"views/orderList/orderList.html",
            controller:"orderListCtrl"
        }}
    });
    // 购物车
    $stateProvider.state("tabs.shopCart",{
        url:"/shopCart",
        views:{"tab-shopCart":{
            templateUrl:"views/shopcart/shopcart.html",
            controller:"shopCartCtrl"
        }}
    });
    // 个人页面
    $stateProvider.state("tabs.mine",{
        url:"/mine",
        views:{"tab-mine":{
            templateUrl:"views/mine/mine.html"
        }}
    });
    // 个人页面/寻找地址
    $stateProvider.state("tabs.address",{
        url:"/address",
        views:{"tab-mine":{
            templateUrl:"views/address/address.html",
            controller:"addressCtrl"
        }}
    });
    $stateProvider.state("loading",{
        url:"/loading",
        templateUrl:"views/loading/loading.html",
        controller:"loadingCtrl"
    });
    // 开场loading
    $urlRouterProvider.otherwise("/loading")
});
myapp.directive("scrollHeight",function ($window) {
    return{
        restrict:'AE',
        link:function ($scope,element,attr) {
            element[0].style.height=($window.innerHeight-106-44-50+'px')
        }
    }
});
myapp.factory("shopCart", function () {
    var cart = [];  // 购物车的购物筐
    // 返回一个单例的购物车对象
    return {
        // 添加商品的方法
        add: function (product) {
            // 先判断购物车中是否已经有了该商品
            for (var i = 0; i < cart.length; i++) {
                var item = cart[i];
                if (item.product.name == product.name&&item.product.price == product.price) {
                    item.number += 1;
                    return;     // 返回
                }
            }
            // 如果执行到这里，说明购物车中没有该商品
            // 则构造一个item对象，放入购物筐
            cart.push({product: product, number: 1});
        },
        // 删除商品的方法(按名称)
        remove: function (name) {
            // 遍历购物筐中的商品，一个一个比较name
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.name == name) {
                    cart.splice(i, 1);   // 从数组中删除
                    break;
                }
            }
        },
        // 查看购物车中所有的商品信息
        findAll: function () {
            return cart;
        },
        // 清空购物车的方法
        clear: function () {
            cart.length = 0;
        }
    };
});
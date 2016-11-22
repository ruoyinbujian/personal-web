/**
 * Created by hxsd on 2016/10/27.
 */

var myapp = angular.module("myapp", ["ionic"]);

// 配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tour", {
        url: "/tour",
        templateUrl: "views/tour/tour.html",
        //controller:"tourCtrl"
    }).state("tabs", {
        url: "/tabs",
        abstract: true,     
        templateUrl: "views/tabs/tabs.html"
    }).state("tabs.home", {
        url: "/home",
        views:{"tab-home":{templateUrl:"views/home/home.html"}}
    }).state("tabs.detail", {
        url: "/detail",
        views:{"tab-home":{templateUrl:"views/detail/detail.html"}}
    })
        .state("tabs.talk", {
        url: "/talk",
        views:{"tab-talk":{templateUrl:"views/talk/talk.html",controller:"talkCtrl"}}
    }).state("tabs.location", {
        url: "/location",  
        views: {"tab-location":{templateUrl: "views/location/location.html",controller: "locationCtrl"}}
    }).state("tabs.shop", {
        url: "/shop",
        views: {"tab-shop": {templateUrl: "views/shop/shop.html",controller: "shopCtrl"}}
    });
    $urlRouterProvider.otherwise("/tour");// 默认首页
});



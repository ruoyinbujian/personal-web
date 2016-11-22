/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("foodsOrder").controller("loadingCtrl", function ($scope,$ionicSlideBoxDelegate,$state) {
    // 最后一张划过跳转
    $scope.swipeLeft = function () {
        if( $ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1){
            $state.go("tabs.home");
        }
    };
    // 点击跳转
    $scope.skip = function () {
        $state.go("tabs.home");
    };
});
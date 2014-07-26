'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }])
    .controller('CommonCtrl', ['$scope', function ($scope) {
        $scope.templates =
            [
                { name: 'switcher.html', url: 'partials/switcher.html'},
                { name: 'header.html', url: 'partials/header-style-1.html'},
                { name: 'footer.html', url: 'partials/footer.html'},
                { name: 'topbar.html', url: 'partials/topbar.html'},
                { name: 'slide-wrapper.html', url: 'partials/slide-wrapper.html'}
            ];
        $scope.switcher = $scope.templates[0];
        $scope.header = $scope.templates[1];
        $scope.footer = $scope.templates[2];
        $scope.topbar = $scope.templates[3];
        $scope.slideWrapper = $scope.templates[4];
    }]);

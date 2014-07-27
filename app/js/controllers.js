'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('BrowseCtrl', ['$scope', function ($scope) {

    }])
    .controller('HomeCtrl', ['$scope', function ($scope) {

    }])
    .controller('CommonCtrl', ['$scope', function ($scope) {
        $scope.templates =
            [
                { name: 'header.html', url: 'partials/header-style-1.html'},
                { name: 'footer.html', url: 'partials/footer.html'},
                { name: 'topbar.html', url: 'partials/topbar.html'}
            ];
        $scope.header = $scope.templates[0];
        $scope.footer = $scope.templates[1];
        $scope.topbar = $scope.templates[2];
    }]);

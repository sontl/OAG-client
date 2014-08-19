'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'ngLoadScript',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/browse', {templateUrl: 'partials/partial1.html', controller: 'BrowseCtrl'});
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/upload', {templateUrl: 'partials/upload-images.html', controller: 'UploadCtrl'});
        $routeProvider.when('/simpleupload', {templateUrl: 'partials/simple-upload.html', controller: 'UploadCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
        // remove hash-tag # in URL
//        if(window.history && window.history.pushState){
//            $locationProvider.html5Mode(true);
//        }
    }]);

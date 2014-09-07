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
        $routeProvider.when('/browse', {templateUrl: 'partials/art-browsing.html', controller: 'BrowseArtCtrl'});
        $routeProvider.when('/workdetails', {templateUrl: 'partials/artwork-details.html', controller: 'ArtworkDetailsCtrl'});
        $routeProvider.when('/shopcart', {templateUrl: 'partials/shop-cart.html', controller: 'ShopCartCtrl'});
        $routeProvider.when('/checkout', {templateUrl: 'partials/checkout.html', controller: 'CheckoutCtrl'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
        $routeProvider.when('/profile', {templateUrl: 'partials/artist-profile.html', controller: 'ArtistProfileCtrl'});
        $routeProvider.when('/collections', {templateUrl: 'partials/collections.html', controller: 'CollectionsCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
        // remove hash-tag # in URL
//        if(window.history && window.history.pushState){
//            $locationProvider.html5Mode(true);
//        }
    }]);

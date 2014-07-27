'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('artSwitcher', [ function () {
        return {
            restrict : 'AEC',
            link: function (scope, element, attrs) { // function content is optional
                console.log("template switcher generated");
            },
            templateUrl : 'partials/switcher.html'
        };
    }]).
    directive('artWrapper', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("template wrapper generated");
            },
            templateUrl : 'partials/wrapper.html'
        };
    }]).
    directive('artFeaturedArtworks', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("featured artwork generated");
            },
            templateUrl : 'partials/featured-artwork-1.html'
        };
    }]).
    directive('artWrapperSlider', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("wrapper slider generated");
            },
            templateUrl : 'partials/wrapper-slider-1.html'
        };
    }]).
    directive('artWrapperGallery4Columns', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artWrapperGallery4Columns generated");
            },
            templateUrl : 'partials/wrapper-gallery-4-columns.html'
        };
    }]).
    directive('artFeaturedArtists', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artFeaturedArtists generated");
            },
            templateUrl : 'partials/featured-artists.html'
        };
    }]).
    directive('artWrapperShop', [ function () {
        return {
            restrict : 'ACE',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artWrapperShop generated");
            },
            templateUrl : 'partials/wrapper-shop-1.html'
        };
    }]);

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
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("template switcher generated");
            },
            templateUrl : 'partials/switcher.html'
        };
    }]).
    directive('artWrapper', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("template wrapper generated");
            },
            templateUrl : 'partials/wrapper.html'
        };
    }]).
    directive('artFeaturedArtworks', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("featured artwork generated");
            },
            templateUrl : 'partials/featured-artwork-1.html'
        };
    }]).
    directive('artWrapperSlider', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("wrapper slider generated");
            },
            templateUrl : 'partials/wrapper-slider-1.html'
        };
    }]).
    directive('artWrapperGallery4Columns', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artWrapperGallery4Columns generated");
            },
            templateUrl : 'partials/wrapper-gallery-4-columns.html'
        };
    }]).
    directive('artFeaturedArtists', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artFeaturedArtists generated");
            },
            templateUrl : 'partials/featured-artists.html'
        };
    }]).
    directive('artWrapperShop', [ function () {
        return {
            restrict : 'A',
            link: function (scope, element, attrs) { // function content is optional
                console.log("artWrapperShop generated");
            },
            templateUrl : 'partials/wrapper-shop-1.html'
        };
    }]).
    directive('ngThumb', ['$window', function($window) {
        var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'A',
            template: '<canvas/>',
            link: function(scope, element, attributes) {
                if (!helper.support) return;

                var params = scope.$eval(attributes.ngThumb);

                if (!helper.isFile(params.file)) return;
                if (!helper.isImage(params.file)) return;

                var canvas = element.find('canvas');
                var reader = new FileReader();

                reader.onload = onLoadFile;
                reader.readAsDataURL(params.file);

                function onLoadFile(event) {
                    var img = new Image();
                    img.onload = onLoadImage;
                    img.src = event.target.result;
                }

                function onLoadImage() {
                    var width = params.width || this.width / this.height * params.height;
                    var height = params.height || this.height / this.width * params.width;
                    canvas.attr({ width: width, height: height });
                    canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                }
            }
        };
    }]);

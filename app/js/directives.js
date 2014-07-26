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
    }]);

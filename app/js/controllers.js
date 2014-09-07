'use strict';

/* Controllers */

angular.module('myApp.controllers', ['angularFileUpload', 'ui.bootstrap', 'ngTagsInput'])
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
    }])
    .controller('UploadCtrl', ['$scope', 'FileUploader', '$http',  function($scope, FileUploader, $http) {
        var uploader = $scope.uploader = new FileUploader({
            url: 'http://localhost:8080/v1/object'
        });

        // FILTERS
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.isHideUploadStandards = false;

        $scope.hideUploadStandards = function() {
            $scope.isHideUploadStandards = !$scope.isHideUploadStandards;
            $scope.currentTpl='artwork-details.html';
        }

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.tags = [
            { text: 'just' },
            { text: 'some' },
            { text: 'cool' },
            { text: 'tags' }
        ];
        $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
        };

    }]).controller('BrowseArtCtrl', ['$scope', function ($scope) {

    }]).controller('ArtworkDetailsCtrl', ['$scope', function ($scope) {


    }]).controller('ShopCartCtrl', ['$scope', function ($scope) {

    }]).controller('CheckoutCtrl', ['$scope', function ($scope) {

    }]).controller('LoginCtrl', ['$scope', function ($scope) {

    }]).controller('ArtistProfileCtrl', ['$scope', function ($scope) {

    }]).controller('CollectionsCtrl', ['$scope', function ($scope) {
    }]);



'use strict';

// Declare app level module
var howtc = angular.module('howtc', ['ngRoute', 'ngAutocomplete', 'uiGmapgoogle-maps']);

var options = {
    apiBaseUrl: 'http://localhost:3000/api'
};

howtc.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $location) {

        $routeProvider.when('/', {
            templateUrl: 'partials/landing.html',
            controller: 'LandingCtrl'
        });

        $routeProvider.when('/search/:searchText', {
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        });

        $routeProvider.when('/new', {
            templateUrl: 'partials/new_company.html',
            controller: 'NewCompanyCtrl'
        });

        $routeProvider.when('/company/:companyId', {
            templateUrl: 'partials/company_details.html',
            controller: 'CompanyDetailsCtrl'
        });

        $routeProvider.when('/404', {
            templateUrl: 'partials/404.html',
            controller: '404Ctrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/404'

        });

        // $locationProvider.html5Mode(true);
        
  }]);

'use strict';

// Declare app level module
var howtc = angular.module('howtc', ['ngRoute', 'ngAutocomplete', 'uiGmapgoogle-maps', 'datePicker']);

var options = {
    // apiBaseUrl: 'https://howtheycode.herokuapp.com/api'
    apiBaseUrl: 'http://192.168.1.199:3000/api'
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

        $routeProvider.when('/search', {
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

        $routeProvider.when('/new-survey/:companyId', {
            templateUrl: 'partials/new_survey.html',
            controller: 'NewSurveyCtrl'
        });

        $routeProvider.when('/404', {
            templateUrl: 'partials/404.html',
            controller: '404Ctrl'
        });

        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/404'

        });
        
  }]);

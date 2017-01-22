'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginController'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('addSubscriber', {
            url: '/addSubscriber',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/addSubscriber.html',
            controller: 'AddSubscriberController'
          })
         .state('removeSubscriber', {
            url: '/removeSubscriber',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/removeSubscriber.html',
            controller: 'RemoveSubscriberController'
          })
          .state('editSubscriber', {
            url: '/editSubscriber',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/editSubscriber.html'
          })
          .state('listSubscribers', {
            url: '/listSubscribers',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/listSubscribers.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });

  });

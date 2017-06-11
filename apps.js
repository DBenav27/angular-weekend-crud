angular.module('marvelApp', ['ngRoute'])
       .config(config);

       ////////////
       // ROUTES //
       ////////////

       config.$inject = ['$routeProvider', '$locationProvider'];
       function config (  $routeProvider,   $locationProvider  )  {
         $routeProvider
           .when('/', {
             templateUrl: 'templates/marvel/index.html',
             controller: 'marvelIndexController',
             controllerAs: 'marvelIndexCtrl'
           })
           .when('/marvel/:id', {
             templateUrl: 'templates/marvel/show.html',
             controller: 'marvelShowController',
             controllerAs: 'marvelShowCtrl'
           })
           .otherwise({
             redirectTo: '/'
           });

         $locationProvider
           .html5Mode({
             enabled: true,
             requireBase: false
           });
       }

       /*

(function () {
    'use strict';

    angular.module('politicard').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/menu');

        $stateProvider
            // Menu PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('menu', {
                url: '/menu',
                templateUrl: '../templates/menu.html',
                controller: 'MenuController'
            })

            // Menu PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('arena', {
                url: '/arena',
                templateUrl: '../templates/arena.html'
            });

    });
})();
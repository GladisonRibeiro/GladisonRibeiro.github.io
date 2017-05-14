angular.module('politicard', ['ui.router']);

angular.module('politicard').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/splashscreen');
    
    $stateProvider
        
        .state('splashscreen', {
            url: '/splashscreen',
            templateUrl: '../templates/splashscreen.html',
            controller: function($state) {
                setTimeout(function(){
                   $state.go('menu'); 
                },3500);
            }
        })
        
        .state('menu', {
            url: '/menu',
            templateUrl: '../templates/menu.html',
            controller: function($scope) {
                
            }
        })
    
        .state('arena', {
            url: '/arena',
            templateUrl: '../templates/arena.html',
            controller: 'ArenaController'
        })
    
        .state('instrucao', {
            url: '/instrucao',
            templateUrl: '../templates/instrucao.html',
        })
    
        .state('creditos', {
            url: '/creditos',
            templateUrl: '../templates/creditos.html',
            controller: function($scope) {
                $scope.equipe = [{nome:'Cleber'}, {nome:'Gladison'}, {nome:'Jefferson'}, {nome:'Keoma'}, {nome:'Pedro'}]
            }
        })
        
        .state('galeria', {
            url: '/galeria',
            templateUrl: '../templates/galeria.html',
            controller: 'GaleriaController',
            controllerAs: "vm"
        })
        
        .state('resultado', {
            url: '/resultado/:resultado',
            templateUrl: '../templates/resultado.html',
            controller: function($scope, $stateParams) {
                $scope.resultado = $stateParams.resultado;
            }
        });
    
        
});
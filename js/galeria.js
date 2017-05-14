(function () {
    'use strict';

    angular
        .module('politicard')
        .controller('GaleriaController', GaleriaController);

    GaleriaController.inject = ['$scope', 'ArenaService'];
    function GaleriaController($scope, ArenaService) {
        $scope.politicos = [];

        activate();

        ////////////////

        function activate() {
            $scope.politicos = ArenaService.getListaPoliticos();
        }
    }
})();
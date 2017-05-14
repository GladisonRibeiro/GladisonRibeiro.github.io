(function () {
    'use strict';

    angular
        .module('politicard')
        .controller('MenuController', MenuController);

    MenuController.inject = ['$state'];
    function MenuController($state) {
        var vm = this;


        activate();

        ////////////////

        function activate() { }
        function iniciarJogo() {
            $state.go('arena');
        }
    }
})();
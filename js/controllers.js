'use strict';

var motoAppCtrls = angular.module('motoAppCtrls', []);

motoAppCtrls.controller('MotoListCtrl', ['$scope', 'Moto',
    function ($scope, Moto) {
        $scope.motos = Moto.query();
        $scope.orderProp = 'model';
    }]);

motoAppCtrls.controller('MotoDetailCtrl', ['$scope', '$routeParams', 'Moto',
    function ($scope, $routeParams, Moto) {
        $scope.moto = Moto.get({motoId: $routeParams.motoId}, function (moto) {
            $scope.mainImageUrl = moto.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
let app = angular.module('app', []);
app.controller('mainController', function($scope, $http) {
  $scope.header = "Technológiák";

    $http.get('techs.json').then(function(response) {
        $scope.technologies = response.data;
    });
});
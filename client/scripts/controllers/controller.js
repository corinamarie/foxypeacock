////////////////primary app controller
foxyApp.controller('FoxyCtrl', ['$scope', '$location', function($scope, $location){

    console.log("FoxyCtrl is up");

    //change route function
    $scope.changeRoute = function(route){
        $location.path(route);
    };

}]);
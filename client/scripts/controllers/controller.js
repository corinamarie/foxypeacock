////////////////primary app controller
foxyApp.controller('FoxyCtrl', ['$scope', '$location', function($scope, $location){

    console.log("FoxyCtrl is up");

    //modal options for gallery?
    //modal options for pricing/packages?

    //change route function
    $scope.changeRoute = function(route){
        $location.path(route);
    };

}]);
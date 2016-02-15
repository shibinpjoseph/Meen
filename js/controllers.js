angular.module('meen.controllers', [])

.controller('DashCtrl', function($scope, $state, $location, $rootScope, DataService) {
    
    //console.log('DashCtrl');
    var dataPromise =  DataService.all();

    $scope.query = {
        name: '',
        language:'malayalam'
    };

    $scope.search = function(query) {

        $rootScope.query = $scope.query;
        console.log("query:", query);
        $location.url('/tab/list');


    };

    dataPromise.then(
        function(response){
        $scope.dataList = response; //assign data here to your $scope object
            console.log("Fish List", $scope.dataList);
        },
        function(error){
            console.log(error);
        }
    );

}) // Dashboard CTRL

.controller('FishlistCtrl', function($scope, $rootScope, $state, $http, $q, DataService) {
    
    //console.log('FishlistCtrl')
    var dataPromise =  DataService.all();
    $scope.orderArtist = 'fishNameMalayalam';
    
    dataPromise.then(
        function(response){
        $scope.itemList = response; //assign data here to your $scope object
        console.log('Item List', $scope.itemList);
        },
        function(error){
            console.log("errors:", error);
            $scope.pageError = error;
        }
    );
    
    $scope.clearSearch = function() {
            $scope.query.name = "";
            console.log('clicked Clear Search');
    };

    
}); // Fish controller






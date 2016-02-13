angular.module('meen.controllers', [])

.controller('DashCtrl', function($scope, $state, $location, dataService, $rootScope) {
    
     console.log('DashCtrl');

     $scope.user = {
            query: '',
            language:''
        };
    
    $scope.signIn = function(user) {

        query = $scope.user;
        console.log("query:", query);
        $location.url('/tab/list');

    };
    
    $scope.createTask = function(task) {
        console.log('click');
        $scope.tasks.push({
          title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
    };
})

.controller('FishlistCtrl', function($scope, $state, $http, $q) {
    
    console.log('FishlistCtrl')
    
    $scope.init = function(){

        $scope.query = query;
        console.log("queryWW:", query);

        $scope.getImages()

        .then(function(result){
            console.log("Fishes:", result);
            $scope.allfish = result.allfish;
         }, function(status){
            console.log("errors:", status);
            $scope.pageError = status;
        })
    
    }
    

    $scope.getImages = function(){
        
        var defer = $q.defer();
        
        $http.get('fish1.json?callback=JSON_CALLBACK')
        
            .success(function (result) {
                defer.resolve(result)
            })
            .error(function(status, err){
                defer.reject(status)
            })
        
        return defer.promise;
    
    }
    
    $scope.orderArtist = 'fishNameMalayalam';
    
    $scope.clearSearch = function() {
            $scope.query.query = "";
            console.log('click');
    };
    
    $scope.init();
    
});






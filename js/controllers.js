angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
    
    console.log('DashCtrl');
    
    $scope.user = {
        username: '',
        language:''
    };
    
    $scope.signIn = function(form) {
        console.log(form);
        if(form.$valid) {
            console.log('Sign-In', $scope.user.username);
            $state.go('tab.account');
        }
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

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})



.controller('AccountCtrl', function($scope, $state, $http, $q) {
    
    console.log('AccountCtrl')
    
    $scope.init = function(){
    
        $scope.getImages()
        //$scope.clearSearch();
        .then(function(result){
            //success
            console.log("images:", result);
            $scope.allfish = result.allfish;
        
        }, function(status){
            //err
            console.log("errors:", status);
            $scope.pageError = status;
        })
        
       // $scope.clearSearch()
        
        
    
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
    
    $scope.fish = {search: ''}
    
    $scope.clearSearch = function() {
            $scope.fish.search = '';
            console.log('click');
    };
    
    $scope.init();
    
});






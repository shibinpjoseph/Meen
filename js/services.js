angular.module('meen.services', [])

.factory('forecast', ['$http', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
      .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });
}])

.factory('DataService', function($http, $q) {
    var dataList = function () {
    var deffered = $q.defer();
        $http({
            method: 'GET',
            url: 'itemList.json'
        })
        .success(function (data, status, headers, config) {
            deffered.resolve(data);
        })
        .error(function (data, status, headers, config) {
            deffered.reject(status);
        });

    return deffered.promise;

    };

    return {
        all: dataList
    }
})





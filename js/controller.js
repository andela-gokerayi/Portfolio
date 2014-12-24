var myPortfolio = angular.module('myPortfolio', []);

myPortfolio.factory('githubService', ['$http', function($http){
  return {
    getRepos: function getUser(name, callback) {
      var myUrl = 'https://api.github.com/users/' + name + '/repos';
      $http.get(myUrl)
        .success(function (data) {
      callback(data);
      })
        .error(function (e) {
        console.log(e)
      });
    }
  };
}])


myPortfolio.controller('portfolioCtrl', ['$scope', 'githubService', function($scope, githubService){
  $scope.repos = [];
  $scope.name = 'andela-gokerayi';
  githubService.getRepos($scope.name, function(data) {
    angular.forEach(data, function(repo, index) {
      repo.imgSrc = "https://raw.githubusercontent.com/andela-gokerayi/" + repo.name +"/master/screenshot.png";
    });
    // $scope.images = 
    $scope.repos = data;
    console.log($scope.repos);
  })
  $scope.ghPage = 'http://' + $scope.name + '.github.io/';
 
}])
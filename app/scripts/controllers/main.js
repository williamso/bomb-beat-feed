'use strict';

angular.module('bombBeatsFeedApp')
  .controller('MainCtrl', function ($scope, $http) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

    //var url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json&callback=JSON_CALLBACK&q=http://bombbeats.com/feed/";
    var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fbombbeats.com%2F%22%20and%20compat%3D%22html5%22%20and%20xpath%3D'%2F%2Farticle%5Bcontains(%40class%2C%22post%22)%5D%20'&format=json&diagnostics=true&callback=JSON_CALLBACK"
    $http.jsonp(url).
      success(function(data, status, headers, config) {
        $scope.feed = {
          title: 'BombBeats',
          //items: data.responseData.feed.entries
          items: data.query.results.article
        };
      }).
      error(function(data, status, headers, config) {
        console.error('Error fetching feed:', data);
      });

  });

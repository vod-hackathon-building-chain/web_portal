'use strict'
var app = angular.module('buildingChain',
        [
    'ngRoute','ngFileUpload','ngCookies','oc.lazyLoad','oitozero.ngSweetAlert',
]).run(function($rootScope , $location,$http) {

  $rootScope.goTopage = function(PageName){
    $location.path(PageName);
  }
    $rootScope.backendURL = $location.protocol() + "://" + $location.host() + ":"+ $location.port() +"/api/" ;
    $rootScope.currentTab ="home";

    $http.defaults.headers.post['Content-Type'] = 'application/json';

})

app.config(['$httpProvider', '$compileProvider', function ($httpProvider, $compileProvider) {
  $httpProvider.interceptors.push('APIInterceptor');
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);


app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
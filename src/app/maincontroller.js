'use strict';

angular.module('httpSimpleInterceptor')

  .controller('mainCtrl', function ($http, $scope) {
    $scope.sent = {};

    $http.installInterceptor(function (config) {
      config.headers = config.headers || {};
      config.headers.MySuperHeader = 'IT_WORKS';
      return config;
    });

    var config = {
      method: 'POST',
      url: 'http://localhost:8080/',
      headers: {
        'Content-Type': undefined
      },
      data: {
        test: 'test'
      }
    };

    $http(config).then(
      function (request) {
        $scope.sent = request.config;
      },
      function (error) {
        console.log('request error:');
        console.log(error);
      }
    );
  })
;

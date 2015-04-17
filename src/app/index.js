'use strict';

angular.module('httpSimpleInterceptor', [])

  .config(function ($provide) {
    $provide.decorator('$http', function ($delegate) {
      // Применение "моих" интерсепторов при вызове $http(config);
      var myHttp = function () {
        for (var i = 0; i < myHttp.myInterceptors.length; i++) {
          arguments[0] = myHttp.myInterceptors[i](arguments[0]);
        }
        return $delegate.apply($delegate, arguments);
      };

      // Массив "моих" интерсепторов
      myHttp.myInterceptors = [];

      // Регистрация "моих" интерсепторов
      myHttp.installInterceptor = function (myInterceptor) {
        myHttp.myInterceptors.push(myInterceptor);
      };

      // Простое копирование остальных методов $http
      Object.keys($delegate).filter(function (key) {
        return (typeof $delegate[key] === 'function');
      }).forEach(function (key) {
        myHttp[key] = function () {
          return $delegate[key].apply($delegate, arguments);
        };
      });

      // Возвращаю "мою" реализацию $http
      return myHttp;
    });
  })
;

/**
 * Created by vasa on 11.11.13.
 * cource controller
 */

'use strict';

var pages = function ($routeParams) {
  return "page-" + encodeURIComponent($routeParams.pageNum) + ".html";
};
pages.$inject = ['$routeParams'];

angular.module('course', ['ngRoute'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/page/:pageNum', {
          templateUrl : pages,
          controller  : 'PageCtrl'
        })
        .otherwise({
          redirectTo : '/page/1'
        })
    }]
  )
  .run(['$rootScope', 'courseName', 'razdelName','sectionName', 'pageCount',
    function ($rootScope, courseName, razdelName, sectionName, pageCount) {
      $rootScope.courseName = courseName;
      $rootScope.razdelName = razdelName;
      $rootScope.sectionName = sectionName;
      $rootScope.pageCount = pageCount;

      $rootScope.$on('$routeChangeSuccess', function (ev, current) {
        GoToPageSafe(parseInt(current.params.pageNum, 10))
      })
    }
  ]);

/**
 * Константы, необходимые для работы
 */
angular.module('course').value('courseName', "Электронный курс");

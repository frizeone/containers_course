/**
 * Created by vasa on 11.11.13.
 * Page controller
 */

PageCtrl = ['$scope', '$routeParams', '$rootScope'];
PageCtrl.push(function ($scope, $routeParams, $rootScope) {
  $rootScope.currentPage = parseInt($routeParams.pageNum, 10);
  $scope.$parent.currentPage = $rootScope.currentPage;
  $scope.currentPage = $rootScope.currentPage;
});

angular.module('course').controller('PageCtrl', PageCtrl);

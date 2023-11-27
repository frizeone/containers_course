/**
 * Created by vasa on 11.11.13.
 * Main controller
 */

MainCtrl = ['$scope', '$rootScope', '$window', '$location', 'courseName', 'pageCount'];
MainCtrl.push(function ($scope, $rootScope, $window, $location, courseName, pageCount) {
    $scope.courseName = courseName;
    $scope.pageCount = pageCount;

    $scope.close_window = function (url) {
        if (nCompleted != gnMaxPages)
        {
            if  (confirm("Вы прошли не все слайды раздела. Вы действительно хотите завершить работу с разделом курса?"))
            {
                SCOSessionTerminatingHandler();
                var newWindow = $window.open('', '_self', ''); //open the current window
                window.close(url);
            }
        }
        else
        {
            SCOSessionTerminatingHandler();
            var newWindow = $window.open('', '_self', ''); //open the current window
            window.close(url);
        }
    };

    $scope.isInteraction = function () {
        return InteractionFlag.some(function (item) {
            return item == $scope.currentPage;
        });
    };

    $scope.isVisited = function (page) {
        return gaPagesCompleted[page.id - 1]
    };

    $scope.isFirst = function () {
        return $scope.currentPage == 1
    };

    $scope.isLast = function () {
        return $scope.currentPage == $scope.pageCount
    };

    $scope.previousPageURL = function () {
        return '#/page/' + ($scope.currentPage - 1)
    };

    $scope.previousPage = function () {
        return '#/page/' + ($scope.currentPage - 1)
    };

    $scope.$watch('currentPage', function (next, prev) {
        var pages = [];
        var right = Math.min($scope.pageCount, $scope.pageCount);
        var left = Math.max(1, 1);

        for (var i = left; i <= right; i++) {
            pages.push({
                id: i,
                active: i == next,
                name: i
            })
        }

        $scope.pages = pages
    });
});

angular.module('course').controller('MainCtrl', MainCtrl);

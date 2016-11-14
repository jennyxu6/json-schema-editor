angular
.module('app')
.directive('tree', function() {
    return {
        restrict: 'E',
        controller: 'MyTreeController',
        controllerAs: 'tree',
        templateUrl: 'app/src/components/tree/tree.html',
        scope: {}
    };
});
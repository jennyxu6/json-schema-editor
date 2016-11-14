angular
.module('app')
.directive('detail', function() {
    return {
        restrict: 'E',
        controller: 'DetailController',
        controllerAs: 'detail',
        templateUrl: 'app/src/components/detail/detail.html',
        scope: {
            schema: '=',
            uischema: '='
        }
    };
});
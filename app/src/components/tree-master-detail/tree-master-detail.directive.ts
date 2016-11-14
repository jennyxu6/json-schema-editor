angular
.module('app')
.directive('treeMasterDetail', function() {
    return {
        restrict: 'E',
        controller: function(){},
        templateUrl: 'app/src/components/tree-master-detail/tree-master-detail.html',
        scope: {
            schema: '=',
            uischema: '='
        }
    };
});
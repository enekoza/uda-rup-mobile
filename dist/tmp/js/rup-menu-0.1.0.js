angular.module('ui.rup.menu',[]);

angular.module('ui.rup.menu').directive('rupMenu', rupMenuDirective);


angular.module('ui.rup.menu').directive('rupMenuPanel', ['rupPanelDirective', rupMenuPanelDirective]);



function rupMenuDirective () {
    var directive = {
        restrict: 'EA',
        templateUrl: 'rup/menu/rup-menu.tpl.navbar.html',
        scope: {
            opttemplate: '@'
        }
    };

    return directive;
}

                                        
function rupMenuPanelDirective (rupPanelDirective) {
    var originalConfig,
        rupMenuPanelConfig,
        fncConfigLink, 
        compileObj;
    
    originalConfig = angular.extend({}, rupPanelDirective[0]);

    rupMenuPanelConfig = {
        controller:"MenuPanelController", 
        compile: compileRupMenuPanel, 
        name: "rupMenuPanel",
        scope: false
    };

    fncConfigLink = originalConfig.link;
    
    
    return angular.extend({}, originalConfig, rupMenuPanelConfig);
    
    
    // Implementacion
    
    function compileRupMenuPanel (scope, element, attr, transclusion) {
        return   {
            pre: function preLink(scope, iElement, iAttrs, controller) { 
                fncConfigLink(scope, iElement, iAttrs);
            },
            post: function postLink(scope, iElement, iAttrs, controller) { 
                scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    event.currentScope.hidePanel();
                });
            }
        };
    }
    
}

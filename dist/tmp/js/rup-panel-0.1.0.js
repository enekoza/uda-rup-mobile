/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.rup.panel', ['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside'])


angular.module('ui.rup.panel').provider('$rupPanel', rupPanelProvider);

angular.module('ui.rup.panel').directive('rupPanel', rupPanelDirective);


function rupPanelProvider(){

    var defaults = this.defaults = {
    };

    this.$get = ["$aside", function($aside) {

      function RupPanelFactory(config) {

        var $rupPanel = {};

        // Common vars
        var options = angular.extend({}, defaults, config);

        $rupPanel = $aside(options);

        return $rupPanel;

      }

      return RupPanelFactory;

    }];
}


rupPanelDirective.$inject = ['bsAsideDirective'];

function rupPanelDirective(bsAsideDirective){
    return angular.extend({}, bsAsideDirective[0],{});
}
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.rup.feedback', ['ui.bootstrap.alert']);

angular.module('ui.rup.feedback').directive('rupFeedback', RupFeedbackDirective);
angular.module('ui.rup.feedback').directive('hideDelay', HideDelayDirective);

RupFeedbackDirective.$inject = ['alertDirective'];                                   
HideDelayDirective.$inject = ['$timeout'];   
                                            
function RupFeedbackDirective(alertDirective) {
  return angular.extend({}, alertDirective[0],{});
}



function HideDelayDirective($timeout) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
    	
    if (attrs.hideDelay!=="false"){
	      $timeout(function(){
	    	  alertCtrl.close();
	      }, parseInt(attrs.hideDelay, 10));
	    }
    }
  };
}


/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.rup.accordion', ["ui.bootstrap.accordion"])

.directive('rupAccordion', function (accordionDirective) {
  return angular.extend({}, accordionDirective[0],{});
})

.directive('rupAccordionGroup', function (accordionGroupDirective) {
  return angular.extend({}, accordionGroupDirective[0],{});
})

.directive('rupAccordionHeading', function (accordionHeadingDirective) {
  return angular.extend({}, accordionHeadingDirective[0],{});
});





/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module("ui.rup", ["ngAnimate","ui.rup.feedback", "ui.rup.message", "ui.rup.panel", "ui.rup.accordion", 'ui.rup.menu','ui.rup.language']);




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


angular.module("ui.rup.language",[]);

angular.module("ui.rup.language").directive("rupLanguage", rupLanguage);


function rupLanguage(){
    
    var directive = {
        restrict: 'EA',
        templateUrl: 'rup/language/rup-menu.tpl.view.html',
        controller: RupLanguageController,
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated
    };

    return directive;
    
};

RupLanguageController.$inject = ['$scope', '$translate', '$rupLanguage'];

function RupLanguageController($scope, $translate, $rupLanguage){
    
    var vm = this;
    
    vm.availableLanguages = $rupLanguage.availableLanguages;
    
    vm.currentLanguage = $translate.use();
    
    vm.changeLanguage = changeLanguage;
    
    function changeLanguage(elem){
         $translate.use(elem.lang);
         vm.currentLanguage = elem;
    }
    
}
angular.module("ui.rup.language").provider('$rupLanguage',  RupLanguageProvider);

RupLanguageProvider.$inject = ['$translateProvider'];

function RupLanguageProvider($translateProvider) {

    var availableLanguages = ['es','eu'],
    defaultLanguage = 'es';
    
    var rupLanguageProvider = {
        setAvailableLanguages:function setAvailableLanguages (languages){
            availableLanguages = languages;
        },
        setDefaultLanguage: function setDefaultLanguage (language){
            defaultLanguage = language;
            $translateProvider.preferredLanguage(language);
        },
        
        $get: ['$translate', function ($translate){
            
            var $rupLanguage = {
                availableLanguages : availableLanguages,
                defaultLanguage : defaultLanguage
            };

            return $rupLanguage;
            
        }]
        
    };
    
    return rupLanguageProvider;
    
};
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

angular.module("ui.rup.menu").controller("MenuPanelController", MenuPanelController);

MenuPanelController.$inject = ['$scope'];

function MenuPanelController ($scope){
    
    $scope.hidePanel = function(){
        this.$$childHead.$hide();
    };
    
}
           
/**
 * RUP Message
 
 * @namespace Rup
 */
(function() {
    angular.module('ui.rup.message', ['mgcrea.ngStrap.modal'])
    .provider('$rupMessage', rupMessageProvider);
              
              
    function rupMessageProvider(){

        var $rupMessageProvider = {
                options:{
                    placement: 'center',
                    backdrop:false,
                    show: true
                },
                optionsError:{
                    template: 'rup/message/rup-message.tpl.error.html'
                },
                optionsSuccess:{
                    template: 'rup/message/rup-message.tpl.success.html'
                },
                optionsWarning:{
                    template: 'rup/message/rup-message.tpl.warning.html'
                },
                optionsInfo:{
                    template: 'rup/message/rup-message.tpl.info.html'
                },
                optionsConfirm:{
                    template: 'rup/message/rup-message.tpl.confirm.html'
                },
                $get: ['$modal', function ($modal){

                    var $rupMessage = angular.copy($modal);

                    $rupMessage.showError = function(rupMessageOptions){
                        rupMessageOptions = angular.extend({}, $rupMessageProvider.options, $rupMessageProvider.optionsError, rupMessageOptions);
                        return $rupMessage(rupMessageOptions);
                    };

                    $rupMessage.showSuccess = function(rupMessageOptions){
                        rupMessageOptions = angular.extend({}, $rupMessageProvider.options, $rupMessageProvider.optionsSuccess, rupMessageOptions);
                        return $rupMessage(rupMessageOptions);
                    };

                    $rupMessage.showWarning = function(rupMessageOptions){
                        rupMessageOptions = angular.extend({}, $rupMessageProvider.options, $rupMessageProvider.optionsWarning, rupMessageOptions);
                        return $rupMessage(rupMessageOptions);

                    };

                    $rupMessage.showInfo = function(rupMessageOptions){
                        rupMessageOptions = angular.extend({}, $rupMessageProvider.options, $rupMessageProvider.optionsInfo, rupMessageOptions);
                        return $rupMessage(rupMessageOptions);
                    };

                    $rupMessage.showConfirm = function(rupMessageOptions){
                        rupMessageOptions = angular.extend({}, $rupMessageProvider.options, $rupMessageProvider.optionsConfirm, rupMessageOptions);
                        return $rupMessage(rupMessageOptions);
                    };


                    return $rupMessage;

                }]
        };

        return $rupMessageProvider

    }
    
})();



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
angular.module('rup.templates', ['rup/language/rup-menu.tpl.view.html', 'rup/menu/rup-menu.tpl.navbar.html', 'rup/menu/rup-menu.tpl.panel.html', 'rup/message/rup-message.tpl.confirm.html', 'rup/message/rup-message.tpl.error.html', 'rup/message/rup-message.tpl.info.html', 'rup/message/rup-message.tpl.success.html', 'rup/message/rup-message.tpl.warning.html']);

angular.module("rup/language/rup-menu.tpl.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/language/rup-menu.tpl.view.html",
    "<div class=\"language\" >\n" +
    "     <a ng-repeat=\"lang in vm.availableLanguages\"  ng-click=\"vm.changeLanguage(this)\" href=\"#\">{{lang}}<span ng-if=\"$last==false\">|</span></a>   \n" +
    "    \n" +
    "</div>");
}]);

angular.module("rup/menu/rup-menu.tpl.navbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/menu/rup-menu.tpl.navbar.html",
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "     \n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button rup-menu-panel data-animation=\"am-slide-left\" template=\"rup/menu/rup-menu.tpl.panel.html\" data-content=\"{{opttemplate}}\"  data-title=\"\" data-placement=\"left\" type=\"button\"  class=\"navbar-toggle collapsed\"  data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" id=\"menuPanel\" >\n" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <a class=\"navbar-brand rup-navbar-brand\" >{{$root.pageTitle  | translate}}</a>\n" +
    "          <a class=\"navbar-brand rup-navbar-home\" href=\"/x21aMobileWar/\">{{'shared.menu.inicio' | translate}}</a>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\"  ng-include=\"opttemplate\"></div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("rup/menu/rup-menu.tpl.panel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/menu/rup-menu.tpl.panel.html",
    "<div class=\"aside\" tabindex=\"-1\" role=\"dialog\">\n" +
    "  <div class=\"aside-dialog\">\n" +
    "    <div class=\"aside-content\">\n" +
    "      <div class=\"aside-header aside-menu-header\" >\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "        <h4 class=\"aside-title\"></h4>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"aside-body aside-menu-body\" >\n" +
    "        <img class=\"user-icon\" src=\"assets/img/user-icon.png\" alt=\"User icon\"/>\n" +
    "          <div ng-include=\"'app/shared/language/languageView.html'\"></div>\n" +
    "        <div ng-include=\"content\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("rup/message/rup-message.tpl.confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/message/rup-message.tpl.confirm.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\" >\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\" ng-show=\"title\">\n" +
    "          <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "          <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\"></span>&nbsp;{{title}}</h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\" ng-bind=\"content\"></div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$hide()\">Aceptar</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\">Cancelar</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("rup/message/rup-message.tpl.error.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/message/rup-message.tpl.error.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\" >\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header alert-danger\" ng-show=\"title\">\n" +
    "		      <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "		  <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>&nbsp;{{title}}</h4>\n" +
    "		    </div>\n" +
    "		    <div class=\"modal-body\" ng-bind=\"content\"></div>\n" +
    "		    <div class=\"modal-footer\">\n" +
    "		      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$hide()\">Aceptar</button>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("rup/message/rup-message.tpl.info.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/message/rup-message.tpl.info.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\" >\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header alert-info\" ng-show=\"title\">\n" +
    "		      <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "		  <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>&nbsp;{{title}}</h4>\n" +
    "		    </div>\n" +
    "		    <div class=\"modal-body\" ng-bind=\"content\"></div>\n" +
    "		    <div class=\"modal-footer\">\n" +
    "		      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$hide()\">Aceptar</button>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "	  ");
}]);

angular.module("rup/message/rup-message.tpl.success.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/message/rup-message.tpl.success.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\" >\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header alert-success\" ng-show=\"title\">\n" +
    "		      <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "		  <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>&nbsp;{{title}}</h4>\n" +
    "		    </div>\n" +
    "		    <div class=\"modal-body\" ng-bind=\"content\"></div>\n" +
    "		    <div class=\"modal-footer\">\n" +
    "		      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$hide()\">Aceptar</button>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "	  ");
}]);

angular.module("rup/message/rup-message.tpl.warning.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rup/message/rup-message.tpl.warning.html",
    "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\" >\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header alert-warning\" ng-show=\"title\">\n" +
    "		      <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n" +
    "		  <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-remove-sign\" aria-hidden=\"true\"></span>&nbsp;{{title}}</h4>\n" +
    "		    </div>\n" +
    "		    <div class=\"modal-body\" ng-bind=\"content\"></div>\n" +
    "		    <div class=\"modal-footer\">\n" +
    "		      <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$hide()\">Aceptar</button>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "	  ");
}]);

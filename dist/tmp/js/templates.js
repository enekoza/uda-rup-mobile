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

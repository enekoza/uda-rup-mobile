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
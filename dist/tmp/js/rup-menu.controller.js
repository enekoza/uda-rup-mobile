angular.module("ui.rup.menu").controller("MenuPanelController", MenuPanelController);

MenuPanelController.$inject = ['$scope'];

function MenuPanelController ($scope){
    
    $scope.hidePanel = function(){
        this.$$childHead.$hide();
    };
    
}
           
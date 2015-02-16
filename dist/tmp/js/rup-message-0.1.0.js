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



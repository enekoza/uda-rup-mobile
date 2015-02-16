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
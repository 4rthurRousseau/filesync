angular.module('FileSync').config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('fr', {
    NO_HISTORY: '... aucun historique... mais que fait le prof !'
  });

  $translateProvider.translations('en', {
    NO_HISTORY: '... no history... what does the teacher do !'
  });

  $translateProvider.preferredLanguage('fr');
}]);
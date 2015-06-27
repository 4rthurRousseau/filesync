'use strict';
angular.module('FileSync').controller('TranslationCtrl', ['$scope', '$translate', 
	function ($scope, $translate) {
	    $scope.toggleLanguage = function () {
    		$translate.use(($translate.use() === 'fr') ? 'en' : 'fr');
    		console.log($translate.use());
  		};
  	}
]);

var app = angular.module('icd-tool',['ui.router', 'ngMaterial', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('form', {
			url: '/form',
			templateUrl: 'partials/icd-form.html' 
		});
}]);
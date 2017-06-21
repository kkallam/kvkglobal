var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
	$locationProvider.hashPrefix('');
	//$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})

		.state('pase', {
			url: '/pase',
			templateUrl: 'partial-pase.html'
		})

		.state('pase.createPase', {
			url: '/createPase',
			templateUrl: 'partial-pase-create.html',
			controller: 'createPaseCtrl'
		})
		
		.state('pase.viewPase', {
			url: '/viewPase',
			templateUrl: 'partial-pase-view.html',
			controller: 'viewPaseCtrl'
		})

		.state('open', {
			url: '/open',
			templateUrl: 'partial-open.html'
		})

		.state('events', {
			url: '/events',
			templateUrl: 'partial-events.html'
		})

		.state('contactus', {
			url: '/contactus',
			templateUrl: 'partial-contactus.html'
		});
});

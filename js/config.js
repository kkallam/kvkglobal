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

		// PASE Meeting Details Section
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

		// OPEN Meeting Details Section
		.state('open', {
			url: '/open',
			templateUrl: 'partial-open.html'
		})
			.state('open.createOpen', {
				url: '/createOpen',
				templateUrl: 'partial-open-create.html',
				controller: 'createOpenCtrl'
			})
			
			.state('open.viewOpen', {
				url: '/viewOpen',
				templateUrl: 'partial-open-view.html',
				controller: 'viewOpenCtrl'
			})

		.state('events', {
			url: '/events',
			templateUrl: 'partial-events.html'
		})
			.state('events.createEvents', {
				url: '/createEvents',
				templateUrl: 'partial-events-create.html'
				// controller: 'createOpenCtrl'
			})
			
			.state('events.viewEvents', {
				url: '/viewEvents',
				templateUrl: 'partial-events-view.html'
				// controller: 'viewOpenCtrl'
			})
			.state('events.goGetters', {
				url: '/goGetters',
				templateUrl: 'partial-events-goGetters.html'
			})

		.state('contactus', {
			url: '/contactus',
			templateUrl: 'partial-contactus.html'
		});
});

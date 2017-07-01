;(function () {

	angular.module('app')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/main');

			$stateProvider.state('main', {
				url: '/main',
				templateUrl: 'main.html'
			});

			$stateProvider.state('profile', {
				url: '/profile',
				templateUrl: 'profile.html'
			});

			$stateProvider.state('about', {
				url: '/about',
				templateUrl: 'about.html',
				skipPreFetchingTemplate: true
			});

			$stateProvider.state('projects', {
				url: '/projects',
				templateUrl: 'projects.html'
			});

			$stateProvider.state('profileDetails', {
				url: '/profile/details',
				templateUrl: 'profile-details.html'
			});

			$stateProvider.state('projectsDetails', {
				url: '/projects/details',
				templateUrl: 'projects-details.html'
			});

		}]);

})();
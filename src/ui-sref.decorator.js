;(function () {

	angular.module('app')
		.config(['$provide', function ($provide) {
			$provide.decorator('uiSrefDirective', ['$delegate', 'TemplateLoader', function ($delegate, templateLoader) {
				var directive = $delegate[0];
				var compile = directive.compile;

				directive.compile = function (tElement, tAttrs) {
					templateLoader.load(tAttrs.uiSref);
					return compile(tElement, tAttrs);
				};

				return $delegate;
			}]);
		}]);


	angular.module('app')
		.service('TemplateLoader', ['$state', '$templateCache', '$http', function ($state, $templateCache, $http) {

			var states = $state.get();

			this.load = function (stateName) {
				var templateUrl = getTemplateUrl(stateName);
				if (templateUrl && !$templateCache.get(templateUrl)) {
					$http.get(templateUrl).then(function (response) {
						$templateCache.put(templateUrl, response.data);	
					});
				}
			};

			function getTemplateUrl (stateName) {
				return (states.filter(findState(stateName))[0] || {}).templateUrl;
			}

			function findState (stateName) {
				return function (state) {
					return state.name === stateName && !!state.templateUrl && !state.skipPreFetchingTemplate;
				};
			}

		}]);

})();
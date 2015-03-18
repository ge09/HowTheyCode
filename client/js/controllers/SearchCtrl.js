
howtc.controller('SearchCtrl', ['$scope', 'CompanyService', '$routeParams', '$window',
	function ($scope, CompanyService, $routeParams, $window) {

		var findCompanies = function(searchText) {
			CompanyService.findCompanies(searchText).success(function(data) {
				$scope.companies = data;
			}).error(function(error) {
				console.log(error);
			});
		};

		var getAllCompanies = function(searchText) {
			CompanyService.getAllCompanies().success(function(data) {
				$scope.companies = data;
			}).error(function(error) {
				console.log(error);
			});
		};

		$scope.goBack = function() {
			$window.history.back();
		};

		var init = function() {
			if ($routeParams.searchText) {
				findCompanies($routeParams.searchText);
			} else {
				getAllCompanies();
			}
		};

		init();
}]);
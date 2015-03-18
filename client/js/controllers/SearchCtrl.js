
howtc.controller('SearchCtrl', ['$scope', 'CompanyService', '$routeParams', '$window',
	function ($scope, CompanyService, $routeParams, $window) {

		var findCompanies = function(searchText) {
			$scope.loading = true;
			CompanyService.findCompanies(searchText).success(function(data) {
				$scope.companies = data;
				$scope.loading = false;
			}).error(function(error) {
				console.log(error);
				$scope.loading = false;
			});
		};

		var getAllCompanies = function(searchText) {
			$scope.loading = true;
			CompanyService.getAllCompanies().success(function(data) {
				$scope.companies = data;
				$scope.loading = false;
			}).error(function(error) {
				console.log(error);
				$scope.loading = false;
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
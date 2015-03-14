
howtc.controller('SearchCtrl', ['$scope', 'CompanyService', '$routeParams', '$window',
	function ($scope, CompanyService, $routeParams, $window) {

		var findCompanies = function(searchText) {
			CompanyService.findCompanies(searchText).success(function(data) {
				$scope.companies = data;
			}).error(function(error) {
				console.log(error);
			});
		};

		$scope.goBack = function() {
			$window.history.back();
		};
    

		findCompanies($routeParams.searchText);

}]);
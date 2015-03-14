
howtc.controller('SearchCtrl', ['$scope', 'CompanyService', '$routeParams',
	function ($scope, CompanyService, $routeParams) {

		var findCompanies = function(searchText) {
			CompanyService.findCompanies(searchText).success(function(data) {
				$scope.companies = data;
			}).error(function(error) {
				console.log(error);
			});
		};

		findCompanies($routeParams.searchText);

}]);
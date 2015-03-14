
howtc.controller('SearchCtrl', ['$scope', 'CompanyService', function ($scope, CompanyService) {

	var getAllCompanies = function() {
		CompanyService.getAllCompanies().success(function(data) {
			$scope.companies = data;
		}).error(function(error) {
			console.log(error);
		});
	};

	getAllCompanies();

}]);
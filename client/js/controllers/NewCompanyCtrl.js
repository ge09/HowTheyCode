
howtc.controller('NewCompanyCtrl', ['$scope', 'CompanyService',
	function ($scope, CompanyService) {
		$scope.company = {
			name: ""
		};

		$scope.saveCompany = function(){
			CompanyService.saveCompany($scope.company)
				.success(function(data) {
					console.log(data);
					$scope.company.name = "";
					//TODO - go to company's details view
				}).error(function() {
					console.log(error);
				});
		};
	
}])
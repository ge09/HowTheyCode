
howtc.controller('NewCompanyCtrl', ['$scope', '$window', 'CompanyService',
	function ($scope, $window, CompanyService) {
		$scope.company = {
			name: ""
		};

		$scope.saveCompany = function(){
			CompanyService.saveCompany($scope.company)
				.success(function(data) {
					console.log(data);
					$scope.company.name = "";
					$window.location.href = '#/' + data._id;
				}).error(function() {
					console.log(error);
				});
		};
	
}])
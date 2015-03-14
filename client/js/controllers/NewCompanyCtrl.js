
howtc.controller('NewCompanyCtrl', ['$scope', '$window', 'CompanyService',
	function ($scope, $window, CompanyService) {
		$scope.company = {
			name: ""
		};

		$scope.saveCompany = function(){
			$scope.company.locationData = {
				lat: $scope.locationRaw.geometry.location.k,
				lon: $scope.locationRaw.geometry.location.D
			};
			CompanyService.saveCompany($scope.company)
				.success(function(data) {
					console.log(data);
					$scope.company.name = "";
					$window.location.href = '#/company/' + data._id;
				}).error(function() {
					console.log(error);
				});
		};
	
}])
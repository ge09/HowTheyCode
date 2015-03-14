howtc.controller('CompanyDetailsCtrl', ['$scope', '$routeParams', 'CompanyService', '$window',
	function ($scope, $routeParams, CompanyService, $window) {

		var getCompany = function(id) {
			CompanyService.getCompany(id)
				.success(function(data) {
					console.log(data);
					$scope.company = data;
					setMap($scope.company.locationData.lat, $scope.company.locationData.lon);
				})
				.error(function(err) {
					console.log(error);
					$window.location.href = '#/404';
				});
		};

		var setMap = function(lat, lon) {
			$scope.map = { center: { latitude: lat, longitude: lon }, zoom: 16 };
			$scope.marker = {
			    id: 0,
			    coords: {
					latitude: lat,
				    longitude: lon
			    }
			};
		};

		$scope.goBack = function() {
			$window.history.back();
		};
    

		getCompany($routeParams.companyId);

}]);
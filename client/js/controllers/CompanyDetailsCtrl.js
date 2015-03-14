howtc.controller('CompanyDetailsCtrl', ['$scope', '$routeParams', 'CompanyService', '$window',
	function ($scope, $routeParams, CompanyService, $window) {

		var getCompany = function(id) {
			CompanyService.getCompany(id)
				.success(function(data) {
					$scope.company = data;
				})
				.error(function(err) {
					console.log(error);
					$window.location.href = '#/404';
				});
		};

		getCompany($routeParams.companyId);

}]);
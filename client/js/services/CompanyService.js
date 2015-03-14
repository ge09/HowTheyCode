
howtc.service('CompanyService', ['$http',
	function ($http) {
		var companyApi = options.apiBaseUrl + '/companies'

		return {
			getAllCompanies: function() {
				return $http.get(companyApi);
			},
			saveCompany: function(company) {
				return $http.post(companyApi, company);
			}
		}
}]);
howtc.controller('NewSurveyCtrl', ['$scope', '$routeParams', 'CompanyService', 'SurveyQuestionsService',
	function ($scope, $routeParams, CompanyService, SurveyQuestionsService) {

		$scope.survey = {
			companyId: $routeParams.companyId,
			answers: [false, false, false, false, false, false, false, false,  false, false, false, false]
		};

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

		var getQuestions = function() {
			$scope.questions = SurveyQuestionsService.getQuestions();
		};

		$scope.saveSurvey = function() {
			console.log($scope.survey);

			CompanyService.addSurveyToCompany($scope.survey)
				.success(function(data) {
					//TODO - make stuff happen
				}).error(function(err) {
					console.log(err);
				});
		};

		getCompany($routeParams.companyId);
		getQuestions();

}]);
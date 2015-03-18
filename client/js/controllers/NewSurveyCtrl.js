howtc.controller('NewSurveyCtrl', ['$scope', '$routeParams', 'CompanyService', 'SurveyQuestionsService', '$window',
	function ($scope, $routeParams, CompanyService, SurveyQuestionsService, $window) {

		$scope.captcha = false;

		$scope.survey = {
			companyId: $routeParams.companyId,
			answers: [false, false, false, false, false, false, false, false,  false, false, false, false],
			date: new Date()
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
					$window.history.back();
				}).error(function(err) {
					console.log(err);
				});
		};

		$scope.goBack = function() {
			$window.history.back();
		};

		getCompany($routeParams.companyId);
		getQuestions();

}]);
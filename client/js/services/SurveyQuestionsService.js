howtc.service('SurveyQuestionsService', [
	function () {

		return {
			getQuestions: function() {
					return [
					'Do you use source control?',
					'Can you make a build in one step?',
					'Do you make daily builds?',
					'Do you have a bug database?',
					'Do you fix bugs before writing new code?',
					'Do you have an up-to-date schedule?',
					'Do you have a spec?',
					'Do programmers have quiet working conditions?',
					'Do you use the best tools money can buy?',
					'Do you have testers as part of the team?',
					'Do you have interview candidates write code?',
					'Do you do hallway usability testing?'
				]
			}
		};
	
}]);
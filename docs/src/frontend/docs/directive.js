var angular = require('angular'),
	_ = require('lodash');

module.exports = [function() {
	return {
		restrict: 'E',
		template: require('./template.html'),
		link: function($scope, element, attributes) { },
		controller:  ['$scope', function($scope) {
			$scope.documentID = 'OPS / VOLS / ADVOCACY / TACTICS / PG & E / 1';
		}]
	};
}];
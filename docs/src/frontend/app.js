var angular = require('angular');

module.exports = angular.module('wswa-docs', ['ngSanitize'])

	.directive('docs', 	require('./docs/directive'))

	.directive('identifier', require('./docs/identifier/directive'))

	.filter('identifier', require('./docs/identifier/filter'))
var angular = require('angular');

module.exports = angular.module('wswa-docs', [])

	.directive('docs', 	require('./docs/directive'))

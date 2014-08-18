'use strict';

var controllers = angular.module('calendar.controller', []);

controllers.controller('nameController', function ($scope) {
	$scope.name = "";
});

// controller for loading the json data
controllers.controller('optionsListController', function($scope, $http, $window) {
	$scope.options = [];
	$http.get('/Calendar/resources/js/options.json').
		success(function(response) {
			console.log("Success: " + response.options);
			$scope.options = response.options;
		}).
		error(function(response) {
			console.log("Failure: " + response);
	//then(function(response) {
	//	$scope.options = response.data;
	});
	$scope.swapValue = function(value) {
		if ($window.identityList.indexOf(value) >= 0) {
			console.log("List [" + $window.identityList + "] contains " + value);
			var index = $window.identityList.indexOf(value);
			$window.identityList.splice(index, 1);
		}
		else {
			console.log("List [" + $window.identityList + "] does not contain " + value);
			$window.identityList.push(value);
		}
	}
});

// controller for loading the json data
controllers.controller('identityListController', function($scope, $window) {
	$scope.identityList = $window.identityList;
	return $scope.identityList; 
});

//controller for matching user input to json data




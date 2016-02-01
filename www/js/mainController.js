(function() {
	var app = angular.module("starter");

	app.controller('MainController', ['$scope', function($scope) {
		var vm = this;
		vm.scannedData = "";

		$scope.$watch('vm.scannedData');

		vm.openScanner = function() {
			var params = {
				text_title: 'Test',
				text_instructions: 'Test instructies',
				camera: 'back',
				flash: 'off',
				drawSight: true
			}

			cloudSky.zBar.scan(params, function(d) {
				vm.scannedData = 'Barcode: ' + d;
				$scope.$apply();
			}, function(d) {
				vm.scannedData.push(d);
			});
		}

	}]);
}());
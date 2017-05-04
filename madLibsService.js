

	var app = angular.module('myApp');
	app.factory('madLibsFactory',function(){
		var madLib;
		return {
			setFromForm: function(fromForm) {
				madLib = fromForm;
			},
			getFromForm: function() {
				return madLib
			}

		};
		
	});


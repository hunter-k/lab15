(function() { 
	var app = angular.module("myApp", ["ngRoute"]); 

	app.config(function($routeProvider) {

		$routeProvider.when("/", {
			template: "Welcome to Madlibs"
		});
		$routeProvider.when("/viewOne", {
			templateUrl: "viewOne.html"
		});
		$routeProvider.when("/viewTwo", {
			templateUrl: "viewTwo.html",
		});
		$routeProvider.otherwise({
			template: "<img src='https://www.volacci.com/sites/default/files/styles/blog_main_image/public/blog/image/404%20error.png?itok=K1adpBHD'>"
		});
	});


	app.controller("form", function($scope, madLibsFactory) {
		$scope.submitted = function (madLib){
		console.log(madLib);
 			madLibsFactory.setFromForm(madLib);
	}});


	app.controller("madLibsPage", function($scope, madLibsFactory) {
	
   			 $scope.print =  madLibsFactory.getFromForm();
  	
	});



})();

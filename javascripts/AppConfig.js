// Setting up the Routes to the different pages here in the AppConfig 
app.config(function($routeProvider){

$routeProvider 
.when("/home/page", {
	templateUrl: "/partials/home.html"
	controller: "HomePageCtrl"
})
.when("/highway/one", {
	templateUrl: "/partials/hwy1.html"
	controller: "HighwayOneCtrl"
})
.when("/highway/two", {
	templateUrl: "/partials/hwy2.html"
	controller: "HighwayTwoCtrl"
})
.otherwise('/home/page');

});




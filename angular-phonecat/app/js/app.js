'use strict';

/* App Module */
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);


var phonecatApp = angular.module("phonecatApp",[
'ngRoute',
'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',function($routeProvider){
	
$routeProvider.when('/phones',{
	templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
})
.when('/phones/:phoneId',{
	templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
		})
.otherwise({redirectTo: '/phones'});
}]);
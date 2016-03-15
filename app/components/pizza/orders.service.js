(function() {
	"use strict";

	angular
		.module('app-pizza.pizza')
		.factory('Order', Order);

	Order.$inject = ['$http'];
	function Order($http) {
		var collectionName = "orders";

		var service = {
			add: add
		};

		return service;

		function add(newOrder) {
			return $http.post("http://localhost:3000/api/" + collectionName,newOrder);
		}
		
	}
})();
(function() {
	"use strict";

	angular
		.module('app-pizza.pizza')
		.factory('Pizza', Pizza);

	Pizza.$inject = ['$resource'];
	function Pizza($resource) {
		var collectionName = "pizzas";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{ id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();
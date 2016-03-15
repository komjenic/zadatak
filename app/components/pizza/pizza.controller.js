(function() {
	"use strict";

	angular
		.module('app-pizza.pizza')
		.controller('PizzaController', PizzaController);

	PizzaController.$inject = ['$location','newOrderRes', 'pizzas','Order'];
	function PizzaController( $location,newOrderRes, pizzas, Order) {
		var pc = this;
			
		pc.pizzas = pizzas.results;
		/*pc.genres = genres.data.results;*/
		/*pc.title = title;*/
		pc.newOrderRes= newOrderRes;
		/*pc.newOrderRes.description= title;*/
		/*pc.pizzas.description=title;
		newOrderRes = {
			description : ''
		};
		pc.newOrderRes = {
			description : ''
		};

		pc.newOrderRes.description = title;*/
		
		/*pc.newOrderRes.description=title;*/
		/*newOrderRes.description=title;
		pc.newOrderRes.description=title;*/
		pc.save = function() {
			if(pc.pizzas._id) {
				pc.pizzas.$update(success);
			} else {
				pc.pizzas.$save(success);
			}

			// Order.add(pc.newOrderRes).then(success);
		};

		pc.remove = function() {
			pc.newOrderRes.$delete(success);
		};

		function success() {
			$location.path('/pizza');
		}
	}
})();
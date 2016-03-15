(function() {
	"use strict";

	angular
	.module('app-pizza.pizza')
	.controller('PizzaListController', PizzaListController);

	PizzaListController.$inject = ['$scope', '$location', 'pizzas', 'Pizza'];
	function PizzaListController($scope, $location, pizzas , Pizza ) {
		var plc = this;

		plc.pizzas = pizzas.results;


		/*plc.sort = "price";*/
		plc.sortDirection = "desc";

		plc.pagination = {
			page: 1,
			pageSize: 5,
			numberOfPages: Math.ceil(pizzas.count / 5),
			changePage: function(page) {
				plc.pagination.page = page;
				getAll();
			},
			changePageSize : function  (argument) {
				plc.pagination.pageSize = argument;
				plc.pagination.numberOfPages= Math.ceil(pizzas.count / argument);
				getAll();
			}
		};
		plc.radioModel = 'Left';

		$scope.$watch('plc.sort', function(newVal, oldVal) {
			if(newVal !== oldVal) {
				plc.sortDirection = 'asc';
				getAll();
			}
		});
		getAll();

		plc.tableChanged = function(sortParam) {
			if(plc.sort === sortParam) {
				plc.sortDirection = plc.sortDirection == 'asc' ? 'desc' : 'asc';
			} else {
				plc.sort = sortParam;
				plc.sortDirection = 'asc';
			}
			getAll();
		};

		plc.changeSortDirection = function() {
			plc.sortDirection = plc.sortDirection == 'asc' ? 'desc' : 'asc';
			getAll();
		};

		plc.edit = function(id) {
			$location.path("/pizza/"+id);
		};

		

		function getAll() {
			Pizza.get({sort: plc.sort, sortDirection: plc.sortDirection, page: plc.pagination.page, pageSize: plc.pagination.pageSize}).$promise.then(function(data) {
				plc.pizzas = data.results;
			});
		}
	}
})();
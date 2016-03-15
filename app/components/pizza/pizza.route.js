(function() {
	angular
		.module('app-pizza.pizza')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.pizzaList', {
				url: '/pizza',
				views: {
					'content@': {
						templateUrl: 'app/components/pizza/pizza-list.html',
						controller: 'PizzaListController',
						controllerAs: 'plc',
						resolve: {
							pizzas: getPizzas
						}
					}
				}
			})
			.state('main.pizzaAdd', {
				url: '/pizza/add',
				views: {
					'content@': {
						templateUrl: 'app/components/pizza/pizza.html',
						controller: 'PizzaController',
						controllerAs: 'pc',
						resolve: {
							pizzas: getPizzas,
							title: editTitle,
							newOrderRes: function(){
                                return {};
                            }
							
							
						}
					}
				}
			})
			.state('main.pizzaEdit', {
				url: '/pizza/:id',
				views: {
					'content@': {
						templateUrl: 'app/components/pizza/pizza.html',
						controller: 'PizzaController',
						controllerAs: 'pc',
						
						resolve: {
							pizzas: getPizzas,
							title: editTitle,
							newOrderRes: newOrderRes1
							
						},
					}
				}
			});

		

		getPizzas.$inject = ['Pizza'];
		function getPizzas(Pizza) {
			return Pizza.get({/*"pageSize":6,*/ /*"sort":"rating", "sortDirection":"desc"*/}).$promise;
		}

		newPizza.$inject = ['Pizza'];
		function newPizza(Pizza) {
			return new Pizza();
		}

		

		retrievePizza.$inject =['$stateParams', 'Pizza'];
		function retrievePizza($stateParams, Pizza) {
			return Pizza.get({id: $stateParams.id}).$promise;
		}

		editTitle.$inject = ['$stateParams'];
		function editTitle($stateParams) {
			return $stateParams.description;
		}

		newOrderRes1.$inject = ['$stateParams'];
		function newOrderRes1 ($stateParams){
            return { description : $stateParams.id};
        }

		
	}
})();
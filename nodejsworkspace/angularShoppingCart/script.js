	// create the module and name it shoppingCartApp
	var shoppingCartApp = angular.module('shoppingCartApp', ['ngRoute']);

	// configure our routes
	shoppingCartApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/categories', {
				templateUrl : 'pages/categories.html',
				controller  : 'categoryController'
			})

			// route for the contact page
			.when('/cart', {
				templateUrl : 'pages/cart.html',
				controller  : 'cartController'
			}).when('/:countryName', {
                templateUrl: 'country-detail.html',
                controller: 'CountryDetailCtrl'
            })
            ;
	});
      
    shoppingCartApp.factory('categories', function($http){

    var cachedData;

    function getData(callback){
        if(cachedData) {
        callback(cachedData);
        } else {
        $http.get('categories.json').success(function(data){
            cachedData = data;
            callback(data);
        });
        }
    }

    return {
        list: getData,
        find: function(title, callback){
        getData(function(data) {
            var category = data.filter(function(entry){
            return entry.title === title;
            })[0];
            callback(category);
        });
        }
    };
    });

    // create the controller and inject Angular's $scope
	shoppingCartApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Home!';
	});

	shoppingCartApp.controller('categoryController', function($scope, categories) {
        categories.list(function(categories) {
          $scope.categories = categories;
          console.log(categories);
        });
		//$scope.message = 'Category page.';
	});

	shoppingCartApp.controller('cartController', function($scope) {
		$scope.message = 'Cart page.';
	});
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.foodAdvice', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdvice.html',
        controller: 'foodAdviceCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceSpaghettiMap', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceSpaghettiMap.html',
        controller: 'foodAdviceSpaghettiMapCtrl'
      }
    }
  })

  .state('foodAdvicePotatoMap', {
    url: '/page31',
    templateUrl: 'templates/foodAdvicePotatoMap.html',
    controller: 'foodAdvicePotatoMapCtrl'
  })

  .state('tabsController.foodAdviceBurittoMap', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceBurittoMap.html',
        controller: 'foodAdviceBurittoMapCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceWIT', {
    url: '/page28',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceWIT.html',
        controller: 'foodAdviceWITCtrl'
      }
    }
  })

  .state('tabsController.foodYourListIngredientWIT', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/foodYourListIngredientWIT.html',
        controller: 'foodYourListIngredientWITCtrl'
      }
    }
  })

  .state('tabsController.foodChancesWIT', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/foodChancesWIT.html',
        controller: 'foodChancesWITCtrl'
      }
    }
  })

  .state('tabsController.foodTipsWIT', {
    url: '/page39',
    views: {
      'tab1': {
        templateUrl: 'templates/foodTipsWIT.html',
        controller: 'foodTipsWITCtrl'
      }
    }
  })

  .state('tabsController.foodYourListWIT', {
    url: '/page36',
    views: {
      'tab1': {
        templateUrl: 'templates/foodYourListWIT.html',
        controller: 'foodYourListWITCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceBurittoIngredients', {
    url: '/page26',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceBurittoIngredients.html',
        controller: 'foodAdviceBurittoIngredientsCtrl'
      }
    }
  })

  .state('tabsController.foodAdvicePotatoIngredients', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdvicePotatoIngredients.html',
        controller: 'foodAdvicePotatoIngredientsCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceSpaghettiIngredients', {
    url: '/page33',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceSpaghettiIngredients.html',
        controller: 'foodAdviceSpaghettiIngredientsCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceBurittoPrices', {
    url: '/page27',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceBurittoPrices.html',
        controller: 'foodAdviceBurittoPricesCtrl'
      }
    }
  })

  .state('tabsController.foodAdvicePotatoPrices', {
    url: '/page34',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdvicePotatoPrices.html',
        controller: 'foodAdvicePotatoPricesCtrl'
      }
    }
  })

  .state('tabsController.foodAdviceSpaghettiPrices', {
    url: '/page35',
    views: {
      'tab1': {
        templateUrl: 'templates/foodAdviceSpaghettiPrices.html',
        controller: 'foodAdviceSpaghettiPricesCtrl'
      }
    }
  })

  .state('tabsController.foodYourList', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/foodYourList.html',
        controller: 'foodYourListCtrl'
      }
    }
  })

  .state('tabsController.foodYourListBought', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/foodYourListBought.html',
        controller: 'foodYourListBoughtCtrl'
      }
    }
  })

  .state('tabsController.foodChances', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/foodChances.html',
        controller: 'foodChancesCtrl'
      }
    }
  })

  .state('tabsController.foodTips', {
    url: '/page38',
    views: {
      'tab1': {
        templateUrl: 'templates/foodTips.html',
        controller: 'foodTipsCtrl'
      }
    }
  })

  .state('tabsController.eventsDashboard', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsDashboard.html',
        controller: 'eventsDashboardCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.eventsPopular', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsPopular.html',
        controller: 'eventsPopularCtrl'
      }
    }
  })

  .state('tabsController.eventsSearch', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsSearch.html',
        controller: 'eventsSearchCtrl'
      }
    }
  })

  .state('eventsSearchHorOrNot', {
    url: '/page7',
    templateUrl: 'templates/eventsSearchHorOrNot.html',
    controller: 'eventsSearchHorOrNotCtrl'
  })

  .state('eventsSearchHoNSlide1', {
    url: '/page8',
    templateUrl: 'templates/eventsSearchHoNSlide1.html',
    controller: 'eventsSearchHoNSlide1Ctrl'
  })

  .state('eventsSearchHoNSlide2', {
    url: '/page9',
    templateUrl: 'templates/eventsSearchHoNSlide2.html',
    controller: 'eventsSearchHoNSlide2Ctrl'
  })

  .state('eventsSearchHoNSlide3', {
    url: '/page10',
    templateUrl: 'templates/eventsSearchHoNSlide3.html',
    controller: 'eventsSearchHoNSlide3Ctrl'
  })

  .state('menuRank', {
    url: '/page13',
    templateUrl: 'templates/menuRank.html',
    controller: 'menuRankCtrl'
  })

  .state('tabsController.eventsPopularUnitedNations', {
    url: '/page16',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsPopularUnitedNations.html',
        controller: 'eventsPopularUnitedNationsCtrl'
      }
    }
  })

  .state('tabsController.eventsPopularGreatOrchestra', {
    url: '/page17',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsPopularGreatOrchestra.html',
        controller: 'eventsPopularGreatOrchestraCtrl'
      }
    }
  })

  .state('tabsController.eventsPopularFoodWate', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsPopularFoodWate.html',
        controller: 'eventsPopularFoodWateCtrl'
      }
    }
  })

  .state('tabsController.eventsPopular412food', {
    url: '/page19',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsPopular412food.html',
        controller: 'eventsPopular412foodCtrl'
      }
    }
  })

  .state('tabsController.todoItem', {
    url: '/title',
	params: {
		item: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/todoItem.html',
        controller: 'todoItemCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page15',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page24',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('start', {
    url: '/page25',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')


});
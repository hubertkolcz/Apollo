angular.module('todos', ["firebase"])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7GwRcFZKyxAO9NhzW4AKB4pcekK4wqHs",
    authDomain: "apollo-1552652889218.firebaseapp.com",
    databaseURL: "https://apollo-1552652889218.firebaseio.com",
    projectId: "apollo-1552652889218",
    storageBucket: "apollo-1552652889218.appspot.com",
    messagingSenderId: "448183345575"
  };
  firebase.initializeApp(config);

})

.service('todos', ['$firebaseArray', function($firebaseArray){
    // var items =  [
    //     {
    //         'title': 'Testing Item 1',
    //         'finished': false,
    //         '$id': 1
    //     },
    //     {
    //         'title': 'Testing Item 2',
    //         'finished': true,
    //         '$id': 2

    //     },
    // ];
    
    var ref = firebase.database().ref().child('todos');
    var items = $firebaseArray(ref);
    
    var todos = {
        'items': items,
        addItem: function(title){
            items.$add({
                'title': title,
                'finished': false
            });
            
        },
        setFinished: function(item, newV) {
            item.finished = newV;
            items.$save(item);
        }
    }
    
    return todos;
    
}]);    

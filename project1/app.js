// MODULE
var myApp = angular.module('angularApp', []);
 
// CONTROLLERS
myApp.controller('mainController', function ($scope) {
    var a=10;
    var b="10";
    if(a=="100"){
        console.log("a==b");
    }
    if(a===b){
        console.log("a===b");
    }
  
});


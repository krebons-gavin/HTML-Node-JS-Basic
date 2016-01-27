console.log(angular);

var counter=0;
for (var p in angular){
	counter++;
	if (angular.isFunction(angular[p])) {
		console.log("function->"+p);
	}else{
		console.log("property-->"+p+"-->"+angular[p]);
	}
}
console.log(counter);

// angular.injector();
var injector=angular.injector();
console.log(injector);

var myModule=angular.module("MyModule",[]);
console.log(myModule);
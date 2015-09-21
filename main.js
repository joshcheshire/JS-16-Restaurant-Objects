



var Fooditem = function( name, calories, vegan, glutenFree, citrusFree ){

	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	// this.stringify=stringify

}
// console.log(obj.name + ' ' + obj.calories + ' ' +  'is this vegan? ' +  obj.vegan + ' ' + obj.glutenFree + ' ' + obj.citrusFree)

Fooditem.prototype.stringify = function(){

	console.log((this.name + ' ' + this.calories + ' ' +  'is this vegan? ' +  this.vegan + ' ' + this.glutenFree + ' ' + this.citrusFree))

}


var burrito = new Fooditem( 'Burrito', 500, false, false, true)
 var pizza = new Fooditem('Pizza', 600, false, true, true)
 var burger = new Fooditem( 'Burger', 1000, false, false, true)


// burrito.stringify()
// pizza.stringify()
// burger.stringify()



//-=-=-=-=-=-=-=-=-=



var Drink = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;




}

Drink.prototype.stringify = function(){

console.log((this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients))




}


var Plate = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;

}



Plate.prototype.stringify = function(){

console.log((this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients))

}



var coke = new Drink ('Cola', 'Fizzy and yummy', 2, ['corn syrup', 'caramel'])
// console.log(coke)


var italianDinner = new Plate ('Spaghetti', ' Italian deliciousness', 15, ['noodles', 'meatballs', 'sauce', 'garlic bread'])
// console.log(italianDinner)

var chickenDinner = new Plate ('Chicken Dinner', 'southern deliciousness', 18,['chicken', 'green beans', 'mashed potatoes', 'gravy'])

// coke.stringify()
// italianDinner.stringify()
// chickenDinner.stringify()



//=-=-=-=--=-=-=-=-=-=-=ORDER-=-=-=-=-=\\


var Order = function(plate){
	this.plate = plate;


}

Order.prototype.stringify = function(){

console.log(this.plate.stringify())


}

var myOrder = new Order([italianDinner,chickenDinner])

myOrder.stringify()







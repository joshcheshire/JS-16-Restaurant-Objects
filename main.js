



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

	return this.name + ' ' + this.calories + ' ' +  'is this vegan? ' +  this.vegan + ' ' + this.glutenFree + ' ' + this.citrusFree	

}


var burrito = new Fooditem( 'Burrito', 500, false, false, true)
 var rice = new Fooditem('rice', 200, true, true, true)
 var beans = new Fooditem( 'beans',400, true, true, true)
 var avocado = new Fooditem( 'avocado', 1000, true, false, true)
 var tequila = new Fooditem ('tequila', 500, true, true, false)
 var lemon = new Fooditem ('lemon', 50, true, true, false)



// burrito.stringify()
// pizza.stringify()
// burger.stringify()
// lemon.stringify()



//-=-=-=-=-=-=-=-=-=



var Drink = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;


}



Drink.prototype.stringify = function(){

return this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients




}


var Plate = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;
	
}



Plate.prototype.stringify = function(){
var foodItemString = ''
this.ingredients.forEach(function(item){
	foodItemString += item.stringify()	

})
return this.name + ' ' + this.description + ' ' + this.price + ' ' + foodItemString

}



var coke = new Drink ('Cola', 'Fizzy and yummy', 2, ['corn syrup', 'caramel'])
// console.log(coke)

var Marg = new Drink ('Margarita', 'booze slushy', 8, [tequila,lemon])

var italianDinner = new Plate ('Spaghetti', ' Italian deliciousness', 15, ['noodles', 'meatballs', 'sauce', 'garlic bread'])
// console.log(italianDinner)

var chickenDinner = new Plate ('Chicken Dinner', 'southern deliciousness', 18,['chicken', 'green beans', 'mashed potatoes', 'gravy'])

var burritoPlate = new Plate ('Burrito Plate', 'deliciousness', 10, [burrito, rice, beans])

// coke.stringify()
// chickenDinner.stringify()
// burritoPlate.stringify()
console.log(burritoPlate)
console.log(italianDinner.stringify())
console.log(burritoPlate.stringify())


//=-=-=-=--=-=-=-=-=-=-=ORDER-=-=-=-=-=\\


var Order = function(arr){
	this.arr = arr
}



Order.prototype.stringify = function(){

	var orderString = ''
	this.arr.forEach(function(plates){
		orderString = orderString + plates.stringify();
	})
	return orderString

}



var myOrder = new Order([italianDinner,chickenDinner])


// console.log(myOrder.stringify())

//=-=-=-=-=-=-=Menu-=-=-=-=-=\\

var Menu = function(arr){
	this.arr = arr
}

Menu.prototype.stringify =  function(){

	var orderString = ''
	this.arr.forEach(function(plates){
		orderString = orderString + plates.stringify();
		

	})
	return orderString
}


var ourMenu = new Menu([italianDinner,chickenDinner])

// console.log(ourMenu.stringify())


//=-=-=-=-=-=-Restaurant-=-=-=-=-=\\

var Restaurant = function(name, description, menu){
	this.name = name
	this.description= description
	this.menu = menu

}

Restaurant.prototype.stringify = function(){


	var restString = ''
	this.menu.arr.forEach(function(plates){
		restString = restString + plates.stringify()

	})

return this.name + ' ' + this.description + ' ' + restString

}

var theRestaurant = new Restaurant ('Our Restaurant', 'Homestyle Eats', ourMenu)


// console.log(theRestaurant.stringify())






var Customer = function(dietaryPreference){

	this.dietaryPreference = dietaryPreference



}


var theCustomer = new Customer ('Vegan')






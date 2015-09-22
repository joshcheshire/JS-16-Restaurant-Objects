



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

	return '\n' + this.name + ' \n Contains ' + this.calories + ' calories. ' + ' ' +  'Vegan? ' +  this.vegan + ', Gluten Free?  ' + this.glutenFree + ', Citrus Free?  ' + this.citrusFree	

}


var burrito = new Fooditem( 'Burrito', 500, false, false, true)
 var rice = new Fooditem('rice', 200, true, true, true)
 var beans = new Fooditem( 'beans',400, true, true, true)
 var avocado = new Fooditem( 'avocado', 1000, true, false, true)
 var tequila = new Fooditem ('tequila', 500, true, true, false)
 var salt = new Fooditem ('salt', 50, true, true, false)



// console.log(burrito.stringify())
// // pizza.stringify()
// // burger.stringify()
// lemon.stringify()



//-=-=-=-=-=-=-=-=-=



var Drink = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;


}



Drink.prototype.stringify = function(){
	var foodItemString =''
this.ingredients.forEach(function(item){
	foodItemString += item.stringify()	
})

return this.name + ' ' + this.description + ' ' + this.price + ' ' + foodItemString




}


var Plate = function( name, description, price, ingredients){

	this.name = name;
	this.description= description;
	this.price = price;
	this.ingredients = ingredients;
	
}



Plate.prototype.stringify = function(){
var foodItemString =''
this.ingredients.forEach(function(item){
	foodItemString += item.stringify()	
})
return  this.name + ' Is Made of Mexican' + ' ' + this.description + ' ' + ' $' + this.price + ' ' + foodItemString + '\n \n'

}


Plate.prototype.isVegan = function(){
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].vegan === false) {
			return false;
		}else{
			return true;
		};
	};
}


Plate.prototype.isGlutenFree = function(){

	for(var i=0; i< this.ingredients.length; i++){

		if(this.ingredients[i].glutenFree === false){

			return false;
		} else{
			return true;
		}
	}

}

Plate.prototype.isCitrusFree = function(){

	for(var i=0; i< this.ingredients.length; i++){

		if(this.ingredients[i].citrusFree === false){

			return false;
		} else{
			return true;
		}
	}

}



var coke = new Drink ('Cola', 'Fizzy and yummy', 2, ['corn syrup', 'caramel'])
// console.log(coke)

var Marg = new Drink ('Margarita', 'booze slushy', 8, [tequila, salt])

// var italianDinner = new Plate ('Spaghetti', ' Italian deliciousness', 15, ['noodles', 'meatballs', 'sauce', 'garlic bread'])
// // console.log(italianDinner)

// var chickenDinner = new Plate ('Chicken Dinner', 'southern deliciousness', 18,['chicken', 'green beans', 'mashed potatoes', 'gravy'])

var burritoPlate = new Plate ('Burrito Plate', 'deliciousness', 10, [burrito, rice, beans])

var guacamolePlate = new Plate ('Guacamole Plate', ' An array of avocado flavor', 5, [avocado, salt])

// coke.stringify()
// burritoPlate.stringify()
// console.log(burritoPlate.stringify())
// console.log(burritoPlate.stringify())
// console.log(burritoPlate.isCitrusFree())
// console.log(guacamolePlate.isCitrusFree())


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



var myOrder = new Order([burritoPlate,guacamolePlate])


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


var ourMenu = new Menu([burritoPlate,guacamolePlate])

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

//-=-=-=-==-=-=-=-=-=-=-=-Menu pt2-=-=-=-=\\

var fullMenu = new Menu ([burritoPlate, guacamolePlate, Marg])

// console.log(fullMenu.stringify())

//-=-=-=-=-=-Restaurant pt 2 -=-=-=-=\\

var ourMexicanRestaurant = new Restaurant (' Mike and Joshs Cafe', ' Proudly Serving Mexican Fare', fullMenu)

console.log(ourMexicanRestaurant.stringify())








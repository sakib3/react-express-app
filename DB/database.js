var mongoose = require('mongoose');
var GroceryItem = require('./../models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery',function(){
	console.log("Mongo DB is connected....");
	mongoose.connection.db.dropDatabase();
	var items = [
	{name: "Candy"},
	{name: "Milk"},
	{name: "Sandwitch",purchased:true},
	{name: "Drinks"}
	];
	// insert into the db
	items.forEach(function(item){
		new GroceryItem(item).save();
	})
})
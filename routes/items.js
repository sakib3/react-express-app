var express = require('express');
var router = express.Router();
var GroceryItem = require('./../models/GroceryItem.js');
// var items = [
// 	{name: "Candy"},
// 	{name: "Milk"},
// 	{name: "Sandwitch",purchased:true},
// 	{name: "Drinks"}
// ];

/* GET items listing. */
router
.get('/', function(req, res) {
	GroceryItem.find(function(error, doc){
  		res.send(doc);
		
	})
})
.post('/', function(req, res) {
  var item = req.body;
  var groceryItem = new GroceryItem(item);
  groceryItem.save(function(err,data){
  	//ok send
  	res.status(300).send();
  	
  })
});



module.exports = router;


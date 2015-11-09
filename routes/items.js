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
router.patch('/:id',function(req, res,next) {
	GroceryItem.findOne({
		_id:req.body._id
	},function(error,doc){
		for(var key in req.body){
			doc[key] = req.body[key];
		}
		doc.save();
		res.status(200).send();
	})
});

router.delete('/:id', function(req, res,next) {
	GroceryItem.findOne({
		_id:req.params.id
	}).remove(function(x){
		console.log("removed .",x);
	});
});

router.post('/', function(req, res,next) {
  var item = req.body;
  var groceryItem = new GroceryItem(item);
  groceryItem.save(function(err,data){
  	//ok send
  	res.status(300).send();
  	
  })
});

router.get('/', function(req, res,next) {
	GroceryItem.find(function(error, doc){
  		res.send(doc);
		
	})
});



module.exports = router;


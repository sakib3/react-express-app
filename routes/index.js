var express = require('express');
var router = express.Router();
var React = require('react/addons');
var GroceryItem = require('./../models/GroceryItem.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index',{});
	var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
	GroceryItem.find(function(error,doc){
	   var generated = React.renderToString(application({
	    items: doc
	   }));
	   res.render('index.ejs',{reactOutput: generated}); 
	});

});

module.exports = router;

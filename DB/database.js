var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grocery',function(){
	console.log("Mongo DB is connected....");
})
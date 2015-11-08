var express = require('express');
var app = new express();
app.get('/',function(req,res){
	res.render('./../app/index.ejs',{});
})
//serve all contents of app folder
.use(express.static(__dirname+'/../app'))
.listen(3000);

var express = require('express');
var app = new express();
app.get('/',function(req,res){
	res.render('./../app/index.ejs',{});
})
//serve all contents of .tmp folder
.use(express.static(__dirname+'/../.tmp'))
.listen(3000);

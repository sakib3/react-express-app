var express = require('express');
var router = express.Router();
var items = [
	{name: "Candy"},
	{name: "Milk"},
	{name: "Sandwitch",purchased:true},
	{name: "Drinks"}
];

/* GET items listing. */
router
.get('/', function(req, res) {
  res.send(items);
})
.post('/', function(req, res) {
  var item = req.body;
  items.push(item);
});



module.exports = router;


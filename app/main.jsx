// browserify handle this react dependency
var React = require('react/addons');
//var ReactDOM = require('react-dom');
console.log('main.jsx file');

var GroceryItemList =require('./components/GroceryItemList.jsx');

var initial = [
	{name: "Candy"},
	{name: "Milk"},
	{name: "Sandwitch",purchased:true},
	{name: "Drinks"}
];
// render this item list into the app....
React.render(<GroceryItemList items={initial}/>,app)
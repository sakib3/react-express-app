// browserify handle this react dependency
var React = require('react/addons');
//var ReactDOM = require('react-dom');
console.log('main.jsx file');

var GroceryItemList =require('./components/GroceryItemList.jsx');
var groceryItemStore =require('./stores/GroceryItemStore.jsx');

var initial = groceryItemStore.getItems();
// render this item list into the app....
function render(){
	React.render(<GroceryItemList items={initial}/>,app);
}
groceryItemStore.onChange(function(items){
	initial = items;
	render();
});
render();
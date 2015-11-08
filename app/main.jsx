// browserify handle this react dependency
var React = require('react/addons');
var ReactDOM = require('react-dom');
console.log('main.jsx file');

var GroceryItemList =require('./components/GroceryItemList.jsx');
// render this item list into the app....
ReactDOM.render(<GroceryItemList />,app)
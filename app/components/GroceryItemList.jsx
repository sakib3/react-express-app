// browserify handle this react dependency
var React = require('react/addons');
var GroceryItem =require('./GroceryItem.jsx');
var GroceryListAddItem =require('./GroceryListAddItem.jsx');
//var ReactDOM = require('react-dom');

// make it availbale for other file
module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Grocery listify</h1>
				<div>
				{
					this.props.items.map(function(item,index){
						return (
							<GroceryItem item={item} key={"item"+index}/>
						)
					})
				}
				</div>
				<GroceryListAddItem />	
			</div>
		)
	}
})
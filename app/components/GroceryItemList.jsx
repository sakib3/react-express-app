// browserify handle this react dependency
var React = require('react/addons');
var ReactDOM = require('react-dom');

// make it availbale for other file
module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Grocery listify</h1>
			</div>
		)
	}
})
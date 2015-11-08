var dispatcher = require('./../dispatcher.js');

function GroceryItemStore(){
	
	var items = [
		{name: "Candy"},
		{name: "Milk"},
		{name: "Sandwitch",purchased:true},
		{name: "Drinks"}
	];
	var listeners = [];
	function getItems(){
		return items;
	}
	function onChange(listener){
		listeners.push(listener);
	}


	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		})
	}
	function addGroceryItem(item){
		items.push(item);
		triggerListeners();
	}
	dispatcher.register(function(event){
		var split =event.type.split(':');
		if(split[0] ==='grocery-item'){
			switch(split[1]){
				case "add":
				addGroceryItem(event.payload);
				break;
			}
		}
	});
	//public interface....
	return {
		getItems: getItems,
		onChange: onChange
	} 
}

module.exports = new GroceryItemStore();
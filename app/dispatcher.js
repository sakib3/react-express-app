// gen random string
var guid = require('guid');
var listeners = {};
modeule.exports = {
	register: function(cb){
		var id = guid.raw(),
		listeners[id] = cb;
		return id;
	},
	dispatch : function(payload){
		console.info("Dispathing ....",payload);
		for(var id in listeners){
			var listener = listeners[id];
			listener(payload);
		}
	}
}
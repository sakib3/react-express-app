var $ = require('jquery');

module.exports = {
	get: function(url){
		// available in ECMA script 5/6
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				dataType: "json",
				success: success,
				error: error
			})

		})
	},
	post: function(url,data){
		// available in ECMA script 5/6
		return new Promise(function(success, error){
			$.ajax({
				url: url,
				//dataType: "json",
				type: "POST",
				data: data,
				success: success,
				error: error
			})

		})
	}
}
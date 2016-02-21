var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema = new BlogSchema({//necessary to make bears in our database
	name: {
		type : String,
	 	required: true,	
	},
	comment: {
		type: String,
		required: true,
	} 
	userAlias: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('Blog', BlogSchema);
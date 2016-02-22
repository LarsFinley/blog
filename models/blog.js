var Schema       = Mongoose.Schema;

var BlogSchema = new Schema({
	name: {
		type : String,
	 	required: true,	
	},
	comment: {
		type: String,
		required: true,
	} 
});

module.exports = Mongoose.model('Blog', BlogSchema);
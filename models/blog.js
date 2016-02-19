var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	name: String,
	age: Number,
	gender: String
})

module.exports = mongoose.model('Blog', BlogSchema);

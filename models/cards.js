const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	name: String,
	weight: Number,
	power: Number
});


module.exports = mongoose.model('cards', CardSchema);

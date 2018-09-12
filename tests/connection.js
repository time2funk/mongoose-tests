const mongoose = require('mongoose');

mongoose.Propmise = global.Promise;

module.exports.run = () => {
    before((done) => {
	mongoose.connect('mongodb://localhost:27017/testaroo', { useNewUrlParser: true });

	mongoose.connection.once('open', () => {
		console.log('DB connection');
		done();
	}).on('error', (e) => {
		console.log('DB error', e);
	});
    });
    beforeEach(function(done){
	// Drop the collection
	mongoose.connection.collections.cards.drop(() => {
	    console.log('DB drop cards');
	    done();
	});
    });

};

const assert = require('assert');
const Cards = require('../models/cards');

module.exports.run = () => describe('Save data to DB', (done) => {
	it('Save a record to DB', () => {
		var card = new Cards({
			name: 'Mario',
			weight: 10,
			power: 20
		});

		card.save().then(() => {
			assert(card.isNew === false);
			done();
		});
	});


});

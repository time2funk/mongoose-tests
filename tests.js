
const assert = require('assert');
const connection = require('./tests/connection');
const saveTest = require('./tests/save.test');

connection.run();

describe('some demo tests', () => {
	it('pass test', () => {
		assert(true);
	});

	it('adds wto nums together', () => {
		assert(2 + 3 === 5);
	});
});

saveTest.run();

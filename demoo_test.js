const mocha = require('mocha');
const assert = require('assert');

describe('some demo tests', () => {
	it('pass test', () => {
		assert(true);
	});
	it('adds wto nums together', () => {
		assert(2 + 3 === 5);
	});
});

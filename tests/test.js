const mocha = require('mocha');
const assert = require('assert');

describe('demo tests', () => {

	it('adds two numbers together', () => {
		assert(2 + 3 === 5);
	});

	it('pass test', () => {
		assert(true);
	});
});

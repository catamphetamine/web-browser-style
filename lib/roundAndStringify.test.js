import roundAndStringify from './roundAndStringify.js'

describe('roundAndStringify', function() {
	it('should round and stringify', function() {
		roundAndStringify(0, { precision: 3 }).should.equal('0')
		roundAndStringify(1, { precision: 3 }).should.equal('1')
		roundAndStringify(1.2, { precision: 3 }).should.equal('1.200')
		roundAndStringify(1.23, { precision: 3 }).should.equal('1.230')
		roundAndStringify(1.234, { precision: 3 }).should.equal('1.234')
		roundAndStringify(1.2345, { precision: 3 }).should.equal('1.234')
		roundAndStringify(1.23456, { precision: 3 }).should.equal('1.235')
	})
})
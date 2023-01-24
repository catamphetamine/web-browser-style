import percent from './percent.js'

describe('percent', function() {
	it('should format percents', function() {
		percent(0).should.equal('0%')
		percent(1).should.equal('100%')
		percent(1.2).should.equal('120%')
		percent(1.23).should.equal('123%')
		percent(1.234).should.equal('123.4000000000%')
		percent(1.2345).should.equal('123.4500000000%')
		percent(1.23456).should.equal('123.4560000000%')
		percent(1.234567890123456789012345).should.equal('123.4567890123%')
	})
})
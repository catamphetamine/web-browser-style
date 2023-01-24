import scale from './scale.js'

describe('scale', function() {
	it('should format scale factors', function() {
		scale(0).should.equal('0')
		scale(1).should.equal('1')
		scale(1.2).should.equal('1.2000000000')
		scale(1.23).should.equal('1.2300000000')
		scale(1.234).should.equal('1.2340000000')
		scale(1.2345).should.equal('1.2345000000')
		scale(1.23456).should.equal('1.2345600000')
		scale(1.234567890123456789012345).should.equal('1.2345678901')
	})
})
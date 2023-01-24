import scaleFactor from './scaleFactor.js'

describe('scaleFactor', function() {
	it('should format scale factors', function() {
		scaleFactor(0).should.equal('0')
		scaleFactor(1).should.equal('1')
		scaleFactor(1.2).should.equal('1.2000000000')
		scaleFactor(1.23).should.equal('1.2300000000')
		scaleFactor(1.234).should.equal('1.2340000000')
		scaleFactor(1.2345).should.equal('1.2345000000')
		scaleFactor(1.23456).should.equal('1.2345600000')
		scaleFactor(1.234567890123456789012345).should.equal('1.2345678901')
	})
})
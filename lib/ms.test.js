import ms from './ms.js'

describe('ms', function() {
	it('should format milliseconds', function() {
		ms(0).should.equal('0ms')
		ms(1).should.equal('1ms')
		ms(1.2).should.equal('1.200ms')
		ms(1.23).should.equal('1.230ms')
		ms(1.234).should.equal('1.234ms')
		ms(1.2345).should.equal('1.234ms')
		ms(1.23456).should.equal('1.235ms')
	})
})
import px from './px.js'

describe('px', function() {
	it('should format pixels', function() {
		px(0).should.equal('0px')
		px(1).should.equal('1px')
		px(1.2).should.equal('1.200px')
		px(1.23).should.equal('1.230px')
		px(1.234).should.equal('1.234px')
		px(1.2345).should.equal('1.234px')
		px(1.23456).should.equal('1.235px')
	})
})
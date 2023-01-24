import {
	ms,
	px,
	percent,
	scaleFactor
} from '../index.js'
// } from 'web-browser-style'

describe('exports', function() {
	it('should export stuff', function() {
		ms.should.be.a('function')
		px.should.be.a('function')
		percent.should.be.a('function')
		scaleFactor.should.be.a('function')
	})
})
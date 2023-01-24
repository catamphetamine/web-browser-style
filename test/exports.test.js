import {
	px,
	percent,
	scale
} from '../index.js'
// } from 'web-browser-style'

describe('exports', function() {
	it('should export stuff', function() {
		px.should.be.a('function')
		percent.should.be.a('function')
		scale.should.be.a('function')
	})
})
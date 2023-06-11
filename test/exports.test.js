import {
	ms,
	px,
	percent,
	scaleFactor,
	getCssVariable,
	getCssVariables,
	getDimensionalCalculatedCssVariable
} from '../index.js'
// } from 'web-browser-style'

describe('exports', function() {
	it('should export stuff', function() {
		ms.should.be.a('function')
		px.should.be.a('function')
		percent.should.be.a('function')
		scaleFactor.should.be.a('function')
		getCssVariable.should.be.a('function')
		getCssVariables.should.be.a('function')
		getDimensionalCalculatedCssVariable.should.be.a('function')
	})
})
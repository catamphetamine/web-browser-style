// The usual method of getting a CSS variable value is:
// `getComputedStyle(document.documentElement).getPropertyValue(name)`.
// But it won't work for `calc()`-ulated variables and will return values like "calc(14px*3)".
// This alternative method of getting a "dimension" CSS variable value
// works around that bug by creating a temporary "dummy" <div/>
// and setting its `width` to the CSS variable value.
// Because this function mutates DOM, it should be called once
// and then cache the returned value so that it doesn't affect the performance.
export default function getDimensionalCalculatedCssVariable(name) {
	const element = document.createElement('div')
	element.style.width = `var(${name})`
	element.style.display = 'none'
	document.body.appendChild(element)
	const value = getComputedStyle(element).getPropertyValue('width')
	document.body.removeChild(element)
	return value
}

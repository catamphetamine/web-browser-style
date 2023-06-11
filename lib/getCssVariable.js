/**
 * Returns CSS variable value.
 * @param  {string} variableName — CSS variable name
 * @return {string} CSS variable value
 */
export default function getCssVariable(variableName) {
	const style = getComputedStyle(document.documentElement)
	return style.getPropertyValue(variableName)
}

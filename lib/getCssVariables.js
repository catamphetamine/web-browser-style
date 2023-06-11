/**
 * Returns a list of CSS variable values.
 * @param  {string[]} variableNames — CSS variable names
 * @return {string[]} CSS variable values
 */
export default function getCssVariables(variableNames) {
	const style = getComputedStyle(document.documentElement)
	return variableNames.map(variableName => style.getPropertyValue(variableName))
}

/**
 * Rounds the number up to `precision` fractional digits count, and then stringifies it.
 * `roundAsPixels()` uses this function internally with `precision: 3`.
 * Could be used for rounding non-`px` style values like `transform: scale(1.2345...)`.
 * @param  {number} number
 * @param  {number} options.precision — The maximum amount of fractional digits.
 * @return {string}
 */
export default function roundAndStringify(number, { precision }) {
	// If a number is not fractional then stringify it as is.
  if (number % 1 === 0) {
  	return String(number)
	}
	// Otherwise, round the number to `precision` fractional digits.
  return number.toFixed(precision)
}
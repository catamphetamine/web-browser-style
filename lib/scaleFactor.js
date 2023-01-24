import roundAndStringify from './roundAndStringify.js'

/**
 * Rounds a `tranform: scale()` value with a sensible precision and converts to a string.
 * Example: `123.456456456456456456456...` → `"123.456456456"`.
 * See the description of `px()` function for the rationale on rounding.
 * The rationale for the rounding precision being about `10` is that scaling a very
 * high-resolution image to a single pixel should still be precise enough.
 * So if an image has a width of `1,000,000,000px` then in order to scale it to `1px`
 * the scale factor would be `1 / 1,000,000,000`.
 *
 * @param {number}
 * @return {string}
 */
export default function scaleFactor(number) {
  return roundAndStringify(number, { precision: 10 })
}

import roundAndStringify from './roundAndStringify.js'

/**
 * Multplies the value by `100`, rounds it with a sensible precision and
 * converts it to a string while appending `"%"` at the end.
 * Example: `1.23456456456456456456456...` → `"123.456456456%"`.
 * See the description of `percent()` function for the rationale on rounding.
 * The rationale for the rounding precision being about `10` is that scaling a very
 * high-resolution image to a single pixel should still be precise enough.
 * So if an image has a width of `1,000,000,000px` then in order to scale it to `1px`
 * the scale factor would be `1 / 1,000,000,000`.
 *
 * @param {number}
 * @return {string}
 */
export default function percent(number) {
  return roundAndStringify(number * 100, { precision: 10 }) + '%'
}

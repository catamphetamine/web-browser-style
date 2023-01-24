import roundAndStringify from './roundAndStringify.js'

/**
 * Rounds the value with a sensible precision and converts it to a string while
 * appending `"ms"` at the end. Example: `1.23456456456456456456456...` → `"123.456ms"`.
 *
 * See the description of `px()` function for the rationale on rounding.
 *
 * The rationale for the rounding precision being about `3` here is that
 * a human eye can't resolve at `1,000,000` frames per second.
 *
 * @param {number}
 * @return {string}
 */
export default function ms(number) {
  return roundAndStringify(number, { precision: 3 }) + 'ms'
}

# `web-browser-style`

Web browser CSS utilities.

## Install

```
npm install web-browser-style --save
```

## Use

* `px(value: number): string` — Rounds the amount of pixels with a sensible precision and appends `"px"` at the end. Example: `123.456789` → `"123.457px"`. The rationale for rounding is that no screen could currently resolve up to a 10,000th fraction of a pixel, and for the time being resolving up to a 1,000th franction of a pixel seems more than enough. This function could be used for less clutter in debugging and also for dealing with really big or really small numbers which could end up converted to a string using "exponential" format as `"1.2345e-50"`, and when a web browser receives such a weird value for a pixels amount, it considers it invalid. And if such an "invalid" pixels amount is used as part of a "complex" CSS property like `box-shadow` then the whole such property gets discarded.

* `scale(value: number): string` — Rounds a `tranform: scale()` value with a sensible precision and converts to a string. Example: `123.456456456456456456456...` → `"123.456456456"`. See the description of `px()` function for the rationale on rounding. The rationale for the rounding precision being about `10` is that scaling a very high-resolution image to a single pixel should still be precise enough. So if an image has a width of `1,000,000,000px` then in order to scale it to `1px` the scale factor would be `1 / 1,000,000,000`.

* `percent(value: number): string` — Multplies the value by `100`, rounds it with a sensible precision and converts it to a string while appending `"%"` at the end. Example: `1.23456456456456456456456...` → `"123.456456456%"`. See the description of `percent()` function for the rationale on rounding. The rationale for the rounding precision being about `10` is that scaling a very high-resolution image to a single pixel should still be precise enough. So if an image has a width of `1,000,000,000px` then in order to scale it to `1px` the scale factor would be `1 / 1,000,000,000`.

<!-- * `roundAndStringify(value: number, { precision: number })` — Rounds the number up to `precision` fractional digits count, and then stringifies it. `roundAsPixels()` uses this function internally with `precision: 3`. Could be used for rounding non-`px` style values like `transform: scale(1.2345...)`. -->

## Test

```
npm test
```

## GitHub Ban

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/web-browser-style) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/web-browser-style). Issues can be reported in any repo.

## License

[MIT](LICENSE)
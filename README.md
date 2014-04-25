# Composition

Create compositions of middleware just like [koa-compose](https://github.com/koajs/compose).
However, this is for general usage, not specifically for [koa](https://github.com/koajs/koa).
In particular:

- No `debug` instrumentation
- Returns the value of the first middleware.

Use this to create your own middleware platforms.

## Example

```js
var compose = require('composition')

co(function* () {
  var fns = []
  fns.push(function* (next) {
    return yield* next
  })
  fns.push(function* () {
    return this
  })

  var fn = compose(fns)

  var res = yield* fn.call(true)
  // => true
  // because of `return this`
})
```

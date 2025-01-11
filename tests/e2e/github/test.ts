/**
 * This file helps us avoid regressions on issues like: https://github.com/graffle-js/graffle/issues/1304.
 *
 * What we are looking for here is the absence of TypeScript depth limit errors.
 *
 * If such errors are present, they will be caught by our type check step. Then we can come here to debug further.
 */

import { Graffle } from './graffle/__.js'

const graffle = Graffle.create({ checkPreflight: false })

const a = await graffle.query.__typename()

const b = await graffle.query.codeOfConduct({
  $: {
    key: `foo`,
  },
  key: true,
})

console.log(a, b)

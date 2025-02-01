/**
 * This file helps us avoid regressions on issues like: https://github.com/graffle-js/graffle/issues/1304.
 *
 * What we are looking for here is the absence of TypeScript depth limit errors.
 *
 * If such errors are present, they will be caught by our type check step. Then we can come here to debug further.
 */

import { Github } from './graffle/__.js'

const github = Github.create({ check: { preflight: false } })

const a = await github.query.__typename()

const b = await github.query.codeOfConduct({
  $: {
    key: `foo`,
  },
  key: true,
})

console.log(a, b)

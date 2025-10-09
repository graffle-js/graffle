import { Test } from '@wollybeard/kit/test'
import { Possible } from '../__tests__/fixtures/possible/$.js'
import { Var } from '../var/$.js'

const $ = Var.$
type $ = typeof $

Test
  .describe('static document builder')
  .on(Possible.document)
  .case({ query: { getUser: { id: true, idNonNull: true } } })
  .case({ query: { getUser: { id: true }, getPost: { idNonNull: true } } })
  .case({ query: { getUserWithArg: { stringWithRequiredArg: { $: { string: $ } } } } })
  .case({ query: { getUser: { id: true } }, mutation: { updateUser: { id: true } } })
  .test()

import { Var } from '#src/docpar/object/var/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Test } from '@wollybeard/kit/test'

const $ = Var.$
type $ = typeof $

Test
  .describe('static document builder')
  .on((doc: Possible.SelectionSets.$Document) => Possible.gql(doc as any))
  .case({ query: { getUser: { id: true, idNonNull: true } } })
  .case({ query: { getUser: { id: true }, getPost: { idNonNull: true } } })
  .case({ query: { getUserWithArg: { stringWithRequiredArg: { $: { string: $ } } } } })
  .case({ query: { getUser: { id: true } }, mutation: { updateUser: { id: true } } })
  .test()

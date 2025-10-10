import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { Ts } from '@wollybeard/kit'
import type { TadaDocumentNode } from 'gql.tada'

//
// String input (gql-tada)
//

Ts.Test.exact<TadaDocumentNode<{ date: Date | null }, {}, void>>()(Possible.gql(`query { date }`))
Ts.Test.exact<TadaDocumentNode<{ date: unknown }, {}, void>>()(PossibleNoCustomScalars.gql(`query { date }`))

// @ts-expect-error
Possible.gql({ foo: true })

//
// Object input (document builder)
//

Ts.Test.exact<
  TypedFullDocument.TypedFullDocumentString<{
    myQuery: {
      result: { date: Date | null }
      variables: {}
    }
  }>
>()(Possible.gql({ query: { myQuery: { date: true } } }))

Ts.Test.exact<
  TypedFullDocument.TypedFullDocumentString<{
    myQuery: {
      result: { date: string | null }
      variables: {}
    }
  }>
>()(PossibleNoCustomScalars.gql({ query: { myQuery: { date: true } } }))

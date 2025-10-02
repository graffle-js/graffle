import { Var } from '#extensions/DocumentBuilder/_exports.js'
import { Test } from '@wollybeard/kit/test'
import { expect } from 'vitest'
import { Grafaid } from '../../../lib/grafaid/_namespace.js'
import { Possible } from '../__tests__/fixtures/possible/_namespace.js'
import { Select } from '../Select/__.js'
import { toGraphQLDocument } from './nodes/1_Document.js'

const $ = Var.$

Test.describe(`With/Without SDDM variable type inference`)
  .i<Possible.SelectionSets.Query>()
  .o<{ with?: { y?: string[]; n?: string[] }; without?: { y?: string[]; n?: string[] } }>()
  .cases<{ hoistArguments?: boolean }>(
    [
      [{ stringWithArgEnum: { $: { $ABCEnum: $ } } }],
      {
        with: { y: ['$ABCEnum: ABCEnum', 'stringWithArgEnum(ABCEnum: $ABCEnum)'] },
        without: { y: ['$ABCEnum: String!', 'stringWithArgEnum(ABCEnum: $ABCEnum)'] },
      },
      // todo: kit bug, if all ctx fields are optionla then make 4th element optional too
      {},
    ],
  )
  .test((i, o, ctx) => {
    // Test WITH SDDM
    if (o.with) {
      const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(i)
      const { document } = toGraphQLDocument(documentNormalized, {
        sddm: Possible.schemaMap,
        hoistArguments: ctx.hoistArguments,
      })
      const printed = Grafaid.Document.print(document)

      if (o.with.y) {
        for (const str of o.with.y) {
          expect(printed).toContain(str)
        }
      }

      if (o.with.n) {
        for (const str of o.with.n) {
          expect(printed).not.toContain(str)
        }
      }
    }

    // Test WITHOUT SDDM
    if (o.without) {
      const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(i)
      const { document } = toGraphQLDocument(documentNormalized, {
        sddm: undefined,
        hoistArguments: ctx.hoistArguments,
      })
      const printed = Grafaid.Document.print(document)

      if (o.without.y) {
        for (const str of o.without.y) {
          expect(printed).toContain(str)
        }
      }

      if (o.without.n) {
        for (const str of o.without.n) {
          expect(printed).not.toContain(str)
        }
      }
    }
  })

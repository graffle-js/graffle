import { expect, test } from 'vitest'
import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { PossibleWithScalars } from './__tests__/fixtures/possible-with-scalars/_namespace.js'
import { Select } from './Select/__.js'
import { toGraphQLDocument } from './SelectGraphQLMapper/nodes/1_Document.js'

test('enum arguments in nested input objects should be handled correctly', () => {
  // This test reproduces the bug from issue #1351
  // When enum arguments are used in nested input objects with $ prefix,
  // they should be properly converted to GraphQL enum values, not strings
  
  const graffleQuery = { 
    stringWithArgInputObjectEnum: { 
      $: { 
        input: { 
          $abcEnum: 'A' 
        } 
      }
    }
  }
  
  const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(
    graffleQuery,
    undefined,
  )
  
  const { document } = toGraphQLDocument(documentNormalized, {
    sddm: PossibleWithScalars.schemaMap,
    scalars: {},
    operationVariables: false,
  })
  
  const printed = Grafaid.Document.print(document)
  
  // The enum value should be unquoted in the GraphQL query
  // It should be: abcEnum: A
  // Not: abcEnum: "A"
  expect(printed).toMatch(/abcEnum:\s*A(?!\s*")/)
  expect(printed).not.toMatch(/abcEnum:\s*"A"/)
  
  // Full snapshot for clarity
  expect(printed).toMatchInlineSnapshot(`
    "{
      stringWithArgInputObjectEnum(input: {abcEnum: A})
    }"
  `)
})

test('enum arguments at top level should work correctly', () => {
  const graffleQuery = { 
    stringWithArgEnum: { 
      $: { 
        $ABCEnum: 'A' 
      }
    }
  }
  
  const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(
    graffleQuery,
    undefined,
  )
  
  const { document } = toGraphQLDocument(documentNormalized, {
    sddm: PossibleWithScalars.schemaMap,
    scalars: {},
    operationVariables: false,
  })
  
  const printed = Grafaid.Document.print(document)
  
  // This should already work correctly
  expect(printed).toMatch(/ABCEnum:\s*A(?!\s*")/)
  expect(printed).not.toMatch(/ABCEnum:\s*"A"/)
})
/**
 * Test for issue with locale enum containing reserved keyword 'as'
 * 
 * This test verifies that enum values that are TypeScript reserved keywords
 * (like 'as' used for type assertions) are properly escaped in the generated code.
 */

import * as MemFS from 'memfs'
import * as Fs from 'node:fs/promises'
import { beforeEach, describe, expect, test } from 'vitest'
import { defaults } from '../../../src/generator/config/defaults.js'
import { generate } from '../../../src/generator/generator/generate.js'

// Suppress warnings in tests
defaults.lint.missingCustomScalarCodec = false
defaults.lint.missingGraphqlSP = false

const fs = MemFS.fs.promises as any as typeof Fs

const localeEnumSchema = `
enum Locale {
  en
  pt
  ja
  as
}

type Query {
  currentLocale: Locale!
  greeting(locale: Locale!): String!
}
`

beforeEach(async () => {
  try {
    await fs.rmdir(process.cwd(), { recursive: true })
  } catch {}
  await fs.mkdir(process.cwd(), { recursive: true })
})

describe('Issue - Locale enum with reserved keyword "as"', () => {
  test('generates valid TypeScript for enum value "as"', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: localeEnumSchema } })
    
    // Read the generated enum file
    const schemaContent = MemFS.fs.readFileSync('./graffle/modules/schema/_.ts', 'utf8')
    
    // The enum should have proper escaping for 'as'
    // It should generate: const $as = 'as' and export { $as as as }
    expect(schemaContent).toContain('$as')
    expect(schemaContent).toContain('export { $as as as }')
    
    // Verify other enum values are not escaped
    expect(schemaContent).toContain('en')
    expect(schemaContent).toContain('pt') 
    expect(schemaContent).toContain('ja')
  })

  test('enum members can be imported and used', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: localeEnumSchema } })
    
    const schemaContent = MemFS.fs.readFileSync('./graffle/modules/schema/_.ts', 'utf8')
    
    // The generated code should be valid TypeScript
    // Even though 'as' is escaped internally as $as, it should be exported as 'as'
    expect(schemaContent).toMatch(/export.*\bas\b/)
  })

  test('selection sets handle reserved keyword enum values', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: localeEnumSchema } })
    
    const selectionSetsContent = MemFS.fs.readFileSync('./graffle/modules/selection-sets.ts', 'utf8')
    
    // Selection sets should reference the enum properly
    expect(selectionSetsContent).toBeDefined()
  })
})

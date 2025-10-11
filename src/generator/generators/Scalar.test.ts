import * as MemFS from 'memfs'
import * as Fs from 'node:fs/promises'
import { beforeEach, describe, expect, test } from 'vitest'
import { defaults } from '../config/defaults.js'
import { generate } from '../generator/generate.js'

// Suppress warnings in tests
defaults.lint.missingCustomScalarCodec = false
defaults.lint.missingGraphqlSP = false

const fs = MemFS.fs.promises as any as typeof Fs

// Test fixtures
const schemas = {
  withReservedScalars: `
    scalar bigint
    scalar boolean
    scalar interface

    type Query {
      getBigint: bigint
      getBoolean: boolean
      getInterface: interface
    }
  `,
  bigintOnly: `
    scalar bigint
    type Query {
      getBigint: bigint
    }
  `,
}

const customScalarsCode = `
  export const bigint = {
    encode: (value) => value.toString(),
    decode: (value) => BigInt(value),
  }
  export const boolean = {
    encode: (value) => String(value),
    decode: (value) => value === 'true',
  }
`

const readGeneratedFiles = () => ({
  scalar: MemFS.fs.readFileSync('./graffle/modules/scalar.ts', 'utf8'),
  schema: MemFS.fs.readFileSync('./graffle/modules/schema/$.ts', 'utf8'),
  sddm: MemFS.fs.readFileSync('./graffle/modules/schema-driven-data-map.ts', 'utf8'),
})

beforeEach(async () => {
  try {
    await fs.rmdir(process.cwd(), { recursive: true })
  } catch {}
  await fs.mkdir(process.cwd(), { recursive: true })
})

describe('Issue #1370 - TypeScript export conflict with custom scalars', () => {
  test('custom scalars should be available as both types and values', async () => {
    const customScalarsBigIntDateTime = `
      import { Graffle } from 'graffle'

      export const BigInt = Graffle.Scalars.create('BigInt', {
        decode: (value) => globalThis.BigInt(value),
        encode: (value) => String(value),
      })

      export const DateTime = Graffle.Scalars.create('DateTime', {
        decode: (value) => new Date(value),
        encode: (value) => value.toISOString(),
      })
    `

    const schemaWithCustomScalars = `
      scalar BigInt
      scalar DateTime

      type Query {
        getBigInt: BigInt
        getDateTime: DateTime
      }
    `

    await fs.writeFile('./scalars.ts', customScalarsBigIntDateTime)
    await generate({ fs, schema: { type: 'sdl', sdl: schemaWithCustomScalars } })
    const { scalar, sddm } = readGeneratedFiles()

    // The scalar module should import custom scalars namespace
    expect(scalar).toContain('import * as CustomScalars from "../../scalars.js"')

    // Should export both const and type for each custom scalar
    expect(scalar).toContain('export const BigInt = CustomScalars.BigInt')
    expect(scalar).toContain('export type BigInt = typeof CustomScalars.BigInt')
    expect(scalar).toContain('export const DateTime = CustomScalars.DateTime')
    expect(scalar).toContain('export type DateTime = typeof CustomScalars.DateTime')

    // SDDM should be able to reference scalars as values
    expect(sddm).toContain('const BigInt = $$Scalar.BigInt')
    expect(sddm).toContain('const DateTime = $$Scalar.DateTime')
  })
})

describe('Issue #1367 - Import format noExtension not working', () => {
  test('noExtension importFormat should not add .js extensions to scalar imports', async () => {
    const customScalarsBigIntDateTime = `
      import { Graffle } from 'graffle'

      export const BigInt = Graffle.Scalars.create('BigInt', {
        decode: (value) => globalThis.BigInt(value),
        encode: (value) => String(value),
      })

      export const DateTime = Graffle.Scalars.create('DateTime', {
        decode: (value) => new Date(value),
        encode: (value) => value.toISOString(),
      })
    `

    const schemaWithCustomScalars = `
      scalar BigInt
      scalar DateTime

      type Query {
        getBigInt: BigInt
        getDateTime: DateTime
      }
    `

    await fs.writeFile('./scalars.ts', customScalarsBigIntDateTime)
    await generate({
      fs,
      schema: { type: 'sdl', sdl: schemaWithCustomScalars },
      importFormat: 'noExtension',
    })
    const { scalar } = readGeneratedFiles()

    // Should NOT have .js extension when importFormat is noExtension
    expect(scalar).toContain('import * as CustomScalars from "../../scalars"')
    expect(scalar).not.toContain('from "../../scalars.js"')
  })
})

describe('Issue #1354 - TypeScript reserved keywords', () => {
  test('escapes reserved keywords in codecless scalars', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { scalar } = readGeneratedFiles()

    // Codecless reserved keywords use escaped names with export aliases
    expect(scalar).toContain('type $bigint =')
    expect(scalar).toContain('export { type $bigint as bigint }')
    expect(scalar).toContain(`ScalarCodecless<"bigint">`)

    expect(scalar).toContain('type $boolean =')
    expect(scalar).toContain('export { type $boolean as boolean }')
    expect(scalar).toContain(`ScalarCodecless<"boolean">`)

    expect(scalar).toContain('type $interface =')
    expect(scalar).toContain('export { type $interface as interface }')
    expect(scalar).toContain(`ScalarCodecless<"interface">`)
  })

  test('escapes reserved keywords with custom scalar codecs', async () => {
    await fs.writeFile('./scalars.ts', customScalarsCode)
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.bigintOnly } })
    const { scalar } = readGeneratedFiles()

    // Uses dual export pattern for reserved keyword scalar
    expect(scalar).toContain('const $bigint = CustomScalars.bigint')
    expect(scalar).toContain('type $bigint = typeof CustomScalars.bigint')
    expect(scalar).toContain('export { $bigint as bigint }')

    // Decoded/Encoded types use plain name (not reserved)
    expect(scalar).toContain('export type bigintDecoded =')
    expect(scalar).toContain('export type bigintEncoded =')

    // Original names in runtime references
    expect(scalar).toContain('typeof CustomScalars.bigint')
  })

  test('cross-module references use escaped names correctly', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { schema, sddm } = readGeneratedFiles()

    // SDDM uses string literals for codecless scalars
    expect(sddm).toContain('const bigint = "bigint"')
    expect(sddm).toContain('const interface = "interface"')

    // Schema interface scalars object uses types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
    expect(schema).toContain('interface: $Types.interface')
  })

  test('cross-module references with custom scalar codecs', async () => {
    await fs.writeFile('./scalars.ts', customScalarsCode)
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { scalar, schema, sddm } = readGeneratedFiles()

    // Scalar module uses re-export syntax for reserved keywords
    expect(scalar).toContain('const $bigint = CustomScalars.bigint')
    expect(scalar).toContain('type $bigint = typeof CustomScalars.bigint')
    expect(scalar).toContain('export { $bigint as bigint }')
    expect(scalar).toContain('const $boolean = CustomScalars.boolean')
    expect(scalar).toContain('type $boolean = typeof CustomScalars.boolean')
    expect(scalar).toContain('export { $boolean as boolean }')

    // SDDM references with custom scalars
    expect(sddm).toContain('const bigint = $$Scalar.bigint')
    expect(sddm).toContain('const boolean = $$Scalar.boolean')

    // Schema interface scalars object uses types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
    expect(schema).toContain('boolean: $Types.boolean')

    // Runtime map uses original names
    expect(scalar).toContain('bigint: CustomScalars.bigint')
  })

  test('schema scalars object uses escaped names for reserved keywords', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.bigintOnly } })
    const { schema } = readGeneratedFiles()

    // The Schema interface scalars object should reference types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
  })
})

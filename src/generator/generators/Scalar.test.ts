import * as MemFS from 'memfs'
import * as Fs from 'node:fs/promises'
import { beforeEach, describe, expect, test } from 'vitest'
import { generate } from '../generator/generate.js'

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
  schema: MemFS.fs.readFileSync('./graffle/modules/schema.ts', 'utf8'),
  sddm: MemFS.fs.readFileSync('./graffle/modules/schema-driven-data-map.ts', 'utf8'),
})

beforeEach(async () => {
  try {
    await fs.rmdir(process.cwd(), { recursive: true })
  } catch {}
  await fs.mkdir(process.cwd(), { recursive: true })
})

describe('Issue #1354 - TypeScript reserved keywords', () => {
  test('escapes reserved keywords in codecless scalars', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { scalar } = readGeneratedFiles()

    // Escaped type names
    expect(scalar).toContain('export type $bigint =')
    expect(scalar).toContain('export type $boolean =')
    expect(scalar).toContain('export type $interface =')

    // Original names in ScalarCodecless
    expect(scalar).toContain('ScalarCodecless<"bigint">')
    expect(scalar).toContain('ScalarCodecless<"boolean">')
    expect(scalar).toContain('ScalarCodecless<"interface">')
  })

  test('escapes reserved keywords with custom scalar codecs', async () => {
    await fs.writeFile('./scalars.ts', customScalarsCode)
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.bigintOnly } })
    const { scalar } = readGeneratedFiles()

    // Escaped type definitions
    expect(scalar).toContain('export type $bigint = typeof')
    expect(scalar).toContain('type $bigint_ = typeof')
    expect(scalar).toContain('export type $bigintDecoded =')
    expect(scalar).toContain('export type $bigintEncoded =')

    // Original names in runtime references
    expect(scalar).toContain('typeof CustomScalars.bigint')
  })

  test('cross-module references use escaped names correctly', async () => {
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { schema, sddm } = readGeneratedFiles()

    // Schema module exports with escaped names
    expect(schema).toContain('export type $bigint = $$Scalar.$bigint')
    expect(schema).toContain('export type $interface = $$Scalar.$interface')

    // SDDM uses string literals for codecless scalars
    expect(sddm).toContain('const bigint = "bigint"')
    expect(sddm).toContain('const interface = "interface"')

    // Field types reference escaped names
    expect(schema).toContain('namedType: $$NamedTypes.$$bigint')
    expect(schema).toContain('namedType: $$NamedTypes.$$interface')
  })

  test('cross-module references with custom scalar codecs', async () => {
    await fs.writeFile('./scalars.ts', customScalarsCode)
    await generate({ fs, schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
    const { scalar, schema, sddm } = readGeneratedFiles()

    // Scalar module with escaped types
    expect(scalar).toContain('export type $bigint = typeof CustomScalars.bigint')
    expect(scalar).toContain('export type $boolean = typeof CustomScalars.boolean')

    // Schema module references
    expect(schema).toContain('export type $bigint = $$Scalar.$bigint')
    expect(schema).toContain('export type $boolean = $$Scalar.$boolean')

    // SDDM references with custom scalars
    expect(sddm).toContain('const bigint = $$Scalar.$bigint')
    expect(sddm).toContain('const boolean = $$Scalar.$boolean')

    // Runtime map uses original names
    expect(scalar).toContain('bigint: CustomScalars.bigint')
  })
})

import { Env, Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import { describe, expect, test } from 'vitest'
import { defaults } from '../config/defaults.js'
import { generate } from '../generator/generate.js'

const p = Fs.Path.fromLiteral

// Suppress warnings in tests
defaults.lint.missingCustomScalarCodec = false
defaults.lint.missingGraphqlSP = false

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

const readGeneratedFiles = Effect.gen(function*() {
  const base = Fs.Path.AbsDir.fromString(`${process.cwd()}/graffle/modules/`)
  const scalar = yield* Fs.readString(Fs.Path.join(base, p(`./scalar.ts`)))
  const schema = yield* Fs.readString(Fs.Path.join(base, p(`./schema/_.ts`)))
  const sddm = yield* Fs.readString(Fs.Path.join(base, p(`./schema-driven-data-map.ts`)))
  return { scalar, schema, sddm }
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

    const layout = Fs.Builder.spec(Env.env.cwd)
      .file('scalars.ts', customScalarsBigIntDateTime)
      .toLayout()

    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemaWithCustomScalars } })
      return yield* readGeneratedFiles
    })

    const { scalar, sddm } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer(layout))),
    )

    // The scalar module should import custom scalars namespace
    expect(scalar).toContain(`import * as CustomScalars from '../../scalars.js'`)

    // Should export both const and type for each custom scalar
    expect(scalar).toContain('export const BigInt = CustomScalars.BigInt')
    expect(scalar).toContain('export type BigInt = typeof CustomScalars.BigInt')
    expect(scalar).toContain('export const DateTime = CustomScalars.DateTime')
    expect(scalar).toContain('export type DateTime = typeof CustomScalars.DateTime')

    // SDDM should reference scalars in field type definitions
    expect(sddm).toContain('namedType: $$Scalar.BigInt')
    expect(sddm).toContain('namedType: $$Scalar.DateTime')
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

    const layout = Fs.Builder.spec(Env.env.cwd)
      .file('scalars.ts', customScalarsBigIntDateTime)
      .toLayout()

    const program = Effect.gen(function*() {
      yield* generate({
        schema: { type: 'sdl', sdl: schemaWithCustomScalars },
        importFormat: 'noExtension',
      })
      return yield* readGeneratedFiles
    })

    const { scalar } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer(layout))),
    )

    // Should NOT have .js extension when importFormat is noExtension
    expect(scalar).toContain(`import * as CustomScalars from '../../scalars'`)
    expect(scalar).not.toContain(`from '../../scalars.js'`)
  })
})

describe('Issue #1354 - TypeScript reserved keywords', () => {
  test('escapes reserved keywords in codecless scalars', async () => {
    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
      return yield* readGeneratedFiles
    })

    const { scalar } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer({}))),
    )

    // Codecless scalars generate runtime objects with identity codecs
    expect(scalar).toContain('const $bigint =')
    expect(scalar).toContain('type $bigint =')
    expect(scalar).toContain('export { $bigint as bigint }')
    expect(scalar).toContain(`Scalar<'bigint', string, string>`)

    expect(scalar).toContain('const $boolean =')
    expect(scalar).toContain('type $boolean =')
    expect(scalar).toContain('export { $boolean as boolean }')
    expect(scalar).toContain(`Scalar<'boolean', string, string>`)

    expect(scalar).toContain('const $interface =')
    expect(scalar).toContain('type $interface =')
    expect(scalar).toContain('export { $interface as interface }')
    expect(scalar).toContain(`Scalar<'interface', string, string>`)
  })

  test('escapes reserved keywords with custom scalar codecs', async () => {
    const layout = Fs.Builder.spec(`${process.cwd()}/`)
      .file('scalars.ts', customScalarsCode)
      .toLayout()

    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemas.bigintOnly } })
      return yield* readGeneratedFiles
    })

    const { scalar } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer(layout))),
    )

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
    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
      return yield* readGeneratedFiles
    })

    const { schema, sddm } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer({}))),
    )

    // Codecless scalars use same pattern as custom scalars in new SDDM
    expect(sddm).toContain('namedType: $$Scalar.bigint')
    expect(sddm).toContain('namedType: $$Scalar.interface')

    // Schema interface scalars object uses types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
    expect(schema).toContain('interface: $Types.interface')
  })

  test('cross-module references with custom scalar codecs', async () => {
    const layout = Fs.Builder.spec(`${process.cwd()}/`)
      .file('scalars.ts', customScalarsCode)
      .toLayout()

    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemas.withReservedScalars } })
      return yield* readGeneratedFiles
    })

    const { scalar, schema, sddm } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer(layout))),
    )

    // Scalar module uses re-export syntax for reserved keywords
    expect(scalar).toContain('const $bigint = CustomScalars.bigint')
    expect(scalar).toContain('type $bigint = typeof CustomScalars.bigint')
    expect(scalar).toContain('export { $bigint as bigint }')
    expect(scalar).toContain('const $boolean = CustomScalars.boolean')
    expect(scalar).toContain('type $boolean = typeof CustomScalars.boolean')
    expect(scalar).toContain('export { $boolean as boolean }')

    // Custom scalars referenced in field definitions
    expect(sddm).toContain('namedType: $$Scalar.bigint')
    expect(sddm).toContain('namedType: $$Scalar.boolean')

    // Schema interface scalars object uses types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
    expect(schema).toContain('boolean: $Types.boolean')

    // Runtime map uses original names
    expect(scalar).toContain('bigint: CustomScalars.bigint')
  })

  test('schema scalars object uses escaped names for reserved keywords', async () => {
    const program = Effect.gen(function*() {
      yield* generate({ schema: { type: 'sdl', sdl: schemas.bigintOnly } })
      return yield* readGeneratedFiles
    })

    const { schema } = await Effect.runPromise(
      program.pipe(Effect.provide(Fs.Memory.layer({}))),
    )

    // The Schema interface scalars object should reference types from barrel
    expect(schema).toContain('bigint: $Types.bigint')
  })
})

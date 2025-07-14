import * as MemFS from 'memfs'
import { describe, expect, test } from 'vitest'
import { generate } from '../generator/generate.js'

const fs = MemFS.fs.promises as any

describe('Scalar module generation', () => {
  describe('Issue #1354 - TypeScript reserved keywords', () => {
    test('should escape reserved TypeScript keywords in scalar names', async () => {
      await generate({
        fs,
        schema: {
          type: 'sdl',
          sdl: `
            scalar bigint
            scalar boolean
            
            type Query {
              getBigint: bigint
              getBoolean: boolean
            }
          `
        }
      })
      
      const scalarModule = MemFS.fs.readFileSync('./graffle/modules/scalar.ts', 'utf8')
      
      // The generated code should use escaped names (e.g., $bigint instead of bigint)
      // to avoid TypeScript compilation errors
      expect(scalarModule).toContain('export type $bigint =')
      expect(scalarModule).toContain('export type $boolean =')
      
      // But the scalar references should still use the original names
      expect(scalarModule).toContain('ScalarCodecless<"bigint">')
      expect(scalarModule).toContain('ScalarCodecless<"boolean">')
    })

    test('should escape reserved keywords for custom scalars with codecs', async () => {
      // First create the custom scalars file
      await fs.mkdir('./custom-scalars', { recursive: true })
      await fs.writeFile('./custom-scalars/scalars.js', `
        export const bigint = {
          encode: (value) => value.toString(),
          decode: (value) => BigInt(value),
        }
      `)
      
      await generate({
        fs,
        schema: {
          type: 'sdl',
          sdl: `
            scalar bigint
            type Query {
              getBigint: bigint
            }
          `
        },
        customScalars: './custom-scalars/scalars.js'
      })
      
      const scalarModule = MemFS.fs.readFileSync('./graffle/modules/scalar.ts', 'utf8')
      
      // Type definitions should be escaped
      expect(scalarModule).toContain('export type $bigint = typeof')
      expect(scalarModule).toContain('type $bigint_ = typeof')
      expect(scalarModule).toContain('export type $bigintDecoded =')
      expect(scalarModule).toContain('export type $bigintEncoded =')
      
      // But runtime references should use original names
      expect(scalarModule).toContain('typeof CustomScalars.bigint')
    })
  })
})
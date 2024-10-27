import type { InputOutputCase } from './input.js'

export const defaultName = `default`

export const defaultLibraryPaths = {
  client: `graffle/client`,
  scalars: `graffle/generator-helpers/standard-scalar-types`,
  schema: `graffle/schema`,
  utilitiesForGenerated: `graffle/utilities-for-generated`,
}

export const defaultOutputCase: InputOutputCase = `kebab`

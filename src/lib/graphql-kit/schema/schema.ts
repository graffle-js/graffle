export { buildClientSchema, buildSchema, getNamedType, getNullableType, printSchema as print } from 'graphql'

export * as CustomScalars from './customScalars.js'

export * from './KindMap/_.js'

export * from './typeGuards.js'

export * from './scalars.js'

export const TypeKind = {
  Scalar: `Scalar`,
  Enum: `Enum`,
  Object: `Object`,
  InputObject: `InputObject`,
  Union: `Union`,
  Interface: `Interface`,
}

export namespace TypeKind {
  export type Enum = `Enum`
  export type InputObject = `InputObject`
  export type Object = `Object`
  export type Union = `Union`
  export type Interface = `Interface`
}

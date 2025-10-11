import type { Schema, TypeFunction } from '#graffle/utilities-for-generated'
import type { ConfigManager } from '#lib/config-manager'
import type { Obj, Ts } from '@wollybeard/kit'
import type { IsNever } from 'type-fest'

interface ZeroClient extends Client {
  name: DefaultClientName
  schema: Schema
  interfaces: {
    Root: TypeFunction
    Document: TypeFunction
    MethodsSelect: {}
  }
  selectionSets: {
    $Document: any
  }
  argumentsMap: any
  defaultSchemaUrl: null
}

export type TypeExtensions = Record<string, Record<string, unknown>>

export type Extensions<
  $Extensions extends { Schema?: TypeExtensions } = {
    Schema: TypeExtensions
  },
> = {
  Schema: ConfigManager.OrDefault<$Extensions['Schema'], TypeExtensions>
}

export namespace Client {
  export type Define<$Type extends Partial<Client>> = $Type & Client
}

export interface Client<$Extensions extends Extensions = Extensions> {
  name: string
  schema: Schema<$Extensions['Schema']>
  interfaces: {
    Root: TypeFunction
    Document: TypeFunction
    MethodsSelect: {}
  }
  selectionSets: {
    $Document: any
  }
  argumentsMap: any
  /**
   * If the code was generated with introspection, the URL used is taken as the default schema URL.
   */
  defaultSchemaUrl: string | null
}

export type DefaultClientName = 'default'

export const defaultClientName: DefaultClientName = `default`

export type Clients = GraffleGlobal.Clients

export type IsEmpty = IsNever<keyof Clients> extends true ? true : false

export type ClientUnion = IsEmpty extends true ? ZeroClient : Obj.values<Clients>[number]

export type ClientNames = keyof GraffleGlobal.Clients extends never
  ? Ts.StaticError<'No schemas have been registered. Did you run graffle generate?', { location: 'SchemaNames' }>
  : keyof GraffleGlobal.Clients

// dprint-ignore
export type HasDefaultUrlForSchema<$Schema extends Client> =
    $Schema['defaultSchemaUrl'] extends null
      ? false
      : true

// @ts-ignore passes after generation
export type GetSchema<$Name extends ClientNames> = GraffleGlobal.Clients[$Name]['schema']

// @ts-ignore passes after generation
export type SchemaDefault = GetSchema<DefaultClientName>

// dprint-ignore
export type Has<$Name extends string> =
    $Name extends ClientNames
      ? true
      : false

export type Get<$Name extends string> = $Name extends ClientNames
  // @ts-ignore passes after generation
  ? GraffleGlobal.Clients[$Name]
  : never

// dprint-ignore
export type GetOrGeneric<$Name extends string> =
    IsEmpty extends true
      ? Client
      : $Name extends keyof Clients
        ? Clients[$Name]
        : Client

// dprint-ignore
export type GetOrDefault<$Name extends ClientNames | undefined> =
    $Name extends ClientNames

      // @ts-ignore passes after generation
      ? GraffleGlobal.Clients[$Name]

      // @ts-ignore passes after generation
      : GraffleGlobal.Clients[DefaultClientName]

// dprint-ignore
export type GetSchemaOrDefault<$Name extends ClientNames | undefined> =
    $Name extends ClientNames
      ? GetSchema<$Name>
      : SchemaDefault

/**
 * Extract generated client types from the global registry for a given context.
 *
 * Provides convenient access to the client's generated schema, argumentsMap, and selectionSets
 * based on the context's configured schema name.
 *
 * @example
 * ```ts
 * type MyGenerated = GlobalRegistry.ForContext<MyContext>
 * // MyGenerated: {
 * //   schema: ...,
 * //   argumentsMap: ...,
 * //   selectionSets: { $Document: ... }
 * // }
 * ```
 */
// dprint-ignore
export type ForContext<$Context> =
  $Context extends { configuration: { schema: { current: { name: infer $Name } } } }
    ? GetOrDefault<$Name & (ClientNames | undefined)>
    : never

import type { IsNever } from 'type-fest'
import type { TypeFunction } from '../entrypoints/utilities-for-generated.js'
import type { Schema } from '../generator/generators/Schema.js'
import type { ConfigManager } from '../lib/config-manager/__.js'
import type { Values } from '../lib/prelude.js'
import type { TSErrorDescriptive } from '../lib/ts-error.js'

declare global {
  export namespace GraffleGlobal {
    interface Clients {}
  }
}

interface ZeroClient extends GlobalRegistry.Client {
  name: GlobalRegistry.DefaultClientName
  schema: Schema
  interfaces: {
    Root: TypeFunction.Fn
    Document: TypeFunction.Fn
    MethodsSelect: {}
  }
  defaultSchemaUrl: null
}

export type GlobalRegistry = Record<string, GlobalRegistry.Client>

export namespace GlobalRegistry {
  export type TypeExtensions = Record<string, Record<string, unknown>>

  export type Extensions<
    $Extensions extends { Schema?: TypeExtensions } = {
      Schema: TypeExtensions
    },
  > = {
    Schema: ConfigManager.OrDefault<$Extensions['Schema'], TypeExtensions>
  }

  export interface Client<$Extensions extends Extensions = Extensions> {
    name: string
    schema: Schema<$Extensions['Schema']>
    interfaces: {
      Root: TypeFunction.Fn
      Document: TypeFunction.Fn
      MethodsSelect: {}
    }
    /**
     * If the code was generated with introspection, the URL used is taken as the default schema URL.
     */
    defaultSchemaUrl: string | null
  }

  export type DefaultClientName = 'default'

  export type Clients = GraffleGlobal.Clients

  export type IsEmpty = IsNever<keyof Clients> extends true ? true : false

  export type ClientUnion = IsEmpty extends true ? ZeroClient : Values<Clients>

  export type ClientNames = keyof GraffleGlobal.Clients extends never
    ? TSErrorDescriptive<'SchemaNames', 'No schemas have been registered. Did you run graffle generate?'>
    : keyof GraffleGlobal.Clients

  // dprint-ignore
  export type HasDefaultUrlForSchema<$Schema extends ClientUnion> =
    $Schema['defaultSchemaUrl'] extends null
      ? false
      : true

  // eslint-disable-next-line
  // @ts-ignore passes after generation
  export type GetSchema<$Name extends ClientNames> = GraffleGlobal.Clients[$Name]['schema']

  // eslint-disable-next-line
  // @ts-ignore passes after generation
  export type SchemaDefault = GetSchema<DefaultClientName>

  // dprint-ignore
  export type GetOrDefault<$Name extends ClientNames | undefined> =
    $Name extends ClientNames
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      ? GraffleGlobal.Clients[$Name]
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      : GraffleGlobal.Clients[DefaultClientName]

  // dprint-ignore
  export type GetSchemaOrDefault<$Name extends ClientNames | undefined> =
    $Name extends ClientNames
      ? GetSchema<$Name>
      : SchemaDefault
}

/**
 * Extract schema name from context for multi-schema LSP support.
 *
 * Falls back to `never` if no schema name is configured.
 */
// dprint-ignore
export type Name<$Context> =
  $Context extends { configuration: { schema: { current: { name: infer $Name } } } }
    ? $Name
    : never

/**
 * Check if context has SDDM (Schema-Driven Data Map) configured.
 *
 * Returns `true` if schema.map is defined and not undefined, `false` otherwise.
 */
// dprint-ignore
export type HasMap<$Context> =
  $Context extends { configuration: { schema: { current: { map: infer $Map } } } }
    ? $Map extends undefined ? false : true
    : false

/**
 * Extract schema information from context.
 *
 * Returns an object containing the schema and map from the GlobalRegistry,
 * or `never` if the schema is not properly configured.
 */
// dprint-ignore
export type Info<$Context> =
  $Context extends {
    configuration: {
      schema: {
        current: {
          name: infer $Name extends string
          map: infer $Map
        }
      }
    }
  }
    ? $Name extends keyof GraffleGlobal.Clients
      ? {
          schema: GraffleGlobal.Clients[$Name]['schema']
          map: $Map
        }
      : never
    : never

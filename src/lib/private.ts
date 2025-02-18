export namespace Private {
  const privateSymbol = Symbol(`private`)

  export type privateSymbol = typeof privateSymbol

  /**
   * Some generic private data.
   */
  export type Data = object

  /**
   * Some type that has private data.
   */
  export interface Type {
    [privateSymbol]: Data
  }

  /**
   * Strip private data from a type.
   */
  export type Remove<$Type> = Omit<$Type, privateSymbol>

  /**
   * Attach private data to a type.
   *
   * The given data will be added to the type under a symbol that is private to this library.
   */
  export type Add<$PrivateData extends Data, $Type extends object> =
    & {
      [privateSymbol]: $PrivateData
    }
    & $Type

  /**
   * Get the private data from a type.
   */
  export type Get<$Type extends Type> = $Type[privateSymbol]
}

export namespace Private {
  const privateSymbol = Symbol(`private`)

  type privateSymbol = typeof privateSymbol

  /**
   * Some generic private data.
   */
  export type Data = object

  /**
   * Some type that has private data.
   */
  type Type = {
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
  export type Add<$Type extends object, $PrivateData extends Data> =
    & $Type
    & {
      [privateSymbol]: $PrivateData
    }

  /**
   * Get the private data from a type.
   */
  export type Get<$Type extends Type> = $Type[privateSymbol]
}

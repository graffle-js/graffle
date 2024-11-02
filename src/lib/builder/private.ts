export namespace Private {
  const privateSymbol = Symbol(`private`)
  type privateSymbol = typeof privateSymbol

  export type Data = object

  type Type = {
    [privateSymbol]: Data
  }

  export type Remove<$Type> = Omit<$Type, privateSymbol>

  export type Add<$Type extends object, $PrivateData extends Data> =
    & $Type
    & {
      [privateSymbol]: $PrivateData
    }

  export type Get<$Type extends Type> = $Type[privateSymbol]
}

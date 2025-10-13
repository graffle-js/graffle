// todo: remove this in favour of using kit
export type PropertySignature = {
  name: string
  type: any
  optional: boolean
  optionalUndefined: boolean
}

export namespace PropertySignature {
  // dprint-ignore
  export type ToProperty<$PropertySignature extends PropertySignature> =
    $PropertySignature['optional'] extends true
    ? {
      [_ in $PropertySignature['name']]?: $PropertySignature['type'] | ($PropertySignature['optionalUndefined'] extends true ? undefined : never)
    }
    : {
      [_ in $PropertySignature['name']]: $PropertySignature['type']
    }
}

import type { Ts } from '@wollybeard/kit'

// dprint-ignore
export type NoExcess<$Value, $Constraint> =
  (
    $Value extends unknown  ? $Constraint extends $Value   ?  {} extends $Value    ?  $Constraint :
                                                                                      { [K in keyof $Value]: NoExcess<$Value[K], $Constraint[K]> } :
                                                              $Constraint :
                              never
  )
  | ($Value extends Ts.Narrowable ? $Value : never)

export type NoExcessNonEmpty<$Value, $Constraint> = keyof $Value extends never ? never : NoExcess<$Value, $Constraint>

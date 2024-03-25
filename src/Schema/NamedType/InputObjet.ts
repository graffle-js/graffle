/* eslint-disable @typescript-eslint/ban-types */

type Fields = Record<string, any>

export interface InputObject<
  $Name extends string = string,
  $Fields extends Fields = Fields,
> {
  kind: 'InputObject'
  name: $Name
  fields: $Fields
}

export const InputObject = <$Name extends string, $Fields extends Record<keyof $Fields, any>>(
  name: $Name,
  fields: $Fields,
): InputObject<$Name, $Fields> => ({
  kind: `InputObject`,
  name: name,
  fields: {
    ...fields,
  },
})

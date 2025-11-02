import type { Str } from '@wollybeard/kit'

/**
 * @see http://spec.graphql.org/draft/#sec-Names
 */
// dprint-ignore
export type Parse<S extends string> =
  S extends Head                    ? S :
  S extends `${Head}${infer Rest}`  ? BodyParse<Rest> extends never ? never :
                                                                              S :
                                          never

// dprint-ignore
type BodyParse<S extends string> =
  S extends Body                    ? S :
  S extends `${Body}${infer Rest}`  ? BodyParse<Rest> extends never ?   never :
                                                                                S :
                                          never

export type Head = Str.Char.Letter | '_'
export type Body = Str.Char.Letter | '_' | Str.Char.Digit

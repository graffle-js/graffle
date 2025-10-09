import type { Str } from '@wollybeard/kit'

/**
 * @see http://spec.graphql.org/draft/#sec-Names
 */
// dprint-ignore
export type NameParse<S extends string> =
  S extends NameHead                    ? S :
  S extends `${NameHead}${infer Rest}`  ? NameBodyParse<Rest> extends never ? never :
                                                                              S :
                                          never

// dprint-ignore
type NameBodyParse<S extends string> =
  S extends NameBody                    ? S :
  S extends `${NameBody}${infer Rest}`  ? NameBodyParse<Rest> extends never ?   never :
                                                                                S :
                                          never

export type NameHead = Str.Char.Letter | '_'
export type NameBody = Str.Char.Letter | '_' | Str.Char.Digit

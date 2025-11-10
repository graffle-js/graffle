import { Ts } from '@wollybeard/kit'

export interface ParserError<
  $Message extends string,
  $Context extends object = {},
  $Class extends readonly string[] = [],
> extends Ts.Err.StaticError<['ParseError', ...$Class], $Context & { message: $Message }> {}

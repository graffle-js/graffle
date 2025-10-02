export * as TypeFunction from './TypeFunction.js'

/**
 * A type function (aka. callable type).
 */
export interface TypeFunction {
  params: unknown
  return: unknown
}

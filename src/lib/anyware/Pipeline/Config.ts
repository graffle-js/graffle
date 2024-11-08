import type { StepResultError } from '../StepResult.js'

export interface Options {
  /**
   * @defaultValue `required`
   */
  entrypointSelectionMode?: 'optional' | 'required' | 'off'
  /**
   * If a hook results in a thrown error but is an instance of one of these classes then return it as-is
   * rather than wrapping it in a ContextualError.
   *
   * This can be useful when there are known kinds of errors such as Abort Errors from AbortController
   * which are actually a signaling mechanism.
   */
  passthroughErrorInstanceOf?: Function[]
  /**
   * If a hook results in a thrown error but returns true from this function then return the error as-is
   * rather than wrapping it in a ContextualError.
   *
   * This can be useful when there are known kinds of errors such as Abort Errors from AbortController
   * which are actually a signaling mechanism.
   */
  passthroughErrorWith?: null | ((signal: StepResultError) => boolean)
}

export type Config = Required<Options>

export const resolveOptions = (options?: Options): Config => {
  return {
    passthroughErrorInstanceOf: options?.passthroughErrorInstanceOf ?? [],
    passthroughErrorWith: options?.passthroughErrorWith ?? null,
    entrypointSelectionMode: options?.entrypointSelectionMode ?? `required`,
  }
}

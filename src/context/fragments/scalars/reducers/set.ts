import type { ContextFragment } from '../fragment.js'

export const set = <context extends ContextFragment, fragment extends ContextFragment>(
  context: context,
  fragment: fragment,
): Set<context, fragment> => {
  return {
    ...context,
    ...fragment,
  } as any
}

// dprint-ignore
export type Set<
  $Context extends ContextFragment,
  $Fragment extends ContextFragment,
> = {
  [k in keyof $Context]:
    k extends keyof $Fragment ?
      $Fragment[k] :
      $Context[k]
}

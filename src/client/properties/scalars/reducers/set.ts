import type { ContextFragment } from '../fragment.js'

export const set = <context extends ContextFragment, fragment extends ContextFragment>(
  context: context,
  fragment: ContextFragment,
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
  [_ in keyof $Context]:
    _ extends keyof $Fragment ?
      $Fragment[_] :
      $Context[_]
}

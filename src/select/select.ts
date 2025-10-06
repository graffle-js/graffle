import { identityProxy } from '#/lib/prelude'
import type { GlobalRegistry } from '#/types/GlobalRegistry/GlobalRegistry'

// dprint-ignore
type Create = <$Name extends GlobalRegistry.ClientNames>(name: $Name) =>

  // @ts-ignore passes after generation
  GlobalRegistry.GetOrDefault<$Name>['interfaces']['MethodsSelect']

export const create: Create = (_name) => identityProxy as any

// todo is an any type

// @ts-ignore generated types
export const select: TypeSelectionSets<GlobalRegistry.SchemaDefault> = identityProxy

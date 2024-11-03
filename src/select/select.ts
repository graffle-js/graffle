import { identityProxy } from '../lib/prelude.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'

// dprint-ignore
type Create = <$Name extends GlobalRegistry.ClientNames>(name: $Name) =>
  // eslint-disable-next-line
  // @ts-ignore passes after generation
  GlobalRegistry.GetOrDefault<$Name>['interfaces']['MethodsSelect']

export const create: Create = (_name) => identityProxy as any

// todo is an any type
// eslint-disable-next-line
// @ts-ignore generated types
export const select: TypeSelectionSets<GlobalRegistry.SchemaDefault> = identityProxy

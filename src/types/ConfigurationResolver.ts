export const TypeLevel = Symbol(`TypeLevel`)

export type ConfigurationResolver<
  $Init extends object = object,
  $Partial extends $Init = $Init,
  $TypeLevel extends undefined | ConfigurationResolverTF = undefined,
> =
  & ((partial: Partial<$Partial>, init?: $Init) => Partial<$Partial>)
  & {
    [TypeLevel]: $TypeLevel
  }

export interface ConfigurationResolverTF {
  partial: unknown
  init: unknown
  return: unknown
}

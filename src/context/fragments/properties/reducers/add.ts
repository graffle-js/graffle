import { Obj } from '@wollybeard/kit'
import {
  type ContextFragment,
  contextFragmentPropertiesTypeLevel,
  type Properties,
  type PropertiesComputer,
  type PropertiesComputer$Func,
} from '../fragment.js'

export const add = <$Context extends ContextFragment>(
  context: $Context,
  propertiesInput: {
    static?: Properties
    computed?: ReadonlyArray<PropertiesComputer>
  },
): ContextFragment => {
  const isHasStatic = propertiesInput.static && !Obj.isEmpty(propertiesInput.static)
  const isHasComputed = propertiesInput.computed && propertiesInput.computed.length > 0
  if (!isHasStatic && !isHasComputed) return context

  const static_ = isHasStatic
    ? Object.freeze({
      ...context.properties.static,
      ...propertiesInput.static,
    })
    : context.properties.static

  const computed = isHasComputed
    ? [
      ...context.properties.computed,
      ...propertiesInput.computed!,
    ]
    : context.properties.computed

  const properties = {
    static: static_,
    computed,
    ...contextFragmentPropertiesTypeLevel,
  }
  return {
    ...context,
    properties,
  }
}

export type Add<
  $Context extends ContextFragment,
  $PropertiesStatic extends Properties,
  $PropertiesComputerTypeFunctions extends readonly PropertiesComputer$Func[],
  __ = {
    static: Obj.MergeShallow<$Context['properties']['static'], $PropertiesStatic>
    $computedTypeFunctions: readonly [
      ...$Context['properties']['$computedTypeFunctions'],
      ...$PropertiesComputerTypeFunctions,
    ]
    // passthrough
    computed: $Context['properties']['computed']
  },
> = __

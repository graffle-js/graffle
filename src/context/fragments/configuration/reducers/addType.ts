import type { Configurator } from '../../../../lib/configurator/configurator.js'
import type { Context } from '../../../context.js'
import { initializeConfigurator } from '../initializeConfigurator.js'
import type { InitializeConfigurator } from '../initializeConfigurator.js'

// todo: Make use of this on the fragment for adding the base configurations
export const addType = <
  context extends Context,
  name extends string,
  configurator extends Configurator,
  const initialInput extends configurator['input'],
>(
  context: context,
  name: name,
  configurator: configurator,
  initialInput: initialInput,
): AddType<context, name, configurator, initialInput> => {
  const newContext = {
    ...context,
    configuration: {
      ...context.configuration,
      [name]: initializeConfigurator(configurator, initialInput),
    },
  }

  return newContext as any
}

export type AddType<
  $Context extends Context,
  $Name extends string,
  $Configurator extends Configurator,
  $ConfiguratorInputInitial extends $Configurator['input'],
> =
  // dprint-ignore
  {
		[_ in keyof $Context]:
			_ extends 'configuration' ?
				& { [__name__ in $Name]: InitializeConfigurator<$Configurator, $ConfiguratorInputInitial>}
				& $Context[_] :
			$Context[_]
	}

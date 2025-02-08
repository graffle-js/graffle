import type { Configurator } from '../../../../lib/configurator/configurator.js'
import type { Context } from '../../../../types/context.js'
import type { Client } from '../../../client.js'

export interface ConstructorParameters<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context>
}

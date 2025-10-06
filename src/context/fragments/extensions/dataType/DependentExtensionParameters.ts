import type { Client } from '#/client/client'
import type { Configurator } from '#/lib/configurator/configurator'
import type { Context } from '../../../context.js'

export interface DependentExtensionParameters<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context>
}

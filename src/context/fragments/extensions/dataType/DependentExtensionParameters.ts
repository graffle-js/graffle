import type { Client } from '#src/client/client.js'
import type * as Configurator from '@wollybeard/kit/configurator'
import type { Context } from '../../../context.js'

export interface DependentExtensionParameters<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context>
}

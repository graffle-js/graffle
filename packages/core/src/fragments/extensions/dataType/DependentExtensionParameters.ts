import type { Client } from '#~/client/client.js'
import type { Configurator } from '@wollybeard/kit'
import type { Context } from '../../../context.js'

export interface DependentExtensionParameters<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context>
}

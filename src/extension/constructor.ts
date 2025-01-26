import type { ClientEmpty } from '../client/client.js'
import type { Configurator } from '../types/configurator.js'
import type { Context } from '../types/context.js'

export interface ConstructorParameters<
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: Context
  client: ClientEmpty
}

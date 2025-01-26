import type { Client } from '../client/client.js'
import type { Configurator } from '../types/configurator.js'
import type { Context } from '../types/context.js'

export interface ConstructorParameters<
  $Context extends Context = Context,
  $Configuration extends Configurator.Configuration | undefined = Configurator.Configuration | undefined,
> {
  configuration: $Configuration
  context: $Context
  client: Client<$Context, {}>
}

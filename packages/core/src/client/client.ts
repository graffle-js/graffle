// Minimal client type interfaces for core's fragment infrastructure
// The actual implementations live in @graffle/client package

import type { Context } from '../context.js'

export interface Client<$Context extends Context = Context> {
  _: $Context & {
    requestPipelineDefinition: any
    configuration: $Context['configuration']
  }
}

export type Client_justContext<$Context extends Context = Context> = Client<$Context>

export type ClientEmpty = Client_justContext

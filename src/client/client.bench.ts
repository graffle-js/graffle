import type { ContextEmpty } from '#src/context/ContextEmpty.js'
import { bench } from '@ark/attest'
import { Configuration } from '../context/fragments/configuration/$.js'
import { Transports } from '../context/fragments/transports/$.js'
import type { Client } from './client.js'

bench('Client<ContextEmpty>', () => {
  return {} as Client<ContextEmpty>
}).types([902, 'instantiations'])

bench('Configuration.Add', () => {
  type Result = Client<
    Configuration.Add<ContextEmpty, { output: { defaults: { errorChannel: `return` } } }>
  >
  return {} as Result
}).types([1459, 'instantiations'])

bench('Transports.Configure', () => {
  type Result = Client<
    Transports.Configure<ContextEmpty, 'http', { url: string }>
  >
  return {} as Result
}).types([1007, 'instantiations'])

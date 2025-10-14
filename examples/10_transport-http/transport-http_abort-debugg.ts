import { Graffle } from '../$/graffle/$.js'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

const graffle = Graffle.create().transport({
  url: publicGraphQLSchemaEndpoints.Pokemon,
})

const r1 = graffle.gql(` { pokemon { name } }`)

const ok1: true = null as any as [typeof r1] extends [never] ? false : true

const r2 = Graffle.gql(`{ pokemon { name } }`)

const ok2: true = null as any as [typeof r2] extends [never] ? false : true

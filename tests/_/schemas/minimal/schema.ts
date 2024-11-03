import SchemaBuilder from '@pothos/core'
import { db } from '../db.js'

const builder = new SchemaBuilder({})

builder.queryType({
  fields: t => ({
    id1: t.id({ resolve: () => db.id1, nullable: false }),
  }),
})

export const schema = builder.toSchema({ sortSchema: true })

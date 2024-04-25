import { test } from 'vitest'
import { $Index } from '../../tests/_/schema/generated/SchemaRuntime.js'
import { schema } from '../../tests/_/schema/schema.js'
import { create } from './client.js'

test(`works`, () => {
  create({ schemaIndex: $Index, schema, name: `QueryOnly`, returnMode: `graphql` })
  create({ schemaIndex: $Index, schema, name: `QueryOnly`, returnMode: `data` })
  create({ schemaIndex: $Index, schema, name: `QueryOnly`, returnMode: `dataAndAllErrors` })
  // @ts-expect-error bad returnMode
  create({ schemaIndex: $Index, schema, name: `QueryOnly`, returnMode: `dataAndSchemaErrors` })

  create({ schemaIndex: $Index, schema, name: `default`, returnMode: `graphql` })
  create({ schemaIndex: $Index, schema, name: `default`, returnMode: `data` })
  create({ schemaIndex: $Index, schema, name: `default`, returnMode: `dataAndAllErrors` })
  create({ schemaIndex: $Index, schema, name: `default`, returnMode: `dataAndSchemaErrors` })

  create({ schemaIndex: $Index, schema, returnMode: `graphql` })
  create({ schemaIndex: $Index, schema, returnMode: `data` })
  create({ schemaIndex: $Index, schema, returnMode: `dataAndAllErrors` })
  create({ schemaIndex: $Index, schema, returnMode: `dataAndSchemaErrors` })
})

import { createPrefilled } from '../../../src/entrypoints/alpha/client.js'

import { $defaultSchemaUrl, $Index } from './SchemaRuntime.js'

export const create = createPrefilled(`SocialStudies`, $Index, $defaultSchemaUrl)

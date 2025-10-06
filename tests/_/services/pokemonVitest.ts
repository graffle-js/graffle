import type { GlobalSetupContext } from 'vitest/node'
import { schema } from '../fixtures/schemas/pokemon/schema.js'
import { serveSchema } from '../lib/serveSchema.js'

declare module 'vitest' {
  export interface ProvidedContext {
    service: {
      url: string
    }
  }
}

export default async ({ provide }: GlobalSetupContext) => {
  const service = await serveSchema({ schema, log: true })

  // Set environment variable for subprocesses spawned by tests
  process.env['POKEMON_SCHEMA_URL'] = service.url.href

  provide(`service`, {
    url: service.url.href,
  })

  return () => {
    // Clean up environment variable when stopping
    delete process.env['POKEMON_SCHEMA_URL']
    return service.stop()
  }
}

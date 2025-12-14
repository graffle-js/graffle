import { FileSystem } from '@effect/platform'
import type { PlatformError } from '@effect/platform/Error'
import { Effect } from 'effect'
import * as Path from 'node:path'
import { Config } from '../config/_.js'

/**
 * Validates GraphQLSP configuration and provides helpful warnings/suggestions.
 *
 * Checks:
 * 1. Whether tsconfig.json exists
 * 2. Whether GraphQLSP plugin is configured
 * 3. Whether the SDL schema file exists (if referenced)
 *
 * @see https://github.com/graffle-js/graffle/issues/1389 for auto-configuration feature
 */
export const validateGraphQLSPConfiguration = (
  config: Config.Config,
): Effect.Effect<void, PlatformError, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    // Skip if validation is disabled
    if (config.lint.missingGraphqlSP === false) {
      return
    }

    const fs = yield* FileSystem.FileSystem
    const tsconfigPath = `${config.paths.project.inputs.root}/tsconfig.json`

    // Check if tsconfig.json exists
    const tsconfigExists = yield* fs.exists(tsconfigPath)

    if (!tsconfigExists) {
      // tsconfig.json doesn't exist - provide basic suggestion
      const hasSdlOutput = config.paths.project.outputs.sdl.emitMode !== Config.EmitMode.never

      let schemasConfig: string
      let sdlSetupStep: string

      if (hasSdlOutput) {
        const sdlPath = Path.relative(config.paths.project.inputs.root, config.paths.project.outputs.sdl.path)
        schemasConfig = `"schemas": [{ "name": "${config.name}", "schema": "./${sdlPath}" }]`
        sdlSetupStep = ``
      } else {
        schemasConfig = `"schemas": [{ "name": "${config.name}", "schema": "./graffle/schema.graphql" }]`
        sdlSetupStep = `
3. Enable SDL output in graffle.config.ts to satisfy the schema requirement:

   export default {
     schema: '...',
     outputSDL: true
   }
`
      }

      console.log(`
GraphQLSP provides IDE autocomplete and validation for GraphQL strings.

To enable it:

1. Install the plugin:
   npm add --save-dev @0no-co/graphqlsp

2. Create tsconfig.json with GraphQLSP configuration:

   {
     "compilerOptions": {
       "plugins": [
         {
           "name": "@0no-co/graphqlsp",
           ${schemasConfig}
         }
       ]
     }
   }
${sdlSetupStep}
Documentation:
- https://github.com/0no-co/GraphQLSP

To disable this check: set lint.missingGraphqlSP: false in graffle.config.ts
`)
      return
    }

    // Read and parse tsconfig.json
    const tsconfigContentResult = yield* fs.readFileString(tsconfigPath).pipe(
      Effect.either,
    )

    if (tsconfigContentResult._tag === 'Left') {
      console.warn(`Could not read tsconfig.json: ${tsconfigContentResult.left.message}`)
      return
    }

    const tsconfigContent = tsconfigContentResult.right

    // Parse JSON (with comments support via simple regex strip)
    let tsconfig: any
    try {
      // Remove comments (simple approach - good enough for most tsconfigs)
      const jsonWithoutComments = tsconfigContent
        .replace(/\/\/.*$/gm, '') // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments

      tsconfig = JSON.parse(jsonWithoutComments)
    } catch {
      console.warn(`Could not parse tsconfig.json (may contain syntax not supported by simple parser)`)
      return
    }

    // Check if GraphQLSP is configured
    const plugins = tsconfig?.compilerOptions?.plugins as Array<{ name?: string }> | undefined
    const hasGraphQLSP = plugins?.some((plugin) => plugin.name === '@0no-co/graphqlsp')

    if (!hasGraphQLSP) {
      // GraphQLSP is not configured - provide setup instructions
      const hasSdlOutput = config.paths.project.outputs.sdl.emitMode !== Config.EmitMode.never

      let schemasConfig: string
      let sdlSetupStep: string

      if (hasSdlOutput) {
        const sdlPath = Path.relative(config.paths.project.inputs.root, config.paths.project.outputs.sdl.path)
        schemasConfig = `"schemas": [{ "name": "${config.name}", "schema": "./${sdlPath}" }]`
        sdlSetupStep = ``
      } else {
        schemasConfig = `"schemas": [{ "name": "${config.name}", "schema": "./graffle/schema.graphql" }]`
        sdlSetupStep = `
3. Enable SDL output in graffle.config.ts to satisfy the schema requirement:

   export default {
     schema: '...',
     outputSDL: true
   }
`
      }

      console.log(`
GraphQLSP Setup Recommendation

GraphQLSP provides IDE autocomplete and validation for GraphQL strings.

To enable it:

1. Install the plugin:
   npm add --save-dev @0no-co/graphqlsp

2. Add to your tsconfig.json:

   {
     "compilerOptions": {
       "plugins": [
         {
           "name": "@0no-co/graphqlsp",
           ${schemasConfig}
         }
       ]
     }
   }
${sdlSetupStep}
Documentation:
- https://github.com/0no-co/GraphQLSP

To disable this check: set lint.missingGraphqlSP: false in graffle.config.ts
`)
      return
    }

    // GraphQLSP is configured - check if SDL file exists
    if (config.paths.project.outputs.sdl.emitMode !== Config.EmitMode.never) {
      const sdlExists = yield* fs.exists(config.paths.project.outputs.sdl.path)
      if (sdlExists) {
        // SDL file exists - all good!
        console.log(`GraphQLSP is configured and SDL schema file exists`)
      } else {
        console.warn(
          `GraphQLSP is configured but SDL schema file not found at: ${config.paths.project.outputs.sdl.path}`,
        )
        console.warn(`The SDL file will be generated during this generation run.`)
      }
    } else {
      // Check if user has configured schema path in tsconfig
      const graphqlspPlugin = plugins?.find((p) => p.name === '@0no-co/graphqlsp') as any
      if (!graphqlspPlugin?.schema) {
        console.warn(`GraphQLSP is configured but no schema path is set in tsconfig.json`)
        console.warn(`Add "schema" to the GraphQLSP plugin configuration`)
      }
    }
  })

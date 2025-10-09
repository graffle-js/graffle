import * as Path from 'node:path'
import type { Config } from '../config/config.js'

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
export const validateGraphQLSPConfiguration = async (config: Config): Promise<void> => {
  // Skip if validation is disabled
  if (config.lint.missingGraphqlSP === false) {
    return
  }

  const tsconfigPath = `${config.paths.project.inputs.root}/tsconfig.json`

  // Check if tsconfig.json exists
  let tsconfigExists = false
  try {
    await config.fs.stat(tsconfigPath)
    tsconfigExists = true
  } catch {
    // tsconfig.json doesn't exist - provide basic suggestion
    console.log(``)
    console.log(`💡 Tip: GraphQLSP provides IDE autocomplete and validation for GraphQL strings`)
    console.log(`   To enable it:`)
    console.log(`   1. Install: npm install -D @0no-co/graphqlsp`)
    console.log(`   2. Create tsconfig.json with GraphQLSP configuration`)
    console.log(`   3. See: https://gql-tada.0no.co/get-started/installation`)
    console.log(``)
    console.log(`   To disable this check: set lint.missingGraphqlSP: false in graffle.config.ts`)
    console.log(`   Auto-config feature: https://github.com/graffle-js/graffle/issues/1389`)
    console.log(``)
    return
  }

  // Read and parse tsconfig.json
  let tsconfigContent: string
  try {
    tsconfigContent = await config.fs.readFile(tsconfigPath, 'utf-8')
  } catch (error) {
    console.warn(`⚠️  Could not read tsconfig.json: ${error instanceof Error ? error.message : String(error)}`)
    return
  }

  // Parse JSON (with comments support via simple regex strip)
  let tsconfig: any
  try {
    // Remove comments (simple approach - good enough for most tsconfigs)
    const jsonWithoutComments = tsconfigContent
      .replace(/\/\/.*$/gm, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments

    tsconfig = JSON.parse(jsonWithoutComments)
  } catch (error) {
    console.warn(`⚠️  Could not parse tsconfig.json (may contain syntax not supported by simple parser)`)
    return
  }

  // Check if GraphQLSP is configured
  const plugins = tsconfig?.compilerOptions?.plugins as Array<{ name?: string }> | undefined
  const hasGraphQLSP = plugins?.some(plugin => plugin.name === '@0no-co/graphqlsp')

  if (!hasGraphQLSP) {
    // GraphQLSP is not configured - provide setup instructions
    console.log(``)
    console.log(`✨ GraphQLSP Setup Recommendation`)
    console.log(``)
    console.log(`   GraphQLSP provides IDE autocomplete and validation for GraphQL strings.`)
    console.log(``)
    console.log(`   To enable it:`)
    console.log(``)
    console.log(`   1. Install the plugin:`)
    console.log(`      npm install -D @0no-co/graphqlsp`)
    console.log(``)
    console.log(`   2. Add to your tsconfig.json:`)
    console.log(`      {`)
    console.log(`        "compilerOptions": {`)
    console.log(`          "plugins": [`)
    console.log(`            {`)
    console.log(`              "name": "@0no-co/graphqlsp",`)
    if (config.paths.project.outputs.sdl) {
      // Calculate relative path from project root to SDL
      const sdlPath = Path.relative(config.paths.project.inputs.root, config.paths.project.outputs.sdl)
      console.log(`              "schema": "./${sdlPath}"`)
    } else {
      console.log(`              "schema": "./path/to/schema.graphql"`)
    }
    console.log(`            }`)
    console.log(`          ]`)
    console.log(`        }`)
    console.log(`      }`)
    console.log(``)
    if (!config.paths.project.outputs.sdl) {
      console.log(`   3. Enable SDL output in graffle.config.ts:`)
      console.log(`      export default {`)
      console.log(`        schema: '...',`)
      console.log(`        outputSDL: true, // Required for GraphQLSP`)
      console.log(`      }`)
      console.log(``)
    }
    console.log(`   Learn more: https://gql-tada.0no.co/get-started/installation`)
    console.log(``)
    console.log(`   To disable this check: set lint.missingGraphqlSP: false in graffle.config.ts`)
    console.log(`   Auto-config feature: https://github.com/graffle-js/graffle/issues/1389`)
    console.log(``)
    return
  }

  // GraphQLSP is configured - check if SDL file exists
  if (config.paths.project.outputs.sdl) {
    try {
      await config.fs.stat(config.paths.project.outputs.sdl)
      // SDL file exists - all good!
      console.log(`✓ GraphQLSP is configured and SDL schema file exists`)
    } catch {
      console.warn(`⚠️  GraphQLSP is configured but SDL schema file not found at: ${config.paths.project.outputs.sdl}`)
      console.warn(`   The SDL file will be generated during this generation run.`)
    }
  } else {
    // Check if user has configured schema path in tsconfig
    const graphqlspPlugin = plugins?.find(p => p.name === '@0no-co/graphqlsp') as any
    if (!graphqlspPlugin?.schema) {
      console.warn(`⚠️  GraphQLSP is configured but no schema path is set in tsconfig.json`)
      console.warn(`   Add "schema" to the GraphQLSP plugin configuration`)
    }
  }
}

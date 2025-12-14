import { Generator } from '#src/generator/_.js'
import { TestSchemas } from '#test/schema/_.js'
import { NodeContext, NodeRuntime } from '@effect/platform-node'
import { Fs, Obj, Str } from '@wollybeard/kit'
import { Effect } from 'effect'

// Schemas that have custom scalars and need NoCustomScalars variants
const schemasWithCustomScalars = Obj.keysStrict(Obj.pick(TestSchemas, ['possible', 'pokemon']))

const getMethodsOrganization = (schemaName: string) => {
  if (schemaName === 'possible') {
    return {
      domains: {
        rules: [
          // By argument characteristics - no args
          {
            pattern:
              /^(id|idNonNull|string|date|dateNonNull|dateList|dateListNonNull|dateListList|abcEnum|object|objectNonNull|objectList|objectListNonNull|objectNested|objectNestedWithArgs|interface|interfaceNonNull|unionFooBar|unionFooBarNonNull|unionObject|unionObjectNonNull|lowerCaseUnion|listInt|listIntNonNull|listListInt|listListIntNonNull|bigintField|bigintFieldNonNull|dateInterface1|dateObject1|dateUnion)$/,
            path: 'args.no',
          },

          // By argument characteristics - has optional args
          {
            pattern:
              /^(objectWithArgs|stringWithArgs|dateArg|dateArgList|stringWithArgEnum|stringWithArgInputObject|unionFooBarWithArgs|interfaceWithArgs|stringWithListArg|error|argInputObjectCircular|dateArgInputObject|resultNonNull)$/,
            path: 'args.ye.req.no',
          },

          // By argument characteristics - has required args
          {
            pattern:
              /^(stringWithRequiredArg|dateArgNonNull|dateArgNonNullList|dateArgNonNullListNonNull|stringWithArgInputObjectRequired|stringWithArgInputObjectEnum|stringWithListArgRequired|InputObjectNested|InputObjectNestedNonNull|interfaceHierarchyChildA|interfaceHierarchyChildB|interfaceHierarchyGrandparents|interfaceHierarchyParents|result)$/,
            path: 'args.ye.req.ye',
          },

          // By return type - scalar (exact matches for simple fields)
          { pattern: /^(id|idNonNull|string|bigintField|bigintFieldNonNull|abcEnum|error)$/, path: 'type.scalar' },
          { pattern: /^(stringWith|dateArg|argInputObject|InputObject)/, path: 'type.scalar' },

          // By return type - object
          { pattern: /^object/, path: 'type.object' },

          // By return type - interface
          { pattern: /^interface/, path: 'type.interface' },
          { pattern: 'dateInterface1', path: 'type.interface' },

          // By return type - union
          { pattern: /^(union|result|lowerCaseUnion)/, path: 'type.union' },
          { pattern: 'dateUnion', path: 'type.union' },

          // By return type - list
          { pattern: /^list(?!List)/, path: 'type.list' },
          { pattern: /^(dateList(?!List)|objectList)/, path: 'type.list' },

          // By return type - nested list
          { pattern: /^(listList|dateListList)/, path: 'type.listNested' },

          // By feature - date-related
          { pattern: /^date/, path: 'feat.date' },

          // By feature - input-related
          { pattern: /Input/, path: 'feat.input' },

          // By feature - enum-related
          { pattern: /Enum/, path: 'feat.enum' },

          // By feature - hierarchy-related
          { pattern: /Hierarchy/, path: 'feat.hierarchy' },

          // By feature - error/result-related
          { pattern: /^(error|result)/, path: 'feat.error' },
        ],
      },
    }
  }

  if (schemaName === 'pokemon') {
    return {
      domains: {
        rules: [
          // Pokemon domain
          { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
          { pattern: 'pokemons', path: 'pokemon', methodName: 'list' },
          { pattern: 'addPokemon', path: 'pokemon', methodName: 'create' },

          // Trainer domain
          { pattern: 'trainerByName', path: 'trainer', methodName: 'findByName' },
          { pattern: 'trainers', path: 'trainer', methodName: 'list' },

          // Battle domain
          { pattern: 'battles', path: 'battle', methodName: 'list' },

          // Being domain (polymorphic)
          { pattern: 'beings', path: 'being', methodName: 'list' },
        ],
      },
    }
  }

  return undefined
}

const libraryPaths = {
  client: `#graffle/client`,
  schema: `#graffle/schema`,
  scalars: `#graffle/generator-helpers/standard-scalar-types`,
  utilitiesForGenerated: `#graffle/utilities-for-generated`,
  extensionTransportHttp: `#graffle/extensions/transport-http`,
  extensionDocumentBuilder: `#graffle/extensions/document-builder`,
}

const lintConfig = {
  missingCustomScalarCodec: false,
  missingGraphqlSP: false,
}

const cwd = Fs.Path.AbsDir.fromString(import.meta.dirname)

const generateClient = (params: {
  schemaName: string
  schema: (typeof TestSchemas)[keyof typeof TestSchemas]
  outputDirPath: Fs.Path.RelDir
  scalars?: Fs.Path.RelFile
  methodsOrganization: ReturnType<typeof getMethodsOrganization>
}) =>
  Effect.gen(function*() {
    const outputDirPath = Fs.Path.join(cwd, params.outputDirPath)

    // Clean up existing generated directory
    yield* Fs.remove(outputDirPath, { recursive: true }).pipe(Effect.ignore)

    const config = yield* Generator.generate({
      name: params.schemaName,
      currentWorkingDirectory: cwd,
      schema: {
        type: `instance`,
        instance: params.schema,
      },
      outputSDL: true,
      outputDirPath,
      scalars: params.scalars
        ? Fs.Path.join(cwd, params.scalars)
        : undefined,
      methodsOrganization: params.methodsOrganization,
      libraryPaths,
      nameNamespace: true,
      lint: lintConfig,
    })

    yield* Effect.log(`Generated client for ${params.schemaName} at ${config.paths.project.outputs.root}`)

    return config
  })

const program = Effect.gen(function*() {
  for (const schemaName of Obj.keysStrict(TestSchemas)) {
    const p = Fs.Path.fromLiteral
    const schema = TestSchemas[schemaName]
    const schemaDirName = Str.Case.kebab(schemaName)
    const schemaDir = Fs.Path.RelDir.fromString(schemaDirName)
    const outputDirPath = Fs.Path.join(schemaDir, p(`./client/`))
    const hasCustomScalars = schemasWithCustomScalars.includes(schemaName as any)
    const methodsOrganization = getMethodsOrganization(schemaName)

    yield* generateClient({
      schemaName,
      schema,
      outputDirPath,
      scalars: hasCustomScalars ? Fs.Path.join(schemaDir, p(`./scalars.ts`)) : undefined,
      methodsOrganization,
    })

    // Generate NoCustomScalars variant if applicable
    if (schemasWithCustomScalars.includes(schemaName as any)) {
      const noScalarsName = `${schemaName}NoCustomScalars`
      const noScalarsOutputDir = `${schemaDirName}/clientNoCustomScalars`

      yield* generateClient({
        schemaName: noScalarsName,
        schema,
        outputDirPath: noScalarsOutputDir,
        methodsOrganization,
      })
    }
  }
})

program.pipe(
  Effect.provide(NodeContext.layer),
  NodeRuntime.runMain,
)

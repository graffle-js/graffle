import { Generator } from '#src/generator/$.js'
import { TestSchemas } from '#test/schema/$.js'
import { Obj, Str } from '@wollybeard/kit'
import { rmSync } from 'node:fs'
import { join } from 'node:path'

// Schemas that have custom scalars and need NoCustomScalars variants
const schemasWithCustomScalars = Obj.keysStrict(Obj.pick(TestSchemas, ['possible', 'pokemon']))

for (const schemaName of Obj.keysStrict(TestSchemas)) {
  const schema = TestSchemas[schemaName]
  const schemaDirName = Str.Case.kebab(schemaName)
  const outputDirPath = `${schemaDirName}/client`
  const fullOutputPath = join(import.meta.dirname, outputDirPath)

  // Clean up existing generated directory
  rmSync(fullOutputPath, { recursive: true, force: true })

  const hasCustomScalars = schemasWithCustomScalars.includes(schemaName as any)

  // Domain organization for "possible" and "pokemon" schemas to dogfood the feature
  // With the new API, fields can match multiple rules and appear in multiple namespaces
  const methodsOrganization = schemaName === 'possible'
    ? {
      logical: true,
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
    : schemaName === 'pokemon'
    ? {
      logical: true,
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
    : undefined

  const config = await Generator.generate({
    name: schemaName,
    currentWorkingDirectory: import.meta.dirname,
    schema: {
      type: `instance`,
      instance: schema,
    },
    outputSDL: true,
    outputDirPath,
    scalars: hasCustomScalars ? `./${schemaDirName}/scalars.ts` : undefined,
    methodsOrganization,
    libraryPaths: {
      client: `#graffle/client`,
      schema: `#graffle/schema`,
      scalars: `#graffle/generator-helpers/standard-scalar-types`,
      utilitiesForGenerated: `#graffle/utilities-for-generated`,
      extensionTransportHttp: `#graffle/extensions/transport-http`,
      extensionDocumentBuilder: `#graffle/extensions/document-builder`,
    },
    nameNamespace: true,
    lint: {
      missingCustomScalarCodec: false,
      missingGraphqlSP: false,
    },
  })

  console.log(`Generated client for ${schemaName} at`, config.paths.project.outputs.root)

  // Generate NoCustomScalars variant if applicable
  if (schemasWithCustomScalars.includes(schemaName as any)) {
    const noScalarsName = `${schemaName}NoCustomScalars` as const
    const noScalarsOutputDir = `${schemaDirName}/clientNoCustomScalars`
    const noScalarsFullPath = join(import.meta.dirname, noScalarsOutputDir)

    // Clean up existing generated directory
    rmSync(noScalarsFullPath, { recursive: true, force: true })

    const noScalarsConfig = await Generator.generate({
      name: noScalarsName,
      currentWorkingDirectory: import.meta.dirname,
      schema: {
        type: `instance`,
        instance: schema,
      },
      outputSDL: true,
      outputDirPath: noScalarsOutputDir,
      methodsOrganization,
      libraryPaths: {
        client: `#graffle/client`,
        schema: `#graffle/schema`,
        scalars: `#graffle/generator-helpers/standard-scalar-types`,
        utilitiesForGenerated: `#graffle/utilities-for-generated`,
        extensionTransportHttp: `#graffle/extensions/transport-http`,
        extensionDocumentBuilder: `#graffle/extensions/document-builder`,
      },
      nameNamespace: true,
      lint: {
        missingCustomScalarCodec: false,
        missingGraphqlSP: false,
      },
    })

    console.log(`Generated NoCustomScalars client for ${schemaName} at`, noScalarsConfig.paths.project.outputs.root)
  }
}

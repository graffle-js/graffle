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

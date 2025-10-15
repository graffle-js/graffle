import { Tex } from '#lib/tex'
import { Code } from '#src/lib/Code.js'
import { Obj } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import { getSelectInferDoc } from '../helpers/jsdoc.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorSelect = createModuleGenerator(
  `select`,
  ({ config, code }) => {
    const iSchema = `${$.$$Schema}.Schema`
    const enumMemberName = {
      query: `QUERY `,
      mutation: `MUTATION`,
      subscription: `SUBSCRIPTION`,
    } as const
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorSchema))
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets))
    code`import type { OperationTypeNode } from 'graphql'`
    code(importUtilities(config))
    code``
    code(Tex.title1(`Runtime`))
    code`
      import { createSelect } from '${config.paths.imports.grafflePackage.client}'

      /**
       * Runtime utilities for native GraphQL document selection.
       *
       * Used with the \`.select()\` method to build type-safe native GraphQL documents.
       *
       * @example
       * \`\`\`ts
       * import { Select } from './graffle/select${config.importFormat === 'jsExtension' ? '.js' : ''}'
       *
       * const document = Select.Query({ pokemon: { name: true } })
       * \`\`\`
       */
      export const Select = createSelect(${$.$$Data}.Name)
    `
    code``
    code(Tex.title1(`Buildtime`))
    code`
      /**
       * Type utilities for inferring result types from selection sets.
       *
       * Given a selection set, these types compute the exact TypeScript type
       * of the result data returned from a GraphQL operation.
       *
       * # Usage
       *
       * Each type corresponds to a GraphQL schema type and takes a selection set
       * generic parameter, returning the inferred result type.
       *
       * @example
       * \`\`\`ts
       * import type { Select } from './graffle/select${config.importFormat === 'jsExtension' ? '.js' : ''}'
       *
       * type Result = Select.Query<{ pokemon: { name: true } }>
       * // Result: { pokemon: { name: string } }
       * \`\`\`
       */
      export namespace Select {
    `
    code(Tex.title2(`Root`))
    for (const [operationType, type] of Obj.entries(config.schema.kindMap.index.Root)) {
      if (!type) continue
      code(Code.TSDoc(getSelectInferDoc(type, 'operation')))
      code(
        `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
          renderName(type)
        }> = ${$.$$Utilities}.Docpar.Object.InferResult.Operation<$SelectionSet, ${iSchema}, OperationTypeNode.${
          enumMemberName[operationType]
        }>`,
      )
    }
    code``
    code(Tex.title2(`OutputObject`))
    for (const type of config.schema.kindMap.list.OutputObject) {
      code(Code.TSDoc(getSelectInferDoc(type, 'selectionSet')))
      code(
        `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
          renderName(type)
        }> = ${$.$$Utilities}.Docpar.Object.InferResult.OutputObjectLike<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`,
      )
    }
    code``
    code(Tex.title2(`Union`))
    for (const type of config.schema.kindMap.list.Union) {
      code(Code.TSDoc(getSelectInferDoc(type, 'selectionSet')))
      code(
        `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
          renderName(type)
        }> = ${$.$$Utilities}.Docpar.Object.InferResult.Union<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`,
      )
    }
    code``
    code(Tex.title2(`Interface`))
    for (const type of config.schema.kindMap.list.Interface) {
      code(Code.TSDoc(getSelectInferDoc(type, 'selectionSet')))
      code(
        `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
          renderName(type)
        }> = ${$.$$Utilities}.Docpar.Object.InferResult.Interface<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`,
      )
    }

    code`}`
  },
)

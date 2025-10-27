// todo remove use of Utils.Aug when schema errors not in use
import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import { Str } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsDocument = createModuleGenerator(
  `MethodsDocument`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(importUtilities(config))
    code``

    const contextTsExpectError = config.code.schemaInterfaceExtendsEnabled
      ? ``
      : `// @ts-expect-error Context constraint missing to avoid TS compare depth limit.`
    const contextExtendsClause = config.code.schemaInterfaceExtendsEnabled
      ? `extends ${$.$$Utilities}.Context`
      : ``
    code`
      /**
       * Build and execute type-safe native GraphQL documents.
       *
       * Accepts a document definition with multiple operations and returns
       * a document runner that can execute those operations with full type safety.
       *
       * # Usage
       *
       * Use the document method to build native GraphQL documents containing
       * one or more operations (queries, mutations, subscriptions). The returned
       * runner provides methods to execute each operation with inferred types.
       *
       * @example
       * \`\`\`ts
       * const doc = client.document({
       *   getPokemon: { query: { pokemon: { name: true } } },
       *   addPokemon: { mutation: { addPokemon: { $: { name: 'Pikachu' }, id: true } } }
       * })
       *
       * const result1 = await doc.run('getPokemon')
       * const result2 = await doc.run('addPokemon')
       * \`\`\`
       */
    `
    code(CodeGraphQL.tsInterface({
      name: `Document`,
      parameters: [`$Context ${contextExtendsClause}`],
      // dprint-ignore
      block: `
        <$Document>(document: ${$.$$Utilities}.ExactNonEmpty<
          $Document,
          ${$.$$SelectionSets}.$Document<
            ${contextTsExpectError}
            { scalars: $Context['scalars'] }>
          >
        ): ${$.$$Utilities}.DocumentRunner<
          $Context,
          ${$.$$Schema}.${$.Schema},
          // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
          // Satisfying the constraint on the DocumentRunner type.
          $Document
        >
      `,
    }))
    code()

    const hktTsExpectError = config.code.schemaInterfaceExtendsEnabled
      ? `// @ts-expect-error parameter is Untyped.`
      : ``
    code`
      /**
       * Higher-kinded type for document builder method.
       *
       * Internal type used for type-level computation in the document builder.
       */
      export interface BuilderMethodsDocumentFn extends ${$.$$Utilities}.Kind.Kind {
        ${hktTsExpectError}
        return: Document<this['parameters']>
      }
    `
  },
)

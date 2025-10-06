// todo remove use of Utils.Aug when schema errors not in use
// todo jsdoc
import { Code } from '#/lib/Code'
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
    code(Code.tsInterface({
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
        ): ${$.$$Utilities}.DocumentBuilderKit.DocumentRunner<
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
      export interface BuilderMethodsDocumentFn extends ${$.$$Utilities}.TypeFunction {
        ${hktTsExpectError}
        return: Document<this['params']>
      }
    `
  },
)

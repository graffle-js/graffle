import type { GraphQLObjectType } from 'graphql'
import { Code } from '../../lib/Code.js'
import { values } from '../../lib/prelude.js'
import { getStaticDocumentBuilderDoc } from '../helpers/jsdoc.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { getTsDocContents } from '../helpers/render.js'

/**
 * Check if a root type has any fields with arguments (recursively checking all fields).
 */
const hasFieldsWithArguments = (type: GraphQLObjectType | null): boolean => {
  if (!type) return false
  return Object.values(type.getFields()).some(field => field.args.length > 0)
}

/**
 * Generator for static document builders.
 * Creates typed query, mutation, and subscription builders that return GraphQL document strings.
 */
export const ModuleGeneratorDocument = createModuleGenerator(
  `document`,
  import.meta.url,
  ({ config, code }) => {
    // Only generate for root types that exist in the schema
    const queryType = config.schema.kindMap.index.Root.query
    const mutationType = config.schema.kindMap.index.Root.mutation
    const subscriptionType = config.schema.kindMap.index.Root.subscription

    // Precompute which root types have fields with arguments
    const queryHasArgs = hasFieldsWithArguments(queryType)
    const mutationHasArgs = hasFieldsWithArguments(mutationType)
    const subscriptionHasArgs = hasFieldsWithArguments(subscriptionType)

    code`
      import { createStaticRootType } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'
      import { OperationTypeNode } from 'graphql'
      import type { TypedDocument } from '${config.paths.imports.grafflePackage.client}'
      import type * as SelectionSets from './selection-sets.js'
      import type * as $$Scalar from './scalar.js'
      import type * as ArgumentsMap from './arguments-map.js'
    `

    // Generate typed interfaces for each root type builder
    if (queryType) {
      code(importUtilities(config))
      code`
        import type * as $$Schema from './schema/$.js'

        /**
         * Context for static document type inference.
         * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
         */
        interface StaticDocumentContext {
          typeHookRequestResultDataTypes: never
          scalars: $$Scalar.$Registry
        }
      `

      // Interface JSDoc
      const interfaceDoc = getStaticDocumentBuilderDoc('query')
      code(`/**`)
      interfaceDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export interface QueryBuilder {
          ${
        values(queryType.getFields()).map(field => {
          const fieldDoc = getTsDocContents(config, field)
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromQuery<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const constDoc = getStaticDocumentBuilderDoc('query')
      code(`/**`)
      constDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
      `
    }

    if (mutationType) {
      if (!queryType) {
        code(importUtilities(config))
        code`import type * as $$Schema from './schema/$.js'`
      }
      if (!queryType) {
        code`
          /**
           * Context for static document type inference.
           * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
           */
          interface StaticDocumentContext {
            typeHookRequestResultDataTypes: never
            scalars: $$Scalar.$Registry
          }
        `
      }
      code``

      // Interface JSDoc
      const mutationInterfaceDoc = getStaticDocumentBuilderDoc('mutation')
      code(`/**`)
      mutationInterfaceDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export interface MutationBuilder {
          ${
        values(mutationType.getFields()).map(field => {
          const fieldDoc = getTsDocContents(config, field)
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromMutation<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const mutationConstDoc = getStaticDocumentBuilderDoc('mutation')
      code(`/**`)
      mutationConstDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
      `
    }

    if (subscriptionType) {
      if (!queryType && !mutationType) {
        code(importUtilities(config))
        code`import type * as $$Schema from './schema/$.js'`
      }
      if (!queryType && !mutationType) {
        code`
          /**
           * Context for static document type inference.
           * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
           */
          interface StaticDocumentContext {
            typeHookRequestResultDataTypes: never
            scalars: $$Scalar.$Registry
          }
        `
      }
      code``

      // Interface JSDoc
      const subscriptionInterfaceDoc = getStaticDocumentBuilderDoc('subscription')
      code(`/**`)
      subscriptionInterfaceDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export interface SubscriptionBuilder {
          ${
        values(subscriptionType.getFields()).map(field => {
          const fieldDoc = getTsDocContents(config, field)
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Subscription<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationSubscription<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromSubscription<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const subscriptionConstDoc = getStaticDocumentBuilderDoc('subscription')
      code(`/**`)
      subscriptionConstDoc.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)

      code`
        export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any
      `
    }
  },
)

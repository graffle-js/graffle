import type { GraphQLObjectType } from 'graphql'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'

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
      import type * as ArgumentsMap from './arguments-map.js'
      import type { $TypeInputsIndex } from './type-inputs-index.js'
    `

    // Generate typed interfaces for each root type builder
    if (queryType) {
      // Always pass the proper ArgumentsMap type even if no fields have arguments
      // This is needed for proper type inference
      const argsMapType = 'ArgumentsMap.ArgumentsMap[\'query\']'

      code`
        import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
        import type * as $$Schema from './schema.js'

        export interface QueryBuilder {
          ${
        Object.keys(queryType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, $SelectionSet extends undefined ? {} : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<{ ${fieldName}: $SelectionSet }, ${argsMapType}, $TypeInputsIndex>>`
        ).join('\n  ')
      }
        }

        export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
      `
    }

    if (mutationType) {
      // Always pass the proper ArgumentsMap type even if no fields have arguments
      // This is needed for proper type inference
      const argsMapType = 'ArgumentsMap.ArgumentsMap[\'mutation\']'

      code`
        ${!queryType ? `import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'` : ''}
        ${!queryType ? `import type * as $$Schema from './schema.js'` : ''}

        export interface MutationBuilder {
          ${
        Object.keys(mutationType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, $SelectionSet extends undefined ? {} : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<{ ${fieldName}: $SelectionSet }, ${argsMapType}, $TypeInputsIndex>>`
        ).join('\n  ')
      }
        }

        export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
      `
    }

    if (subscriptionType) {
      // Always pass the proper ArgumentsMap type even if no fields have arguments
      // This is needed for proper type inference
      const argsMapType = 'ArgumentsMap.ArgumentsMap[\'subscription\']'

      code`
        ${!queryType && !mutationType ? `import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'` : ''}
        ${!queryType && !mutationType ? `import type * as $$Schema from './schema.js'` : ''}

        export interface SubscriptionBuilder {
          ${
        Object.keys(subscriptionType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Subscription<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationSubscription<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, $SelectionSet extends undefined ? {} : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<{ ${fieldName}: $SelectionSet }, ${argsMapType}, $TypeInputsIndex>>`
        ).join('\n  ')
      }
        }

        export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any
      `
    }
  },
)
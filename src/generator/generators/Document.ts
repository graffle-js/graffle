import { createModuleGenerator } from '../helpers/moduleGenerator.js'

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

    code`
      import { createStaticRootType } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'
      import { OperationTypeNode } from 'graphql'
      import type { TypedDocument } from '${config.paths.imports.grafflePackage.client}'
      import type * as SelectionSets from './selection-sets.js'
    `

    // Generate typed interfaces for each root type builder
    if (queryType) {
      code`
        export interface QueryBuilder {
          ${
        Object.keys(queryType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Query['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<SelectionSets.Query$Infer<{ ${fieldName}: $SelectionSet }>, SelectionSets.Query$Variables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
      `
    }

    if (mutationType) {
      code`
        export interface MutationBuilder {
          ${
        Object.keys(mutationType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Mutation['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<SelectionSets.Mutation$Infer<{ ${fieldName}: $SelectionSet }>, SelectionSets.Mutation$Variables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
      `
    }

    if (subscriptionType) {
      code`
        export interface SubscriptionBuilder {
          ${
        Object.keys(subscriptionType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Subscription['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<SelectionSets.Subscription$Infer<{ ${fieldName}: $SelectionSet }>, SelectionSets.Subscription$Variables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any
      `
    }
  },
)
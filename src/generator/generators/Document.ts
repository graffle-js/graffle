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
        import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
        import type * as $$Schema from './schema.js'

        // Helper to extract variables from selection set
        type ExtractVariables<$SelectionSet> = $SelectionSet extends Record<string, any>
          ? $SelectionSet extends { $: infer Args }
            ? ExtractVariablesFromArgs<Args>
            : UnionToIntersection<{ [K in keyof $SelectionSet]: ExtractVariables<$SelectionSet[K]> }[keyof $SelectionSet]>
          : {}

        type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
          ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
          : {}

        type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

        export interface QueryBuilder {
          ${
        Object.keys(queryType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Query['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, ExtractVariables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
      `
    }

    if (mutationType) {
      code`
        ${!queryType ? `import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'` : ''}
        ${!queryType ? `import type * as $$Schema from './schema.js'` : ''}
        ${!queryType ? `
        // Helper to extract variables from selection set
        type ExtractVariables<$SelectionSet> = $SelectionSet extends Record<string, any>
          ? $SelectionSet extends { $: infer Args }
            ? ExtractVariablesFromArgs<Args>
            : UnionToIntersection<{ [K in keyof $SelectionSet]: ExtractVariables<$SelectionSet[K]> }[keyof $SelectionSet]>
          : {}

        type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
          ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
          : {}

        type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
        ` : ''}

        export interface MutationBuilder {
          ${
        Object.keys(mutationType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Mutation['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, ExtractVariables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any
      `
    }

    if (subscriptionType) {
      code`
        ${!queryType && !mutationType ? `import type * as $$Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'` : ''}
        ${!queryType && !mutationType ? `import type * as $$Schema from './schema.js'` : ''}
        ${!queryType && !mutationType ? `
        // Helper to extract variables from selection set
        type ExtractVariables<$SelectionSet> = $SelectionSet extends Record<string, any>
          ? $SelectionSet extends { $: infer Args }
            ? ExtractVariablesFromArgs<Args>
            : UnionToIntersection<{ [K in keyof $SelectionSet]: ExtractVariables<$SelectionSet[K]> }[keyof $SelectionSet]>
          : {}

        type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
          ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
          : {}

        type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
        ` : ''}

        export interface SubscriptionBuilder {
          ${
        Object.keys(subscriptionType.getFields()).map(fieldName =>
          `${fieldName}: <$SelectionSet extends SelectionSets.Subscription['${fieldName}']>(selection?: $SelectionSet) => TypedDocument.String<$$Utilities.DocumentBuilderKit.InferResult.OperationSubscription<{ ${fieldName}: $SelectionSet }, $$Schema.Schema>, ExtractVariables<{ ${fieldName}: $SelectionSet }>>`
        ).join('\n  ')
      }
        }

        export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any
      `
    }
  },
)
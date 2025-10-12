import { Code } from '#src/lib/Code.js'
import { Obj } from '@wollybeard/kit'
import type { GraphQLObjectType } from 'graphql'
import { getStaticDocumentBuilderDoc, getStaticDocumentFieldDoc } from '../helpers/jsdoc.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { codeImportAll, codeImportNamed, importUtilities } from '../helpers/pathHelpers.js'

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

    code(
      `import { createStaticRootType } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'`,
    )
    code(`import { OperationTypeNode } from 'graphql'`)
    code(codeImportNamed(config, { names: { schemaDrivenDataMap: 'sddm' }, from: './schema-driven-data-map' }))
    code(
      `import type { TypedDocument } from '${config.paths.imports.grafflePackage.client}'`,
    )
    code(codeImportAll(config, { as: 'SelectionSets', from: './selection-sets/$', type: true }))
    code(codeImportAll(config, { as: '$$Scalar', from: './scalar', type: true }))
    code(codeImportAll(config, { as: 'ArgumentsMap', from: './arguments-map', type: true }))
    code``

    // Generate typed interfaces for each root type builder
    if (queryType) {
      code(importUtilities(config))
      code(codeImportAll(config, { as: '$$Schema', from: './schema/$', type: true }))
      code``
      code(
        Code.TSDoc(
          `Context for static document type inference.\nStatic documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.`,
        ),
      )
      code(`interface StaticDocumentContext {`)
      code(`  typeHookRequestResultDataTypes: never`)
      code(`  scalars: $$Scalar.$Registry`)
      code(`}`)
      code``

      // Interface JSDoc
      const interfaceDoc = getStaticDocumentBuilderDoc('query')
      code(Code.TSDoc(interfaceDoc))
      code`
        export interface QueryBuilder {
          ${
        Obj.values(queryType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, queryType, 'query')
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromQuery<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const constDoc = getStaticDocumentBuilderDoc('query')
      code(Code.TSDoc(constDoc))
      code(`export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY, { sddm }) as any`)
      code``
    }

    if (mutationType) {
      if (!queryType) {
        code(importUtilities(config))
        code(codeImportAll(config, { as: '$$Schema', from: './schema/$', type: true }))
      }
      if (!queryType) {
        code``
        code(
          Code.TSDoc(
            `Context for static document type inference.\nStatic documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.`,
          ),
        )
        code(`interface StaticDocumentContext {`)
        code(`  typeHookRequestResultDataTypes: never`)
        code(`  scalars: $$Scalar.$Registry`)
        code(`}`)
      }
      code``

      // Interface JSDoc
      const mutationInterfaceDoc = getStaticDocumentBuilderDoc('mutation')
      code(Code.TSDoc(mutationInterfaceDoc))
      code`
        export interface MutationBuilder {
          ${
        Obj.values(mutationType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, mutationType, 'mutation')
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromMutation<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const mutationConstDoc = getStaticDocumentBuilderDoc('mutation')
      code(Code.TSDoc(mutationConstDoc))
      code(`export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION, { sddm }) as any`)
      code``
    }

    if (subscriptionType) {
      if (!queryType && !mutationType) {
        code(importUtilities(config))
        code(codeImportAll(config, { as: '$$Schema', from: './schema/$', type: true }))
      }
      if (!queryType && !mutationType) {
        code``
        code(
          Code.TSDoc(
            `Context for static document type inference.\nStatic documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.`,
          ),
        )
        code(`interface StaticDocumentContext {`)
        code(`  typeHookRequestResultDataTypes: never`)
        code(`  scalars: $$Scalar.$Registry`)
        code(`}`)
      }
      code``

      // Interface JSDoc
      const subscriptionInterfaceDoc = getStaticDocumentBuilderDoc('subscription')
      code(Code.TSDoc(subscriptionInterfaceDoc))
      code`
        export interface SubscriptionBuilder {
          ${
        Obj.values(subscriptionType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, subscriptionType, 'subscription')
          const docComment = fieldDoc ? Code.TSDoc(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Subscription<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => TypedDocument.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.InferResult.OperationSubscription<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.DocumentBuilderKit.Var.InferFromSubscription<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const subscriptionConstDoc = getStaticDocumentBuilderDoc('subscription')
      code(Code.TSDoc(subscriptionConstDoc))
      code(
        `export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION, { sddm }) as any`,
      )
      code``
    }

    // The gql() function now handles multi-operation documents
    // (previously the document() function, now merged into gql module)
  },
)

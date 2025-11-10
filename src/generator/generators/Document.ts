import { Str } from '@wollybeard/kit'
import { Obj } from '@wollybeard/kit'
import type { GraphQLObjectType } from 'graphql'
import {
  getStaticDocumentBuilderDoc,
  getStaticDocumentContextDoc,
  getStaticDocumentFieldDoc,
} from '../helpers/jsdoc.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { codeImportAll, codeImportNamed, importGraphqlKit, importUtilities } from '../helpers/pathHelpers.js'

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
    code(codeImportNamed(config, { names: { schemaDrivenDataMap: 'sddm' }, from: './schema-driven-data-map' }))
    code(
      codeImportNamed(config, {
        names: ['GraphqlKit'],
        from: config.paths.imports.grafflePackage.utilitiesForGenerated,
      }),
    )
    code(codeImportAll(config, { as: 'SelectionSets', from: './selection-sets/_', type: true }))
    code(codeImportAll(config, { as: '$$Scalar', from: './scalar', type: true }))
    code(codeImportAll(config, { as: 'SchemaMap', from: './schema-driven-data-map', type: true }))
    code``

    // Generate typed interfaces for each root type builder
    if (queryType) {
      code(importUtilities(config))
      code(codeImportAll(config, { as: '$$Schema', from: './schema/_', type: true }))
      code``
      code(Str.Code.TSDoc.format(getStaticDocumentContextDoc()))
      code(`interface StaticDocumentContext {`)
      code(`  typeHookRequestResultDataTypes: never`)
      code(`  scalars: $$Scalar.$Registry`)
      code(`}`)
      code``

      // Interface JSDoc
      const interfaceDoc = getStaticDocumentBuilderDoc('query')
      code(Str.Code.TSDoc.format(interfaceDoc))
      code`
        export interface QueryBuilder {
          $batch: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<$SelectionSet, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          ${
        Obj.values(queryType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, queryType, 'query')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationQuery<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromQuery<{ ${field.name}: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const constDoc = getStaticDocumentBuilderDoc('query')
      code(Str.Code.TSDoc.format(constDoc))
      code(
        `export const query: QueryBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.QUERY, { sddm }) as any`,
      )
      code``
    }

    if (mutationType) {
      if (!queryType) {
        code(importUtilities(config))
        code(codeImportAll(config, { as: '$$Schema', from: './schema/_', type: true }))
      }
      if (!queryType) {
        code``
        code(Str.Code.TSDoc.format(getStaticDocumentContextDoc()))
        code(`interface StaticDocumentContext {`)
        code(`  typeHookRequestResultDataTypes: never`)
        code(`  scalars: $$Scalar.$Registry`)
        code(`}`)
      }
      code``

      // Interface JSDoc
      const mutationInterfaceDoc = getStaticDocumentBuilderDoc('mutation')
      code(Str.Code.TSDoc.format(mutationInterfaceDoc))
      code`
        export interface MutationBuilder {
          $batch: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<$SelectionSet, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          ${
        Obj.values(mutationType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, mutationType, 'mutation')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationMutation<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromMutation<{ ${field.name}: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const mutationConstDoc = getStaticDocumentBuilderDoc('mutation')
      code(Str.Code.TSDoc.format(mutationConstDoc))
      code(
        `export const mutation: MutationBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.MUTATION, { sddm }) as any`,
      )
      code``
    }

    if (subscriptionType) {
      if (!queryType && !mutationType) {
        code(importUtilities(config))
        code(codeImportAll(config, { as: '$$Schema', from: './schema/_', type: true }))
      }
      if (!queryType && !mutationType) {
        code``
        code(Str.Code.TSDoc.format(getStaticDocumentContextDoc()))
        code(`interface StaticDocumentContext {`)
        code(`  typeHookRequestResultDataTypes: never`)
        code(`  scalars: $$Scalar.$Registry`)
        code(`}`)
      }
      code``

      // Interface JSDoc
      const subscriptionInterfaceDoc = getStaticDocumentBuilderDoc('subscription')
      code(Str.Code.TSDoc.format(subscriptionInterfaceDoc))
      code`
        export interface SubscriptionBuilder {
          $batch: <const $SelectionSet extends SelectionSets.Subscription<GraphqlKit.Document.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationSubscription<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromSubscription<$SelectionSet, SchemaMap.SchemaDrivenDataMap>>,
            true
          >

          ${
        Obj.values(subscriptionType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, subscriptionType, 'subscription')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Subscription<GraphqlKit.Document.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.InferResult.OperationSubscription<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, GraphqlKit.Document.Object.Var.InferFromSubscription<{ ${field.name}: Exclude<$SelectionSet, undefined> }, SchemaMap.SchemaDrivenDataMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const subscriptionConstDoc = getStaticDocumentBuilderDoc('subscription')
      code(Str.Code.TSDoc.format(subscriptionConstDoc))
      code(
        `export const subscription: SubscriptionBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.SUBSCRIPTION, { sddm }) as any`,
      )
      code``
    }

    // The gql() function now handles multi-operation documents
    // (previously the document() function, now merged into gql module)
  },
)

import { Str } from '@wollybeard/kit'
import { Obj } from '@wollybeard/kit'
import type { GraphQLObjectType } from 'graphql'
import {
  getStaticDocumentBuilderDoc,
  getStaticDocumentContextDoc,
  getStaticDocumentFieldDoc,
} from '../helpers/jsdoc.js'
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
      codeImportNamed(config, {
        names: ['GraphqlKit'],
        from: config.paths.imports.grafflePackage.utilitiesForGenerated,
        type: true,
      }),
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
          $batch: <const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationQuery<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromQuery<$SelectionSet, ArgumentsMap.ArgumentsMap>>,
            true
          >

          ${
        Obj.values(queryType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, queryType, 'query')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationQuery<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromQuery<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const constDoc = getStaticDocumentBuilderDoc('query')
      code(Str.Code.TSDoc.format(constDoc))
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
          $batch: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromMutation<$SelectionSet, ArgumentsMap.ArgumentsMap>>,
            true
          >

          ${
        Obj.values(mutationType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, mutationType, 'mutation')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationMutation<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromMutation<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
            true
          >`
        }).join('\n\n          ')
      }
        }
      `

      // Const JSDoc
      const mutationConstDoc = getStaticDocumentBuilderDoc('mutation')
      code(Str.Code.TSDoc.format(mutationConstDoc))
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
          $batch: <const $SelectionSet extends SelectionSets.Subscription<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
            selection: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationSubscription<$SelectionSet, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromSubscription<$SelectionSet, ArgumentsMap.ArgumentsMap>>,
            true
          >

          ${
        Obj.values(subscriptionType.getFields()).map(field => {
          const fieldDoc = getStaticDocumentFieldDoc(config, field, subscriptionType, 'subscription')
          const docComment = fieldDoc ? Str.Code.TSDoc.format(fieldDoc) + '\n          ' : ''
          return `${docComment}${field.name}: <const $SelectionSet extends SelectionSets.Subscription<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['${field.name}']>(
            selection?: $SelectionSet
          ) => GraphqlKit.Document.Typed.String<
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.InferResult.OperationSubscription<{ ${field.name}: $SelectionSet }, $$Schema.Schema>>,
            $$Utilities.RequestResult.Simplify<StaticDocumentContext, $$Utilities.Docpar.Object.Var.InferFromSubscription<{ ${field.name}: Exclude<$SelectionSet, undefined> }, ArgumentsMap.ArgumentsMap>>,
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
        `export const subscription: SubscriptionBuilder = createStaticRootType(OperationTypeNode.SUBSCRIPTION, { sddm }) as any`,
      )
      code``
    }

    // The gql() function now handles multi-operation documents
    // (previously the document() function, now merged into gql module)
  },
)

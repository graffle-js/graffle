import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../src/exports/client.js'
import { createStaticRootType } from '../../../../../src/exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'

/**
 * Context for static document type inference.
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$var` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 *   id: true,
 *   name: true,
 *   email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 *   $: { id: $var },
 *   name: true,
 *   posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export interface QueryBuilder {
  codeOfConduct: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['codeOfConduct'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ codeOfConduct: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { codeOfConduct: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  codesOfConduct: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['codesOfConduct'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ codesOfConduct: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { codesOfConduct: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enterprise: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['enterprise'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ enterprise: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { enterprise: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enterpriseAdministratorInvitation: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseAdministratorInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { enterpriseAdministratorInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { enterpriseAdministratorInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enterpriseAdministratorInvitationByToken: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseAdministratorInvitationByToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { enterpriseAdministratorInvitationByToken: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { enterpriseAdministratorInvitationByToken: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { enterpriseMemberInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { enterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enterpriseMemberInvitationByToken: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseMemberInvitationByToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { enterpriseMemberInvitationByToken: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { enterpriseMemberInvitationByToken: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  id: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { id: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  license: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['license'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ license: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { license: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  licenses: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['licenses'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ licenses: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { licenses: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  marketplaceCategories: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceCategories'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { marketplaceCategories: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { marketplaceCategories: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  marketplaceCategory: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceCategory'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceCategory: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { marketplaceCategory: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  marketplaceListing: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceListing'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceListing: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { marketplaceListing: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  marketplaceListings: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceListings'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceListings: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { marketplaceListings: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  meta: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['meta']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ meta: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { meta: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  node: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['node']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ node: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { node: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  nodes: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['nodes'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ nodes: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { nodes: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  organization: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['organization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ organization: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { organization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  rateLimit: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['rateLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ rateLimit: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { rateLimit: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  relay: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['relay'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ relay: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { relay: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  repository: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['repository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ repository: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { repository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  repositoryOwner: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['repositoryOwner'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ repositoryOwner: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { repositoryOwner: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  resource: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['resource'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ resource: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { resource: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  search: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['search'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ search: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { search: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  securityAdvisories: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityAdvisories'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ securityAdvisories: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { securityAdvisories: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  securityAdvisory: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityAdvisory'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ securityAdvisory: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { securityAdvisory: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  securityVulnerabilities: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityVulnerabilities'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
        { securityVulnerabilities: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { securityVulnerabilities: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  sponsorables: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['sponsorables'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ sponsorables: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { sponsorables: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  topic: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['topic'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ topic: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { topic: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  user: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['user']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ user: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { user: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  viewer: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['viewer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ viewer: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromQuery<
        { viewer: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
}

/**
 * Static query document builder instance.
 *
 * @example
 * ```ts
 * import { query } from './generated/document.js'
 *
 * const myQuery = query.user({ id: true, name: true })
 * ```
 */
export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$var` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 *   $: { input: $var },
 *   id: true,
 *   name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 */
export interface MutationBuilder {
  abortQueuedMigrations: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['abortQueuedMigrations'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { abortQueuedMigrations: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { abortQueuedMigrations: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  abortRepositoryMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['abortRepositoryMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { abortRepositoryMigration: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { abortRepositoryMigration: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  acceptEnterpriseAdministratorInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptEnterpriseAdministratorInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { acceptEnterpriseAdministratorInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { acceptEnterpriseAdministratorInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  acceptEnterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptEnterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { acceptEnterpriseMemberInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { acceptEnterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  acceptTopicSuggestion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptTopicSuggestion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { acceptTopicSuggestion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { acceptTopicSuggestion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  accessUserNamespaceRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['accessUserNamespaceRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { accessUserNamespaceRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { accessUserNamespaceRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addAssigneesToAssignable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addAssigneesToAssignable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addAssigneesToAssignable: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addAssigneesToAssignable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addComment: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addDiscussionPollVote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addDiscussionPollVote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addDiscussionPollVote: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addDiscussionPollVote: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addEnterpriseOrganizationMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addEnterpriseOrganizationMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addEnterpriseOrganizationMember: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addEnterpriseOrganizationMember: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addEnterpriseSupportEntitlement: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addEnterpriseSupportEntitlement'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addEnterpriseSupportEntitlement: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addEnterpriseSupportEntitlement: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addLabelsToLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addLabelsToLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addLabelsToLabelable: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addLabelsToLabelable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addProjectCard: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addProjectCard: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addProjectColumn: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addProjectColumn: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addProjectV2DraftIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectV2DraftIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addProjectV2DraftIssue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addProjectV2DraftIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addProjectV2ItemById: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectV2ItemById'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addProjectV2ItemById: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addProjectV2ItemById: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addPullRequestReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addPullRequestReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addPullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addPullRequestReviewComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addPullRequestReviewComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addPullRequestReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addPullRequestReviewThread: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addPullRequestReviewThread: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addPullRequestReviewThreadReply: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewThreadReply'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addPullRequestReviewThreadReply: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addPullRequestReviewThreadReply: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addReaction: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addReaction'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addReaction: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addReaction: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addStar: <
    $SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['addStar'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addStar: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addStar: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addSubIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addSubIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addUpvote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addUpvote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addUpvote: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addUpvote: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  addVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { addVerifiableDomain: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { addVerifiableDomain: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  approveDeployments: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['approveDeployments'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { approveDeployments: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { approveDeployments: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  approveVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['approveVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { approveVerifiableDomain: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { approveVerifiableDomain: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  archiveProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['archiveProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { archiveProjectV2Item: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { archiveProjectV2Item: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  archiveRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['archiveRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { archiveRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { archiveRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  cancelEnterpriseAdminInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelEnterpriseAdminInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { cancelEnterpriseAdminInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { cancelEnterpriseAdminInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  cancelEnterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelEnterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { cancelEnterpriseMemberInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { cancelEnterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  cancelSponsorship: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelSponsorship'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { cancelSponsorship: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { cancelSponsorship: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  changeUserStatus: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['changeUserStatus'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ changeUserStatus: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { changeUserStatus: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  clearLabelsFromLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['clearLabelsFromLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { clearLabelsFromLabelable: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { clearLabelsFromLabelable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  clearProjectV2ItemFieldValue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['clearProjectV2ItemFieldValue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { clearProjectV2ItemFieldValue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { clearProjectV2ItemFieldValue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  cloneProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cloneProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ cloneProject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { cloneProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  cloneTemplateRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cloneTemplateRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { cloneTemplateRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { cloneTemplateRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  closeDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closeDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closeDiscussion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { closeDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  closeIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closeIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closeIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { closeIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  closePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closePullRequest: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { closePullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  convertProjectCardNoteToIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertProjectCardNoteToIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { convertProjectCardNoteToIssue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { convertProjectCardNoteToIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  convertProjectV2DraftIssueItemToIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertProjectV2DraftIssueItemToIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { convertProjectV2DraftIssueItemToIssue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { convertProjectV2DraftIssueItemToIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  convertPullRequestToDraft: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertPullRequestToDraft'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { convertPullRequestToDraft: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { convertPullRequestToDraft: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  copyProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['copyProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ copyProjectV2: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { copyProjectV2: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createAttributionInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createAttributionInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createAttributionInvitation: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createAttributionInvitation: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createBranchProtectionRule: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createBranchProtectionRule: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createCheckRun: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCheckRun'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createCheckRun: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createCheckRun: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createCheckSuite: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCheckSuite'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createCheckSuite: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createCheckSuite: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createCommitOnBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCommitOnBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createCommitOnBranch: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createCommitOnBranch: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createDeployment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDeployment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createDeployment: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createDeployment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createDeploymentStatus: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDeploymentStatus'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createDeploymentStatus: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createDeploymentStatus: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createDiscussion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createEnterpriseOrganization: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createEnvironment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createEnvironment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createIpAllowListEntry: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createIpAllowListEntry: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createLabel: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createLabel: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createLinkedBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createLinkedBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createLinkedBranch: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createLinkedBranch: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createMigrationSource: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createMigrationSource'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createMigrationSource: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createMigrationSource: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createProject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createProjectV2: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createProjectV2: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createProjectV2Field: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createProjectV2Field: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createProjectV2StatusUpdate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createPullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createPullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createRef: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createRef: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createRepository: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createRepositoryRuleset: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createRepositoryRuleset: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createSponsorsListing: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorsListing'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createSponsorsListing: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createSponsorsListing: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createSponsorsTier: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createSponsorsTier: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createSponsorship: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorship'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createSponsorship: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createSponsorship: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createSponsorships: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorships'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createSponsorships: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createSponsorships: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createTeamDiscussion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createTeamDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { createTeamDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  createUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createUserList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { createUserList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  declineTopicSuggestion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['declineTopicSuggestion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { declineTopicSuggestion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { declineTopicSuggestion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteBranchProtectionRule: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteBranchProtectionRule: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteDeployment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDeployment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteDeployment: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteDeployment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteDiscussion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteEnvironment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteEnvironment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteIpAllowListEntry: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteIpAllowListEntry: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteIssueComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIssueComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteIssueComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteIssueComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteLabel: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteLabel: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteLinkedBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteLinkedBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteLinkedBranch: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteLinkedBranch: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deletePackageVersion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePackageVersion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deletePackageVersion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deletePackageVersion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteProject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectCard: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectCard: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectColumn: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectColumn: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteProjectV2: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectV2: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectV2Field: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectV2Field: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectV2Item: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectV2Item: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectV2StatusUpdate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteProjectV2Workflow: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Workflow'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteProjectV2Workflow: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteProjectV2Workflow: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deletePullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deletePullRequestReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deletePullRequestReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deletePullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deletePullRequestReviewComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deletePullRequestReviewComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteRef: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteRef: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteRepositoryRuleset: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteRepositoryRuleset: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteTeamDiscussion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteTeamDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteTeamDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteUserList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteUserList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  deleteVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { deleteVerifiableDomain: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { deleteVerifiableDomain: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  dequeuePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dequeuePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { dequeuePullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { dequeuePullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  disablePullRequestAutoMerge: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['disablePullRequestAutoMerge'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { disablePullRequestAutoMerge: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { disablePullRequestAutoMerge: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  dismissPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dismissPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { dismissPullRequestReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { dismissPullRequestReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  dismissRepositoryVulnerabilityAlert: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dismissRepositoryVulnerabilityAlert'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { dismissRepositoryVulnerabilityAlert: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { dismissRepositoryVulnerabilityAlert: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enablePullRequestAutoMerge: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enablePullRequestAutoMerge'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { enablePullRequestAutoMerge: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { enablePullRequestAutoMerge: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  enqueuePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enqueuePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { enqueuePullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { enqueuePullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  followOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['followOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { followOrganization: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { followOrganization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  followUser: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['followUser'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ followUser: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { followUser: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  grantEnterpriseOrganizationsMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['grantEnterpriseOrganizationsMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { grantEnterpriseOrganizationsMigratorRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { grantEnterpriseOrganizationsMigratorRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  grantMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['grantMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { grantMigratorRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { grantMigratorRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  importProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['importProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ importProject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { importProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  inviteEnterpriseAdmin: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['inviteEnterpriseAdmin'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { inviteEnterpriseAdmin: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { inviteEnterpriseAdmin: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  inviteEnterpriseMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['inviteEnterpriseMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { inviteEnterpriseMember: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { inviteEnterpriseMember: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  linkProjectV2ToRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkProjectV2ToRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { linkProjectV2ToRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { linkProjectV2ToRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  linkProjectV2ToTeam: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkProjectV2ToTeam'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { linkProjectV2ToTeam: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { linkProjectV2ToTeam: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  linkRepositoryToProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkRepositoryToProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { linkRepositoryToProject: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { linkRepositoryToProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  lockLockable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['lockLockable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ lockLockable: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { lockLockable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  markDiscussionCommentAsAnswer: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markDiscussionCommentAsAnswer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { markDiscussionCommentAsAnswer: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { markDiscussionCommentAsAnswer: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  markFileAsViewed: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markFileAsViewed'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ markFileAsViewed: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { markFileAsViewed: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  markProjectV2AsTemplate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markProjectV2AsTemplate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { markProjectV2AsTemplate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { markProjectV2AsTemplate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  markPullRequestReadyForReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markPullRequestReadyForReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { markPullRequestReadyForReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { markPullRequestReadyForReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  mergeBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['mergeBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ mergeBranch: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { mergeBranch: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  mergePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['mergePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ mergePullRequest: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { mergePullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  minimizeComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['minimizeComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ minimizeComment: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { minimizeComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  moveProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['moveProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ moveProjectCard: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { moveProjectCard: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  moveProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['moveProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { moveProjectColumn: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { moveProjectColumn: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  pinEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['pinEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ pinEnvironment: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { pinEnvironment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  pinIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['pinIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ pinIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { pinIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  publishSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['publishSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { publishSponsorsTier: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { publishSponsorsTier: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  regenerateEnterpriseIdentityProviderRecoveryCodes: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['regenerateEnterpriseIdentityProviderRecoveryCodes'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { regenerateEnterpriseIdentityProviderRecoveryCodes: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { regenerateEnterpriseIdentityProviderRecoveryCodes: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  regenerateVerifiableDomainToken: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['regenerateVerifiableDomainToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { regenerateVerifiableDomainToken: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { regenerateVerifiableDomainToken: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  rejectDeployments: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['rejectDeployments'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { rejectDeployments: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { rejectDeployments: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeAssigneesFromAssignable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeAssigneesFromAssignable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeAssigneesFromAssignable: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeAssigneesFromAssignable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeEnterpriseAdmin: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseAdmin'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeEnterpriseAdmin: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeEnterpriseAdmin: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeEnterpriseIdentityProvider: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseIdentityProvider'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeEnterpriseIdentityProvider: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeEnterpriseIdentityProvider: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeEnterpriseMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeEnterpriseMember: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeEnterpriseMember: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeEnterpriseOrganization: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeEnterpriseSupportEntitlement: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseSupportEntitlement'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeEnterpriseSupportEntitlement: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeEnterpriseSupportEntitlement: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeLabelsFromLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeLabelsFromLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeLabelsFromLabelable: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeLabelsFromLabelable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeOutsideCollaborator: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeOutsideCollaborator'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { removeOutsideCollaborator: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeOutsideCollaborator: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeReaction: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeReaction'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeReaction: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeReaction: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeStar: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeStar'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeStar: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeStar: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeSubIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeSubIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  removeUpvote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeUpvote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeUpvote: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { removeUpvote: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  reopenDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ reopenDiscussion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { reopenDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  reopenIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ reopenIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { reopenIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  reopenPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { reopenPullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { reopenPullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  reorderEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reorderEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { reorderEnvironment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { reorderEnvironment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  reprioritizeSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reprioritizeSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { reprioritizeSubIssue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { reprioritizeSubIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  requestReviews: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['requestReviews'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ requestReviews: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { requestReviews: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  rerequestCheckSuite: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['rerequestCheckSuite'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { rerequestCheckSuite: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { rerequestCheckSuite: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  resolveReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['resolveReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { resolveReviewThread: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { resolveReviewThread: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  retireSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['retireSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { retireSponsorsTier: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { retireSponsorsTier: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  revertPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revertPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { revertPullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { revertPullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  revokeEnterpriseOrganizationsMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revokeEnterpriseOrganizationsMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { revokeEnterpriseOrganizationsMigratorRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { revokeEnterpriseOrganizationsMigratorRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  revokeMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revokeMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { revokeMigratorRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { revokeMigratorRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  setEnterpriseIdentityProvider: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setEnterpriseIdentityProvider'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { setEnterpriseIdentityProvider: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { setEnterpriseIdentityProvider: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  setOrganizationInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setOrganizationInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { setOrganizationInteractionLimit: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { setOrganizationInteractionLimit: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  setRepositoryInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setRepositoryInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { setRepositoryInteractionLimit: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { setRepositoryInteractionLimit: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  setUserInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setUserInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { setUserInteractionLimit: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { setUserInteractionLimit: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  startOrganizationMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['startOrganizationMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { startOrganizationMigration: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { startOrganizationMigration: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  startRepositoryMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['startRepositoryMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { startRepositoryMigration: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { startRepositoryMigration: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  submitPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['submitPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { submitPullRequestReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { submitPullRequestReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  transferEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['transferEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { transferEnterpriseOrganization: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { transferEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  transferIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['transferIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ transferIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { transferIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unarchiveProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unarchiveProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unarchiveProjectV2Item: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unarchiveProjectV2Item: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unarchiveRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unarchiveRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unarchiveRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unarchiveRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unfollowOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unfollowOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unfollowOrganization: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unfollowOrganization: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unfollowUser: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unfollowUser'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unfollowUser: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unfollowUser: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unlinkProjectV2FromRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkProjectV2FromRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unlinkProjectV2FromRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unlinkProjectV2FromRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unlinkProjectV2FromTeam: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkProjectV2FromTeam'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unlinkProjectV2FromTeam: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unlinkProjectV2FromTeam: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unlinkRepositoryFromProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkRepositoryFromProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unlinkRepositoryFromProject: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unlinkRepositoryFromProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unlockLockable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlockLockable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unlockLockable: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unlockLockable: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unmarkDiscussionCommentAsAnswer: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkDiscussionCommentAsAnswer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unmarkDiscussionCommentAsAnswer: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unmarkDiscussionCommentAsAnswer: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unmarkFileAsViewed: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkFileAsViewed'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unmarkFileAsViewed: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unmarkFileAsViewed: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unmarkIssueAsDuplicate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkIssueAsDuplicate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unmarkIssueAsDuplicate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unmarkIssueAsDuplicate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unmarkProjectV2AsTemplate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkProjectV2AsTemplate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unmarkProjectV2AsTemplate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unmarkProjectV2AsTemplate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unminimizeComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unminimizeComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unminimizeComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unminimizeComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unpinIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unpinIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unpinIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unpinIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  unresolveReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unresolveReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { unresolveReviewThread: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { unresolveReviewThread: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateBranchProtectionRule: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateBranchProtectionRule: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateCheckRun: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateCheckRun'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateCheckRun: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateCheckRun: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateCheckSuitePreferences: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateCheckSuitePreferences'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateCheckSuitePreferences: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateCheckSuitePreferences: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateDiscussion: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseAdministratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseAdministratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseAdministratorRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseAdministratorRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseAllowPrivateRepositoryForkingSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseAllowPrivateRepositoryForkingSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseAllowPrivateRepositoryForkingSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseAllowPrivateRepositoryForkingSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseDefaultRepositoryPermissionSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseDefaultRepositoryPermissionSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseDefaultRepositoryPermissionSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseDefaultRepositoryPermissionSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseDeployKeySetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseDeployKeySetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseDeployKeySetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseDeployKeySetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanChangeRepositoryVisibilitySetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanCreateRepositoriesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanCreateRepositoriesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanCreateRepositoriesSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanCreateRepositoriesSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanDeleteIssuesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanDeleteIssuesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanDeleteIssuesSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanDeleteIssuesSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanDeleteRepositoriesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanDeleteRepositoriesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanDeleteRepositoriesSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanDeleteRepositoriesSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanInviteCollaboratorsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanInviteCollaboratorsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanInviteCollaboratorsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanInviteCollaboratorsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanMakePurchasesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanMakePurchasesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanMakePurchasesSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanMakePurchasesSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanUpdateProtectedBranchesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseMembersCanViewDependencyInsightsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanViewDependencyInsightsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseMembersCanViewDependencyInsightsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseMembersCanViewDependencyInsightsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseOrganizationProjectsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseOrganizationProjectsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseOrganizationProjectsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseOrganizationProjectsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseOwnerOrganizationRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseOwnerOrganizationRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseOwnerOrganizationRole: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseOwnerOrganizationRole: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseProfile: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseProfile'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseProfile: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseProfile: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseRepositoryProjectsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseRepositoryProjectsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseRepositoryProjectsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseRepositoryProjectsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseTeamDiscussionsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTeamDiscussionsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseTeamDiscussionsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseTeamDiscussionsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnterpriseTwoFactorAuthenticationRequiredSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTwoFactorAuthenticationRequiredSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnterpriseTwoFactorAuthenticationRequiredSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnterpriseTwoFactorAuthenticationRequiredSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateEnvironment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateEnvironment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateIpAllowListEnabledSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListEnabledSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateIpAllowListEnabledSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateIpAllowListEnabledSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateIpAllowListEntry: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateIpAllowListEntry: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateIpAllowListForInstalledAppsEnabledSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListForInstalledAppsEnabledSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateIpAllowListForInstalledAppsEnabledSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateIpAllowListForInstalledAppsEnabledSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateIssue: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateIssueComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIssueComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateIssueComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateIssueComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateLabel: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateLabel: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateNotificationRestrictionSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateNotificationRestrictionSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateNotificationRestrictionSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateNotificationRestrictionSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateOrganizationAllowPrivateRepositoryForkingSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateOrganizationAllowPrivateRepositoryForkingSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateOrganizationAllowPrivateRepositoryForkingSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateOrganizationAllowPrivateRepositoryForkingSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateOrganizationWebCommitSignoffSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateOrganizationWebCommitSignoffSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateOrganizationWebCommitSignoffSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateOrganizationWebCommitSignoffSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updatePatreonSponsorability: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePatreonSponsorability'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updatePatreonSponsorability: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updatePatreonSponsorability: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateProject: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProject: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectCard: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectCard: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectColumn: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectColumn: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateProjectV2: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2Collaborators: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2Collaborators'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2Collaborators: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2Collaborators: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2DraftIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2DraftIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2DraftIssue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2DraftIssue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2Field: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2Field: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2ItemFieldValue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2ItemFieldValue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2ItemFieldValue: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2ItemFieldValue: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2ItemPosition: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2ItemPosition'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2ItemPosition: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2ItemPosition: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateProjectV2StatusUpdate: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updatePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updatePullRequest: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updatePullRequest: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updatePullRequestBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updatePullRequestBranch: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updatePullRequestBranch: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updatePullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updatePullRequestReview: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updatePullRequestReview: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updatePullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updatePullRequestReviewComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updatePullRequestReviewComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRef: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateRef: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateRefs: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRefs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRefs: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateRefs: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRepository: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateRepositoryRuleset: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateRepositoryRuleset: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateRepositoryWebCommitSignoffSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepositoryWebCommitSignoffSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateRepositoryWebCommitSignoffSetting: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateRepositoryWebCommitSignoffSetting: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateSponsorshipPreferences: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateSponsorshipPreferences'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateSponsorshipPreferences: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateSponsorshipPreferences: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateSubscription: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateSubscription'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateSubscription: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateSubscription: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateTeamDiscussion: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateTeamDiscussion: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateTeamDiscussionComment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateTeamReviewAssignment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamReviewAssignment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateTeamReviewAssignment: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateTeamReviewAssignment: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateTeamsRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamsRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateTeamsRepository: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateTeamsRepository: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateTopics: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTopics'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateTopics: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateTopics: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateUserList: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateUserList: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  updateUserListsForItem: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateUserListsForItem'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { updateUserListsForItem: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { updateUserListsForItem: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
  verifyVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['verifyVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
        { verifyVerifiableDomain: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.DocumentBuilderKit.Var.InferFromMutation<
        { verifyVerifiableDomain: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >
  >
}

/**
 * Static mutation document builder instance.
 *
 * @example
 * ```ts
 * import { mutation } from './generated/document.js'
 *
 * const myMutation = mutation.createUser({
 *   $: { input: { name: 'Alice', email: 'alice@example.com' } },
 *   id: true
 * })
 * ```
 */
export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any

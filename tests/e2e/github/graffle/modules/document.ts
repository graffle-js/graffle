import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../src/exports/client.js'
import { createStaticRootType } from '../../../../../src/exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

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
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ codeOfConduct: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { codeOfConduct: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  codesOfConduct: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['codesOfConduct'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ codesOfConduct: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { codesOfConduct: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  enterprise: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['enterprise'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ enterprise: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enterprise: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  enterpriseAdministratorInvitation: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseAdministratorInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { enterpriseAdministratorInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enterpriseAdministratorInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  enterpriseAdministratorInvitationByToken: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseAdministratorInvitationByToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { enterpriseAdministratorInvitationByToken: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enterpriseAdministratorInvitationByToken: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  enterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { enterpriseMemberInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  enterpriseMemberInvitationByToken: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterpriseMemberInvitationByToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { enterpriseMemberInvitationByToken: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enterpriseMemberInvitationByToken: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  id: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { id: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  license: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['license'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ license: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { license: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  licenses: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['licenses'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ licenses: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { licenses: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  marketplaceCategories: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceCategories'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { marketplaceCategories: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { marketplaceCategories: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  marketplaceCategory: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceCategory'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceCategory: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { marketplaceCategory: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  marketplaceListing: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceListing'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceListing: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { marketplaceListing: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  marketplaceListings: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['marketplaceListings'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ marketplaceListings: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { marketplaceListings: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  meta: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['meta']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ meta: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { meta: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  node: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['node']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ node: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { node: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  nodes: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['nodes'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ nodes: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { nodes: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  organization: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['organization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ organization: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { organization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  rateLimit: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['rateLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ rateLimit: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { rateLimit: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  relay: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['relay'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ relay: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { relay: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  repository: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['repository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ repository: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { repository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  repositoryOwner: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['repositoryOwner'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ repositoryOwner: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { repositoryOwner: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  resource: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['resource'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ resource: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { resource: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  search: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['search'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ search: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { search: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  securityAdvisories: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityAdvisories'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ securityAdvisories: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { securityAdvisories: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  securityAdvisory: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityAdvisory'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ securityAdvisory: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { securityAdvisory: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  securityVulnerabilities: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['securityVulnerabilities'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
      { securityVulnerabilities: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { securityVulnerabilities: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  sponsorables: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['sponsorables'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ sponsorables: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { sponsorables: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  topic: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['topic'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ topic: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { topic: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  user: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['user']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ user: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { user: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
    >
  >
  viewer: <
    $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['viewer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ viewer: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { viewer: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['query'],
      $TypeInputsIndex
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
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { abortQueuedMigrations: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { abortQueuedMigrations: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  abortRepositoryMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['abortRepositoryMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { abortRepositoryMigration: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { abortRepositoryMigration: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  acceptEnterpriseAdministratorInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptEnterpriseAdministratorInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { acceptEnterpriseAdministratorInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { acceptEnterpriseAdministratorInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  acceptEnterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptEnterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { acceptEnterpriseMemberInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { acceptEnterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  acceptTopicSuggestion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['acceptTopicSuggestion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { acceptTopicSuggestion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { acceptTopicSuggestion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  accessUserNamespaceRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['accessUserNamespaceRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { accessUserNamespaceRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { accessUserNamespaceRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addAssigneesToAssignable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addAssigneesToAssignable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addAssigneesToAssignable: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addAssigneesToAssignable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addComment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addDiscussionPollVote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addDiscussionPollVote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addDiscussionPollVote: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addDiscussionPollVote: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addEnterpriseOrganizationMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addEnterpriseOrganizationMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addEnterpriseOrganizationMember: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addEnterpriseOrganizationMember: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addEnterpriseSupportEntitlement: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addEnterpriseSupportEntitlement'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addEnterpriseSupportEntitlement: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addEnterpriseSupportEntitlement: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addLabelsToLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addLabelsToLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addLabelsToLabelable: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addLabelsToLabelable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addProjectCard: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addProjectCard: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addProjectColumn: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addProjectColumn: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addProjectV2DraftIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectV2DraftIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addProjectV2DraftIssue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addProjectV2DraftIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addProjectV2ItemById: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addProjectV2ItemById'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addProjectV2ItemById: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addProjectV2ItemById: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addPullRequestReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addPullRequestReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addPullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addPullRequestReviewComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addPullRequestReviewComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addPullRequestReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addPullRequestReviewThread: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addPullRequestReviewThread: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addPullRequestReviewThreadReply: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addPullRequestReviewThreadReply'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addPullRequestReviewThreadReply: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addPullRequestReviewThreadReply: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addReaction: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addReaction'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addReaction: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addReaction: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addStar: <
    $SelectionSet extends SelectionSets.Mutation<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['addStar'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addStar: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addStar: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addSubIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addSubIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addUpvote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addUpvote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ addUpvote: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addUpvote: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  addVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { addVerifiableDomain: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { addVerifiableDomain: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  approveDeployments: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['approveDeployments'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { approveDeployments: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { approveDeployments: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  approveVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['approveVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { approveVerifiableDomain: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { approveVerifiableDomain: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  archiveProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['archiveProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { archiveProjectV2Item: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { archiveProjectV2Item: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  archiveRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['archiveRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ archiveRepository: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { archiveRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  cancelEnterpriseAdminInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelEnterpriseAdminInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { cancelEnterpriseAdminInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { cancelEnterpriseAdminInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  cancelEnterpriseMemberInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelEnterpriseMemberInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { cancelEnterpriseMemberInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { cancelEnterpriseMemberInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  cancelSponsorship: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cancelSponsorship'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ cancelSponsorship: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { cancelSponsorship: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  changeUserStatus: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['changeUserStatus'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ changeUserStatus: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { changeUserStatus: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  clearLabelsFromLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['clearLabelsFromLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { clearLabelsFromLabelable: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { clearLabelsFromLabelable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  clearProjectV2ItemFieldValue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['clearProjectV2ItemFieldValue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { clearProjectV2ItemFieldValue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { clearProjectV2ItemFieldValue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  cloneProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cloneProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ cloneProject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { cloneProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  cloneTemplateRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['cloneTemplateRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { cloneTemplateRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { cloneTemplateRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  closeDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closeDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closeDiscussion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { closeDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  closeIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closeIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closeIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { closeIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  closePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['closePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ closePullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { closePullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  convertProjectCardNoteToIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertProjectCardNoteToIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { convertProjectCardNoteToIssue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { convertProjectCardNoteToIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  convertProjectV2DraftIssueItemToIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertProjectV2DraftIssueItemToIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { convertProjectV2DraftIssueItemToIssue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { convertProjectV2DraftIssueItemToIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  convertPullRequestToDraft: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['convertPullRequestToDraft'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { convertPullRequestToDraft: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { convertPullRequestToDraft: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  copyProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['copyProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ copyProjectV2: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { copyProjectV2: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createAttributionInvitation: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createAttributionInvitation'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createAttributionInvitation: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createAttributionInvitation: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createBranchProtectionRule: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createBranchProtectionRule: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createCheckRun: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCheckRun'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createCheckRun: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createCheckRun: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createCheckSuite: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCheckSuite'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createCheckSuite: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createCheckSuite: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createCommitOnBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createCommitOnBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createCommitOnBranch: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createCommitOnBranch: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createDeployment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDeployment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createDeployment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createDeployment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createDeploymentStatus: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDeploymentStatus'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createDeploymentStatus: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createDeploymentStatus: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createDiscussion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createEnterpriseOrganization: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createEnvironment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createEnvironment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createIpAllowListEntry: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createIpAllowListEntry: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createLabel: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createLabel: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createLinkedBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createLinkedBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createLinkedBranch: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createLinkedBranch: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createMigrationSource: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createMigrationSource'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createMigrationSource: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createMigrationSource: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createProject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createProjectV2: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createProjectV2: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createProjectV2Field: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createProjectV2Field: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createProjectV2StatusUpdate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createPullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createPullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createRef: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createRef: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createRepository: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createRepositoryRuleset: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createRepositoryRuleset: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createSponsorsListing: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorsListing'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createSponsorsListing: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createSponsorsListing: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createSponsorsTier: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createSponsorsTier: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createSponsorship: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorship'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createSponsorship: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createSponsorship: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createSponsorships: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createSponsorships'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createSponsorships: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createSponsorships: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createTeamDiscussion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createTeamDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { createTeamDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  createUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['createUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ createUserList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { createUserList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  declineTopicSuggestion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['declineTopicSuggestion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { declineTopicSuggestion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { declineTopicSuggestion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteBranchProtectionRule: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteBranchProtectionRule: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteDeployment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDeployment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteDeployment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteDeployment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteDiscussion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteEnvironment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteEnvironment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteIpAllowListEntry: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteIpAllowListEntry: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteIssueComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteIssueComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteIssueComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteIssueComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteLabel: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteLabel: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteLinkedBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteLinkedBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteLinkedBranch: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteLinkedBranch: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deletePackageVersion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePackageVersion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deletePackageVersion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deletePackageVersion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteProject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteProjectCard: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectCard: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteProjectColumn: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectColumn: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteProjectV2: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectV2: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteProjectV2Field: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectV2Field: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteProjectV2Item: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectV2Item: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteProjectV2StatusUpdate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteProjectV2Workflow: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteProjectV2Workflow'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteProjectV2Workflow: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteProjectV2Workflow: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deletePullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deletePullRequestReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deletePullRequestReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deletePullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deletePullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deletePullRequestReviewComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deletePullRequestReviewComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteRef: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteRef: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteRepositoryRuleset: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteRepositoryRuleset: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteTeamDiscussion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteTeamDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteTeamDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ deleteUserList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteUserList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  deleteVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['deleteVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { deleteVerifiableDomain: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { deleteVerifiableDomain: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  dequeuePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dequeuePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { dequeuePullRequest: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dequeuePullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  disablePullRequestAutoMerge: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['disablePullRequestAutoMerge'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { disablePullRequestAutoMerge: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { disablePullRequestAutoMerge: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  dismissPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dismissPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { dismissPullRequestReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dismissPullRequestReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  dismissRepositoryVulnerabilityAlert: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['dismissRepositoryVulnerabilityAlert'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { dismissRepositoryVulnerabilityAlert: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { dismissRepositoryVulnerabilityAlert: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  enablePullRequestAutoMerge: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enablePullRequestAutoMerge'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { enablePullRequestAutoMerge: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enablePullRequestAutoMerge: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  enqueuePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enqueuePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { enqueuePullRequest: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { enqueuePullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  followOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['followOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { followOrganization: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { followOrganization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  followUser: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['followUser'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ followUser: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { followUser: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  grantEnterpriseOrganizationsMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['grantEnterpriseOrganizationsMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { grantEnterpriseOrganizationsMigratorRole: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { grantEnterpriseOrganizationsMigratorRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  grantMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['grantMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ grantMigratorRole: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { grantMigratorRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  importProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['importProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ importProject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { importProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  inviteEnterpriseAdmin: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['inviteEnterpriseAdmin'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { inviteEnterpriseAdmin: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { inviteEnterpriseAdmin: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  inviteEnterpriseMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['inviteEnterpriseMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { inviteEnterpriseMember: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { inviteEnterpriseMember: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  linkProjectV2ToRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkProjectV2ToRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { linkProjectV2ToRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { linkProjectV2ToRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  linkProjectV2ToTeam: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkProjectV2ToTeam'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { linkProjectV2ToTeam: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { linkProjectV2ToTeam: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  linkRepositoryToProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['linkRepositoryToProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { linkRepositoryToProject: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { linkRepositoryToProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  lockLockable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['lockLockable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ lockLockable: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { lockLockable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  markDiscussionCommentAsAnswer: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markDiscussionCommentAsAnswer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { markDiscussionCommentAsAnswer: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { markDiscussionCommentAsAnswer: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  markFileAsViewed: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markFileAsViewed'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ markFileAsViewed: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { markFileAsViewed: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  markProjectV2AsTemplate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markProjectV2AsTemplate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { markProjectV2AsTemplate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { markProjectV2AsTemplate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  markPullRequestReadyForReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['markPullRequestReadyForReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { markPullRequestReadyForReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { markPullRequestReadyForReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  mergeBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['mergeBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ mergeBranch: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { mergeBranch: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  mergePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['mergePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ mergePullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { mergePullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  minimizeComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['minimizeComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ minimizeComment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { minimizeComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  moveProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['moveProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ moveProjectCard: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { moveProjectCard: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  moveProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['moveProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ moveProjectColumn: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { moveProjectColumn: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  pinEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['pinEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ pinEnvironment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { pinEnvironment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  pinIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['pinIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ pinIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { pinIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  publishSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['publishSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { publishSponsorsTier: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { publishSponsorsTier: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  regenerateEnterpriseIdentityProviderRecoveryCodes: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['regenerateEnterpriseIdentityProviderRecoveryCodes'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { regenerateEnterpriseIdentityProviderRecoveryCodes: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { regenerateEnterpriseIdentityProviderRecoveryCodes: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  regenerateVerifiableDomainToken: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['regenerateVerifiableDomainToken'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { regenerateVerifiableDomainToken: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { regenerateVerifiableDomainToken: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  rejectDeployments: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['rejectDeployments'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ rejectDeployments: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { rejectDeployments: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeAssigneesFromAssignable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeAssigneesFromAssignable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeAssigneesFromAssignable: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeAssigneesFromAssignable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeEnterpriseAdmin: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseAdmin'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeEnterpriseAdmin: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeEnterpriseAdmin: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeEnterpriseIdentityProvider: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseIdentityProvider'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeEnterpriseIdentityProvider: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeEnterpriseIdentityProvider: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeEnterpriseMember: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseMember'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeEnterpriseMember: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeEnterpriseMember: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeEnterpriseOrganization: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeEnterpriseSupportEntitlement: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeEnterpriseSupportEntitlement'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeEnterpriseSupportEntitlement: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeEnterpriseSupportEntitlement: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeLabelsFromLabelable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeLabelsFromLabelable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeLabelsFromLabelable: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeLabelsFromLabelable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeOutsideCollaborator: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeOutsideCollaborator'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { removeOutsideCollaborator: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeOutsideCollaborator: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeReaction: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeReaction'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeReaction: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeReaction: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeStar: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeStar'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeStar: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeStar: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeSubIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeSubIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  removeUpvote: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['removeUpvote'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ removeUpvote: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { removeUpvote: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  reopenDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ reopenDiscussion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { reopenDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  reopenIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ reopenIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { reopenIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  reopenPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reopenPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ reopenPullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { reopenPullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  reorderEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reorderEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { reorderEnvironment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { reorderEnvironment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  reprioritizeSubIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['reprioritizeSubIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { reprioritizeSubIssue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { reprioritizeSubIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  requestReviews: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['requestReviews'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ requestReviews: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { requestReviews: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  rerequestCheckSuite: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['rerequestCheckSuite'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { rerequestCheckSuite: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { rerequestCheckSuite: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  resolveReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['resolveReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { resolveReviewThread: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { resolveReviewThread: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  retireSponsorsTier: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['retireSponsorsTier'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { retireSponsorsTier: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { retireSponsorsTier: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  revertPullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revertPullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ revertPullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { revertPullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  revokeEnterpriseOrganizationsMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revokeEnterpriseOrganizationsMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { revokeEnterpriseOrganizationsMigratorRole: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { revokeEnterpriseOrganizationsMigratorRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  revokeMigratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['revokeMigratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { revokeMigratorRole: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { revokeMigratorRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  setEnterpriseIdentityProvider: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setEnterpriseIdentityProvider'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { setEnterpriseIdentityProvider: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { setEnterpriseIdentityProvider: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  setOrganizationInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setOrganizationInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { setOrganizationInteractionLimit: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { setOrganizationInteractionLimit: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  setRepositoryInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setRepositoryInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { setRepositoryInteractionLimit: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { setRepositoryInteractionLimit: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  setUserInteractionLimit: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['setUserInteractionLimit'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { setUserInteractionLimit: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { setUserInteractionLimit: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  startOrganizationMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['startOrganizationMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { startOrganizationMigration: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { startOrganizationMigration: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  startRepositoryMigration: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['startRepositoryMigration'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { startRepositoryMigration: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { startRepositoryMigration: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  submitPullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['submitPullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { submitPullRequestReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { submitPullRequestReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  transferEnterpriseOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['transferEnterpriseOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { transferEnterpriseOrganization: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { transferEnterpriseOrganization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  transferIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['transferIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ transferIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { transferIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unarchiveProjectV2Item: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unarchiveProjectV2Item'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unarchiveProjectV2Item: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unarchiveProjectV2Item: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unarchiveRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unarchiveRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unarchiveRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unarchiveRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unfollowOrganization: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unfollowOrganization'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unfollowOrganization: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unfollowOrganization: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unfollowUser: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unfollowUser'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unfollowUser: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unfollowUser: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unlinkProjectV2FromRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkProjectV2FromRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unlinkProjectV2FromRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unlinkProjectV2FromRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unlinkProjectV2FromTeam: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkProjectV2FromTeam'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unlinkProjectV2FromTeam: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unlinkProjectV2FromTeam: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unlinkRepositoryFromProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlinkRepositoryFromProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unlinkRepositoryFromProject: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unlinkRepositoryFromProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unlockLockable: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unlockLockable'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unlockLockable: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unlockLockable: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unmarkDiscussionCommentAsAnswer: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkDiscussionCommentAsAnswer'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unmarkDiscussionCommentAsAnswer: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unmarkDiscussionCommentAsAnswer: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unmarkFileAsViewed: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkFileAsViewed'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unmarkFileAsViewed: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unmarkFileAsViewed: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unmarkIssueAsDuplicate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkIssueAsDuplicate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unmarkIssueAsDuplicate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unmarkIssueAsDuplicate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unmarkProjectV2AsTemplate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unmarkProjectV2AsTemplate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unmarkProjectV2AsTemplate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unmarkProjectV2AsTemplate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unminimizeComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unminimizeComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unminimizeComment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unminimizeComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unpinIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unpinIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ unpinIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unpinIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  unresolveReviewThread: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['unresolveReviewThread'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { unresolveReviewThread: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { unresolveReviewThread: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateBranchProtectionRule: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateBranchProtectionRule'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateBranchProtectionRule: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateBranchProtectionRule: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateCheckRun: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateCheckRun'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateCheckRun: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateCheckRun: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateCheckSuitePreferences: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateCheckSuitePreferences'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateCheckSuitePreferences: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateCheckSuitePreferences: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateDiscussion: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseAdministratorRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseAdministratorRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseAdministratorRole: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseAdministratorRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseAllowPrivateRepositoryForkingSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseAllowPrivateRepositoryForkingSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseAllowPrivateRepositoryForkingSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseAllowPrivateRepositoryForkingSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseDefaultRepositoryPermissionSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseDefaultRepositoryPermissionSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseDefaultRepositoryPermissionSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseDefaultRepositoryPermissionSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseDeployKeySetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseDeployKeySetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseDeployKeySetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseDeployKeySetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanChangeRepositoryVisibilitySetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanCreateRepositoriesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanCreateRepositoriesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanCreateRepositoriesSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanCreateRepositoriesSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanDeleteIssuesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanDeleteIssuesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanDeleteIssuesSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanDeleteIssuesSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanDeleteRepositoriesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanDeleteRepositoriesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanDeleteRepositoriesSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanDeleteRepositoriesSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanInviteCollaboratorsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanInviteCollaboratorsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanInviteCollaboratorsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanInviteCollaboratorsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanMakePurchasesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanMakePurchasesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanMakePurchasesSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanMakePurchasesSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanUpdateProtectedBranchesSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseMembersCanViewDependencyInsightsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseMembersCanViewDependencyInsightsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseMembersCanViewDependencyInsightsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseMembersCanViewDependencyInsightsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseOrganizationProjectsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseOrganizationProjectsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseOrganizationProjectsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseOrganizationProjectsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseOwnerOrganizationRole: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseOwnerOrganizationRole'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseOwnerOrganizationRole: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseOwnerOrganizationRole: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseProfile: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseProfile'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseProfile: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseProfile: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseRepositoryProjectsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseRepositoryProjectsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseRepositoryProjectsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseRepositoryProjectsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseTeamDiscussionsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTeamDiscussionsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseTeamDiscussionsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseTeamDiscussionsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnterpriseTwoFactorAuthenticationRequiredSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnterpriseTwoFactorAuthenticationRequiredSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateEnterpriseTwoFactorAuthenticationRequiredSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnterpriseTwoFactorAuthenticationRequiredSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateEnvironment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateEnvironment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateEnvironment: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateEnvironment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateIpAllowListEnabledSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListEnabledSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateIpAllowListEnabledSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateIpAllowListEnabledSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateIpAllowListEntry: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListEntry'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateIpAllowListEntry: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateIpAllowListEntry: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateIpAllowListForInstalledAppsEnabledSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIpAllowListForInstalledAppsEnabledSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateIpAllowListForInstalledAppsEnabledSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateIpAllowListForInstalledAppsEnabledSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateIssue: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateIssueComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateIssueComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateIssueComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateIssueComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateLabel: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateLabel'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateLabel: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateLabel: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateNotificationRestrictionSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateNotificationRestrictionSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateNotificationRestrictionSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateNotificationRestrictionSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateOrganizationAllowPrivateRepositoryForkingSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateOrganizationAllowPrivateRepositoryForkingSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateOrganizationAllowPrivateRepositoryForkingSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateOrganizationAllowPrivateRepositoryForkingSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateOrganizationWebCommitSignoffSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateOrganizationWebCommitSignoffSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateOrganizationWebCommitSignoffSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateOrganizationWebCommitSignoffSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updatePatreonSponsorability: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePatreonSponsorability'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updatePatreonSponsorability: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updatePatreonSponsorability: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProject: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProject'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateProject: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProject: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectCard: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectCard'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateProjectCard: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectCard: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectColumn: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectColumn'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectColumn: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectColumn: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateProjectV2: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2Collaborators: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2Collaborators'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2Collaborators: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2Collaborators: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2DraftIssue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2DraftIssue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2DraftIssue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2DraftIssue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2Field: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2Field'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2Field: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2Field: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2ItemFieldValue: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2ItemFieldValue'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2ItemFieldValue: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2ItemFieldValue: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2ItemPosition: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2ItemPosition'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2ItemPosition: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2ItemPosition: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateProjectV2StatusUpdate: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateProjectV2StatusUpdate'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateProjectV2StatusUpdate: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateProjectV2StatusUpdate: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updatePullRequest: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequest'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updatePullRequest: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updatePullRequest: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updatePullRequestBranch: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestBranch'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updatePullRequestBranch: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updatePullRequestBranch: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updatePullRequestReview: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestReview'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updatePullRequestReview: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updatePullRequestReview: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updatePullRequestReviewComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updatePullRequestReviewComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updatePullRequestReviewComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updatePullRequestReviewComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateRef: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRef'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRef: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateRef: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateRefs: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRefs'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRefs: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateRefs: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateRepository: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateRepositoryRuleset: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepositoryRuleset'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateRepositoryRuleset: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateRepositoryRuleset: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateRepositoryWebCommitSignoffSetting: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateRepositoryWebCommitSignoffSetting'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateRepositoryWebCommitSignoffSetting: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateRepositoryWebCommitSignoffSetting: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateSponsorshipPreferences: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateSponsorshipPreferences'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateSponsorshipPreferences: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateSponsorshipPreferences: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateSubscription: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateSubscription'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateSubscription: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateSubscription: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateTeamDiscussion: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamDiscussion'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateTeamDiscussion: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateTeamDiscussion: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateTeamDiscussionComment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamDiscussionComment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateTeamDiscussionComment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateTeamDiscussionComment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateTeamReviewAssignment: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamReviewAssignment'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateTeamReviewAssignment: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateTeamReviewAssignment: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateTeamsRepository: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTeamsRepository'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateTeamsRepository: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateTeamsRepository: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateTopics: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateTopics'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateTopics: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateTopics: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateUserList: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateUserList'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<{ updateUserList: $SelectionSet }, $$Schema.Schema>,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateUserList: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  updateUserListsForItem: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['updateUserListsForItem'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { updateUserListsForItem: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { updateUserListsForItem: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
    >
  >
  verifyVerifiableDomain: <
    $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['verifyVerifiableDomain'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
      { verifyVerifiableDomain: $SelectionSet },
      $$Schema.Schema
    >,
    $$Utilities.DocumentBuilderKit.Var.Infer<
      { verifyVerifiableDomain: Exclude<$SelectionSet, undefined> },
      ArgumentsMap.ArgumentsMap['mutation'],
      $TypeInputsIndex
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

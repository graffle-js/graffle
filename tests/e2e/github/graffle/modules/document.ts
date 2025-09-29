import { OperationTypeNode } from 'graphql'
import type { TypedDocument } from '../../../../../src/exports/client.js'
import { createStaticRootType } from '../../../../../src/exports/extensions/document-builder/runtime.js'
import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Schema from './schema.js'
import type * as SelectionSets from './selection-sets.js'
import type { $TypeInputsIndex } from './type-inputs-index.js'

export interface QueryBuilder {
  codeOfConduct: <
    $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['codeOfConduct'],
  >(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ codeOfConduct: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { codeOfConduct: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { codesOfConduct: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enterprise: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enterpriseAdministratorInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enterpriseAdministratorInvitationByToken: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enterpriseMemberInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enterpriseMemberInvitationByToken: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  id: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ id: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { id: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { license: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { licenses: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { marketplaceCategories: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { marketplaceCategory: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { marketplaceListing: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { marketplaceListings: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  meta: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['meta']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ meta: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { meta: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  node: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['node']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ node: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { node: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { nodes: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { organization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { rateLimit: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { relay: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { repository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { repositoryOwner: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { resource: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { search: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { securityAdvisories: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { securityAdvisory: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { securityVulnerabilities: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { sponsorables: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { topic: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
  user: <$SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['user']>(
    selection?: $SelectionSet,
  ) => TypedDocument.String<
    $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<{ user: $SelectionSet }, $$Schema.Schema>,
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { user: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { viewer: $SelectionSet },
        ArgumentsMap.ArgumentsMap['query'],
        $TypeInputsIndex
      >
  >
}

export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY) as any
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { abortQueuedMigrations: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { abortRepositoryMigration: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { acceptEnterpriseAdministratorInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { acceptEnterpriseMemberInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { acceptTopicSuggestion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { accessUserNamespaceRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addAssigneesToAssignable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addDiscussionPollVote: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addEnterpriseOrganizationMember: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addEnterpriseSupportEntitlement: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addLabelsToLabelable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addProjectCard: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addProjectColumn: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addProjectV2DraftIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addProjectV2ItemById: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addPullRequestReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addPullRequestReviewComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addPullRequestReviewThread: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addPullRequestReviewThreadReply: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addReaction: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addStar: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addSubIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addUpvote: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { addVerifiableDomain: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { approveDeployments: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { approveVerifiableDomain: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { archiveProjectV2Item: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { archiveRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { cancelEnterpriseAdminInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { cancelEnterpriseMemberInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { cancelSponsorship: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { changeUserStatus: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { clearLabelsFromLabelable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { clearProjectV2ItemFieldValue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { cloneProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { cloneTemplateRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { closeDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { closeIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { closePullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { convertProjectCardNoteToIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { convertProjectV2DraftIssueItemToIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { convertPullRequestToDraft: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { copyProjectV2: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createAttributionInvitation: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createBranchProtectionRule: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createCheckRun: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createCheckSuite: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createCommitOnBranch: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createDeployment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createDeploymentStatus: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createEnterpriseOrganization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createEnvironment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createIpAllowListEntry: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createLabel: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createLinkedBranch: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createMigrationSource: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createProjectV2: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createProjectV2Field: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createProjectV2StatusUpdate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createPullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createRef: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createRepositoryRuleset: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createSponsorsListing: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createSponsorsTier: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createSponsorship: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createSponsorships: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createTeamDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createTeamDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { createUserList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { declineTopicSuggestion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteBranchProtectionRule: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteDeployment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteEnvironment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteIpAllowListEntry: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteIssueComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteLabel: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteLinkedBranch: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deletePackageVersion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectCard: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectColumn: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectV2: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectV2Field: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectV2Item: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectV2StatusUpdate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteProjectV2Workflow: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deletePullRequestReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deletePullRequestReviewComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteRef: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteRepositoryRuleset: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteTeamDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteTeamDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteUserList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { deleteVerifiableDomain: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dequeuePullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { disablePullRequestAutoMerge: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dismissPullRequestReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { dismissRepositoryVulnerabilityAlert: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enablePullRequestAutoMerge: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { enqueuePullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { followOrganization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { followUser: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { grantEnterpriseOrganizationsMigratorRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { grantMigratorRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { importProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { inviteEnterpriseAdmin: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { inviteEnterpriseMember: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { linkProjectV2ToRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { linkProjectV2ToTeam: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { linkRepositoryToProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { lockLockable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { markDiscussionCommentAsAnswer: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { markFileAsViewed: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { markProjectV2AsTemplate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { markPullRequestReadyForReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { mergeBranch: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { mergePullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { minimizeComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { moveProjectCard: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { moveProjectColumn: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { pinEnvironment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { pinIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { publishSponsorsTier: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { regenerateEnterpriseIdentityProviderRecoveryCodes: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { regenerateVerifiableDomainToken: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { rejectDeployments: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeAssigneesFromAssignable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeEnterpriseAdmin: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeEnterpriseIdentityProvider: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeEnterpriseMember: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeEnterpriseOrganization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeEnterpriseSupportEntitlement: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeLabelsFromLabelable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeOutsideCollaborator: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeReaction: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeStar: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeSubIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { removeUpvote: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { reopenDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { reopenIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { reopenPullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { reorderEnvironment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { reprioritizeSubIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { requestReviews: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { rerequestCheckSuite: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { resolveReviewThread: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { retireSponsorsTier: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { revertPullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { revokeEnterpriseOrganizationsMigratorRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { revokeMigratorRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { setEnterpriseIdentityProvider: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { setOrganizationInteractionLimit: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { setRepositoryInteractionLimit: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { setUserInteractionLimit: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { startOrganizationMigration: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { startRepositoryMigration: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { submitPullRequestReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { transferEnterpriseOrganization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { transferIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unarchiveProjectV2Item: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unarchiveRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unfollowOrganization: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unfollowUser: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unlinkProjectV2FromRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unlinkProjectV2FromTeam: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unlinkRepositoryFromProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unlockLockable: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unmarkDiscussionCommentAsAnswer: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unmarkFileAsViewed: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unmarkIssueAsDuplicate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unmarkProjectV2AsTemplate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unminimizeComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unpinIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { unresolveReviewThread: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateBranchProtectionRule: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateCheckRun: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateCheckSuitePreferences: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseAdministratorRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseAllowPrivateRepositoryForkingSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseDefaultRepositoryPermissionSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseDeployKeySetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanCreateRepositoriesSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanDeleteIssuesSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanDeleteRepositoriesSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanInviteCollaboratorsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanMakePurchasesSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseMembersCanViewDependencyInsightsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseOrganizationProjectsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseOwnerOrganizationRole: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseProfile: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseRepositoryProjectsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseTeamDiscussionsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnterpriseTwoFactorAuthenticationRequiredSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateEnvironment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateIpAllowListEnabledSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateIpAllowListEntry: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateIpAllowListForInstalledAppsEnabledSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateIssueComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateLabel: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateNotificationRestrictionSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateOrganizationAllowPrivateRepositoryForkingSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateOrganizationWebCommitSignoffSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updatePatreonSponsorability: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProject: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectCard: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectColumn: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2Collaborators: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2DraftIssue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2Field: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2ItemFieldValue: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2ItemPosition: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateProjectV2StatusUpdate: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updatePullRequest: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updatePullRequestBranch: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updatePullRequestReview: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updatePullRequestReviewComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateRef: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateRefs: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateRepositoryRuleset: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateRepositoryWebCommitSignoffSetting: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateSponsorshipPreferences: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateSubscription: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateTeamDiscussion: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateTeamDiscussionComment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateTeamReviewAssignment: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateTeamsRepository: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateTopics: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateUserList: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { updateUserListsForItem: $SelectionSet },
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
    $SelectionSet extends undefined ? {}
      : $$Utilities.DocumentBuilderKit.InferOperationVariablesFromSelectionSet<
        { verifyVerifiableDomain: $SelectionSet },
        ArgumentsMap.ArgumentsMap['mutation'],
        $TypeInputsIndex
      >
  >
}

export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION) as any

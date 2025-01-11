import type * as $$Utilities from 'graffle/utilities-for-generated'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >
  /**
   * Look up a code of conduct by its key
   */
  codeOfConduct: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.codeOfConduct<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { codeOfConduct: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'codeOfConduct'
      >
    >
  >
  /**
   * Look up a code of conduct by its key
   */
  codesOfConduct: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.codesOfConduct<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { codesOfConduct: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'codesOfConduct'
      >
    >
  >
  /**
   * Look up an enterprise by URL slug.
   */
  enterprise: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.enterprise<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { enterprise: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enterprise'
      >
    >
  >
  /**
   * Look up a pending enterprise administrator invitation by invitee, enterprise and role.
   */
  enterpriseAdministratorInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseAdministratorInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { enterpriseAdministratorInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enterpriseAdministratorInvitation'
      >
    >
  >
  /**
   * Look up a pending enterprise administrator invitation by invitation token.
   */
  enterpriseAdministratorInvitationByToken: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseAdministratorInvitationByToken<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { enterpriseAdministratorInvitationByToken: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enterpriseAdministratorInvitationByToken'
      >
    >
  >
  /**
   * Look up a pending enterprise unaffiliated member invitation by invitee and enterprise.
   */
  enterpriseMemberInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseMemberInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { enterpriseMemberInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enterpriseMemberInvitation'
      >
    >
  >
  /**
   * Look up a pending enterprise unaffiliated member invitation by invitation token.
   */
  enterpriseMemberInvitationByToken: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseMemberInvitationByToken<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { enterpriseMemberInvitationByToken: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enterpriseMemberInvitationByToken'
      >
    >
  >
  /**
   * ID of the object.
   */
  id: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { id: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'id'
      >
    >
  >
  /**
   * Look up an open source license by its key
   */
  license: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.license<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { license: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'license'
      >
    >
  >
  /**
   * Return a list of known open source licenses
   */
  licenses: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.licenses<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { licenses: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'licenses'
      >
    >
  >
  /**
   * Get alphabetically sorted list of Marketplace categories
   */
  marketplaceCategories: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.marketplaceCategories<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { marketplaceCategories: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'marketplaceCategories'
      >
    >
  >
  /**
   * Look up a Marketplace category by its slug.
   */
  marketplaceCategory: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.marketplaceCategory<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { marketplaceCategory: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'marketplaceCategory'
      >
    >
  >
  /**
   * Look up a single Marketplace listing
   */
  marketplaceListing: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.marketplaceListing<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { marketplaceListing: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'marketplaceListing'
      >
    >
  >
  /**
   * Look up Marketplace listings
   */
  marketplaceListings: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.marketplaceListings<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { marketplaceListings: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'marketplaceListings'
      >
    >
  >
  /**
   * Return information about the GitHub instance
   */
  meta: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.meta<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { meta: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'meta'
      >
    >
  >
  /**
   * Fetches an object given its ID.
   */
  node: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.node<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { node: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'node'
      >
    >
  >
  /**
   * Lookup nodes by a list of IDs.
   */
  nodes: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.nodes<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { nodes: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'nodes'
      >
    >
  >
  /**
   * Lookup a organization by login.
   */
  organization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.organization<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { organization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'organization'
      >
    >
  >
  /**
   * The client's rate limit information.
   */
  rateLimit: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.rateLimit<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { rateLimit: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'rateLimit'
      >
    >
  >
  /**
   * Workaround for re-exposing the root query object. (Refer to
   * https://github.com/facebook/relay/issues/112 for more information.)
   */
  relay: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.relay<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { relay: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'relay'
      >
    >
  >
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.repository<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { repository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'repository'
      >
    >
  >
  /**
   * Lookup a repository owner (ie. either a User or an Organization) by login.
   */
  repositoryOwner: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.repositoryOwner<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { repositoryOwner: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'repositoryOwner'
      >
    >
  >
  /**
   * Lookup resource by a URL.
   */
  resource: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resource<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { resource: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resource'
      >
    >
  >
  /**
   * Perform a search across resources, returning a maximum of 1,000 results.
   */
  search: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.search<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { search: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'search'
      >
    >
  >
  /**
   * GitHub Security Advisories
   */
  securityAdvisories: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.securityAdvisories<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { securityAdvisories: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'securityAdvisories'
      >
    >
  >
  /**
   * Fetch a Security Advisory by its GHSA ID
   */
  securityAdvisory: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.securityAdvisory<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { securityAdvisory: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'securityAdvisory'
      >
    >
  >
  /**
   * Software Vulnerabilities documented by GitHub Security Advisories
   */
  securityVulnerabilities: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.securityVulnerabilities<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { securityVulnerabilities: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'securityVulnerabilities'
      >
    >
  >
  /**
   * Users and organizations who can be sponsored via GitHub Sponsors.
   */
  sponsorables: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.sponsorables<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { sponsorables: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'sponsorables'
      >
    >
  >
  /**
   * Look up a topic by name.
   */
  topic: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.topic<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { topic: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'topic'
      >
    >
  >
  /**
   * Lookup a user by login.
   */
  user: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.user<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { user: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'user'
      >
    >
  >
  /**
   * The currently authenticated user.
   */
  viewer: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.viewer<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { viewer: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'viewer'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >
  /**
   * Clear all of a customer's queued migrations
   */
  abortQueuedMigrations: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.abortQueuedMigrations<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { abortQueuedMigrations: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'abortQueuedMigrations'
      >
    >
  >
  /**
   * Abort a repository migration queued or in progress.
   */
  abortRepositoryMigration: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.abortRepositoryMigration<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { abortRepositoryMigration: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'abortRepositoryMigration'
      >
    >
  >
  /**
   * Accepts a pending invitation for a user to become an administrator of an enterprise.
   */
  acceptEnterpriseAdministratorInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptEnterpriseAdministratorInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { acceptEnterpriseAdministratorInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'acceptEnterpriseAdministratorInvitation'
      >
    >
  >
  /**
   * Accepts a pending invitation for a user to become an unaffiliated member of an enterprise.
   */
  acceptEnterpriseMemberInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptEnterpriseMemberInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { acceptEnterpriseMemberInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'acceptEnterpriseMemberInvitation'
      >
    >
  >
  /**
   * Applies a suggested topic to the repository.
   */
  acceptTopicSuggestion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptTopicSuggestion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { acceptTopicSuggestion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'acceptTopicSuggestion'
      >
    >
  >
  /**
   * Access user namespace repository for a temporary duration.
   */
  accessUserNamespaceRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.accessUserNamespaceRepository<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { accessUserNamespaceRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'accessUserNamespaceRepository'
      >
    >
  >
  /**
   * Adds assignees to an assignable object.
   */
  addAssigneesToAssignable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addAssigneesToAssignable<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addAssigneesToAssignable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addAssigneesToAssignable'
      >
    >
  >
  /**
   * Adds a comment to an Issue or Pull Request.
   */
  addComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addComment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addComment'
      >
    >
  >
  /**
   * Adds a comment to a Discussion, possibly as a reply to another comment.
   */
  addDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addDiscussionComment'
      >
    >
  >
  /**
   * Vote for an option in a discussion poll.
   */
  addDiscussionPollVote: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addDiscussionPollVote<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addDiscussionPollVote: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addDiscussionPollVote'
      >
    >
  >
  /**
   * Adds enterprise members to an organization within the enterprise.
   */
  addEnterpriseOrganizationMember: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addEnterpriseOrganizationMember<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addEnterpriseOrganizationMember: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addEnterpriseOrganizationMember'
      >
    >
  >
  /**
   * Adds a support entitlement to an enterprise member.
   */
  addEnterpriseSupportEntitlement: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addEnterpriseSupportEntitlement<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addEnterpriseSupportEntitlement: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addEnterpriseSupportEntitlement'
      >
    >
  >
  /**
   * Adds labels to a labelable object.
   */
  addLabelsToLabelable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addLabelsToLabelable<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addLabelsToLabelable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addLabelsToLabelable'
      >
    >
  >
  /**
   * Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.
   */
  addProjectCard: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addProjectCard<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addProjectCard: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addProjectCard'
      >
    >
  >
  /**
   * Adds a column to a Project.
   */
  addProjectColumn: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addProjectColumn<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addProjectColumn: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addProjectColumn'
      >
    >
  >
  /**
   * Creates a new draft issue and add it to a Project.
   */
  addProjectV2DraftIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectV2DraftIssue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addProjectV2DraftIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addProjectV2DraftIssue'
      >
    >
  >
  /**
   * Links an existing content instance to a Project.
   */
  addProjectV2ItemById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectV2ItemById<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addProjectV2ItemById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addProjectV2ItemById'
      >
    >
  >
  /**
   * Adds a review to a Pull Request.
   */
  addPullRequestReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addPullRequestReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPullRequestReview'
      >
    >
  >
  /**
   * Adds a comment to a review.
   */
  addPullRequestReviewComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addPullRequestReviewComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPullRequestReviewComment'
      >
    >
  >
  /**
   * Adds a new thread to a pending Pull Request Review.
   */
  addPullRequestReviewThread: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewThread<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addPullRequestReviewThread: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPullRequestReviewThread'
      >
    >
  >
  /**
   * Adds a reply to an existing Pull Request Review Thread.
   */
  addPullRequestReviewThreadReply: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewThreadReply<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addPullRequestReviewThreadReply: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addPullRequestReviewThreadReply'
      >
    >
  >
  /**
   * Adds a reaction to a subject.
   */
  addReaction: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addReaction<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addReaction: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addReaction'
      >
    >
  >
  /**
   * Adds a star to a Starrable.
   */
  addStar: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addStar<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addStar: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addStar'
      >
    >
  >
  /**
   * Adds a sub-issue to a given issue
   */
  addSubIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addSubIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addSubIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addSubIssue'
      >
    >
  >
  /**
   * Add an upvote to a discussion or discussion comment.
   */
  addUpvote: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addUpvote<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addUpvote: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addUpvote'
      >
    >
  >
  /**
   * Adds a verifiable domain to an owning account.
   */
  addVerifiableDomain: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addVerifiableDomain<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addVerifiableDomain: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addVerifiableDomain'
      >
    >
  >
  /**
   * Approve all pending deployments under one or more environments
   */
  approveDeployments: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.approveDeployments<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { approveDeployments: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'approveDeployments'
      >
    >
  >
  /**
   * Approve a verifiable domain for notification delivery.
   */
  approveVerifiableDomain: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.approveVerifiableDomain<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { approveVerifiableDomain: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'approveVerifiableDomain'
      >
    >
  >
  /**
   * Archives a ProjectV2Item
   */
  archiveProjectV2Item: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.archiveProjectV2Item<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { archiveProjectV2Item: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'archiveProjectV2Item'
      >
    >
  >
  /**
   * Marks a repository as archived.
   */
  archiveRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.archiveRepository<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { archiveRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'archiveRepository'
      >
    >
  >
  /**
   * Cancels a pending invitation for an administrator to join an enterprise.
   */
  cancelEnterpriseAdminInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cancelEnterpriseAdminInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { cancelEnterpriseAdminInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'cancelEnterpriseAdminInvitation'
      >
    >
  >
  /**
   * Cancels a pending invitation for an unaffiliated member to join an enterprise.
   */
  cancelEnterpriseMemberInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cancelEnterpriseMemberInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { cancelEnterpriseMemberInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'cancelEnterpriseMemberInvitation'
      >
    >
  >
  /**
   * Cancel an active sponsorship.
   */
  cancelSponsorship: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.cancelSponsorship<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { cancelSponsorship: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'cancelSponsorship'
      >
    >
  >
  /**
   * Update your status on GitHub.
   */
  changeUserStatus: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.changeUserStatus<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { changeUserStatus: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'changeUserStatus'
      >
    >
  >
  /**
   * Clears all labels from a labelable object.
   */
  clearLabelsFromLabelable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.clearLabelsFromLabelable<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { clearLabelsFromLabelable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'clearLabelsFromLabelable'
      >
    >
  >
  /**
   * This mutation clears the value of a field for an item in a Project. Currently
   * only text, number, date, assignees, labels, single-select, iteration and
   * milestone fields are supported.
   */
  clearProjectV2ItemFieldValue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.clearProjectV2ItemFieldValue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { clearProjectV2ItemFieldValue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'clearProjectV2ItemFieldValue'
      >
    >
  >
  /**
   * Creates a new project by cloning configuration from an existing project.
   */
  cloneProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.cloneProject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { cloneProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'cloneProject'
      >
    >
  >
  /**
   * Create a new repository with the same files and directory structure as a template repository.
   */
  cloneTemplateRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cloneTemplateRepository<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { cloneTemplateRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'cloneTemplateRepository'
      >
    >
  >
  /**
   * Close a discussion.
   */
  closeDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.closeDiscussion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { closeDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'closeDiscussion'
      >
    >
  >
  /**
   * Close an issue.
   */
  closeIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.closeIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { closeIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'closeIssue'
      >
    >
  >
  /**
   * Close a pull request.
   */
  closePullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.closePullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { closePullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'closePullRequest'
      >
    >
  >
  /**
   * Convert a project note card to one associated with a newly created issue.
   */
  convertProjectCardNoteToIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertProjectCardNoteToIssue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { convertProjectCardNoteToIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'convertProjectCardNoteToIssue'
      >
    >
  >
  /**
   * Converts a projectV2 draft issue item to an issue.
   */
  convertProjectV2DraftIssueItemToIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertProjectV2DraftIssueItemToIssue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { convertProjectV2DraftIssueItemToIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'convertProjectV2DraftIssueItemToIssue'
      >
    >
  >
  /**
   * Converts a pull request to draft
   */
  convertPullRequestToDraft: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertPullRequestToDraft<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { convertPullRequestToDraft: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'convertPullRequestToDraft'
      >
    >
  >
  /**
   * Copy a project.
   */
  copyProjectV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.copyProjectV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { copyProjectV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'copyProjectV2'
      >
    >
  >
  /**
   * Invites a user to claim reattributable data
   */
  createAttributionInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createAttributionInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createAttributionInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createAttributionInvitation'
      >
    >
  >
  /**
   * Create a new branch protection rule
   */
  createBranchProtectionRule: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createBranchProtectionRule<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createBranchProtectionRule: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createBranchProtectionRule'
      >
    >
  >
  /**
   * Create a check run.
   */
  createCheckRun: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createCheckRun<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createCheckRun: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createCheckRun'
      >
    >
  >
  /**
   * Create a check suite
   */
  createCheckSuite: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createCheckSuite<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createCheckSuite: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createCheckSuite'
      >
    >
  >
  /**
   * Appends a commit to the given branch as the authenticated user.
   *
   * This mutation creates a commit whose parent is the HEAD of the provided
   * branch and also updates that branch to point to the new commit.
   * It can be thought of as similar to `git commit`.
   *
   * ### Locating a Branch
   *
   * Commits are appended to a `branch` of type `Ref`.
   * This must refer to a git branch (i.e.  the fully qualified path must
   * begin with `refs/heads/`, although including this prefix is optional.
   *
   * Callers may specify the `branch` to commit to either by its global node
   * ID or by passing both of `repositoryNameWithOwner` and `refName`.  For
   * more details see the documentation for `CommittableBranch`.
   *
   * ### Describing Changes
   *
   * `fileChanges` are specified as a `FilesChanges` object describing
   * `FileAdditions` and `FileDeletions`.
   *
   * Please see the documentation for `FileChanges` for more information on
   * how to use this argument to describe any set of file changes.
   *
   * ### Authorship
   *
   * Similar to the web commit interface, this mutation does not support
   * specifying the author or committer of the commit and will not add
   * support for this in the future.
   *
   * A commit created by a successful execution of this mutation will be
   * authored by the owner of the credential which authenticates the API
   * request.  The committer will be identical to that of commits authored
   * using the web interface.
   *
   * If you need full control over author and committer information, please
   * use the Git Database REST API instead.
   *
   * ### Commit Signing
   *
   * Commits made using this mutation are automatically signed by GitHub if
   * supported and will be marked as verified in the user interface.
   */
  createCommitOnBranch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createCommitOnBranch<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createCommitOnBranch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createCommitOnBranch'
      >
    >
  >
  /**
   * Creates a new deployment event.
   */
  createDeployment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createDeployment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createDeployment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createDeployment'
      >
    >
  >
  /**
   * Create a deployment status.
   */
  createDeploymentStatus: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createDeploymentStatus<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createDeploymentStatus: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createDeploymentStatus'
      >
    >
  >
  /**
   * Create a discussion.
   */
  createDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createDiscussion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createDiscussion'
      >
    >
  >
  /**
   * Creates an organization as part of an enterprise account. A personal access
   * token used to create an organization is implicitly permitted to update the
   * organization it created, if the organization is part of an enterprise that has
   * SAML enabled or uses Enterprise Managed Users. If the organization is not part
   * of such an enterprise, and instead has SAML enabled for it individually, the
   * token will then require SAML authorization to continue working against that organization.
   */
  createEnterpriseOrganization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createEnterpriseOrganization<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createEnterpriseOrganization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createEnterpriseOrganization'
      >
    >
  >
  /**
   * Creates an environment or simply returns it if already exists.
   */
  createEnvironment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createEnvironment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createEnvironment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createEnvironment'
      >
    >
  >
  /**
   * Creates a new IP allow list entry.
   */
  createIpAllowListEntry: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createIpAllowListEntry<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createIpAllowListEntry: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createIpAllowListEntry'
      >
    >
  >
  /**
   * Creates a new issue.
   */
  createIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createIssue'
      >
    >
  >
  /**
   * Creates a new label.
   */
  createLabel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createLabel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createLabel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createLabel'
      >
    >
  >
  /**
   * Create a branch linked to an issue.
   */
  createLinkedBranch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createLinkedBranch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createLinkedBranch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createLinkedBranch'
      >
    >
  >
  /**
   * Creates a GitHub Enterprise Importer (GEI) migration source.
   */
  createMigrationSource: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createMigrationSource<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createMigrationSource: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createMigrationSource'
      >
    >
  >
  /**
   * Creates a new project.
   */
  createProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createProject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createProject'
      >
    >
  >
  /**
   * Creates a new project.
   */
  createProjectV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createProjectV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createProjectV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createProjectV2'
      >
    >
  >
  /**
   * Create a new project field.
   */
  createProjectV2Field: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProjectV2Field<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createProjectV2Field: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createProjectV2Field'
      >
    >
  >
  /**
   * Creates a status update within a Project.
   */
  createProjectV2StatusUpdate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProjectV2StatusUpdate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createProjectV2StatusUpdate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createProjectV2StatusUpdate'
      >
    >
  >
  /**
   * Create a new pull request
   */
  createPullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createPullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createPullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createPullRequest'
      >
    >
  >
  /**
   * Create a new Git Ref.
   */
  createRef: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createRef<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createRef: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createRef'
      >
    >
  >
  /**
   * Create a new repository.
   */
  createRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createRepository<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createRepository'
      >
    >
  >
  /**
   * Create a repository ruleset
   */
  createRepositoryRuleset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createRepositoryRuleset<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createRepositoryRuleset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createRepositoryRuleset'
      >
    >
  >
  /**
   * Create a GitHub Sponsors profile to allow others to sponsor you or your organization.
   */
  createSponsorsListing: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSponsorsListing<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createSponsorsListing: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createSponsorsListing'
      >
    >
  >
  /**
   * Create a new payment tier for your GitHub Sponsors profile.
   */
  createSponsorsTier: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createSponsorsTier<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createSponsorsTier: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createSponsorsTier'
      >
    >
  >
  /**
   * Start a new sponsorship of a maintainer in GitHub Sponsors, or reactivate a past sponsorship.
   */
  createSponsorship: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createSponsorship<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createSponsorship: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createSponsorship'
      >
    >
  >
  /**
   * Make many sponsorships for different sponsorable users or organizations at
   * once. Can only sponsor those who have a public GitHub Sponsors profile.
   */
  createSponsorships: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createSponsorships<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createSponsorships: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createSponsorships'
      >
    >
  >
  /**
   * Creates a new team discussion.
   */
  createTeamDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createTeamDiscussion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createTeamDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createTeamDiscussion'
      >
    >
  >
  /**
   * Creates a new team discussion comment.
   */
  createTeamDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createTeamDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createTeamDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createTeamDiscussionComment'
      >
    >
  >
  /**
   * Creates a new user list.
   */
  createUserList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createUserList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createUserList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createUserList'
      >
    >
  >
  /**
   * Rejects a suggested topic for the repository.
   */
  declineTopicSuggestion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.declineTopicSuggestion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { declineTopicSuggestion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'declineTopicSuggestion'
      >
    >
  >
  /**
   * Delete a branch protection rule
   */
  deleteBranchProtectionRule: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteBranchProtectionRule<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteBranchProtectionRule: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteBranchProtectionRule'
      >
    >
  >
  /**
   * Deletes a deployment.
   */
  deleteDeployment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteDeployment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteDeployment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteDeployment'
      >
    >
  >
  /**
   * Delete a discussion and all of its replies.
   */
  deleteDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteDiscussion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteDiscussion'
      >
    >
  >
  /**
   * Delete a discussion comment. If it has replies, wipe it instead.
   */
  deleteDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteDiscussionComment'
      >
    >
  >
  /**
   * Deletes an environment
   */
  deleteEnvironment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteEnvironment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteEnvironment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteEnvironment'
      >
    >
  >
  /**
   * Deletes an IP allow list entry.
   */
  deleteIpAllowListEntry: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteIpAllowListEntry<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteIpAllowListEntry: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteIpAllowListEntry'
      >
    >
  >
  /**
   * Deletes an Issue object.
   */
  deleteIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteIssue'
      >
    >
  >
  /**
   * Deletes an IssueComment object.
   */
  deleteIssueComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteIssueComment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteIssueComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteIssueComment'
      >
    >
  >
  /**
   * Deletes a label.
   */
  deleteLabel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteLabel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteLabel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteLabel'
      >
    >
  >
  /**
   * Unlink a branch from an issue.
   */
  deleteLinkedBranch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteLinkedBranch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteLinkedBranch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteLinkedBranch'
      >
    >
  >
  /**
   * Delete a package version.
   */
  deletePackageVersion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePackageVersion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deletePackageVersion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deletePackageVersion'
      >
    >
  >
  /**
   * Deletes a project.
   */
  deleteProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteProject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProject'
      >
    >
  >
  /**
   * Deletes a project card.
   */
  deleteProjectCard: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteProjectCard<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectCard: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectCard'
      >
    >
  >
  /**
   * Deletes a project column.
   */
  deleteProjectColumn: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteProjectColumn<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectColumn: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectColumn'
      >
    >
  >
  /**
   * Delete a project.
   */
  deleteProjectV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteProjectV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectV2'
      >
    >
  >
  /**
   * Delete a project field.
   */
  deleteProjectV2Field: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2Field<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectV2Field: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectV2Field'
      >
    >
  >
  /**
   * Deletes an item from a Project.
   */
  deleteProjectV2Item: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteProjectV2Item<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectV2Item: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectV2Item'
      >
    >
  >
  /**
   * Deletes a project status update.
   */
  deleteProjectV2StatusUpdate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2StatusUpdate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectV2StatusUpdate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectV2StatusUpdate'
      >
    >
  >
  /**
   * Deletes a project workflow.
   */
  deleteProjectV2Workflow: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2Workflow<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteProjectV2Workflow: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteProjectV2Workflow'
      >
    >
  >
  /**
   * Deletes a pull request review.
   */
  deletePullRequestReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePullRequestReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deletePullRequestReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deletePullRequestReview'
      >
    >
  >
  /**
   * Deletes a pull request review comment.
   */
  deletePullRequestReviewComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePullRequestReviewComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deletePullRequestReviewComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deletePullRequestReviewComment'
      >
    >
  >
  /**
   * Delete a Git Ref.
   */
  deleteRef: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteRef<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteRef: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteRef'
      >
    >
  >
  /**
   * Delete a repository ruleset
   */
  deleteRepositoryRuleset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteRepositoryRuleset<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteRepositoryRuleset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteRepositoryRuleset'
      >
    >
  >
  /**
   * Deletes a team discussion.
   */
  deleteTeamDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteTeamDiscussion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteTeamDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteTeamDiscussion'
      >
    >
  >
  /**
   * Deletes a team discussion comment.
   */
  deleteTeamDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteTeamDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteTeamDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteTeamDiscussionComment'
      >
    >
  >
  /**
   * Deletes a user list.
   */
  deleteUserList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteUserList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteUserList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteUserList'
      >
    >
  >
  /**
   * Deletes a verifiable domain.
   */
  deleteVerifiableDomain: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteVerifiableDomain<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteVerifiableDomain: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteVerifiableDomain'
      >
    >
  >
  /**
   * Remove a pull request from the merge queue.
   */
  dequeuePullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.dequeuePullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { dequeuePullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dequeuePullRequest'
      >
    >
  >
  /**
   * Disable auto merge on the given pull request
   */
  disablePullRequestAutoMerge: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.disablePullRequestAutoMerge<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { disablePullRequestAutoMerge: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'disablePullRequestAutoMerge'
      >
    >
  >
  /**
   * Dismisses an approved or rejected pull request review.
   */
  dismissPullRequestReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dismissPullRequestReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { dismissPullRequestReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dismissPullRequestReview'
      >
    >
  >
  /**
   * Dismisses the Dependabot alert.
   */
  dismissRepositoryVulnerabilityAlert: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dismissRepositoryVulnerabilityAlert<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { dismissRepositoryVulnerabilityAlert: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dismissRepositoryVulnerabilityAlert'
      >
    >
  >
  /**
   * Enable the default auto-merge on a pull request.
   */
  enablePullRequestAutoMerge: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.enablePullRequestAutoMerge<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { enablePullRequestAutoMerge: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enablePullRequestAutoMerge'
      >
    >
  >
  /**
   * Add a pull request to the merge queue.
   */
  enqueuePullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.enqueuePullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { enqueuePullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'enqueuePullRequest'
      >
    >
  >
  /**
   * Follow an organization.
   */
  followOrganization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.followOrganization<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { followOrganization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'followOrganization'
      >
    >
  >
  /**
   * Follow a user.
   */
  followUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.followUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { followUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'followUser'
      >
    >
  >
  /**
   * Grant the migrator role to a user for all organizations under an enterprise account.
   */
  grantEnterpriseOrganizationsMigratorRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.grantEnterpriseOrganizationsMigratorRole<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { grantEnterpriseOrganizationsMigratorRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'grantEnterpriseOrganizationsMigratorRole'
      >
    >
  >
  /**
   * Grant the migrator role to a user or a team.
   */
  grantMigratorRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.grantMigratorRole<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { grantMigratorRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'grantMigratorRole'
      >
    >
  >
  /**
   * Creates a new project by importing columns and a list of issues/PRs.
   */
  importProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.importProject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { importProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'importProject'
      >
    >
  >
  /**
   * Invite someone to become an administrator of the enterprise.
   */
  inviteEnterpriseAdmin: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.inviteEnterpriseAdmin<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { inviteEnterpriseAdmin: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'inviteEnterpriseAdmin'
      >
    >
  >
  /**
   * Invite someone to become an unaffiliated member of the enterprise.
   */
  inviteEnterpriseMember: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.inviteEnterpriseMember<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { inviteEnterpriseMember: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'inviteEnterpriseMember'
      >
    >
  >
  /**
   * Links a project to a repository.
   */
  linkProjectV2ToRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.linkProjectV2ToRepository<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { linkProjectV2ToRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'linkProjectV2ToRepository'
      >
    >
  >
  /**
   * Links a project to a team.
   */
  linkProjectV2ToTeam: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.linkProjectV2ToTeam<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { linkProjectV2ToTeam: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'linkProjectV2ToTeam'
      >
    >
  >
  /**
   * Creates a repository link for a project.
   */
  linkRepositoryToProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.linkRepositoryToProject<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { linkRepositoryToProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'linkRepositoryToProject'
      >
    >
  >
  /**
   * Lock a lockable object
   */
  lockLockable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.lockLockable<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { lockLockable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'lockLockable'
      >
    >
  >
  /**
   * Mark a discussion comment as the chosen answer for discussions in an answerable category.
   */
  markDiscussionCommentAsAnswer: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markDiscussionCommentAsAnswer<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markDiscussionCommentAsAnswer: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markDiscussionCommentAsAnswer'
      >
    >
  >
  /**
   * Mark a pull request file as viewed
   */
  markFileAsViewed: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.markFileAsViewed<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markFileAsViewed: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markFileAsViewed'
      >
    >
  >
  /**
   * Mark a project as a template. Note that only projects which are owned by an Organization can be marked as a template.
   */
  markProjectV2AsTemplate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markProjectV2AsTemplate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markProjectV2AsTemplate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markProjectV2AsTemplate'
      >
    >
  >
  /**
   * Marks a pull request ready for review.
   */
  markPullRequestReadyForReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markPullRequestReadyForReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markPullRequestReadyForReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markPullRequestReadyForReview'
      >
    >
  >
  /**
   * Merge a head into a branch.
   */
  mergeBranch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.mergeBranch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { mergeBranch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'mergeBranch'
      >
    >
  >
  /**
   * Merge a pull request.
   */
  mergePullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.mergePullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { mergePullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'mergePullRequest'
      >
    >
  >
  /**
   * Minimizes a comment on an Issue, Commit, Pull Request, or Gist
   */
  minimizeComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.minimizeComment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { minimizeComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'minimizeComment'
      >
    >
  >
  /**
   * Moves a project card to another place.
   */
  moveProjectCard: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.moveProjectCard<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { moveProjectCard: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'moveProjectCard'
      >
    >
  >
  /**
   * Moves a project column to another place.
   */
  moveProjectColumn: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.moveProjectColumn<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { moveProjectColumn: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'moveProjectColumn'
      >
    >
  >
  /**
   * Pin an environment to a repository
   */
  pinEnvironment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.pinEnvironment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { pinEnvironment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pinEnvironment'
      >
    >
  >
  /**
   * Pin an issue to a repository
   */
  pinIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.pinIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { pinIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'pinIssue'
      >
    >
  >
  /**
   * Publish an existing sponsorship tier that is currently still a draft to a GitHub Sponsors profile.
   */
  publishSponsorsTier: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.publishSponsorsTier<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { publishSponsorsTier: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'publishSponsorsTier'
      >
    >
  >
  /**
   * Regenerates the identity provider recovery codes for an enterprise
   */
  regenerateEnterpriseIdentityProviderRecoveryCodes: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.regenerateEnterpriseIdentityProviderRecoveryCodes<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { regenerateEnterpriseIdentityProviderRecoveryCodes: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'regenerateEnterpriseIdentityProviderRecoveryCodes'
      >
    >
  >
  /**
   * Regenerates a verifiable domain's verification token.
   */
  regenerateVerifiableDomainToken: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.regenerateVerifiableDomainToken<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { regenerateVerifiableDomainToken: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'regenerateVerifiableDomainToken'
      >
    >
  >
  /**
   * Reject all pending deployments under one or more environments
   */
  rejectDeployments: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.rejectDeployments<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { rejectDeployments: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'rejectDeployments'
      >
    >
  >
  /**
   * Removes assignees from an assignable object.
   */
  removeAssigneesFromAssignable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeAssigneesFromAssignable<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeAssigneesFromAssignable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeAssigneesFromAssignable'
      >
    >
  >
  /**
   * Removes an administrator from the enterprise.
   */
  removeEnterpriseAdmin: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseAdmin<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeEnterpriseAdmin: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeEnterpriseAdmin'
      >
    >
  >
  /**
   * Removes the identity provider from an enterprise. Owners of enterprises both
   * with and without Enterprise Managed Users may use this mutation.
   */
  removeEnterpriseIdentityProvider: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseIdentityProvider<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeEnterpriseIdentityProvider: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeEnterpriseIdentityProvider'
      >
    >
  >
  /**
   * Removes a user from all organizations within the enterprise
   */
  removeEnterpriseMember: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseMember<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeEnterpriseMember: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeEnterpriseMember'
      >
    >
  >
  /**
   * Removes an organization from the enterprise
   */
  removeEnterpriseOrganization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseOrganization<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeEnterpriseOrganization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeEnterpriseOrganization'
      >
    >
  >
  /**
   * Removes a support entitlement from an enterprise member.
   */
  removeEnterpriseSupportEntitlement: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseSupportEntitlement<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeEnterpriseSupportEntitlement: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeEnterpriseSupportEntitlement'
      >
    >
  >
  /**
   * Removes labels from a Labelable object.
   */
  removeLabelsFromLabelable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeLabelsFromLabelable<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeLabelsFromLabelable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeLabelsFromLabelable'
      >
    >
  >
  /**
   * Removes outside collaborator from all repositories in an organization.
   */
  removeOutsideCollaborator: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeOutsideCollaborator<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeOutsideCollaborator: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeOutsideCollaborator'
      >
    >
  >
  /**
   * Removes a reaction from a subject.
   */
  removeReaction: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.removeReaction<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeReaction: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeReaction'
      >
    >
  >
  /**
   * Removes a star from a Starrable.
   */
  removeStar: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.removeStar<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeStar: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeStar'
      >
    >
  >
  /**
   * Removes a sub-issue from a given issue
   */
  removeSubIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.removeSubIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeSubIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeSubIssue'
      >
    >
  >
  /**
   * Remove an upvote to a discussion or discussion comment.
   */
  removeUpvote: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.removeUpvote<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeUpvote: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeUpvote'
      >
    >
  >
  /**
   * Reopen a discussion.
   */
  reopenDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.reopenDiscussion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reopenDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reopenDiscussion'
      >
    >
  >
  /**
   * Reopen a issue.
   */
  reopenIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.reopenIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reopenIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reopenIssue'
      >
    >
  >
  /**
   * Reopen a pull request.
   */
  reopenPullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.reopenPullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reopenPullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reopenPullRequest'
      >
    >
  >
  /**
   * Reorder a pinned repository environment
   */
  reorderEnvironment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.reorderEnvironment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reorderEnvironment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reorderEnvironment'
      >
    >
  >
  /**
   * Reprioritizes a sub-issue to a different position in the parent list.
   */
  reprioritizeSubIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reprioritizeSubIssue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reprioritizeSubIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reprioritizeSubIssue'
      >
    >
  >
  /**
   * Set review requests on a pull request.
   */
  requestReviews: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.requestReviews<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { requestReviews: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'requestReviews'
      >
    >
  >
  /**
   * Rerequests an existing check suite.
   */
  rerequestCheckSuite: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.rerequestCheckSuite<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { rerequestCheckSuite: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'rerequestCheckSuite'
      >
    >
  >
  /**
   * Marks a review thread as resolved.
   */
  resolveReviewThread: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.resolveReviewThread<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { resolveReviewThread: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'resolveReviewThread'
      >
    >
  >
  /**
   * Retire a published payment tier from your GitHub Sponsors profile so it cannot be used to start new sponsorships.
   */
  retireSponsorsTier: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.retireSponsorsTier<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { retireSponsorsTier: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'retireSponsorsTier'
      >
    >
  >
  /**
   * Create a pull request that reverts the changes from a merged pull request.
   */
  revertPullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.revertPullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { revertPullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'revertPullRequest'
      >
    >
  >
  /**
   * Revoke the migrator role to a user for all organizations under an enterprise account.
   */
  revokeEnterpriseOrganizationsMigratorRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.revokeEnterpriseOrganizationsMigratorRole<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { revokeEnterpriseOrganizationsMigratorRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'revokeEnterpriseOrganizationsMigratorRole'
      >
    >
  >
  /**
   * Revoke the migrator role from a user or a team.
   */
  revokeMigratorRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.revokeMigratorRole<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { revokeMigratorRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'revokeMigratorRole'
      >
    >
  >
  /**
   * Creates or updates the identity provider for an enterprise.
   */
  setEnterpriseIdentityProvider: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setEnterpriseIdentityProvider<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { setEnterpriseIdentityProvider: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'setEnterpriseIdentityProvider'
      >
    >
  >
  /**
   * Set an organization level interaction limit for an organization's public repositories.
   */
  setOrganizationInteractionLimit: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setOrganizationInteractionLimit<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { setOrganizationInteractionLimit: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'setOrganizationInteractionLimit'
      >
    >
  >
  /**
   * Sets an interaction limit setting for a repository.
   */
  setRepositoryInteractionLimit: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setRepositoryInteractionLimit<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { setRepositoryInteractionLimit: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'setRepositoryInteractionLimit'
      >
    >
  >
  /**
   * Set a user level interaction limit for an user's public repositories.
   */
  setUserInteractionLimit: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setUserInteractionLimit<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { setUserInteractionLimit: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'setUserInteractionLimit'
      >
    >
  >
  /**
   * Starts a GitHub Enterprise Importer organization migration.
   */
  startOrganizationMigration: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.startOrganizationMigration<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startOrganizationMigration: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startOrganizationMigration'
      >
    >
  >
  /**
   * Starts a GitHub Enterprise Importer (GEI) repository migration.
   */
  startRepositoryMigration: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.startRepositoryMigration<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startRepositoryMigration: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startRepositoryMigration'
      >
    >
  >
  /**
   * Submits a pending pull request review.
   */
  submitPullRequestReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.submitPullRequestReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { submitPullRequestReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'submitPullRequestReview'
      >
    >
  >
  /**
   * Transfer an organization from one enterprise to another enterprise.
   */
  transferEnterpriseOrganization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.transferEnterpriseOrganization<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { transferEnterpriseOrganization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'transferEnterpriseOrganization'
      >
    >
  >
  /**
   * Transfer an issue to a different repository
   */
  transferIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.transferIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { transferIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'transferIssue'
      >
    >
  >
  /**
   * Unarchives a ProjectV2Item
   */
  unarchiveProjectV2Item: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unarchiveProjectV2Item<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unarchiveProjectV2Item: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unarchiveProjectV2Item'
      >
    >
  >
  /**
   * Unarchives a repository.
   */
  unarchiveRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unarchiveRepository<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unarchiveRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unarchiveRepository'
      >
    >
  >
  /**
   * Unfollow an organization.
   */
  unfollowOrganization: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unfollowOrganization<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unfollowOrganization: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unfollowOrganization'
      >
    >
  >
  /**
   * Unfollow a user.
   */
  unfollowUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unfollowUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unfollowUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unfollowUser'
      >
    >
  >
  /**
   * Unlinks a project from a repository.
   */
  unlinkProjectV2FromRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkProjectV2FromRepository<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unlinkProjectV2FromRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unlinkProjectV2FromRepository'
      >
    >
  >
  /**
   * Unlinks a project to a team.
   */
  unlinkProjectV2FromTeam: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkProjectV2FromTeam<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unlinkProjectV2FromTeam: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unlinkProjectV2FromTeam'
      >
    >
  >
  /**
   * Deletes a repository link from a project.
   */
  unlinkRepositoryFromProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkRepositoryFromProject<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unlinkRepositoryFromProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unlinkRepositoryFromProject'
      >
    >
  >
  /**
   * Unlock a lockable object
   */
  unlockLockable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unlockLockable<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unlockLockable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unlockLockable'
      >
    >
  >
  /**
   * Unmark a discussion comment as the chosen answer for discussions in an answerable category.
   */
  unmarkDiscussionCommentAsAnswer: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkDiscussionCommentAsAnswer<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unmarkDiscussionCommentAsAnswer: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unmarkDiscussionCommentAsAnswer'
      >
    >
  >
  /**
   * Unmark a pull request file as viewed
   */
  unmarkFileAsViewed: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unmarkFileAsViewed<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unmarkFileAsViewed: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unmarkFileAsViewed'
      >
    >
  >
  /**
   * Unmark an issue as a duplicate of another issue.
   */
  unmarkIssueAsDuplicate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkIssueAsDuplicate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unmarkIssueAsDuplicate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unmarkIssueAsDuplicate'
      >
    >
  >
  /**
   * Unmark a project as a template.
   */
  unmarkProjectV2AsTemplate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkProjectV2AsTemplate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unmarkProjectV2AsTemplate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unmarkProjectV2AsTemplate'
      >
    >
  >
  /**
   * Unminimizes a comment on an Issue, Commit, Pull Request, or Gist
   */
  unminimizeComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unminimizeComment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unminimizeComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unminimizeComment'
      >
    >
  >
  /**
   * Unpin a pinned issue from a repository
   */
  unpinIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unpinIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unpinIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unpinIssue'
      >
    >
  >
  /**
   * Marks a review thread as unresolved.
   */
  unresolveReviewThread: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unresolveReviewThread<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unresolveReviewThread: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unresolveReviewThread'
      >
    >
  >
  /**
   * Update a branch protection rule
   */
  updateBranchProtectionRule: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateBranchProtectionRule<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateBranchProtectionRule: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateBranchProtectionRule'
      >
    >
  >
  /**
   * Update a check run
   */
  updateCheckRun: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateCheckRun<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateCheckRun: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateCheckRun'
      >
    >
  >
  /**
   * Modifies the settings of an existing check suite
   */
  updateCheckSuitePreferences: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateCheckSuitePreferences<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateCheckSuitePreferences: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateCheckSuitePreferences'
      >
    >
  >
  /**
   * Update a discussion
   */
  updateDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateDiscussion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateDiscussion'
      >
    >
  >
  /**
   * Update the contents of a comment on a Discussion
   */
  updateDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateDiscussionComment'
      >
    >
  >
  /**
   * Updates the role of an enterprise administrator.
   */
  updateEnterpriseAdministratorRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseAdministratorRole<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseAdministratorRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseAdministratorRole'
      >
    >
  >
  /**
   * Sets whether private repository forks are enabled for an enterprise.
   */
  updateEnterpriseAllowPrivateRepositoryForkingSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseAllowPrivateRepositoryForkingSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseAllowPrivateRepositoryForkingSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseAllowPrivateRepositoryForkingSetting'
      >
    >
  >
  /**
   * Sets the base repository permission for organizations in an enterprise.
   */
  updateEnterpriseDefaultRepositoryPermissionSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseDefaultRepositoryPermissionSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseDefaultRepositoryPermissionSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseDefaultRepositoryPermissionSetting'
      >
    >
  >
  /**
   * Sets whether deploy keys are allowed to be created and used for an enterprise.
   */
  updateEnterpriseDeployKeySetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseDeployKeySetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseDeployKeySetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseDeployKeySetting'
      >
    >
  >
  /**
   * Sets whether organization members with admin permissions on a repository can change repository visibility.
   */
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanChangeRepositoryVisibilitySetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanChangeRepositoryVisibilitySetting'
      >
    >
  >
  /**
   * Sets the members can create repositories setting for an enterprise.
   */
  updateEnterpriseMembersCanCreateRepositoriesSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanCreateRepositoriesSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanCreateRepositoriesSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanCreateRepositoriesSetting'
      >
    >
  >
  /**
   * Sets the members can delete issues setting for an enterprise.
   */
  updateEnterpriseMembersCanDeleteIssuesSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanDeleteIssuesSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanDeleteIssuesSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanDeleteIssuesSetting'
      >
    >
  >
  /**
   * Sets the members can delete repositories setting for an enterprise.
   */
  updateEnterpriseMembersCanDeleteRepositoriesSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanDeleteRepositoriesSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanDeleteRepositoriesSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanDeleteRepositoriesSetting'
      >
    >
  >
  /**
   * Sets whether members can invite collaborators are enabled for an enterprise.
   */
  updateEnterpriseMembersCanInviteCollaboratorsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanInviteCollaboratorsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanInviteCollaboratorsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanInviteCollaboratorsSetting'
      >
    >
  >
  /**
   * Sets whether or not an organization owner can make purchases.
   */
  updateEnterpriseMembersCanMakePurchasesSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanMakePurchasesSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanMakePurchasesSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanMakePurchasesSetting'
      >
    >
  >
  /**
   * Sets the members can update protected branches setting for an enterprise.
   */
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanUpdateProtectedBranchesSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanUpdateProtectedBranchesSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanUpdateProtectedBranchesSetting'
      >
    >
  >
  /**
   * Sets the members can view dependency insights for an enterprise.
   */
  updateEnterpriseMembersCanViewDependencyInsightsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanViewDependencyInsightsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseMembersCanViewDependencyInsightsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseMembersCanViewDependencyInsightsSetting'
      >
    >
  >
  /**
   * Sets whether organization projects are enabled for an enterprise.
   */
  updateEnterpriseOrganizationProjectsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseOrganizationProjectsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseOrganizationProjectsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseOrganizationProjectsSetting'
      >
    >
  >
  /**
   * Updates the role of an enterprise owner with an organization.
   */
  updateEnterpriseOwnerOrganizationRole: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseOwnerOrganizationRole<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseOwnerOrganizationRole: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseOwnerOrganizationRole'
      >
    >
  >
  /**
   * Updates an enterprise's profile.
   */
  updateEnterpriseProfile: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseProfile<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseProfile: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseProfile'
      >
    >
  >
  /**
   * Sets whether repository projects are enabled for a enterprise.
   */
  updateEnterpriseRepositoryProjectsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseRepositoryProjectsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseRepositoryProjectsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseRepositoryProjectsSetting'
      >
    >
  >
  /**
   * Sets whether team discussions are enabled for an enterprise.
   */
  updateEnterpriseTeamDiscussionsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseTeamDiscussionsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseTeamDiscussionsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseTeamDiscussionsSetting'
      >
    >
  >
  /**
   * Sets the two-factor authentication methods that users of an enterprise may not use.
   */
  updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting'
      >
    >
  >
  /**
   * Sets whether two factor authentication is required for all users in an enterprise.
   */
  updateEnterpriseTwoFactorAuthenticationRequiredSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseTwoFactorAuthenticationRequiredSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnterpriseTwoFactorAuthenticationRequiredSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnterpriseTwoFactorAuthenticationRequiredSetting'
      >
    >
  >
  /**
   * Updates an environment.
   */
  updateEnvironment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateEnvironment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateEnvironment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateEnvironment'
      >
    >
  >
  /**
   * Sets whether an IP allow list is enabled on an owner.
   */
  updateIpAllowListEnabledSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListEnabledSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIpAllowListEnabledSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIpAllowListEnabledSetting'
      >
    >
  >
  /**
   * Updates an IP allow list entry.
   */
  updateIpAllowListEntry: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListEntry<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIpAllowListEntry: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIpAllowListEntry'
      >
    >
  >
  /**
   * Sets whether IP allow list configuration for installed GitHub Apps is enabled on an owner.
   */
  updateIpAllowListForInstalledAppsEnabledSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListForInstalledAppsEnabledSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIpAllowListForInstalledAppsEnabledSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIpAllowListForInstalledAppsEnabledSetting'
      >
    >
  >
  /**
   * Updates an Issue.
   */
  updateIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateIssue<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIssue'
      >
    >
  >
  /**
   * Updates an IssueComment object.
   */
  updateIssueComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateIssueComment<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIssueComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIssueComment'
      >
    >
  >
  /**
   * Updates an existing label.
   */
  updateLabel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateLabel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateLabel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateLabel'
      >
    >
  >
  /**
   * Update the setting to restrict notifications to only verified or approved domains available to an owner.
   */
  updateNotificationRestrictionSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateNotificationRestrictionSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateNotificationRestrictionSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateNotificationRestrictionSetting'
      >
    >
  >
  /**
   * Sets whether private repository forks are enabled for an organization.
   */
  updateOrganizationAllowPrivateRepositoryForkingSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateOrganizationAllowPrivateRepositoryForkingSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateOrganizationAllowPrivateRepositoryForkingSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateOrganizationAllowPrivateRepositoryForkingSetting'
      >
    >
  >
  /**
   * Sets whether contributors are required to sign off on web-based commits for repositories in an organization.
   */
  updateOrganizationWebCommitSignoffSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateOrganizationWebCommitSignoffSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateOrganizationWebCommitSignoffSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateOrganizationWebCommitSignoffSetting'
      >
    >
  >
  /**
   * Toggle the setting for your GitHub Sponsors profile that allows other GitHub
   * accounts to sponsor you on GitHub while paying for the sponsorship on Patreon.
   * Only applicable when you have a GitHub Sponsors profile and have connected
   * your GitHub account with Patreon.
   */
  updatePatreonSponsorability: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePatreonSponsorability<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updatePatreonSponsorability: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updatePatreonSponsorability'
      >
    >
  >
  /**
   * Updates an existing project.
   */
  updateProject: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateProject<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProject: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProject'
      >
    >
  >
  /**
   * Updates an existing project card.
   */
  updateProjectCard: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateProjectCard<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectCard: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectCard'
      >
    >
  >
  /**
   * Updates an existing project column.
   */
  updateProjectColumn: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateProjectColumn<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectColumn: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectColumn'
      >
    >
  >
  /**
   * Updates an existing project.
   */
  updateProjectV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateProjectV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2'
      >
    >
  >
  /**
   * Update the collaborators on a team or a project
   */
  updateProjectV2Collaborators: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2Collaborators<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2Collaborators: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2Collaborators'
      >
    >
  >
  /**
   * Updates a draft issue within a Project.
   */
  updateProjectV2DraftIssue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2DraftIssue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2DraftIssue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2DraftIssue'
      >
    >
  >
  /**
   * Update a project field.
   */
  updateProjectV2Field: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2Field<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2Field: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2Field'
      >
    >
  >
  /**
   * This mutation updates the value of a field for an item in a Project. Currently
   * only single-select, text, number, date, and iteration fields are supported.
   */
  updateProjectV2ItemFieldValue: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2ItemFieldValue<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2ItemFieldValue: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2ItemFieldValue'
      >
    >
  >
  /**
   * This mutation updates the position of the item in the project, where the position represents the priority of an item.
   */
  updateProjectV2ItemPosition: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2ItemPosition<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2ItemPosition: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2ItemPosition'
      >
    >
  >
  /**
   * Updates a status update within a Project.
   */
  updateProjectV2StatusUpdate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2StatusUpdate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateProjectV2StatusUpdate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateProjectV2StatusUpdate'
      >
    >
  >
  /**
   * Update a pull request
   */
  updatePullRequest: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updatePullRequest<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updatePullRequest: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updatePullRequest'
      >
    >
  >
  /**
   * Merge or Rebase HEAD from upstream branch into pull request branch
   */
  updatePullRequestBranch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestBranch<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updatePullRequestBranch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updatePullRequestBranch'
      >
    >
  >
  /**
   * Updates the body of a pull request review.
   */
  updatePullRequestReview: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestReview<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updatePullRequestReview: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updatePullRequestReview'
      >
    >
  >
  /**
   * Updates a pull request review comment.
   */
  updatePullRequestReviewComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestReviewComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updatePullRequestReviewComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updatePullRequestReviewComment'
      >
    >
  >
  /**
   * Update a Git Ref.
   */
  updateRef: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateRef<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateRef: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateRef'
      >
    >
  >
  /**
   * Creates, updates and/or deletes multiple refs in a repository.
   *
   * This mutation takes a list of `RefUpdate`s and performs these updates
   * on the repository. All updates are performed atomically, meaning that
   * if one of them is rejected, no other ref will be modified.
   *
   * `RefUpdate.beforeOid` specifies that the given reference needs to point
   * to the given value before performing any updates. A value of
   * `0000000000000000000000000000000000000000` can be used to verify that
   * the references should not exist.
   *
   * `RefUpdate.afterOid` specifies the value that the given reference
   * will point to after performing all updates. A value of
   * `0000000000000000000000000000000000000000` can be used to delete a
   * reference.
   *
   * If `RefUpdate.force` is set to `true`, a non-fast-forward updates
   * for the given reference will be allowed.
   */
  updateRefs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateRefs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateRefs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateRefs'
      >
    >
  >
  /**
   * Update information about a repository.
   */
  updateRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateRepository<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateRepository'
      >
    >
  >
  /**
   * Update a repository ruleset
   */
  updateRepositoryRuleset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRepositoryRuleset<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateRepositoryRuleset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateRepositoryRuleset'
      >
    >
  >
  /**
   * Sets whether contributors are required to sign off on web-based commits for a repository.
   */
  updateRepositoryWebCommitSignoffSetting: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRepositoryWebCommitSignoffSetting<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateRepositoryWebCommitSignoffSetting: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateRepositoryWebCommitSignoffSetting'
      >
    >
  >
  /**
   * Change visibility of your sponsorship and opt in or out of email updates from the maintainer.
   */
  updateSponsorshipPreferences: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateSponsorshipPreferences<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateSponsorshipPreferences: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateSponsorshipPreferences'
      >
    >
  >
  /**
   * Updates the state for subscribable subjects.
   */
  updateSubscription: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateSubscription<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateSubscription: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateSubscription'
      >
    >
  >
  /**
   * Updates a team discussion.
   */
  updateTeamDiscussion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamDiscussion<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateTeamDiscussion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateTeamDiscussion'
      >
    >
  >
  /**
   * Updates a discussion comment.
   */
  updateTeamDiscussionComment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamDiscussionComment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateTeamDiscussionComment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateTeamDiscussionComment'
      >
    >
  >
  /**
   * Updates team review assignment.
   */
  updateTeamReviewAssignment: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamReviewAssignment<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateTeamReviewAssignment: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateTeamReviewAssignment'
      >
    >
  >
  /**
   * Update team repository.
   */
  updateTeamsRepository: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamsRepository<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateTeamsRepository: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateTeamsRepository'
      >
    >
  >
  /**
   * Replaces the repository's topics with the given topics.
   */
  updateTopics: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateTopics<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateTopics: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateTopics'
      >
    >
  >
  /**
   * Updates an existing user list.
   */
  updateUserList: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateUserList<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUserList: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUserList'
      >
    >
  >
  /**
   * Updates which of the viewer's lists an item belongs to
   */
  updateUserListsForItem: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateUserListsForItem<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUserListsForItem: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUserListsForItem'
      >
    >
  >
  /**
   * Verify that a verifiable domain has the expected DNS record.
   */
  verifyVerifiableDomain: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.verifyVerifiableDomain<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { verifyVerifiableDomain: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'verifyVerifiableDomain'
      >
    >
  >
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}

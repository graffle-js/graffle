import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets.js'

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
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
  codeOfConduct: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.codeOfConduct<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  codesOfConduct: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.codesOfConduct<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  enterprise: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterprise<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  enterpriseAdministratorInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseAdministratorInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  enterpriseAdministratorInvitationByToken: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseAdministratorInvitationByToken<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  enterpriseMemberInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseMemberInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  enterpriseMemberInvitationByToken: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.enterpriseMemberInvitationByToken<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  id: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.id<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  license: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.license<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  licenses: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.licenses<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  marketplaceCategories: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.marketplaceCategories<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  marketplaceCategory: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.marketplaceCategory<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  marketplaceListing: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.marketplaceListing<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  marketplaceListings: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.marketplaceListings<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  meta: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.meta<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  node: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.node<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  nodes: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.nodes<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  organization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.organization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  rateLimit: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.rateLimit<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  relay: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.relay<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  repository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.repository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  repositoryOwner: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.repositoryOwner<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  resource: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.resource<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  search: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.search<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  securityAdvisories: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.securityAdvisories<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  securityAdvisory: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.securityAdvisory<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  securityVulnerabilities: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.securityVulnerabilities<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  sponsorables: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.sponsorables<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  topic: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.topic<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  user: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.user<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
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
  viewer: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.viewer<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
          { viewer: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'viewer'
      >
    >
  >
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<{ scalars: $Context['scalars'] }>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >
  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
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
  abortQueuedMigrations: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.abortQueuedMigrations<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  abortRepositoryMigration: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.abortRepositoryMigration<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  acceptEnterpriseAdministratorInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptEnterpriseAdministratorInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  acceptEnterpriseMemberInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptEnterpriseMemberInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  acceptTopicSuggestion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptTopicSuggestion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  accessUserNamespaceRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.accessUserNamespaceRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addAssigneesToAssignable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addAssigneesToAssignable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addDiscussionPollVote: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addDiscussionPollVote<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addEnterpriseOrganizationMember: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addEnterpriseOrganizationMember<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addEnterpriseSupportEntitlement: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addEnterpriseSupportEntitlement<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addLabelsToLabelable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addLabelsToLabelable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addProjectCard: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectCard<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addProjectColumn: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectColumn<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addProjectV2DraftIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectV2DraftIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addProjectV2ItemById: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addProjectV2ItemById<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addPullRequestReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addPullRequestReviewComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addPullRequestReviewThread: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewThread<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addPullRequestReviewThreadReply: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addPullRequestReviewThreadReply<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addReaction: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addReaction<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addStar: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addStar<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addSubIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addSubIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addUpvote: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addUpvote<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  addVerifiableDomain: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addVerifiableDomain<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  approveDeployments: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.approveDeployments<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  approveVerifiableDomain: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.approveVerifiableDomain<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  archiveProjectV2Item: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.archiveProjectV2Item<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  archiveRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.archiveRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  cancelEnterpriseAdminInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cancelEnterpriseAdminInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  cancelEnterpriseMemberInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cancelEnterpriseMemberInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  cancelSponsorship: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cancelSponsorship<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  changeUserStatus: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.changeUserStatus<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  clearLabelsFromLabelable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.clearLabelsFromLabelable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  clearProjectV2ItemFieldValue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.clearProjectV2ItemFieldValue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  cloneProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cloneProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  cloneTemplateRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.cloneTemplateRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  closeDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.closeDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  closeIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.closeIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  closePullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.closePullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  convertProjectCardNoteToIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertProjectCardNoteToIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  convertProjectV2DraftIssueItemToIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertProjectV2DraftIssueItemToIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  convertPullRequestToDraft: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.convertPullRequestToDraft<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  copyProjectV2: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.copyProjectV2<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createAttributionInvitation: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createAttributionInvitation<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createBranchProtectionRule: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createBranchProtectionRule<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createCheckRun: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createCheckRun<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createCheckSuite: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createCheckSuite<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createCommitOnBranch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createCommitOnBranch<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createDeployment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createDeployment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createDeploymentStatus: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createDeploymentStatus<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createEnterpriseOrganization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createEnterpriseOrganization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createEnvironment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createEnvironment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createIpAllowListEntry: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createIpAllowListEntry<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createLabel: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createLabel<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createLinkedBranch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createLinkedBranch<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createMigrationSource: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createMigrationSource<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createProjectV2: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProjectV2<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createProjectV2Field: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProjectV2Field<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createProjectV2StatusUpdate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createProjectV2StatusUpdate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createPullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createPullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createRef: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createRef<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createRepositoryRuleset: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createRepositoryRuleset<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createSponsorsListing: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSponsorsListing<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createSponsorsTier: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSponsorsTier<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createSponsorship: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSponsorship<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createSponsorships: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSponsorships<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createTeamDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createTeamDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createTeamDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createTeamDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  createUserList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createUserList<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  declineTopicSuggestion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.declineTopicSuggestion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteBranchProtectionRule: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteBranchProtectionRule<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteDeployment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteDeployment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteEnvironment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteEnvironment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteIpAllowListEntry: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteIpAllowListEntry<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteIssueComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteIssueComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteLabel: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteLabel<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteLinkedBranch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteLinkedBranch<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deletePackageVersion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePackageVersion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectCard: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectCard<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectColumn: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectColumn<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectV2: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectV2Field: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2Field<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectV2Item: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2Item<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectV2StatusUpdate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2StatusUpdate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteProjectV2Workflow: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteProjectV2Workflow<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deletePullRequestReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePullRequestReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deletePullRequestReviewComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deletePullRequestReviewComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteRef: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteRef<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteRepositoryRuleset: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteRepositoryRuleset<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteTeamDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteTeamDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteTeamDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteTeamDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteUserList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteUserList<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  deleteVerifiableDomain: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteVerifiableDomain<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  dequeuePullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dequeuePullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  disablePullRequestAutoMerge: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.disablePullRequestAutoMerge<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  dismissPullRequestReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dismissPullRequestReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  dismissRepositoryVulnerabilityAlert: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dismissRepositoryVulnerabilityAlert<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  enablePullRequestAutoMerge: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.enablePullRequestAutoMerge<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  enqueuePullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.enqueuePullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  followOrganization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.followOrganization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  followUser: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.followUser<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  grantEnterpriseOrganizationsMigratorRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.grantEnterpriseOrganizationsMigratorRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  grantMigratorRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.grantMigratorRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  importProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.importProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  inviteEnterpriseAdmin: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.inviteEnterpriseAdmin<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  inviteEnterpriseMember: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.inviteEnterpriseMember<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  linkProjectV2ToRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.linkProjectV2ToRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  linkProjectV2ToTeam: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.linkProjectV2ToTeam<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  linkRepositoryToProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.linkRepositoryToProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  lockLockable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.lockLockable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  markDiscussionCommentAsAnswer: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markDiscussionCommentAsAnswer<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  markFileAsViewed: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markFileAsViewed<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  markProjectV2AsTemplate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markProjectV2AsTemplate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  markPullRequestReadyForReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markPullRequestReadyForReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  mergeBranch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.mergeBranch<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  mergePullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.mergePullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  minimizeComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.minimizeComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  moveProjectCard: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.moveProjectCard<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  moveProjectColumn: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.moveProjectColumn<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  pinEnvironment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.pinEnvironment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  pinIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.pinIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  publishSponsorsTier: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.publishSponsorsTier<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  regenerateEnterpriseIdentityProviderRecoveryCodes: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.regenerateEnterpriseIdentityProviderRecoveryCodes<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  regenerateVerifiableDomainToken: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.regenerateVerifiableDomainToken<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  rejectDeployments: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.rejectDeployments<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeAssigneesFromAssignable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeAssigneesFromAssignable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeEnterpriseAdmin: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseAdmin<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeEnterpriseIdentityProvider: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseIdentityProvider<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeEnterpriseMember: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseMember<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeEnterpriseOrganization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseOrganization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeEnterpriseSupportEntitlement: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeEnterpriseSupportEntitlement<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeLabelsFromLabelable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeLabelsFromLabelable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeOutsideCollaborator: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeOutsideCollaborator<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeReaction: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeReaction<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeStar: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeStar<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeSubIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeSubIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  removeUpvote: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeUpvote<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  reopenDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reopenDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  reopenIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reopenIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  reopenPullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reopenPullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  reorderEnvironment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reorderEnvironment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  reprioritizeSubIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.reprioritizeSubIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  requestReviews: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.requestReviews<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  rerequestCheckSuite: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.rerequestCheckSuite<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  resolveReviewThread: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.resolveReviewThread<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  retireSponsorsTier: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.retireSponsorsTier<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  revertPullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.revertPullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  revokeEnterpriseOrganizationsMigratorRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.revokeEnterpriseOrganizationsMigratorRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  revokeMigratorRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.revokeMigratorRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  setEnterpriseIdentityProvider: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setEnterpriseIdentityProvider<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  setOrganizationInteractionLimit: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setOrganizationInteractionLimit<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  setRepositoryInteractionLimit: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setRepositoryInteractionLimit<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  setUserInteractionLimit: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.setUserInteractionLimit<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  startOrganizationMigration: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.startOrganizationMigration<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  startRepositoryMigration: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.startRepositoryMigration<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  submitPullRequestReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.submitPullRequestReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  transferEnterpriseOrganization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.transferEnterpriseOrganization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  transferIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.transferIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unarchiveProjectV2Item: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unarchiveProjectV2Item<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unarchiveRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unarchiveRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unfollowOrganization: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unfollowOrganization<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unfollowUser: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unfollowUser<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unlinkProjectV2FromRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkProjectV2FromRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unlinkProjectV2FromTeam: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkProjectV2FromTeam<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unlinkRepositoryFromProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlinkRepositoryFromProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unlockLockable: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unlockLockable<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unmarkDiscussionCommentAsAnswer: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkDiscussionCommentAsAnswer<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unmarkFileAsViewed: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkFileAsViewed<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unmarkIssueAsDuplicate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkIssueAsDuplicate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unmarkProjectV2AsTemplate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unmarkProjectV2AsTemplate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unminimizeComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unminimizeComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unpinIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unpinIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  unresolveReviewThread: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unresolveReviewThread<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateBranchProtectionRule: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateBranchProtectionRule<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateCheckRun: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateCheckRun<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateCheckSuitePreferences: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateCheckSuitePreferences<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseAdministratorRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseAdministratorRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseAllowPrivateRepositoryForkingSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseAllowPrivateRepositoryForkingSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseDefaultRepositoryPermissionSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseDefaultRepositoryPermissionSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseDeployKeySetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseDeployKeySetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting:
    $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
      $Context,
      <$SelectionSet>(
        selectionSet: $$Utilities.Exact<
          $SelectionSet,
          $$SelectionSets.Mutation.updateEnterpriseMembersCanChangeRepositoryVisibilitySetting<
            { scalars: $Context['scalars'] }
          >
        >,
      ) => Promise<
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanCreateRepositoriesSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanCreateRepositoriesSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanDeleteIssuesSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanDeleteIssuesSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanDeleteRepositoriesSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanDeleteRepositoriesSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanInviteCollaboratorsSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanInviteCollaboratorsSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanMakePurchasesSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanMakePurchasesSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting:
    $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
      $Context,
      <$SelectionSet>(
        selectionSet: $$Utilities.Exact<
          $SelectionSet,
          $$SelectionSets.Mutation.updateEnterpriseMembersCanUpdateProtectedBranchesSetting<
            { scalars: $Context['scalars'] }
          >
        >,
      ) => Promise<
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseMembersCanViewDependencyInsightsSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseMembersCanViewDependencyInsightsSetting<
          { scalars: $Context['scalars'] }
        >
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseOrganizationProjectsSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseOrganizationProjectsSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseOwnerOrganizationRole: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseOwnerOrganizationRole<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseProfile: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseProfile<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseRepositoryProjectsSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseRepositoryProjectsSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseTeamDiscussionsSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseTeamDiscussionsSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting:
    $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
      $Context,
      <$SelectionSet>(
        selectionSet: $$Utilities.Exact<
          $SelectionSet,
          $$SelectionSets.Mutation.updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting<
            { scalars: $Context['scalars'] }
          >
        >,
      ) => Promise<
        & (null | {})
        & $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnterpriseTwoFactorAuthenticationRequiredSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnterpriseTwoFactorAuthenticationRequiredSetting<
          { scalars: $Context['scalars'] }
        >
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateEnvironment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateEnvironment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateIpAllowListEnabledSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListEnabledSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateIpAllowListEntry: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListEntry<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateIpAllowListForInstalledAppsEnabledSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIpAllowListForInstalledAppsEnabledSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateIssueComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIssueComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateLabel: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateLabel<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateNotificationRestrictionSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateNotificationRestrictionSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateOrganizationAllowPrivateRepositoryForkingSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateOrganizationAllowPrivateRepositoryForkingSetting<
          { scalars: $Context['scalars'] }
        >
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateOrganizationWebCommitSignoffSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateOrganizationWebCommitSignoffSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updatePatreonSponsorability: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePatreonSponsorability<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProject: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProject<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectCard: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectCard<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectColumn: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectColumn<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2Collaborators: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2Collaborators<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2DraftIssue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2DraftIssue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2Field: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2Field<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2ItemFieldValue: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2ItemFieldValue<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2ItemPosition: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2ItemPosition<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateProjectV2StatusUpdate: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateProjectV2StatusUpdate<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updatePullRequest: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequest<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updatePullRequestBranch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestBranch<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updatePullRequestReview: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestReview<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updatePullRequestReviewComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updatePullRequestReviewComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateRef: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRef<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateRefs: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRefs<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateRepositoryRuleset: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRepositoryRuleset<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateRepositoryWebCommitSignoffSetting: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateRepositoryWebCommitSignoffSetting<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateSponsorshipPreferences: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateSponsorshipPreferences<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateSubscription: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateSubscription<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateTeamDiscussion: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamDiscussion<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateTeamDiscussionComment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamDiscussionComment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateTeamReviewAssignment: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamReviewAssignment<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateTeamsRepository: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTeamsRepository<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateTopics: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateTopics<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateUserList: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateUserList<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  updateUserListsForItem: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateUserListsForItem<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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
  verifyVerifiableDomain: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.verifyVerifiableDomain<{ scalars: $Context['scalars'] }>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
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

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root methods.
 *
 * All methods return Promises. Use `.query.$batch(...)` to select multiple fields at once.
 *
 * The query root of GitHub's GraphQL interface.
 */
export interface QueryMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Query fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */
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
  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | `__typename`} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Query"`.
   */
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
   *
   * ```graphql
   * codeOfConduct(key: String!): CodeOfConduct
   *
   * type CodeOfConduct implements Node {
   *   body: String
   *   id: ID!
   *   key: String!
   *   name: String!
   *   resourcePath: URI
   *   url: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CodeOfConduct} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.codeOfConduct` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * codesOfConduct: [CodeOfConduct]
   *
   * type CodeOfConduct implements Node {
   *   body: String
   *   id: ID!
   *   key: String!
   *   name: String!
   *   resourcePath: URI
   *   url: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CodeOfConduct}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.codesOfConduct` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
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
   *
   * ```graphql
   * enterprise(invitationToken: String, slug: String!): Enterprise
   *
   * type Enterprise implements AnnouncementBannerI & Node {
   *   announcement: String @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementBanner: AnnouncementBanner
   *   announcementCreatedAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementExpiresAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementUserDismissible: Boolean @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   avatarUrl(size: Int): URI!
   *   billingEmail: String
   *   billingInfo: EnterpriseBillingInfo
   *   createdAt: DateTime!
   *   databaseId: Int
   *   description: String
   *   descriptionHTML: HTML!
   *   id: ID!
   *   location: String
   *   members(after: String, before: String, deployment: EnterpriseUserDeployment, first: Int, hasTwoFactorEnabled: Boolean = null, last: Int, orderBy: EnterpriseMemberOrder = {field: LOGIN, direction: ASC}, organizationLogins: [String!], query: String, role: EnterpriseUserAccountMembershipRole, twoFactorMethodSecurity: TwoFactorCredentialSecurityType = null): EnterpriseMemberConnection!
   *   name: String!
   *   organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = {field: LOGIN, direction: ASC}, query: String, viewerOrganizationRole: RoleInOrganization): OrganizationConnection!
   *   ownerInfo: EnterpriseOwnerInfo
   *   readme: String
   *   readmeHTML: HTML!
   *   resourcePath: URI!
   *   ruleset(databaseId: Int!): RepositoryRuleset
   *   rulesets(after: String, before: String, first: Int, last: Int): RepositoryRulesetConnection
   *   slug: String!
   *   url: URI!
   *   userNamespaceRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder = {field: NAME, direction: ASC}, query: String): UserNamespaceRepositoryConnection!
   *   viewerIsAdmin: Boolean!
   *   websiteUrl: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Enterprise} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.enterprise` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
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
   *
   * ```graphql
   * enterpriseAdministratorInvitation(enterpriseSlug: String!, role: EnterpriseAdministratorRole!, userLogin: String!): EnterpriseAdministratorInvitation
   *
   * type EnterpriseAdministratorInvitation implements Node {
   *   createdAt: DateTime!
   *   email: String
   *   enterprise: Enterprise!
   *   id: ID!
   *   invitee: User
   *   inviter: User
   *   role: EnterpriseAdministratorRole!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnterpriseAdministratorInvitation} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.enterpriseAdministratorInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 3 |
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
   *
   * ```graphql
   * enterpriseAdministratorInvitationByToken(invitationToken: String!): EnterpriseAdministratorInvitation
   *
   * type EnterpriseAdministratorInvitation implements Node {
   *   createdAt: DateTime!
   *   email: String
   *   enterprise: Enterprise!
   *   id: ID!
   *   invitee: User
   *   inviter: User
   *   role: EnterpriseAdministratorRole!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnterpriseAdministratorInvitation} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.enterpriseAdministratorInvitationByToken` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * enterpriseMemberInvitation(enterpriseSlug: String!, userLogin: String!): EnterpriseMemberInvitation
   *
   * type EnterpriseMemberInvitation implements Node {
   *   createdAt: DateTime!
   *   email: String
   *   enterprise: Enterprise!
   *   id: ID!
   *   invitee: User
   *   inviter: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnterpriseMemberInvitation} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.enterpriseMemberInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
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
   *
   * ```graphql
   * enterpriseMemberInvitationByToken(invitationToken: String!): EnterpriseMemberInvitation
   *
   * type EnterpriseMemberInvitation implements Node {
   *   createdAt: DateTime!
   *   email: String
   *   enterprise: Enterprise!
   *   id: ID!
   *   invitee: User
   *   inviter: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnterpriseMemberInvitation} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.enterpriseMemberInvitationByToken` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * id: ID!
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.id` |
   * | **Nullability** | Required |
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
   *
   * ```graphql
   * license(key: String!): License
   *
   * type License implements Node {
   *   body: String!
   *   conditions: [LicenseRule]!
   *   description: String
   *   featured: Boolean!
   *   hidden: Boolean!
   *   id: ID!
   *   implementation: String
   *   key: String!
   *   limitations: [LicenseRule]!
   *   name: String!
   *   nickname: String
   *   permissions: [LicenseRule]!
   *   pseudoLicense: Boolean!
   *   spdxId: String
   *   url: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.License} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.license` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * licenses: [License]!
   *
   * type License implements Node {
   *   body: String!
   *   conditions: [LicenseRule]!
   *   description: String
   *   featured: Boolean!
   *   hidden: Boolean!
   *   id: ID!
   *   implementation: String
   *   key: String!
   *   limitations: [LicenseRule]!
   *   name: String!
   *   nickname: String
   *   permissions: [LicenseRule]!
   *   pseudoLicense: Boolean!
   *   spdxId: String
   *   url: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.License}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.licenses` |
   * | **Nullability** | Required |
   * | **List** | Yes |
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
   *
   * ```graphql
   * marketplaceCategories(excludeEmpty: Boolean, excludeSubcategories: Boolean, includeCategories: [String!]): [MarketplaceCategory!]!
   *
   * type MarketplaceCategory implements Node {
   *   description: String
   *   howItWorks: String
   *   id: ID!
   *   name: String!
   *   primaryListingCount: Int!
   *   resourcePath: URI!
   *   secondaryListingCount: Int!
   *   slug: String!
   *   url: URI!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarketplaceCategory}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.marketplaceCategories` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 3 |
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
   *
   * ```graphql
   * marketplaceCategory(slug: String!, useTopicAliases: Boolean): MarketplaceCategory
   *
   * type MarketplaceCategory implements Node {
   *   description: String
   *   howItWorks: String
   *   id: ID!
   *   name: String!
   *   primaryListingCount: Int!
   *   resourcePath: URI!
   *   secondaryListingCount: Int!
   *   slug: String!
   *   url: URI!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarketplaceCategory} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.marketplaceCategory` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
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
   *
   * ```graphql
   * marketplaceListing(slug: String!): MarketplaceListing
   *
   * type MarketplaceListing implements Node {
   *   app: App
   *   companyUrl: URI
   *   configurationResourcePath: URI!
   *   configurationUrl: URI!
   *   documentationUrl: URI
   *   extendedDescription: String
   *   extendedDescriptionHTML: HTML!
   *   fullDescription: String!
   *   fullDescriptionHTML: HTML!
   *   hasPublishedFreeTrialPlans: Boolean!
   *   hasTermsOfService: Boolean!
   *   hasVerifiedOwner: Boolean!
   *   howItWorks: String
   *   howItWorksHTML: HTML!
   *   id: ID!
   *   installationUrl: URI
   *   installedForViewer: Boolean!
   *   isArchived: Boolean!
   *   isDraft: Boolean!
   *   isPaid: Boolean!
   *   isPublic: Boolean!
   *   isRejected: Boolean!
   *   isUnverified: Boolean!
   *   isUnverifiedPending: Boolean!
   *   isVerificationPendingFromDraft: Boolean!
   *   isVerificationPendingFromUnverified: Boolean!
   *   isVerified: Boolean!
   *   logoBackgroundColor: String!
   *   logoUrl(size: Int = 400): URI
   *   name: String!
   *   normalizedShortDescription: String!
   *   pricingUrl: URI
   *   primaryCategory: MarketplaceCategory!
   *   privacyPolicyUrl: URI!
   *   resourcePath: URI!
   *   screenshotUrls: [String]!
   *   secondaryCategory: MarketplaceCategory
   *   shortDescription: String!
   *   slug: String!
   *   statusUrl: URI
   *   supportEmail: String
   *   supportUrl: URI!
   *   termsOfServiceUrl: URI
   *   url: URI!
   *   viewerCanAddPlans: Boolean!
   *   viewerCanApprove: Boolean!
   *   viewerCanDelist: Boolean!
   *   viewerCanEdit: Boolean!
   *   viewerCanEditCategories: Boolean!
   *   viewerCanEditPlans: Boolean!
   *   viewerCanRedraft: Boolean!
   *   viewerCanReject: Boolean!
   *   viewerCanRequestApproval: Boolean!
   *   viewerHasPurchased: Boolean!
   *   viewerHasPurchasedForAllOrganizations: Boolean!
   *   viewerIsListingAdmin: Boolean!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarketplaceListing} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.marketplaceListing` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * marketplaceListings(adminId: ID, after: String, allStates: Boolean, before: String, categorySlug: String, first: Int, last: Int, organizationId: ID, primaryCategoryOnly: Boolean = false, slugs: [String], useTopicAliases: Boolean, viewerCanAdmin: Boolean, withFreeTrialsOnly: Boolean = false): MarketplaceListingConnection!
   *
   * type MarketplaceListingConnection {
   *   edges: [MarketplaceListingEdge]
   *   nodes: [MarketplaceListing]
   *   pageInfo: PageInfo!
   *   totalCount: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarketplaceListingConnection}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.marketplaceListings` |
   * | **Nullability** | Required |
   * | **Arguments** | 13 |
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
   *
   * ```graphql
   * meta: GitHubMetadata!
   *
   * type GitHubMetadata {
   *   gitHubServicesSha: GitObjectID!
   *   gitIpAddresses: [String!]
   *   githubEnterpriseImporterIpAddresses: [String!]
   *   hookIpAddresses: [String!]
   *   importerIpAddresses: [String!]
   *   isPasswordAuthenticationVerifiable: Boolean!
   *   pagesIpAddresses: [String!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.GitHubMetadata}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.meta` |
   * | **Nullability** | Required |
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
   *
   * ```graphql
   * node(id: ID!): Node
   *
   * interface Node {
   *   id: ID!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Node} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.node` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * nodes(ids: [ID!]!): [Node]!
   *
   * interface Node {
   *   id: ID!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Node}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.nodes` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * organization(login: String!): Organization
   *
   * type Organization implements Actor & AnnouncementBannerI & MemberStatusable & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   *   announcement: String @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementBanner: AnnouncementBanner
   *   announcementCreatedAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementExpiresAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   announcementUserDismissible: Boolean @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   *   anyPinnableItems(type: PinnableItemType): Boolean!
   *   archivedAt: DateTime
   *   auditLog(after: String, before: String, first: Int, last: Int, orderBy: AuditLogOrder = {field: CREATED_AT, direction: DESC}, query: String): OrganizationAuditEntryConnection!
   *   avatarUrl(size: Int): URI!
   *   createdAt: DateTime!
   *   databaseId: Int
   *   description: String
   *   descriptionHTML: String
   *   domains(after: String, before: String, first: Int, isApproved: Boolean = null, isVerified: Boolean = null, last: Int, orderBy: VerifiableDomainOrder = {field: DOMAIN, direction: ASC}): VerifiableDomainConnection
   *   email: String
   *   enterpriseOwners(after: String, before: String, first: Int, last: Int, orderBy: OrgEnterpriseOwnerOrder = {field: LOGIN, direction: ASC}, organizationRole: RoleInOrganization, query: String): OrganizationEnterpriseOwnerConnection!
   *   estimatedNextSponsorsPayoutInCents: Int!
   *   hasSponsorsListing: Boolean!
   *   id: ID!
   *   interactionAbility: RepositoryInteractionAbility
   *   ipAllowListEnabledSetting: IpAllowListEnabledSettingValue!
   *   ipAllowListEntries(after: String, before: String, first: Int, last: Int, orderBy: IpAllowListEntryOrder = {field: ALLOW_LIST_VALUE, direction: ASC}): IpAllowListEntryConnection!
   *   ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue!
   *   isSponsoredBy(accountLogin: String!): Boolean!
   *   isSponsoringViewer: Boolean!
   *   isVerified: Boolean!
   *   itemShowcase: ProfileItemShowcase!
   *   lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   *   location: String
   *   login: String!
   *   mannequins(after: String, before: String, first: Int, last: Int, login: String, orderBy: MannequinOrder = {field: CREATED_AT, direction: ASC}): MannequinConnection!
   *   memberStatuses(after: String, before: String, first: Int, last: Int, orderBy: UserStatusOrder = {field: UPDATED_AT, direction: DESC}): UserStatusConnection!
   *   membersCanForkPrivateRepositories: Boolean!
   *   membersWithRole(after: String, before: String, first: Int, last: Int): OrganizationMemberConnection!
   *   monthlyEstimatedSponsorsIncomeInCents: Int!
   *   name: String
   *   newTeamResourcePath: URI!
   *   newTeamUrl: URI!
   *   notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue!
   *   organizationBillingEmail: String
   *   packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   *   pendingMembers(after: String, before: String, first: Int, last: Int): UserConnection!
   *   pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItemsRemaining: Int!
   *   project(number: Int!): Project
   *   projectV2(number: Int!): ProjectV2
   *   projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   *   projectsResourcePath: URI!
   *   projectsUrl: URI!
   *   projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   *   recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   *   repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   repository(followRenames: Boolean = true, name: String!): Repository
   *   repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   *   repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   *   repositoryMigrations(after: String, before: String, first: Int, last: Int, orderBy: RepositoryMigrationOrder = {field: CREATED_AT, direction: ASC}, repositoryName: String, state: MigrationState): RepositoryMigrationConnection!
   *   requiresTwoFactorAuthentication: Boolean
   *   resourcePath: URI!
   *   ruleset(databaseId: Int!, includeParents: Boolean = true): RepositoryRuleset
   *   rulesets(after: String, before: String, first: Int, includeParents: Boolean = true, last: Int, targets: [RepositoryRulesetTarget!] = null): RepositoryRulesetConnection
   *   samlIdentityProvider: OrganizationIdentityProvider
   *   sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   *   sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   *   sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   *   sponsorsListing: SponsorsListing
   *   sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   *   sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   *   sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   *   team(slug: String!): Team
   *   teams(after: String, before: String, first: Int, last: Int, ldapMapped: Boolean, notificationSetting: TeamNotificationSetting, orderBy: TeamOrder, privacy: TeamPrivacy, query: String, role: TeamRole, rootTeamsOnly: Boolean = false, userLogins: [String!]): TeamConnection!
   *   teamsResourcePath: URI!
   *   teamsUrl: URI!
   *   totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   *   twitterUsername: String
   *   updatedAt: DateTime!
   *   url: URI!
   *   viewerCanAdminister: Boolean!
   *   viewerCanChangePinnedItems: Boolean!
   *   viewerCanCreateProjects: Boolean!
   *   viewerCanCreateRepositories: Boolean!
   *   viewerCanCreateTeams: Boolean!
   *   viewerCanSponsor: Boolean!
   *   viewerIsAMember: Boolean!
   *   viewerIsFollowing: Boolean!
   *   viewerIsSponsoring: Boolean!
   *   webCommitSignoffRequired: Boolean!
   *   websiteUrl: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Organization} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.organization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * rateLimit(dryRun: Boolean = false): RateLimit
   *
   * type RateLimit {
   *   cost: Int!
   *   limit: Int!
   *   nodeCount: Int!
   *   remaining: Int!
   *   resetAt: DateTime!
   *   used: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RateLimit} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.rateLimit` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * relay: Query!
   *
   * type Query implements Node {
   *   codeOfConduct(key: String!): CodeOfConduct
   *   codesOfConduct: [CodeOfConduct]
   *   enterprise(invitationToken: String, slug: String!): Enterprise
   *   enterpriseAdministratorInvitation(enterpriseSlug: String!, role: EnterpriseAdministratorRole!, userLogin: String!): EnterpriseAdministratorInvitation
   *   enterpriseAdministratorInvitationByToken(invitationToken: String!): EnterpriseAdministratorInvitation
   *   enterpriseMemberInvitation(enterpriseSlug: String!, userLogin: String!): EnterpriseMemberInvitation
   *   enterpriseMemberInvitationByToken(invitationToken: String!): EnterpriseMemberInvitation
   *   id: ID!
   *   license(key: String!): License
   *   licenses: [License]!
   *   marketplaceCategories(excludeEmpty: Boolean, excludeSubcategories: Boolean, includeCategories: [String!]): [MarketplaceCategory!]!
   *   marketplaceCategory(slug: String!, useTopicAliases: Boolean): MarketplaceCategory
   *   marketplaceListing(slug: String!): MarketplaceListing
   *   marketplaceListings(adminId: ID, after: String, allStates: Boolean, before: String, categorySlug: String, first: Int, last: Int, organizationId: ID, primaryCategoryOnly: Boolean = false, slugs: [String], useTopicAliases: Boolean, viewerCanAdmin: Boolean, withFreeTrialsOnly: Boolean = false): MarketplaceListingConnection!
   *   meta: GitHubMetadata!
   *   node(id: ID!): Node
   *   nodes(ids: [ID!]!): [Node]!
   *   organization(login: String!): Organization
   *   rateLimit(dryRun: Boolean = false): RateLimit
   *   relay: Query!
   *   repository(followRenames: Boolean = true, name: String!, owner: String!): Repository
   *   repositoryOwner(login: String!): RepositoryOwner
   *   resource(url: URI!): UniformResourceLocatable
   *   search(after: String, before: String, first: Int, last: Int, query: String!, type: SearchType!): SearchResultItemConnection!
   *   securityAdvisories(after: String, before: String, classifications: [SecurityAdvisoryClassification!], epssPercentage: Float, epssPercentile: Float, first: Int, identifier: SecurityAdvisoryIdentifierFilter, last: Int, orderBy: SecurityAdvisoryOrder = {field: UPDATED_AT, direction: DESC}, publishedSince: DateTime, updatedSince: DateTime): SecurityAdvisoryConnection!
   *   securityAdvisory(ghsaId: String!): SecurityAdvisory
   *   securityVulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   *   sponsorables(after: String, before: String, dependencyEcosystem: SecurityAdvisoryEcosystem, ecosystem: DependencyGraphEcosystem, first: Int, last: Int, onlyDependencies: Boolean = false, orderBy: SponsorableOrder = {field: LOGIN, direction: ASC}, orgLoginForDependencies: String): SponsorableItemConnection!
   *   topic(name: String!): Topic
   *   user(login: String!): User
   *   viewer: User!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Query}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.relay` |
   * | **Nullability** | Required |
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
   *
   * ```graphql
   * repository(followRenames: Boolean = true, name: String!, owner: String!): Repository
   *
   * type Repository implements Node & PackageOwner & ProjectOwner & ProjectV2Recent & RepositoryInfo & Starrable & Subscribable & UniformResourceLocatable {
   *   allowUpdateBranch: Boolean!
   *   archivedAt: DateTime
   *   assignableUsers(after: String, before: String, first: Int, last: Int, query: String): UserConnection!
   *   autoMergeAllowed: Boolean!
   *   branchProtectionRules(after: String, before: String, first: Int, last: Int): BranchProtectionRuleConnection!
   *   codeOfConduct: CodeOfConduct
   *   codeowners(refName: String): RepositoryCodeowners
   *   collaborators(affiliation: CollaboratorAffiliation, after: String, before: String, first: Int, last: Int, login: String, query: String): RepositoryCollaboratorConnection
   *   commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   *   contactLinks: [RepositoryContactLink!]
   *   contributingGuidelines: ContributingGuidelines
   *   createdAt: DateTime!
   *   databaseId: Int
   *   defaultBranchRef: Ref
   *   deleteBranchOnMerge: Boolean!
   *   dependencyGraphManifests(after: String, before: String, dependenciesAfter: String, dependenciesFirst: Int, first: Int, last: Int, withDependencies: Boolean): DependencyGraphManifestConnection
   *   deployKeys(after: String, before: String, first: Int, last: Int): DeployKeyConnection!
   *   deployments(after: String, before: String, environments: [String!], first: Int, last: Int, orderBy: DeploymentOrder = {field: CREATED_AT, direction: ASC}): DeploymentConnection!
   *   description: String
   *   descriptionHTML: HTML!
   *   discussion(number: Int!): Discussion
   *   discussionCategories(after: String, before: String, filterByAssignable: Boolean = false, first: Int, last: Int): DiscussionCategoryConnection!
   *   discussionCategory(slug: String!): DiscussionCategory
   *   discussions(after: String, answered: Boolean = null, before: String, categoryId: ID = null, first: Int, last: Int, orderBy: DiscussionOrder = {field: UPDATED_AT, direction: DESC}, states: [DiscussionState!] = []): DiscussionConnection!
   *   diskUsage: Int
   *   environment(name: String!): Environment
   *   environments(after: String, before: String, first: Int, last: Int, names: [String!] = [], orderBy: Environments = {field: NAME, direction: ASC}, pinnedEnvironmentFilter: EnvironmentPinnedFilterField = ALL): EnvironmentConnection!
   *   forkCount: Int!
   *   forkingAllowed: Boolean!
   *   forks(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   fundingLinks: [FundingLink!]!
   *   hasDiscussionsEnabled: Boolean!
   *   hasIssuesEnabled: Boolean!
   *   hasProjectsEnabled: Boolean!
   *   hasSponsorshipsEnabled: Boolean!
   *   hasVulnerabilityAlertsEnabled: Boolean!
   *   hasWikiEnabled: Boolean!
   *   homepageUrl: URI
   *   id: ID!
   *   interactionAbility: RepositoryInteractionAbility
   *   isArchived: Boolean!
   *   isBlankIssuesEnabled: Boolean!
   *   isDisabled: Boolean!
   *   isEmpty: Boolean!
   *   isFork: Boolean!
   *   isInOrganization: Boolean!
   *   isLocked: Boolean!
   *   isMirror: Boolean!
   *   isPrivate: Boolean!
   *   isSecurityPolicyEnabled: Boolean
   *   isTemplate: Boolean!
   *   isUserConfigurationRepository: Boolean!
   *   issue(number: Int!): Issue
   *   issueOrPullRequest(number: Int!): IssueOrPullRequest
   *   issueTemplates: [IssueTemplate!]
   *   issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   *   label(name: String!): Label
   *   labels(after: String, before: String, first: Int, last: Int, orderBy: LabelOrder = {field: CREATED_AT, direction: ASC}, query: String): LabelConnection
   *   languages(after: String, before: String, first: Int, last: Int, orderBy: LanguageOrder): LanguageConnection
   *   latestRelease: Release
   *   licenseInfo: License
   *   lockReason: RepositoryLockReason
   *   mentionableUsers(after: String, before: String, first: Int, last: Int, query: String): UserConnection!
   *   mergeCommitAllowed: Boolean!
   *   mergeCommitMessage: MergeCommitMessage!
   *   mergeCommitTitle: MergeCommitTitle!
   *   mergeQueue(branch: String): MergeQueue
   *   milestone(number: Int!): Milestone
   *   milestones(after: String, before: String, first: Int, last: Int, orderBy: MilestoneOrder, query: String, states: [MilestoneState!]): MilestoneConnection
   *   mirrorUrl: URI
   *   name: String!
   *   nameWithOwner: String!
   *   object(expression: String, oid: GitObjectID): GitObject
   *   openGraphImageUrl: URI!
   *   owner: RepositoryOwner!
   *   packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   *   parent: Repository
   *   pinnedDiscussions(after: String, before: String, first: Int, last: Int): PinnedDiscussionConnection!
   *   pinnedEnvironments(after: String, before: String, first: Int, last: Int, orderBy: PinnedEnvironmentOrder = {field: POSITION, direction: ASC}): PinnedEnvironmentConnection
   *   pinnedIssues(after: String, before: String, first: Int, last: Int): PinnedIssueConnection
   *   planFeatures: RepositoryPlanFeatures!
   *   primaryLanguage: Language
   *   project(number: Int!): Project
   *   projectV2(number: Int!): ProjectV2
   *   projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   *   projectsResourcePath: URI!
   *   projectsUrl: URI!
   *   projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   *   pullRequest(number: Int!): PullRequest
   *   pullRequestTemplates: [PullRequestTemplate!]
   *   pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   *   pushedAt: DateTime
   *   rebaseMergeAllowed: Boolean!
   *   recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   *   ref(qualifiedName: String!): Ref
   *   refs(after: String, before: String, direction: OrderDirection, first: Int, last: Int, orderBy: RefOrder, query: String, refPrefix: String!): RefConnection
   *   release(tagName: String!): Release
   *   releases(after: String, before: String, first: Int, last: Int, orderBy: ReleaseOrder): ReleaseConnection!
   *   repositoryTopics(after: String, before: String, first: Int, last: Int): RepositoryTopicConnection!
   *   resourcePath: URI!
   *   ruleset(databaseId: Int!, includeParents: Boolean = true): RepositoryRuleset
   *   rulesets(after: String, before: String, first: Int, includeParents: Boolean = true, last: Int, targets: [RepositoryRulesetTarget!] = null): RepositoryRulesetConnection
   *   securityPolicyUrl: URI
   *   shortDescriptionHTML(limit: Int = 200): HTML!
   *   squashMergeAllowed: Boolean!
   *   squashMergeCommitMessage: SquashMergeCommitMessage!
   *   squashMergeCommitTitle: SquashMergeCommitTitle!
   *   squashPrTitleUsedAsDefault: Boolean! @deprecated(reason: "`squashPrTitleUsedAsDefault` will be removed. Use `Repository.squashMergeCommitTitle` instead. Removal on 2023-04-01 UTC.")
   *   sshUrl: GitSSHRemote!
   *   stargazerCount: Int!
   *   stargazers(after: String, before: String, first: Int, last: Int, orderBy: StarOrder): StargazerConnection!
   *   submodules(after: String, before: String, first: Int, last: Int): SubmoduleConnection!
   *   tempCloneToken: String
   *   templateRepository: Repository
   *   updatedAt: DateTime!
   *   url: URI!
   *   usesCustomOpenGraphImage: Boolean!
   *   viewerCanAdminister: Boolean!
   *   viewerCanCreateProjects: Boolean!
   *   viewerCanSubscribe: Boolean!
   *   viewerCanUpdateTopics: Boolean!
   *   viewerDefaultCommitEmail: String
   *   viewerDefaultMergeMethod: PullRequestMergeMethod!
   *   viewerHasStarred: Boolean!
   *   viewerPermission: RepositoryPermission
   *   viewerPossibleCommitEmails: [String!]
   *   viewerSubscription: SubscriptionState
   *   visibility: RepositoryVisibility!
   *   vulnerabilityAlert(number: Int!): RepositoryVulnerabilityAlert
   *   vulnerabilityAlerts(after: String, before: String, dependencyScopes: [RepositoryVulnerabilityAlertDependencyScope!], first: Int, last: Int, states: [RepositoryVulnerabilityAlertState!]): RepositoryVulnerabilityAlertConnection
   *   watchers(after: String, before: String, first: Int, last: Int): UserConnection!
   *   webCommitSignoffRequired: Boolean!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Repository} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.repository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 3 |
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
   *
   * ```graphql
   * repositoryOwner(login: String!): RepositoryOwner
   *
   * interface RepositoryOwner {
   *   avatarUrl(size: Int): URI!
   *   id: ID!
   *   login: String!
   *   repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   repository(followRenames: Boolean = true, name: String!): Repository
   *   resourcePath: URI!
   *   url: URI!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RepositoryOwner} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.repositoryOwner` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * resource(url: URI!): UniformResourceLocatable
   *
   * interface UniformResourceLocatable {
   *   resourcePath: URI!
   *   url: URI!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UniformResourceLocatable} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.resource` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * search(after: String, before: String, first: Int, last: Int, query: String!, type: SearchType!): SearchResultItemConnection!
   *
   * type SearchResultItemConnection {
   *   codeCount: Int!
   *   discussionCount: Int!
   *   edges: [SearchResultItemEdge]
   *   issueCount: Int!
   *   nodes: [SearchResultItem]
   *   pageInfo: PageInfo!
   *   repositoryCount: Int!
   *   userCount: Int!
   *   wikiCount: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SearchResultItemConnection}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.search` |
   * | **Nullability** | Required |
   * | **Arguments** | 6 |
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
   *
   * ```graphql
   * securityAdvisories(after: String, before: String, classifications: [SecurityAdvisoryClassification!], epssPercentage: Float, epssPercentile: Float, first: Int, identifier: SecurityAdvisoryIdentifierFilter, last: Int, orderBy: SecurityAdvisoryOrder = {field: UPDATED_AT, direction: DESC}, publishedSince: DateTime, updatedSince: DateTime): SecurityAdvisoryConnection!
   *
   * type SecurityAdvisoryConnection {
   *   edges: [SecurityAdvisoryEdge]
   *   nodes: [SecurityAdvisory]
   *   pageInfo: PageInfo!
   *   totalCount: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SecurityAdvisoryConnection}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.securityAdvisories` |
   * | **Nullability** | Required |
   * | **Arguments** | 11 |
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
   *
   * ```graphql
   * securityAdvisory(ghsaId: String!): SecurityAdvisory
   *
   * type SecurityAdvisory implements Node {
   *   classification: SecurityAdvisoryClassification!
   *   cvss: CVSS! @deprecated(reason: "`cvss` will be removed. New `cvss_severities` field will now contain both `cvss_v3` and `cvss_v4` properties. Removal on 2025-10-01 UTC.")
   *   cvssSeverities: CvssSeverities!
   *   cwes(after: String, before: String, first: Int, last: Int): CWEConnection!
   *   databaseId: Int
   *   description: String!
   *   epss: EPSS
   *   ghsaId: String!
   *   id: ID!
   *   identifiers: [SecurityAdvisoryIdentifier!]!
   *   notificationsPermalink: URI
   *   origin: String!
   *   permalink: URI
   *   publishedAt: DateTime!
   *   references: [SecurityAdvisoryReference!]!
   *   severity: SecurityAdvisorySeverity!
   *   summary: String!
   *   updatedAt: DateTime!
   *   vulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   *   withdrawnAt: DateTime
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SecurityAdvisory} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.securityAdvisory` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * securityVulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   *
   * type SecurityVulnerabilityConnection {
   *   edges: [SecurityVulnerabilityEdge]
   *   nodes: [SecurityVulnerability]
   *   pageInfo: PageInfo!
   *   totalCount: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SecurityVulnerabilityConnection}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.securityVulnerabilities` |
   * | **Nullability** | Required |
   * | **Arguments** | 9 |
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
   *
   * ```graphql
   * sponsorables(after: String, before: String, dependencyEcosystem: SecurityAdvisoryEcosystem, ecosystem: DependencyGraphEcosystem, first: Int, last: Int, onlyDependencies: Boolean = false, orderBy: SponsorableOrder = {field: LOGIN, direction: ASC}, orgLoginForDependencies: String): SponsorableItemConnection!
   *
   * type SponsorableItemConnection {
   *   edges: [SponsorableItemEdge]
   *   nodes: [SponsorableItem]
   *   pageInfo: PageInfo!
   *   totalCount: Int!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SponsorableItemConnection}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.sponsorables` |
   * | **Nullability** | Required |
   * | **Arguments** | 9 |
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
   *
   * ```graphql
   * topic(name: String!): Topic
   *
   * type Topic implements Node & Starrable {
   *   id: ID!
   *   name: String!
   *   relatedTopics(first: Int = 3): [Topic!]!
   *   repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, sponsorableOnly: Boolean = false, visibility: RepositoryVisibility): RepositoryConnection!
   *   stargazerCount: Int!
   *   stargazers(after: String, before: String, first: Int, last: Int, orderBy: StarOrder): StargazerConnection!
   *   viewerHasStarred: Boolean!
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Topic} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.topic` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * user(login: String!): User
   *
   * type User implements Actor & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   *   anyPinnableItems(type: PinnableItemType): Boolean!
   *   avatarUrl(size: Int): URI!
   *   bio: String
   *   bioHTML: HTML!
   *   canReceiveOrganizationEmailsWhenNotificationsRestricted(login: String!): Boolean!
   *   commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   *   company: String
   *   companyHTML: HTML!
   *   contributionsCollection(from: DateTime, organizationID: ID, to: DateTime): ContributionsCollection!
   *   copilotEndpoints: CopilotEndpoints
   *   createdAt: DateTime!
   *   databaseId: Int
   *   email: String!
   *   enterprises(after: String, before: String, first: Int, last: Int, membershipType: EnterpriseMembershipType = ALL, orderBy: EnterpriseOrder = {field: NAME, direction: ASC}): EnterpriseConnection
   *   estimatedNextSponsorsPayoutInCents: Int!
   *   followers(after: String, before: String, first: Int, last: Int): FollowerConnection!
   *   following(after: String, before: String, first: Int, last: Int): FollowingConnection!
   *   gist(name: String!): Gist
   *   gistComments(after: String, before: String, first: Int, last: Int): GistCommentConnection!
   *   gists(after: String, before: String, first: Int, last: Int, orderBy: GistOrder, privacy: GistPrivacy): GistConnection!
   *   hasSponsorsListing: Boolean!
   *   hovercard(primarySubjectId: ID): Hovercard!
   *   id: ID!
   *   interactionAbility: RepositoryInteractionAbility
   *   isBountyHunter: Boolean!
   *   isCampusExpert: Boolean!
   *   isDeveloperProgramMember: Boolean!
   *   isEmployee: Boolean!
   *   isFollowingViewer: Boolean!
   *   isGitHubStar: Boolean!
   *   isHireable: Boolean!
   *   isSiteAdmin: Boolean!
   *   isSponsoredBy(accountLogin: String!): Boolean!
   *   isSponsoringViewer: Boolean!
   *   isViewer: Boolean!
   *   issueComments(after: String, before: String, first: Int, last: Int, orderBy: IssueCommentOrder): IssueCommentConnection!
   *   issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   *   itemShowcase: ProfileItemShowcase!
   *   lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   *   lists(after: String, before: String, first: Int, last: Int): UserListConnection!
   *   location: String
   *   login: String!
   *   monthlyEstimatedSponsorsIncomeInCents: Int!
   *   name: String
   *   organization(login: String!): Organization
   *   organizationVerifiedDomainEmails(login: String!): [String!]!
   *   organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = null): OrganizationConnection!
   *   packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   *   pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItemsRemaining: Int!
   *   project(number: Int!): Project
   *   projectV2(number: Int!): ProjectV2
   *   projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   *   projectsResourcePath: URI!
   *   projectsUrl: URI!
   *   projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   *   pronouns: String
   *   publicKeys(after: String, before: String, first: Int, last: Int): PublicKeyConnection!
   *   pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   *   recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   *   repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   repositoriesContributedTo(after: String, before: String, contributionTypes: [RepositoryContributionType], first: Int, hasIssues: Boolean, includeUserRepositories: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, privacy: RepositoryPrivacy): RepositoryConnection!
   *   repository(followRenames: Boolean = true, name: String!): Repository
   *   repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   *   repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   *   resourcePath: URI!
   *   savedReplies(after: String, before: String, first: Int, last: Int, orderBy: SavedReplyOrder = {field: UPDATED_AT, direction: DESC}): SavedReplyConnection
   *   socialAccounts(after: String, before: String, first: Int, last: Int): SocialAccountConnection!
   *   sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   *   sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   *   sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   *   sponsorsListing: SponsorsListing
   *   sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   *   sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   *   sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   *   starredRepositories(after: String, before: String, first: Int, last: Int, orderBy: StarOrder, ownedByViewer: Boolean): StarredRepositoryConnection!
   *   status: UserStatus
   *   suggestedListNames: [UserListSuggestion!]!
   *   topRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder!, since: DateTime): RepositoryConnection!
   *   totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   *   twitterUsername: String
   *   updatedAt: DateTime!
   *   url: URI!
   *   userViewType: UserViewType!
   *   viewerCanChangePinnedItems: Boolean!
   *   viewerCanCreateProjects: Boolean!
   *   viewerCanFollow: Boolean!
   *   viewerCanSponsor: Boolean!
   *   viewerIsFollowing: Boolean!
   *   viewerIsSponsoring: Boolean!
   *   watching(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   websiteUrl: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.user` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * viewer: User!
   *
   * type User implements Actor & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   *   anyPinnableItems(type: PinnableItemType): Boolean!
   *   avatarUrl(size: Int): URI!
   *   bio: String
   *   bioHTML: HTML!
   *   canReceiveOrganizationEmailsWhenNotificationsRestricted(login: String!): Boolean!
   *   commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   *   company: String
   *   companyHTML: HTML!
   *   contributionsCollection(from: DateTime, organizationID: ID, to: DateTime): ContributionsCollection!
   *   copilotEndpoints: CopilotEndpoints
   *   createdAt: DateTime!
   *   databaseId: Int
   *   email: String!
   *   enterprises(after: String, before: String, first: Int, last: Int, membershipType: EnterpriseMembershipType = ALL, orderBy: EnterpriseOrder = {field: NAME, direction: ASC}): EnterpriseConnection
   *   estimatedNextSponsorsPayoutInCents: Int!
   *   followers(after: String, before: String, first: Int, last: Int): FollowerConnection!
   *   following(after: String, before: String, first: Int, last: Int): FollowingConnection!
   *   gist(name: String!): Gist
   *   gistComments(after: String, before: String, first: Int, last: Int): GistCommentConnection!
   *   gists(after: String, before: String, first: Int, last: Int, orderBy: GistOrder, privacy: GistPrivacy): GistConnection!
   *   hasSponsorsListing: Boolean!
   *   hovercard(primarySubjectId: ID): Hovercard!
   *   id: ID!
   *   interactionAbility: RepositoryInteractionAbility
   *   isBountyHunter: Boolean!
   *   isCampusExpert: Boolean!
   *   isDeveloperProgramMember: Boolean!
   *   isEmployee: Boolean!
   *   isFollowingViewer: Boolean!
   *   isGitHubStar: Boolean!
   *   isHireable: Boolean!
   *   isSiteAdmin: Boolean!
   *   isSponsoredBy(accountLogin: String!): Boolean!
   *   isSponsoringViewer: Boolean!
   *   isViewer: Boolean!
   *   issueComments(after: String, before: String, first: Int, last: Int, orderBy: IssueCommentOrder): IssueCommentConnection!
   *   issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   *   itemShowcase: ProfileItemShowcase!
   *   lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   *   lists(after: String, before: String, first: Int, last: Int): UserListConnection!
   *   location: String
   *   login: String!
   *   monthlyEstimatedSponsorsIncomeInCents: Int!
   *   name: String
   *   organization(login: String!): Organization
   *   organizationVerifiedDomainEmails(login: String!): [String!]!
   *   organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = null): OrganizationConnection!
   *   packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   *   pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   *   pinnedItemsRemaining: Int!
   *   project(number: Int!): Project
   *   projectV2(number: Int!): ProjectV2
   *   projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   *   projectsResourcePath: URI!
   *   projectsUrl: URI!
   *   projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   *   pronouns: String
   *   publicKeys(after: String, before: String, first: Int, last: Int): PublicKeyConnection!
   *   pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   *   recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   *   repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   repositoriesContributedTo(after: String, before: String, contributionTypes: [RepositoryContributionType], first: Int, hasIssues: Boolean, includeUserRepositories: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, privacy: RepositoryPrivacy): RepositoryConnection!
   *   repository(followRenames: Boolean = true, name: String!): Repository
   *   repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   *   repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   *   resourcePath: URI!
   *   savedReplies(after: String, before: String, first: Int, last: Int, orderBy: SavedReplyOrder = {field: UPDATED_AT, direction: DESC}): SavedReplyConnection
   *   socialAccounts(after: String, before: String, first: Int, last: Int): SocialAccountConnection!
   *   sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   *   sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   *   sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   *   sponsorsListing: SponsorsListing
   *   sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   *   sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   *   sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   *   sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   *   starredRepositories(after: String, before: String, first: Int, last: Int, orderBy: StarOrder, ownedByViewer: Boolean): StarredRepositoryConnection!
   *   status: UserStatus
   *   suggestedListNames: [UserListSuggestion!]!
   *   topRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder!, since: DateTime): RepositoryConnection!
   *   totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   *   twitterUsername: String
   *   updatedAt: DateTime!
   *   url: URI!
   *   userViewType: UserViewType!
   *   viewerCanChangePinnedItems: Boolean!
   *   viewerCanCreateProjects: Boolean!
   *   viewerCanFollow: Boolean!
   *   viewerCanSponsor: Boolean!
   *   viewerIsFollowing: Boolean!
   *   viewerIsSponsoring: Boolean!
   *   watching(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   *   websiteUrl: URI
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.User}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.viewer` |
   * | **Nullability** | Required |
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

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root methods.
 *
 * All methods return Promises. Use `.mutation.$batch(...)` to select multiple fields at once.
 *
 * The root query for implementing GraphQL mutations.
 */
export interface MutationMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Mutation fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */
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
  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | `__typename`} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Mutation"`.
   */
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
   *
   * ```graphql
   * abortQueuedMigrations(input: AbortQueuedMigrationsInput!): AbortQueuedMigrationsPayload
   *
   * type AbortQueuedMigrationsPayload {
   *   clientMutationId: String
   *   success: Boolean
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AbortQueuedMigrationsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.abortQueuedMigrations` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * abortRepositoryMigration(input: AbortRepositoryMigrationInput!): AbortRepositoryMigrationPayload
   *
   * type AbortRepositoryMigrationPayload {
   *   clientMutationId: String
   *   success: Boolean
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AbortRepositoryMigrationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.abortRepositoryMigration` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * acceptEnterpriseAdministratorInvitation(input: AcceptEnterpriseAdministratorInvitationInput!): AcceptEnterpriseAdministratorInvitationPayload
   *
   * type AcceptEnterpriseAdministratorInvitationPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseAdministratorInvitation
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AcceptEnterpriseAdministratorInvitationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.acceptEnterpriseAdministratorInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * acceptEnterpriseMemberInvitation(input: AcceptEnterpriseMemberInvitationInput!): AcceptEnterpriseMemberInvitationPayload
   *
   * type AcceptEnterpriseMemberInvitationPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseMemberInvitation
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AcceptEnterpriseMemberInvitationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.acceptEnterpriseMemberInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * acceptTopicSuggestion(input: AcceptTopicSuggestionInput!): AcceptTopicSuggestionPayload
   *
   * type AcceptTopicSuggestionPayload {
   *   clientMutationId: String
   *   topic: Topic @deprecated(reason: "Suggested topics are no longer supported Removal on 2024-04-01 UTC.")
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AcceptTopicSuggestionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.acceptTopicSuggestion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * accessUserNamespaceRepository(input: AccessUserNamespaceRepositoryInput!): AccessUserNamespaceRepositoryPayload
   *
   * type AccessUserNamespaceRepositoryPayload {
   *   clientMutationId: String
   *   expiresAt: DateTime
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AccessUserNamespaceRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.accessUserNamespaceRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addAssigneesToAssignable(input: AddAssigneesToAssignableInput!): AddAssigneesToAssignablePayload
   *
   * type AddAssigneesToAssignablePayload {
   *   assignable: Assignable
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddAssigneesToAssignablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addAssigneesToAssignable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addComment(input: AddCommentInput!): AddCommentPayload
   *
   * type AddCommentPayload {
   *   clientMutationId: String
   *   commentEdge: IssueCommentEdge
   *   subject: Node
   *   timelineEdge: IssueTimelineItemEdge
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addDiscussionComment(input: AddDiscussionCommentInput!): AddDiscussionCommentPayload
   *
   * type AddDiscussionCommentPayload {
   *   clientMutationId: String
   *   comment: DiscussionComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addDiscussionPollVote(input: AddDiscussionPollVoteInput!): AddDiscussionPollVotePayload
   *
   * type AddDiscussionPollVotePayload {
   *   clientMutationId: String
   *   pollOption: DiscussionPollOption
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddDiscussionPollVotePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addDiscussionPollVote` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addEnterpriseOrganizationMember(input: AddEnterpriseOrganizationMemberInput!): AddEnterpriseOrganizationMemberPayload
   *
   * type AddEnterpriseOrganizationMemberPayload {
   *   clientMutationId: String
   *   users: [User!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddEnterpriseOrganizationMemberPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addEnterpriseOrganizationMember` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addEnterpriseSupportEntitlement(input: AddEnterpriseSupportEntitlementInput!): AddEnterpriseSupportEntitlementPayload
   *
   * type AddEnterpriseSupportEntitlementPayload {
   *   clientMutationId: String
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddEnterpriseSupportEntitlementPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addEnterpriseSupportEntitlement` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addLabelsToLabelable(input: AddLabelsToLabelableInput!): AddLabelsToLabelablePayload
   *
   * type AddLabelsToLabelablePayload {
   *   clientMutationId: String
   *   labelable: Labelable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddLabelsToLabelablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addLabelsToLabelable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addProjectCard(input: AddProjectCardInput!): AddProjectCardPayload
   *
   * type AddProjectCardPayload {
   *   cardEdge: ProjectCardEdge
   *   clientMutationId: String
   *   projectColumn: ProjectColumn
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddProjectCardPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addProjectCard` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addProjectColumn(input: AddProjectColumnInput!): AddProjectColumnPayload
   *
   * type AddProjectColumnPayload {
   *   clientMutationId: String
   *   columnEdge: ProjectColumnEdge
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddProjectColumnPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addProjectColumn` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addProjectV2DraftIssue(input: AddProjectV2DraftIssueInput!): AddProjectV2DraftIssuePayload
   *
   * type AddProjectV2DraftIssuePayload {
   *   clientMutationId: String
   *   projectItem: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddProjectV2DraftIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addProjectV2DraftIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addProjectV2ItemById(input: AddProjectV2ItemByIdInput!): AddProjectV2ItemByIdPayload
   *
   * type AddProjectV2ItemByIdPayload {
   *   clientMutationId: String
   *   item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddProjectV2ItemByIdPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addProjectV2ItemById` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addPullRequestReview(input: AddPullRequestReviewInput!): AddPullRequestReviewPayload
   *
   * type AddPullRequestReviewPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   *   reviewEdge: PullRequestReviewEdge
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddPullRequestReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPullRequestReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addPullRequestReviewComment(input: AddPullRequestReviewCommentInput!): AddPullRequestReviewCommentPayload
   *
   * type AddPullRequestReviewCommentPayload {
   *   clientMutationId: String
   *   comment: PullRequestReviewComment
   *   commentEdge: PullRequestReviewCommentEdge
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddPullRequestReviewCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPullRequestReviewComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addPullRequestReviewThread(input: AddPullRequestReviewThreadInput!): AddPullRequestReviewThreadPayload
   *
   * type AddPullRequestReviewThreadPayload {
   *   clientMutationId: String
   *   thread: PullRequestReviewThread
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddPullRequestReviewThreadPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPullRequestReviewThread` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addPullRequestReviewThreadReply(input: AddPullRequestReviewThreadReplyInput!): AddPullRequestReviewThreadReplyPayload
   *
   * type AddPullRequestReviewThreadReplyPayload {
   *   clientMutationId: String
   *   comment: PullRequestReviewComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddPullRequestReviewThreadReplyPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPullRequestReviewThreadReply` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addReaction(input: AddReactionInput!): AddReactionPayload
   *
   * type AddReactionPayload {
   *   clientMutationId: String
   *   reaction: Reaction
   *   reactionGroups: [ReactionGroup!]
   *   subject: Reactable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddReactionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addReaction` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addStar(input: AddStarInput!): AddStarPayload
   *
   * type AddStarPayload {
   *   clientMutationId: String
   *   starrable: Starrable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddStarPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addStar` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addSubIssue(input: AddSubIssueInput!): AddSubIssuePayload
   *
   * type AddSubIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   *   subIssue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddSubIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addSubIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addUpvote(input: AddUpvoteInput!): AddUpvotePayload
   *
   * type AddUpvotePayload {
   *   clientMutationId: String
   *   subject: Votable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddUpvotePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addUpvote` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * addVerifiableDomain(input: AddVerifiableDomainInput!): AddVerifiableDomainPayload
   *
   * type AddVerifiableDomainPayload {
   *   clientMutationId: String
   *   domain: VerifiableDomain
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.AddVerifiableDomainPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addVerifiableDomain` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * approveDeployments(input: ApproveDeploymentsInput!): ApproveDeploymentsPayload
   *
   * type ApproveDeploymentsPayload {
   *   clientMutationId: String
   *   deployments: [Deployment!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ApproveDeploymentsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.approveDeployments` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * approveVerifiableDomain(input: ApproveVerifiableDomainInput!): ApproveVerifiableDomainPayload
   *
   * type ApproveVerifiableDomainPayload {
   *   clientMutationId: String
   *   domain: VerifiableDomain
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ApproveVerifiableDomainPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.approveVerifiableDomain` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * archiveProjectV2Item(input: ArchiveProjectV2ItemInput!): ArchiveProjectV2ItemPayload
   *
   * type ArchiveProjectV2ItemPayload {
   *   clientMutationId: String
   *   item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ArchiveProjectV2ItemPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.archiveProjectV2Item` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * archiveRepository(input: ArchiveRepositoryInput!): ArchiveRepositoryPayload
   *
   * type ArchiveRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ArchiveRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.archiveRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * cancelEnterpriseAdminInvitation(input: CancelEnterpriseAdminInvitationInput!): CancelEnterpriseAdminInvitationPayload
   *
   * type CancelEnterpriseAdminInvitationPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseAdministratorInvitation
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CancelEnterpriseAdminInvitationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.cancelEnterpriseAdminInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * cancelEnterpriseMemberInvitation(input: CancelEnterpriseMemberInvitationInput!): CancelEnterpriseMemberInvitationPayload
   *
   * type CancelEnterpriseMemberInvitationPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseMemberInvitation
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CancelEnterpriseMemberInvitationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.cancelEnterpriseMemberInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * cancelSponsorship(input: CancelSponsorshipInput!): CancelSponsorshipPayload
   *
   * type CancelSponsorshipPayload {
   *   clientMutationId: String
   *   sponsorsTier: SponsorsTier
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CancelSponsorshipPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.cancelSponsorship` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * changeUserStatus(input: ChangeUserStatusInput!): ChangeUserStatusPayload
   *
   * type ChangeUserStatusPayload {
   *   clientMutationId: String
   *   status: UserStatus
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ChangeUserStatusPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.changeUserStatus` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * clearLabelsFromLabelable(input: ClearLabelsFromLabelableInput!): ClearLabelsFromLabelablePayload
   *
   * type ClearLabelsFromLabelablePayload {
   *   clientMutationId: String
   *   labelable: Labelable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ClearLabelsFromLabelablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.clearLabelsFromLabelable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * clearProjectV2ItemFieldValue(input: ClearProjectV2ItemFieldValueInput!): ClearProjectV2ItemFieldValuePayload
   *
   * type ClearProjectV2ItemFieldValuePayload {
   *   clientMutationId: String
   *   projectV2Item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ClearProjectV2ItemFieldValuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.clearProjectV2ItemFieldValue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * cloneProject(input: CloneProjectInput!): CloneProjectPayload
   *
   * type CloneProjectPayload {
   *   clientMutationId: String
   *   jobStatusId: String
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CloneProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.cloneProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * cloneTemplateRepository(input: CloneTemplateRepositoryInput!): CloneTemplateRepositoryPayload
   *
   * type CloneTemplateRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CloneTemplateRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.cloneTemplateRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * closeDiscussion(input: CloseDiscussionInput!): CloseDiscussionPayload
   *
   * type CloseDiscussionPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CloseDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.closeDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * closeIssue(input: CloseIssueInput!): CloseIssuePayload
   *
   * type CloseIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CloseIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.closeIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * closePullRequest(input: ClosePullRequestInput!): ClosePullRequestPayload
   *
   * type ClosePullRequestPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ClosePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.closePullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * convertProjectCardNoteToIssue(input: ConvertProjectCardNoteToIssueInput!): ConvertProjectCardNoteToIssuePayload
   *
   * type ConvertProjectCardNoteToIssuePayload {
   *   clientMutationId: String
   *   projectCard: ProjectCard
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ConvertProjectCardNoteToIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.convertProjectCardNoteToIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * convertProjectV2DraftIssueItemToIssue(input: ConvertProjectV2DraftIssueItemToIssueInput!): ConvertProjectV2DraftIssueItemToIssuePayload
   *
   * type ConvertProjectV2DraftIssueItemToIssuePayload {
   *   clientMutationId: String
   *   item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ConvertProjectV2DraftIssueItemToIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.convertProjectV2DraftIssueItemToIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * convertPullRequestToDraft(input: ConvertPullRequestToDraftInput!): ConvertPullRequestToDraftPayload
   *
   * type ConvertPullRequestToDraftPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ConvertPullRequestToDraftPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.convertPullRequestToDraft` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * copyProjectV2(input: CopyProjectV2Input!): CopyProjectV2Payload
   *
   * type CopyProjectV2Payload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CopyProjectV2Payload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.copyProjectV2` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createAttributionInvitation(input: CreateAttributionInvitationInput!): CreateAttributionInvitationPayload
   *
   * type CreateAttributionInvitationPayload {
   *   clientMutationId: String
   *   owner: Organization
   *   source: Claimable
   *   target: Claimable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateAttributionInvitationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createAttributionInvitation` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createBranchProtectionRule(input: CreateBranchProtectionRuleInput!): CreateBranchProtectionRulePayload
   *
   * type CreateBranchProtectionRulePayload {
   *   branchProtectionRule: BranchProtectionRule
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateBranchProtectionRulePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createBranchProtectionRule` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createCheckRun(input: CreateCheckRunInput!): CreateCheckRunPayload
   *
   * type CreateCheckRunPayload {
   *   checkRun: CheckRun
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateCheckRunPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createCheckRun` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createCheckSuite(input: CreateCheckSuiteInput!): CreateCheckSuitePayload
   *
   * type CreateCheckSuitePayload {
   *   checkSuite: CheckSuite
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateCheckSuitePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createCheckSuite` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createCommitOnBranch(input: CreateCommitOnBranchInput!): CreateCommitOnBranchPayload
   *
   * type CreateCommitOnBranchPayload {
   *   clientMutationId: String
   *   commit: Commit
   *   ref: Ref
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateCommitOnBranchPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createCommitOnBranch` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createDeployment(input: CreateDeploymentInput!): CreateDeploymentPayload
   *
   * type CreateDeploymentPayload {
   *   autoMerged: Boolean
   *   clientMutationId: String
   *   deployment: Deployment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateDeploymentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createDeployment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createDeploymentStatus(input: CreateDeploymentStatusInput!): CreateDeploymentStatusPayload
   *
   * type CreateDeploymentStatusPayload {
   *   clientMutationId: String
   *   deploymentStatus: DeploymentStatus
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateDeploymentStatusPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createDeploymentStatus` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createDiscussion(input: CreateDiscussionInput!): CreateDiscussionPayload
   *
   * type CreateDiscussionPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createEnterpriseOrganization(input: CreateEnterpriseOrganizationInput!): CreateEnterpriseOrganizationPayload
   *
   * type CreateEnterpriseOrganizationPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateEnterpriseOrganizationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createEnterpriseOrganization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createEnvironment(input: CreateEnvironmentInput!): CreateEnvironmentPayload
   *
   * type CreateEnvironmentPayload {
   *   clientMutationId: String
   *   environment: Environment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateEnvironmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createEnvironment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createIpAllowListEntry(input: CreateIpAllowListEntryInput!): CreateIpAllowListEntryPayload
   *
   * type CreateIpAllowListEntryPayload {
   *   clientMutationId: String
   *   ipAllowListEntry: IpAllowListEntry
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateIpAllowListEntryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createIpAllowListEntry` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createIssue(input: CreateIssueInput!): CreateIssuePayload
   *
   * type CreateIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createLabel(input: CreateLabelInput!): CreateLabelPayload
   *
   * type CreateLabelPayload {
   *   clientMutationId: String
   *   label: Label
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateLabelPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createLabel` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createLinkedBranch(input: CreateLinkedBranchInput!): CreateLinkedBranchPayload
   *
   * type CreateLinkedBranchPayload {
   *   clientMutationId: String
   *   issue: Issue
   *   linkedBranch: LinkedBranch
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateLinkedBranchPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createLinkedBranch` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createMigrationSource(input: CreateMigrationSourceInput!): CreateMigrationSourcePayload
   *
   * type CreateMigrationSourcePayload {
   *   clientMutationId: String
   *   migrationSource: MigrationSource
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateMigrationSourcePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createMigrationSource` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createProject(input: CreateProjectInput!): CreateProjectPayload
   *
   * type CreateProjectPayload {
   *   clientMutationId: String
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createProjectV2(input: CreateProjectV2Input!): CreateProjectV2Payload
   *
   * type CreateProjectV2Payload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateProjectV2Payload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createProjectV2` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createProjectV2Field(input: CreateProjectV2FieldInput!): CreateProjectV2FieldPayload
   *
   * type CreateProjectV2FieldPayload {
   *   clientMutationId: String
   *   projectV2Field: ProjectV2FieldConfiguration
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateProjectV2FieldPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createProjectV2Field` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createProjectV2StatusUpdate(input: CreateProjectV2StatusUpdateInput!): CreateProjectV2StatusUpdatePayload
   *
   * type CreateProjectV2StatusUpdatePayload {
   *   clientMutationId: String
   *   statusUpdate: ProjectV2StatusUpdate
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateProjectV2StatusUpdatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createProjectV2StatusUpdate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createPullRequest(input: CreatePullRequestInput!): CreatePullRequestPayload
   *
   * type CreatePullRequestPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreatePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createPullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createRef(input: CreateRefInput!): CreateRefPayload
   *
   * type CreateRefPayload {
   *   clientMutationId: String
   *   ref: Ref
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateRefPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createRef` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createRepository(input: CreateRepositoryInput!): CreateRepositoryPayload
   *
   * type CreateRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createRepositoryRuleset(input: CreateRepositoryRulesetInput!): CreateRepositoryRulesetPayload
   *
   * type CreateRepositoryRulesetPayload {
   *   clientMutationId: String
   *   ruleset: RepositoryRuleset
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateRepositoryRulesetPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createRepositoryRuleset` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createSponsorsListing(input: CreateSponsorsListingInput!): CreateSponsorsListingPayload
   *
   * type CreateSponsorsListingPayload {
   *   clientMutationId: String
   *   sponsorsListing: SponsorsListing
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateSponsorsListingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createSponsorsListing` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createSponsorsTier(input: CreateSponsorsTierInput!): CreateSponsorsTierPayload
   *
   * type CreateSponsorsTierPayload {
   *   clientMutationId: String
   *   sponsorsTier: SponsorsTier
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateSponsorsTierPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createSponsorsTier` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createSponsorship(input: CreateSponsorshipInput!): CreateSponsorshipPayload
   *
   * type CreateSponsorshipPayload {
   *   clientMutationId: String
   *   sponsorship: Sponsorship
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateSponsorshipPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createSponsorship` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createSponsorships(input: CreateSponsorshipsInput!): CreateSponsorshipsPayload
   *
   * type CreateSponsorshipsPayload {
   *   clientMutationId: String
   *   sponsorables: [Sponsorable!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateSponsorshipsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createSponsorships` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createTeamDiscussion(input: CreateTeamDiscussionInput!): CreateTeamDiscussionPayload
   *
   * type CreateTeamDiscussionPayload {
   *   clientMutationId: String
   *   teamDiscussion: TeamDiscussion @deprecated(reason: "The Team Discussions feature is deprecated in favor of Organization Discussions. Follow the guide at https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/ to find a suitable replacement. Removal on 2024-07-01 UTC.")
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateTeamDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createTeamDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createTeamDiscussionComment(input: CreateTeamDiscussionCommentInput!): CreateTeamDiscussionCommentPayload
   *
   * type CreateTeamDiscussionCommentPayload {
   *   clientMutationId: String
   *   teamDiscussionComment: TeamDiscussionComment @deprecated(reason: "The Team Discussions feature is deprecated in favor of Organization Discussions. Follow the guide at https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/ to find a suitable replacement. Removal on 2024-07-01 UTC.")
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateTeamDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createTeamDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * createUserList(input: CreateUserListInput!): CreateUserListPayload
   *
   * type CreateUserListPayload {
   *   clientMutationId: String
   *   list: UserList
   *   viewer: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.CreateUserListPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createUserList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * declineTopicSuggestion(input: DeclineTopicSuggestionInput!): DeclineTopicSuggestionPayload
   *
   * type DeclineTopicSuggestionPayload {
   *   clientMutationId: String
   *   topic: Topic @deprecated(reason: "Suggested topics are no longer supported Removal on 2024-04-01 UTC.")
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeclineTopicSuggestionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.declineTopicSuggestion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteBranchProtectionRule(input: DeleteBranchProtectionRuleInput!): DeleteBranchProtectionRulePayload
   *
   * type DeleteBranchProtectionRulePayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteBranchProtectionRulePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteBranchProtectionRule` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteDeployment(input: DeleteDeploymentInput!): DeleteDeploymentPayload
   *
   * type DeleteDeploymentPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteDeploymentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteDeployment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteDiscussion(input: DeleteDiscussionInput!): DeleteDiscussionPayload
   *
   * type DeleteDiscussionPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteDiscussionComment(input: DeleteDiscussionCommentInput!): DeleteDiscussionCommentPayload
   *
   * type DeleteDiscussionCommentPayload {
   *   clientMutationId: String
   *   comment: DiscussionComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteEnvironment(input: DeleteEnvironmentInput!): DeleteEnvironmentPayload
   *
   * type DeleteEnvironmentPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteEnvironmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteEnvironment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteIpAllowListEntry(input: DeleteIpAllowListEntryInput!): DeleteIpAllowListEntryPayload
   *
   * type DeleteIpAllowListEntryPayload {
   *   clientMutationId: String
   *   ipAllowListEntry: IpAllowListEntry
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteIpAllowListEntryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteIpAllowListEntry` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteIssue(input: DeleteIssueInput!): DeleteIssuePayload
   *
   * type DeleteIssuePayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteIssueComment(input: DeleteIssueCommentInput!): DeleteIssueCommentPayload
   *
   * type DeleteIssueCommentPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteIssueCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteIssueComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteLabel(input: DeleteLabelInput!): DeleteLabelPayload
   *
   * type DeleteLabelPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteLabelPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteLabel` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteLinkedBranch(input: DeleteLinkedBranchInput!): DeleteLinkedBranchPayload
   *
   * type DeleteLinkedBranchPayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteLinkedBranchPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteLinkedBranch` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deletePackageVersion(input: DeletePackageVersionInput!): DeletePackageVersionPayload
   *
   * type DeletePackageVersionPayload {
   *   clientMutationId: String
   *   success: Boolean
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeletePackageVersionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deletePackageVersion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProject(input: DeleteProjectInput!): DeleteProjectPayload
   *
   * type DeleteProjectPayload {
   *   clientMutationId: String
   *   owner: ProjectOwner
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectCard(input: DeleteProjectCardInput!): DeleteProjectCardPayload
   *
   * type DeleteProjectCardPayload {
   *   clientMutationId: String
   *   column: ProjectColumn
   *   deletedCardId: ID
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectCardPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectCard` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectColumn(input: DeleteProjectColumnInput!): DeleteProjectColumnPayload
   *
   * type DeleteProjectColumnPayload {
   *   clientMutationId: String
   *   deletedColumnId: ID
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectColumnPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectColumn` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectV2(input: DeleteProjectV2Input!): DeleteProjectV2Payload
   *
   * type DeleteProjectV2Payload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectV2Payload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectV2` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectV2Field(input: DeleteProjectV2FieldInput!): DeleteProjectV2FieldPayload
   *
   * type DeleteProjectV2FieldPayload {
   *   clientMutationId: String
   *   projectV2Field: ProjectV2FieldConfiguration
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectV2FieldPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectV2Field` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectV2Item(input: DeleteProjectV2ItemInput!): DeleteProjectV2ItemPayload
   *
   * type DeleteProjectV2ItemPayload {
   *   clientMutationId: String
   *   deletedItemId: ID
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectV2ItemPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectV2Item` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectV2StatusUpdate(input: DeleteProjectV2StatusUpdateInput!): DeleteProjectV2StatusUpdatePayload
   *
   * type DeleteProjectV2StatusUpdatePayload {
   *   clientMutationId: String
   *   deletedStatusUpdateId: ID
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectV2StatusUpdatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectV2StatusUpdate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteProjectV2Workflow(input: DeleteProjectV2WorkflowInput!): DeleteProjectV2WorkflowPayload
   *
   * type DeleteProjectV2WorkflowPayload {
   *   clientMutationId: String
   *   deletedWorkflowId: ID
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteProjectV2WorkflowPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteProjectV2Workflow` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deletePullRequestReview(input: DeletePullRequestReviewInput!): DeletePullRequestReviewPayload
   *
   * type DeletePullRequestReviewPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeletePullRequestReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deletePullRequestReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deletePullRequestReviewComment(input: DeletePullRequestReviewCommentInput!): DeletePullRequestReviewCommentPayload
   *
   * type DeletePullRequestReviewCommentPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   *   pullRequestReviewComment: PullRequestReviewComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeletePullRequestReviewCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deletePullRequestReviewComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteRef(input: DeleteRefInput!): DeleteRefPayload
   *
   * type DeleteRefPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteRefPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteRef` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteRepositoryRuleset(input: DeleteRepositoryRulesetInput!): DeleteRepositoryRulesetPayload
   *
   * type DeleteRepositoryRulesetPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteRepositoryRulesetPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteRepositoryRuleset` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteTeamDiscussion(input: DeleteTeamDiscussionInput!): DeleteTeamDiscussionPayload
   *
   * type DeleteTeamDiscussionPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteTeamDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteTeamDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteTeamDiscussionComment(input: DeleteTeamDiscussionCommentInput!): DeleteTeamDiscussionCommentPayload
   *
   * type DeleteTeamDiscussionCommentPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteTeamDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteTeamDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteUserList(input: DeleteUserListInput!): DeleteUserListPayload
   *
   * type DeleteUserListPayload {
   *   clientMutationId: String
   *   user: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteUserListPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteUserList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * deleteVerifiableDomain(input: DeleteVerifiableDomainInput!): DeleteVerifiableDomainPayload
   *
   * type DeleteVerifiableDomainPayload {
   *   clientMutationId: String
   *   owner: VerifiableDomainOwner
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeleteVerifiableDomainPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.deleteVerifiableDomain` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * dequeuePullRequest(input: DequeuePullRequestInput!): DequeuePullRequestPayload
   *
   * type DequeuePullRequestPayload {
   *   clientMutationId: String
   *   mergeQueueEntry: MergeQueueEntry
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DequeuePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.dequeuePullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * disablePullRequestAutoMerge(input: DisablePullRequestAutoMergeInput!): DisablePullRequestAutoMergePayload
   *
   * type DisablePullRequestAutoMergePayload {
   *   actor: Actor
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DisablePullRequestAutoMergePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.disablePullRequestAutoMerge` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * dismissPullRequestReview(input: DismissPullRequestReviewInput!): DismissPullRequestReviewPayload
   *
   * type DismissPullRequestReviewPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DismissPullRequestReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.dismissPullRequestReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * dismissRepositoryVulnerabilityAlert(input: DismissRepositoryVulnerabilityAlertInput!): DismissRepositoryVulnerabilityAlertPayload
   *
   * type DismissRepositoryVulnerabilityAlertPayload {
   *   clientMutationId: String
   *   repositoryVulnerabilityAlert: RepositoryVulnerabilityAlert
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DismissRepositoryVulnerabilityAlertPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.dismissRepositoryVulnerabilityAlert` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * enablePullRequestAutoMerge(input: EnablePullRequestAutoMergeInput!): EnablePullRequestAutoMergePayload
   *
   * type EnablePullRequestAutoMergePayload {
   *   actor: Actor
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnablePullRequestAutoMergePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.enablePullRequestAutoMerge` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * enqueuePullRequest(input: EnqueuePullRequestInput!): EnqueuePullRequestPayload
   *
   * type EnqueuePullRequestPayload {
   *   clientMutationId: String
   *   mergeQueueEntry: MergeQueueEntry
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.EnqueuePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.enqueuePullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * followOrganization(input: FollowOrganizationInput!): FollowOrganizationPayload
   *
   * type FollowOrganizationPayload {
   *   clientMutationId: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FollowOrganizationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.followOrganization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * followUser(input: FollowUserInput!): FollowUserPayload
   *
   * type FollowUserPayload {
   *   clientMutationId: String
   *   user: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FollowUserPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.followUser` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * grantEnterpriseOrganizationsMigratorRole(input: GrantEnterpriseOrganizationsMigratorRoleInput!): GrantEnterpriseOrganizationsMigratorRolePayload
   *
   * type GrantEnterpriseOrganizationsMigratorRolePayload {
   *   clientMutationId: String
   *   organizations(after: String, before: String, first: Int, last: Int): OrganizationConnection
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.GrantEnterpriseOrganizationsMigratorRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.grantEnterpriseOrganizationsMigratorRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * grantMigratorRole(input: GrantMigratorRoleInput!): GrantMigratorRolePayload
   *
   * type GrantMigratorRolePayload {
   *   clientMutationId: String
   *   success: Boolean
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.GrantMigratorRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.grantMigratorRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * importProject(input: ImportProjectInput!): ImportProjectPayload
   *
   * type ImportProjectPayload {
   *   clientMutationId: String
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ImportProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.importProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * inviteEnterpriseAdmin(input: InviteEnterpriseAdminInput!): InviteEnterpriseAdminPayload
   *
   * type InviteEnterpriseAdminPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseAdministratorInvitation
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InviteEnterpriseAdminPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.inviteEnterpriseAdmin` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * inviteEnterpriseMember(input: InviteEnterpriseMemberInput!): InviteEnterpriseMemberPayload
   *
   * type InviteEnterpriseMemberPayload {
   *   clientMutationId: String
   *   invitation: EnterpriseMemberInvitation
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.InviteEnterpriseMemberPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.inviteEnterpriseMember` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * linkProjectV2ToRepository(input: LinkProjectV2ToRepositoryInput!): LinkProjectV2ToRepositoryPayload
   *
   * type LinkProjectV2ToRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.LinkProjectV2ToRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.linkProjectV2ToRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * linkProjectV2ToTeam(input: LinkProjectV2ToTeamInput!): LinkProjectV2ToTeamPayload
   *
   * type LinkProjectV2ToTeamPayload {
   *   clientMutationId: String
   *   team: Team
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.LinkProjectV2ToTeamPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.linkProjectV2ToTeam` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * linkRepositoryToProject(input: LinkRepositoryToProjectInput!): LinkRepositoryToProjectPayload
   *
   * type LinkRepositoryToProjectPayload {
   *   clientMutationId: String
   *   project: Project
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.LinkRepositoryToProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.linkRepositoryToProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * lockLockable(input: LockLockableInput!): LockLockablePayload
   *
   * type LockLockablePayload {
   *   actor: Actor
   *   clientMutationId: String
   *   lockedRecord: Lockable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.LockLockablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.lockLockable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * markDiscussionCommentAsAnswer(input: MarkDiscussionCommentAsAnswerInput!): MarkDiscussionCommentAsAnswerPayload
   *
   * type MarkDiscussionCommentAsAnswerPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarkDiscussionCommentAsAnswerPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.markDiscussionCommentAsAnswer` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * markFileAsViewed(input: MarkFileAsViewedInput!): MarkFileAsViewedPayload
   *
   * type MarkFileAsViewedPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarkFileAsViewedPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.markFileAsViewed` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * markProjectV2AsTemplate(input: MarkProjectV2AsTemplateInput!): MarkProjectV2AsTemplatePayload
   *
   * type MarkProjectV2AsTemplatePayload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarkProjectV2AsTemplatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.markProjectV2AsTemplate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * markPullRequestReadyForReview(input: MarkPullRequestReadyForReviewInput!): MarkPullRequestReadyForReviewPayload
   *
   * type MarkPullRequestReadyForReviewPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MarkPullRequestReadyForReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.markPullRequestReadyForReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * mergeBranch(input: MergeBranchInput!): MergeBranchPayload
   *
   * type MergeBranchPayload {
   *   clientMutationId: String
   *   mergeCommit: Commit
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MergeBranchPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.mergeBranch` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * mergePullRequest(input: MergePullRequestInput!): MergePullRequestPayload
   *
   * type MergePullRequestPayload {
   *   actor: Actor
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MergePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.mergePullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * minimizeComment(input: MinimizeCommentInput!): MinimizeCommentPayload
   *
   * type MinimizeCommentPayload {
   *   clientMutationId: String
   *   minimizedComment: Minimizable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MinimizeCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.minimizeComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * moveProjectCard(input: MoveProjectCardInput!): MoveProjectCardPayload
   *
   * type MoveProjectCardPayload {
   *   cardEdge: ProjectCardEdge
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MoveProjectCardPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.moveProjectCard` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * moveProjectColumn(input: MoveProjectColumnInput!): MoveProjectColumnPayload
   *
   * type MoveProjectColumnPayload {
   *   clientMutationId: String
   *   columnEdge: ProjectColumnEdge
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.MoveProjectColumnPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.moveProjectColumn` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * pinEnvironment(input: PinEnvironmentInput!): PinEnvironmentPayload
   *
   * type PinEnvironmentPayload {
   *   clientMutationId: String
   *   environment: Environment
   *   pinnedEnvironment: PinnedEnvironment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.PinEnvironmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.pinEnvironment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * pinIssue(input: PinIssueInput!): PinIssuePayload
   *
   * type PinIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.PinIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.pinIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * publishSponsorsTier(input: PublishSponsorsTierInput!): PublishSponsorsTierPayload
   *
   * type PublishSponsorsTierPayload {
   *   clientMutationId: String
   *   sponsorsTier: SponsorsTier
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.PublishSponsorsTierPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.publishSponsorsTier` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * regenerateEnterpriseIdentityProviderRecoveryCodes(input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput!): RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
   *
   * type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload {
   *   clientMutationId: String
   *   identityProvider: EnterpriseIdentityProvider
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RegenerateEnterpriseIdentityProviderRecoveryCodesPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.regenerateEnterpriseIdentityProviderRecoveryCodes` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * regenerateVerifiableDomainToken(input: RegenerateVerifiableDomainTokenInput!): RegenerateVerifiableDomainTokenPayload
   *
   * type RegenerateVerifiableDomainTokenPayload {
   *   clientMutationId: String
   *   verificationToken: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RegenerateVerifiableDomainTokenPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.regenerateVerifiableDomainToken` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * rejectDeployments(input: RejectDeploymentsInput!): RejectDeploymentsPayload
   *
   * type RejectDeploymentsPayload {
   *   clientMutationId: String
   *   deployments: [Deployment!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RejectDeploymentsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.rejectDeployments` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeAssigneesFromAssignable(input: RemoveAssigneesFromAssignableInput!): RemoveAssigneesFromAssignablePayload
   *
   * type RemoveAssigneesFromAssignablePayload {
   *   assignable: Assignable
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveAssigneesFromAssignablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeAssigneesFromAssignable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeEnterpriseAdmin(input: RemoveEnterpriseAdminInput!): RemoveEnterpriseAdminPayload
   *
   * type RemoveEnterpriseAdminPayload {
   *   admin: User
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   *   viewer: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveEnterpriseAdminPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeEnterpriseAdmin` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeEnterpriseIdentityProvider(input: RemoveEnterpriseIdentityProviderInput!): RemoveEnterpriseIdentityProviderPayload
   *
   * type RemoveEnterpriseIdentityProviderPayload {
   *   clientMutationId: String
   *   identityProvider: EnterpriseIdentityProvider
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveEnterpriseIdentityProviderPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeEnterpriseIdentityProvider` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeEnterpriseMember(input: RemoveEnterpriseMemberInput!): RemoveEnterpriseMemberPayload
   *
   * type RemoveEnterpriseMemberPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   user: User
   *   viewer: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveEnterpriseMemberPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeEnterpriseMember` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeEnterpriseOrganization(input: RemoveEnterpriseOrganizationInput!): RemoveEnterpriseOrganizationPayload
   *
   * type RemoveEnterpriseOrganizationPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   organization: Organization
   *   viewer: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveEnterpriseOrganizationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeEnterpriseOrganization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeEnterpriseSupportEntitlement(input: RemoveEnterpriseSupportEntitlementInput!): RemoveEnterpriseSupportEntitlementPayload
   *
   * type RemoveEnterpriseSupportEntitlementPayload {
   *   clientMutationId: String
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveEnterpriseSupportEntitlementPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeEnterpriseSupportEntitlement` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeLabelsFromLabelable(input: RemoveLabelsFromLabelableInput!): RemoveLabelsFromLabelablePayload
   *
   * type RemoveLabelsFromLabelablePayload {
   *   clientMutationId: String
   *   labelable: Labelable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveLabelsFromLabelablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeLabelsFromLabelable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeOutsideCollaborator(input: RemoveOutsideCollaboratorInput!): RemoveOutsideCollaboratorPayload
   *
   * type RemoveOutsideCollaboratorPayload {
   *   clientMutationId: String
   *   removedUser: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveOutsideCollaboratorPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeOutsideCollaborator` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeReaction(input: RemoveReactionInput!): RemoveReactionPayload
   *
   * type RemoveReactionPayload {
   *   clientMutationId: String
   *   reaction: Reaction
   *   reactionGroups: [ReactionGroup!]
   *   subject: Reactable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveReactionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeReaction` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeStar(input: RemoveStarInput!): RemoveStarPayload
   *
   * type RemoveStarPayload {
   *   clientMutationId: String
   *   starrable: Starrable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveStarPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeStar` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeSubIssue(input: RemoveSubIssueInput!): RemoveSubIssuePayload
   *
   * type RemoveSubIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   *   subIssue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveSubIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeSubIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * removeUpvote(input: RemoveUpvoteInput!): RemoveUpvotePayload
   *
   * type RemoveUpvotePayload {
   *   clientMutationId: String
   *   subject: Votable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RemoveUpvotePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.removeUpvote` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * reopenDiscussion(input: ReopenDiscussionInput!): ReopenDiscussionPayload
   *
   * type ReopenDiscussionPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ReopenDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.reopenDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * reopenIssue(input: ReopenIssueInput!): ReopenIssuePayload
   *
   * type ReopenIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ReopenIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.reopenIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * reopenPullRequest(input: ReopenPullRequestInput!): ReopenPullRequestPayload
   *
   * type ReopenPullRequestPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ReopenPullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.reopenPullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * reorderEnvironment(input: ReorderEnvironmentInput!): ReorderEnvironmentPayload
   *
   * type ReorderEnvironmentPayload {
   *   clientMutationId: String
   *   environment: Environment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ReorderEnvironmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.reorderEnvironment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * reprioritizeSubIssue(input: ReprioritizeSubIssueInput!): ReprioritizeSubIssuePayload
   *
   * type ReprioritizeSubIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ReprioritizeSubIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.reprioritizeSubIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * requestReviews(input: RequestReviewsInput!): RequestReviewsPayload
   *
   * type RequestReviewsPayload {
   *   actor: Actor
   *   clientMutationId: String
   *   pullRequest: PullRequest
   *   requestedReviewersEdge: UserEdge
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RequestReviewsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.requestReviews` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * rerequestCheckSuite(input: RerequestCheckSuiteInput!): RerequestCheckSuitePayload
   *
   * type RerequestCheckSuitePayload {
   *   checkSuite: CheckSuite
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RerequestCheckSuitePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.rerequestCheckSuite` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * resolveReviewThread(input: ResolveReviewThreadInput!): ResolveReviewThreadPayload
   *
   * type ResolveReviewThreadPayload {
   *   clientMutationId: String
   *   thread: PullRequestReviewThread
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.ResolveReviewThreadPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.resolveReviewThread` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * retireSponsorsTier(input: RetireSponsorsTierInput!): RetireSponsorsTierPayload
   *
   * type RetireSponsorsTierPayload {
   *   clientMutationId: String
   *   sponsorsTier: SponsorsTier
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RetireSponsorsTierPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.retireSponsorsTier` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * revertPullRequest(input: RevertPullRequestInput!): RevertPullRequestPayload
   *
   * type RevertPullRequestPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   *   revertPullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RevertPullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.revertPullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * revokeEnterpriseOrganizationsMigratorRole(input: RevokeEnterpriseOrganizationsMigratorRoleInput!): RevokeEnterpriseOrganizationsMigratorRolePayload
   *
   * type RevokeEnterpriseOrganizationsMigratorRolePayload {
   *   clientMutationId: String
   *   organizations(after: String, before: String, first: Int, last: Int): OrganizationConnection
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RevokeEnterpriseOrganizationsMigratorRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.revokeEnterpriseOrganizationsMigratorRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * revokeMigratorRole(input: RevokeMigratorRoleInput!): RevokeMigratorRolePayload
   *
   * type RevokeMigratorRolePayload {
   *   clientMutationId: String
   *   success: Boolean
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.RevokeMigratorRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.revokeMigratorRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * setEnterpriseIdentityProvider(input: SetEnterpriseIdentityProviderInput!): SetEnterpriseIdentityProviderPayload
   *
   * type SetEnterpriseIdentityProviderPayload {
   *   clientMutationId: String
   *   identityProvider: EnterpriseIdentityProvider
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SetEnterpriseIdentityProviderPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.setEnterpriseIdentityProvider` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * setOrganizationInteractionLimit(input: SetOrganizationInteractionLimitInput!): SetOrganizationInteractionLimitPayload
   *
   * type SetOrganizationInteractionLimitPayload {
   *   clientMutationId: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SetOrganizationInteractionLimitPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.setOrganizationInteractionLimit` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * setRepositoryInteractionLimit(input: SetRepositoryInteractionLimitInput!): SetRepositoryInteractionLimitPayload
   *
   * type SetRepositoryInteractionLimitPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SetRepositoryInteractionLimitPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.setRepositoryInteractionLimit` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * setUserInteractionLimit(input: SetUserInteractionLimitInput!): SetUserInteractionLimitPayload
   *
   * type SetUserInteractionLimitPayload {
   *   clientMutationId: String
   *   user: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SetUserInteractionLimitPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.setUserInteractionLimit` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * startOrganizationMigration(input: StartOrganizationMigrationInput!): StartOrganizationMigrationPayload
   *
   * type StartOrganizationMigrationPayload {
   *   clientMutationId: String
   *   orgMigration: OrganizationMigration
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.StartOrganizationMigrationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.startOrganizationMigration` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * startRepositoryMigration(input: StartRepositoryMigrationInput!): StartRepositoryMigrationPayload
   *
   * type StartRepositoryMigrationPayload {
   *   clientMutationId: String
   *   repositoryMigration: RepositoryMigration
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.StartRepositoryMigrationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.startRepositoryMigration` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * submitPullRequestReview(input: SubmitPullRequestReviewInput!): SubmitPullRequestReviewPayload
   *
   * type SubmitPullRequestReviewPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.SubmitPullRequestReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.submitPullRequestReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * transferEnterpriseOrganization(input: TransferEnterpriseOrganizationInput!): TransferEnterpriseOrganizationPayload
   *
   * type TransferEnterpriseOrganizationPayload {
   *   clientMutationId: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.TransferEnterpriseOrganizationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.transferEnterpriseOrganization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * transferIssue(input: TransferIssueInput!): TransferIssuePayload
   *
   * type TransferIssuePayload {
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.TransferIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.transferIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unarchiveProjectV2Item(input: UnarchiveProjectV2ItemInput!): UnarchiveProjectV2ItemPayload
   *
   * type UnarchiveProjectV2ItemPayload {
   *   clientMutationId: String
   *   item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnarchiveProjectV2ItemPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unarchiveProjectV2Item` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unarchiveRepository(input: UnarchiveRepositoryInput!): UnarchiveRepositoryPayload
   *
   * type UnarchiveRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnarchiveRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unarchiveRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unfollowOrganization(input: UnfollowOrganizationInput!): UnfollowOrganizationPayload
   *
   * type UnfollowOrganizationPayload {
   *   clientMutationId: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnfollowOrganizationPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unfollowOrganization` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unfollowUser(input: UnfollowUserInput!): UnfollowUserPayload
   *
   * type UnfollowUserPayload {
   *   clientMutationId: String
   *   user: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnfollowUserPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unfollowUser` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unlinkProjectV2FromRepository(input: UnlinkProjectV2FromRepositoryInput!): UnlinkProjectV2FromRepositoryPayload
   *
   * type UnlinkProjectV2FromRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnlinkProjectV2FromRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unlinkProjectV2FromRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unlinkProjectV2FromTeam(input: UnlinkProjectV2FromTeamInput!): UnlinkProjectV2FromTeamPayload
   *
   * type UnlinkProjectV2FromTeamPayload {
   *   clientMutationId: String
   *   team: Team
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnlinkProjectV2FromTeamPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unlinkProjectV2FromTeam` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unlinkRepositoryFromProject(input: UnlinkRepositoryFromProjectInput!): UnlinkRepositoryFromProjectPayload
   *
   * type UnlinkRepositoryFromProjectPayload {
   *   clientMutationId: String
   *   project: Project
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnlinkRepositoryFromProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unlinkRepositoryFromProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unlockLockable(input: UnlockLockableInput!): UnlockLockablePayload
   *
   * type UnlockLockablePayload {
   *   actor: Actor
   *   clientMutationId: String
   *   unlockedRecord: Lockable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnlockLockablePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unlockLockable` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unmarkDiscussionCommentAsAnswer(input: UnmarkDiscussionCommentAsAnswerInput!): UnmarkDiscussionCommentAsAnswerPayload
   *
   * type UnmarkDiscussionCommentAsAnswerPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnmarkDiscussionCommentAsAnswerPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unmarkDiscussionCommentAsAnswer` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unmarkFileAsViewed(input: UnmarkFileAsViewedInput!): UnmarkFileAsViewedPayload
   *
   * type UnmarkFileAsViewedPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnmarkFileAsViewedPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unmarkFileAsViewed` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unmarkIssueAsDuplicate(input: UnmarkIssueAsDuplicateInput!): UnmarkIssueAsDuplicatePayload
   *
   * type UnmarkIssueAsDuplicatePayload {
   *   clientMutationId: String
   *   duplicate: IssueOrPullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnmarkIssueAsDuplicatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unmarkIssueAsDuplicate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unmarkProjectV2AsTemplate(input: UnmarkProjectV2AsTemplateInput!): UnmarkProjectV2AsTemplatePayload
   *
   * type UnmarkProjectV2AsTemplatePayload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnmarkProjectV2AsTemplatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unmarkProjectV2AsTemplate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unminimizeComment(input: UnminimizeCommentInput!): UnminimizeCommentPayload
   *
   * type UnminimizeCommentPayload {
   *   clientMutationId: String
   *   unminimizedComment: Minimizable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnminimizeCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unminimizeComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unpinIssue(input: UnpinIssueInput!): UnpinIssuePayload
   *
   * type UnpinIssuePayload {
   *   clientMutationId: String
   *   id: ID
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnpinIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unpinIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * unresolveReviewThread(input: UnresolveReviewThreadInput!): UnresolveReviewThreadPayload
   *
   * type UnresolveReviewThreadPayload {
   *   clientMutationId: String
   *   thread: PullRequestReviewThread
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UnresolveReviewThreadPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.unresolveReviewThread` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateBranchProtectionRule(input: UpdateBranchProtectionRuleInput!): UpdateBranchProtectionRulePayload
   *
   * type UpdateBranchProtectionRulePayload {
   *   branchProtectionRule: BranchProtectionRule
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateBranchProtectionRulePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateBranchProtectionRule` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateCheckRun(input: UpdateCheckRunInput!): UpdateCheckRunPayload
   *
   * type UpdateCheckRunPayload {
   *   checkRun: CheckRun
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateCheckRunPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateCheckRun` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateCheckSuitePreferences(input: UpdateCheckSuitePreferencesInput!): UpdateCheckSuitePreferencesPayload
   *
   * type UpdateCheckSuitePreferencesPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateCheckSuitePreferencesPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateCheckSuitePreferences` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateDiscussion(input: UpdateDiscussionInput!): UpdateDiscussionPayload
   *
   * type UpdateDiscussionPayload {
   *   clientMutationId: String
   *   discussion: Discussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateDiscussionComment(input: UpdateDiscussionCommentInput!): UpdateDiscussionCommentPayload
   *
   * type UpdateDiscussionCommentPayload {
   *   clientMutationId: String
   *   comment: DiscussionComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseAdministratorRole(input: UpdateEnterpriseAdministratorRoleInput!): UpdateEnterpriseAdministratorRolePayload
   *
   * type UpdateEnterpriseAdministratorRolePayload {
   *   clientMutationId: String
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseAdministratorRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseAdministratorRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseAllowPrivateRepositoryForkingSetting(input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!): UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
   *
   * type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseAllowPrivateRepositoryForkingSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseDefaultRepositoryPermissionSetting(input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput!): UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
   *
   * type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseDefaultRepositoryPermissionSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseDefaultRepositoryPermissionSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseDeployKeySetting(input: UpdateEnterpriseDeployKeySettingInput!): UpdateEnterpriseDeployKeySettingPayload
   *
   * type UpdateEnterpriseDeployKeySettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseDeployKeySettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseDeployKeySetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanChangeRepositoryVisibilitySetting(input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!): UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
   *
   * type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanChangeRepositoryVisibilitySetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanCreateRepositoriesSetting(input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!): UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
   *
   * type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanCreateRepositoriesSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanDeleteIssuesSetting(input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput!): UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
   *
   * type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanDeleteIssuesSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanDeleteIssuesSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanDeleteRepositoriesSetting(input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!): UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
   *
   * type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanDeleteRepositoriesSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanInviteCollaboratorsSetting(input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!): UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
   *
   * type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanInviteCollaboratorsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanMakePurchasesSetting(input: UpdateEnterpriseMembersCanMakePurchasesSettingInput!): UpdateEnterpriseMembersCanMakePurchasesSettingPayload
   *
   * type UpdateEnterpriseMembersCanMakePurchasesSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanMakePurchasesSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanMakePurchasesSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanUpdateProtectedBranchesSetting(input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!): UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
   *
   * type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanUpdateProtectedBranchesSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseMembersCanViewDependencyInsightsSetting(input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!): UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
   *
   * type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseMembersCanViewDependencyInsightsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseOrganizationProjectsSetting(input: UpdateEnterpriseOrganizationProjectsSettingInput!): UpdateEnterpriseOrganizationProjectsSettingPayload
   *
   * type UpdateEnterpriseOrganizationProjectsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseOrganizationProjectsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseOrganizationProjectsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseOwnerOrganizationRole(input: UpdateEnterpriseOwnerOrganizationRoleInput!): UpdateEnterpriseOwnerOrganizationRolePayload
   *
   * type UpdateEnterpriseOwnerOrganizationRolePayload {
   *   clientMutationId: String
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseOwnerOrganizationRolePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseOwnerOrganizationRole` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseProfile(input: UpdateEnterpriseProfileInput!): UpdateEnterpriseProfilePayload
   *
   * type UpdateEnterpriseProfilePayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseProfilePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseProfile` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseRepositoryProjectsSetting(input: UpdateEnterpriseRepositoryProjectsSettingInput!): UpdateEnterpriseRepositoryProjectsSettingPayload
   *
   * type UpdateEnterpriseRepositoryProjectsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseRepositoryProjectsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseRepositoryProjectsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseTeamDiscussionsSetting(input: UpdateEnterpriseTeamDiscussionsSettingInput!): UpdateEnterpriseTeamDiscussionsSettingPayload
   *
   * type UpdateEnterpriseTeamDiscussionsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseTeamDiscussionsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseTeamDiscussionsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting(input: UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput!): UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload
   *
   * type UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnterpriseTwoFactorAuthenticationRequiredSetting(input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!): UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
   *
   * type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload {
   *   clientMutationId: String
   *   enterprise: Enterprise
   *   message: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnterpriseTwoFactorAuthenticationRequiredSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateEnvironment(input: UpdateEnvironmentInput!): UpdateEnvironmentPayload
   *
   * type UpdateEnvironmentPayload {
   *   clientMutationId: String
   *   environment: Environment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateEnvironmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateEnvironment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateIpAllowListEnabledSetting(input: UpdateIpAllowListEnabledSettingInput!): UpdateIpAllowListEnabledSettingPayload
   *
   * type UpdateIpAllowListEnabledSettingPayload {
   *   clientMutationId: String
   *   owner: IpAllowListOwner
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateIpAllowListEnabledSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateIpAllowListEnabledSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateIpAllowListEntry(input: UpdateIpAllowListEntryInput!): UpdateIpAllowListEntryPayload
   *
   * type UpdateIpAllowListEntryPayload {
   *   clientMutationId: String
   *   ipAllowListEntry: IpAllowListEntry
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateIpAllowListEntryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateIpAllowListEntry` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateIpAllowListForInstalledAppsEnabledSetting(input: UpdateIpAllowListForInstalledAppsEnabledSettingInput!): UpdateIpAllowListForInstalledAppsEnabledSettingPayload
   *
   * type UpdateIpAllowListForInstalledAppsEnabledSettingPayload {
   *   clientMutationId: String
   *   owner: IpAllowListOwner
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateIpAllowListForInstalledAppsEnabledSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateIpAllowListForInstalledAppsEnabledSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateIssue(input: UpdateIssueInput!): UpdateIssuePayload
   *
   * type UpdateIssuePayload {
   *   actor: Actor
   *   clientMutationId: String
   *   issue: Issue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateIssueComment(input: UpdateIssueCommentInput!): UpdateIssueCommentPayload
   *
   * type UpdateIssueCommentPayload {
   *   clientMutationId: String
   *   issueComment: IssueComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateIssueCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateIssueComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateLabel(input: UpdateLabelInput!): UpdateLabelPayload
   *
   * type UpdateLabelPayload {
   *   clientMutationId: String
   *   label: Label
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateLabelPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateLabel` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateNotificationRestrictionSetting(input: UpdateNotificationRestrictionSettingInput!): UpdateNotificationRestrictionSettingPayload
   *
   * type UpdateNotificationRestrictionSettingPayload {
   *   clientMutationId: String
   *   owner: VerifiableDomainOwner
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateNotificationRestrictionSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateNotificationRestrictionSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateOrganizationAllowPrivateRepositoryForkingSetting(input: UpdateOrganizationAllowPrivateRepositoryForkingSettingInput!): UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload
   *
   * type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload {
   *   clientMutationId: String
   *   message: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateOrganizationAllowPrivateRepositoryForkingSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateOrganizationWebCommitSignoffSetting(input: UpdateOrganizationWebCommitSignoffSettingInput!): UpdateOrganizationWebCommitSignoffSettingPayload
   *
   * type UpdateOrganizationWebCommitSignoffSettingPayload {
   *   clientMutationId: String
   *   message: String
   *   organization: Organization
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateOrganizationWebCommitSignoffSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateOrganizationWebCommitSignoffSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updatePatreonSponsorability(input: UpdatePatreonSponsorabilityInput!): UpdatePatreonSponsorabilityPayload
   *
   * type UpdatePatreonSponsorabilityPayload {
   *   clientMutationId: String
   *   sponsorsListing: SponsorsListing
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdatePatreonSponsorabilityPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updatePatreonSponsorability` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProject(input: UpdateProjectInput!): UpdateProjectPayload
   *
   * type UpdateProjectPayload {
   *   clientMutationId: String
   *   project: Project
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProject` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectCard(input: UpdateProjectCardInput!): UpdateProjectCardPayload
   *
   * type UpdateProjectCardPayload {
   *   clientMutationId: String
   *   projectCard: ProjectCard
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectCardPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectCard` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectColumn(input: UpdateProjectColumnInput!): UpdateProjectColumnPayload
   *
   * type UpdateProjectColumnPayload {
   *   clientMutationId: String
   *   projectColumn: ProjectColumn
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectColumnPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectColumn` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2(input: UpdateProjectV2Input!): UpdateProjectV2Payload
   *
   * type UpdateProjectV2Payload {
   *   clientMutationId: String
   *   projectV2: ProjectV2
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2Payload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2Collaborators(input: UpdateProjectV2CollaboratorsInput!): UpdateProjectV2CollaboratorsPayload
   *
   * type UpdateProjectV2CollaboratorsPayload {
   *   clientMutationId: String
   *   collaborators(after: String, before: String, first: Int, last: Int): ProjectV2ActorConnection
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2CollaboratorsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2Collaborators` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2DraftIssue(input: UpdateProjectV2DraftIssueInput!): UpdateProjectV2DraftIssuePayload
   *
   * type UpdateProjectV2DraftIssuePayload {
   *   clientMutationId: String
   *   draftIssue: DraftIssue
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2DraftIssuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2DraftIssue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2Field(input: UpdateProjectV2FieldInput!): UpdateProjectV2FieldPayload
   *
   * type UpdateProjectV2FieldPayload {
   *   clientMutationId: String
   *   projectV2Field: ProjectV2FieldConfiguration
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2FieldPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2Field` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2ItemFieldValue(input: UpdateProjectV2ItemFieldValueInput!): UpdateProjectV2ItemFieldValuePayload
   *
   * type UpdateProjectV2ItemFieldValuePayload {
   *   clientMutationId: String
   *   projectV2Item: ProjectV2Item
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2ItemFieldValuePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2ItemFieldValue` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2ItemPosition(input: UpdateProjectV2ItemPositionInput!): UpdateProjectV2ItemPositionPayload
   *
   * type UpdateProjectV2ItemPositionPayload {
   *   clientMutationId: String
   *   items(after: String, before: String, first: Int, last: Int): ProjectV2ItemConnection
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2ItemPositionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2ItemPosition` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateProjectV2StatusUpdate(input: UpdateProjectV2StatusUpdateInput!): UpdateProjectV2StatusUpdatePayload
   *
   * type UpdateProjectV2StatusUpdatePayload {
   *   clientMutationId: String
   *   statusUpdate: ProjectV2StatusUpdate
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateProjectV2StatusUpdatePayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateProjectV2StatusUpdate` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updatePullRequest(input: UpdatePullRequestInput!): UpdatePullRequestPayload
   *
   * type UpdatePullRequestPayload {
   *   actor: Actor
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdatePullRequestPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updatePullRequest` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updatePullRequestBranch(input: UpdatePullRequestBranchInput!): UpdatePullRequestBranchPayload
   *
   * type UpdatePullRequestBranchPayload {
   *   clientMutationId: String
   *   pullRequest: PullRequest
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdatePullRequestBranchPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updatePullRequestBranch` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updatePullRequestReview(input: UpdatePullRequestReviewInput!): UpdatePullRequestReviewPayload
   *
   * type UpdatePullRequestReviewPayload {
   *   clientMutationId: String
   *   pullRequestReview: PullRequestReview
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdatePullRequestReviewPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updatePullRequestReview` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updatePullRequestReviewComment(input: UpdatePullRequestReviewCommentInput!): UpdatePullRequestReviewCommentPayload
   *
   * type UpdatePullRequestReviewCommentPayload {
   *   clientMutationId: String
   *   pullRequestReviewComment: PullRequestReviewComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdatePullRequestReviewCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updatePullRequestReviewComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateRef(input: UpdateRefInput!): UpdateRefPayload
   *
   * type UpdateRefPayload {
   *   clientMutationId: String
   *   ref: Ref
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateRefPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateRef` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateRefs(input: UpdateRefsInput!): UpdateRefsPayload
   *
   * type UpdateRefsPayload {
   *   clientMutationId: String
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateRefsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateRefs` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateRepository(input: UpdateRepositoryInput!): UpdateRepositoryPayload
   *
   * type UpdateRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateRepositoryRuleset(input: UpdateRepositoryRulesetInput!): UpdateRepositoryRulesetPayload
   *
   * type UpdateRepositoryRulesetPayload {
   *   clientMutationId: String
   *   ruleset: RepositoryRuleset
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateRepositoryRulesetPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateRepositoryRuleset` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateRepositoryWebCommitSignoffSetting(input: UpdateRepositoryWebCommitSignoffSettingInput!): UpdateRepositoryWebCommitSignoffSettingPayload
   *
   * type UpdateRepositoryWebCommitSignoffSettingPayload {
   *   clientMutationId: String
   *   message: String
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateRepositoryWebCommitSignoffSettingPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateRepositoryWebCommitSignoffSetting` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateSponsorshipPreferences(input: UpdateSponsorshipPreferencesInput!): UpdateSponsorshipPreferencesPayload
   *
   * type UpdateSponsorshipPreferencesPayload {
   *   clientMutationId: String
   *   sponsorship: Sponsorship
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateSponsorshipPreferencesPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateSponsorshipPreferences` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateSubscription(input: UpdateSubscriptionInput!): UpdateSubscriptionPayload
   *
   * type UpdateSubscriptionPayload {
   *   clientMutationId: String
   *   subscribable: Subscribable
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateSubscriptionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateSubscription` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateTeamDiscussion(input: UpdateTeamDiscussionInput!): UpdateTeamDiscussionPayload
   *
   * type UpdateTeamDiscussionPayload {
   *   clientMutationId: String
   *   teamDiscussion: TeamDiscussion
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateTeamDiscussionPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateTeamDiscussion` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateTeamDiscussionComment(input: UpdateTeamDiscussionCommentInput!): UpdateTeamDiscussionCommentPayload
   *
   * type UpdateTeamDiscussionCommentPayload {
   *   clientMutationId: String
   *   teamDiscussionComment: TeamDiscussionComment
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateTeamDiscussionCommentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateTeamDiscussionComment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateTeamReviewAssignment(input: UpdateTeamReviewAssignmentInput!): UpdateTeamReviewAssignmentPayload
   *
   * type UpdateTeamReviewAssignmentPayload {
   *   clientMutationId: String
   *   team: Team
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateTeamReviewAssignmentPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateTeamReviewAssignment` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateTeamsRepository(input: UpdateTeamsRepositoryInput!): UpdateTeamsRepositoryPayload
   *
   * type UpdateTeamsRepositoryPayload {
   *   clientMutationId: String
   *   repository: Repository
   *   teams: [Team!]
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateTeamsRepositoryPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateTeamsRepository` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateTopics(input: UpdateTopicsInput!): UpdateTopicsPayload
   *
   * type UpdateTopicsPayload {
   *   clientMutationId: String
   *   invalidTopicNames: [String!]
   *   repository: Repository
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateTopicsPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateTopics` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateUserList(input: UpdateUserListInput!): UpdateUserListPayload
   *
   * type UpdateUserListPayload {
   *   clientMutationId: String
   *   list: UserList
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateUserListPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateUserList` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * updateUserListsForItem(input: UpdateUserListsForItemInput!): UpdateUserListsForItemPayload
   *
   * type UpdateUserListsForItemPayload {
   *   clientMutationId: String
   *   item: UserListItems
   *   lists: [UserList!]
   *   user: User
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.UpdateUserListsForItemPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.updateUserListsForItem` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
   *
   * ```graphql
   * verifyVerifiableDomain(input: VerifyVerifiableDomainInput!): VerifyVerifiableDomainPayload
   *
   * type VerifyVerifiableDomainPayload {
   *   clientMutationId: String
   *   domain: VerifiableDomain
   * }
   * ```
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.VerifyVerifiableDomainPayload} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.verifyVerifiableDomain` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
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
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple query fields in a single request.
   *
   * @example Single field
   * ```ts
   * const user = await graffle.query.user({ id: true, name: true })
   * ```
   *
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.query.$batch({
   *   user: { id: true, name: true },
   *   posts: { title: true, content: true }
   * })
   * ```
   */
  query: QueryMethods<$Context>
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple mutation fields in a single request.
   *
   * @example Single field
   * ```ts
   * const result = await graffle.mutation.createUser({
   *   id: true,
   *   name: true
   * })
   * ```
   *
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.mutation.$batch({
   *   createUser: { id: true, name: true },
   *   createPost: { id: true, title: true }
   * })
   * ```
   */
  mutation: MutationMethods<$Context>
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>
}

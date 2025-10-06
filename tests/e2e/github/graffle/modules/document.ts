import type { OperationMetadata, TypedDocument, TypedFullDocumentString } from '#graffle/client'
import { createStaticRootType, document as documentBuilder } from '#graffle/extensions/document-builder'
import type * as $$StaticBuilder from '#graffle/extensions/document-builder'
import type { InferOperations } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as SelectionSets from './selection-sets.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Configuration for static document builders.
 * Generated code always has SDDM enabled since the generator creates the schema-driven data map.
 */
type DocumentConfig = {
  schema: $$Schema.Schema
  sddmEnabled: true
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
// Note: This interface conforms to StaticDocumentBuilder<DocumentConfig, OperationTypeNode.QUERY>
export interface QueryBuilder {
  /**
   * Look up a code of conduct by its key
   *
   * ```graphql
   * codeOfConduct(key: String!): CodeOfConduct
   *
   * type CodeOfConduct implements Node {
   * body: String
   * id: ID!
   * key: String!
   * name: String!
   * resourcePath: URI
   * url: URI
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
   *
   * @example
   * ```ts
   * const doc = query.codeOfConduct({
   * // $: { ...variables }
   * body: true,
   * id: true,
   * key: true,
   * // ...
   * })
   * ```
   */
  codeOfConduct: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a code of conduct by its key
   *
   * ```graphql
   * codesOfConduct: [CodeOfConduct]
   *
   * type CodeOfConduct implements Node {
   * body: String
   * id: ID!
   * key: String!
   * name: String!
   * resourcePath: URI
   * url: URI
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
   *
   * @example
   * ```ts
   * const doc = query.codesOfConduct({
   * body: true,
   * id: true,
   * key: true,
   * // ...
   * })
   * ```
   */
  codesOfConduct: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up an enterprise by URL slug.
   *
   * ```graphql
   * enterprise(invitationToken: String, slug: String!): Enterprise
   *
   * type Enterprise implements AnnouncementBannerI & Node {
   * announcement: String @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementBanner: AnnouncementBanner
   * announcementCreatedAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementExpiresAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementUserDismissible: Boolean @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * avatarUrl(size: Int): URI!
   * billingEmail: String
   * billingInfo: EnterpriseBillingInfo
   * createdAt: DateTime!
   * databaseId: Int
   * description: String
   * descriptionHTML: HTML!
   * id: ID!
   * location: String
   * members(after: String, before: String, deployment: EnterpriseUserDeployment, first: Int, hasTwoFactorEnabled: Boolean = null, last: Int, orderBy: EnterpriseMemberOrder = {field: LOGIN, direction: ASC}, organizationLogins: [String!], query: String, role: EnterpriseUserAccountMembershipRole, twoFactorMethodSecurity: TwoFactorCredentialSecurityType = null): EnterpriseMemberConnection!
   * name: String!
   * organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = {field: LOGIN, direction: ASC}, query: String, viewerOrganizationRole: RoleInOrganization): OrganizationConnection!
   * ownerInfo: EnterpriseOwnerInfo
   * readme: String
   * readmeHTML: HTML!
   * resourcePath: URI!
   * ruleset(databaseId: Int!): RepositoryRuleset
   * rulesets(after: String, before: String, first: Int, last: Int): RepositoryRulesetConnection
   * slug: String!
   * url: URI!
   * userNamespaceRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder = {field: NAME, direction: ASC}, query: String): UserNamespaceRepositoryConnection!
   * viewerIsAdmin: Boolean!
   * websiteUrl: URI
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
   *
   * @example
   * ```ts
   * const doc = query.enterprise({
   * // $: { ...variables }
   * announcement: true,
   * announcementBanner: true,
   * announcementCreatedAt: true,
   * // ...
   * })
   * ```
   */
  enterprise: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['enterprise'],
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
    >,
    true
  >

  /**
   * Look up a pending enterprise administrator invitation by invitee, enterprise and role.
   *
   * ```graphql
   * enterpriseAdministratorInvitation(enterpriseSlug: String!, role: EnterpriseAdministratorRole!, userLogin: String!): EnterpriseAdministratorInvitation
   *
   * type EnterpriseAdministratorInvitation implements Node {
   * createdAt: DateTime!
   * email: String
   * enterprise: Enterprise!
   * id: ID!
   * invitee: User
   * inviter: User
   * role: EnterpriseAdministratorRole!
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
   *
   * @example
   * ```ts
   * const doc = query.enterpriseAdministratorInvitation({
   * // $: { ...variables }
   * createdAt: true,
   * email: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  enterpriseAdministratorInvitation: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a pending enterprise administrator invitation by invitation token.
   *
   * ```graphql
   * enterpriseAdministratorInvitationByToken(invitationToken: String!): EnterpriseAdministratorInvitation
   *
   * type EnterpriseAdministratorInvitation implements Node {
   * createdAt: DateTime!
   * email: String
   * enterprise: Enterprise!
   * id: ID!
   * invitee: User
   * inviter: User
   * role: EnterpriseAdministratorRole!
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
   *
   * @example
   * ```ts
   * const doc = query.enterpriseAdministratorInvitationByToken({
   * // $: { ...variables }
   * createdAt: true,
   * email: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  enterpriseAdministratorInvitationByToken: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a pending enterprise unaffiliated member invitation by invitee and enterprise.
   *
   * ```graphql
   * enterpriseMemberInvitation(enterpriseSlug: String!, userLogin: String!): EnterpriseMemberInvitation
   *
   * type EnterpriseMemberInvitation implements Node {
   * createdAt: DateTime!
   * email: String
   * enterprise: Enterprise!
   * id: ID!
   * invitee: User
   * inviter: User
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
   *
   * @example
   * ```ts
   * const doc = query.enterpriseMemberInvitation({
   * // $: { ...variables }
   * createdAt: true,
   * email: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  enterpriseMemberInvitation: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a pending enterprise unaffiliated member invitation by invitation token.
   *
   * ```graphql
   * enterpriseMemberInvitationByToken(invitationToken: String!): EnterpriseMemberInvitation
   *
   * type EnterpriseMemberInvitation implements Node {
   * createdAt: DateTime!
   * email: String
   * enterprise: Enterprise!
   * id: ID!
   * invitee: User
   * inviter: User
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
   *
   * @example
   * ```ts
   * const doc = query.enterpriseMemberInvitationByToken({
   * // $: { ...variables }
   * createdAt: true,
   * email: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  enterpriseMemberInvitationByToken: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
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
   *
   * @example
   * ```ts
   * const doc = query.id()
   * ```
   */
  id: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['id'],
  >(
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
    >,
    true
  >

  /**
   * Look up an open source license by its key
   *
   * ```graphql
   * license(key: String!): License
   *
   * type License implements Node {
   * body: String!
   * conditions: [LicenseRule]!
   * description: String
   * featured: Boolean!
   * hidden: Boolean!
   * id: ID!
   * implementation: String
   * key: String!
   * limitations: [LicenseRule]!
   * name: String!
   * nickname: String
   * permissions: [LicenseRule]!
   * pseudoLicense: Boolean!
   * spdxId: String
   * url: URI
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
   *
   * @example
   * ```ts
   * const doc = query.license({
   * // $: { ...variables }
   * body: true,
   * conditions: true,
   * description: true,
   * // ...
   * })
   * ```
   */
  license: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['license'],
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
    >,
    true
  >

  /**
   * Return a list of known open source licenses
   *
   * ```graphql
   * licenses: [License]!
   *
   * type License implements Node {
   * body: String!
   * conditions: [LicenseRule]!
   * description: String
   * featured: Boolean!
   * hidden: Boolean!
   * id: ID!
   * implementation: String
   * key: String!
   * limitations: [LicenseRule]!
   * name: String!
   * nickname: String
   * permissions: [LicenseRule]!
   * pseudoLicense: Boolean!
   * spdxId: String
   * url: URI
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
   *
   * @example
   * ```ts
   * const doc = query.licenses({
   * body: true,
   * conditions: true,
   * description: true,
   * // ...
   * })
   * ```
   */
  licenses: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['licenses'],
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
    >,
    true
  >

  /**
   * Get alphabetically sorted list of Marketplace categories
   *
   * ```graphql
   * marketplaceCategories(excludeEmpty: Boolean, excludeSubcategories: Boolean, includeCategories: [String!]): [MarketplaceCategory!]!
   *
   * type MarketplaceCategory implements Node {
   * description: String
   * howItWorks: String
   * id: ID!
   * name: String!
   * primaryListingCount: Int!
   * resourcePath: URI!
   * secondaryListingCount: Int!
   * slug: String!
   * url: URI!
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
   *
   * @example
   * ```ts
   * const doc = query.marketplaceCategories({
   * // $: { ...variables }
   * description: true,
   * howItWorks: true,
   * id: true,
   * // ...
   * })
   * ```
   */
  marketplaceCategories: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a Marketplace category by its slug.
   *
   * ```graphql
   * marketplaceCategory(slug: String!, useTopicAliases: Boolean): MarketplaceCategory
   *
   * type MarketplaceCategory implements Node {
   * description: String
   * howItWorks: String
   * id: ID!
   * name: String!
   * primaryListingCount: Int!
   * resourcePath: URI!
   * secondaryListingCount: Int!
   * slug: String!
   * url: URI!
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
   *
   * @example
   * ```ts
   * const doc = query.marketplaceCategory({
   * // $: { ...variables }
   * description: true,
   * howItWorks: true,
   * id: true,
   * // ...
   * })
   * ```
   */
  marketplaceCategory: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a single Marketplace listing
   *
   * ```graphql
   * marketplaceListing(slug: String!): MarketplaceListing
   *
   * type MarketplaceListing implements Node {
   * app: App
   * companyUrl: URI
   * configurationResourcePath: URI!
   * configurationUrl: URI!
   * documentationUrl: URI
   * extendedDescription: String
   * extendedDescriptionHTML: HTML!
   * fullDescription: String!
   * fullDescriptionHTML: HTML!
   * hasPublishedFreeTrialPlans: Boolean!
   * hasTermsOfService: Boolean!
   * hasVerifiedOwner: Boolean!
   * howItWorks: String
   * howItWorksHTML: HTML!
   * id: ID!
   * installationUrl: URI
   * installedForViewer: Boolean!
   * isArchived: Boolean!
   * isDraft: Boolean!
   * isPaid: Boolean!
   * isPublic: Boolean!
   * isRejected: Boolean!
   * isUnverified: Boolean!
   * isUnverifiedPending: Boolean!
   * isVerificationPendingFromDraft: Boolean!
   * isVerificationPendingFromUnverified: Boolean!
   * isVerified: Boolean!
   * logoBackgroundColor: String!
   * logoUrl(size: Int = 400): URI
   * name: String!
   * normalizedShortDescription: String!
   * pricingUrl: URI
   * primaryCategory: MarketplaceCategory!
   * privacyPolicyUrl: URI!
   * resourcePath: URI!
   * screenshotUrls: [String]!
   * secondaryCategory: MarketplaceCategory
   * shortDescription: String!
   * slug: String!
   * statusUrl: URI
   * supportEmail: String
   * supportUrl: URI!
   * termsOfServiceUrl: URI
   * url: URI!
   * viewerCanAddPlans: Boolean!
   * viewerCanApprove: Boolean!
   * viewerCanDelist: Boolean!
   * viewerCanEdit: Boolean!
   * viewerCanEditCategories: Boolean!
   * viewerCanEditPlans: Boolean!
   * viewerCanRedraft: Boolean!
   * viewerCanReject: Boolean!
   * viewerCanRequestApproval: Boolean!
   * viewerHasPurchased: Boolean!
   * viewerHasPurchasedForAllOrganizations: Boolean!
   * viewerIsListingAdmin: Boolean!
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
   *
   * @example
   * ```ts
   * const doc = query.marketplaceListing({
   * // $: { ...variables }
   * app: true,
   * companyUrl: true,
   * configurationResourcePath: true,
   * // ...
   * })
   * ```
   */
  marketplaceListing: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up Marketplace listings
   *
   * ```graphql
   * marketplaceListings(adminId: ID, after: String, allStates: Boolean, before: String, categorySlug: String, first: Int, last: Int, organizationId: ID, primaryCategoryOnly: Boolean = false, slugs: [String], useTopicAliases: Boolean, viewerCanAdmin: Boolean, withFreeTrialsOnly: Boolean = false): MarketplaceListingConnection!
   *
   * type MarketplaceListingConnection {
   * edges: [MarketplaceListingEdge]
   * nodes: [MarketplaceListing]
   * pageInfo: PageInfo!
   * totalCount: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.marketplaceListings({
   * // $: { ...variables }
   * edges: true,
   * nodes: true,
   * pageInfo: true,
   * // ...
   * })
   * ```
   */
  marketplaceListings: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Return information about the GitHub instance
   *
   * ```graphql
   * meta: GitHubMetadata!
   *
   * type GitHubMetadata {
   * gitHubServicesSha: GitObjectID!
   * gitIpAddresses: [String!]
   * githubEnterpriseImporterIpAddresses: [String!]
   * hookIpAddresses: [String!]
   * importerIpAddresses: [String!]
   * isPasswordAuthenticationVerifiable: Boolean!
   * pagesIpAddresses: [String!]
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
   *
   * @example
   * ```ts
   * const doc = query.meta({
   * gitHubServicesSha: true,
   * gitIpAddresses: true,
   * githubEnterpriseImporterIpAddresses: true,
   * // ...
   * })
   * ```
   */
  meta: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['meta'],
  >(
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
    >,
    true
  >

  /**
   * Fetches an object given its ID.
   *
   * ```graphql
   * node(id: ID!): Node
   *
   * interface Node {
   * id: ID!
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
   *
   * @example
   * ```ts
   * const doc = query.node({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  node: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['node'],
  >(
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
    >,
    true
  >

  /**
   * Lookup nodes by a list of IDs.
   *
   * ```graphql
   * nodes(ids: [ID!]!): [Node]!
   *
   * interface Node {
   * id: ID!
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
   *
   * @example
   * ```ts
   * const doc = query.nodes({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  nodes: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['nodes'],
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
    >,
    true
  >

  /**
   * Lookup a organization by login.
   *
   * ```graphql
   * organization(login: String!): Organization
   *
   * type Organization implements Actor & AnnouncementBannerI & MemberStatusable & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   * announcement: String @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementBanner: AnnouncementBanner
   * announcementCreatedAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementExpiresAt: DateTime @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * announcementUserDismissible: Boolean @deprecated(reason: "The individual `announcementX` fields do not follow our standard GraphQL patterns. Use the `announcementBanner` object instead. Removal on 2025-04-01 UTC.")
   * anyPinnableItems(type: PinnableItemType): Boolean!
   * archivedAt: DateTime
   * auditLog(after: String, before: String, first: Int, last: Int, orderBy: AuditLogOrder = {field: CREATED_AT, direction: DESC}, query: String): OrganizationAuditEntryConnection!
   * avatarUrl(size: Int): URI!
   * createdAt: DateTime!
   * databaseId: Int
   * description: String
   * descriptionHTML: String
   * domains(after: String, before: String, first: Int, isApproved: Boolean = null, isVerified: Boolean = null, last: Int, orderBy: VerifiableDomainOrder = {field: DOMAIN, direction: ASC}): VerifiableDomainConnection
   * email: String
   * enterpriseOwners(after: String, before: String, first: Int, last: Int, orderBy: OrgEnterpriseOwnerOrder = {field: LOGIN, direction: ASC}, organizationRole: RoleInOrganization, query: String): OrganizationEnterpriseOwnerConnection!
   * estimatedNextSponsorsPayoutInCents: Int!
   * hasSponsorsListing: Boolean!
   * id: ID!
   * interactionAbility: RepositoryInteractionAbility
   * ipAllowListEnabledSetting: IpAllowListEnabledSettingValue!
   * ipAllowListEntries(after: String, before: String, first: Int, last: Int, orderBy: IpAllowListEntryOrder = {field: ALLOW_LIST_VALUE, direction: ASC}): IpAllowListEntryConnection!
   * ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue!
   * isSponsoredBy(accountLogin: String!): Boolean!
   * isSponsoringViewer: Boolean!
   * isVerified: Boolean!
   * itemShowcase: ProfileItemShowcase!
   * lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   * location: String
   * login: String!
   * mannequins(after: String, before: String, first: Int, last: Int, login: String, orderBy: MannequinOrder = {field: CREATED_AT, direction: ASC}): MannequinConnection!
   * memberStatuses(after: String, before: String, first: Int, last: Int, orderBy: UserStatusOrder = {field: UPDATED_AT, direction: DESC}): UserStatusConnection!
   * membersCanForkPrivateRepositories: Boolean!
   * membersWithRole(after: String, before: String, first: Int, last: Int): OrganizationMemberConnection!
   * monthlyEstimatedSponsorsIncomeInCents: Int!
   * name: String
   * newTeamResourcePath: URI!
   * newTeamUrl: URI!
   * notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue!
   * organizationBillingEmail: String
   * packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   * pendingMembers(after: String, before: String, first: Int, last: Int): UserConnection!
   * pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItemsRemaining: Int!
   * project(number: Int!): Project
   * projectV2(number: Int!): ProjectV2
   * projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   * projectsResourcePath: URI!
   * projectsUrl: URI!
   * projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   * recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   * repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * repository(followRenames: Boolean = true, name: String!): Repository
   * repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   * repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   * repositoryMigrations(after: String, before: String, first: Int, last: Int, orderBy: RepositoryMigrationOrder = {field: CREATED_AT, direction: ASC}, repositoryName: String, state: MigrationState): RepositoryMigrationConnection!
   * requiresTwoFactorAuthentication: Boolean
   * resourcePath: URI!
   * ruleset(databaseId: Int!, includeParents: Boolean = true): RepositoryRuleset
   * rulesets(after: String, before: String, first: Int, includeParents: Boolean = true, last: Int, targets: [RepositoryRulesetTarget!] = null): RepositoryRulesetConnection
   * samlIdentityProvider: OrganizationIdentityProvider
   * sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   * sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   * sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   * sponsorsListing: SponsorsListing
   * sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   * sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   * sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   * sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   * sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   * team(slug: String!): Team
   * teams(after: String, before: String, first: Int, last: Int, ldapMapped: Boolean, notificationSetting: TeamNotificationSetting, orderBy: TeamOrder, privacy: TeamPrivacy, query: String, role: TeamRole, rootTeamsOnly: Boolean = false, userLogins: [String!]): TeamConnection!
   * teamsResourcePath: URI!
   * teamsUrl: URI!
   * totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   * twitterUsername: String
   * updatedAt: DateTime!
   * url: URI!
   * viewerCanAdminister: Boolean!
   * viewerCanChangePinnedItems: Boolean!
   * viewerCanCreateProjects: Boolean!
   * viewerCanCreateRepositories: Boolean!
   * viewerCanCreateTeams: Boolean!
   * viewerCanSponsor: Boolean!
   * viewerIsAMember: Boolean!
   * viewerIsFollowing: Boolean!
   * viewerIsSponsoring: Boolean!
   * webCommitSignoffRequired: Boolean!
   * websiteUrl: URI
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
   *
   * @example
   * ```ts
   * const doc = query.organization({
   * // $: { ...variables }
   * announcement: true,
   * announcementBanner: true,
   * announcementCreatedAt: true,
   * // ...
   * })
   * ```
   */
  organization: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * The client's rate limit information.
   *
   * ```graphql
   * rateLimit(dryRun: Boolean = false): RateLimit
   *
   * type RateLimit {
   * cost: Int!
   * limit: Int!
   * nodeCount: Int!
   * remaining: Int!
   * resetAt: DateTime!
   * used: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.rateLimit({
   * // $: { ...variables }
   * cost: true,
   * limit: true,
   * nodeCount: true,
   * // ...
   * })
   * ```
   */
  rateLimit: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['rateLimit'],
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
    >,
    true
  >

  /**
   * Workaround for re-exposing the root query object. (Refer to
   * https://github.com/facebook/relay/issues/112 for more information.)
   *
   * ```graphql
   * relay: Query!
   *
   * type Query implements Node {
   * codeOfConduct(key: String!): CodeOfConduct
   * codesOfConduct: [CodeOfConduct]
   * enterprise(invitationToken: String, slug: String!): Enterprise
   * enterpriseAdministratorInvitation(enterpriseSlug: String!, role: EnterpriseAdministratorRole!, userLogin: String!): EnterpriseAdministratorInvitation
   * enterpriseAdministratorInvitationByToken(invitationToken: String!): EnterpriseAdministratorInvitation
   * enterpriseMemberInvitation(enterpriseSlug: String!, userLogin: String!): EnterpriseMemberInvitation
   * enterpriseMemberInvitationByToken(invitationToken: String!): EnterpriseMemberInvitation
   * id: ID!
   * license(key: String!): License
   * licenses: [License]!
   * marketplaceCategories(excludeEmpty: Boolean, excludeSubcategories: Boolean, includeCategories: [String!]): [MarketplaceCategory!]!
   * marketplaceCategory(slug: String!, useTopicAliases: Boolean): MarketplaceCategory
   * marketplaceListing(slug: String!): MarketplaceListing
   * marketplaceListings(adminId: ID, after: String, allStates: Boolean, before: String, categorySlug: String, first: Int, last: Int, organizationId: ID, primaryCategoryOnly: Boolean = false, slugs: [String], useTopicAliases: Boolean, viewerCanAdmin: Boolean, withFreeTrialsOnly: Boolean = false): MarketplaceListingConnection!
   * meta: GitHubMetadata!
   * node(id: ID!): Node
   * nodes(ids: [ID!]!): [Node]!
   * organization(login: String!): Organization
   * rateLimit(dryRun: Boolean = false): RateLimit
   * relay: Query!
   * repository(followRenames: Boolean = true, name: String!, owner: String!): Repository
   * repositoryOwner(login: String!): RepositoryOwner
   * resource(url: URI!): UniformResourceLocatable
   * search(after: String, before: String, first: Int, last: Int, query: String!, type: SearchType!): SearchResultItemConnection!
   * securityAdvisories(after: String, before: String, classifications: [SecurityAdvisoryClassification!], epssPercentage: Float, epssPercentile: Float, first: Int, identifier: SecurityAdvisoryIdentifierFilter, last: Int, orderBy: SecurityAdvisoryOrder = {field: UPDATED_AT, direction: DESC}, publishedSince: DateTime, updatedSince: DateTime): SecurityAdvisoryConnection!
   * securityAdvisory(ghsaId: String!): SecurityAdvisory
   * securityVulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   * sponsorables(after: String, before: String, dependencyEcosystem: SecurityAdvisoryEcosystem, ecosystem: DependencyGraphEcosystem, first: Int, last: Int, onlyDependencies: Boolean = false, orderBy: SponsorableOrder = {field: LOGIN, direction: ASC}, orgLoginForDependencies: String): SponsorableItemConnection!
   * topic(name: String!): Topic
   * user(login: String!): User
   * viewer: User!
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
   *
   * @example
   * ```ts
   * const doc = query.relay({
   * codeOfConduct: true,
   * codesOfConduct: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  relay: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['relay'],
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
    >,
    true
  >

  /**
   * Lookup a given repository by the owner and repository name.
   *
   * ```graphql
   * repository(followRenames: Boolean = true, name: String!, owner: String!): Repository
   *
   * type Repository implements Node & PackageOwner & ProjectOwner & ProjectV2Recent & RepositoryInfo & Starrable & Subscribable & UniformResourceLocatable {
   * allowUpdateBranch: Boolean!
   * archivedAt: DateTime
   * assignableUsers(after: String, before: String, first: Int, last: Int, query: String): UserConnection!
   * autoMergeAllowed: Boolean!
   * branchProtectionRules(after: String, before: String, first: Int, last: Int): BranchProtectionRuleConnection!
   * codeOfConduct: CodeOfConduct
   * codeowners(refName: String): RepositoryCodeowners
   * collaborators(affiliation: CollaboratorAffiliation, after: String, before: String, first: Int, last: Int, login: String, query: String): RepositoryCollaboratorConnection
   * commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   * contactLinks: [RepositoryContactLink!]
   * contributingGuidelines: ContributingGuidelines
   * createdAt: DateTime!
   * databaseId: Int
   * defaultBranchRef: Ref
   * deleteBranchOnMerge: Boolean!
   * dependencyGraphManifests(after: String, before: String, dependenciesAfter: String, dependenciesFirst: Int, first: Int, last: Int, withDependencies: Boolean): DependencyGraphManifestConnection
   * deployKeys(after: String, before: String, first: Int, last: Int): DeployKeyConnection!
   * deployments(after: String, before: String, environments: [String!], first: Int, last: Int, orderBy: DeploymentOrder = {field: CREATED_AT, direction: ASC}): DeploymentConnection!
   * description: String
   * descriptionHTML: HTML!
   * discussion(number: Int!): Discussion
   * discussionCategories(after: String, before: String, filterByAssignable: Boolean = false, first: Int, last: Int): DiscussionCategoryConnection!
   * discussionCategory(slug: String!): DiscussionCategory
   * discussions(after: String, answered: Boolean = null, before: String, categoryId: ID = null, first: Int, last: Int, orderBy: DiscussionOrder = {field: UPDATED_AT, direction: DESC}, states: [DiscussionState!] = []): DiscussionConnection!
   * diskUsage: Int
   * environment(name: String!): Environment
   * environments(after: String, before: String, first: Int, last: Int, names: [String!] = [], orderBy: Environments = {field: NAME, direction: ASC}, pinnedEnvironmentFilter: EnvironmentPinnedFilterField = ALL): EnvironmentConnection!
   * forkCount: Int!
   * forkingAllowed: Boolean!
   * forks(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * fundingLinks: [FundingLink!]!
   * hasDiscussionsEnabled: Boolean!
   * hasIssuesEnabled: Boolean!
   * hasProjectsEnabled: Boolean!
   * hasSponsorshipsEnabled: Boolean!
   * hasVulnerabilityAlertsEnabled: Boolean!
   * hasWikiEnabled: Boolean!
   * homepageUrl: URI
   * id: ID!
   * interactionAbility: RepositoryInteractionAbility
   * isArchived: Boolean!
   * isBlankIssuesEnabled: Boolean!
   * isDisabled: Boolean!
   * isEmpty: Boolean!
   * isFork: Boolean!
   * isInOrganization: Boolean!
   * isLocked: Boolean!
   * isMirror: Boolean!
   * isPrivate: Boolean!
   * isSecurityPolicyEnabled: Boolean
   * isTemplate: Boolean!
   * isUserConfigurationRepository: Boolean!
   * issue(number: Int!): Issue
   * issueOrPullRequest(number: Int!): IssueOrPullRequest
   * issueTemplates: [IssueTemplate!]
   * issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   * label(name: String!): Label
   * labels(after: String, before: String, first: Int, last: Int, orderBy: LabelOrder = {field: CREATED_AT, direction: ASC}, query: String): LabelConnection
   * languages(after: String, before: String, first: Int, last: Int, orderBy: LanguageOrder): LanguageConnection
   * latestRelease: Release
   * licenseInfo: License
   * lockReason: RepositoryLockReason
   * mentionableUsers(after: String, before: String, first: Int, last: Int, query: String): UserConnection!
   * mergeCommitAllowed: Boolean!
   * mergeCommitMessage: MergeCommitMessage!
   * mergeCommitTitle: MergeCommitTitle!
   * mergeQueue(branch: String): MergeQueue
   * milestone(number: Int!): Milestone
   * milestones(after: String, before: String, first: Int, last: Int, orderBy: MilestoneOrder, query: String, states: [MilestoneState!]): MilestoneConnection
   * mirrorUrl: URI
   * name: String!
   * nameWithOwner: String!
   * object(expression: String, oid: GitObjectID): GitObject
   * openGraphImageUrl: URI!
   * owner: RepositoryOwner!
   * packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   * parent: Repository
   * pinnedDiscussions(after: String, before: String, first: Int, last: Int): PinnedDiscussionConnection!
   * pinnedEnvironments(after: String, before: String, first: Int, last: Int, orderBy: PinnedEnvironmentOrder = {field: POSITION, direction: ASC}): PinnedEnvironmentConnection
   * pinnedIssues(after: String, before: String, first: Int, last: Int): PinnedIssueConnection
   * planFeatures: RepositoryPlanFeatures!
   * primaryLanguage: Language
   * project(number: Int!): Project
   * projectV2(number: Int!): ProjectV2
   * projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   * projectsResourcePath: URI!
   * projectsUrl: URI!
   * projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   * pullRequest(number: Int!): PullRequest
   * pullRequestTemplates: [PullRequestTemplate!]
   * pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   * pushedAt: DateTime
   * rebaseMergeAllowed: Boolean!
   * recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   * ref(qualifiedName: String!): Ref
   * refs(after: String, before: String, direction: OrderDirection, first: Int, last: Int, orderBy: RefOrder, query: String, refPrefix: String!): RefConnection
   * release(tagName: String!): Release
   * releases(after: String, before: String, first: Int, last: Int, orderBy: ReleaseOrder): ReleaseConnection!
   * repositoryTopics(after: String, before: String, first: Int, last: Int): RepositoryTopicConnection!
   * resourcePath: URI!
   * ruleset(databaseId: Int!, includeParents: Boolean = true): RepositoryRuleset
   * rulesets(after: String, before: String, first: Int, includeParents: Boolean = true, last: Int, targets: [RepositoryRulesetTarget!] = null): RepositoryRulesetConnection
   * securityPolicyUrl: URI
   * shortDescriptionHTML(limit: Int = 200): HTML!
   * squashMergeAllowed: Boolean!
   * squashMergeCommitMessage: SquashMergeCommitMessage!
   * squashMergeCommitTitle: SquashMergeCommitTitle!
   * squashPrTitleUsedAsDefault: Boolean! @deprecated(reason: "`squashPrTitleUsedAsDefault` will be removed. Use `Repository.squashMergeCommitTitle` instead. Removal on 2023-04-01 UTC.")
   * sshUrl: GitSSHRemote!
   * stargazerCount: Int!
   * stargazers(after: String, before: String, first: Int, last: Int, orderBy: StarOrder): StargazerConnection!
   * submodules(after: String, before: String, first: Int, last: Int): SubmoduleConnection!
   * tempCloneToken: String
   * templateRepository: Repository
   * updatedAt: DateTime!
   * url: URI!
   * usesCustomOpenGraphImage: Boolean!
   * viewerCanAdminister: Boolean!
   * viewerCanCreateProjects: Boolean!
   * viewerCanSubscribe: Boolean!
   * viewerCanUpdateTopics: Boolean!
   * viewerDefaultCommitEmail: String
   * viewerDefaultMergeMethod: PullRequestMergeMethod!
   * viewerHasStarred: Boolean!
   * viewerPermission: RepositoryPermission
   * viewerPossibleCommitEmails: [String!]
   * viewerSubscription: SubscriptionState
   * visibility: RepositoryVisibility!
   * vulnerabilityAlert(number: Int!): RepositoryVulnerabilityAlert
   * vulnerabilityAlerts(after: String, before: String, dependencyScopes: [RepositoryVulnerabilityAlertDependencyScope!], first: Int, last: Int, states: [RepositoryVulnerabilityAlertState!]): RepositoryVulnerabilityAlertConnection
   * watchers(after: String, before: String, first: Int, last: Int): UserConnection!
   * webCommitSignoffRequired: Boolean!
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
   *
   * @example
   * ```ts
   * const doc = query.repository({
   * // $: { ...variables }
   * allowUpdateBranch: true,
   * archivedAt: true,
   * assignableUsers: true,
   * // ...
   * })
   * ```
   */
  repository: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['repository'],
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
    >,
    true
  >

  /**
   * Lookup a repository owner (ie. either a User or an Organization) by login.
   *
   * ```graphql
   * repositoryOwner(login: String!): RepositoryOwner
   *
   * interface RepositoryOwner {
   * avatarUrl(size: Int): URI!
   * id: ID!
   * login: String!
   * repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * repository(followRenames: Boolean = true, name: String!): Repository
   * resourcePath: URI!
   * url: URI!
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
   *
   * @example
   * ```ts
   * const doc = query.repositoryOwner({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  repositoryOwner: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Lookup resource by a URL.
   *
   * ```graphql
   * resource(url: URI!): UniformResourceLocatable
   *
   * interface UniformResourceLocatable {
   * resourcePath: URI!
   * url: URI!
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
   *
   * @example
   * ```ts
   * const doc = query.resource({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  resource: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['resource'],
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
    >,
    true
  >

  /**
   * Perform a search across resources, returning a maximum of 1,000 results.
   *
   * ```graphql
   * search(after: String, before: String, first: Int, last: Int, query: String!, type: SearchType!): SearchResultItemConnection!
   *
   * type SearchResultItemConnection {
   * codeCount: Int!
   * discussionCount: Int!
   * edges: [SearchResultItemEdge]
   * issueCount: Int!
   * nodes: [SearchResultItem]
   * pageInfo: PageInfo!
   * repositoryCount: Int!
   * userCount: Int!
   * wikiCount: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.search({
   * // $: { ...variables }
   * codeCount: true,
   * discussionCount: true,
   * edges: true,
   * // ...
   * })
   * ```
   */
  search: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['search'],
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
    >,
    true
  >

  /**
   * GitHub Security Advisories
   *
   * ```graphql
   * securityAdvisories(after: String, before: String, classifications: [SecurityAdvisoryClassification!], epssPercentage: Float, epssPercentile: Float, first: Int, identifier: SecurityAdvisoryIdentifierFilter, last: Int, orderBy: SecurityAdvisoryOrder = {field: UPDATED_AT, direction: DESC}, publishedSince: DateTime, updatedSince: DateTime): SecurityAdvisoryConnection!
   *
   * type SecurityAdvisoryConnection {
   * edges: [SecurityAdvisoryEdge]
   * nodes: [SecurityAdvisory]
   * pageInfo: PageInfo!
   * totalCount: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.securityAdvisories({
   * // $: { ...variables }
   * edges: true,
   * nodes: true,
   * pageInfo: true,
   * // ...
   * })
   * ```
   */
  securityAdvisories: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Fetch a Security Advisory by its GHSA ID
   *
   * ```graphql
   * securityAdvisory(ghsaId: String!): SecurityAdvisory
   *
   * type SecurityAdvisory implements Node {
   * classification: SecurityAdvisoryClassification!
   * cvss: CVSS! @deprecated(reason: "`cvss` will be removed. New `cvss_severities` field will now contain both `cvss_v3` and `cvss_v4` properties. Removal on 2025-10-01 UTC.")
   * cvssSeverities: CvssSeverities!
   * cwes(after: String, before: String, first: Int, last: Int): CWEConnection!
   * databaseId: Int
   * description: String!
   * epss: EPSS
   * ghsaId: String!
   * id: ID!
   * identifiers: [SecurityAdvisoryIdentifier!]!
   * notificationsPermalink: URI
   * origin: String!
   * permalink: URI
   * publishedAt: DateTime!
   * references: [SecurityAdvisoryReference!]!
   * severity: SecurityAdvisorySeverity!
   * summary: String!
   * updatedAt: DateTime!
   * vulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   * withdrawnAt: DateTime
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
   *
   * @example
   * ```ts
   * const doc = query.securityAdvisory({
   * // $: { ...variables }
   * classification: true,
   * cvss: true,
   * cvssSeverities: true,
   * // ...
   * })
   * ```
   */
  securityAdvisory: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Software Vulnerabilities documented by GitHub Security Advisories
   *
   * ```graphql
   * securityVulnerabilities(after: String, before: String, classifications: [SecurityAdvisoryClassification!], ecosystem: SecurityAdvisoryEcosystem, first: Int, last: Int, orderBy: SecurityVulnerabilityOrder = {field: UPDATED_AT, direction: DESC}, package: String, severities: [SecurityAdvisorySeverity!]): SecurityVulnerabilityConnection!
   *
   * type SecurityVulnerabilityConnection {
   * edges: [SecurityVulnerabilityEdge]
   * nodes: [SecurityVulnerability]
   * pageInfo: PageInfo!
   * totalCount: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.securityVulnerabilities({
   * // $: { ...variables }
   * edges: true,
   * nodes: true,
   * pageInfo: true,
   * // ...
   * })
   * ```
   */
  securityVulnerabilities: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Users and organizations who can be sponsored via GitHub Sponsors.
   *
   * ```graphql
   * sponsorables(after: String, before: String, dependencyEcosystem: SecurityAdvisoryEcosystem, ecosystem: DependencyGraphEcosystem, first: Int, last: Int, onlyDependencies: Boolean = false, orderBy: SponsorableOrder = {field: LOGIN, direction: ASC}, orgLoginForDependencies: String): SponsorableItemConnection!
   *
   * type SponsorableItemConnection {
   * edges: [SponsorableItemEdge]
   * nodes: [SponsorableItem]
   * pageInfo: PageInfo!
   * totalCount: Int!
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
   *
   * @example
   * ```ts
   * const doc = query.sponsorables({
   * // $: { ...variables }
   * edges: true,
   * nodes: true,
   * pageInfo: true,
   * // ...
   * })
   * ```
   */
  sponsorables: <
    const $SelectionSet extends SelectionSets.Query<
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
    >,
    true
  >

  /**
   * Look up a topic by name.
   *
   * ```graphql
   * topic(name: String!): Topic
   *
   * type Topic implements Node & Starrable {
   * id: ID!
   * name: String!
   * relatedTopics(first: Int = 3): [Topic!]!
   * repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, sponsorableOnly: Boolean = false, visibility: RepositoryVisibility): RepositoryConnection!
   * stargazerCount: Int!
   * stargazers(after: String, before: String, first: Int, last: Int, orderBy: StarOrder): StargazerConnection!
   * viewerHasStarred: Boolean!
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
   *
   * @example
   * ```ts
   * const doc = query.topic({
   * // $: { ...variables }
   * id: true,
   * name: true,
   * relatedTopics: true,
   * // ...
   * })
   * ```
   */
  topic: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['topic'],
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
    >,
    true
  >

  /**
   * Lookup a user by login.
   *
   * ```graphql
   * user(login: String!): User
   *
   * type User implements Actor & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   * anyPinnableItems(type: PinnableItemType): Boolean!
   * avatarUrl(size: Int): URI!
   * bio: String
   * bioHTML: HTML!
   * canReceiveOrganizationEmailsWhenNotificationsRestricted(login: String!): Boolean!
   * commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   * company: String
   * companyHTML: HTML!
   * contributionsCollection(from: DateTime, organizationID: ID, to: DateTime): ContributionsCollection!
   * copilotEndpoints: CopilotEndpoints
   * createdAt: DateTime!
   * databaseId: Int
   * email: String!
   * enterprises(after: String, before: String, first: Int, last: Int, membershipType: EnterpriseMembershipType = ALL, orderBy: EnterpriseOrder = {field: NAME, direction: ASC}): EnterpriseConnection
   * estimatedNextSponsorsPayoutInCents: Int!
   * followers(after: String, before: String, first: Int, last: Int): FollowerConnection!
   * following(after: String, before: String, first: Int, last: Int): FollowingConnection!
   * gist(name: String!): Gist
   * gistComments(after: String, before: String, first: Int, last: Int): GistCommentConnection!
   * gists(after: String, before: String, first: Int, last: Int, orderBy: GistOrder, privacy: GistPrivacy): GistConnection!
   * hasSponsorsListing: Boolean!
   * hovercard(primarySubjectId: ID): Hovercard!
   * id: ID!
   * interactionAbility: RepositoryInteractionAbility
   * isBountyHunter: Boolean!
   * isCampusExpert: Boolean!
   * isDeveloperProgramMember: Boolean!
   * isEmployee: Boolean!
   * isFollowingViewer: Boolean!
   * isGitHubStar: Boolean!
   * isHireable: Boolean!
   * isSiteAdmin: Boolean!
   * isSponsoredBy(accountLogin: String!): Boolean!
   * isSponsoringViewer: Boolean!
   * isViewer: Boolean!
   * issueComments(after: String, before: String, first: Int, last: Int, orderBy: IssueCommentOrder): IssueCommentConnection!
   * issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   * itemShowcase: ProfileItemShowcase!
   * lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   * lists(after: String, before: String, first: Int, last: Int): UserListConnection!
   * location: String
   * login: String!
   * monthlyEstimatedSponsorsIncomeInCents: Int!
   * name: String
   * organization(login: String!): Organization
   * organizationVerifiedDomainEmails(login: String!): [String!]!
   * organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = null): OrganizationConnection!
   * packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   * pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItemsRemaining: Int!
   * project(number: Int!): Project
   * projectV2(number: Int!): ProjectV2
   * projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   * projectsResourcePath: URI!
   * projectsUrl: URI!
   * projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   * pronouns: String
   * publicKeys(after: String, before: String, first: Int, last: Int): PublicKeyConnection!
   * pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   * recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   * repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * repositoriesContributedTo(after: String, before: String, contributionTypes: [RepositoryContributionType], first: Int, hasIssues: Boolean, includeUserRepositories: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, privacy: RepositoryPrivacy): RepositoryConnection!
   * repository(followRenames: Boolean = true, name: String!): Repository
   * repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   * repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   * resourcePath: URI!
   * savedReplies(after: String, before: String, first: Int, last: Int, orderBy: SavedReplyOrder = {field: UPDATED_AT, direction: DESC}): SavedReplyConnection
   * socialAccounts(after: String, before: String, first: Int, last: Int): SocialAccountConnection!
   * sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   * sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   * sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   * sponsorsListing: SponsorsListing
   * sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   * sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   * sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   * sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   * sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   * starredRepositories(after: String, before: String, first: Int, last: Int, orderBy: StarOrder, ownedByViewer: Boolean): StarredRepositoryConnection!
   * status: UserStatus
   * suggestedListNames: [UserListSuggestion!]!
   * topRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder!, since: DateTime): RepositoryConnection!
   * totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   * twitterUsername: String
   * updatedAt: DateTime!
   * url: URI!
   * userViewType: UserViewType!
   * viewerCanChangePinnedItems: Boolean!
   * viewerCanCreateProjects: Boolean!
   * viewerCanFollow: Boolean!
   * viewerCanSponsor: Boolean!
   * viewerIsFollowing: Boolean!
   * viewerIsSponsoring: Boolean!
   * watching(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * websiteUrl: URI
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
   *
   * @example
   * ```ts
   * const doc = query.user({
   * // $: { ...variables }
   * anyPinnableItems: true,
   * avatarUrl: true,
   * bio: true,
   * // ...
   * })
   * ```
   */
  user: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.DocumentBuilderKit.Select.StaticBuilderContext>['user'],
  >(
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
    >,
    true
  >

  /**
   * The currently authenticated user.
   *
   * ```graphql
   * viewer: User!
   *
   * type User implements Actor & Node & PackageOwner & ProfileOwner & ProjectOwner & ProjectV2Owner & ProjectV2Recent & RepositoryDiscussionAuthor & RepositoryDiscussionCommentAuthor & RepositoryOwner & Sponsorable & UniformResourceLocatable {
   * anyPinnableItems(type: PinnableItemType): Boolean!
   * avatarUrl(size: Int): URI!
   * bio: String
   * bioHTML: HTML!
   * canReceiveOrganizationEmailsWhenNotificationsRestricted(login: String!): Boolean!
   * commitComments(after: String, before: String, first: Int, last: Int): CommitCommentConnection!
   * company: String
   * companyHTML: HTML!
   * contributionsCollection(from: DateTime, organizationID: ID, to: DateTime): ContributionsCollection!
   * copilotEndpoints: CopilotEndpoints
   * createdAt: DateTime!
   * databaseId: Int
   * email: String!
   * enterprises(after: String, before: String, first: Int, last: Int, membershipType: EnterpriseMembershipType = ALL, orderBy: EnterpriseOrder = {field: NAME, direction: ASC}): EnterpriseConnection
   * estimatedNextSponsorsPayoutInCents: Int!
   * followers(after: String, before: String, first: Int, last: Int): FollowerConnection!
   * following(after: String, before: String, first: Int, last: Int): FollowingConnection!
   * gist(name: String!): Gist
   * gistComments(after: String, before: String, first: Int, last: Int): GistCommentConnection!
   * gists(after: String, before: String, first: Int, last: Int, orderBy: GistOrder, privacy: GistPrivacy): GistConnection!
   * hasSponsorsListing: Boolean!
   * hovercard(primarySubjectId: ID): Hovercard!
   * id: ID!
   * interactionAbility: RepositoryInteractionAbility
   * isBountyHunter: Boolean!
   * isCampusExpert: Boolean!
   * isDeveloperProgramMember: Boolean!
   * isEmployee: Boolean!
   * isFollowingViewer: Boolean!
   * isGitHubStar: Boolean!
   * isHireable: Boolean!
   * isSiteAdmin: Boolean!
   * isSponsoredBy(accountLogin: String!): Boolean!
   * isSponsoringViewer: Boolean!
   * isViewer: Boolean!
   * issueComments(after: String, before: String, first: Int, last: Int, orderBy: IssueCommentOrder): IssueCommentConnection!
   * issues(after: String, before: String, filterBy: IssueFilters, first: Int, labels: [String!], last: Int, orderBy: IssueOrder, states: [IssueState!]): IssueConnection!
   * itemShowcase: ProfileItemShowcase!
   * lifetimeReceivedSponsorshipValues(after: String, before: String, first: Int, last: Int, orderBy: SponsorAndLifetimeValueOrder = {field: SPONSOR_LOGIN, direction: ASC}): SponsorAndLifetimeValueConnection!
   * lists(after: String, before: String, first: Int, last: Int): UserListConnection!
   * location: String
   * login: String!
   * monthlyEstimatedSponsorsIncomeInCents: Int!
   * name: String
   * organization(login: String!): Organization
   * organizationVerifiedDomainEmails(login: String!): [String!]!
   * organizations(after: String, before: String, first: Int, last: Int, orderBy: OrganizationOrder = null): OrganizationConnection!
   * packages(after: String, before: String, first: Int, last: Int, names: [String], orderBy: PackageOrder = {field: CREATED_AT, direction: DESC}, packageType: PackageType, repositoryId: ID): PackageConnection!
   * pinnableItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItems(after: String, before: String, first: Int, last: Int, types: [PinnableItemType!]): PinnableItemConnection!
   * pinnedItemsRemaining: Int!
   * project(number: Int!): Project
   * projectV2(number: Int!): ProjectV2
   * projects(after: String, before: String, first: Int, last: Int, orderBy: ProjectOrder, search: String, states: [ProjectState!]): ProjectConnection!
   * projectsResourcePath: URI!
   * projectsUrl: URI!
   * projectsV2(after: String, before: String, first: Int, last: Int, minPermissionLevel: ProjectV2PermissionLevel = READ, orderBy: ProjectV2Order = {field: NUMBER, direction: DESC}, query: String): ProjectV2Connection!
   * pronouns: String
   * publicKeys(after: String, before: String, first: Int, last: Int): PublicKeyConnection!
   * pullRequests(after: String, baseRefName: String, before: String, first: Int, headRefName: String, labels: [String!], last: Int, orderBy: IssueOrder, states: [PullRequestState!]): PullRequestConnection!
   * recentProjects(after: String, before: String, first: Int, last: Int): ProjectV2Connection!
   * repositories(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isArchived: Boolean, isFork: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * repositoriesContributedTo(after: String, before: String, contributionTypes: [RepositoryContributionType], first: Int, hasIssues: Boolean, includeUserRepositories: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, privacy: RepositoryPrivacy): RepositoryConnection!
   * repository(followRenames: Boolean = true, name: String!): Repository
   * repositoryDiscussionComments(after: String, before: String, first: Int, last: Int, onlyAnswers: Boolean = false, repositoryId: ID): DiscussionCommentConnection!
   * repositoryDiscussions(after: String, answered: Boolean = null, before: String, first: Int, last: Int, orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}, repositoryId: ID, states: [DiscussionState!] = []): DiscussionConnection!
   * resourcePath: URI!
   * savedReplies(after: String, before: String, first: Int, last: Int, orderBy: SavedReplyOrder = {field: UPDATED_AT, direction: DESC}): SavedReplyConnection
   * socialAccounts(after: String, before: String, first: Int, last: Int): SocialAccountConnection!
   * sponsoring(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}): SponsorConnection!
   * sponsors(after: String, before: String, first: Int, last: Int, orderBy: SponsorOrder = {field: RELEVANCE, direction: DESC}, tierId: ID): SponsorConnection!
   * sponsorsActivities(actions: [SponsorsActivityAction!] = [], after: String, before: String, first: Int, includeAsSponsor: Boolean = false, includePrivate: Boolean = true, last: Int, orderBy: SponsorsActivityOrder = {field: TIMESTAMP, direction: DESC}, period: SponsorsActivityPeriod = MONTH, since: DateTime, until: DateTime): SponsorsActivityConnection!
   * sponsorsListing: SponsorsListing
   * sponsorshipForViewerAsSponsor(activeOnly: Boolean = true): Sponsorship
   * sponsorshipForViewerAsSponsorable(activeOnly: Boolean = true): Sponsorship
   * sponsorshipNewsletters(after: String, before: String, first: Int, last: Int, orderBy: SponsorshipNewsletterOrder = {field: CREATED_AT, direction: DESC}): SponsorshipNewsletterConnection!
   * sponsorshipsAsMaintainer(activeOnly: Boolean = true, after: String, before: String, first: Int, includePrivate: Boolean = false, last: Int, orderBy: SponsorshipOrder): SponsorshipConnection!
   * sponsorshipsAsSponsor(activeOnly: Boolean = true, after: String, before: String, first: Int, last: Int, maintainerLogins: [String!], orderBy: SponsorshipOrder): SponsorshipConnection!
   * starredRepositories(after: String, before: String, first: Int, last: Int, orderBy: StarOrder, ownedByViewer: Boolean): StarredRepositoryConnection!
   * status: UserStatus
   * suggestedListNames: [UserListSuggestion!]!
   * topRepositories(after: String, before: String, first: Int, last: Int, orderBy: RepositoryOrder!, since: DateTime): RepositoryConnection!
   * totalSponsorshipAmountAsSponsorInCents(since: DateTime, sponsorableLogins: [String!] = [], until: DateTime): Int
   * twitterUsername: String
   * updatedAt: DateTime!
   * url: URI!
   * userViewType: UserViewType!
   * viewerCanChangePinnedItems: Boolean!
   * viewerCanCreateProjects: Boolean!
   * viewerCanFollow: Boolean!
   * viewerCanSponsor: Boolean!
   * viewerIsFollowing: Boolean!
   * viewerIsSponsoring: Boolean!
   * watching(affiliations: [RepositoryAffiliation], after: String, before: String, first: Int, hasIssuesEnabled: Boolean, isLocked: Boolean, last: Int, orderBy: RepositoryOrder, ownerAffiliations: [RepositoryAffiliation] = [OWNER, COLLABORATOR], privacy: RepositoryPrivacy, visibility: RepositoryVisibility): RepositoryConnection!
   * websiteUrl: URI
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
   *
   * @example
   * ```ts
   * const doc = query.viewer({
   * anyPinnableItems: true,
   * avatarUrl: true,
   * bio: true,
   * // ...
   * })
   * ```
   */
  viewer: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['viewer'],
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
    >,
    true
  >
}
/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query: QueryBuilder = createStaticRootType(OperationTypeNode.QUERY, { sddm }) as any

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
// Note: This interface conforms to StaticDocumentBuilder<DocumentConfig, OperationTypeNode.MUTATION>
export interface MutationBuilder {
  /**
   * Clear all of a customer's queued migrations
   *
   * ```graphql
   * abortQueuedMigrations(input: AbortQueuedMigrationsInput!): AbortQueuedMigrationsPayload
   *
   * type AbortQueuedMigrationsPayload {
   * clientMutationId: String
   * success: Boolean
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
   *
   * @example
   * ```ts
   * const doc = mutation.abortQueuedMigrations({
   * // $: { ...variables }
   * clientMutationId: true,
   * success: true
   * })
   * ```
   */
  abortQueuedMigrations: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Abort a repository migration queued or in progress.
   *
   * ```graphql
   * abortRepositoryMigration(input: AbortRepositoryMigrationInput!): AbortRepositoryMigrationPayload
   *
   * type AbortRepositoryMigrationPayload {
   * clientMutationId: String
   * success: Boolean
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
   *
   * @example
   * ```ts
   * const doc = mutation.abortRepositoryMigration({
   * // $: { ...variables }
   * clientMutationId: true,
   * success: true
   * })
   * ```
   */
  abortRepositoryMigration: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Accepts a pending invitation for a user to become an administrator of an enterprise.
   *
   * ```graphql
   * acceptEnterpriseAdministratorInvitation(input: AcceptEnterpriseAdministratorInvitationInput!): AcceptEnterpriseAdministratorInvitationPayload
   *
   * type AcceptEnterpriseAdministratorInvitationPayload {
   * clientMutationId: String
   * invitation: EnterpriseAdministratorInvitation
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.acceptEnterpriseAdministratorInvitation({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true,
   * message: true
   * })
   * ```
   */
  acceptEnterpriseAdministratorInvitation: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Accepts a pending invitation for a user to become an unaffiliated member of an enterprise.
   *
   * ```graphql
   * acceptEnterpriseMemberInvitation(input: AcceptEnterpriseMemberInvitationInput!): AcceptEnterpriseMemberInvitationPayload
   *
   * type AcceptEnterpriseMemberInvitationPayload {
   * clientMutationId: String
   * invitation: EnterpriseMemberInvitation
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.acceptEnterpriseMemberInvitation({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true,
   * message: true
   * })
   * ```
   */
  acceptEnterpriseMemberInvitation: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Applies a suggested topic to the repository.
   *
   * ```graphql
   * acceptTopicSuggestion(input: AcceptTopicSuggestionInput!): AcceptTopicSuggestionPayload
   *
   * type AcceptTopicSuggestionPayload {
   * clientMutationId: String
   * topic: Topic @deprecated(reason: "Suggested topics are no longer supported Removal on 2024-04-01 UTC.")
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
   *
   * @example
   * ```ts
   * const doc = mutation.acceptTopicSuggestion({
   * // $: { ...variables }
   * clientMutationId: true,
   * topic: true
   * })
   * ```
   */
  acceptTopicSuggestion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Access user namespace repository for a temporary duration.
   *
   * ```graphql
   * accessUserNamespaceRepository(input: AccessUserNamespaceRepositoryInput!): AccessUserNamespaceRepositoryPayload
   *
   * type AccessUserNamespaceRepositoryPayload {
   * clientMutationId: String
   * expiresAt: DateTime
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.accessUserNamespaceRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * expiresAt: true,
   * repository: true
   * })
   * ```
   */
  accessUserNamespaceRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds assignees to an assignable object.
   *
   * ```graphql
   * addAssigneesToAssignable(input: AddAssigneesToAssignableInput!): AddAssigneesToAssignablePayload
   *
   * type AddAssigneesToAssignablePayload {
   * assignable: Assignable
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.addAssigneesToAssignable({
   * // $: { ...variables }
   * assignable: true,
   * clientMutationId: true
   * })
   * ```
   */
  addAssigneesToAssignable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a comment to an Issue or Pull Request.
   *
   * ```graphql
   * addComment(input: AddCommentInput!): AddCommentPayload
   *
   * type AddCommentPayload {
   * clientMutationId: String
   * commentEdge: IssueCommentEdge
   * subject: Node
   * timelineEdge: IssueTimelineItemEdge
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
   *
   * @example
   * ```ts
   * const doc = mutation.addComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * commentEdge: true,
   * subject: true,
   * // ...
   * })
   * ```
   */
  addComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a comment to a Discussion, possibly as a reply to another comment.
   *
   * ```graphql
   * addDiscussionComment(input: AddDiscussionCommentInput!): AddDiscussionCommentPayload
   *
   * type AddDiscussionCommentPayload {
   * clientMutationId: String
   * comment: DiscussionComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.addDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * comment: true
   * })
   * ```
   */
  addDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Vote for an option in a discussion poll.
   *
   * ```graphql
   * addDiscussionPollVote(input: AddDiscussionPollVoteInput!): AddDiscussionPollVotePayload
   *
   * type AddDiscussionPollVotePayload {
   * clientMutationId: String
   * pollOption: DiscussionPollOption
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
   *
   * @example
   * ```ts
   * const doc = mutation.addDiscussionPollVote({
   * // $: { ...variables }
   * clientMutationId: true,
   * pollOption: true
   * })
   * ```
   */
  addDiscussionPollVote: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds enterprise members to an organization within the enterprise.
   *
   * ```graphql
   * addEnterpriseOrganizationMember(input: AddEnterpriseOrganizationMemberInput!): AddEnterpriseOrganizationMemberPayload
   *
   * type AddEnterpriseOrganizationMemberPayload {
   * clientMutationId: String
   * users: [User!]
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
   *
   * @example
   * ```ts
   * const doc = mutation.addEnterpriseOrganizationMember({
   * // $: { ...variables }
   * clientMutationId: true,
   * users: true
   * })
   * ```
   */
  addEnterpriseOrganizationMember: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a support entitlement to an enterprise member.
   *
   * ```graphql
   * addEnterpriseSupportEntitlement(input: AddEnterpriseSupportEntitlementInput!): AddEnterpriseSupportEntitlementPayload
   *
   * type AddEnterpriseSupportEntitlementPayload {
   * clientMutationId: String
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.addEnterpriseSupportEntitlement({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true
   * })
   * ```
   */
  addEnterpriseSupportEntitlement: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds labels to a labelable object.
   *
   * ```graphql
   * addLabelsToLabelable(input: AddLabelsToLabelableInput!): AddLabelsToLabelablePayload
   *
   * type AddLabelsToLabelablePayload {
   * clientMutationId: String
   * labelable: Labelable
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
   *
   * @example
   * ```ts
   * const doc = mutation.addLabelsToLabelable({
   * // $: { ...variables }
   * clientMutationId: true,
   * labelable: true
   * })
   * ```
   */
  addLabelsToLabelable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.
   *
   * ```graphql
   * addProjectCard(input: AddProjectCardInput!): AddProjectCardPayload
   *
   * type AddProjectCardPayload {
   * cardEdge: ProjectCardEdge
   * clientMutationId: String
   * projectColumn: ProjectColumn
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
   *
   * @example
   * ```ts
   * const doc = mutation.addProjectCard({
   * // $: { ...variables }
   * cardEdge: true,
   * clientMutationId: true,
   * projectColumn: true
   * })
   * ```
   */
  addProjectCard: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a column to a Project.
   *
   * ```graphql
   * addProjectColumn(input: AddProjectColumnInput!): AddProjectColumnPayload
   *
   * type AddProjectColumnPayload {
   * clientMutationId: String
   * columnEdge: ProjectColumnEdge
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.addProjectColumn({
   * // $: { ...variables }
   * clientMutationId: true,
   * columnEdge: true,
   * project: true
   * })
   * ```
   */
  addProjectColumn: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new draft issue and add it to a Project.
   *
   * ```graphql
   * addProjectV2DraftIssue(input: AddProjectV2DraftIssueInput!): AddProjectV2DraftIssuePayload
   *
   * type AddProjectV2DraftIssuePayload {
   * clientMutationId: String
   * projectItem: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.addProjectV2DraftIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectItem: true
   * })
   * ```
   */
  addProjectV2DraftIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Links an existing content instance to a Project.
   *
   * ```graphql
   * addProjectV2ItemById(input: AddProjectV2ItemByIdInput!): AddProjectV2ItemByIdPayload
   *
   * type AddProjectV2ItemByIdPayload {
   * clientMutationId: String
   * item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.addProjectV2ItemById({
   * // $: { ...variables }
   * clientMutationId: true,
   * item: true
   * })
   * ```
   */
  addProjectV2ItemById: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a review to a Pull Request.
   *
   * ```graphql
   * addPullRequestReview(input: AddPullRequestReviewInput!): AddPullRequestReviewPayload
   *
   * type AddPullRequestReviewPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
   * reviewEdge: PullRequestReviewEdge
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
   *
   * @example
   * ```ts
   * const doc = mutation.addPullRequestReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true,
   * reviewEdge: true
   * })
   * ```
   */
  addPullRequestReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a comment to a review.
   *
   * ```graphql
   * addPullRequestReviewComment(input: AddPullRequestReviewCommentInput!): AddPullRequestReviewCommentPayload
   *
   * type AddPullRequestReviewCommentPayload {
   * clientMutationId: String
   * comment: PullRequestReviewComment
   * commentEdge: PullRequestReviewCommentEdge
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
   *
   * @example
   * ```ts
   * const doc = mutation.addPullRequestReviewComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * comment: true,
   * commentEdge: true
   * })
   * ```
   */
  addPullRequestReviewComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a new thread to a pending Pull Request Review.
   *
   * ```graphql
   * addPullRequestReviewThread(input: AddPullRequestReviewThreadInput!): AddPullRequestReviewThreadPayload
   *
   * type AddPullRequestReviewThreadPayload {
   * clientMutationId: String
   * thread: PullRequestReviewThread
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
   *
   * @example
   * ```ts
   * const doc = mutation.addPullRequestReviewThread({
   * // $: { ...variables }
   * clientMutationId: true,
   * thread: true
   * })
   * ```
   */
  addPullRequestReviewThread: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a reply to an existing Pull Request Review Thread.
   *
   * ```graphql
   * addPullRequestReviewThreadReply(input: AddPullRequestReviewThreadReplyInput!): AddPullRequestReviewThreadReplyPayload
   *
   * type AddPullRequestReviewThreadReplyPayload {
   * clientMutationId: String
   * comment: PullRequestReviewComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.addPullRequestReviewThreadReply({
   * // $: { ...variables }
   * clientMutationId: true,
   * comment: true
   * })
   * ```
   */
  addPullRequestReviewThreadReply: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a reaction to a subject.
   *
   * ```graphql
   * addReaction(input: AddReactionInput!): AddReactionPayload
   *
   * type AddReactionPayload {
   * clientMutationId: String
   * reaction: Reaction
   * reactionGroups: [ReactionGroup!]
   * subject: Reactable
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
   *
   * @example
   * ```ts
   * const doc = mutation.addReaction({
   * // $: { ...variables }
   * clientMutationId: true,
   * reaction: true,
   * reactionGroups: true,
   * // ...
   * })
   * ```
   */
  addReaction: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a star to a Starrable.
   *
   * ```graphql
   * addStar(input: AddStarInput!): AddStarPayload
   *
   * type AddStarPayload {
   * clientMutationId: String
   * starrable: Starrable
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
   *
   * @example
   * ```ts
   * const doc = mutation.addStar({
   * // $: { ...variables }
   * clientMutationId: true,
   * starrable: true
   * })
   * ```
   */
  addStar: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.DocumentBuilderKit.Select.StaticBuilderContext
    >['addStar'],
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
    >,
    true
  >

  /**
   * Adds a sub-issue to a given issue
   *
   * ```graphql
   * addSubIssue(input: AddSubIssueInput!): AddSubIssuePayload
   *
   * type AddSubIssuePayload {
   * clientMutationId: String
   * issue: Issue
   * subIssue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.addSubIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true,
   * subIssue: true
   * })
   * ```
   */
  addSubIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Add an upvote to a discussion or discussion comment.
   *
   * ```graphql
   * addUpvote(input: AddUpvoteInput!): AddUpvotePayload
   *
   * type AddUpvotePayload {
   * clientMutationId: String
   * subject: Votable
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
   *
   * @example
   * ```ts
   * const doc = mutation.addUpvote({
   * // $: { ...variables }
   * clientMutationId: true,
   * subject: true
   * })
   * ```
   */
  addUpvote: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Adds a verifiable domain to an owning account.
   *
   * ```graphql
   * addVerifiableDomain(input: AddVerifiableDomainInput!): AddVerifiableDomainPayload
   *
   * type AddVerifiableDomainPayload {
   * clientMutationId: String
   * domain: VerifiableDomain
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
   *
   * @example
   * ```ts
   * const doc = mutation.addVerifiableDomain({
   * // $: { ...variables }
   * clientMutationId: true,
   * domain: true
   * })
   * ```
   */
  addVerifiableDomain: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Approve all pending deployments under one or more environments
   *
   * ```graphql
   * approveDeployments(input: ApproveDeploymentsInput!): ApproveDeploymentsPayload
   *
   * type ApproveDeploymentsPayload {
   * clientMutationId: String
   * deployments: [Deployment!]
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
   *
   * @example
   * ```ts
   * const doc = mutation.approveDeployments({
   * // $: { ...variables }
   * clientMutationId: true,
   * deployments: true
   * })
   * ```
   */
  approveDeployments: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Approve a verifiable domain for notification delivery.
   *
   * ```graphql
   * approveVerifiableDomain(input: ApproveVerifiableDomainInput!): ApproveVerifiableDomainPayload
   *
   * type ApproveVerifiableDomainPayload {
   * clientMutationId: String
   * domain: VerifiableDomain
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
   *
   * @example
   * ```ts
   * const doc = mutation.approveVerifiableDomain({
   * // $: { ...variables }
   * clientMutationId: true,
   * domain: true
   * })
   * ```
   */
  approveVerifiableDomain: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Archives a ProjectV2Item
   *
   * ```graphql
   * archiveProjectV2Item(input: ArchiveProjectV2ItemInput!): ArchiveProjectV2ItemPayload
   *
   * type ArchiveProjectV2ItemPayload {
   * clientMutationId: String
   * item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.archiveProjectV2Item({
   * // $: { ...variables }
   * clientMutationId: true,
   * item: true
   * })
   * ```
   */
  archiveProjectV2Item: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Marks a repository as archived.
   *
   * ```graphql
   * archiveRepository(input: ArchiveRepositoryInput!): ArchiveRepositoryPayload
   *
   * type ArchiveRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.archiveRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  archiveRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Cancels a pending invitation for an administrator to join an enterprise.
   *
   * ```graphql
   * cancelEnterpriseAdminInvitation(input: CancelEnterpriseAdminInvitationInput!): CancelEnterpriseAdminInvitationPayload
   *
   * type CancelEnterpriseAdminInvitationPayload {
   * clientMutationId: String
   * invitation: EnterpriseAdministratorInvitation
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.cancelEnterpriseAdminInvitation({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true,
   * message: true
   * })
   * ```
   */
  cancelEnterpriseAdminInvitation: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Cancels a pending invitation for an unaffiliated member to join an enterprise.
   *
   * ```graphql
   * cancelEnterpriseMemberInvitation(input: CancelEnterpriseMemberInvitationInput!): CancelEnterpriseMemberInvitationPayload
   *
   * type CancelEnterpriseMemberInvitationPayload {
   * clientMutationId: String
   * invitation: EnterpriseMemberInvitation
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.cancelEnterpriseMemberInvitation({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true,
   * message: true
   * })
   * ```
   */
  cancelEnterpriseMemberInvitation: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Cancel an active sponsorship.
   *
   * ```graphql
   * cancelSponsorship(input: CancelSponsorshipInput!): CancelSponsorshipPayload
   *
   * type CancelSponsorshipPayload {
   * clientMutationId: String
   * sponsorsTier: SponsorsTier
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
   *
   * @example
   * ```ts
   * const doc = mutation.cancelSponsorship({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsTier: true
   * })
   * ```
   */
  cancelSponsorship: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update your status on GitHub.
   *
   * ```graphql
   * changeUserStatus(input: ChangeUserStatusInput!): ChangeUserStatusPayload
   *
   * type ChangeUserStatusPayload {
   * clientMutationId: String
   * status: UserStatus
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
   *
   * @example
   * ```ts
   * const doc = mutation.changeUserStatus({
   * // $: { ...variables }
   * clientMutationId: true,
   * status: true
   * })
   * ```
   */
  changeUserStatus: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Clears all labels from a labelable object.
   *
   * ```graphql
   * clearLabelsFromLabelable(input: ClearLabelsFromLabelableInput!): ClearLabelsFromLabelablePayload
   *
   * type ClearLabelsFromLabelablePayload {
   * clientMutationId: String
   * labelable: Labelable
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
   *
   * @example
   * ```ts
   * const doc = mutation.clearLabelsFromLabelable({
   * // $: { ...variables }
   * clientMutationId: true,
   * labelable: true
   * })
   * ```
   */
  clearLabelsFromLabelable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
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
   * clientMutationId: String
   * projectV2Item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.clearProjectV2ItemFieldValue({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2Item: true
   * })
   * ```
   */
  clearProjectV2ItemFieldValue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new project by cloning configuration from an existing project.
   *
   * ```graphql
   * cloneProject(input: CloneProjectInput!): CloneProjectPayload
   *
   * type CloneProjectPayload {
   * clientMutationId: String
   * jobStatusId: String
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.cloneProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * jobStatusId: true,
   * project: true
   * })
   * ```
   */
  cloneProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new repository with the same files and directory structure as a template repository.
   *
   * ```graphql
   * cloneTemplateRepository(input: CloneTemplateRepositoryInput!): CloneTemplateRepositoryPayload
   *
   * type CloneTemplateRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.cloneTemplateRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  cloneTemplateRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Close a discussion.
   *
   * ```graphql
   * closeDiscussion(input: CloseDiscussionInput!): CloseDiscussionPayload
   *
   * type CloseDiscussionPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.closeDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  closeDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Close an issue.
   *
   * ```graphql
   * closeIssue(input: CloseIssueInput!): CloseIssuePayload
   *
   * type CloseIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.closeIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  closeIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Close a pull request.
   *
   * ```graphql
   * closePullRequest(input: ClosePullRequestInput!): ClosePullRequestPayload
   *
   * type ClosePullRequestPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.closePullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  closePullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Convert a project note card to one associated with a newly created issue.
   *
   * ```graphql
   * convertProjectCardNoteToIssue(input: ConvertProjectCardNoteToIssueInput!): ConvertProjectCardNoteToIssuePayload
   *
   * type ConvertProjectCardNoteToIssuePayload {
   * clientMutationId: String
   * projectCard: ProjectCard
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
   *
   * @example
   * ```ts
   * const doc = mutation.convertProjectCardNoteToIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectCard: true
   * })
   * ```
   */
  convertProjectCardNoteToIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Converts a projectV2 draft issue item to an issue.
   *
   * ```graphql
   * convertProjectV2DraftIssueItemToIssue(input: ConvertProjectV2DraftIssueItemToIssueInput!): ConvertProjectV2DraftIssueItemToIssuePayload
   *
   * type ConvertProjectV2DraftIssueItemToIssuePayload {
   * clientMutationId: String
   * item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.convertProjectV2DraftIssueItemToIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * item: true
   * })
   * ```
   */
  convertProjectV2DraftIssueItemToIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Converts a pull request to draft
   *
   * ```graphql
   * convertPullRequestToDraft(input: ConvertPullRequestToDraftInput!): ConvertPullRequestToDraftPayload
   *
   * type ConvertPullRequestToDraftPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.convertPullRequestToDraft({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  convertPullRequestToDraft: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Copy a project.
   *
   * ```graphql
   * copyProjectV2(input: CopyProjectV2Input!): CopyProjectV2Payload
   *
   * type CopyProjectV2Payload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.copyProjectV2({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  copyProjectV2: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Invites a user to claim reattributable data
   *
   * ```graphql
   * createAttributionInvitation(input: CreateAttributionInvitationInput!): CreateAttributionInvitationPayload
   *
   * type CreateAttributionInvitationPayload {
   * clientMutationId: String
   * owner: Organization
   * source: Claimable
   * target: Claimable
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
   *
   * @example
   * ```ts
   * const doc = mutation.createAttributionInvitation({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true,
   * source: true,
   * // ...
   * })
   * ```
   */
  createAttributionInvitation: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new branch protection rule
   *
   * ```graphql
   * createBranchProtectionRule(input: CreateBranchProtectionRuleInput!): CreateBranchProtectionRulePayload
   *
   * type CreateBranchProtectionRulePayload {
   * branchProtectionRule: BranchProtectionRule
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.createBranchProtectionRule({
   * // $: { ...variables }
   * branchProtectionRule: true,
   * clientMutationId: true
   * })
   * ```
   */
  createBranchProtectionRule: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a check run.
   *
   * ```graphql
   * createCheckRun(input: CreateCheckRunInput!): CreateCheckRunPayload
   *
   * type CreateCheckRunPayload {
   * checkRun: CheckRun
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.createCheckRun({
   * // $: { ...variables }
   * checkRun: true,
   * clientMutationId: true
   * })
   * ```
   */
  createCheckRun: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a check suite
   *
   * ```graphql
   * createCheckSuite(input: CreateCheckSuiteInput!): CreateCheckSuitePayload
   *
   * type CreateCheckSuitePayload {
   * checkSuite: CheckSuite
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.createCheckSuite({
   * // $: { ...variables }
   * checkSuite: true,
   * clientMutationId: true
   * })
   * ```
   */
  createCheckSuite: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
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
   * clientMutationId: String
   * commit: Commit
   * ref: Ref
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
   *
   * @example
   * ```ts
   * const doc = mutation.createCommitOnBranch({
   * // $: { ...variables }
   * clientMutationId: true,
   * commit: true,
   * ref: true
   * })
   * ```
   */
  createCommitOnBranch: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new deployment event.
   *
   * ```graphql
   * createDeployment(input: CreateDeploymentInput!): CreateDeploymentPayload
   *
   * type CreateDeploymentPayload {
   * autoMerged: Boolean
   * clientMutationId: String
   * deployment: Deployment
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
   *
   * @example
   * ```ts
   * const doc = mutation.createDeployment({
   * // $: { ...variables }
   * autoMerged: true,
   * clientMutationId: true,
   * deployment: true
   * })
   * ```
   */
  createDeployment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a deployment status.
   *
   * ```graphql
   * createDeploymentStatus(input: CreateDeploymentStatusInput!): CreateDeploymentStatusPayload
   *
   * type CreateDeploymentStatusPayload {
   * clientMutationId: String
   * deploymentStatus: DeploymentStatus
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
   *
   * @example
   * ```ts
   * const doc = mutation.createDeploymentStatus({
   * // $: { ...variables }
   * clientMutationId: true,
   * deploymentStatus: true
   * })
   * ```
   */
  createDeploymentStatus: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a discussion.
   *
   * ```graphql
   * createDiscussion(input: CreateDiscussionInput!): CreateDiscussionPayload
   *
   * type CreateDiscussionPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.createDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  createDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
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
   * clientMutationId: String
   * enterprise: Enterprise
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.createEnterpriseOrganization({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * organization: true
   * })
   * ```
   */
  createEnterpriseOrganization: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates an environment or simply returns it if already exists.
   *
   * ```graphql
   * createEnvironment(input: CreateEnvironmentInput!): CreateEnvironmentPayload
   *
   * type CreateEnvironmentPayload {
   * clientMutationId: String
   * environment: Environment
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
   *
   * @example
   * ```ts
   * const doc = mutation.createEnvironment({
   * // $: { ...variables }
   * clientMutationId: true,
   * environment: true
   * })
   * ```
   */
  createEnvironment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new IP allow list entry.
   *
   * ```graphql
   * createIpAllowListEntry(input: CreateIpAllowListEntryInput!): CreateIpAllowListEntryPayload
   *
   * type CreateIpAllowListEntryPayload {
   * clientMutationId: String
   * ipAllowListEntry: IpAllowListEntry
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
   *
   * @example
   * ```ts
   * const doc = mutation.createIpAllowListEntry({
   * // $: { ...variables }
   * clientMutationId: true,
   * ipAllowListEntry: true
   * })
   * ```
   */
  createIpAllowListEntry: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new issue.
   *
   * ```graphql
   * createIssue(input: CreateIssueInput!): CreateIssuePayload
   *
   * type CreateIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.createIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  createIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new label.
   *
   * ```graphql
   * createLabel(input: CreateLabelInput!): CreateLabelPayload
   *
   * type CreateLabelPayload {
   * clientMutationId: String
   * label: Label
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
   *
   * @example
   * ```ts
   * const doc = mutation.createLabel({
   * // $: { ...variables }
   * clientMutationId: true,
   * label: true
   * })
   * ```
   */
  createLabel: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a branch linked to an issue.
   *
   * ```graphql
   * createLinkedBranch(input: CreateLinkedBranchInput!): CreateLinkedBranchPayload
   *
   * type CreateLinkedBranchPayload {
   * clientMutationId: String
   * issue: Issue
   * linkedBranch: LinkedBranch
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
   *
   * @example
   * ```ts
   * const doc = mutation.createLinkedBranch({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true,
   * linkedBranch: true
   * })
   * ```
   */
  createLinkedBranch: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a GitHub Enterprise Importer (GEI) migration source.
   *
   * ```graphql
   * createMigrationSource(input: CreateMigrationSourceInput!): CreateMigrationSourcePayload
   *
   * type CreateMigrationSourcePayload {
   * clientMutationId: String
   * migrationSource: MigrationSource
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
   *
   * @example
   * ```ts
   * const doc = mutation.createMigrationSource({
   * // $: { ...variables }
   * clientMutationId: true,
   * migrationSource: true
   * })
   * ```
   */
  createMigrationSource: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new project.
   *
   * ```graphql
   * createProject(input: CreateProjectInput!): CreateProjectPayload
   *
   * type CreateProjectPayload {
   * clientMutationId: String
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.createProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * project: true
   * })
   * ```
   */
  createProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new project.
   *
   * ```graphql
   * createProjectV2(input: CreateProjectV2Input!): CreateProjectV2Payload
   *
   * type CreateProjectV2Payload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.createProjectV2({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  createProjectV2: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new project field.
   *
   * ```graphql
   * createProjectV2Field(input: CreateProjectV2FieldInput!): CreateProjectV2FieldPayload
   *
   * type CreateProjectV2FieldPayload {
   * clientMutationId: String
   * projectV2Field: ProjectV2FieldConfiguration
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
   *
   * @example
   * ```ts
   * const doc = mutation.createProjectV2Field({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2Field: true
   * })
   * ```
   */
  createProjectV2Field: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a status update within a Project.
   *
   * ```graphql
   * createProjectV2StatusUpdate(input: CreateProjectV2StatusUpdateInput!): CreateProjectV2StatusUpdatePayload
   *
   * type CreateProjectV2StatusUpdatePayload {
   * clientMutationId: String
   * statusUpdate: ProjectV2StatusUpdate
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
   *
   * @example
   * ```ts
   * const doc = mutation.createProjectV2StatusUpdate({
   * // $: { ...variables }
   * clientMutationId: true,
   * statusUpdate: true
   * })
   * ```
   */
  createProjectV2StatusUpdate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new pull request
   *
   * ```graphql
   * createPullRequest(input: CreatePullRequestInput!): CreatePullRequestPayload
   *
   * type CreatePullRequestPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.createPullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  createPullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new Git Ref.
   *
   * ```graphql
   * createRef(input: CreateRefInput!): CreateRefPayload
   *
   * type CreateRefPayload {
   * clientMutationId: String
   * ref: Ref
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
   *
   * @example
   * ```ts
   * const doc = mutation.createRef({
   * // $: { ...variables }
   * clientMutationId: true,
   * ref: true
   * })
   * ```
   */
  createRef: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new repository.
   *
   * ```graphql
   * createRepository(input: CreateRepositoryInput!): CreateRepositoryPayload
   *
   * type CreateRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.createRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  createRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a repository ruleset
   *
   * ```graphql
   * createRepositoryRuleset(input: CreateRepositoryRulesetInput!): CreateRepositoryRulesetPayload
   *
   * type CreateRepositoryRulesetPayload {
   * clientMutationId: String
   * ruleset: RepositoryRuleset
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
   *
   * @example
   * ```ts
   * const doc = mutation.createRepositoryRuleset({
   * // $: { ...variables }
   * clientMutationId: true,
   * ruleset: true
   * })
   * ```
   */
  createRepositoryRuleset: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a GitHub Sponsors profile to allow others to sponsor you or your organization.
   *
   * ```graphql
   * createSponsorsListing(input: CreateSponsorsListingInput!): CreateSponsorsListingPayload
   *
   * type CreateSponsorsListingPayload {
   * clientMutationId: String
   * sponsorsListing: SponsorsListing
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
   *
   * @example
   * ```ts
   * const doc = mutation.createSponsorsListing({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsListing: true
   * })
   * ```
   */
  createSponsorsListing: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a new payment tier for your GitHub Sponsors profile.
   *
   * ```graphql
   * createSponsorsTier(input: CreateSponsorsTierInput!): CreateSponsorsTierPayload
   *
   * type CreateSponsorsTierPayload {
   * clientMutationId: String
   * sponsorsTier: SponsorsTier
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
   *
   * @example
   * ```ts
   * const doc = mutation.createSponsorsTier({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsTier: true
   * })
   * ```
   */
  createSponsorsTier: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Start a new sponsorship of a maintainer in GitHub Sponsors, or reactivate a past sponsorship.
   *
   * ```graphql
   * createSponsorship(input: CreateSponsorshipInput!): CreateSponsorshipPayload
   *
   * type CreateSponsorshipPayload {
   * clientMutationId: String
   * sponsorship: Sponsorship
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
   *
   * @example
   * ```ts
   * const doc = mutation.createSponsorship({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorship: true
   * })
   * ```
   */
  createSponsorship: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Make many sponsorships for different sponsorable users or organizations at
   * once. Can only sponsor those who have a public GitHub Sponsors profile.
   *
   * ```graphql
   * createSponsorships(input: CreateSponsorshipsInput!): CreateSponsorshipsPayload
   *
   * type CreateSponsorshipsPayload {
   * clientMutationId: String
   * sponsorables: [Sponsorable!]
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
   *
   * @example
   * ```ts
   * const doc = mutation.createSponsorships({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorables: true
   * })
   * ```
   */
  createSponsorships: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new team discussion.
   *
   * ```graphql
   * createTeamDiscussion(input: CreateTeamDiscussionInput!): CreateTeamDiscussionPayload
   *
   * type CreateTeamDiscussionPayload {
   * clientMutationId: String
   * teamDiscussion: TeamDiscussion @deprecated(reason: "The Team Discussions feature is deprecated in favor of Organization Discussions. Follow the guide at https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/ to find a suitable replacement. Removal on 2024-07-01 UTC.")
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
   *
   * @example
   * ```ts
   * const doc = mutation.createTeamDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * teamDiscussion: true
   * })
   * ```
   */
  createTeamDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new team discussion comment.
   *
   * ```graphql
   * createTeamDiscussionComment(input: CreateTeamDiscussionCommentInput!): CreateTeamDiscussionCommentPayload
   *
   * type CreateTeamDiscussionCommentPayload {
   * clientMutationId: String
   * teamDiscussionComment: TeamDiscussionComment @deprecated(reason: "The Team Discussions feature is deprecated in favor of Organization Discussions. Follow the guide at https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/ to find a suitable replacement. Removal on 2024-07-01 UTC.")
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
   *
   * @example
   * ```ts
   * const doc = mutation.createTeamDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * teamDiscussionComment: true
   * })
   * ```
   */
  createTeamDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new user list.
   *
   * ```graphql
   * createUserList(input: CreateUserListInput!): CreateUserListPayload
   *
   * type CreateUserListPayload {
   * clientMutationId: String
   * list: UserList
   * viewer: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.createUserList({
   * // $: { ...variables }
   * clientMutationId: true,
   * list: true,
   * viewer: true
   * })
   * ```
   */
  createUserList: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Rejects a suggested topic for the repository.
   *
   * ```graphql
   * declineTopicSuggestion(input: DeclineTopicSuggestionInput!): DeclineTopicSuggestionPayload
   *
   * type DeclineTopicSuggestionPayload {
   * clientMutationId: String
   * topic: Topic @deprecated(reason: "Suggested topics are no longer supported Removal on 2024-04-01 UTC.")
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
   *
   * @example
   * ```ts
   * const doc = mutation.declineTopicSuggestion({
   * // $: { ...variables }
   * clientMutationId: true,
   * topic: true
   * })
   * ```
   */
  declineTopicSuggestion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a branch protection rule
   *
   * ```graphql
   * deleteBranchProtectionRule(input: DeleteBranchProtectionRuleInput!): DeleteBranchProtectionRulePayload
   *
   * type DeleteBranchProtectionRulePayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteBranchProtectionRule({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteBranchProtectionRule: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a deployment.
   *
   * ```graphql
   * deleteDeployment(input: DeleteDeploymentInput!): DeleteDeploymentPayload
   *
   * type DeleteDeploymentPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteDeployment({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteDeployment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a discussion and all of its replies.
   *
   * ```graphql
   * deleteDiscussion(input: DeleteDiscussionInput!): DeleteDiscussionPayload
   *
   * type DeleteDiscussionPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  deleteDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a discussion comment. If it has replies, wipe it instead.
   *
   * ```graphql
   * deleteDiscussionComment(input: DeleteDiscussionCommentInput!): DeleteDiscussionCommentPayload
   *
   * type DeleteDiscussionCommentPayload {
   * clientMutationId: String
   * comment: DiscussionComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * comment: true
   * })
   * ```
   */
  deleteDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes an environment
   *
   * ```graphql
   * deleteEnvironment(input: DeleteEnvironmentInput!): DeleteEnvironmentPayload
   *
   * type DeleteEnvironmentPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteEnvironment({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteEnvironment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes an IP allow list entry.
   *
   * ```graphql
   * deleteIpAllowListEntry(input: DeleteIpAllowListEntryInput!): DeleteIpAllowListEntryPayload
   *
   * type DeleteIpAllowListEntryPayload {
   * clientMutationId: String
   * ipAllowListEntry: IpAllowListEntry
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteIpAllowListEntry({
   * // $: { ...variables }
   * clientMutationId: true,
   * ipAllowListEntry: true
   * })
   * ```
   */
  deleteIpAllowListEntry: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes an Issue object.
   *
   * ```graphql
   * deleteIssue(input: DeleteIssueInput!): DeleteIssuePayload
   *
   * type DeleteIssuePayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  deleteIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes an IssueComment object.
   *
   * ```graphql
   * deleteIssueComment(input: DeleteIssueCommentInput!): DeleteIssueCommentPayload
   *
   * type DeleteIssueCommentPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteIssueComment({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteIssueComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a label.
   *
   * ```graphql
   * deleteLabel(input: DeleteLabelInput!): DeleteLabelPayload
   *
   * type DeleteLabelPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteLabel({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteLabel: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unlink a branch from an issue.
   *
   * ```graphql
   * deleteLinkedBranch(input: DeleteLinkedBranchInput!): DeleteLinkedBranchPayload
   *
   * type DeleteLinkedBranchPayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteLinkedBranch({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  deleteLinkedBranch: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a package version.
   *
   * ```graphql
   * deletePackageVersion(input: DeletePackageVersionInput!): DeletePackageVersionPayload
   *
   * type DeletePackageVersionPayload {
   * clientMutationId: String
   * success: Boolean
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
   *
   * @example
   * ```ts
   * const doc = mutation.deletePackageVersion({
   * // $: { ...variables }
   * clientMutationId: true,
   * success: true
   * })
   * ```
   */
  deletePackageVersion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a project.
   *
   * ```graphql
   * deleteProject(input: DeleteProjectInput!): DeleteProjectPayload
   *
   * type DeleteProjectPayload {
   * clientMutationId: String
   * owner: ProjectOwner
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true
   * })
   * ```
   */
  deleteProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a project card.
   *
   * ```graphql
   * deleteProjectCard(input: DeleteProjectCardInput!): DeleteProjectCardPayload
   *
   * type DeleteProjectCardPayload {
   * clientMutationId: String
   * column: ProjectColumn
   * deletedCardId: ID
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectCard({
   * // $: { ...variables }
   * clientMutationId: true,
   * column: true,
   * deletedCardId: true
   * })
   * ```
   */
  deleteProjectCard: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a project column.
   *
   * ```graphql
   * deleteProjectColumn(input: DeleteProjectColumnInput!): DeleteProjectColumnPayload
   *
   * type DeleteProjectColumnPayload {
   * clientMutationId: String
   * deletedColumnId: ID
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectColumn({
   * // $: { ...variables }
   * clientMutationId: true,
   * deletedColumnId: true,
   * project: true
   * })
   * ```
   */
  deleteProjectColumn: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a project.
   *
   * ```graphql
   * deleteProjectV2(input: DeleteProjectV2Input!): DeleteProjectV2Payload
   *
   * type DeleteProjectV2Payload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectV2({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  deleteProjectV2: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a project field.
   *
   * ```graphql
   * deleteProjectV2Field(input: DeleteProjectV2FieldInput!): DeleteProjectV2FieldPayload
   *
   * type DeleteProjectV2FieldPayload {
   * clientMutationId: String
   * projectV2Field: ProjectV2FieldConfiguration
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectV2Field({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2Field: true
   * })
   * ```
   */
  deleteProjectV2Field: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes an item from a Project.
   *
   * ```graphql
   * deleteProjectV2Item(input: DeleteProjectV2ItemInput!): DeleteProjectV2ItemPayload
   *
   * type DeleteProjectV2ItemPayload {
   * clientMutationId: String
   * deletedItemId: ID
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectV2Item({
   * // $: { ...variables }
   * clientMutationId: true,
   * deletedItemId: true
   * })
   * ```
   */
  deleteProjectV2Item: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a project status update.
   *
   * ```graphql
   * deleteProjectV2StatusUpdate(input: DeleteProjectV2StatusUpdateInput!): DeleteProjectV2StatusUpdatePayload
   *
   * type DeleteProjectV2StatusUpdatePayload {
   * clientMutationId: String
   * deletedStatusUpdateId: ID
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectV2StatusUpdate({
   * // $: { ...variables }
   * clientMutationId: true,
   * deletedStatusUpdateId: true,
   * projectV2: true
   * })
   * ```
   */
  deleteProjectV2StatusUpdate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a project workflow.
   *
   * ```graphql
   * deleteProjectV2Workflow(input: DeleteProjectV2WorkflowInput!): DeleteProjectV2WorkflowPayload
   *
   * type DeleteProjectV2WorkflowPayload {
   * clientMutationId: String
   * deletedWorkflowId: ID
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteProjectV2Workflow({
   * // $: { ...variables }
   * clientMutationId: true,
   * deletedWorkflowId: true,
   * projectV2: true
   * })
   * ```
   */
  deleteProjectV2Workflow: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a pull request review.
   *
   * ```graphql
   * deletePullRequestReview(input: DeletePullRequestReviewInput!): DeletePullRequestReviewPayload
   *
   * type DeletePullRequestReviewPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
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
   *
   * @example
   * ```ts
   * const doc = mutation.deletePullRequestReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true
   * })
   * ```
   */
  deletePullRequestReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a pull request review comment.
   *
   * ```graphql
   * deletePullRequestReviewComment(input: DeletePullRequestReviewCommentInput!): DeletePullRequestReviewCommentPayload
   *
   * type DeletePullRequestReviewCommentPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
   * pullRequestReviewComment: PullRequestReviewComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.deletePullRequestReviewComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true,
   * pullRequestReviewComment: true
   * })
   * ```
   */
  deletePullRequestReviewComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a Git Ref.
   *
   * ```graphql
   * deleteRef(input: DeleteRefInput!): DeleteRefPayload
   *
   * type DeleteRefPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteRef({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteRef: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Delete a repository ruleset
   *
   * ```graphql
   * deleteRepositoryRuleset(input: DeleteRepositoryRulesetInput!): DeleteRepositoryRulesetPayload
   *
   * type DeleteRepositoryRulesetPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteRepositoryRuleset({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteRepositoryRuleset: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a team discussion.
   *
   * ```graphql
   * deleteTeamDiscussion(input: DeleteTeamDiscussionInput!): DeleteTeamDiscussionPayload
   *
   * type DeleteTeamDiscussionPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteTeamDiscussion({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteTeamDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a team discussion comment.
   *
   * ```graphql
   * deleteTeamDiscussionComment(input: DeleteTeamDiscussionCommentInput!): DeleteTeamDiscussionCommentPayload
   *
   * type DeleteTeamDiscussionCommentPayload {
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteTeamDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  deleteTeamDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a user list.
   *
   * ```graphql
   * deleteUserList(input: DeleteUserListInput!): DeleteUserListPayload
   *
   * type DeleteUserListPayload {
   * clientMutationId: String
   * user: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteUserList({
   * // $: { ...variables }
   * clientMutationId: true,
   * user: true
   * })
   * ```
   */
  deleteUserList: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a verifiable domain.
   *
   * ```graphql
   * deleteVerifiableDomain(input: DeleteVerifiableDomainInput!): DeleteVerifiableDomainPayload
   *
   * type DeleteVerifiableDomainPayload {
   * clientMutationId: String
   * owner: VerifiableDomainOwner
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
   *
   * @example
   * ```ts
   * const doc = mutation.deleteVerifiableDomain({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true
   * })
   * ```
   */
  deleteVerifiableDomain: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Remove a pull request from the merge queue.
   *
   * ```graphql
   * dequeuePullRequest(input: DequeuePullRequestInput!): DequeuePullRequestPayload
   *
   * type DequeuePullRequestPayload {
   * clientMutationId: String
   * mergeQueueEntry: MergeQueueEntry
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
   *
   * @example
   * ```ts
   * const doc = mutation.dequeuePullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * mergeQueueEntry: true
   * })
   * ```
   */
  dequeuePullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Disable auto merge on the given pull request
   *
   * ```graphql
   * disablePullRequestAutoMerge(input: DisablePullRequestAutoMergeInput!): DisablePullRequestAutoMergePayload
   *
   * type DisablePullRequestAutoMergePayload {
   * actor: Actor
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.disablePullRequestAutoMerge({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  disablePullRequestAutoMerge: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Dismisses an approved or rejected pull request review.
   *
   * ```graphql
   * dismissPullRequestReview(input: DismissPullRequestReviewInput!): DismissPullRequestReviewPayload
   *
   * type DismissPullRequestReviewPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
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
   *
   * @example
   * ```ts
   * const doc = mutation.dismissPullRequestReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true
   * })
   * ```
   */
  dismissPullRequestReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Dismisses the Dependabot alert.
   *
   * ```graphql
   * dismissRepositoryVulnerabilityAlert(input: DismissRepositoryVulnerabilityAlertInput!): DismissRepositoryVulnerabilityAlertPayload
   *
   * type DismissRepositoryVulnerabilityAlertPayload {
   * clientMutationId: String
   * repositoryVulnerabilityAlert: RepositoryVulnerabilityAlert
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
   *
   * @example
   * ```ts
   * const doc = mutation.dismissRepositoryVulnerabilityAlert({
   * // $: { ...variables }
   * clientMutationId: true,
   * repositoryVulnerabilityAlert: true
   * })
   * ```
   */
  dismissRepositoryVulnerabilityAlert: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Enable the default auto-merge on a pull request.
   *
   * ```graphql
   * enablePullRequestAutoMerge(input: EnablePullRequestAutoMergeInput!): EnablePullRequestAutoMergePayload
   *
   * type EnablePullRequestAutoMergePayload {
   * actor: Actor
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.enablePullRequestAutoMerge({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  enablePullRequestAutoMerge: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Add a pull request to the merge queue.
   *
   * ```graphql
   * enqueuePullRequest(input: EnqueuePullRequestInput!): EnqueuePullRequestPayload
   *
   * type EnqueuePullRequestPayload {
   * clientMutationId: String
   * mergeQueueEntry: MergeQueueEntry
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
   *
   * @example
   * ```ts
   * const doc = mutation.enqueuePullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * mergeQueueEntry: true
   * })
   * ```
   */
  enqueuePullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Follow an organization.
   *
   * ```graphql
   * followOrganization(input: FollowOrganizationInput!): FollowOrganizationPayload
   *
   * type FollowOrganizationPayload {
   * clientMutationId: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.followOrganization({
   * // $: { ...variables }
   * clientMutationId: true,
   * organization: true
   * })
   * ```
   */
  followOrganization: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Follow a user.
   *
   * ```graphql
   * followUser(input: FollowUserInput!): FollowUserPayload
   *
   * type FollowUserPayload {
   * clientMutationId: String
   * user: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.followUser({
   * // $: { ...variables }
   * clientMutationId: true,
   * user: true
   * })
   * ```
   */
  followUser: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Grant the migrator role to a user for all organizations under an enterprise account.
   *
   * ```graphql
   * grantEnterpriseOrganizationsMigratorRole(input: GrantEnterpriseOrganizationsMigratorRoleInput!): GrantEnterpriseOrganizationsMigratorRolePayload
   *
   * type GrantEnterpriseOrganizationsMigratorRolePayload {
   * clientMutationId: String
   * organizations(after: String, before: String, first: Int, last: Int): OrganizationConnection
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
   *
   * @example
   * ```ts
   * const doc = mutation.grantEnterpriseOrganizationsMigratorRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * organizations: true
   * })
   * ```
   */
  grantEnterpriseOrganizationsMigratorRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Grant the migrator role to a user or a team.
   *
   * ```graphql
   * grantMigratorRole(input: GrantMigratorRoleInput!): GrantMigratorRolePayload
   *
   * type GrantMigratorRolePayload {
   * clientMutationId: String
   * success: Boolean
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
   *
   * @example
   * ```ts
   * const doc = mutation.grantMigratorRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * success: true
   * })
   * ```
   */
  grantMigratorRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a new project by importing columns and a list of issues/PRs.
   *
   * ```graphql
   * importProject(input: ImportProjectInput!): ImportProjectPayload
   *
   * type ImportProjectPayload {
   * clientMutationId: String
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.importProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * project: true
   * })
   * ```
   */
  importProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Invite someone to become an administrator of the enterprise.
   *
   * ```graphql
   * inviteEnterpriseAdmin(input: InviteEnterpriseAdminInput!): InviteEnterpriseAdminPayload
   *
   * type InviteEnterpriseAdminPayload {
   * clientMutationId: String
   * invitation: EnterpriseAdministratorInvitation
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
   *
   * @example
   * ```ts
   * const doc = mutation.inviteEnterpriseAdmin({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true
   * })
   * ```
   */
  inviteEnterpriseAdmin: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Invite someone to become an unaffiliated member of the enterprise.
   *
   * ```graphql
   * inviteEnterpriseMember(input: InviteEnterpriseMemberInput!): InviteEnterpriseMemberPayload
   *
   * type InviteEnterpriseMemberPayload {
   * clientMutationId: String
   * invitation: EnterpriseMemberInvitation
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
   *
   * @example
   * ```ts
   * const doc = mutation.inviteEnterpriseMember({
   * // $: { ...variables }
   * clientMutationId: true,
   * invitation: true
   * })
   * ```
   */
  inviteEnterpriseMember: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Links a project to a repository.
   *
   * ```graphql
   * linkProjectV2ToRepository(input: LinkProjectV2ToRepositoryInput!): LinkProjectV2ToRepositoryPayload
   *
   * type LinkProjectV2ToRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.linkProjectV2ToRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  linkProjectV2ToRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Links a project to a team.
   *
   * ```graphql
   * linkProjectV2ToTeam(input: LinkProjectV2ToTeamInput!): LinkProjectV2ToTeamPayload
   *
   * type LinkProjectV2ToTeamPayload {
   * clientMutationId: String
   * team: Team
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
   *
   * @example
   * ```ts
   * const doc = mutation.linkProjectV2ToTeam({
   * // $: { ...variables }
   * clientMutationId: true,
   * team: true
   * })
   * ```
   */
  linkProjectV2ToTeam: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates a repository link for a project.
   *
   * ```graphql
   * linkRepositoryToProject(input: LinkRepositoryToProjectInput!): LinkRepositoryToProjectPayload
   *
   * type LinkRepositoryToProjectPayload {
   * clientMutationId: String
   * project: Project
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.linkRepositoryToProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * project: true,
   * repository: true
   * })
   * ```
   */
  linkRepositoryToProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Lock a lockable object
   *
   * ```graphql
   * lockLockable(input: LockLockableInput!): LockLockablePayload
   *
   * type LockLockablePayload {
   * actor: Actor
   * clientMutationId: String
   * lockedRecord: Lockable
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
   *
   * @example
   * ```ts
   * const doc = mutation.lockLockable({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * lockedRecord: true
   * })
   * ```
   */
  lockLockable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Mark a discussion comment as the chosen answer for discussions in an answerable category.
   *
   * ```graphql
   * markDiscussionCommentAsAnswer(input: MarkDiscussionCommentAsAnswerInput!): MarkDiscussionCommentAsAnswerPayload
   *
   * type MarkDiscussionCommentAsAnswerPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.markDiscussionCommentAsAnswer({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  markDiscussionCommentAsAnswer: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Mark a pull request file as viewed
   *
   * ```graphql
   * markFileAsViewed(input: MarkFileAsViewedInput!): MarkFileAsViewedPayload
   *
   * type MarkFileAsViewedPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.markFileAsViewed({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  markFileAsViewed: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Mark a project as a template. Note that only projects which are owned by an Organization can be marked as a template.
   *
   * ```graphql
   * markProjectV2AsTemplate(input: MarkProjectV2AsTemplateInput!): MarkProjectV2AsTemplatePayload
   *
   * type MarkProjectV2AsTemplatePayload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.markProjectV2AsTemplate({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  markProjectV2AsTemplate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Marks a pull request ready for review.
   *
   * ```graphql
   * markPullRequestReadyForReview(input: MarkPullRequestReadyForReviewInput!): MarkPullRequestReadyForReviewPayload
   *
   * type MarkPullRequestReadyForReviewPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.markPullRequestReadyForReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  markPullRequestReadyForReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Merge a head into a branch.
   *
   * ```graphql
   * mergeBranch(input: MergeBranchInput!): MergeBranchPayload
   *
   * type MergeBranchPayload {
   * clientMutationId: String
   * mergeCommit: Commit
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
   *
   * @example
   * ```ts
   * const doc = mutation.mergeBranch({
   * // $: { ...variables }
   * clientMutationId: true,
   * mergeCommit: true
   * })
   * ```
   */
  mergeBranch: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Merge a pull request.
   *
   * ```graphql
   * mergePullRequest(input: MergePullRequestInput!): MergePullRequestPayload
   *
   * type MergePullRequestPayload {
   * actor: Actor
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.mergePullRequest({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  mergePullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Minimizes a comment on an Issue, Commit, Pull Request, or Gist
   *
   * ```graphql
   * minimizeComment(input: MinimizeCommentInput!): MinimizeCommentPayload
   *
   * type MinimizeCommentPayload {
   * clientMutationId: String
   * minimizedComment: Minimizable
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
   *
   * @example
   * ```ts
   * const doc = mutation.minimizeComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * minimizedComment: true
   * })
   * ```
   */
  minimizeComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Moves a project card to another place.
   *
   * ```graphql
   * moveProjectCard(input: MoveProjectCardInput!): MoveProjectCardPayload
   *
   * type MoveProjectCardPayload {
   * cardEdge: ProjectCardEdge
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.moveProjectCard({
   * // $: { ...variables }
   * cardEdge: true,
   * clientMutationId: true
   * })
   * ```
   */
  moveProjectCard: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Moves a project column to another place.
   *
   * ```graphql
   * moveProjectColumn(input: MoveProjectColumnInput!): MoveProjectColumnPayload
   *
   * type MoveProjectColumnPayload {
   * clientMutationId: String
   * columnEdge: ProjectColumnEdge
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
   *
   * @example
   * ```ts
   * const doc = mutation.moveProjectColumn({
   * // $: { ...variables }
   * clientMutationId: true,
   * columnEdge: true
   * })
   * ```
   */
  moveProjectColumn: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Pin an environment to a repository
   *
   * ```graphql
   * pinEnvironment(input: PinEnvironmentInput!): PinEnvironmentPayload
   *
   * type PinEnvironmentPayload {
   * clientMutationId: String
   * environment: Environment
   * pinnedEnvironment: PinnedEnvironment
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
   *
   * @example
   * ```ts
   * const doc = mutation.pinEnvironment({
   * // $: { ...variables }
   * clientMutationId: true,
   * environment: true,
   * pinnedEnvironment: true
   * })
   * ```
   */
  pinEnvironment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Pin an issue to a repository
   *
   * ```graphql
   * pinIssue(input: PinIssueInput!): PinIssuePayload
   *
   * type PinIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.pinIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  pinIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Publish an existing sponsorship tier that is currently still a draft to a GitHub Sponsors profile.
   *
   * ```graphql
   * publishSponsorsTier(input: PublishSponsorsTierInput!): PublishSponsorsTierPayload
   *
   * type PublishSponsorsTierPayload {
   * clientMutationId: String
   * sponsorsTier: SponsorsTier
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
   *
   * @example
   * ```ts
   * const doc = mutation.publishSponsorsTier({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsTier: true
   * })
   * ```
   */
  publishSponsorsTier: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Regenerates the identity provider recovery codes for an enterprise
   *
   * ```graphql
   * regenerateEnterpriseIdentityProviderRecoveryCodes(input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput!): RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
   *
   * type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload {
   * clientMutationId: String
   * identityProvider: EnterpriseIdentityProvider
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
   *
   * @example
   * ```ts
   * const doc = mutation.regenerateEnterpriseIdentityProviderRecoveryCodes({
   * // $: { ...variables }
   * clientMutationId: true,
   * identityProvider: true
   * })
   * ```
   */
  regenerateEnterpriseIdentityProviderRecoveryCodes: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Regenerates a verifiable domain's verification token.
   *
   * ```graphql
   * regenerateVerifiableDomainToken(input: RegenerateVerifiableDomainTokenInput!): RegenerateVerifiableDomainTokenPayload
   *
   * type RegenerateVerifiableDomainTokenPayload {
   * clientMutationId: String
   * verificationToken: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.regenerateVerifiableDomainToken({
   * // $: { ...variables }
   * clientMutationId: true,
   * verificationToken: true
   * })
   * ```
   */
  regenerateVerifiableDomainToken: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reject all pending deployments under one or more environments
   *
   * ```graphql
   * rejectDeployments(input: RejectDeploymentsInput!): RejectDeploymentsPayload
   *
   * type RejectDeploymentsPayload {
   * clientMutationId: String
   * deployments: [Deployment!]
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
   *
   * @example
   * ```ts
   * const doc = mutation.rejectDeployments({
   * // $: { ...variables }
   * clientMutationId: true,
   * deployments: true
   * })
   * ```
   */
  rejectDeployments: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes assignees from an assignable object.
   *
   * ```graphql
   * removeAssigneesFromAssignable(input: RemoveAssigneesFromAssignableInput!): RemoveAssigneesFromAssignablePayload
   *
   * type RemoveAssigneesFromAssignablePayload {
   * assignable: Assignable
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeAssigneesFromAssignable({
   * // $: { ...variables }
   * assignable: true,
   * clientMutationId: true
   * })
   * ```
   */
  removeAssigneesFromAssignable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes an administrator from the enterprise.
   *
   * ```graphql
   * removeEnterpriseAdmin(input: RemoveEnterpriseAdminInput!): RemoveEnterpriseAdminPayload
   *
   * type RemoveEnterpriseAdminPayload {
   * admin: User
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
   * viewer: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeEnterpriseAdmin({
   * // $: { ...variables }
   * admin: true,
   * clientMutationId: true,
   * enterprise: true,
   * // ...
   * })
   * ```
   */
  removeEnterpriseAdmin: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes the identity provider from an enterprise. Owners of enterprises both
   * with and without Enterprise Managed Users may use this mutation.
   *
   * ```graphql
   * removeEnterpriseIdentityProvider(input: RemoveEnterpriseIdentityProviderInput!): RemoveEnterpriseIdentityProviderPayload
   *
   * type RemoveEnterpriseIdentityProviderPayload {
   * clientMutationId: String
   * identityProvider: EnterpriseIdentityProvider
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeEnterpriseIdentityProvider({
   * // $: { ...variables }
   * clientMutationId: true,
   * identityProvider: true
   * })
   * ```
   */
  removeEnterpriseIdentityProvider: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes a user from all organizations within the enterprise
   *
   * ```graphql
   * removeEnterpriseMember(input: RemoveEnterpriseMemberInput!): RemoveEnterpriseMemberPayload
   *
   * type RemoveEnterpriseMemberPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * user: User
   * viewer: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeEnterpriseMember({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * user: true,
   * // ...
   * })
   * ```
   */
  removeEnterpriseMember: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes an organization from the enterprise
   *
   * ```graphql
   * removeEnterpriseOrganization(input: RemoveEnterpriseOrganizationInput!): RemoveEnterpriseOrganizationPayload
   *
   * type RemoveEnterpriseOrganizationPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * organization: Organization
   * viewer: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeEnterpriseOrganization({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * organization: true,
   * // ...
   * })
   * ```
   */
  removeEnterpriseOrganization: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes a support entitlement from an enterprise member.
   *
   * ```graphql
   * removeEnterpriseSupportEntitlement(input: RemoveEnterpriseSupportEntitlementInput!): RemoveEnterpriseSupportEntitlementPayload
   *
   * type RemoveEnterpriseSupportEntitlementPayload {
   * clientMutationId: String
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeEnterpriseSupportEntitlement({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true
   * })
   * ```
   */
  removeEnterpriseSupportEntitlement: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes labels from a Labelable object.
   *
   * ```graphql
   * removeLabelsFromLabelable(input: RemoveLabelsFromLabelableInput!): RemoveLabelsFromLabelablePayload
   *
   * type RemoveLabelsFromLabelablePayload {
   * clientMutationId: String
   * labelable: Labelable
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeLabelsFromLabelable({
   * // $: { ...variables }
   * clientMutationId: true,
   * labelable: true
   * })
   * ```
   */
  removeLabelsFromLabelable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes outside collaborator from all repositories in an organization.
   *
   * ```graphql
   * removeOutsideCollaborator(input: RemoveOutsideCollaboratorInput!): RemoveOutsideCollaboratorPayload
   *
   * type RemoveOutsideCollaboratorPayload {
   * clientMutationId: String
   * removedUser: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeOutsideCollaborator({
   * // $: { ...variables }
   * clientMutationId: true,
   * removedUser: true
   * })
   * ```
   */
  removeOutsideCollaborator: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes a reaction from a subject.
   *
   * ```graphql
   * removeReaction(input: RemoveReactionInput!): RemoveReactionPayload
   *
   * type RemoveReactionPayload {
   * clientMutationId: String
   * reaction: Reaction
   * reactionGroups: [ReactionGroup!]
   * subject: Reactable
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeReaction({
   * // $: { ...variables }
   * clientMutationId: true,
   * reaction: true,
   * reactionGroups: true,
   * // ...
   * })
   * ```
   */
  removeReaction: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes a star from a Starrable.
   *
   * ```graphql
   * removeStar(input: RemoveStarInput!): RemoveStarPayload
   *
   * type RemoveStarPayload {
   * clientMutationId: String
   * starrable: Starrable
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeStar({
   * // $: { ...variables }
   * clientMutationId: true,
   * starrable: true
   * })
   * ```
   */
  removeStar: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Removes a sub-issue from a given issue
   *
   * ```graphql
   * removeSubIssue(input: RemoveSubIssueInput!): RemoveSubIssuePayload
   *
   * type RemoveSubIssuePayload {
   * clientMutationId: String
   * issue: Issue
   * subIssue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeSubIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true,
   * subIssue: true
   * })
   * ```
   */
  removeSubIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Remove an upvote to a discussion or discussion comment.
   *
   * ```graphql
   * removeUpvote(input: RemoveUpvoteInput!): RemoveUpvotePayload
   *
   * type RemoveUpvotePayload {
   * clientMutationId: String
   * subject: Votable
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
   *
   * @example
   * ```ts
   * const doc = mutation.removeUpvote({
   * // $: { ...variables }
   * clientMutationId: true,
   * subject: true
   * })
   * ```
   */
  removeUpvote: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reopen a discussion.
   *
   * ```graphql
   * reopenDiscussion(input: ReopenDiscussionInput!): ReopenDiscussionPayload
   *
   * type ReopenDiscussionPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.reopenDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  reopenDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reopen a issue.
   *
   * ```graphql
   * reopenIssue(input: ReopenIssueInput!): ReopenIssuePayload
   *
   * type ReopenIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.reopenIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  reopenIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reopen a pull request.
   *
   * ```graphql
   * reopenPullRequest(input: ReopenPullRequestInput!): ReopenPullRequestPayload
   *
   * type ReopenPullRequestPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.reopenPullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  reopenPullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reorder a pinned repository environment
   *
   * ```graphql
   * reorderEnvironment(input: ReorderEnvironmentInput!): ReorderEnvironmentPayload
   *
   * type ReorderEnvironmentPayload {
   * clientMutationId: String
   * environment: Environment
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
   *
   * @example
   * ```ts
   * const doc = mutation.reorderEnvironment({
   * // $: { ...variables }
   * clientMutationId: true,
   * environment: true
   * })
   * ```
   */
  reorderEnvironment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Reprioritizes a sub-issue to a different position in the parent list.
   *
   * ```graphql
   * reprioritizeSubIssue(input: ReprioritizeSubIssueInput!): ReprioritizeSubIssuePayload
   *
   * type ReprioritizeSubIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.reprioritizeSubIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  reprioritizeSubIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Set review requests on a pull request.
   *
   * ```graphql
   * requestReviews(input: RequestReviewsInput!): RequestReviewsPayload
   *
   * type RequestReviewsPayload {
   * actor: Actor
   * clientMutationId: String
   * pullRequest: PullRequest
   * requestedReviewersEdge: UserEdge
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
   *
   * @example
   * ```ts
   * const doc = mutation.requestReviews({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * pullRequest: true,
   * // ...
   * })
   * ```
   */
  requestReviews: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Rerequests an existing check suite.
   *
   * ```graphql
   * rerequestCheckSuite(input: RerequestCheckSuiteInput!): RerequestCheckSuitePayload
   *
   * type RerequestCheckSuitePayload {
   * checkSuite: CheckSuite
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.rerequestCheckSuite({
   * // $: { ...variables }
   * checkSuite: true,
   * clientMutationId: true
   * })
   * ```
   */
  rerequestCheckSuite: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Marks a review thread as resolved.
   *
   * ```graphql
   * resolveReviewThread(input: ResolveReviewThreadInput!): ResolveReviewThreadPayload
   *
   * type ResolveReviewThreadPayload {
   * clientMutationId: String
   * thread: PullRequestReviewThread
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
   *
   * @example
   * ```ts
   * const doc = mutation.resolveReviewThread({
   * // $: { ...variables }
   * clientMutationId: true,
   * thread: true
   * })
   * ```
   */
  resolveReviewThread: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Retire a published payment tier from your GitHub Sponsors profile so it cannot be used to start new sponsorships.
   *
   * ```graphql
   * retireSponsorsTier(input: RetireSponsorsTierInput!): RetireSponsorsTierPayload
   *
   * type RetireSponsorsTierPayload {
   * clientMutationId: String
   * sponsorsTier: SponsorsTier
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
   *
   * @example
   * ```ts
   * const doc = mutation.retireSponsorsTier({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsTier: true
   * })
   * ```
   */
  retireSponsorsTier: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Create a pull request that reverts the changes from a merged pull request.
   *
   * ```graphql
   * revertPullRequest(input: RevertPullRequestInput!): RevertPullRequestPayload
   *
   * type RevertPullRequestPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
   * revertPullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.revertPullRequest({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true,
   * revertPullRequest: true
   * })
   * ```
   */
  revertPullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Revoke the migrator role to a user for all organizations under an enterprise account.
   *
   * ```graphql
   * revokeEnterpriseOrganizationsMigratorRole(input: RevokeEnterpriseOrganizationsMigratorRoleInput!): RevokeEnterpriseOrganizationsMigratorRolePayload
   *
   * type RevokeEnterpriseOrganizationsMigratorRolePayload {
   * clientMutationId: String
   * organizations(after: String, before: String, first: Int, last: Int): OrganizationConnection
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
   *
   * @example
   * ```ts
   * const doc = mutation.revokeEnterpriseOrganizationsMigratorRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * organizations: true
   * })
   * ```
   */
  revokeEnterpriseOrganizationsMigratorRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Revoke the migrator role from a user or a team.
   *
   * ```graphql
   * revokeMigratorRole(input: RevokeMigratorRoleInput!): RevokeMigratorRolePayload
   *
   * type RevokeMigratorRolePayload {
   * clientMutationId: String
   * success: Boolean
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
   *
   * @example
   * ```ts
   * const doc = mutation.revokeMigratorRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * success: true
   * })
   * ```
   */
  revokeMigratorRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Creates or updates the identity provider for an enterprise.
   *
   * ```graphql
   * setEnterpriseIdentityProvider(input: SetEnterpriseIdentityProviderInput!): SetEnterpriseIdentityProviderPayload
   *
   * type SetEnterpriseIdentityProviderPayload {
   * clientMutationId: String
   * identityProvider: EnterpriseIdentityProvider
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
   *
   * @example
   * ```ts
   * const doc = mutation.setEnterpriseIdentityProvider({
   * // $: { ...variables }
   * clientMutationId: true,
   * identityProvider: true
   * })
   * ```
   */
  setEnterpriseIdentityProvider: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Set an organization level interaction limit for an organization's public repositories.
   *
   * ```graphql
   * setOrganizationInteractionLimit(input: SetOrganizationInteractionLimitInput!): SetOrganizationInteractionLimitPayload
   *
   * type SetOrganizationInteractionLimitPayload {
   * clientMutationId: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.setOrganizationInteractionLimit({
   * // $: { ...variables }
   * clientMutationId: true,
   * organization: true
   * })
   * ```
   */
  setOrganizationInteractionLimit: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets an interaction limit setting for a repository.
   *
   * ```graphql
   * setRepositoryInteractionLimit(input: SetRepositoryInteractionLimitInput!): SetRepositoryInteractionLimitPayload
   *
   * type SetRepositoryInteractionLimitPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.setRepositoryInteractionLimit({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  setRepositoryInteractionLimit: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Set a user level interaction limit for an user's public repositories.
   *
   * ```graphql
   * setUserInteractionLimit(input: SetUserInteractionLimitInput!): SetUserInteractionLimitPayload
   *
   * type SetUserInteractionLimitPayload {
   * clientMutationId: String
   * user: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.setUserInteractionLimit({
   * // $: { ...variables }
   * clientMutationId: true,
   * user: true
   * })
   * ```
   */
  setUserInteractionLimit: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Starts a GitHub Enterprise Importer organization migration.
   *
   * ```graphql
   * startOrganizationMigration(input: StartOrganizationMigrationInput!): StartOrganizationMigrationPayload
   *
   * type StartOrganizationMigrationPayload {
   * clientMutationId: String
   * orgMigration: OrganizationMigration
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
   *
   * @example
   * ```ts
   * const doc = mutation.startOrganizationMigration({
   * // $: { ...variables }
   * clientMutationId: true,
   * orgMigration: true
   * })
   * ```
   */
  startOrganizationMigration: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Starts a GitHub Enterprise Importer (GEI) repository migration.
   *
   * ```graphql
   * startRepositoryMigration(input: StartRepositoryMigrationInput!): StartRepositoryMigrationPayload
   *
   * type StartRepositoryMigrationPayload {
   * clientMutationId: String
   * repositoryMigration: RepositoryMigration
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
   *
   * @example
   * ```ts
   * const doc = mutation.startRepositoryMigration({
   * // $: { ...variables }
   * clientMutationId: true,
   * repositoryMigration: true
   * })
   * ```
   */
  startRepositoryMigration: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Submits a pending pull request review.
   *
   * ```graphql
   * submitPullRequestReview(input: SubmitPullRequestReviewInput!): SubmitPullRequestReviewPayload
   *
   * type SubmitPullRequestReviewPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
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
   *
   * @example
   * ```ts
   * const doc = mutation.submitPullRequestReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true
   * })
   * ```
   */
  submitPullRequestReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Transfer an organization from one enterprise to another enterprise.
   *
   * ```graphql
   * transferEnterpriseOrganization(input: TransferEnterpriseOrganizationInput!): TransferEnterpriseOrganizationPayload
   *
   * type TransferEnterpriseOrganizationPayload {
   * clientMutationId: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.transferEnterpriseOrganization({
   * // $: { ...variables }
   * clientMutationId: true,
   * organization: true
   * })
   * ```
   */
  transferEnterpriseOrganization: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Transfer an issue to a different repository
   *
   * ```graphql
   * transferIssue(input: TransferIssueInput!): TransferIssuePayload
   *
   * type TransferIssuePayload {
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.transferIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  transferIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unarchives a ProjectV2Item
   *
   * ```graphql
   * unarchiveProjectV2Item(input: UnarchiveProjectV2ItemInput!): UnarchiveProjectV2ItemPayload
   *
   * type UnarchiveProjectV2ItemPayload {
   * clientMutationId: String
   * item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.unarchiveProjectV2Item({
   * // $: { ...variables }
   * clientMutationId: true,
   * item: true
   * })
   * ```
   */
  unarchiveProjectV2Item: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unarchives a repository.
   *
   * ```graphql
   * unarchiveRepository(input: UnarchiveRepositoryInput!): UnarchiveRepositoryPayload
   *
   * type UnarchiveRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.unarchiveRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  unarchiveRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unfollow an organization.
   *
   * ```graphql
   * unfollowOrganization(input: UnfollowOrganizationInput!): UnfollowOrganizationPayload
   *
   * type UnfollowOrganizationPayload {
   * clientMutationId: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.unfollowOrganization({
   * // $: { ...variables }
   * clientMutationId: true,
   * organization: true
   * })
   * ```
   */
  unfollowOrganization: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unfollow a user.
   *
   * ```graphql
   * unfollowUser(input: UnfollowUserInput!): UnfollowUserPayload
   *
   * type UnfollowUserPayload {
   * clientMutationId: String
   * user: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.unfollowUser({
   * // $: { ...variables }
   * clientMutationId: true,
   * user: true
   * })
   * ```
   */
  unfollowUser: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unlinks a project from a repository.
   *
   * ```graphql
   * unlinkProjectV2FromRepository(input: UnlinkProjectV2FromRepositoryInput!): UnlinkProjectV2FromRepositoryPayload
   *
   * type UnlinkProjectV2FromRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.unlinkProjectV2FromRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  unlinkProjectV2FromRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unlinks a project to a team.
   *
   * ```graphql
   * unlinkProjectV2FromTeam(input: UnlinkProjectV2FromTeamInput!): UnlinkProjectV2FromTeamPayload
   *
   * type UnlinkProjectV2FromTeamPayload {
   * clientMutationId: String
   * team: Team
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
   *
   * @example
   * ```ts
   * const doc = mutation.unlinkProjectV2FromTeam({
   * // $: { ...variables }
   * clientMutationId: true,
   * team: true
   * })
   * ```
   */
  unlinkProjectV2FromTeam: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Deletes a repository link from a project.
   *
   * ```graphql
   * unlinkRepositoryFromProject(input: UnlinkRepositoryFromProjectInput!): UnlinkRepositoryFromProjectPayload
   *
   * type UnlinkRepositoryFromProjectPayload {
   * clientMutationId: String
   * project: Project
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.unlinkRepositoryFromProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * project: true,
   * repository: true
   * })
   * ```
   */
  unlinkRepositoryFromProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unlock a lockable object
   *
   * ```graphql
   * unlockLockable(input: UnlockLockableInput!): UnlockLockablePayload
   *
   * type UnlockLockablePayload {
   * actor: Actor
   * clientMutationId: String
   * unlockedRecord: Lockable
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
   *
   * @example
   * ```ts
   * const doc = mutation.unlockLockable({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * unlockedRecord: true
   * })
   * ```
   */
  unlockLockable: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unmark a discussion comment as the chosen answer for discussions in an answerable category.
   *
   * ```graphql
   * unmarkDiscussionCommentAsAnswer(input: UnmarkDiscussionCommentAsAnswerInput!): UnmarkDiscussionCommentAsAnswerPayload
   *
   * type UnmarkDiscussionCommentAsAnswerPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.unmarkDiscussionCommentAsAnswer({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  unmarkDiscussionCommentAsAnswer: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unmark a pull request file as viewed
   *
   * ```graphql
   * unmarkFileAsViewed(input: UnmarkFileAsViewedInput!): UnmarkFileAsViewedPayload
   *
   * type UnmarkFileAsViewedPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.unmarkFileAsViewed({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  unmarkFileAsViewed: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unmark an issue as a duplicate of another issue.
   *
   * ```graphql
   * unmarkIssueAsDuplicate(input: UnmarkIssueAsDuplicateInput!): UnmarkIssueAsDuplicatePayload
   *
   * type UnmarkIssueAsDuplicatePayload {
   * clientMutationId: String
   * duplicate: IssueOrPullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.unmarkIssueAsDuplicate({
   * // $: { ...variables }
   * clientMutationId: true,
   * duplicate: true
   * })
   * ```
   */
  unmarkIssueAsDuplicate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unmark a project as a template.
   *
   * ```graphql
   * unmarkProjectV2AsTemplate(input: UnmarkProjectV2AsTemplateInput!): UnmarkProjectV2AsTemplatePayload
   *
   * type UnmarkProjectV2AsTemplatePayload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.unmarkProjectV2AsTemplate({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  unmarkProjectV2AsTemplate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unminimizes a comment on an Issue, Commit, Pull Request, or Gist
   *
   * ```graphql
   * unminimizeComment(input: UnminimizeCommentInput!): UnminimizeCommentPayload
   *
   * type UnminimizeCommentPayload {
   * clientMutationId: String
   * unminimizedComment: Minimizable
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
   *
   * @example
   * ```ts
   * const doc = mutation.unminimizeComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * unminimizedComment: true
   * })
   * ```
   */
  unminimizeComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Unpin a pinned issue from a repository
   *
   * ```graphql
   * unpinIssue(input: UnpinIssueInput!): UnpinIssuePayload
   *
   * type UnpinIssuePayload {
   * clientMutationId: String
   * id: ID
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.unpinIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * id: true,
   * issue: true
   * })
   * ```
   */
  unpinIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Marks a review thread as unresolved.
   *
   * ```graphql
   * unresolveReviewThread(input: UnresolveReviewThreadInput!): UnresolveReviewThreadPayload
   *
   * type UnresolveReviewThreadPayload {
   * clientMutationId: String
   * thread: PullRequestReviewThread
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
   *
   * @example
   * ```ts
   * const doc = mutation.unresolveReviewThread({
   * // $: { ...variables }
   * clientMutationId: true,
   * thread: true
   * })
   * ```
   */
  unresolveReviewThread: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a branch protection rule
   *
   * ```graphql
   * updateBranchProtectionRule(input: UpdateBranchProtectionRuleInput!): UpdateBranchProtectionRulePayload
   *
   * type UpdateBranchProtectionRulePayload {
   * branchProtectionRule: BranchProtectionRule
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateBranchProtectionRule({
   * // $: { ...variables }
   * branchProtectionRule: true,
   * clientMutationId: true
   * })
   * ```
   */
  updateBranchProtectionRule: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a check run
   *
   * ```graphql
   * updateCheckRun(input: UpdateCheckRunInput!): UpdateCheckRunPayload
   *
   * type UpdateCheckRunPayload {
   * checkRun: CheckRun
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateCheckRun({
   * // $: { ...variables }
   * checkRun: true,
   * clientMutationId: true
   * })
   * ```
   */
  updateCheckRun: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Modifies the settings of an existing check suite
   *
   * ```graphql
   * updateCheckSuitePreferences(input: UpdateCheckSuitePreferencesInput!): UpdateCheckSuitePreferencesPayload
   *
   * type UpdateCheckSuitePreferencesPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateCheckSuitePreferences({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  updateCheckSuitePreferences: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a discussion
   *
   * ```graphql
   * updateDiscussion(input: UpdateDiscussionInput!): UpdateDiscussionPayload
   *
   * type UpdateDiscussionPayload {
   * clientMutationId: String
   * discussion: Discussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * discussion: true
   * })
   * ```
   */
  updateDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update the contents of a comment on a Discussion
   *
   * ```graphql
   * updateDiscussionComment(input: UpdateDiscussionCommentInput!): UpdateDiscussionCommentPayload
   *
   * type UpdateDiscussionCommentPayload {
   * clientMutationId: String
   * comment: DiscussionComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * comment: true
   * })
   * ```
   */
  updateDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates the role of an enterprise administrator.
   *
   * ```graphql
   * updateEnterpriseAdministratorRole(input: UpdateEnterpriseAdministratorRoleInput!): UpdateEnterpriseAdministratorRolePayload
   *
   * type UpdateEnterpriseAdministratorRolePayload {
   * clientMutationId: String
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseAdministratorRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseAdministratorRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether private repository forks are enabled for an enterprise.
   *
   * ```graphql
   * updateEnterpriseAllowPrivateRepositoryForkingSetting(input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!): UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
   *
   * type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseAllowPrivateRepositoryForkingSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseAllowPrivateRepositoryForkingSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the base repository permission for organizations in an enterprise.
   *
   * ```graphql
   * updateEnterpriseDefaultRepositoryPermissionSetting(input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput!): UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
   *
   * type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseDefaultRepositoryPermissionSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseDefaultRepositoryPermissionSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether deploy keys are allowed to be created and used for an enterprise.
   *
   * ```graphql
   * updateEnterpriseDeployKeySetting(input: UpdateEnterpriseDeployKeySettingInput!): UpdateEnterpriseDeployKeySettingPayload
   *
   * type UpdateEnterpriseDeployKeySettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseDeployKeySetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseDeployKeySetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether organization members with admin permissions on a repository can change repository visibility.
   *
   * ```graphql
   * updateEnterpriseMembersCanChangeRepositoryVisibilitySetting(input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!): UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
   *
   * type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanChangeRepositoryVisibilitySetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the members can create repositories setting for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanCreateRepositoriesSetting(input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!): UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
   *
   * type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanCreateRepositoriesSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanCreateRepositoriesSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the members can delete issues setting for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanDeleteIssuesSetting(input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput!): UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
   *
   * type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanDeleteIssuesSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanDeleteIssuesSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the members can delete repositories setting for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanDeleteRepositoriesSetting(input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!): UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
   *
   * type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanDeleteRepositoriesSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanDeleteRepositoriesSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether members can invite collaborators are enabled for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanInviteCollaboratorsSetting(input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!): UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
   *
   * type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanInviteCollaboratorsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanInviteCollaboratorsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether or not an organization owner can make purchases.
   *
   * ```graphql
   * updateEnterpriseMembersCanMakePurchasesSetting(input: UpdateEnterpriseMembersCanMakePurchasesSettingInput!): UpdateEnterpriseMembersCanMakePurchasesSettingPayload
   *
   * type UpdateEnterpriseMembersCanMakePurchasesSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanMakePurchasesSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanMakePurchasesSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the members can update protected branches setting for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanUpdateProtectedBranchesSetting(input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!): UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
   *
   * type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanUpdateProtectedBranchesSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the members can view dependency insights for an enterprise.
   *
   * ```graphql
   * updateEnterpriseMembersCanViewDependencyInsightsSetting(input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!): UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
   *
   * type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseMembersCanViewDependencyInsightsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseMembersCanViewDependencyInsightsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether organization projects are enabled for an enterprise.
   *
   * ```graphql
   * updateEnterpriseOrganizationProjectsSetting(input: UpdateEnterpriseOrganizationProjectsSettingInput!): UpdateEnterpriseOrganizationProjectsSettingPayload
   *
   * type UpdateEnterpriseOrganizationProjectsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseOrganizationProjectsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseOrganizationProjectsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates the role of an enterprise owner with an organization.
   *
   * ```graphql
   * updateEnterpriseOwnerOrganizationRole(input: UpdateEnterpriseOwnerOrganizationRoleInput!): UpdateEnterpriseOwnerOrganizationRolePayload
   *
   * type UpdateEnterpriseOwnerOrganizationRolePayload {
   * clientMutationId: String
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseOwnerOrganizationRole({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseOwnerOrganizationRole: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an enterprise's profile.
   *
   * ```graphql
   * updateEnterpriseProfile(input: UpdateEnterpriseProfileInput!): UpdateEnterpriseProfilePayload
   *
   * type UpdateEnterpriseProfilePayload {
   * clientMutationId: String
   * enterprise: Enterprise
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseProfile({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true
   * })
   * ```
   */
  updateEnterpriseProfile: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether repository projects are enabled for a enterprise.
   *
   * ```graphql
   * updateEnterpriseRepositoryProjectsSetting(input: UpdateEnterpriseRepositoryProjectsSettingInput!): UpdateEnterpriseRepositoryProjectsSettingPayload
   *
   * type UpdateEnterpriseRepositoryProjectsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseRepositoryProjectsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseRepositoryProjectsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether team discussions are enabled for an enterprise.
   *
   * ```graphql
   * updateEnterpriseTeamDiscussionsSetting(input: UpdateEnterpriseTeamDiscussionsSettingInput!): UpdateEnterpriseTeamDiscussionsSettingPayload
   *
   * type UpdateEnterpriseTeamDiscussionsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseTeamDiscussionsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseTeamDiscussionsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets the two-factor authentication methods that users of an enterprise may not use.
   *
   * ```graphql
   * updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting(input: UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput!): UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload
   *
   * type UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether two factor authentication is required for all users in an enterprise.
   *
   * ```graphql
   * updateEnterpriseTwoFactorAuthenticationRequiredSetting(input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!): UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
   *
   * type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload {
   * clientMutationId: String
   * enterprise: Enterprise
   * message: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnterpriseTwoFactorAuthenticationRequiredSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * enterprise: true,
   * message: true
   * })
   * ```
   */
  updateEnterpriseTwoFactorAuthenticationRequiredSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an environment.
   *
   * ```graphql
   * updateEnvironment(input: UpdateEnvironmentInput!): UpdateEnvironmentPayload
   *
   * type UpdateEnvironmentPayload {
   * clientMutationId: String
   * environment: Environment
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateEnvironment({
   * // $: { ...variables }
   * clientMutationId: true,
   * environment: true
   * })
   * ```
   */
  updateEnvironment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether an IP allow list is enabled on an owner.
   *
   * ```graphql
   * updateIpAllowListEnabledSetting(input: UpdateIpAllowListEnabledSettingInput!): UpdateIpAllowListEnabledSettingPayload
   *
   * type UpdateIpAllowListEnabledSettingPayload {
   * clientMutationId: String
   * owner: IpAllowListOwner
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateIpAllowListEnabledSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true
   * })
   * ```
   */
  updateIpAllowListEnabledSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an IP allow list entry.
   *
   * ```graphql
   * updateIpAllowListEntry(input: UpdateIpAllowListEntryInput!): UpdateIpAllowListEntryPayload
   *
   * type UpdateIpAllowListEntryPayload {
   * clientMutationId: String
   * ipAllowListEntry: IpAllowListEntry
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateIpAllowListEntry({
   * // $: { ...variables }
   * clientMutationId: true,
   * ipAllowListEntry: true
   * })
   * ```
   */
  updateIpAllowListEntry: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether IP allow list configuration for installed GitHub Apps is enabled on an owner.
   *
   * ```graphql
   * updateIpAllowListForInstalledAppsEnabledSetting(input: UpdateIpAllowListForInstalledAppsEnabledSettingInput!): UpdateIpAllowListForInstalledAppsEnabledSettingPayload
   *
   * type UpdateIpAllowListForInstalledAppsEnabledSettingPayload {
   * clientMutationId: String
   * owner: IpAllowListOwner
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateIpAllowListForInstalledAppsEnabledSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true
   * })
   * ```
   */
  updateIpAllowListForInstalledAppsEnabledSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an Issue.
   *
   * ```graphql
   * updateIssue(input: UpdateIssueInput!): UpdateIssuePayload
   *
   * type UpdateIssuePayload {
   * actor: Actor
   * clientMutationId: String
   * issue: Issue
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateIssue({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * issue: true
   * })
   * ```
   */
  updateIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an IssueComment object.
   *
   * ```graphql
   * updateIssueComment(input: UpdateIssueCommentInput!): UpdateIssueCommentPayload
   *
   * type UpdateIssueCommentPayload {
   * clientMutationId: String
   * issueComment: IssueComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateIssueComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * issueComment: true
   * })
   * ```
   */
  updateIssueComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing label.
   *
   * ```graphql
   * updateLabel(input: UpdateLabelInput!): UpdateLabelPayload
   *
   * type UpdateLabelPayload {
   * clientMutationId: String
   * label: Label
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateLabel({
   * // $: { ...variables }
   * clientMutationId: true,
   * label: true
   * })
   * ```
   */
  updateLabel: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update the setting to restrict notifications to only verified or approved domains available to an owner.
   *
   * ```graphql
   * updateNotificationRestrictionSetting(input: UpdateNotificationRestrictionSettingInput!): UpdateNotificationRestrictionSettingPayload
   *
   * type UpdateNotificationRestrictionSettingPayload {
   * clientMutationId: String
   * owner: VerifiableDomainOwner
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateNotificationRestrictionSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * owner: true
   * })
   * ```
   */
  updateNotificationRestrictionSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether private repository forks are enabled for an organization.
   *
   * ```graphql
   * updateOrganizationAllowPrivateRepositoryForkingSetting(input: UpdateOrganizationAllowPrivateRepositoryForkingSettingInput!): UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload
   *
   * type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload {
   * clientMutationId: String
   * message: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateOrganizationAllowPrivateRepositoryForkingSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true,
   * organization: true
   * })
   * ```
   */
  updateOrganizationAllowPrivateRepositoryForkingSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether contributors are required to sign off on web-based commits for repositories in an organization.
   *
   * ```graphql
   * updateOrganizationWebCommitSignoffSetting(input: UpdateOrganizationWebCommitSignoffSettingInput!): UpdateOrganizationWebCommitSignoffSettingPayload
   *
   * type UpdateOrganizationWebCommitSignoffSettingPayload {
   * clientMutationId: String
   * message: String
   * organization: Organization
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateOrganizationWebCommitSignoffSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true,
   * organization: true
   * })
   * ```
   */
  updateOrganizationWebCommitSignoffSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
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
   * clientMutationId: String
   * sponsorsListing: SponsorsListing
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
   *
   * @example
   * ```ts
   * const doc = mutation.updatePatreonSponsorability({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorsListing: true
   * })
   * ```
   */
  updatePatreonSponsorability: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing project.
   *
   * ```graphql
   * updateProject(input: UpdateProjectInput!): UpdateProjectPayload
   *
   * type UpdateProjectPayload {
   * clientMutationId: String
   * project: Project
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProject({
   * // $: { ...variables }
   * clientMutationId: true,
   * project: true
   * })
   * ```
   */
  updateProject: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing project card.
   *
   * ```graphql
   * updateProjectCard(input: UpdateProjectCardInput!): UpdateProjectCardPayload
   *
   * type UpdateProjectCardPayload {
   * clientMutationId: String
   * projectCard: ProjectCard
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectCard({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectCard: true
   * })
   * ```
   */
  updateProjectCard: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing project column.
   *
   * ```graphql
   * updateProjectColumn(input: UpdateProjectColumnInput!): UpdateProjectColumnPayload
   *
   * type UpdateProjectColumnPayload {
   * clientMutationId: String
   * projectColumn: ProjectColumn
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectColumn({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectColumn: true
   * })
   * ```
   */
  updateProjectColumn: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing project.
   *
   * ```graphql
   * updateProjectV2(input: UpdateProjectV2Input!): UpdateProjectV2Payload
   *
   * type UpdateProjectV2Payload {
   * clientMutationId: String
   * projectV2: ProjectV2
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2: true
   * })
   * ```
   */
  updateProjectV2: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update the collaborators on a team or a project
   *
   * ```graphql
   * updateProjectV2Collaborators(input: UpdateProjectV2CollaboratorsInput!): UpdateProjectV2CollaboratorsPayload
   *
   * type UpdateProjectV2CollaboratorsPayload {
   * clientMutationId: String
   * collaborators(after: String, before: String, first: Int, last: Int): ProjectV2ActorConnection
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2Collaborators({
   * // $: { ...variables }
   * clientMutationId: true,
   * collaborators: true
   * })
   * ```
   */
  updateProjectV2Collaborators: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates a draft issue within a Project.
   *
   * ```graphql
   * updateProjectV2DraftIssue(input: UpdateProjectV2DraftIssueInput!): UpdateProjectV2DraftIssuePayload
   *
   * type UpdateProjectV2DraftIssuePayload {
   * clientMutationId: String
   * draftIssue: DraftIssue
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2DraftIssue({
   * // $: { ...variables }
   * clientMutationId: true,
   * draftIssue: true
   * })
   * ```
   */
  updateProjectV2DraftIssue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a project field.
   *
   * ```graphql
   * updateProjectV2Field(input: UpdateProjectV2FieldInput!): UpdateProjectV2FieldPayload
   *
   * type UpdateProjectV2FieldPayload {
   * clientMutationId: String
   * projectV2Field: ProjectV2FieldConfiguration
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2Field({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2Field: true
   * })
   * ```
   */
  updateProjectV2Field: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * This mutation updates the value of a field for an item in a Project. Currently
   * only single-select, text, number, date, and iteration fields are supported.
   *
   * ```graphql
   * updateProjectV2ItemFieldValue(input: UpdateProjectV2ItemFieldValueInput!): UpdateProjectV2ItemFieldValuePayload
   *
   * type UpdateProjectV2ItemFieldValuePayload {
   * clientMutationId: String
   * projectV2Item: ProjectV2Item
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2ItemFieldValue({
   * // $: { ...variables }
   * clientMutationId: true,
   * projectV2Item: true
   * })
   * ```
   */
  updateProjectV2ItemFieldValue: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * This mutation updates the position of the item in the project, where the position represents the priority of an item.
   *
   * ```graphql
   * updateProjectV2ItemPosition(input: UpdateProjectV2ItemPositionInput!): UpdateProjectV2ItemPositionPayload
   *
   * type UpdateProjectV2ItemPositionPayload {
   * clientMutationId: String
   * items(after: String, before: String, first: Int, last: Int): ProjectV2ItemConnection
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2ItemPosition({
   * // $: { ...variables }
   * clientMutationId: true,
   * items: true
   * })
   * ```
   */
  updateProjectV2ItemPosition: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates a status update within a Project.
   *
   * ```graphql
   * updateProjectV2StatusUpdate(input: UpdateProjectV2StatusUpdateInput!): UpdateProjectV2StatusUpdatePayload
   *
   * type UpdateProjectV2StatusUpdatePayload {
   * clientMutationId: String
   * statusUpdate: ProjectV2StatusUpdate
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateProjectV2StatusUpdate({
   * // $: { ...variables }
   * clientMutationId: true,
   * statusUpdate: true
   * })
   * ```
   */
  updateProjectV2StatusUpdate: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a pull request
   *
   * ```graphql
   * updatePullRequest(input: UpdatePullRequestInput!): UpdatePullRequestPayload
   *
   * type UpdatePullRequestPayload {
   * actor: Actor
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.updatePullRequest({
   * // $: { ...variables }
   * actor: true,
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  updatePullRequest: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Merge or Rebase HEAD from upstream branch into pull request branch
   *
   * ```graphql
   * updatePullRequestBranch(input: UpdatePullRequestBranchInput!): UpdatePullRequestBranchPayload
   *
   * type UpdatePullRequestBranchPayload {
   * clientMutationId: String
   * pullRequest: PullRequest
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
   *
   * @example
   * ```ts
   * const doc = mutation.updatePullRequestBranch({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequest: true
   * })
   * ```
   */
  updatePullRequestBranch: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates the body of a pull request review.
   *
   * ```graphql
   * updatePullRequestReview(input: UpdatePullRequestReviewInput!): UpdatePullRequestReviewPayload
   *
   * type UpdatePullRequestReviewPayload {
   * clientMutationId: String
   * pullRequestReview: PullRequestReview
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
   *
   * @example
   * ```ts
   * const doc = mutation.updatePullRequestReview({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReview: true
   * })
   * ```
   */
  updatePullRequestReview: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates a pull request review comment.
   *
   * ```graphql
   * updatePullRequestReviewComment(input: UpdatePullRequestReviewCommentInput!): UpdatePullRequestReviewCommentPayload
   *
   * type UpdatePullRequestReviewCommentPayload {
   * clientMutationId: String
   * pullRequestReviewComment: PullRequestReviewComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.updatePullRequestReviewComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * pullRequestReviewComment: true
   * })
   * ```
   */
  updatePullRequestReviewComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a Git Ref.
   *
   * ```graphql
   * updateRef(input: UpdateRefInput!): UpdateRefPayload
   *
   * type UpdateRefPayload {
   * clientMutationId: String
   * ref: Ref
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateRef({
   * // $: { ...variables }
   * clientMutationId: true,
   * ref: true
   * })
   * ```
   */
  updateRef: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
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
   * clientMutationId: String
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateRefs({
   * // $: { ...variables }
   * clientMutationId: true
   * })
   * ```
   */
  updateRefs: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update information about a repository.
   *
   * ```graphql
   * updateRepository(input: UpdateRepositoryInput!): UpdateRepositoryPayload
   *
   * type UpdateRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true
   * })
   * ```
   */
  updateRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update a repository ruleset
   *
   * ```graphql
   * updateRepositoryRuleset(input: UpdateRepositoryRulesetInput!): UpdateRepositoryRulesetPayload
   *
   * type UpdateRepositoryRulesetPayload {
   * clientMutationId: String
   * ruleset: RepositoryRuleset
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateRepositoryRuleset({
   * // $: { ...variables }
   * clientMutationId: true,
   * ruleset: true
   * })
   * ```
   */
  updateRepositoryRuleset: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Sets whether contributors are required to sign off on web-based commits for a repository.
   *
   * ```graphql
   * updateRepositoryWebCommitSignoffSetting(input: UpdateRepositoryWebCommitSignoffSettingInput!): UpdateRepositoryWebCommitSignoffSettingPayload
   *
   * type UpdateRepositoryWebCommitSignoffSettingPayload {
   * clientMutationId: String
   * message: String
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateRepositoryWebCommitSignoffSetting({
   * // $: { ...variables }
   * clientMutationId: true,
   * message: true,
   * repository: true
   * })
   * ```
   */
  updateRepositoryWebCommitSignoffSetting: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Change visibility of your sponsorship and opt in or out of email updates from the maintainer.
   *
   * ```graphql
   * updateSponsorshipPreferences(input: UpdateSponsorshipPreferencesInput!): UpdateSponsorshipPreferencesPayload
   *
   * type UpdateSponsorshipPreferencesPayload {
   * clientMutationId: String
   * sponsorship: Sponsorship
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateSponsorshipPreferences({
   * // $: { ...variables }
   * clientMutationId: true,
   * sponsorship: true
   * })
   * ```
   */
  updateSponsorshipPreferences: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates the state for subscribable subjects.
   *
   * ```graphql
   * updateSubscription(input: UpdateSubscriptionInput!): UpdateSubscriptionPayload
   *
   * type UpdateSubscriptionPayload {
   * clientMutationId: String
   * subscribable: Subscribable
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateSubscription({
   * // $: { ...variables }
   * clientMutationId: true,
   * subscribable: true
   * })
   * ```
   */
  updateSubscription: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates a team discussion.
   *
   * ```graphql
   * updateTeamDiscussion(input: UpdateTeamDiscussionInput!): UpdateTeamDiscussionPayload
   *
   * type UpdateTeamDiscussionPayload {
   * clientMutationId: String
   * teamDiscussion: TeamDiscussion
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateTeamDiscussion({
   * // $: { ...variables }
   * clientMutationId: true,
   * teamDiscussion: true
   * })
   * ```
   */
  updateTeamDiscussion: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates a discussion comment.
   *
   * ```graphql
   * updateTeamDiscussionComment(input: UpdateTeamDiscussionCommentInput!): UpdateTeamDiscussionCommentPayload
   *
   * type UpdateTeamDiscussionCommentPayload {
   * clientMutationId: String
   * teamDiscussionComment: TeamDiscussionComment
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateTeamDiscussionComment({
   * // $: { ...variables }
   * clientMutationId: true,
   * teamDiscussionComment: true
   * })
   * ```
   */
  updateTeamDiscussionComment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates team review assignment.
   *
   * ```graphql
   * updateTeamReviewAssignment(input: UpdateTeamReviewAssignmentInput!): UpdateTeamReviewAssignmentPayload
   *
   * type UpdateTeamReviewAssignmentPayload {
   * clientMutationId: String
   * team: Team
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateTeamReviewAssignment({
   * // $: { ...variables }
   * clientMutationId: true,
   * team: true
   * })
   * ```
   */
  updateTeamReviewAssignment: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Update team repository.
   *
   * ```graphql
   * updateTeamsRepository(input: UpdateTeamsRepositoryInput!): UpdateTeamsRepositoryPayload
   *
   * type UpdateTeamsRepositoryPayload {
   * clientMutationId: String
   * repository: Repository
   * teams: [Team!]
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateTeamsRepository({
   * // $: { ...variables }
   * clientMutationId: true,
   * repository: true,
   * teams: true
   * })
   * ```
   */
  updateTeamsRepository: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Replaces the repository's topics with the given topics.
   *
   * ```graphql
   * updateTopics(input: UpdateTopicsInput!): UpdateTopicsPayload
   *
   * type UpdateTopicsPayload {
   * clientMutationId: String
   * invalidTopicNames: [String!]
   * repository: Repository
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateTopics({
   * // $: { ...variables }
   * clientMutationId: true,
   * invalidTopicNames: true,
   * repository: true
   * })
   * ```
   */
  updateTopics: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates an existing user list.
   *
   * ```graphql
   * updateUserList(input: UpdateUserListInput!): UpdateUserListPayload
   *
   * type UpdateUserListPayload {
   * clientMutationId: String
   * list: UserList
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateUserList({
   * // $: { ...variables }
   * clientMutationId: true,
   * list: true
   * })
   * ```
   */
  updateUserList: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Updates which of the viewer's lists an item belongs to
   *
   * ```graphql
   * updateUserListsForItem(input: UpdateUserListsForItemInput!): UpdateUserListsForItemPayload
   *
   * type UpdateUserListsForItemPayload {
   * clientMutationId: String
   * item: UserListItems
   * lists: [UserList!]
   * user: User
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
   *
   * @example
   * ```ts
   * const doc = mutation.updateUserListsForItem({
   * // $: { ...variables }
   * clientMutationId: true,
   * item: true,
   * lists: true,
   * // ...
   * })
   * ```
   */
  updateUserListsForItem: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >

  /**
   * Verify that a verifiable domain has the expected DNS record.
   *
   * ```graphql
   * verifyVerifiableDomain(input: VerifyVerifiableDomainInput!): VerifyVerifiableDomainPayload
   *
   * type VerifyVerifiableDomainPayload {
   * clientMutationId: String
   * domain: VerifiableDomain
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
   *
   * @example
   * ```ts
   * const doc = mutation.verifyVerifiableDomain({
   * // $: { ...variables }
   * clientMutationId: true,
   * domain: true
   * })
   * ```
   */
  verifyVerifiableDomain: <
    const $SelectionSet extends SelectionSets.Mutation<
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
    >,
    true
  >
}
/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation: MutationBuilder = createStaticRootType(OperationTypeNode.MUTATION, { sddm }) as any

/**
 * Create a full GraphQL document with one or more named operations.
 *
 * Unlike `query` and `mutation` which create single-operation documents, this function creates a full document that can contain multiple operations. Returns a `TypedFullDocumentString` that captures type information for all operations.
 *
 * @param documentObject - Document object with query and/or mutation operations
 * @returns TypedFullDocumentString representing the complete document
 *
 * @example
 * ```ts
 * const doc = document({
 * query: {
 * getUser: { user: { id: true, name: true } },
 * getPost: { post: { id: true, title: true } }
 * }
 * })
 *
 * // Use with client.send()
 * const user = await client.send(doc, 'getUser')
 * ```
 */
export const document = ((documentObject: any) => documentBuilder(documentObject, { sddm })) as Document

/**
 * Document builder function type for creating multi-operation documents.
 */
export interface Document {
  <$Document>(
    document: $$Utilities.ExactNonEmpty<
      $Document,
      SelectionSets.$Document<
        { scalars: $$Scalar.$Registry }
      >
    >,
  ): TypedFullDocumentString<
    // @ts-expect-error - Excessive stack depth with large schema (GitHub has 16k+ lines). This is a known TypeScript limitation.
    InferOperations<$Document, $$Schema.Schema, ArgumentsMap.ArgumentsMap, StaticDocumentContext>
  >
}

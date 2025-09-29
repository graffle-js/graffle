import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'

//
//
//
//
//
//
// ==================================================================================================
//                                         Type Inputs Index
// ==================================================================================================
//
//
//
//
//
//
/**
 * Mapping of GraphQL type names to their TypeScript input types.
 * This is used for O(1) type lookups during variable type inference.
 */
// Standard GraphQL scalars
export type String = string
export type Int = number
export type Float = number
export type Boolean = boolean
export type ID = string

// Custom scalars (encoded types for inputs)
export type Base64String = string
export type BigInt = string
export type Date = string
export type DateTime = string
export type GitObjectID = string
export type GitRefname = string
export type GitSSHRemote = string
export type GitTimestamp = string
export type HTML = string
export type PreciseDateTime = string
export type URI = string
export type X509Certificate = string

// Enums
export type ActorType = 'TEAM' | 'USER'
export type AuditLogOrderField = 'CREATED_AT'
export type CheckAnnotationLevel = 'FAILURE' | 'NOTICE' | 'WARNING'
export type CheckConclusionState =
  | 'ACTION_REQUIRED'
  | 'CANCELLED'
  | 'FAILURE'
  | 'NEUTRAL'
  | 'SKIPPED'
  | 'STALE'
  | 'STARTUP_FAILURE'
  | 'SUCCESS'
  | 'TIMED_OUT'
export type CheckRunState =
  | 'ACTION_REQUIRED'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILURE'
  | 'IN_PROGRESS'
  | 'NEUTRAL'
  | 'PENDING'
  | 'QUEUED'
  | 'SKIPPED'
  | 'STALE'
  | 'STARTUP_FAILURE'
  | 'SUCCESS'
  | 'TIMED_OUT'
  | 'WAITING'
export type CheckRunType = 'ALL' | 'LATEST'
export type CheckStatusState = 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' | 'QUEUED' | 'REQUESTED' | 'WAITING'
export type CollaboratorAffiliation = 'ALL' | 'DIRECT' | 'OUTSIDE'
export type CommentAuthorAssociation =
  | 'COLLABORATOR'
  | 'CONTRIBUTOR'
  | 'FIRST_TIMER'
  | 'FIRST_TIME_CONTRIBUTOR'
  | 'MANNEQUIN'
  | 'MEMBER'
  | 'NONE'
  | 'OWNER'
export type CommentCannotUpdateReason =
  | 'ARCHIVED'
  | 'DENIED'
  | 'INSUFFICIENT_ACCESS'
  | 'LOCKED'
  | 'LOGIN_REQUIRED'
  | 'MAINTENANCE'
  | 'VERIFIED_EMAIL_REQUIRED'
export type CommitContributionOrderField = 'COMMIT_COUNT' | 'OCCURRED_AT'
export type ComparisonStatus = 'AHEAD' | 'BEHIND' | 'DIVERGED' | 'IDENTICAL'
export type ContributionLevel = 'FIRST_QUARTILE' | 'FOURTH_QUARTILE' | 'NONE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE'
export type DefaultRepositoryPermissionField = 'ADMIN' | 'NONE' | 'READ' | 'WRITE'
export type DependencyGraphEcosystem =
  | 'ACTIONS'
  | 'COMPOSER'
  | 'GO'
  | 'MAVEN'
  | 'NPM'
  | 'NUGET'
  | 'PIP'
  | 'PUB'
  | 'RUBYGEMS'
  | 'RUST'
  | 'SWIFT'
export type DeploymentOrderField = 'CREATED_AT'
export type DeploymentProtectionRuleType = 'BRANCH_POLICY' | 'REQUIRED_REVIEWERS' | 'WAIT_TIMER'
export type DeploymentReviewState = 'APPROVED' | 'REJECTED'
export type DeploymentState =
  | 'ABANDONED'
  | 'ACTIVE'
  | 'DESTROYED'
  | 'ERROR'
  | 'FAILURE'
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'PENDING'
  | 'QUEUED'
  | 'SUCCESS'
  | 'WAITING'
export type DeploymentStatusState =
  | 'ERROR'
  | 'FAILURE'
  | 'INACTIVE'
  | 'IN_PROGRESS'
  | 'PENDING'
  | 'QUEUED'
  | 'SUCCESS'
  | 'WAITING'
export type DiffSide = 'LEFT' | 'RIGHT'
export type DiscussionCloseReason = 'DUPLICATE' | 'OUTDATED' | 'RESOLVED'
export type DiscussionOrderField = 'CREATED_AT' | 'UPDATED_AT'
export type DiscussionPollOptionOrderField = 'AUTHORED_ORDER' | 'VOTE_COUNT'
export type DiscussionState = 'CLOSED' | 'OPEN'
export type DiscussionStateReason = 'DUPLICATE' | 'OUTDATED' | 'REOPENED' | 'RESOLVED'
export type DismissReason = 'FIX_STARTED' | 'INACCURATE' | 'NOT_USED' | 'NO_BANDWIDTH' | 'TOLERABLE_RISK'
export type EnterpriseAdministratorInvitationOrderField = 'CREATED_AT'
export type EnterpriseAdministratorRole = 'BILLING_MANAGER' | 'OWNER'
export type EnterpriseAllowPrivateRepositoryForkingPolicyValue =
  | 'ENTERPRISE_ORGANIZATIONS'
  | 'ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS'
  | 'EVERYWHERE'
  | 'SAME_ORGANIZATION'
  | 'SAME_ORGANIZATION_USER_ACCOUNTS'
  | 'USER_ACCOUNTS'
export type EnterpriseDefaultRepositoryPermissionSettingValue = 'ADMIN' | 'NONE' | 'NO_POLICY' | 'READ' | 'WRITE'
export type EnterpriseDisallowedMethodsSettingValue = 'INSECURE' | 'NO_POLICY'
export type EnterpriseEnabledDisabledSettingValue = 'DISABLED' | 'ENABLED' | 'NO_POLICY'
export type EnterpriseEnabledSettingValue = 'ENABLED' | 'NO_POLICY'
export type EnterpriseMemberInvitationOrderField = 'CREATED_AT'
export type EnterpriseMemberOrderField = 'CREATED_AT' | 'LOGIN'
export type EnterpriseMembersCanCreateRepositoriesSettingValue = 'ALL' | 'DISABLED' | 'NO_POLICY' | 'PRIVATE' | 'PUBLIC'
export type EnterpriseMembersCanMakePurchasesSettingValue = 'DISABLED' | 'ENABLED'
export type EnterpriseMembershipType = 'ADMIN' | 'ALL' | 'BILLING_MANAGER' | 'ORG_MEMBERSHIP'
export type EnterpriseOrderField = 'NAME'
export type EnterpriseServerInstallationOrderField = 'CREATED_AT' | 'CUSTOMER_NAME' | 'HOST_NAME'
export type EnterpriseServerUserAccountEmailOrderField = 'EMAIL'
export type EnterpriseServerUserAccountOrderField = 'LOGIN' | 'REMOTE_CREATED_AT'
export type EnterpriseServerUserAccountsUploadOrderField = 'CREATED_AT'
export type EnterpriseServerUserAccountsUploadSyncState = 'FAILURE' | 'PENDING' | 'SUCCESS'
export type EnterpriseUserAccountMembershipRole = 'MEMBER' | 'OWNER' | 'UNAFFILIATED'
export type EnterpriseUserDeployment = 'CLOUD' | 'SERVER'
export type EnvironmentOrderField = 'NAME'
export type EnvironmentPinnedFilterField = 'ALL' | 'NONE' | 'ONLY'
export type FileViewedState = 'DISMISSED' | 'UNVIEWED' | 'VIEWED'
export type FundingPlatform =
  | 'BUY_ME_A_COFFEE'
  | 'COMMUNITY_BRIDGE'
  | 'CUSTOM'
  | 'GITHUB'
  | 'ISSUEHUNT'
  | 'KO_FI'
  | 'LFX_CROWDFUNDING'
  | 'LIBERAPAY'
  | 'OPEN_COLLECTIVE'
  | 'PATREON'
  | 'POLAR'
  | 'THANKS_DEV'
  | 'TIDELIFT'
export type GistOrderField = 'CREATED_AT' | 'PUSHED_AT' | 'UPDATED_AT'
export type GistPrivacy = 'ALL' | 'PUBLIC' | 'SECRET'
export type GitSignatureState =
  | 'BAD_CERT'
  | 'BAD_EMAIL'
  | 'EXPIRED_KEY'
  | 'GPGVERIFY_ERROR'
  | 'GPGVERIFY_UNAVAILABLE'
  | 'INVALID'
  | 'MALFORMED_SIG'
  | 'NOT_SIGNING_KEY'
  | 'NO_USER'
  | 'OCSP_ERROR'
  | 'OCSP_PENDING'
  | 'OCSP_REVOKED'
  | 'UNKNOWN_KEY'
  | 'UNKNOWN_SIG_TYPE'
  | 'UNSIGNED'
  | 'UNVERIFIED_EMAIL'
  | 'VALID'
export type IdentityProviderConfigurationState = 'CONFIGURED' | 'ENFORCED' | 'UNCONFIGURED'
export type IpAllowListEnabledSettingValue = 'DISABLED' | 'ENABLED'
export type IpAllowListEntryOrderField = 'ALLOW_LIST_VALUE' | 'CREATED_AT'
export type IpAllowListForInstalledAppsEnabledSettingValue = 'DISABLED' | 'ENABLED'
export type IssueClosedStateReason = 'COMPLETED' | 'DUPLICATE' | 'NOT_PLANNED'
export type IssueCommentOrderField = 'UPDATED_AT'
export type IssueOrderField = 'COMMENTS' | 'CREATED_AT' | 'UPDATED_AT'
export type IssueState = 'CLOSED' | 'OPEN'
export type IssueStateReason = 'COMPLETED' | 'DUPLICATE' | 'NOT_PLANNED' | 'REOPENED'
export type IssueTimelineItemsItemType =
  | 'ADDED_TO_PROJECT_EVENT'
  | 'ASSIGNED_EVENT'
  | 'CLOSED_EVENT'
  | 'COMMENT_DELETED_EVENT'
  | 'CONNECTED_EVENT'
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  | 'CONVERTED_TO_DISCUSSION_EVENT'
  | 'CROSS_REFERENCED_EVENT'
  | 'DEMILESTONED_EVENT'
  | 'DISCONNECTED_EVENT'
  | 'ISSUE_COMMENT'
  | 'LABELED_EVENT'
  | 'LOCKED_EVENT'
  | 'MARKED_AS_DUPLICATE_EVENT'
  | 'MENTIONED_EVENT'
  | 'MILESTONED_EVENT'
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  | 'PARENT_ISSUE_ADDED_EVENT'
  | 'PARENT_ISSUE_REMOVED_EVENT'
  | 'PINNED_EVENT'
  | 'REFERENCED_EVENT'
  | 'REMOVED_FROM_PROJECT_EVENT'
  | 'RENAMED_TITLE_EVENT'
  | 'REOPENED_EVENT'
  | 'SUBSCRIBED_EVENT'
  | 'SUB_ISSUE_ADDED_EVENT'
  | 'SUB_ISSUE_REMOVED_EVENT'
  | 'TRANSFERRED_EVENT'
  | 'UNASSIGNED_EVENT'
  | 'UNLABELED_EVENT'
  | 'UNLOCKED_EVENT'
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  | 'UNPINNED_EVENT'
  | 'UNSUBSCRIBED_EVENT'
  | 'USER_BLOCKED_EVENT'
export type LabelOrderField = 'CREATED_AT' | 'NAME'
export type LanguageOrderField = 'SIZE'
export type LockReason = 'OFF_TOPIC' | 'RESOLVED' | 'SPAM' | 'TOO_HEATED'
export type MannequinOrderField = 'CREATED_AT' | 'LOGIN'
export type MergeCommitMessage = 'BLANK' | 'PR_BODY' | 'PR_TITLE'
export type MergeCommitTitle = 'MERGE_MESSAGE' | 'PR_TITLE'
export type MergeQueueEntryState = 'AWAITING_CHECKS' | 'LOCKED' | 'MERGEABLE' | 'QUEUED' | 'UNMERGEABLE'
export type MergeQueueGroupingStrategy = 'ALLGREEN' | 'HEADGREEN'
export type MergeQueueMergeMethod = 'MERGE' | 'REBASE' | 'SQUASH'
export type MergeQueueMergingStrategy = 'ALLGREEN' | 'HEADGREEN'
export type MergeStateStatus = 'BEHIND' | 'BLOCKED' | 'CLEAN' | 'DIRTY' | 'DRAFT' | 'HAS_HOOKS' | 'UNKNOWN' | 'UNSTABLE'
export type MergeableState = 'CONFLICTING' | 'MERGEABLE' | 'UNKNOWN'
export type MigrationSourceType = 'AZURE_DEVOPS' | 'BITBUCKET_SERVER' | 'GITHUB_ARCHIVE'
export type MigrationState =
  | 'FAILED'
  | 'FAILED_VALIDATION'
  | 'IN_PROGRESS'
  | 'NOT_STARTED'
  | 'PENDING_VALIDATION'
  | 'QUEUED'
  | 'SUCCEEDED'
export type MilestoneOrderField = 'CREATED_AT' | 'DUE_DATE' | 'NUMBER' | 'UPDATED_AT'
export type MilestoneState = 'CLOSED' | 'OPEN'
export type NotificationRestrictionSettingValue = 'DISABLED' | 'ENABLED'
export type OIDCProviderType = 'AAD'
export type OauthApplicationCreateAuditEntryState = 'ACTIVE' | 'PENDING_DELETION' | 'SUSPENDED'
export type OperationType = 'ACCESS' | 'AUTHENTICATION' | 'CREATE' | 'MODIFY' | 'REMOVE' | 'RESTORE' | 'TRANSFER'
export type OrderDirection = 'ASC' | 'DESC'
export type OrgAddMemberAuditEntryPermission = 'ADMIN' | 'READ'
export type OrgCreateAuditEntryBillingPlan = 'BUSINESS' | 'BUSINESS_PLUS' | 'FREE' | 'TIERED_PER_SEAT' | 'UNLIMITED'
export type OrgEnterpriseOwnerOrderField = 'LOGIN'
export type OrgRemoveBillingManagerAuditEntryReason =
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
export type OrgRemoveMemberAuditEntryMembershipType =
  | 'ADMIN'
  | 'BILLING_MANAGER'
  | 'DIRECT_MEMBER'
  | 'OUTSIDE_COLLABORATOR'
  | 'SUSPENDED'
  | 'UNAFFILIATED'
export type OrgRemoveMemberAuditEntryReason =
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  | 'TWO_FACTOR_ACCOUNT_RECOVERY'
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  | 'USER_ACCOUNT_DELETED'
export type OrgRemoveOutsideCollaboratorAuditEntryMembershipType =
  | 'BILLING_MANAGER'
  | 'OUTSIDE_COLLABORATOR'
  | 'UNAFFILIATED'
export type OrgRemoveOutsideCollaboratorAuditEntryReason =
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
export type OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = 'ADMIN' | 'NONE' | 'READ' | 'WRITE'
export type OrgUpdateMemberAuditEntryPermission = 'ADMIN' | 'READ'
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility =
  | 'ALL'
  | 'INTERNAL'
  | 'NONE'
  | 'PRIVATE'
  | 'PRIVATE_INTERNAL'
  | 'PUBLIC'
  | 'PUBLIC_INTERNAL'
  | 'PUBLIC_PRIVATE'
export type OrganizationInvitationRole = 'ADMIN' | 'BILLING_MANAGER' | 'DIRECT_MEMBER' | 'REINSTATE'
export type OrganizationInvitationSource = 'MEMBER' | 'SCIM' | 'UNKNOWN'
export type OrganizationInvitationType = 'EMAIL' | 'USER'
export type OrganizationMemberRole = 'ADMIN' | 'MEMBER'
export type OrganizationMembersCanCreateRepositoriesSettingValue = 'ALL' | 'DISABLED' | 'INTERNAL' | 'PRIVATE'
export type OrganizationMigrationState =
  | 'FAILED'
  | 'FAILED_VALIDATION'
  | 'IN_PROGRESS'
  | 'NOT_STARTED'
  | 'PENDING_VALIDATION'
  | 'POST_REPO_MIGRATION'
  | 'PRE_REPO_MIGRATION'
  | 'QUEUED'
  | 'REPO_MIGRATION'
  | 'SUCCEEDED'
export type OrganizationOrderField = 'CREATED_AT' | 'LOGIN'
export type PackageFileOrderField = 'CREATED_AT'
export type PackageOrderField = 'CREATED_AT'
export type PackageType = 'DEBIAN' | 'DOCKER' | 'MAVEN' | 'NPM' | 'NUGET' | 'PYPI' | 'RUBYGEMS'
export type PackageVersionOrderField = 'CREATED_AT'
export type PatchStatus = 'ADDED' | 'CHANGED' | 'COPIED' | 'DELETED' | 'MODIFIED' | 'RENAMED'
export type PinnableItemType =
  | 'GIST'
  | 'ISSUE'
  | 'ORGANIZATION'
  | 'PROJECT'
  | 'PULL_REQUEST'
  | 'REPOSITORY'
  | 'TEAM'
  | 'USER'
export type PinnedDiscussionGradient = 'BLUE_MINT' | 'BLUE_PURPLE' | 'PINK_BLUE' | 'PURPLE_CORAL' | 'RED_ORANGE'
export type PinnedDiscussionPattern = 'CHEVRON_UP' | 'DOT' | 'DOT_FILL' | 'HEART_FILL' | 'PLUS' | 'ZAP'
export type PinnedEnvironmentOrderField = 'POSITION'
export type ProjectCardArchivedState = 'ARCHIVED' | 'NOT_ARCHIVED'
export type ProjectCardState = 'CONTENT_ONLY' | 'NOTE_ONLY' | 'REDACTED'
export type ProjectColumnPurpose = 'DONE' | 'IN_PROGRESS' | 'TODO'
export type ProjectOrderField = 'CREATED_AT' | 'NAME' | 'UPDATED_AT'
export type ProjectState = 'CLOSED' | 'OPEN'
export type ProjectTemplate = 'AUTOMATED_KANBAN_V2' | 'AUTOMATED_REVIEWS_KANBAN' | 'BASIC_KANBAN' | 'BUG_TRIAGE'
export type ProjectV2CustomFieldType = 'DATE' | 'NUMBER' | 'SINGLE_SELECT' | 'TEXT'
export type ProjectV2FieldOrderField = 'CREATED_AT' | 'NAME' | 'POSITION'
export type ProjectV2FieldType =
  | 'ASSIGNEES'
  | 'DATE'
  | 'ITERATION'
  | 'LABELS'
  | 'LINKED_PULL_REQUESTS'
  | 'MILESTONE'
  | 'NUMBER'
  | 'REPOSITORY'
  | 'REVIEWERS'
  | 'SINGLE_SELECT'
  | 'TEXT'
  | 'TITLE'
  | 'TRACKED_BY'
  | 'TRACKS'
export type ProjectV2ItemFieldValueOrderField = 'POSITION'
export type ProjectV2ItemOrderField = 'POSITION'
export type ProjectV2ItemType = 'DRAFT_ISSUE' | 'ISSUE' | 'PULL_REQUEST' | 'REDACTED'
export type ProjectV2OrderField = 'CREATED_AT' | 'NUMBER' | 'TITLE' | 'UPDATED_AT'
export type ProjectV2PermissionLevel = 'ADMIN' | 'READ' | 'WRITE'
export type ProjectV2Roles = 'ADMIN' | 'NONE' | 'READER' | 'WRITER'
export type ProjectV2SingleSelectFieldOptionColor =
  | 'BLUE'
  | 'GRAY'
  | 'GREEN'
  | 'ORANGE'
  | 'PINK'
  | 'PURPLE'
  | 'RED'
  | 'YELLOW'
export type ProjectV2State = 'CLOSED' | 'OPEN'
export type ProjectV2StatusUpdateOrderField = 'CREATED_AT'
export type ProjectV2StatusUpdateStatus = 'AT_RISK' | 'COMPLETE' | 'INACTIVE' | 'OFF_TRACK' | 'ON_TRACK'
export type ProjectV2ViewLayout = 'BOARD_LAYOUT' | 'ROADMAP_LAYOUT' | 'TABLE_LAYOUT'
export type ProjectV2ViewOrderField = 'CREATED_AT' | 'NAME' | 'POSITION'
export type ProjectV2WorkflowsOrderField = 'CREATED_AT' | 'NAME' | 'NUMBER' | 'UPDATED_AT'
export type PullRequestBranchUpdateMethod = 'MERGE' | 'REBASE'
export type PullRequestMergeMethod = 'MERGE' | 'REBASE' | 'SQUASH'
export type PullRequestOrderField = 'CREATED_AT' | 'UPDATED_AT'
export type PullRequestReviewCommentState = 'PENDING' | 'SUBMITTED'
export type PullRequestReviewDecision = 'APPROVED' | 'CHANGES_REQUESTED' | 'REVIEW_REQUIRED'
export type PullRequestReviewEvent = 'APPROVE' | 'COMMENT' | 'DISMISS' | 'REQUEST_CHANGES'
export type PullRequestReviewState = 'APPROVED' | 'CHANGES_REQUESTED' | 'COMMENTED' | 'DISMISSED' | 'PENDING'
export type PullRequestReviewThreadSubjectType = 'FILE' | 'LINE'
export type PullRequestState = 'CLOSED' | 'MERGED' | 'OPEN'
export type PullRequestTimelineItemsItemType =
  | 'ADDED_TO_MERGE_QUEUE_EVENT'
  | 'ADDED_TO_PROJECT_EVENT'
  | 'ASSIGNED_EVENT'
  | 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT'
  | 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT'
  | 'AUTO_MERGE_DISABLED_EVENT'
  | 'AUTO_MERGE_ENABLED_EVENT'
  | 'AUTO_REBASE_ENABLED_EVENT'
  | 'AUTO_SQUASH_ENABLED_EVENT'
  | 'BASE_REF_CHANGED_EVENT'
  | 'BASE_REF_DELETED_EVENT'
  | 'BASE_REF_FORCE_PUSHED_EVENT'
  | 'CLOSED_EVENT'
  | 'COMMENT_DELETED_EVENT'
  | 'CONNECTED_EVENT'
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  | 'CONVERTED_TO_DISCUSSION_EVENT'
  | 'CONVERT_TO_DRAFT_EVENT'
  | 'CROSS_REFERENCED_EVENT'
  | 'DEMILESTONED_EVENT'
  | 'DEPLOYED_EVENT'
  | 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  | 'DISCONNECTED_EVENT'
  | 'HEAD_REF_DELETED_EVENT'
  | 'HEAD_REF_FORCE_PUSHED_EVENT'
  | 'HEAD_REF_RESTORED_EVENT'
  | 'ISSUE_COMMENT'
  | 'LABELED_EVENT'
  | 'LOCKED_EVENT'
  | 'MARKED_AS_DUPLICATE_EVENT'
  | 'MENTIONED_EVENT'
  | 'MERGED_EVENT'
  | 'MILESTONED_EVENT'
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  | 'PARENT_ISSUE_ADDED_EVENT'
  | 'PARENT_ISSUE_REMOVED_EVENT'
  | 'PINNED_EVENT'
  | 'PULL_REQUEST_COMMIT'
  | 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  | 'PULL_REQUEST_REVIEW'
  | 'PULL_REQUEST_REVIEW_THREAD'
  | 'PULL_REQUEST_REVISION_MARKER'
  | 'READY_FOR_REVIEW_EVENT'
  | 'REFERENCED_EVENT'
  | 'REMOVED_FROM_MERGE_QUEUE_EVENT'
  | 'REMOVED_FROM_PROJECT_EVENT'
  | 'RENAMED_TITLE_EVENT'
  | 'REOPENED_EVENT'
  | 'REVIEW_DISMISSED_EVENT'
  | 'REVIEW_REQUESTED_EVENT'
  | 'REVIEW_REQUEST_REMOVED_EVENT'
  | 'SUBSCRIBED_EVENT'
  | 'SUB_ISSUE_ADDED_EVENT'
  | 'SUB_ISSUE_REMOVED_EVENT'
  | 'TRANSFERRED_EVENT'
  | 'UNASSIGNED_EVENT'
  | 'UNLABELED_EVENT'
  | 'UNLOCKED_EVENT'
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  | 'UNPINNED_EVENT'
  | 'UNSUBSCRIBED_EVENT'
  | 'USER_BLOCKED_EVENT'
export type PullRequestUpdateState = 'CLOSED' | 'OPEN'
export type ReactionContent =
  | 'CONFUSED'
  | 'EYES'
  | 'HEART'
  | 'HOORAY'
  | 'LAUGH'
  | 'ROCKET'
  | 'THUMBS_DOWN'
  | 'THUMBS_UP'
export type ReactionOrderField = 'CREATED_AT'
export type RefOrderField = 'ALPHABETICAL' | 'TAG_COMMIT_DATE'
export type ReleaseOrderField = 'CREATED_AT' | 'NAME'
export type RepoAccessAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepoAddMemberAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepoArchivedAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepoChangeMergeSettingAuditEntryMergeType = 'MERGE' | 'REBASE' | 'SQUASH'
export type RepoCreateAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepoDestroyAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepoRemoveMemberAuditEntryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type ReportedContentClassifiers = 'ABUSE' | 'DUPLICATE' | 'OFF_TOPIC' | 'OUTDATED' | 'RESOLVED' | 'SPAM'
export type RepositoryAffiliation = 'COLLABORATOR' | 'ORGANIZATION_MEMBER' | 'OWNER'
export type RepositoryContributionType = 'COMMIT' | 'ISSUE' | 'PULL_REQUEST' | 'PULL_REQUEST_REVIEW' | 'REPOSITORY'
export type RepositoryInteractionLimit = 'COLLABORATORS_ONLY' | 'CONTRIBUTORS_ONLY' | 'EXISTING_USERS' | 'NO_LIMIT'
export type RepositoryInteractionLimitExpiry = 'ONE_DAY' | 'ONE_MONTH' | 'ONE_WEEK' | 'SIX_MONTHS' | 'THREE_DAYS'
export type RepositoryInteractionLimitOrigin = 'ORGANIZATION' | 'REPOSITORY' | 'USER'
export type RepositoryInvitationOrderField = 'CREATED_AT'
export type RepositoryLockReason =
  | 'BILLING'
  | 'MIGRATING'
  | 'MOVING'
  | 'RENAME'
  | 'TRADE_RESTRICTION'
  | 'TRANSFERRING_OWNERSHIP'
export type RepositoryMigrationOrderDirection = 'ASC' | 'DESC'
export type RepositoryMigrationOrderField = 'CREATED_AT'
export type RepositoryOrderField = 'CREATED_AT' | 'NAME' | 'PUSHED_AT' | 'STARGAZERS' | 'UPDATED_AT'
export type RepositoryPermission = 'ADMIN' | 'MAINTAIN' | 'READ' | 'TRIAGE' | 'WRITE'
export type RepositoryPrivacy = 'PRIVATE' | 'PUBLIC'
export type RepositoryRuleOrderField = 'CREATED_AT' | 'TYPE' | 'UPDATED_AT'
export type RepositoryRuleType =
  | 'AUTHORIZATION'
  | 'BRANCH_NAME_PATTERN'
  | 'CODE_SCANNING'
  | 'COMMITTER_EMAIL_PATTERN'
  | 'COMMIT_AUTHOR_EMAIL_PATTERN'
  | 'COMMIT_MESSAGE_PATTERN'
  | 'CREATION'
  | 'DELETION'
  | 'FILE_EXTENSION_RESTRICTION'
  | 'FILE_PATH_RESTRICTION'
  | 'LOCK_BRANCH'
  | 'MAX_FILE_PATH_LENGTH'
  | 'MAX_FILE_SIZE'
  | 'MAX_REF_UPDATES'
  | 'MERGE_QUEUE'
  | 'MERGE_QUEUE_LOCKED_REF'
  | 'NON_FAST_FORWARD'
  | 'PULL_REQUEST'
  | 'REQUIRED_DEPLOYMENTS'
  | 'REQUIRED_LINEAR_HISTORY'
  | 'REQUIRED_REVIEW_THREAD_RESOLUTION'
  | 'REQUIRED_SIGNATURES'
  | 'REQUIRED_STATUS_CHECKS'
  | 'REQUIRED_WORKFLOW_STATUS_CHECKS'
  | 'SECRET_SCANNING'
  | 'TAG'
  | 'TAG_NAME_PATTERN'
  | 'UPDATE'
  | 'WORKFLOWS'
  | 'WORKFLOW_UPDATES'
export type RepositoryRulesetBypassActorBypassMode = 'ALWAYS' | 'PULL_REQUEST'
export type RepositoryRulesetTarget = 'BRANCH' | 'PUSH' | 'REPOSITORY' | 'TAG'
export type RepositoryVisibility = 'INTERNAL' | 'PRIVATE' | 'PUBLIC'
export type RepositoryVulnerabilityAlertDependencyScope = 'DEVELOPMENT' | 'RUNTIME'
export type RepositoryVulnerabilityAlertState = 'AUTO_DISMISSED' | 'DISMISSED' | 'FIXED' | 'OPEN'
export type RequestableCheckStatusState = 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' | 'QUEUED' | 'WAITING'
export type RoleInOrganization = 'DIRECT_MEMBER' | 'OWNER' | 'UNAFFILIATED'
export type RuleEnforcement = 'ACTIVE' | 'DISABLED' | 'EVALUATE'
export type SamlDigestAlgorithm = 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512'
export type SamlSignatureAlgorithm = 'RSA_SHA1' | 'RSA_SHA256' | 'RSA_SHA384' | 'RSA_SHA512'
export type SavedReplyOrderField = 'UPDATED_AT'
export type SearchType = 'DISCUSSION' | 'ISSUE' | 'REPOSITORY' | 'USER'
export type SecurityAdvisoryClassification = 'GENERAL' | 'MALWARE'
export type SecurityAdvisoryEcosystem =
  | 'ACTIONS'
  | 'COMPOSER'
  | 'ERLANG'
  | 'GO'
  | 'MAVEN'
  | 'NPM'
  | 'NUGET'
  | 'PIP'
  | 'PUB'
  | 'RUBYGEMS'
  | 'RUST'
  | 'SWIFT'
export type SecurityAdvisoryIdentifierType = 'CVE' | 'GHSA'
export type SecurityAdvisoryOrderField = 'EPSS_PERCENTAGE' | 'EPSS_PERCENTILE' | 'PUBLISHED_AT' | 'UPDATED_AT'
export type SecurityAdvisorySeverity = 'CRITICAL' | 'HIGH' | 'LOW' | 'MODERATE'
export type SecurityVulnerabilityOrderField = 'UPDATED_AT'
export type SocialAccountProvider =
  | 'BLUESKY'
  | 'FACEBOOK'
  | 'GENERIC'
  | 'HOMETOWN'
  | 'INSTAGRAM'
  | 'LINKEDIN'
  | 'MASTODON'
  | 'NPM'
  | 'REDDIT'
  | 'TWITCH'
  | 'TWITTER'
  | 'YOUTUBE'
export type SponsorAndLifetimeValueOrderField = 'LIFETIME_VALUE' | 'SPONSOR_LOGIN' | 'SPONSOR_RELEVANCE'
export type SponsorOrderField = 'LOGIN' | 'RELEVANCE'
export type SponsorableOrderField = 'LOGIN'
export type SponsorsActivityAction =
  | 'CANCELLED_SPONSORSHIP'
  | 'NEW_SPONSORSHIP'
  | 'PENDING_CHANGE'
  | 'REFUND'
  | 'SPONSOR_MATCH_DISABLED'
  | 'TIER_CHANGE'
export type SponsorsActivityOrderField = 'TIMESTAMP'
export type SponsorsActivityPeriod = 'ALL' | 'DAY' | 'MONTH' | 'WEEK'
export type SponsorsCountryOrRegionCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
export type SponsorsGoalKind = 'MONTHLY_SPONSORSHIP_AMOUNT' | 'TOTAL_SPONSORS_COUNT'
export type SponsorsListingFeaturedItemFeatureableType = 'REPOSITORY' | 'USER'
export type SponsorsTierOrderField = 'CREATED_AT' | 'MONTHLY_PRICE_IN_CENTS'
export type SponsorshipNewsletterOrderField = 'CREATED_AT'
export type SponsorshipOrderField = 'CREATED_AT'
export type SponsorshipPaymentSource = 'GITHUB' | 'PATREON'
export type SponsorshipPrivacy = 'PRIVATE' | 'PUBLIC'
export type SquashMergeCommitMessage = 'BLANK' | 'COMMIT_MESSAGES' | 'PR_BODY'
export type SquashMergeCommitTitle = 'COMMIT_OR_PR_TITLE' | 'PR_TITLE'
export type StarOrderField = 'STARRED_AT'
export type StatusState = 'ERROR' | 'EXPECTED' | 'FAILURE' | 'PENDING' | 'SUCCESS'
export type SubscriptionState = 'IGNORED' | 'SUBSCRIBED' | 'UNSUBSCRIBED'
export type TeamDiscussionCommentOrderField = 'NUMBER'
export type TeamDiscussionOrderField = 'CREATED_AT'
export type TeamMemberOrderField = 'CREATED_AT' | 'LOGIN'
export type TeamMemberRole = 'MAINTAINER' | 'MEMBER'
export type TeamMembershipType = 'ALL' | 'CHILD_TEAM' | 'IMMEDIATE'
export type TeamNotificationSetting = 'NOTIFICATIONS_DISABLED' | 'NOTIFICATIONS_ENABLED'
export type TeamOrderField = 'NAME'
export type TeamPrivacy = 'SECRET' | 'VISIBLE'
export type TeamRepositoryOrderField = 'CREATED_AT' | 'NAME' | 'PERMISSION' | 'PUSHED_AT' | 'STARGAZERS' | 'UPDATED_AT'
export type TeamReviewAssignmentAlgorithm = 'LOAD_BALANCE' | 'ROUND_ROBIN'
export type TeamRole = 'ADMIN' | 'MEMBER'
export type ThreadSubscriptionFormAction = 'NONE' | 'SUBSCRIBE' | 'UNSUBSCRIBE'
export type ThreadSubscriptionState =
  | 'DISABLED'
  | 'IGNORING_LIST'
  | 'IGNORING_THREAD'
  | 'NONE'
  | 'SUBSCRIBED_TO_LIST'
  | 'SUBSCRIBED_TO_THREAD'
  | 'SUBSCRIBED_TO_THREAD_EVENTS'
  | 'SUBSCRIBED_TO_THREAD_TYPE'
  | 'UNAVAILABLE'
export type TopicSuggestionDeclineReason = 'NOT_RELEVANT' | 'PERSONAL_PREFERENCE' | 'TOO_GENERAL' | 'TOO_SPECIFIC'
export type TrackedIssueStates = 'CLOSED' | 'OPEN'
export type TwoFactorCredentialSecurityType = 'DISABLED' | 'INSECURE' | 'SECURE'
export type UserBlockDuration = 'ONE_DAY' | 'ONE_MONTH' | 'ONE_WEEK' | 'PERMANENT' | 'THREE_DAYS'
export type UserStatusOrderField = 'UPDATED_AT'
export type UserViewType = 'PRIVATE' | 'PUBLIC'
export type VerifiableDomainOrderField = 'CREATED_AT' | 'DOMAIN'
export type WorkflowRunOrderField = 'CREATED_AT'
export type WorkflowState = 'ACTIVE' | 'DELETED' | 'DISABLED_FORK' | 'DISABLED_INACTIVITY' | 'DISABLED_MANUALLY'

// Input objects
export type AbortQueuedMigrationsInput = {
  clientMutationId?: String
  ownerId: ID
}
export type AbortRepositoryMigrationInput = {
  clientMutationId?: String
  migrationId: ID
}
export type AcceptEnterpriseAdministratorInvitationInput = {
  clientMutationId?: String
  invitationId: ID
}
export type AcceptEnterpriseMemberInvitationInput = {
  clientMutationId?: String
  invitationId: ID
}
export type AcceptTopicSuggestionInput = {
  clientMutationId?: String
  name?: String
  repositoryId?: ID
}
export type AccessUserNamespaceRepositoryInput = {
  clientMutationId?: String
  enterpriseId: ID
  repositoryId: ID
}
export type AddAssigneesToAssignableInput = {
  assignableId: ID
  assigneeIds: ID
  clientMutationId?: String
}
export type AddCommentInput = {
  body: String
  clientMutationId?: String
  subjectId: ID
}
export type AddDiscussionCommentInput = {
  body: String
  clientMutationId?: String
  discussionId: ID
  replyToId?: ID
}
export type AddDiscussionPollVoteInput = {
  clientMutationId?: String
  pollOptionId: ID
}
export type AddEnterpriseOrganizationMemberInput = {
  clientMutationId?: String
  enterpriseId: ID
  organizationId: ID
  role?: OrganizationMemberRole
  userIds: ID
}
export type AddEnterpriseSupportEntitlementInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
}
export type AddLabelsToLabelableInput = {
  clientMutationId?: String
  labelIds: ID
  labelableId: ID
}
export type AddProjectCardInput = {
  clientMutationId?: String
  contentId?: ID
  note?: String
  projectColumnId: ID
}
export type AddProjectColumnInput = {
  clientMutationId?: String
  name: String
  projectId: ID
}
export type AddProjectV2DraftIssueInput = {
  assigneeIds?: ID
  body?: String
  clientMutationId?: String
  projectId: ID
  title: String
}
export type AddProjectV2ItemByIdInput = {
  clientMutationId?: String
  contentId: ID
  projectId: ID
}
export type AddPullRequestReviewCommentInput = {
  body?: String
  clientMutationId?: String
  commitOID?: GitObjectID
  inReplyTo?: ID
  path?: String
  position?: Int
  pullRequestId?: ID
  pullRequestReviewId?: ID
}
export type AddPullRequestReviewInput = {
  body?: String
  clientMutationId?: String
  comments?: DraftPullRequestReviewComment
  commitOID?: GitObjectID
  event?: PullRequestReviewEvent
  pullRequestId: ID
  threads?: DraftPullRequestReviewThread
}
export type AddPullRequestReviewThreadInput = {
  body: String
  clientMutationId?: String
  line?: Int
  path: String
  pullRequestId?: ID
  pullRequestReviewId?: ID
  side?: DiffSide
  startLine?: Int
  startSide?: DiffSide
  subjectType?: PullRequestReviewThreadSubjectType
}
export type AddPullRequestReviewThreadReplyInput = {
  body: String
  clientMutationId?: String
  pullRequestReviewId?: ID
  pullRequestReviewThreadId: ID
}
export type AddReactionInput = {
  clientMutationId?: String
  content: ReactionContent
  subjectId: ID
}
export type AddStarInput = {
  clientMutationId?: String
  starrableId: ID
}
export type AddSubIssueInput = {
  clientMutationId?: String
  issueId: ID
  replaceParent?: Boolean
  subIssueId?: ID
  subIssueUrl?: String
}
export type AddUpvoteInput = {
  clientMutationId?: String
  subjectId: ID
}
export type AddVerifiableDomainInput = {
  clientMutationId?: String
  domain: URI
  ownerId: ID
}
export type ApproveDeploymentsInput = {
  clientMutationId?: String
  comment?: String
  environmentIds: ID
  workflowRunId: ID
}
export type ApproveVerifiableDomainInput = {
  clientMutationId?: String
  id: ID
}
export type ArchiveProjectV2ItemInput = {
  clientMutationId?: String
  itemId: ID
  projectId: ID
}
export type ArchiveRepositoryInput = {
  clientMutationId?: String
  repositoryId: ID
}
export type AuditLogOrder = {
  direction?: OrderDirection
  field?: AuditLogOrderField
}
export type BranchNamePatternParametersInput = {
  name?: String
  negate?: Boolean
  operator: String
  pattern: String
}
export type BulkSponsorship = {
  amount: Int
  sponsorableId?: ID
  sponsorableLogin?: String
}
export type CancelEnterpriseAdminInvitationInput = {
  clientMutationId?: String
  invitationId: ID
}
export type CancelEnterpriseMemberInvitationInput = {
  clientMutationId?: String
  invitationId: ID
}
export type CancelSponsorshipInput = {
  clientMutationId?: String
  sponsorId?: ID
  sponsorLogin?: String
  sponsorableId?: ID
  sponsorableLogin?: String
}
export type ChangeUserStatusInput = {
  clientMutationId?: String
  emoji?: String
  expiresAt?: DateTime
  limitedAvailability?: Boolean
  message?: String
  organizationId?: ID
}
export type CheckAnnotationData = {
  annotationLevel: CheckAnnotationLevel
  location: CheckAnnotationRange
  message: String
  path: String
  rawDetails?: String
  title?: String
}
export type CheckAnnotationRange = {
  endColumn?: Int
  endLine: Int
  startColumn?: Int
  startLine: Int
}
export type CheckRunAction = {
  description: String
  identifier: String
  label: String
}
export type CheckRunFilter = {
  appId?: Int
  checkName?: String
  checkType?: CheckRunType
  conclusions?: CheckConclusionState
  status?: CheckStatusState
  statuses?: CheckStatusState
}
export type CheckRunOutput = {
  annotations?: CheckAnnotationData
  images?: CheckRunOutputImage
  summary: String
  text?: String
  title: String
}
export type CheckRunOutputImage = {
  alt: String
  caption?: String
  imageUrl: URI
}
export type CheckSuiteAutoTriggerPreference = {
  appId: ID
  setting: Boolean
}
export type CheckSuiteFilter = {
  appId?: Int
  checkName?: String
}
export type ClearLabelsFromLabelableInput = {
  clientMutationId?: String
  labelableId: ID
}
export type ClearProjectV2ItemFieldValueInput = {
  clientMutationId?: String
  fieldId: ID
  itemId: ID
  projectId: ID
}
export type CloneProjectInput = {
  body?: String
  clientMutationId?: String
  includeWorkflows: Boolean
  name: String
  public?: Boolean
  sourceId: ID
  targetOwnerId: ID
}
export type CloneTemplateRepositoryInput = {
  clientMutationId?: String
  description?: String
  includeAllBranches?: Boolean
  name: String
  ownerId: ID
  repositoryId: ID
  visibility: RepositoryVisibility
}
export type CloseDiscussionInput = {
  clientMutationId?: String
  discussionId: ID
  reason?: DiscussionCloseReason
}
export type CloseIssueInput = {
  clientMutationId?: String
  duplicateIssueId?: ID
  issueId: ID
  stateReason?: IssueClosedStateReason
}
export type ClosePullRequestInput = {
  clientMutationId?: String
  pullRequestId: ID
}
export type CodeScanningParametersInput = {
  codeScanningTools: CodeScanningToolInput
}
export type CodeScanningToolInput = {
  alertsThreshold: String
  securityAlertsThreshold: String
  tool: String
}
export type CommitAuthor = {
  emails?: String
  id?: ID
}
export type CommitAuthorEmailPatternParametersInput = {
  name?: String
  negate?: Boolean
  operator: String
  pattern: String
}
export type CommitContributionOrder = {
  direction: OrderDirection
  field: CommitContributionOrderField
}
export type CommitMessage = {
  body?: String
  headline: String
}
export type CommitMessagePatternParametersInput = {
  name?: String
  negate?: Boolean
  operator: String
  pattern: String
}
export type CommittableBranch = {
  branchName?: String
  id?: ID
  repositoryNameWithOwner?: String
}
export type CommitterEmailPatternParametersInput = {
  name?: String
  negate?: Boolean
  operator: String
  pattern: String
}
export type ContributionOrder = {
  direction: OrderDirection
}
export type ConvertProjectCardNoteToIssueInput = {
  body?: String
  clientMutationId?: String
  projectCardId: ID
  repositoryId: ID
  title?: String
}
export type ConvertProjectV2DraftIssueItemToIssueInput = {
  clientMutationId?: String
  itemId: ID
  repositoryId: ID
}
export type ConvertPullRequestToDraftInput = {
  clientMutationId?: String
  pullRequestId: ID
}
export type CopyProjectV2Input = {
  clientMutationId?: String
  includeDraftIssues?: Boolean
  ownerId: ID
  projectId: ID
  title: String
}
export type CreateAttributionInvitationInput = {
  clientMutationId?: String
  ownerId: ID
  sourceId: ID
  targetId: ID
}
export type CreateBranchProtectionRuleInput = {
  allowsDeletions?: Boolean
  allowsForcePushes?: Boolean
  blocksCreations?: Boolean
  bypassForcePushActorIds?: ID
  bypassPullRequestActorIds?: ID
  clientMutationId?: String
  dismissesStaleReviews?: Boolean
  isAdminEnforced?: Boolean
  lockAllowsFetchAndMerge?: Boolean
  lockBranch?: Boolean
  pattern: String
  pushActorIds?: ID
  repositoryId: ID
  requireLastPushApproval?: Boolean
  requiredApprovingReviewCount?: Int
  requiredDeploymentEnvironments?: String
  requiredStatusCheckContexts?: String
  requiredStatusChecks?: RequiredStatusCheckInput
  requiresApprovingReviews?: Boolean
  requiresCodeOwnerReviews?: Boolean
  requiresCommitSignatures?: Boolean
  requiresConversationResolution?: Boolean
  requiresDeployments?: Boolean
  requiresLinearHistory?: Boolean
  requiresStatusChecks?: Boolean
  requiresStrictStatusChecks?: Boolean
  restrictsPushes?: Boolean
  restrictsReviewDismissals?: Boolean
  reviewDismissalActorIds?: ID
}
export type CreateCheckRunInput = {
  actions?: CheckRunAction
  clientMutationId?: String
  completedAt?: DateTime
  conclusion?: CheckConclusionState
  detailsUrl?: URI
  externalId?: String
  headSha: GitObjectID
  name: String
  output?: CheckRunOutput
  repositoryId: ID
  startedAt?: DateTime
  status?: RequestableCheckStatusState
}
export type CreateCheckSuiteInput = {
  clientMutationId?: String
  headSha: GitObjectID
  repositoryId: ID
}
export type CreateCommitOnBranchInput = {
  branch: CommittableBranch
  clientMutationId?: String
  expectedHeadOid: GitObjectID
  fileChanges?: FileChanges
  message: CommitMessage
}
export type CreateDeploymentInput = {
  autoMerge?: Boolean
  clientMutationId?: String
  description?: String
  environment?: String
  payload?: String
  refId: ID
  repositoryId: ID
  requiredContexts?: String
  task?: String
}
export type CreateDeploymentStatusInput = {
  autoInactive?: Boolean
  clientMutationId?: String
  deploymentId: ID
  description?: String
  environment?: String
  environmentUrl?: String
  logUrl?: String
  state: DeploymentStatusState
}
export type CreateDiscussionInput = {
  body: String
  categoryId: ID
  clientMutationId?: String
  repositoryId: ID
  title: String
}
export type CreateEnterpriseOrganizationInput = {
  adminLogins: String
  billingEmail: String
  clientMutationId?: String
  enterpriseId: ID
  login: String
  profileName: String
}
export type CreateEnvironmentInput = {
  clientMutationId?: String
  name: String
  repositoryId: ID
}
export type CreateIpAllowListEntryInput = {
  allowListValue: String
  clientMutationId?: String
  isActive: Boolean
  name?: String
  ownerId: ID
}
export type CreateIssueInput = {
  assigneeIds?: ID
  body?: String
  clientMutationId?: String
  issueTemplate?: String
  labelIds?: ID
  milestoneId?: ID
  parentIssueId?: ID
  projectIds?: ID
  repositoryId: ID
  title: String
}
export type CreateLabelInput = {
  clientMutationId?: String
  color: String
  description?: String
  name: String
  repositoryId: ID
}
export type CreateLinkedBranchInput = {
  clientMutationId?: String
  issueId: ID
  name?: String
  oid: GitObjectID
  repositoryId?: ID
}
export type CreateMigrationSourceInput = {
  accessToken?: String
  clientMutationId?: String
  githubPat?: String
  name: String
  ownerId: ID
  type: MigrationSourceType
  url?: String
}
export type CreateProjectInput = {
  body?: String
  clientMutationId?: String
  name: String
  ownerId: ID
  repositoryIds?: ID
  template?: ProjectTemplate
}
export type CreateProjectV2FieldInput = {
  clientMutationId?: String
  dataType: ProjectV2CustomFieldType
  name: String
  projectId: ID
  singleSelectOptions?: ProjectV2SingleSelectFieldOptionInput
}
export type CreateProjectV2Input = {
  clientMutationId?: String
  ownerId: ID
  repositoryId?: ID
  teamId?: ID
  title: String
}
export type CreateProjectV2StatusUpdateInput = {
  body?: String
  clientMutationId?: String
  projectId: ID
  startDate?: Date
  status?: ProjectV2StatusUpdateStatus
  targetDate?: Date
}
export type CreatePullRequestInput = {
  baseRefName: String
  body?: String
  clientMutationId?: String
  draft?: Boolean
  headRefName: String
  headRepositoryId?: ID
  maintainerCanModify?: Boolean
  repositoryId: ID
  title: String
}
export type CreateRefInput = {
  clientMutationId?: String
  name: String
  oid: GitObjectID
  repositoryId: ID
}
export type CreateRepositoryInput = {
  clientMutationId?: String
  description?: String
  hasIssuesEnabled?: Boolean
  hasWikiEnabled?: Boolean
  homepageUrl?: URI
  name: String
  ownerId?: ID
  teamId?: ID
  template?: Boolean
  visibility: RepositoryVisibility
}
export type CreateRepositoryRulesetInput = {
  bypassActors?: RepositoryRulesetBypassActorInput
  clientMutationId?: String
  conditions: RepositoryRuleConditionsInput
  enforcement: RuleEnforcement
  name: String
  rules?: RepositoryRuleInput
  sourceId: ID
  target?: RepositoryRulesetTarget
}
export type CreateSponsorsListingInput = {
  billingCountryOrRegionCode?: SponsorsCountryOrRegionCode
  clientMutationId?: String
  contactEmail?: String
  fiscalHostLogin?: String
  fiscallyHostedProjectProfileUrl?: String
  fullDescription?: String
  residenceCountryOrRegionCode?: SponsorsCountryOrRegionCode
  sponsorableLogin?: String
}
export type CreateSponsorsTierInput = {
  amount: Int
  clientMutationId?: String
  description: String
  isRecurring?: Boolean
  publish?: Boolean
  repositoryId?: ID
  repositoryName?: String
  repositoryOwnerLogin?: String
  sponsorableId?: ID
  sponsorableLogin?: String
  welcomeMessage?: String
}
export type CreateSponsorshipInput = {
  amount?: Int
  clientMutationId?: String
  isRecurring?: Boolean
  privacyLevel?: SponsorshipPrivacy
  receiveEmails?: Boolean
  sponsorId?: ID
  sponsorLogin?: String
  sponsorableId?: ID
  sponsorableLogin?: String
  tierId?: ID
}
export type CreateSponsorshipsInput = {
  clientMutationId?: String
  privacyLevel?: SponsorshipPrivacy
  receiveEmails?: Boolean
  recurring?: Boolean
  sponsorLogin: String
  sponsorships: BulkSponsorship
}
export type CreateTeamDiscussionCommentInput = {
  body?: String
  clientMutationId?: String
  discussionId?: ID
}
export type CreateTeamDiscussionInput = {
  body?: String
  clientMutationId?: String
  private?: Boolean
  teamId?: ID
  title?: String
}
export type CreateUserListInput = {
  clientMutationId?: String
  description?: String
  isPrivate?: Boolean
  name: String
}
export type DeclineTopicSuggestionInput = {
  clientMutationId?: String
  name?: String
  reason?: TopicSuggestionDeclineReason
  repositoryId?: ID
}
export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: ID
  clientMutationId?: String
}
export type DeleteDeploymentInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteDiscussionCommentInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteDiscussionInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteEnvironmentInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteIpAllowListEntryInput = {
  clientMutationId?: String
  ipAllowListEntryId: ID
}
export type DeleteIssueCommentInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteIssueInput = {
  clientMutationId?: String
  issueId: ID
}
export type DeleteLabelInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteLinkedBranchInput = {
  clientMutationId?: String
  linkedBranchId: ID
}
export type DeletePackageVersionInput = {
  clientMutationId?: String
  packageVersionId: ID
}
export type DeleteProjectCardInput = {
  cardId: ID
  clientMutationId?: String
}
export type DeleteProjectColumnInput = {
  clientMutationId?: String
  columnId: ID
}
export type DeleteProjectInput = {
  clientMutationId?: String
  projectId: ID
}
export type DeleteProjectV2FieldInput = {
  clientMutationId?: String
  fieldId: ID
}
export type DeleteProjectV2Input = {
  clientMutationId?: String
  projectId: ID
}
export type DeleteProjectV2ItemInput = {
  clientMutationId?: String
  itemId: ID
  projectId: ID
}
export type DeleteProjectV2StatusUpdateInput = {
  clientMutationId?: String
  statusUpdateId: ID
}
export type DeleteProjectV2WorkflowInput = {
  clientMutationId?: String
  workflowId: ID
}
export type DeletePullRequestReviewCommentInput = {
  clientMutationId?: String
  id: ID
}
export type DeletePullRequestReviewInput = {
  clientMutationId?: String
  pullRequestReviewId: ID
}
export type DeleteRefInput = {
  clientMutationId?: String
  refId: ID
}
export type DeleteRepositoryRulesetInput = {
  clientMutationId?: String
  repositoryRulesetId: ID
}
export type DeleteTeamDiscussionCommentInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteTeamDiscussionInput = {
  clientMutationId?: String
  id: ID
}
export type DeleteUserListInput = {
  clientMutationId?: String
  listId: ID
}
export type DeleteVerifiableDomainInput = {
  clientMutationId?: String
  id: ID
}
export type DeploymentOrder = {
  direction: OrderDirection
  field: DeploymentOrderField
}
export type DequeuePullRequestInput = {
  clientMutationId?: String
  id: ID
}
export type DisablePullRequestAutoMergeInput = {
  clientMutationId?: String
  pullRequestId: ID
}
export type DiscussionOrder = {
  direction: OrderDirection
  field: DiscussionOrderField
}
export type DiscussionPollOptionOrder = {
  direction: OrderDirection
  field: DiscussionPollOptionOrderField
}
export type DismissPullRequestReviewInput = {
  clientMutationId?: String
  message: String
  pullRequestReviewId: ID
}
export type DismissRepositoryVulnerabilityAlertInput = {
  clientMutationId?: String
  dismissReason: DismissReason
  repositoryVulnerabilityAlertId: ID
}
export type DraftPullRequestReviewComment = {
  body: String
  path: String
  position: Int
}
export type DraftPullRequestReviewThread = {
  body: String
  line: Int
  path: String
  side?: DiffSide
  startLine?: Int
  startSide?: DiffSide
}
export type EnablePullRequestAutoMergeInput = {
  authorEmail?: String
  clientMutationId?: String
  commitBody?: String
  commitHeadline?: String
  expectedHeadOid?: GitObjectID
  mergeMethod?: PullRequestMergeMethod
  pullRequestId: ID
}
export type EnqueuePullRequestInput = {
  clientMutationId?: String
  expectedHeadOid?: GitObjectID
  jump?: Boolean
  pullRequestId: ID
}
export type EnterpriseAdministratorInvitationOrder = {
  direction: OrderDirection
  field: EnterpriseAdministratorInvitationOrderField
}
export type EnterpriseMemberInvitationOrder = {
  direction: OrderDirection
  field: EnterpriseMemberInvitationOrderField
}
export type EnterpriseMemberOrder = {
  direction: OrderDirection
  field: EnterpriseMemberOrderField
}
export type EnterpriseOrder = {
  direction: OrderDirection
  field: EnterpriseOrderField
}
export type EnterpriseServerInstallationOrder = {
  direction: OrderDirection
  field: EnterpriseServerInstallationOrderField
}
export type EnterpriseServerUserAccountEmailOrder = {
  direction: OrderDirection
  field: EnterpriseServerUserAccountEmailOrderField
}
export type EnterpriseServerUserAccountOrder = {
  direction: OrderDirection
  field: EnterpriseServerUserAccountOrderField
}
export type EnterpriseServerUserAccountsUploadOrder = {
  direction: OrderDirection
  field: EnterpriseServerUserAccountsUploadOrderField
}
export type Environments = {
  direction: OrderDirection
  field: EnvironmentOrderField
}
export type FileAddition = {
  contents: Base64String
  path: String
}
export type FileChanges = {
  additions?: FileAddition
  deletions?: FileDeletion
}
export type FileDeletion = {
  path: String
}
export type FileExtensionRestrictionParametersInput = {
  restrictedFileExtensions: String
}
export type FilePathRestrictionParametersInput = {
  restrictedFilePaths: String
}
export type FollowOrganizationInput = {
  clientMutationId?: String
  organizationId: ID
}
export type FollowUserInput = {
  clientMutationId?: String
  userId: ID
}
export type GistOrder = {
  direction: OrderDirection
  field: GistOrderField
}
export type GrantEnterpriseOrganizationsMigratorRoleInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
}
export type GrantMigratorRoleInput = {
  actor: String
  actorType: ActorType
  clientMutationId?: String
  organizationId: ID
}
export type ImportProjectInput = {
  body?: String
  clientMutationId?: String
  columnImports: ProjectColumnImport
  name: String
  ownerName: String
  public?: Boolean
}
export type InviteEnterpriseAdminInput = {
  clientMutationId?: String
  email?: String
  enterpriseId: ID
  invitee?: String
  role?: EnterpriseAdministratorRole
}
export type InviteEnterpriseMemberInput = {
  clientMutationId?: String
  email?: String
  enterpriseId: ID
  invitee?: String
}
export type IpAllowListEntryOrder = {
  direction: OrderDirection
  field: IpAllowListEntryOrderField
}
export type IssueCommentOrder = {
  direction: OrderDirection
  field: IssueCommentOrderField
}
export type IssueFilters = {
  assignee?: String
  createdBy?: String
  labels?: String
  mentioned?: String
  milestone?: String
  milestoneNumber?: String
  since?: DateTime
  states?: IssueState
  viewerSubscribed?: Boolean
}
export type IssueOrder = {
  direction: OrderDirection
  field: IssueOrderField
}
export type LabelOrder = {
  direction: OrderDirection
  field: LabelOrderField
}
export type LanguageOrder = {
  direction: OrderDirection
  field: LanguageOrderField
}
export type LinkProjectV2ToRepositoryInput = {
  clientMutationId?: String
  projectId: ID
  repositoryId: ID
}
export type LinkProjectV2ToTeamInput = {
  clientMutationId?: String
  projectId: ID
  teamId: ID
}
export type LinkRepositoryToProjectInput = {
  clientMutationId?: String
  projectId: ID
  repositoryId: ID
}
export type LockLockableInput = {
  clientMutationId?: String
  lockReason?: LockReason
  lockableId: ID
}
export type MannequinOrder = {
  direction: OrderDirection
  field: MannequinOrderField
}
export type MarkDiscussionCommentAsAnswerInput = {
  clientMutationId?: String
  id: ID
}
export type MarkFileAsViewedInput = {
  clientMutationId?: String
  path: String
  pullRequestId: ID
}
export type MarkProjectV2AsTemplateInput = {
  clientMutationId?: String
  projectId: ID
}
export type MarkPullRequestReadyForReviewInput = {
  clientMutationId?: String
  pullRequestId: ID
}
export type MaxFilePathLengthParametersInput = {
  maxFilePathLength: Int
}
export type MaxFileSizeParametersInput = {
  maxFileSize: Int
}
export type MergeBranchInput = {
  authorEmail?: String
  base: String
  clientMutationId?: String
  commitMessage?: String
  head: String
  repositoryId: ID
}
export type MergePullRequestInput = {
  authorEmail?: String
  clientMutationId?: String
  commitBody?: String
  commitHeadline?: String
  expectedHeadOid?: GitObjectID
  mergeMethod?: PullRequestMergeMethod
  pullRequestId: ID
}
export type MergeQueueParametersInput = {
  checkResponseTimeoutMinutes: Int
  groupingStrategy: MergeQueueGroupingStrategy
  maxEntriesToBuild: Int
  maxEntriesToMerge: Int
  mergeMethod: MergeQueueMergeMethod
  minEntriesToMerge: Int
  minEntriesToMergeWaitMinutes: Int
}
export type MilestoneOrder = {
  direction: OrderDirection
  field: MilestoneOrderField
}
export type MinimizeCommentInput = {
  classifier: ReportedContentClassifiers
  clientMutationId?: String
  subjectId: ID
}
export type MoveProjectCardInput = {
  afterCardId?: ID
  cardId: ID
  clientMutationId?: String
  columnId: ID
}
export type MoveProjectColumnInput = {
  afterColumnId?: ID
  clientMutationId?: String
  columnId: ID
}
export type OrgEnterpriseOwnerOrder = {
  direction: OrderDirection
  field: OrgEnterpriseOwnerOrderField
}
export type OrganizationOrder = {
  direction: OrderDirection
  field: OrganizationOrderField
}
export type PackageFileOrder = {
  direction?: OrderDirection
  field?: PackageFileOrderField
}
export type PackageOrder = {
  direction?: OrderDirection
  field?: PackageOrderField
}
export type PackageVersionOrder = {
  direction?: OrderDirection
  field?: PackageVersionOrderField
}
export type PinEnvironmentInput = {
  clientMutationId?: String
  environmentId: ID
  pinned: Boolean
}
export type PinIssueInput = {
  clientMutationId?: String
  issueId: ID
}
export type PinnedEnvironmentOrder = {
  direction: OrderDirection
  field: PinnedEnvironmentOrderField
}
export type ProjectCardImport = {
  number: Int
  repository: String
}
export type ProjectColumnImport = {
  columnName: String
  issues?: ProjectCardImport
  position: Int
}
export type ProjectOrder = {
  direction: OrderDirection
  field: ProjectOrderField
}
export type ProjectV2Collaborator = {
  role: ProjectV2Roles
  teamId?: ID
  userId?: ID
}
export type ProjectV2FieldOrder = {
  direction: OrderDirection
  field: ProjectV2FieldOrderField
}
export type ProjectV2FieldValue = {
  date?: Date
  iterationId?: String
  number?: Float
  singleSelectOptionId?: String
  text?: String
}
export type ProjectV2Filters = {
  state?: ProjectV2State
}
export type ProjectV2ItemFieldValueOrder = {
  direction: OrderDirection
  field: ProjectV2ItemFieldValueOrderField
}
export type ProjectV2ItemOrder = {
  direction: OrderDirection
  field: ProjectV2ItemOrderField
}
export type ProjectV2Order = {
  direction: OrderDirection
  field: ProjectV2OrderField
}
export type ProjectV2SingleSelectFieldOptionInput = {
  color: ProjectV2SingleSelectFieldOptionColor
  description: String
  name: String
}
export type ProjectV2StatusOrder = {
  direction: OrderDirection
  field: ProjectV2StatusUpdateOrderField
}
export type ProjectV2ViewOrder = {
  direction: OrderDirection
  field: ProjectV2ViewOrderField
}
export type ProjectV2WorkflowOrder = {
  direction: OrderDirection
  field: ProjectV2WorkflowsOrderField
}
export type PropertyTargetDefinitionInput = {
  name: String
  propertyValues: String
  source?: String
}
export type PublishSponsorsTierInput = {
  clientMutationId?: String
  tierId: ID
}
export type PullRequestOrder = {
  direction: OrderDirection
  field: PullRequestOrderField
}
export type PullRequestParametersInput = {
  allowedMergeMethods?: String
  dismissStaleReviewsOnPush: Boolean
  requireCodeOwnerReview: Boolean
  requireLastPushApproval: Boolean
  requiredApprovingReviewCount: Int
  requiredReviewThreadResolution: Boolean
}
export type ReactionOrder = {
  direction: OrderDirection
  field: ReactionOrderField
}
export type RefNameConditionTargetInput = {
  exclude: String
  include: String
}
export type RefOrder = {
  direction: OrderDirection
  field: RefOrderField
}
export type RefUpdate = {
  afterOid: GitObjectID
  beforeOid?: GitObjectID
  force?: Boolean
  name: GitRefname
}
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  clientMutationId?: String
  enterpriseId: ID
}
export type RegenerateVerifiableDomainTokenInput = {
  clientMutationId?: String
  id: ID
}
export type RejectDeploymentsInput = {
  clientMutationId?: String
  comment?: String
  environmentIds: ID
  workflowRunId: ID
}
export type ReleaseOrder = {
  direction: OrderDirection
  field: ReleaseOrderField
}
export type RemoveAssigneesFromAssignableInput = {
  assignableId: ID
  assigneeIds: ID
  clientMutationId?: String
}
export type RemoveEnterpriseAdminInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
}
export type RemoveEnterpriseIdentityProviderInput = {
  clientMutationId?: String
  enterpriseId: ID
}
export type RemoveEnterpriseMemberInput = {
  clientMutationId?: String
  enterpriseId: ID
  userId: ID
}
export type RemoveEnterpriseOrganizationInput = {
  clientMutationId?: String
  enterpriseId: ID
  organizationId: ID
}
export type RemoveEnterpriseSupportEntitlementInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
}
export type RemoveLabelsFromLabelableInput = {
  clientMutationId?: String
  labelIds: ID
  labelableId: ID
}
export type RemoveOutsideCollaboratorInput = {
  clientMutationId?: String
  organizationId: ID
  userId: ID
}
export type RemoveReactionInput = {
  clientMutationId?: String
  content: ReactionContent
  subjectId: ID
}
export type RemoveStarInput = {
  clientMutationId?: String
  starrableId: ID
}
export type RemoveSubIssueInput = {
  clientMutationId?: String
  issueId: ID
  subIssueId: ID
}
export type RemoveUpvoteInput = {
  clientMutationId?: String
  subjectId: ID
}
export type ReopenDiscussionInput = {
  clientMutationId?: String
  discussionId: ID
}
export type ReopenIssueInput = {
  clientMutationId?: String
  issueId: ID
}
export type ReopenPullRequestInput = {
  clientMutationId?: String
  pullRequestId: ID
}
export type ReorderEnvironmentInput = {
  clientMutationId?: String
  environmentId: ID
  position: Int
}
export type RepositoryIdConditionTargetInput = {
  repositoryIds: ID
}
export type RepositoryInvitationOrder = {
  direction: OrderDirection
  field: RepositoryInvitationOrderField
}
export type RepositoryMigrationOrder = {
  direction: RepositoryMigrationOrderDirection
  field: RepositoryMigrationOrderField
}
export type RepositoryNameConditionTargetInput = {
  exclude: String
  include: String
  protected?: Boolean
}
export type RepositoryOrder = {
  direction: OrderDirection
  field: RepositoryOrderField
}
export type RepositoryPropertyConditionTargetInput = {
  exclude: PropertyTargetDefinitionInput
  include: PropertyTargetDefinitionInput
}
export type RepositoryRuleConditionsInput = {
  refName?: RefNameConditionTargetInput
  repositoryId?: RepositoryIdConditionTargetInput
  repositoryName?: RepositoryNameConditionTargetInput
  repositoryProperty?: RepositoryPropertyConditionTargetInput
}
export type RepositoryRuleInput = {
  id?: ID
  parameters?: RuleParametersInput
  type: RepositoryRuleType
}
export type RepositoryRuleOrder = {
  direction: OrderDirection
  field: RepositoryRuleOrderField
}
export type RepositoryRulesetBypassActorInput = {
  actorId?: ID
  bypassMode: RepositoryRulesetBypassActorBypassMode
  deployKey?: Boolean
  enterpriseOwner?: Boolean
  organizationAdmin?: Boolean
  repositoryRoleDatabaseId?: Int
}
export type ReprioritizeSubIssueInput = {
  afterId?: ID
  beforeId?: ID
  clientMutationId?: String
  issueId: ID
  subIssueId: ID
}
export type RequestReviewsInput = {
  clientMutationId?: String
  pullRequestId: ID
  teamIds?: ID
  union?: Boolean
  userIds?: ID
}
export type RequiredDeploymentsParametersInput = {
  requiredDeploymentEnvironments: String
}
export type RequiredStatusCheckInput = {
  appId?: ID
  context: String
}
export type RequiredStatusChecksParametersInput = {
  doNotEnforceOnCreate?: Boolean
  requiredStatusChecks: StatusCheckConfigurationInput
  strictRequiredStatusChecksPolicy: Boolean
}
export type RerequestCheckSuiteInput = {
  checkSuiteId: ID
  clientMutationId?: String
  repositoryId: ID
}
export type ResolveReviewThreadInput = {
  clientMutationId?: String
  threadId: ID
}
export type RetireSponsorsTierInput = {
  clientMutationId?: String
  tierId: ID
}
export type RevertPullRequestInput = {
  body?: String
  clientMutationId?: String
  draft?: Boolean
  pullRequestId: ID
  title?: String
}
export type RevokeEnterpriseOrganizationsMigratorRoleInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
}
export type RevokeMigratorRoleInput = {
  actor: String
  actorType: ActorType
  clientMutationId?: String
  organizationId: ID
}
export type RuleParametersInput = {
  branchNamePattern?: BranchNamePatternParametersInput
  codeScanning?: CodeScanningParametersInput
  commitAuthorEmailPattern?: CommitAuthorEmailPatternParametersInput
  commitMessagePattern?: CommitMessagePatternParametersInput
  committerEmailPattern?: CommitterEmailPatternParametersInput
  fileExtensionRestriction?: FileExtensionRestrictionParametersInput
  filePathRestriction?: FilePathRestrictionParametersInput
  maxFilePathLength?: MaxFilePathLengthParametersInput
  maxFileSize?: MaxFileSizeParametersInput
  mergeQueue?: MergeQueueParametersInput
  pullRequest?: PullRequestParametersInput
  requiredDeployments?: RequiredDeploymentsParametersInput
  requiredStatusChecks?: RequiredStatusChecksParametersInput
  tagNamePattern?: TagNamePatternParametersInput
  update?: UpdateParametersInput
  workflows?: WorkflowsParametersInput
}
export type SavedReplyOrder = {
  direction: OrderDirection
  field: SavedReplyOrderField
}
export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType
  value: String
}
export type SecurityAdvisoryOrder = {
  direction: OrderDirection
  field: SecurityAdvisoryOrderField
}
export type SecurityVulnerabilityOrder = {
  direction: OrderDirection
  field: SecurityVulnerabilityOrderField
}
export type SetEnterpriseIdentityProviderInput = {
  clientMutationId?: String
  digestMethod: SamlDigestAlgorithm
  enterpriseId: ID
  idpCertificate: String
  issuer?: String
  signatureMethod: SamlSignatureAlgorithm
  ssoUrl: URI
}
export type SetOrganizationInteractionLimitInput = {
  clientMutationId?: String
  expiry?: RepositoryInteractionLimitExpiry
  limit: RepositoryInteractionLimit
  organizationId: ID
}
export type SetRepositoryInteractionLimitInput = {
  clientMutationId?: String
  expiry?: RepositoryInteractionLimitExpiry
  limit: RepositoryInteractionLimit
  repositoryId: ID
}
export type SetUserInteractionLimitInput = {
  clientMutationId?: String
  expiry?: RepositoryInteractionLimitExpiry
  limit: RepositoryInteractionLimit
  userId: ID
}
export type SponsorAndLifetimeValueOrder = {
  direction: OrderDirection
  field: SponsorAndLifetimeValueOrderField
}
export type SponsorOrder = {
  direction: OrderDirection
  field: SponsorOrderField
}
export type SponsorableOrder = {
  direction: OrderDirection
  field: SponsorableOrderField
}
export type SponsorsActivityOrder = {
  direction: OrderDirection
  field: SponsorsActivityOrderField
}
export type SponsorsTierOrder = {
  direction: OrderDirection
  field: SponsorsTierOrderField
}
export type SponsorshipNewsletterOrder = {
  direction: OrderDirection
  field: SponsorshipNewsletterOrderField
}
export type SponsorshipOrder = {
  direction: OrderDirection
  field: SponsorshipOrderField
}
export type StarOrder = {
  direction: OrderDirection
  field: StarOrderField
}
export type StartOrganizationMigrationInput = {
  clientMutationId?: String
  sourceAccessToken: String
  sourceOrgUrl: URI
  targetEnterpriseId: ID
  targetOrgName: String
}
export type StartRepositoryMigrationInput = {
  accessToken?: String
  clientMutationId?: String
  continueOnError?: Boolean
  gitArchiveUrl?: String
  githubPat?: String
  lockSource?: Boolean
  metadataArchiveUrl?: String
  ownerId: ID
  repositoryName: String
  skipReleases?: Boolean
  sourceId: ID
  sourceRepositoryUrl: URI
  targetRepoVisibility?: String
}
export type StatusCheckConfigurationInput = {
  context: String
  integrationId?: Int
}
export type SubmitPullRequestReviewInput = {
  body?: String
  clientMutationId?: String
  event: PullRequestReviewEvent
  pullRequestId?: ID
  pullRequestReviewId?: ID
}
export type TagNamePatternParametersInput = {
  name?: String
  negate?: Boolean
  operator: String
  pattern: String
}
export type TeamDiscussionCommentOrder = {
  direction: OrderDirection
  field: TeamDiscussionCommentOrderField
}
export type TeamDiscussionOrder = {
  direction: OrderDirection
  field: TeamDiscussionOrderField
}
export type TeamMemberOrder = {
  direction: OrderDirection
  field: TeamMemberOrderField
}
export type TeamOrder = {
  direction: OrderDirection
  field: TeamOrderField
}
export type TeamRepositoryOrder = {
  direction: OrderDirection
  field: TeamRepositoryOrderField
}
export type TransferEnterpriseOrganizationInput = {
  clientMutationId?: String
  destinationEnterpriseId: ID
  organizationId: ID
}
export type TransferIssueInput = {
  clientMutationId?: String
  createLabelsIfMissing?: Boolean
  issueId: ID
  repositoryId: ID
}
export type UnarchiveProjectV2ItemInput = {
  clientMutationId?: String
  itemId: ID
  projectId: ID
}
export type UnarchiveRepositoryInput = {
  clientMutationId?: String
  repositoryId: ID
}
export type UnfollowOrganizationInput = {
  clientMutationId?: String
  organizationId: ID
}
export type UnfollowUserInput = {
  clientMutationId?: String
  userId: ID
}
export type UnlinkProjectV2FromRepositoryInput = {
  clientMutationId?: String
  projectId: ID
  repositoryId: ID
}
export type UnlinkProjectV2FromTeamInput = {
  clientMutationId?: String
  projectId: ID
  teamId: ID
}
export type UnlinkRepositoryFromProjectInput = {
  clientMutationId?: String
  projectId: ID
  repositoryId: ID
}
export type UnlockLockableInput = {
  clientMutationId?: String
  lockableId: ID
}
export type UnmarkDiscussionCommentAsAnswerInput = {
  clientMutationId?: String
  id: ID
}
export type UnmarkFileAsViewedInput = {
  clientMutationId?: String
  path: String
  pullRequestId: ID
}
export type UnmarkIssueAsDuplicateInput = {
  canonicalId: ID
  clientMutationId?: String
  duplicateId: ID
}
export type UnmarkProjectV2AsTemplateInput = {
  clientMutationId?: String
  projectId: ID
}
export type UnminimizeCommentInput = {
  clientMutationId?: String
  subjectId: ID
}
export type UnpinIssueInput = {
  clientMutationId?: String
  issueId: ID
}
export type UnresolveReviewThreadInput = {
  clientMutationId?: String
  threadId: ID
}
export type UpdateBranchProtectionRuleInput = {
  allowsDeletions?: Boolean
  allowsForcePushes?: Boolean
  blocksCreations?: Boolean
  branchProtectionRuleId: ID
  bypassForcePushActorIds?: ID
  bypassPullRequestActorIds?: ID
  clientMutationId?: String
  dismissesStaleReviews?: Boolean
  isAdminEnforced?: Boolean
  lockAllowsFetchAndMerge?: Boolean
  lockBranch?: Boolean
  pattern?: String
  pushActorIds?: ID
  requireLastPushApproval?: Boolean
  requiredApprovingReviewCount?: Int
  requiredDeploymentEnvironments?: String
  requiredStatusCheckContexts?: String
  requiredStatusChecks?: RequiredStatusCheckInput
  requiresApprovingReviews?: Boolean
  requiresCodeOwnerReviews?: Boolean
  requiresCommitSignatures?: Boolean
  requiresConversationResolution?: Boolean
  requiresDeployments?: Boolean
  requiresLinearHistory?: Boolean
  requiresStatusChecks?: Boolean
  requiresStrictStatusChecks?: Boolean
  restrictsPushes?: Boolean
  restrictsReviewDismissals?: Boolean
  reviewDismissalActorIds?: ID
}
export type UpdateCheckRunInput = {
  actions?: CheckRunAction
  checkRunId: ID
  clientMutationId?: String
  completedAt?: DateTime
  conclusion?: CheckConclusionState
  detailsUrl?: URI
  externalId?: String
  name?: String
  output?: CheckRunOutput
  repositoryId: ID
  startedAt?: DateTime
  status?: RequestableCheckStatusState
}
export type UpdateCheckSuitePreferencesInput = {
  autoTriggerPreferences: CheckSuiteAutoTriggerPreference
  clientMutationId?: String
  repositoryId: ID
}
export type UpdateDiscussionCommentInput = {
  body: String
  clientMutationId?: String
  commentId: ID
}
export type UpdateDiscussionInput = {
  body?: String
  categoryId?: ID
  clientMutationId?: String
  discussionId: ID
  title?: String
}
export type UpdateEnterpriseAdministratorRoleInput = {
  clientMutationId?: String
  enterpriseId: ID
  login: String
  role: EnterpriseAdministratorRole
}
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  policyValue?: EnterpriseAllowPrivateRepositoryForkingPolicyValue
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue
}
export type UpdateEnterpriseDeployKeySettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  membersCanCreateInternalRepositories?: Boolean
  membersCanCreatePrivateRepositories?: Boolean
  membersCanCreatePublicRepositories?: Boolean
  membersCanCreateRepositoriesPolicyEnabled?: Boolean
  settingValue?: EnterpriseMembersCanCreateRepositoriesSettingValue
}
export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue
}
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseOwnerOrganizationRoleInput = {
  clientMutationId?: String
  enterpriseId: ID
  organizationId: ID
  organizationRole: RoleInOrganization
}
export type UpdateEnterpriseProfileInput = {
  clientMutationId?: String
  description?: String
  enterpriseId: ID
  location?: String
  name?: String
  websiteUrl?: String
}
export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledDisabledSettingValue
}
export type UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseDisallowedMethodsSettingValue
}
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  clientMutationId?: String
  enterpriseId: ID
  settingValue: EnterpriseEnabledSettingValue
}
export type UpdateEnvironmentInput = {
  clientMutationId?: String
  environmentId: ID
  preventSelfReview?: Boolean
  reviewers?: ID
  waitTimer?: Int
}
export type UpdateIpAllowListEnabledSettingInput = {
  clientMutationId?: String
  ownerId: ID
  settingValue: IpAllowListEnabledSettingValue
}
export type UpdateIpAllowListEntryInput = {
  allowListValue: String
  clientMutationId?: String
  ipAllowListEntryId: ID
  isActive: Boolean
  name?: String
}
export type UpdateIpAllowListForInstalledAppsEnabledSettingInput = {
  clientMutationId?: String
  ownerId: ID
  settingValue: IpAllowListForInstalledAppsEnabledSettingValue
}
export type UpdateIssueCommentInput = {
  body: String
  clientMutationId?: String
  id: ID
}
export type UpdateIssueInput = {
  assigneeIds?: ID
  body?: String
  clientMutationId?: String
  id: ID
  labelIds?: ID
  milestoneId?: ID
  projectIds?: ID
  state?: IssueState
  title?: String
}
export type UpdateLabelInput = {
  clientMutationId?: String
  color?: String
  description?: String
  id: ID
  name?: String
}
export type UpdateNotificationRestrictionSettingInput = {
  clientMutationId?: String
  ownerId: ID
  settingValue: NotificationRestrictionSettingValue
}
export type UpdateOrganizationAllowPrivateRepositoryForkingSettingInput = {
  clientMutationId?: String
  forkingEnabled: Boolean
  organizationId: ID
}
export type UpdateOrganizationWebCommitSignoffSettingInput = {
  clientMutationId?: String
  organizationId: ID
  webCommitSignoffRequired: Boolean
}
export type UpdateParametersInput = {
  updateAllowsFetchAndMerge: Boolean
}
export type UpdatePatreonSponsorabilityInput = {
  clientMutationId?: String
  enablePatreonSponsorships: Boolean
  sponsorableLogin?: String
}
export type UpdateProjectCardInput = {
  clientMutationId?: String
  isArchived?: Boolean
  note?: String
  projectCardId: ID
}
export type UpdateProjectColumnInput = {
  clientMutationId?: String
  name: String
  projectColumnId: ID
}
export type UpdateProjectInput = {
  body?: String
  clientMutationId?: String
  name?: String
  projectId: ID
  public?: Boolean
  state?: ProjectState
}
export type UpdateProjectV2CollaboratorsInput = {
  clientMutationId?: String
  collaborators: ProjectV2Collaborator
  projectId: ID
}
export type UpdateProjectV2DraftIssueInput = {
  assigneeIds?: ID
  body?: String
  clientMutationId?: String
  draftIssueId: ID
  title?: String
}
export type UpdateProjectV2FieldInput = {
  clientMutationId?: String
  fieldId: ID
  name?: String
  singleSelectOptions?: ProjectV2SingleSelectFieldOptionInput
}
export type UpdateProjectV2Input = {
  clientMutationId?: String
  closed?: Boolean
  projectId: ID
  public?: Boolean
  readme?: String
  shortDescription?: String
  title?: String
}
export type UpdateProjectV2ItemFieldValueInput = {
  clientMutationId?: String
  fieldId: ID
  itemId: ID
  projectId: ID
  value: ProjectV2FieldValue
}
export type UpdateProjectV2ItemPositionInput = {
  afterId?: ID
  clientMutationId?: String
  itemId: ID
  projectId: ID
}
export type UpdateProjectV2StatusUpdateInput = {
  body?: String
  clientMutationId?: String
  startDate?: Date
  status?: ProjectV2StatusUpdateStatus
  statusUpdateId: ID
  targetDate?: Date
}
export type UpdatePullRequestBranchInput = {
  clientMutationId?: String
  expectedHeadOid?: GitObjectID
  pullRequestId: ID
  updateMethod?: PullRequestBranchUpdateMethod
}
export type UpdatePullRequestInput = {
  assigneeIds?: ID
  baseRefName?: String
  body?: String
  clientMutationId?: String
  labelIds?: ID
  maintainerCanModify?: Boolean
  milestoneId?: ID
  projectIds?: ID
  pullRequestId: ID
  state?: PullRequestUpdateState
  title?: String
}
export type UpdatePullRequestReviewCommentInput = {
  body: String
  clientMutationId?: String
  pullRequestReviewCommentId: ID
}
export type UpdatePullRequestReviewInput = {
  body: String
  clientMutationId?: String
  pullRequestReviewId: ID
}
export type UpdateRefInput = {
  clientMutationId?: String
  force?: Boolean
  oid: GitObjectID
  refId: ID
}
export type UpdateRefsInput = {
  clientMutationId?: String
  refUpdates: RefUpdate
  repositoryId: ID
}
export type UpdateRepositoryInput = {
  clientMutationId?: String
  description?: String
  hasDiscussionsEnabled?: Boolean
  hasIssuesEnabled?: Boolean
  hasProjectsEnabled?: Boolean
  hasSponsorshipsEnabled?: Boolean
  hasWikiEnabled?: Boolean
  homepageUrl?: URI
  name?: String
  repositoryId: ID
  template?: Boolean
}
export type UpdateRepositoryRulesetInput = {
  bypassActors?: RepositoryRulesetBypassActorInput
  clientMutationId?: String
  conditions?: RepositoryRuleConditionsInput
  enforcement?: RuleEnforcement
  name?: String
  repositoryRulesetId: ID
  rules?: RepositoryRuleInput
  target?: RepositoryRulesetTarget
}
export type UpdateRepositoryWebCommitSignoffSettingInput = {
  clientMutationId?: String
  repositoryId: ID
  webCommitSignoffRequired: Boolean
}
export type UpdateSponsorshipPreferencesInput = {
  clientMutationId?: String
  privacyLevel?: SponsorshipPrivacy
  receiveEmails?: Boolean
  sponsorId?: ID
  sponsorLogin?: String
  sponsorableId?: ID
  sponsorableLogin?: String
}
export type UpdateSubscriptionInput = {
  clientMutationId?: String
  state: SubscriptionState
  subscribableId: ID
}
export type UpdateTeamDiscussionCommentInput = {
  body: String
  bodyVersion?: String
  clientMutationId?: String
  id: ID
}
export type UpdateTeamDiscussionInput = {
  body?: String
  bodyVersion?: String
  clientMutationId?: String
  id: ID
  pinned?: Boolean
  title?: String
}
export type UpdateTeamReviewAssignmentInput = {
  algorithm?: TeamReviewAssignmentAlgorithm
  clientMutationId?: String
  countMembersAlreadyRequested?: Boolean
  enabled: Boolean
  excludedTeamMemberIds?: ID
  id: ID
  includeChildTeamMembers?: Boolean
  notifyTeam?: Boolean
  removeTeamRequest?: Boolean
  teamMemberCount?: Int
}
export type UpdateTeamsRepositoryInput = {
  clientMutationId?: String
  permission: RepositoryPermission
  repositoryId: ID
  teamIds: ID
}
export type UpdateTopicsInput = {
  clientMutationId?: String
  repositoryId: ID
  topicNames: String
}
export type UpdateUserListInput = {
  clientMutationId?: String
  description?: String
  isPrivate?: Boolean
  listId: ID
  name?: String
}
export type UpdateUserListsForItemInput = {
  clientMutationId?: String
  itemId: ID
  listIds: ID
  suggestedListIds?: ID
}
export type UserStatusOrder = {
  direction: OrderDirection
  field: UserStatusOrderField
}
export type VerifiableDomainOrder = {
  direction: OrderDirection
  field: VerifiableDomainOrderField
}
export type VerifyVerifiableDomainInput = {
  clientMutationId?: String
  id: ID
}
export type WorkflowFileReferenceInput = {
  path: String
  ref?: String
  repositoryId: Int
  sha?: String
}
export type WorkflowRunOrder = {
  direction: OrderDirection
  field: WorkflowRunOrderField
}
export type WorkflowsParametersInput = {
  doNotEnforceOnCreate?: Boolean
  workflows: WorkflowFileReferenceInput
}

// Index interface
export interface $TypeInputsIndex {
  String: String
  Int: Int
  Float: Float
  Boolean: Boolean
  ID: ID
  Base64String: Base64String
  BigInt: BigInt
  Date: Date
  DateTime: DateTime
  GitObjectID: GitObjectID
  GitRefname: GitRefname
  GitSSHRemote: GitSSHRemote
  GitTimestamp: GitTimestamp
  HTML: HTML
  PreciseDateTime: PreciseDateTime
  URI: URI
  X509Certificate: X509Certificate
  ActorType: ActorType
  AuditLogOrderField: AuditLogOrderField
  CheckAnnotationLevel: CheckAnnotationLevel
  CheckConclusionState: CheckConclusionState
  CheckRunState: CheckRunState
  CheckRunType: CheckRunType
  CheckStatusState: CheckStatusState
  CollaboratorAffiliation: CollaboratorAffiliation
  CommentAuthorAssociation: CommentAuthorAssociation
  CommentCannotUpdateReason: CommentCannotUpdateReason
  CommitContributionOrderField: CommitContributionOrderField
  ComparisonStatus: ComparisonStatus
  ContributionLevel: ContributionLevel
  DefaultRepositoryPermissionField: DefaultRepositoryPermissionField
  DependencyGraphEcosystem: DependencyGraphEcosystem
  DeploymentOrderField: DeploymentOrderField
  DeploymentProtectionRuleType: DeploymentProtectionRuleType
  DeploymentReviewState: DeploymentReviewState
  DeploymentState: DeploymentState
  DeploymentStatusState: DeploymentStatusState
  DiffSide: DiffSide
  DiscussionCloseReason: DiscussionCloseReason
  DiscussionOrderField: DiscussionOrderField
  DiscussionPollOptionOrderField: DiscussionPollOptionOrderField
  DiscussionState: DiscussionState
  DiscussionStateReason: DiscussionStateReason
  DismissReason: DismissReason
  EnterpriseAdministratorInvitationOrderField: EnterpriseAdministratorInvitationOrderField
  EnterpriseAdministratorRole: EnterpriseAdministratorRole
  EnterpriseAllowPrivateRepositoryForkingPolicyValue: EnterpriseAllowPrivateRepositoryForkingPolicyValue
  EnterpriseDefaultRepositoryPermissionSettingValue: EnterpriseDefaultRepositoryPermissionSettingValue
  EnterpriseDisallowedMethodsSettingValue: EnterpriseDisallowedMethodsSettingValue
  EnterpriseEnabledDisabledSettingValue: EnterpriseEnabledDisabledSettingValue
  EnterpriseEnabledSettingValue: EnterpriseEnabledSettingValue
  EnterpriseMemberInvitationOrderField: EnterpriseMemberInvitationOrderField
  EnterpriseMemberOrderField: EnterpriseMemberOrderField
  EnterpriseMembersCanCreateRepositoriesSettingValue: EnterpriseMembersCanCreateRepositoriesSettingValue
  EnterpriseMembersCanMakePurchasesSettingValue: EnterpriseMembersCanMakePurchasesSettingValue
  EnterpriseMembershipType: EnterpriseMembershipType
  EnterpriseOrderField: EnterpriseOrderField
  EnterpriseServerInstallationOrderField: EnterpriseServerInstallationOrderField
  EnterpriseServerUserAccountEmailOrderField: EnterpriseServerUserAccountEmailOrderField
  EnterpriseServerUserAccountOrderField: EnterpriseServerUserAccountOrderField
  EnterpriseServerUserAccountsUploadOrderField: EnterpriseServerUserAccountsUploadOrderField
  EnterpriseServerUserAccountsUploadSyncState: EnterpriseServerUserAccountsUploadSyncState
  EnterpriseUserAccountMembershipRole: EnterpriseUserAccountMembershipRole
  EnterpriseUserDeployment: EnterpriseUserDeployment
  EnvironmentOrderField: EnvironmentOrderField
  EnvironmentPinnedFilterField: EnvironmentPinnedFilterField
  FileViewedState: FileViewedState
  FundingPlatform: FundingPlatform
  GistOrderField: GistOrderField
  GistPrivacy: GistPrivacy
  GitSignatureState: GitSignatureState
  IdentityProviderConfigurationState: IdentityProviderConfigurationState
  IpAllowListEnabledSettingValue: IpAllowListEnabledSettingValue
  IpAllowListEntryOrderField: IpAllowListEntryOrderField
  IpAllowListForInstalledAppsEnabledSettingValue: IpAllowListForInstalledAppsEnabledSettingValue
  IssueClosedStateReason: IssueClosedStateReason
  IssueCommentOrderField: IssueCommentOrderField
  IssueOrderField: IssueOrderField
  IssueState: IssueState
  IssueStateReason: IssueStateReason
  IssueTimelineItemsItemType: IssueTimelineItemsItemType
  LabelOrderField: LabelOrderField
  LanguageOrderField: LanguageOrderField
  LockReason: LockReason
  MannequinOrderField: MannequinOrderField
  MergeCommitMessage: MergeCommitMessage
  MergeCommitTitle: MergeCommitTitle
  MergeQueueEntryState: MergeQueueEntryState
  MergeQueueGroupingStrategy: MergeQueueGroupingStrategy
  MergeQueueMergeMethod: MergeQueueMergeMethod
  MergeQueueMergingStrategy: MergeQueueMergingStrategy
  MergeStateStatus: MergeStateStatus
  MergeableState: MergeableState
  MigrationSourceType: MigrationSourceType
  MigrationState: MigrationState
  MilestoneOrderField: MilestoneOrderField
  MilestoneState: MilestoneState
  NotificationRestrictionSettingValue: NotificationRestrictionSettingValue
  OIDCProviderType: OIDCProviderType
  OauthApplicationCreateAuditEntryState: OauthApplicationCreateAuditEntryState
  OperationType: OperationType
  OrderDirection: OrderDirection
  OrgAddMemberAuditEntryPermission: OrgAddMemberAuditEntryPermission
  OrgCreateAuditEntryBillingPlan: OrgCreateAuditEntryBillingPlan
  OrgEnterpriseOwnerOrderField: OrgEnterpriseOwnerOrderField
  OrgRemoveBillingManagerAuditEntryReason: OrgRemoveBillingManagerAuditEntryReason
  OrgRemoveMemberAuditEntryMembershipType: OrgRemoveMemberAuditEntryMembershipType
  OrgRemoveMemberAuditEntryReason: OrgRemoveMemberAuditEntryReason
  OrgRemoveOutsideCollaboratorAuditEntryMembershipType: OrgRemoveOutsideCollaboratorAuditEntryMembershipType
  OrgRemoveOutsideCollaboratorAuditEntryReason: OrgRemoveOutsideCollaboratorAuditEntryReason
  OrgUpdateDefaultRepositoryPermissionAuditEntryPermission: OrgUpdateDefaultRepositoryPermissionAuditEntryPermission
  OrgUpdateMemberAuditEntryPermission: OrgUpdateMemberAuditEntryPermission
  OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility:
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility
  OrganizationInvitationRole: OrganizationInvitationRole
  OrganizationInvitationSource: OrganizationInvitationSource
  OrganizationInvitationType: OrganizationInvitationType
  OrganizationMemberRole: OrganizationMemberRole
  OrganizationMembersCanCreateRepositoriesSettingValue: OrganizationMembersCanCreateRepositoriesSettingValue
  OrganizationMigrationState: OrganizationMigrationState
  OrganizationOrderField: OrganizationOrderField
  PackageFileOrderField: PackageFileOrderField
  PackageOrderField: PackageOrderField
  PackageType: PackageType
  PackageVersionOrderField: PackageVersionOrderField
  PatchStatus: PatchStatus
  PinnableItemType: PinnableItemType
  PinnedDiscussionGradient: PinnedDiscussionGradient
  PinnedDiscussionPattern: PinnedDiscussionPattern
  PinnedEnvironmentOrderField: PinnedEnvironmentOrderField
  ProjectCardArchivedState: ProjectCardArchivedState
  ProjectCardState: ProjectCardState
  ProjectColumnPurpose: ProjectColumnPurpose
  ProjectOrderField: ProjectOrderField
  ProjectState: ProjectState
  ProjectTemplate: ProjectTemplate
  ProjectV2CustomFieldType: ProjectV2CustomFieldType
  ProjectV2FieldOrderField: ProjectV2FieldOrderField
  ProjectV2FieldType: ProjectV2FieldType
  ProjectV2ItemFieldValueOrderField: ProjectV2ItemFieldValueOrderField
  ProjectV2ItemOrderField: ProjectV2ItemOrderField
  ProjectV2ItemType: ProjectV2ItemType
  ProjectV2OrderField: ProjectV2OrderField
  ProjectV2PermissionLevel: ProjectV2PermissionLevel
  ProjectV2Roles: ProjectV2Roles
  ProjectV2SingleSelectFieldOptionColor: ProjectV2SingleSelectFieldOptionColor
  ProjectV2State: ProjectV2State
  ProjectV2StatusUpdateOrderField: ProjectV2StatusUpdateOrderField
  ProjectV2StatusUpdateStatus: ProjectV2StatusUpdateStatus
  ProjectV2ViewLayout: ProjectV2ViewLayout
  ProjectV2ViewOrderField: ProjectV2ViewOrderField
  ProjectV2WorkflowsOrderField: ProjectV2WorkflowsOrderField
  PullRequestBranchUpdateMethod: PullRequestBranchUpdateMethod
  PullRequestMergeMethod: PullRequestMergeMethod
  PullRequestOrderField: PullRequestOrderField
  PullRequestReviewCommentState: PullRequestReviewCommentState
  PullRequestReviewDecision: PullRequestReviewDecision
  PullRequestReviewEvent: PullRequestReviewEvent
  PullRequestReviewState: PullRequestReviewState
  PullRequestReviewThreadSubjectType: PullRequestReviewThreadSubjectType
  PullRequestState: PullRequestState
  PullRequestTimelineItemsItemType: PullRequestTimelineItemsItemType
  PullRequestUpdateState: PullRequestUpdateState
  ReactionContent: ReactionContent
  ReactionOrderField: ReactionOrderField
  RefOrderField: RefOrderField
  ReleaseOrderField: ReleaseOrderField
  RepoAccessAuditEntryVisibility: RepoAccessAuditEntryVisibility
  RepoAddMemberAuditEntryVisibility: RepoAddMemberAuditEntryVisibility
  RepoArchivedAuditEntryVisibility: RepoArchivedAuditEntryVisibility
  RepoChangeMergeSettingAuditEntryMergeType: RepoChangeMergeSettingAuditEntryMergeType
  RepoCreateAuditEntryVisibility: RepoCreateAuditEntryVisibility
  RepoDestroyAuditEntryVisibility: RepoDestroyAuditEntryVisibility
  RepoRemoveMemberAuditEntryVisibility: RepoRemoveMemberAuditEntryVisibility
  ReportedContentClassifiers: ReportedContentClassifiers
  RepositoryAffiliation: RepositoryAffiliation
  RepositoryContributionType: RepositoryContributionType
  RepositoryInteractionLimit: RepositoryInteractionLimit
  RepositoryInteractionLimitExpiry: RepositoryInteractionLimitExpiry
  RepositoryInteractionLimitOrigin: RepositoryInteractionLimitOrigin
  RepositoryInvitationOrderField: RepositoryInvitationOrderField
  RepositoryLockReason: RepositoryLockReason
  RepositoryMigrationOrderDirection: RepositoryMigrationOrderDirection
  RepositoryMigrationOrderField: RepositoryMigrationOrderField
  RepositoryOrderField: RepositoryOrderField
  RepositoryPermission: RepositoryPermission
  RepositoryPrivacy: RepositoryPrivacy
  RepositoryRuleOrderField: RepositoryRuleOrderField
  RepositoryRuleType: RepositoryRuleType
  RepositoryRulesetBypassActorBypassMode: RepositoryRulesetBypassActorBypassMode
  RepositoryRulesetTarget: RepositoryRulesetTarget
  RepositoryVisibility: RepositoryVisibility
  RepositoryVulnerabilityAlertDependencyScope: RepositoryVulnerabilityAlertDependencyScope
  RepositoryVulnerabilityAlertState: RepositoryVulnerabilityAlertState
  RequestableCheckStatusState: RequestableCheckStatusState
  RoleInOrganization: RoleInOrganization
  RuleEnforcement: RuleEnforcement
  SamlDigestAlgorithm: SamlDigestAlgorithm
  SamlSignatureAlgorithm: SamlSignatureAlgorithm
  SavedReplyOrderField: SavedReplyOrderField
  SearchType: SearchType
  SecurityAdvisoryClassification: SecurityAdvisoryClassification
  SecurityAdvisoryEcosystem: SecurityAdvisoryEcosystem
  SecurityAdvisoryIdentifierType: SecurityAdvisoryIdentifierType
  SecurityAdvisoryOrderField: SecurityAdvisoryOrderField
  SecurityAdvisorySeverity: SecurityAdvisorySeverity
  SecurityVulnerabilityOrderField: SecurityVulnerabilityOrderField
  SocialAccountProvider: SocialAccountProvider
  SponsorAndLifetimeValueOrderField: SponsorAndLifetimeValueOrderField
  SponsorOrderField: SponsorOrderField
  SponsorableOrderField: SponsorableOrderField
  SponsorsActivityAction: SponsorsActivityAction
  SponsorsActivityOrderField: SponsorsActivityOrderField
  SponsorsActivityPeriod: SponsorsActivityPeriod
  SponsorsCountryOrRegionCode: SponsorsCountryOrRegionCode
  SponsorsGoalKind: SponsorsGoalKind
  SponsorsListingFeaturedItemFeatureableType: SponsorsListingFeaturedItemFeatureableType
  SponsorsTierOrderField: SponsorsTierOrderField
  SponsorshipNewsletterOrderField: SponsorshipNewsletterOrderField
  SponsorshipOrderField: SponsorshipOrderField
  SponsorshipPaymentSource: SponsorshipPaymentSource
  SponsorshipPrivacy: SponsorshipPrivacy
  SquashMergeCommitMessage: SquashMergeCommitMessage
  SquashMergeCommitTitle: SquashMergeCommitTitle
  StarOrderField: StarOrderField
  StatusState: StatusState
  SubscriptionState: SubscriptionState
  TeamDiscussionCommentOrderField: TeamDiscussionCommentOrderField
  TeamDiscussionOrderField: TeamDiscussionOrderField
  TeamMemberOrderField: TeamMemberOrderField
  TeamMemberRole: TeamMemberRole
  TeamMembershipType: TeamMembershipType
  TeamNotificationSetting: TeamNotificationSetting
  TeamOrderField: TeamOrderField
  TeamPrivacy: TeamPrivacy
  TeamRepositoryOrderField: TeamRepositoryOrderField
  TeamReviewAssignmentAlgorithm: TeamReviewAssignmentAlgorithm
  TeamRole: TeamRole
  ThreadSubscriptionFormAction: ThreadSubscriptionFormAction
  ThreadSubscriptionState: ThreadSubscriptionState
  TopicSuggestionDeclineReason: TopicSuggestionDeclineReason
  TrackedIssueStates: TrackedIssueStates
  TwoFactorCredentialSecurityType: TwoFactorCredentialSecurityType
  UserBlockDuration: UserBlockDuration
  UserStatusOrderField: UserStatusOrderField
  UserViewType: UserViewType
  VerifiableDomainOrderField: VerifiableDomainOrderField
  WorkflowRunOrderField: WorkflowRunOrderField
  WorkflowState: WorkflowState
  AbortQueuedMigrationsInput: AbortQueuedMigrationsInput
  AbortRepositoryMigrationInput: AbortRepositoryMigrationInput
  AcceptEnterpriseAdministratorInvitationInput: AcceptEnterpriseAdministratorInvitationInput
  AcceptEnterpriseMemberInvitationInput: AcceptEnterpriseMemberInvitationInput
  AcceptTopicSuggestionInput: AcceptTopicSuggestionInput
  AccessUserNamespaceRepositoryInput: AccessUserNamespaceRepositoryInput
  AddAssigneesToAssignableInput: AddAssigneesToAssignableInput
  AddCommentInput: AddCommentInput
  AddDiscussionCommentInput: AddDiscussionCommentInput
  AddDiscussionPollVoteInput: AddDiscussionPollVoteInput
  AddEnterpriseOrganizationMemberInput: AddEnterpriseOrganizationMemberInput
  AddEnterpriseSupportEntitlementInput: AddEnterpriseSupportEntitlementInput
  AddLabelsToLabelableInput: AddLabelsToLabelableInput
  AddProjectCardInput: AddProjectCardInput
  AddProjectColumnInput: AddProjectColumnInput
  AddProjectV2DraftIssueInput: AddProjectV2DraftIssueInput
  AddProjectV2ItemByIdInput: AddProjectV2ItemByIdInput
  AddPullRequestReviewCommentInput: AddPullRequestReviewCommentInput
  AddPullRequestReviewInput: AddPullRequestReviewInput
  AddPullRequestReviewThreadInput: AddPullRequestReviewThreadInput
  AddPullRequestReviewThreadReplyInput: AddPullRequestReviewThreadReplyInput
  AddReactionInput: AddReactionInput
  AddStarInput: AddStarInput
  AddSubIssueInput: AddSubIssueInput
  AddUpvoteInput: AddUpvoteInput
  AddVerifiableDomainInput: AddVerifiableDomainInput
  ApproveDeploymentsInput: ApproveDeploymentsInput
  ApproveVerifiableDomainInput: ApproveVerifiableDomainInput
  ArchiveProjectV2ItemInput: ArchiveProjectV2ItemInput
  ArchiveRepositoryInput: ArchiveRepositoryInput
  AuditLogOrder: AuditLogOrder
  BranchNamePatternParametersInput: BranchNamePatternParametersInput
  BulkSponsorship: BulkSponsorship
  CancelEnterpriseAdminInvitationInput: CancelEnterpriseAdminInvitationInput
  CancelEnterpriseMemberInvitationInput: CancelEnterpriseMemberInvitationInput
  CancelSponsorshipInput: CancelSponsorshipInput
  ChangeUserStatusInput: ChangeUserStatusInput
  CheckAnnotationData: CheckAnnotationData
  CheckAnnotationRange: CheckAnnotationRange
  CheckRunAction: CheckRunAction
  CheckRunFilter: CheckRunFilter
  CheckRunOutput: CheckRunOutput
  CheckRunOutputImage: CheckRunOutputImage
  CheckSuiteAutoTriggerPreference: CheckSuiteAutoTriggerPreference
  CheckSuiteFilter: CheckSuiteFilter
  ClearLabelsFromLabelableInput: ClearLabelsFromLabelableInput
  ClearProjectV2ItemFieldValueInput: ClearProjectV2ItemFieldValueInput
  CloneProjectInput: CloneProjectInput
  CloneTemplateRepositoryInput: CloneTemplateRepositoryInput
  CloseDiscussionInput: CloseDiscussionInput
  CloseIssueInput: CloseIssueInput
  ClosePullRequestInput: ClosePullRequestInput
  CodeScanningParametersInput: CodeScanningParametersInput
  CodeScanningToolInput: CodeScanningToolInput
  CommitAuthor: CommitAuthor
  CommitAuthorEmailPatternParametersInput: CommitAuthorEmailPatternParametersInput
  CommitContributionOrder: CommitContributionOrder
  CommitMessage: CommitMessage
  CommitMessagePatternParametersInput: CommitMessagePatternParametersInput
  CommittableBranch: CommittableBranch
  CommitterEmailPatternParametersInput: CommitterEmailPatternParametersInput
  ContributionOrder: ContributionOrder
  ConvertProjectCardNoteToIssueInput: ConvertProjectCardNoteToIssueInput
  ConvertProjectV2DraftIssueItemToIssueInput: ConvertProjectV2DraftIssueItemToIssueInput
  ConvertPullRequestToDraftInput: ConvertPullRequestToDraftInput
  CopyProjectV2Input: CopyProjectV2Input
  CreateAttributionInvitationInput: CreateAttributionInvitationInput
  CreateBranchProtectionRuleInput: CreateBranchProtectionRuleInput
  CreateCheckRunInput: CreateCheckRunInput
  CreateCheckSuiteInput: CreateCheckSuiteInput
  CreateCommitOnBranchInput: CreateCommitOnBranchInput
  CreateDeploymentInput: CreateDeploymentInput
  CreateDeploymentStatusInput: CreateDeploymentStatusInput
  CreateDiscussionInput: CreateDiscussionInput
  CreateEnterpriseOrganizationInput: CreateEnterpriseOrganizationInput
  CreateEnvironmentInput: CreateEnvironmentInput
  CreateIpAllowListEntryInput: CreateIpAllowListEntryInput
  CreateIssueInput: CreateIssueInput
  CreateLabelInput: CreateLabelInput
  CreateLinkedBranchInput: CreateLinkedBranchInput
  CreateMigrationSourceInput: CreateMigrationSourceInput
  CreateProjectInput: CreateProjectInput
  CreateProjectV2FieldInput: CreateProjectV2FieldInput
  CreateProjectV2Input: CreateProjectV2Input
  CreateProjectV2StatusUpdateInput: CreateProjectV2StatusUpdateInput
  CreatePullRequestInput: CreatePullRequestInput
  CreateRefInput: CreateRefInput
  CreateRepositoryInput: CreateRepositoryInput
  CreateRepositoryRulesetInput: CreateRepositoryRulesetInput
  CreateSponsorsListingInput: CreateSponsorsListingInput
  CreateSponsorsTierInput: CreateSponsorsTierInput
  CreateSponsorshipInput: CreateSponsorshipInput
  CreateSponsorshipsInput: CreateSponsorshipsInput
  CreateTeamDiscussionCommentInput: CreateTeamDiscussionCommentInput
  CreateTeamDiscussionInput: CreateTeamDiscussionInput
  CreateUserListInput: CreateUserListInput
  DeclineTopicSuggestionInput: DeclineTopicSuggestionInput
  DeleteBranchProtectionRuleInput: DeleteBranchProtectionRuleInput
  DeleteDeploymentInput: DeleteDeploymentInput
  DeleteDiscussionCommentInput: DeleteDiscussionCommentInput
  DeleteDiscussionInput: DeleteDiscussionInput
  DeleteEnvironmentInput: DeleteEnvironmentInput
  DeleteIpAllowListEntryInput: DeleteIpAllowListEntryInput
  DeleteIssueCommentInput: DeleteIssueCommentInput
  DeleteIssueInput: DeleteIssueInput
  DeleteLabelInput: DeleteLabelInput
  DeleteLinkedBranchInput: DeleteLinkedBranchInput
  DeletePackageVersionInput: DeletePackageVersionInput
  DeleteProjectCardInput: DeleteProjectCardInput
  DeleteProjectColumnInput: DeleteProjectColumnInput
  DeleteProjectInput: DeleteProjectInput
  DeleteProjectV2FieldInput: DeleteProjectV2FieldInput
  DeleteProjectV2Input: DeleteProjectV2Input
  DeleteProjectV2ItemInput: DeleteProjectV2ItemInput
  DeleteProjectV2StatusUpdateInput: DeleteProjectV2StatusUpdateInput
  DeleteProjectV2WorkflowInput: DeleteProjectV2WorkflowInput
  DeletePullRequestReviewCommentInput: DeletePullRequestReviewCommentInput
  DeletePullRequestReviewInput: DeletePullRequestReviewInput
  DeleteRefInput: DeleteRefInput
  DeleteRepositoryRulesetInput: DeleteRepositoryRulesetInput
  DeleteTeamDiscussionCommentInput: DeleteTeamDiscussionCommentInput
  DeleteTeamDiscussionInput: DeleteTeamDiscussionInput
  DeleteUserListInput: DeleteUserListInput
  DeleteVerifiableDomainInput: DeleteVerifiableDomainInput
  DeploymentOrder: DeploymentOrder
  DequeuePullRequestInput: DequeuePullRequestInput
  DisablePullRequestAutoMergeInput: DisablePullRequestAutoMergeInput
  DiscussionOrder: DiscussionOrder
  DiscussionPollOptionOrder: DiscussionPollOptionOrder
  DismissPullRequestReviewInput: DismissPullRequestReviewInput
  DismissRepositoryVulnerabilityAlertInput: DismissRepositoryVulnerabilityAlertInput
  DraftPullRequestReviewComment: DraftPullRequestReviewComment
  DraftPullRequestReviewThread: DraftPullRequestReviewThread
  EnablePullRequestAutoMergeInput: EnablePullRequestAutoMergeInput
  EnqueuePullRequestInput: EnqueuePullRequestInput
  EnterpriseAdministratorInvitationOrder: EnterpriseAdministratorInvitationOrder
  EnterpriseMemberInvitationOrder: EnterpriseMemberInvitationOrder
  EnterpriseMemberOrder: EnterpriseMemberOrder
  EnterpriseOrder: EnterpriseOrder
  EnterpriseServerInstallationOrder: EnterpriseServerInstallationOrder
  EnterpriseServerUserAccountEmailOrder: EnterpriseServerUserAccountEmailOrder
  EnterpriseServerUserAccountOrder: EnterpriseServerUserAccountOrder
  EnterpriseServerUserAccountsUploadOrder: EnterpriseServerUserAccountsUploadOrder
  Environments: Environments
  FileAddition: FileAddition
  FileChanges: FileChanges
  FileDeletion: FileDeletion
  FileExtensionRestrictionParametersInput: FileExtensionRestrictionParametersInput
  FilePathRestrictionParametersInput: FilePathRestrictionParametersInput
  FollowOrganizationInput: FollowOrganizationInput
  FollowUserInput: FollowUserInput
  GistOrder: GistOrder
  GrantEnterpriseOrganizationsMigratorRoleInput: GrantEnterpriseOrganizationsMigratorRoleInput
  GrantMigratorRoleInput: GrantMigratorRoleInput
  ImportProjectInput: ImportProjectInput
  InviteEnterpriseAdminInput: InviteEnterpriseAdminInput
  InviteEnterpriseMemberInput: InviteEnterpriseMemberInput
  IpAllowListEntryOrder: IpAllowListEntryOrder
  IssueCommentOrder: IssueCommentOrder
  IssueFilters: IssueFilters
  IssueOrder: IssueOrder
  LabelOrder: LabelOrder
  LanguageOrder: LanguageOrder
  LinkProjectV2ToRepositoryInput: LinkProjectV2ToRepositoryInput
  LinkProjectV2ToTeamInput: LinkProjectV2ToTeamInput
  LinkRepositoryToProjectInput: LinkRepositoryToProjectInput
  LockLockableInput: LockLockableInput
  MannequinOrder: MannequinOrder
  MarkDiscussionCommentAsAnswerInput: MarkDiscussionCommentAsAnswerInput
  MarkFileAsViewedInput: MarkFileAsViewedInput
  MarkProjectV2AsTemplateInput: MarkProjectV2AsTemplateInput
  MarkPullRequestReadyForReviewInput: MarkPullRequestReadyForReviewInput
  MaxFilePathLengthParametersInput: MaxFilePathLengthParametersInput
  MaxFileSizeParametersInput: MaxFileSizeParametersInput
  MergeBranchInput: MergeBranchInput
  MergePullRequestInput: MergePullRequestInput
  MergeQueueParametersInput: MergeQueueParametersInput
  MilestoneOrder: MilestoneOrder
  MinimizeCommentInput: MinimizeCommentInput
  MoveProjectCardInput: MoveProjectCardInput
  MoveProjectColumnInput: MoveProjectColumnInput
  OrgEnterpriseOwnerOrder: OrgEnterpriseOwnerOrder
  OrganizationOrder: OrganizationOrder
  PackageFileOrder: PackageFileOrder
  PackageOrder: PackageOrder
  PackageVersionOrder: PackageVersionOrder
  PinEnvironmentInput: PinEnvironmentInput
  PinIssueInput: PinIssueInput
  PinnedEnvironmentOrder: PinnedEnvironmentOrder
  ProjectCardImport: ProjectCardImport
  ProjectColumnImport: ProjectColumnImport
  ProjectOrder: ProjectOrder
  ProjectV2Collaborator: ProjectV2Collaborator
  ProjectV2FieldOrder: ProjectV2FieldOrder
  ProjectV2FieldValue: ProjectV2FieldValue
  ProjectV2Filters: ProjectV2Filters
  ProjectV2ItemFieldValueOrder: ProjectV2ItemFieldValueOrder
  ProjectV2ItemOrder: ProjectV2ItemOrder
  ProjectV2Order: ProjectV2Order
  ProjectV2SingleSelectFieldOptionInput: ProjectV2SingleSelectFieldOptionInput
  ProjectV2StatusOrder: ProjectV2StatusOrder
  ProjectV2ViewOrder: ProjectV2ViewOrder
  ProjectV2WorkflowOrder: ProjectV2WorkflowOrder
  PropertyTargetDefinitionInput: PropertyTargetDefinitionInput
  PublishSponsorsTierInput: PublishSponsorsTierInput
  PullRequestOrder: PullRequestOrder
  PullRequestParametersInput: PullRequestParametersInput
  ReactionOrder: ReactionOrder
  RefNameConditionTargetInput: RefNameConditionTargetInput
  RefOrder: RefOrder
  RefUpdate: RefUpdate
  RegenerateEnterpriseIdentityProviderRecoveryCodesInput: RegenerateEnterpriseIdentityProviderRecoveryCodesInput
  RegenerateVerifiableDomainTokenInput: RegenerateVerifiableDomainTokenInput
  RejectDeploymentsInput: RejectDeploymentsInput
  ReleaseOrder: ReleaseOrder
  RemoveAssigneesFromAssignableInput: RemoveAssigneesFromAssignableInput
  RemoveEnterpriseAdminInput: RemoveEnterpriseAdminInput
  RemoveEnterpriseIdentityProviderInput: RemoveEnterpriseIdentityProviderInput
  RemoveEnterpriseMemberInput: RemoveEnterpriseMemberInput
  RemoveEnterpriseOrganizationInput: RemoveEnterpriseOrganizationInput
  RemoveEnterpriseSupportEntitlementInput: RemoveEnterpriseSupportEntitlementInput
  RemoveLabelsFromLabelableInput: RemoveLabelsFromLabelableInput
  RemoveOutsideCollaboratorInput: RemoveOutsideCollaboratorInput
  RemoveReactionInput: RemoveReactionInput
  RemoveStarInput: RemoveStarInput
  RemoveSubIssueInput: RemoveSubIssueInput
  RemoveUpvoteInput: RemoveUpvoteInput
  ReopenDiscussionInput: ReopenDiscussionInput
  ReopenIssueInput: ReopenIssueInput
  ReopenPullRequestInput: ReopenPullRequestInput
  ReorderEnvironmentInput: ReorderEnvironmentInput
  RepositoryIdConditionTargetInput: RepositoryIdConditionTargetInput
  RepositoryInvitationOrder: RepositoryInvitationOrder
  RepositoryMigrationOrder: RepositoryMigrationOrder
  RepositoryNameConditionTargetInput: RepositoryNameConditionTargetInput
  RepositoryOrder: RepositoryOrder
  RepositoryPropertyConditionTargetInput: RepositoryPropertyConditionTargetInput
  RepositoryRuleConditionsInput: RepositoryRuleConditionsInput
  RepositoryRuleInput: RepositoryRuleInput
  RepositoryRuleOrder: RepositoryRuleOrder
  RepositoryRulesetBypassActorInput: RepositoryRulesetBypassActorInput
  ReprioritizeSubIssueInput: ReprioritizeSubIssueInput
  RequestReviewsInput: RequestReviewsInput
  RequiredDeploymentsParametersInput: RequiredDeploymentsParametersInput
  RequiredStatusCheckInput: RequiredStatusCheckInput
  RequiredStatusChecksParametersInput: RequiredStatusChecksParametersInput
  RerequestCheckSuiteInput: RerequestCheckSuiteInput
  ResolveReviewThreadInput: ResolveReviewThreadInput
  RetireSponsorsTierInput: RetireSponsorsTierInput
  RevertPullRequestInput: RevertPullRequestInput
  RevokeEnterpriseOrganizationsMigratorRoleInput: RevokeEnterpriseOrganizationsMigratorRoleInput
  RevokeMigratorRoleInput: RevokeMigratorRoleInput
  RuleParametersInput: RuleParametersInput
  SavedReplyOrder: SavedReplyOrder
  SecurityAdvisoryIdentifierFilter: SecurityAdvisoryIdentifierFilter
  SecurityAdvisoryOrder: SecurityAdvisoryOrder
  SecurityVulnerabilityOrder: SecurityVulnerabilityOrder
  SetEnterpriseIdentityProviderInput: SetEnterpriseIdentityProviderInput
  SetOrganizationInteractionLimitInput: SetOrganizationInteractionLimitInput
  SetRepositoryInteractionLimitInput: SetRepositoryInteractionLimitInput
  SetUserInteractionLimitInput: SetUserInteractionLimitInput
  SponsorAndLifetimeValueOrder: SponsorAndLifetimeValueOrder
  SponsorOrder: SponsorOrder
  SponsorableOrder: SponsorableOrder
  SponsorsActivityOrder: SponsorsActivityOrder
  SponsorsTierOrder: SponsorsTierOrder
  SponsorshipNewsletterOrder: SponsorshipNewsletterOrder
  SponsorshipOrder: SponsorshipOrder
  StarOrder: StarOrder
  StartOrganizationMigrationInput: StartOrganizationMigrationInput
  StartRepositoryMigrationInput: StartRepositoryMigrationInput
  StatusCheckConfigurationInput: StatusCheckConfigurationInput
  SubmitPullRequestReviewInput: SubmitPullRequestReviewInput
  TagNamePatternParametersInput: TagNamePatternParametersInput
  TeamDiscussionCommentOrder: TeamDiscussionCommentOrder
  TeamDiscussionOrder: TeamDiscussionOrder
  TeamMemberOrder: TeamMemberOrder
  TeamOrder: TeamOrder
  TeamRepositoryOrder: TeamRepositoryOrder
  TransferEnterpriseOrganizationInput: TransferEnterpriseOrganizationInput
  TransferIssueInput: TransferIssueInput
  UnarchiveProjectV2ItemInput: UnarchiveProjectV2ItemInput
  UnarchiveRepositoryInput: UnarchiveRepositoryInput
  UnfollowOrganizationInput: UnfollowOrganizationInput
  UnfollowUserInput: UnfollowUserInput
  UnlinkProjectV2FromRepositoryInput: UnlinkProjectV2FromRepositoryInput
  UnlinkProjectV2FromTeamInput: UnlinkProjectV2FromTeamInput
  UnlinkRepositoryFromProjectInput: UnlinkRepositoryFromProjectInput
  UnlockLockableInput: UnlockLockableInput
  UnmarkDiscussionCommentAsAnswerInput: UnmarkDiscussionCommentAsAnswerInput
  UnmarkFileAsViewedInput: UnmarkFileAsViewedInput
  UnmarkIssueAsDuplicateInput: UnmarkIssueAsDuplicateInput
  UnmarkProjectV2AsTemplateInput: UnmarkProjectV2AsTemplateInput
  UnminimizeCommentInput: UnminimizeCommentInput
  UnpinIssueInput: UnpinIssueInput
  UnresolveReviewThreadInput: UnresolveReviewThreadInput
  UpdateBranchProtectionRuleInput: UpdateBranchProtectionRuleInput
  UpdateCheckRunInput: UpdateCheckRunInput
  UpdateCheckSuitePreferencesInput: UpdateCheckSuitePreferencesInput
  UpdateDiscussionCommentInput: UpdateDiscussionCommentInput
  UpdateDiscussionInput: UpdateDiscussionInput
  UpdateEnterpriseAdministratorRoleInput: UpdateEnterpriseAdministratorRoleInput
  UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput
  UpdateEnterpriseDefaultRepositoryPermissionSettingInput: UpdateEnterpriseDefaultRepositoryPermissionSettingInput
  UpdateEnterpriseDeployKeySettingInput: UpdateEnterpriseDeployKeySettingInput
  UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput:
    UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
  UpdateEnterpriseMembersCanCreateRepositoriesSettingInput: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
  UpdateEnterpriseMembersCanDeleteIssuesSettingInput: UpdateEnterpriseMembersCanDeleteIssuesSettingInput
  UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput
  UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
  UpdateEnterpriseMembersCanMakePurchasesSettingInput: UpdateEnterpriseMembersCanMakePurchasesSettingInput
  UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput:
    UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
  UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput:
    UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
  UpdateEnterpriseOrganizationProjectsSettingInput: UpdateEnterpriseOrganizationProjectsSettingInput
  UpdateEnterpriseOwnerOrganizationRoleInput: UpdateEnterpriseOwnerOrganizationRoleInput
  UpdateEnterpriseProfileInput: UpdateEnterpriseProfileInput
  UpdateEnterpriseRepositoryProjectsSettingInput: UpdateEnterpriseRepositoryProjectsSettingInput
  UpdateEnterpriseTeamDiscussionsSettingInput: UpdateEnterpriseTeamDiscussionsSettingInput
  UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput:
    UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput
  UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput:
    UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
  UpdateEnvironmentInput: UpdateEnvironmentInput
  UpdateIpAllowListEnabledSettingInput: UpdateIpAllowListEnabledSettingInput
  UpdateIpAllowListEntryInput: UpdateIpAllowListEntryInput
  UpdateIpAllowListForInstalledAppsEnabledSettingInput: UpdateIpAllowListForInstalledAppsEnabledSettingInput
  UpdateIssueCommentInput: UpdateIssueCommentInput
  UpdateIssueInput: UpdateIssueInput
  UpdateLabelInput: UpdateLabelInput
  UpdateNotificationRestrictionSettingInput: UpdateNotificationRestrictionSettingInput
  UpdateOrganizationAllowPrivateRepositoryForkingSettingInput:
    UpdateOrganizationAllowPrivateRepositoryForkingSettingInput
  UpdateOrganizationWebCommitSignoffSettingInput: UpdateOrganizationWebCommitSignoffSettingInput
  UpdateParametersInput: UpdateParametersInput
  UpdatePatreonSponsorabilityInput: UpdatePatreonSponsorabilityInput
  UpdateProjectCardInput: UpdateProjectCardInput
  UpdateProjectColumnInput: UpdateProjectColumnInput
  UpdateProjectInput: UpdateProjectInput
  UpdateProjectV2CollaboratorsInput: UpdateProjectV2CollaboratorsInput
  UpdateProjectV2DraftIssueInput: UpdateProjectV2DraftIssueInput
  UpdateProjectV2FieldInput: UpdateProjectV2FieldInput
  UpdateProjectV2Input: UpdateProjectV2Input
  UpdateProjectV2ItemFieldValueInput: UpdateProjectV2ItemFieldValueInput
  UpdateProjectV2ItemPositionInput: UpdateProjectV2ItemPositionInput
  UpdateProjectV2StatusUpdateInput: UpdateProjectV2StatusUpdateInput
  UpdatePullRequestBranchInput: UpdatePullRequestBranchInput
  UpdatePullRequestInput: UpdatePullRequestInput
  UpdatePullRequestReviewCommentInput: UpdatePullRequestReviewCommentInput
  UpdatePullRequestReviewInput: UpdatePullRequestReviewInput
  UpdateRefInput: UpdateRefInput
  UpdateRefsInput: UpdateRefsInput
  UpdateRepositoryInput: UpdateRepositoryInput
  UpdateRepositoryRulesetInput: UpdateRepositoryRulesetInput
  UpdateRepositoryWebCommitSignoffSettingInput: UpdateRepositoryWebCommitSignoffSettingInput
  UpdateSponsorshipPreferencesInput: UpdateSponsorshipPreferencesInput
  UpdateSubscriptionInput: UpdateSubscriptionInput
  UpdateTeamDiscussionCommentInput: UpdateTeamDiscussionCommentInput
  UpdateTeamDiscussionInput: UpdateTeamDiscussionInput
  UpdateTeamReviewAssignmentInput: UpdateTeamReviewAssignmentInput
  UpdateTeamsRepositoryInput: UpdateTeamsRepositoryInput
  UpdateTopicsInput: UpdateTopicsInput
  UpdateUserListInput: UpdateUserListInput
  UpdateUserListsForItemInput: UpdateUserListsForItemInput
  UserStatusOrder: UserStatusOrder
  VerifiableDomainOrder: VerifiableDomainOrder
  VerifyVerifiableDomainInput: VerifyVerifiableDomainInput
  WorkflowFileReferenceInput: WorkflowFileReferenceInput
  WorkflowRunOrder: WorkflowRunOrder
  WorkflowsParametersInput: WorkflowsParametersInput
}

// Export without $ prefix for use in other generated modules
export type { $TypeInputsIndex as TypeInputsIndex }

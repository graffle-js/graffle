import type { OperationTypeNode } from 'graphql'
import type * as $$Utilities from '../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Schema from './schema.js'
import * as $$SelectionSets from './selection-sets.js'

//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//
import { createSelect } from '../../../../../src/entrypoints/client.js'
export const Select = createSelect($$Data.Name)

//
//
//
//
//
//
// ==================================================================================================
//                                             Buildtime
// ==================================================================================================
//
//
//
//
//
//

export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilder.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilder.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type AbortQueuedMigrationsPayload<$SelectionSet extends $$SelectionSets.AbortQueuedMigrationsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AbortQueuedMigrationsPayload']
    >
  export type AbortRepositoryMigrationPayload<$SelectionSet extends $$SelectionSets.AbortRepositoryMigrationPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AbortRepositoryMigrationPayload']
    >
  export type AcceptEnterpriseAdministratorInvitationPayload<
    $SelectionSet extends $$SelectionSets.AcceptEnterpriseAdministratorInvitationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AcceptEnterpriseAdministratorInvitationPayload']
  >
  export type AcceptEnterpriseMemberInvitationPayload<
    $SelectionSet extends $$SelectionSets.AcceptEnterpriseMemberInvitationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AcceptEnterpriseMemberInvitationPayload']
  >
  export type AcceptTopicSuggestionPayload<$SelectionSet extends $$SelectionSets.AcceptTopicSuggestionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AcceptTopicSuggestionPayload']
    >
  export type AccessUserNamespaceRepositoryPayload<
    $SelectionSet extends $$SelectionSets.AccessUserNamespaceRepositoryPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AccessUserNamespaceRepositoryPayload']
  >
  export type ActorLocation<$SelectionSet extends $$SelectionSets.ActorLocation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ActorLocation']
    >
  export type AddAssigneesToAssignablePayload<$SelectionSet extends $$SelectionSets.AddAssigneesToAssignablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddAssigneesToAssignablePayload']
    >
  export type AddCommentPayload<$SelectionSet extends $$SelectionSets.AddCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddCommentPayload']
    >
  export type AddDiscussionCommentPayload<$SelectionSet extends $$SelectionSets.AddDiscussionCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddDiscussionCommentPayload']
    >
  export type AddDiscussionPollVotePayload<$SelectionSet extends $$SelectionSets.AddDiscussionPollVotePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddDiscussionPollVotePayload']
    >
  export type AddEnterpriseOrganizationMemberPayload<
    $SelectionSet extends $$SelectionSets.AddEnterpriseOrganizationMemberPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AddEnterpriseOrganizationMemberPayload']
  >
  export type AddEnterpriseSupportEntitlementPayload<
    $SelectionSet extends $$SelectionSets.AddEnterpriseSupportEntitlementPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AddEnterpriseSupportEntitlementPayload']
  >
  export type AddLabelsToLabelablePayload<$SelectionSet extends $$SelectionSets.AddLabelsToLabelablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddLabelsToLabelablePayload']
    >
  export type AddProjectCardPayload<$SelectionSet extends $$SelectionSets.AddProjectCardPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddProjectCardPayload']
    >
  export type AddProjectColumnPayload<$SelectionSet extends $$SelectionSets.AddProjectColumnPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddProjectColumnPayload']
    >
  export type AddProjectV2DraftIssuePayload<$SelectionSet extends $$SelectionSets.AddProjectV2DraftIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddProjectV2DraftIssuePayload']
    >
  export type AddProjectV2ItemByIdPayload<$SelectionSet extends $$SelectionSets.AddProjectV2ItemByIdPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddProjectV2ItemByIdPayload']
    >
  export type AddPullRequestReviewCommentPayload<
    $SelectionSet extends $$SelectionSets.AddPullRequestReviewCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AddPullRequestReviewCommentPayload']
  >
  export type AddPullRequestReviewPayload<$SelectionSet extends $$SelectionSets.AddPullRequestReviewPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddPullRequestReviewPayload']
    >
  export type AddPullRequestReviewThreadPayload<
    $SelectionSet extends $$SelectionSets.AddPullRequestReviewThreadPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AddPullRequestReviewThreadPayload']
  >
  export type AddPullRequestReviewThreadReplyPayload<
    $SelectionSet extends $$SelectionSets.AddPullRequestReviewThreadReplyPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AddPullRequestReviewThreadReplyPayload']
  >
  export type AddReactionPayload<$SelectionSet extends $$SelectionSets.AddReactionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddReactionPayload']
    >
  export type AddStarPayload<$SelectionSet extends $$SelectionSets.AddStarPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddStarPayload']
    >
  export type AddSubIssuePayload<$SelectionSet extends $$SelectionSets.AddSubIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddSubIssuePayload']
    >
  export type AddUpvotePayload<$SelectionSet extends $$SelectionSets.AddUpvotePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddUpvotePayload']
    >
  export type AddVerifiableDomainPayload<$SelectionSet extends $$SelectionSets.AddVerifiableDomainPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddVerifiableDomainPayload']
    >
  export type AddedToMergeQueueEvent<$SelectionSet extends $$SelectionSets.AddedToMergeQueueEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddedToMergeQueueEvent']
    >
  export type AddedToProjectEvent<$SelectionSet extends $$SelectionSets.AddedToProjectEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AddedToProjectEvent']
    >
  export type AnnouncementBanner<$SelectionSet extends $$SelectionSets.AnnouncementBanner> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AnnouncementBanner']
    >
  export type App<$SelectionSet extends $$SelectionSets.App> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['App']
  >
  export type ApproveDeploymentsPayload<$SelectionSet extends $$SelectionSets.ApproveDeploymentsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ApproveDeploymentsPayload']
    >
  export type ApproveVerifiableDomainPayload<$SelectionSet extends $$SelectionSets.ApproveVerifiableDomainPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ApproveVerifiableDomainPayload']
    >
  export type ArchiveProjectV2ItemPayload<$SelectionSet extends $$SelectionSets.ArchiveProjectV2ItemPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ArchiveProjectV2ItemPayload']
    >
  export type ArchiveRepositoryPayload<$SelectionSet extends $$SelectionSets.ArchiveRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ArchiveRepositoryPayload']
    >
  export type AssignedEvent<$SelectionSet extends $$SelectionSets.AssignedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AssignedEvent']
    >
  export type AutoMergeDisabledEvent<$SelectionSet extends $$SelectionSets.AutoMergeDisabledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutoMergeDisabledEvent']
    >
  export type AutoMergeEnabledEvent<$SelectionSet extends $$SelectionSets.AutoMergeEnabledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutoMergeEnabledEvent']
    >
  export type AutoMergeRequest<$SelectionSet extends $$SelectionSets.AutoMergeRequest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutoMergeRequest']
    >
  export type AutoRebaseEnabledEvent<$SelectionSet extends $$SelectionSets.AutoRebaseEnabledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutoRebaseEnabledEvent']
    >
  export type AutoSquashEnabledEvent<$SelectionSet extends $$SelectionSets.AutoSquashEnabledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutoSquashEnabledEvent']
    >
  export type AutomaticBaseChangeFailedEvent<$SelectionSet extends $$SelectionSets.AutomaticBaseChangeFailedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AutomaticBaseChangeFailedEvent']
    >
  export type AutomaticBaseChangeSucceededEvent<
    $SelectionSet extends $$SelectionSets.AutomaticBaseChangeSucceededEvent,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['AutomaticBaseChangeSucceededEvent']
  >
  export type BaseRefChangedEvent<$SelectionSet extends $$SelectionSets.BaseRefChangedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BaseRefChangedEvent']
    >
  export type BaseRefDeletedEvent<$SelectionSet extends $$SelectionSets.BaseRefDeletedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BaseRefDeletedEvent']
    >
  export type BaseRefForcePushedEvent<$SelectionSet extends $$SelectionSets.BaseRefForcePushedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BaseRefForcePushedEvent']
    >
  export type Blame<$SelectionSet extends $$SelectionSets.Blame> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Blame']
    >
  export type BlameRange<$SelectionSet extends $$SelectionSets.BlameRange> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BlameRange']
    >
  export type Blob<$SelectionSet extends $$SelectionSets.Blob> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Blob']
    >
  export type Bot<$SelectionSet extends $$SelectionSets.Bot> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Bot']
  >
  export type BranchNamePatternParameters<$SelectionSet extends $$SelectionSets.BranchNamePatternParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchNamePatternParameters']
    >
  export type BranchProtectionRule<$SelectionSet extends $$SelectionSets.BranchProtectionRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchProtectionRule']
    >
  export type BranchProtectionRuleConflict<$SelectionSet extends $$SelectionSets.BranchProtectionRuleConflict> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchProtectionRuleConflict']
    >
  export type BranchProtectionRuleConflictConnection<
    $SelectionSet extends $$SelectionSets.BranchProtectionRuleConflictConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['BranchProtectionRuleConflictConnection']
  >
  export type BranchProtectionRuleConflictEdge<$SelectionSet extends $$SelectionSets.BranchProtectionRuleConflictEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchProtectionRuleConflictEdge']
    >
  export type BranchProtectionRuleConnection<$SelectionSet extends $$SelectionSets.BranchProtectionRuleConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchProtectionRuleConnection']
    >
  export type BranchProtectionRuleEdge<$SelectionSet extends $$SelectionSets.BranchProtectionRuleEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchProtectionRuleEdge']
    >
  export type BypassForcePushAllowance<$SelectionSet extends $$SelectionSets.BypassForcePushAllowance> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BypassForcePushAllowance']
    >
  export type BypassForcePushAllowanceConnection<
    $SelectionSet extends $$SelectionSets.BypassForcePushAllowanceConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['BypassForcePushAllowanceConnection']
  >
  export type BypassForcePushAllowanceEdge<$SelectionSet extends $$SelectionSets.BypassForcePushAllowanceEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BypassForcePushAllowanceEdge']
    >
  export type BypassPullRequestAllowance<$SelectionSet extends $$SelectionSets.BypassPullRequestAllowance> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BypassPullRequestAllowance']
    >
  export type BypassPullRequestAllowanceConnection<
    $SelectionSet extends $$SelectionSets.BypassPullRequestAllowanceConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['BypassPullRequestAllowanceConnection']
  >
  export type BypassPullRequestAllowanceEdge<$SelectionSet extends $$SelectionSets.BypassPullRequestAllowanceEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BypassPullRequestAllowanceEdge']
    >
  export type CVSS<$SelectionSet extends $$SelectionSets.CVSS> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CVSS']
    >
  export type CWE<$SelectionSet extends $$SelectionSets.CWE> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CWE']
  >
  export type CWEConnection<$SelectionSet extends $$SelectionSets.CWEConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CWEConnection']
    >
  export type CWEEdge<$SelectionSet extends $$SelectionSets.CWEEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CWEEdge']
    >
  export type CancelEnterpriseAdminInvitationPayload<
    $SelectionSet extends $$SelectionSets.CancelEnterpriseAdminInvitationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CancelEnterpriseAdminInvitationPayload']
  >
  export type CancelEnterpriseMemberInvitationPayload<
    $SelectionSet extends $$SelectionSets.CancelEnterpriseMemberInvitationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CancelEnterpriseMemberInvitationPayload']
  >
  export type CancelSponsorshipPayload<$SelectionSet extends $$SelectionSets.CancelSponsorshipPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CancelSponsorshipPayload']
    >
  export type ChangeUserStatusPayload<$SelectionSet extends $$SelectionSets.ChangeUserStatusPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChangeUserStatusPayload']
    >
  export type CheckAnnotation<$SelectionSet extends $$SelectionSets.CheckAnnotation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckAnnotation']
    >
  export type CheckAnnotationConnection<$SelectionSet extends $$SelectionSets.CheckAnnotationConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckAnnotationConnection']
    >
  export type CheckAnnotationEdge<$SelectionSet extends $$SelectionSets.CheckAnnotationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckAnnotationEdge']
    >
  export type CheckAnnotationPosition<$SelectionSet extends $$SelectionSets.CheckAnnotationPosition> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckAnnotationPosition']
    >
  export type CheckAnnotationSpan<$SelectionSet extends $$SelectionSets.CheckAnnotationSpan> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckAnnotationSpan']
    >
  export type CheckRun<$SelectionSet extends $$SelectionSets.CheckRun> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckRun']
    >
  export type CheckRunConnection<$SelectionSet extends $$SelectionSets.CheckRunConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckRunConnection']
    >
  export type CheckRunEdge<$SelectionSet extends $$SelectionSets.CheckRunEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckRunEdge']
    >
  export type CheckRunStateCount<$SelectionSet extends $$SelectionSets.CheckRunStateCount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckRunStateCount']
    >
  export type CheckStep<$SelectionSet extends $$SelectionSets.CheckStep> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckStep']
    >
  export type CheckStepConnection<$SelectionSet extends $$SelectionSets.CheckStepConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckStepConnection']
    >
  export type CheckStepEdge<$SelectionSet extends $$SelectionSets.CheckStepEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckStepEdge']
    >
  export type CheckSuite<$SelectionSet extends $$SelectionSets.CheckSuite> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckSuite']
    >
  export type CheckSuiteConnection<$SelectionSet extends $$SelectionSets.CheckSuiteConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckSuiteConnection']
    >
  export type CheckSuiteEdge<$SelectionSet extends $$SelectionSets.CheckSuiteEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CheckSuiteEdge']
    >
  export type ClearLabelsFromLabelablePayload<$SelectionSet extends $$SelectionSets.ClearLabelsFromLabelablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ClearLabelsFromLabelablePayload']
    >
  export type ClearProjectV2ItemFieldValuePayload<
    $SelectionSet extends $$SelectionSets.ClearProjectV2ItemFieldValuePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ClearProjectV2ItemFieldValuePayload']
  >
  export type CloneProjectPayload<$SelectionSet extends $$SelectionSets.CloneProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CloneProjectPayload']
    >
  export type CloneTemplateRepositoryPayload<$SelectionSet extends $$SelectionSets.CloneTemplateRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CloneTemplateRepositoryPayload']
    >
  export type CloseDiscussionPayload<$SelectionSet extends $$SelectionSets.CloseDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CloseDiscussionPayload']
    >
  export type CloseIssuePayload<$SelectionSet extends $$SelectionSets.CloseIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CloseIssuePayload']
    >
  export type ClosePullRequestPayload<$SelectionSet extends $$SelectionSets.ClosePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ClosePullRequestPayload']
    >
  export type ClosedEvent<$SelectionSet extends $$SelectionSets.ClosedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ClosedEvent']
    >
  export type CodeOfConduct<$SelectionSet extends $$SelectionSets.CodeOfConduct> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CodeOfConduct']
    >
  export type CodeScanningParameters<$SelectionSet extends $$SelectionSets.CodeScanningParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CodeScanningParameters']
    >
  export type CodeScanningTool<$SelectionSet extends $$SelectionSets.CodeScanningTool> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CodeScanningTool']
    >
  export type CommentDeletedEvent<$SelectionSet extends $$SelectionSets.CommentDeletedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommentDeletedEvent']
    >
  export type Commit<$SelectionSet extends $$SelectionSets.Commit> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Commit']
    >
  export type CommitAuthorEmailPatternParameters<
    $SelectionSet extends $$SelectionSets.CommitAuthorEmailPatternParameters,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CommitAuthorEmailPatternParameters']
  >
  export type CommitComment<$SelectionSet extends $$SelectionSets.CommitComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitComment']
    >
  export type CommitCommentConnection<$SelectionSet extends $$SelectionSets.CommitCommentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitCommentConnection']
    >
  export type CommitCommentEdge<$SelectionSet extends $$SelectionSets.CommitCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitCommentEdge']
    >
  export type CommitCommentThread<$SelectionSet extends $$SelectionSets.CommitCommentThread> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitCommentThread']
    >
  export type CommitConnection<$SelectionSet extends $$SelectionSets.CommitConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitConnection']
    >
  export type CommitContributionsByRepository<$SelectionSet extends $$SelectionSets.CommitContributionsByRepository> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitContributionsByRepository']
    >
  export type CommitEdge<$SelectionSet extends $$SelectionSets.CommitEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitEdge']
    >
  export type CommitHistoryConnection<$SelectionSet extends $$SelectionSets.CommitHistoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitHistoryConnection']
    >
  export type CommitMessagePatternParameters<$SelectionSet extends $$SelectionSets.CommitMessagePatternParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitMessagePatternParameters']
    >
  export type CommitterEmailPatternParameters<$SelectionSet extends $$SelectionSets.CommitterEmailPatternParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CommitterEmailPatternParameters']
    >
  export type Comparison<$SelectionSet extends $$SelectionSets.Comparison> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Comparison']
    >
  export type ComparisonCommitConnection<$SelectionSet extends $$SelectionSets.ComparisonCommitConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ComparisonCommitConnection']
    >
  export type ConnectedEvent<$SelectionSet extends $$SelectionSets.ConnectedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ConnectedEvent']
    >
  export type ContributingGuidelines<$SelectionSet extends $$SelectionSets.ContributingGuidelines> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributingGuidelines']
    >
  export type ContributionCalendar<$SelectionSet extends $$SelectionSets.ContributionCalendar> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributionCalendar']
    >
  export type ContributionCalendarDay<$SelectionSet extends $$SelectionSets.ContributionCalendarDay> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributionCalendarDay']
    >
  export type ContributionCalendarMonth<$SelectionSet extends $$SelectionSets.ContributionCalendarMonth> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributionCalendarMonth']
    >
  export type ContributionCalendarWeek<$SelectionSet extends $$SelectionSets.ContributionCalendarWeek> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributionCalendarWeek']
    >
  export type ContributionsCollection<$SelectionSet extends $$SelectionSets.ContributionsCollection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContributionsCollection']
    >
  export type ConvertProjectCardNoteToIssuePayload<
    $SelectionSet extends $$SelectionSets.ConvertProjectCardNoteToIssuePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ConvertProjectCardNoteToIssuePayload']
  >
  export type ConvertProjectV2DraftIssueItemToIssuePayload<
    $SelectionSet extends $$SelectionSets.ConvertProjectV2DraftIssueItemToIssuePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ConvertProjectV2DraftIssueItemToIssuePayload']
  >
  export type ConvertPullRequestToDraftPayload<$SelectionSet extends $$SelectionSets.ConvertPullRequestToDraftPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ConvertPullRequestToDraftPayload']
    >
  export type ConvertToDraftEvent<$SelectionSet extends $$SelectionSets.ConvertToDraftEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ConvertToDraftEvent']
    >
  export type ConvertedNoteToIssueEvent<$SelectionSet extends $$SelectionSets.ConvertedNoteToIssueEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ConvertedNoteToIssueEvent']
    >
  export type ConvertedToDiscussionEvent<$SelectionSet extends $$SelectionSets.ConvertedToDiscussionEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ConvertedToDiscussionEvent']
    >
  export type CopilotEndpoints<$SelectionSet extends $$SelectionSets.CopilotEndpoints> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CopilotEndpoints']
    >
  export type CopyProjectV2Payload<$SelectionSet extends $$SelectionSets.CopyProjectV2Payload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CopyProjectV2Payload']
    >
  export type CreateAttributionInvitationPayload<
    $SelectionSet extends $$SelectionSets.CreateAttributionInvitationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreateAttributionInvitationPayload']
  >
  export type CreateBranchProtectionRulePayload<
    $SelectionSet extends $$SelectionSets.CreateBranchProtectionRulePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreateBranchProtectionRulePayload']
  >
  export type CreateCheckRunPayload<$SelectionSet extends $$SelectionSets.CreateCheckRunPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateCheckRunPayload']
    >
  export type CreateCheckSuitePayload<$SelectionSet extends $$SelectionSets.CreateCheckSuitePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateCheckSuitePayload']
    >
  export type CreateCommitOnBranchPayload<$SelectionSet extends $$SelectionSets.CreateCommitOnBranchPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateCommitOnBranchPayload']
    >
  export type CreateDeploymentPayload<$SelectionSet extends $$SelectionSets.CreateDeploymentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateDeploymentPayload']
    >
  export type CreateDeploymentStatusPayload<$SelectionSet extends $$SelectionSets.CreateDeploymentStatusPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateDeploymentStatusPayload']
    >
  export type CreateDiscussionPayload<$SelectionSet extends $$SelectionSets.CreateDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateDiscussionPayload']
    >
  export type CreateEnterpriseOrganizationPayload<
    $SelectionSet extends $$SelectionSets.CreateEnterpriseOrganizationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreateEnterpriseOrganizationPayload']
  >
  export type CreateEnvironmentPayload<$SelectionSet extends $$SelectionSets.CreateEnvironmentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateEnvironmentPayload']
    >
  export type CreateIpAllowListEntryPayload<$SelectionSet extends $$SelectionSets.CreateIpAllowListEntryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateIpAllowListEntryPayload']
    >
  export type CreateIssuePayload<$SelectionSet extends $$SelectionSets.CreateIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateIssuePayload']
    >
  export type CreateLabelPayload<$SelectionSet extends $$SelectionSets.CreateLabelPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateLabelPayload']
    >
  export type CreateLinkedBranchPayload<$SelectionSet extends $$SelectionSets.CreateLinkedBranchPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateLinkedBranchPayload']
    >
  export type CreateMigrationSourcePayload<$SelectionSet extends $$SelectionSets.CreateMigrationSourcePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateMigrationSourcePayload']
    >
  export type CreateProjectPayload<$SelectionSet extends $$SelectionSets.CreateProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateProjectPayload']
    >
  export type CreateProjectV2FieldPayload<$SelectionSet extends $$SelectionSets.CreateProjectV2FieldPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateProjectV2FieldPayload']
    >
  export type CreateProjectV2Payload<$SelectionSet extends $$SelectionSets.CreateProjectV2Payload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateProjectV2Payload']
    >
  export type CreateProjectV2StatusUpdatePayload<
    $SelectionSet extends $$SelectionSets.CreateProjectV2StatusUpdatePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreateProjectV2StatusUpdatePayload']
  >
  export type CreatePullRequestPayload<$SelectionSet extends $$SelectionSets.CreatePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatePullRequestPayload']
    >
  export type CreateRefPayload<$SelectionSet extends $$SelectionSets.CreateRefPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateRefPayload']
    >
  export type CreateRepositoryPayload<$SelectionSet extends $$SelectionSets.CreateRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateRepositoryPayload']
    >
  export type CreateRepositoryRulesetPayload<$SelectionSet extends $$SelectionSets.CreateRepositoryRulesetPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateRepositoryRulesetPayload']
    >
  export type CreateSponsorsListingPayload<$SelectionSet extends $$SelectionSets.CreateSponsorsListingPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateSponsorsListingPayload']
    >
  export type CreateSponsorsTierPayload<$SelectionSet extends $$SelectionSets.CreateSponsorsTierPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateSponsorsTierPayload']
    >
  export type CreateSponsorshipPayload<$SelectionSet extends $$SelectionSets.CreateSponsorshipPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateSponsorshipPayload']
    >
  export type CreateSponsorshipsPayload<$SelectionSet extends $$SelectionSets.CreateSponsorshipsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateSponsorshipsPayload']
    >
  export type CreateTeamDiscussionCommentPayload<
    $SelectionSet extends $$SelectionSets.CreateTeamDiscussionCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreateTeamDiscussionCommentPayload']
  >
  export type CreateTeamDiscussionPayload<$SelectionSet extends $$SelectionSets.CreateTeamDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateTeamDiscussionPayload']
    >
  export type CreateUserListPayload<$SelectionSet extends $$SelectionSets.CreateUserListPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreateUserListPayload']
    >
  export type CreatedCommitContribution<$SelectionSet extends $$SelectionSets.CreatedCommitContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedCommitContribution']
    >
  export type CreatedCommitContributionConnection<
    $SelectionSet extends $$SelectionSets.CreatedCommitContributionConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedCommitContributionConnection']
  >
  export type CreatedCommitContributionEdge<$SelectionSet extends $$SelectionSets.CreatedCommitContributionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedCommitContributionEdge']
    >
  export type CreatedIssueContribution<$SelectionSet extends $$SelectionSets.CreatedIssueContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedIssueContribution']
    >
  export type CreatedIssueContributionConnection<
    $SelectionSet extends $$SelectionSets.CreatedIssueContributionConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedIssueContributionConnection']
  >
  export type CreatedIssueContributionEdge<$SelectionSet extends $$SelectionSets.CreatedIssueContributionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedIssueContributionEdge']
    >
  export type CreatedPullRequestContribution<$SelectionSet extends $$SelectionSets.CreatedPullRequestContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedPullRequestContribution']
    >
  export type CreatedPullRequestContributionConnection<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestContributionConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestContributionConnection']
  >
  export type CreatedPullRequestContributionEdge<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestContributionEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestContributionEdge']
  >
  export type CreatedPullRequestReviewContribution<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestReviewContribution,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestReviewContribution']
  >
  export type CreatedPullRequestReviewContributionConnection<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestReviewContributionConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestReviewContributionConnection']
  >
  export type CreatedPullRequestReviewContributionEdge<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestReviewContributionEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestReviewContributionEdge']
  >
  export type CreatedRepositoryContribution<$SelectionSet extends $$SelectionSets.CreatedRepositoryContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CreatedRepositoryContribution']
    >
  export type CreatedRepositoryContributionConnection<
    $SelectionSet extends $$SelectionSets.CreatedRepositoryContributionConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedRepositoryContributionConnection']
  >
  export type CreatedRepositoryContributionEdge<
    $SelectionSet extends $$SelectionSets.CreatedRepositoryContributionEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedRepositoryContributionEdge']
  >
  export type CrossReferencedEvent<$SelectionSet extends $$SelectionSets.CrossReferencedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CrossReferencedEvent']
    >
  export type CvssSeverities<$SelectionSet extends $$SelectionSets.CvssSeverities> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CvssSeverities']
    >
  export type DeclineTopicSuggestionPayload<$SelectionSet extends $$SelectionSets.DeclineTopicSuggestionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeclineTopicSuggestionPayload']
    >
  export type DeleteBranchProtectionRulePayload<
    $SelectionSet extends $$SelectionSets.DeleteBranchProtectionRulePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeleteBranchProtectionRulePayload']
  >
  export type DeleteDeploymentPayload<$SelectionSet extends $$SelectionSets.DeleteDeploymentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteDeploymentPayload']
    >
  export type DeleteDiscussionCommentPayload<$SelectionSet extends $$SelectionSets.DeleteDiscussionCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteDiscussionCommentPayload']
    >
  export type DeleteDiscussionPayload<$SelectionSet extends $$SelectionSets.DeleteDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteDiscussionPayload']
    >
  export type DeleteEnvironmentPayload<$SelectionSet extends $$SelectionSets.DeleteEnvironmentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteEnvironmentPayload']
    >
  export type DeleteIpAllowListEntryPayload<$SelectionSet extends $$SelectionSets.DeleteIpAllowListEntryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteIpAllowListEntryPayload']
    >
  export type DeleteIssueCommentPayload<$SelectionSet extends $$SelectionSets.DeleteIssueCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteIssueCommentPayload']
    >
  export type DeleteIssuePayload<$SelectionSet extends $$SelectionSets.DeleteIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteIssuePayload']
    >
  export type DeleteLabelPayload<$SelectionSet extends $$SelectionSets.DeleteLabelPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteLabelPayload']
    >
  export type DeleteLinkedBranchPayload<$SelectionSet extends $$SelectionSets.DeleteLinkedBranchPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteLinkedBranchPayload']
    >
  export type DeletePackageVersionPayload<$SelectionSet extends $$SelectionSets.DeletePackageVersionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeletePackageVersionPayload']
    >
  export type DeleteProjectCardPayload<$SelectionSet extends $$SelectionSets.DeleteProjectCardPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectCardPayload']
    >
  export type DeleteProjectColumnPayload<$SelectionSet extends $$SelectionSets.DeleteProjectColumnPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectColumnPayload']
    >
  export type DeleteProjectPayload<$SelectionSet extends $$SelectionSets.DeleteProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectPayload']
    >
  export type DeleteProjectV2FieldPayload<$SelectionSet extends $$SelectionSets.DeleteProjectV2FieldPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectV2FieldPayload']
    >
  export type DeleteProjectV2ItemPayload<$SelectionSet extends $$SelectionSets.DeleteProjectV2ItemPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectV2ItemPayload']
    >
  export type DeleteProjectV2Payload<$SelectionSet extends $$SelectionSets.DeleteProjectV2Payload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectV2Payload']
    >
  export type DeleteProjectV2StatusUpdatePayload<
    $SelectionSet extends $$SelectionSets.DeleteProjectV2StatusUpdatePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeleteProjectV2StatusUpdatePayload']
  >
  export type DeleteProjectV2WorkflowPayload<$SelectionSet extends $$SelectionSets.DeleteProjectV2WorkflowPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteProjectV2WorkflowPayload']
    >
  export type DeletePullRequestReviewCommentPayload<
    $SelectionSet extends $$SelectionSets.DeletePullRequestReviewCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeletePullRequestReviewCommentPayload']
  >
  export type DeletePullRequestReviewPayload<$SelectionSet extends $$SelectionSets.DeletePullRequestReviewPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeletePullRequestReviewPayload']
    >
  export type DeleteRefPayload<$SelectionSet extends $$SelectionSets.DeleteRefPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteRefPayload']
    >
  export type DeleteRepositoryRulesetPayload<$SelectionSet extends $$SelectionSets.DeleteRepositoryRulesetPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteRepositoryRulesetPayload']
    >
  export type DeleteTeamDiscussionCommentPayload<
    $SelectionSet extends $$SelectionSets.DeleteTeamDiscussionCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeleteTeamDiscussionCommentPayload']
  >
  export type DeleteTeamDiscussionPayload<$SelectionSet extends $$SelectionSets.DeleteTeamDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteTeamDiscussionPayload']
    >
  export type DeleteUserListPayload<$SelectionSet extends $$SelectionSets.DeleteUserListPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteUserListPayload']
    >
  export type DeleteVerifiableDomainPayload<$SelectionSet extends $$SelectionSets.DeleteVerifiableDomainPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeleteVerifiableDomainPayload']
    >
  export type DemilestonedEvent<$SelectionSet extends $$SelectionSets.DemilestonedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DemilestonedEvent']
    >
  export type DependabotUpdate<$SelectionSet extends $$SelectionSets.DependabotUpdate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependabotUpdate']
    >
  export type DependabotUpdateError<$SelectionSet extends $$SelectionSets.DependabotUpdateError> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependabotUpdateError']
    >
  export type DependencyGraphDependency<$SelectionSet extends $$SelectionSets.DependencyGraphDependency> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependencyGraphDependency']
    >
  export type DependencyGraphDependencyConnection<
    $SelectionSet extends $$SelectionSets.DependencyGraphDependencyConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DependencyGraphDependencyConnection']
  >
  export type DependencyGraphDependencyEdge<$SelectionSet extends $$SelectionSets.DependencyGraphDependencyEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependencyGraphDependencyEdge']
    >
  export type DependencyGraphManifest<$SelectionSet extends $$SelectionSets.DependencyGraphManifest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependencyGraphManifest']
    >
  export type DependencyGraphManifestConnection<
    $SelectionSet extends $$SelectionSets.DependencyGraphManifestConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DependencyGraphManifestConnection']
  >
  export type DependencyGraphManifestEdge<$SelectionSet extends $$SelectionSets.DependencyGraphManifestEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DependencyGraphManifestEdge']
    >
  export type DeployKey<$SelectionSet extends $$SelectionSets.DeployKey> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeployKey']
    >
  export type DeployKeyConnection<$SelectionSet extends $$SelectionSets.DeployKeyConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeployKeyConnection']
    >
  export type DeployKeyEdge<$SelectionSet extends $$SelectionSets.DeployKeyEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeployKeyEdge']
    >
  export type DeployedEvent<$SelectionSet extends $$SelectionSets.DeployedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeployedEvent']
    >
  export type Deployment<$SelectionSet extends $$SelectionSets.Deployment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Deployment']
    >
  export type DeploymentConnection<$SelectionSet extends $$SelectionSets.DeploymentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentConnection']
    >
  export type DeploymentEdge<$SelectionSet extends $$SelectionSets.DeploymentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentEdge']
    >
  export type DeploymentEnvironmentChangedEvent<
    $SelectionSet extends $$SelectionSets.DeploymentEnvironmentChangedEvent,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeploymentEnvironmentChangedEvent']
  >
  export type DeploymentProtectionRule<$SelectionSet extends $$SelectionSets.DeploymentProtectionRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentProtectionRule']
    >
  export type DeploymentProtectionRuleConnection<
    $SelectionSet extends $$SelectionSets.DeploymentProtectionRuleConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DeploymentProtectionRuleConnection']
  >
  export type DeploymentProtectionRuleEdge<$SelectionSet extends $$SelectionSets.DeploymentProtectionRuleEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentProtectionRuleEdge']
    >
  export type DeploymentRequest<$SelectionSet extends $$SelectionSets.DeploymentRequest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentRequest']
    >
  export type DeploymentRequestConnection<$SelectionSet extends $$SelectionSets.DeploymentRequestConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentRequestConnection']
    >
  export type DeploymentRequestEdge<$SelectionSet extends $$SelectionSets.DeploymentRequestEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentRequestEdge']
    >
  export type DeploymentReview<$SelectionSet extends $$SelectionSets.DeploymentReview> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReview']
    >
  export type DeploymentReviewConnection<$SelectionSet extends $$SelectionSets.DeploymentReviewConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReviewConnection']
    >
  export type DeploymentReviewEdge<$SelectionSet extends $$SelectionSets.DeploymentReviewEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReviewEdge']
    >
  export type DeploymentReviewerConnection<$SelectionSet extends $$SelectionSets.DeploymentReviewerConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReviewerConnection']
    >
  export type DeploymentReviewerEdge<$SelectionSet extends $$SelectionSets.DeploymentReviewerEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReviewerEdge']
    >
  export type DeploymentStatus<$SelectionSet extends $$SelectionSets.DeploymentStatus> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentStatus']
    >
  export type DeploymentStatusConnection<$SelectionSet extends $$SelectionSets.DeploymentStatusConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentStatusConnection']
    >
  export type DeploymentStatusEdge<$SelectionSet extends $$SelectionSets.DeploymentStatusEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentStatusEdge']
    >
  export type DequeuePullRequestPayload<$SelectionSet extends $$SelectionSets.DequeuePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DequeuePullRequestPayload']
    >
  export type DisablePullRequestAutoMergePayload<
    $SelectionSet extends $$SelectionSets.DisablePullRequestAutoMergePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DisablePullRequestAutoMergePayload']
  >
  export type DisconnectedEvent<$SelectionSet extends $$SelectionSets.DisconnectedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DisconnectedEvent']
    >
  export type Discussion<$SelectionSet extends $$SelectionSets.Discussion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Discussion']
    >
  export type DiscussionCategory<$SelectionSet extends $$SelectionSets.DiscussionCategory> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionCategory']
    >
  export type DiscussionCategoryConnection<$SelectionSet extends $$SelectionSets.DiscussionCategoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionCategoryConnection']
    >
  export type DiscussionCategoryEdge<$SelectionSet extends $$SelectionSets.DiscussionCategoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionCategoryEdge']
    >
  export type DiscussionComment<$SelectionSet extends $$SelectionSets.DiscussionComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionComment']
    >
  export type DiscussionCommentConnection<$SelectionSet extends $$SelectionSets.DiscussionCommentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionCommentConnection']
    >
  export type DiscussionCommentEdge<$SelectionSet extends $$SelectionSets.DiscussionCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionCommentEdge']
    >
  export type DiscussionConnection<$SelectionSet extends $$SelectionSets.DiscussionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionConnection']
    >
  export type DiscussionEdge<$SelectionSet extends $$SelectionSets.DiscussionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionEdge']
    >
  export type DiscussionPoll<$SelectionSet extends $$SelectionSets.DiscussionPoll> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionPoll']
    >
  export type DiscussionPollOption<$SelectionSet extends $$SelectionSets.DiscussionPollOption> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionPollOption']
    >
  export type DiscussionPollOptionConnection<$SelectionSet extends $$SelectionSets.DiscussionPollOptionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionPollOptionConnection']
    >
  export type DiscussionPollOptionEdge<$SelectionSet extends $$SelectionSets.DiscussionPollOptionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DiscussionPollOptionEdge']
    >
  export type DismissPullRequestReviewPayload<$SelectionSet extends $$SelectionSets.DismissPullRequestReviewPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DismissPullRequestReviewPayload']
    >
  export type DismissRepositoryVulnerabilityAlertPayload<
    $SelectionSet extends $$SelectionSets.DismissRepositoryVulnerabilityAlertPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['DismissRepositoryVulnerabilityAlertPayload']
  >
  export type DraftIssue<$SelectionSet extends $$SelectionSets.DraftIssue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DraftIssue']
    >
  export type EPSS<$SelectionSet extends $$SelectionSets.EPSS> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EPSS']
    >
  export type EnablePullRequestAutoMergePayload<
    $SelectionSet extends $$SelectionSets.EnablePullRequestAutoMergePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnablePullRequestAutoMergePayload']
  >
  export type EnqueuePullRequestPayload<$SelectionSet extends $$SelectionSets.EnqueuePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnqueuePullRequestPayload']
    >
  export type Enterprise<$SelectionSet extends $$SelectionSets.Enterprise> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Enterprise']
    >
  export type EnterpriseAdministratorConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseAdministratorConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseAdministratorConnection']
  >
  export type EnterpriseAdministratorEdge<$SelectionSet extends $$SelectionSets.EnterpriseAdministratorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseAdministratorEdge']
    >
  export type EnterpriseAdministratorInvitation<
    $SelectionSet extends $$SelectionSets.EnterpriseAdministratorInvitation,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseAdministratorInvitation']
  >
  export type EnterpriseAdministratorInvitationConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseAdministratorInvitationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseAdministratorInvitationConnection']
  >
  export type EnterpriseAdministratorInvitationEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseAdministratorInvitationEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseAdministratorInvitationEdge']
  >
  export type EnterpriseBillingInfo<$SelectionSet extends $$SelectionSets.EnterpriseBillingInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseBillingInfo']
    >
  export type EnterpriseConnection<$SelectionSet extends $$SelectionSets.EnterpriseConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseConnection']
    >
  export type EnterpriseEdge<$SelectionSet extends $$SelectionSets.EnterpriseEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseEdge']
    >
  export type EnterpriseFailedInvitationConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseFailedInvitationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseFailedInvitationConnection']
  >
  export type EnterpriseFailedInvitationEdge<$SelectionSet extends $$SelectionSets.EnterpriseFailedInvitationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseFailedInvitationEdge']
    >
  export type EnterpriseIdentityProvider<$SelectionSet extends $$SelectionSets.EnterpriseIdentityProvider> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseIdentityProvider']
    >
  export type EnterpriseMemberConnection<$SelectionSet extends $$SelectionSets.EnterpriseMemberConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseMemberConnection']
    >
  export type EnterpriseMemberEdge<$SelectionSet extends $$SelectionSets.EnterpriseMemberEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseMemberEdge']
    >
  export type EnterpriseMemberInvitation<$SelectionSet extends $$SelectionSets.EnterpriseMemberInvitation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseMemberInvitation']
    >
  export type EnterpriseMemberInvitationConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseMemberInvitationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseMemberInvitationConnection']
  >
  export type EnterpriseMemberInvitationEdge<$SelectionSet extends $$SelectionSets.EnterpriseMemberInvitationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseMemberInvitationEdge']
    >
  export type EnterpriseOrganizationMembershipConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseOrganizationMembershipConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseOrganizationMembershipConnection']
  >
  export type EnterpriseOrganizationMembershipEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseOrganizationMembershipEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseOrganizationMembershipEdge']
  >
  export type EnterpriseOutsideCollaboratorConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseOutsideCollaboratorConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseOutsideCollaboratorConnection']
  >
  export type EnterpriseOutsideCollaboratorEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseOutsideCollaboratorEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseOutsideCollaboratorEdge']
  >
  export type EnterpriseOwnerInfo<$SelectionSet extends $$SelectionSets.EnterpriseOwnerInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseOwnerInfo']
    >
  export type EnterprisePendingMemberInvitationConnection<
    $SelectionSet extends $$SelectionSets.EnterprisePendingMemberInvitationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterprisePendingMemberInvitationConnection']
  >
  export type EnterprisePendingMemberInvitationEdge<
    $SelectionSet extends $$SelectionSets.EnterprisePendingMemberInvitationEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterprisePendingMemberInvitationEdge']
  >
  export type EnterpriseRepositoryInfo<$SelectionSet extends $$SelectionSets.EnterpriseRepositoryInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseRepositoryInfo']
    >
  export type EnterpriseRepositoryInfoConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseRepositoryInfoConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseRepositoryInfoConnection']
  >
  export type EnterpriseRepositoryInfoEdge<$SelectionSet extends $$SelectionSets.EnterpriseRepositoryInfoEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseRepositoryInfoEdge']
    >
  export type EnterpriseServerInstallation<$SelectionSet extends $$SelectionSets.EnterpriseServerInstallation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseServerInstallation']
    >
  export type EnterpriseServerInstallationConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseServerInstallationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerInstallationConnection']
  >
  export type EnterpriseServerInstallationEdge<$SelectionSet extends $$SelectionSets.EnterpriseServerInstallationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseServerInstallationEdge']
    >
  export type EnterpriseServerInstallationMembershipConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseServerInstallationMembershipConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerInstallationMembershipConnection']
  >
  export type EnterpriseServerInstallationMembershipEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseServerInstallationMembershipEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerInstallationMembershipEdge']
  >
  export type EnterpriseServerUserAccount<$SelectionSet extends $$SelectionSets.EnterpriseServerUserAccount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseServerUserAccount']
    >
  export type EnterpriseServerUserAccountConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountConnection']
  >
  export type EnterpriseServerUserAccountEdge<$SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseServerUserAccountEdge']
    >
  export type EnterpriseServerUserAccountEmail<$SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountEmail> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseServerUserAccountEmail']
    >
  export type EnterpriseServerUserAccountEmailConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountEmailConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountEmailConnection']
  >
  export type EnterpriseServerUserAccountEmailEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountEmailEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountEmailEdge']
  >
  export type EnterpriseServerUserAccountsUpload<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountsUpload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountsUpload']
  >
  export type EnterpriseServerUserAccountsUploadConnection<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountsUploadConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountsUploadConnection']
  >
  export type EnterpriseServerUserAccountsUploadEdge<
    $SelectionSet extends $$SelectionSets.EnterpriseServerUserAccountsUploadEdge,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['EnterpriseServerUserAccountsUploadEdge']
  >
  export type EnterpriseUserAccount<$SelectionSet extends $$SelectionSets.EnterpriseUserAccount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseUserAccount']
    >
  export type Environment<$SelectionSet extends $$SelectionSets.Environment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Environment']
    >
  export type EnvironmentConnection<$SelectionSet extends $$SelectionSets.EnvironmentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnvironmentConnection']
    >
  export type EnvironmentEdge<$SelectionSet extends $$SelectionSets.EnvironmentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnvironmentEdge']
    >
  export type ExternalIdentity<$SelectionSet extends $$SelectionSets.ExternalIdentity> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentity']
    >
  export type ExternalIdentityAttribute<$SelectionSet extends $$SelectionSets.ExternalIdentityAttribute> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentityAttribute']
    >
  export type ExternalIdentityConnection<$SelectionSet extends $$SelectionSets.ExternalIdentityConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentityConnection']
    >
  export type ExternalIdentityEdge<$SelectionSet extends $$SelectionSets.ExternalIdentityEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentityEdge']
    >
  export type ExternalIdentitySamlAttributes<$SelectionSet extends $$SelectionSets.ExternalIdentitySamlAttributes> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentitySamlAttributes']
    >
  export type ExternalIdentityScimAttributes<$SelectionSet extends $$SelectionSets.ExternalIdentityScimAttributes> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ExternalIdentityScimAttributes']
    >
  export type FileExtensionRestrictionParameters<
    $SelectionSet extends $$SelectionSets.FileExtensionRestrictionParameters,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['FileExtensionRestrictionParameters']
  >
  export type FilePathRestrictionParameters<$SelectionSet extends $$SelectionSets.FilePathRestrictionParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FilePathRestrictionParameters']
    >
  export type FollowOrganizationPayload<$SelectionSet extends $$SelectionSets.FollowOrganizationPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FollowOrganizationPayload']
    >
  export type FollowUserPayload<$SelectionSet extends $$SelectionSets.FollowUserPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FollowUserPayload']
    >
  export type FollowerConnection<$SelectionSet extends $$SelectionSets.FollowerConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FollowerConnection']
    >
  export type FollowingConnection<$SelectionSet extends $$SelectionSets.FollowingConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FollowingConnection']
    >
  export type FundingLink<$SelectionSet extends $$SelectionSets.FundingLink> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['FundingLink']
    >
  export type GenericHovercardContext<$SelectionSet extends $$SelectionSets.GenericHovercardContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GenericHovercardContext']
    >
  export type Gist<$SelectionSet extends $$SelectionSets.Gist> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Gist']
    >
  export type GistComment<$SelectionSet extends $$SelectionSets.GistComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistComment']
    >
  export type GistCommentConnection<$SelectionSet extends $$SelectionSets.GistCommentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistCommentConnection']
    >
  export type GistCommentEdge<$SelectionSet extends $$SelectionSets.GistCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistCommentEdge']
    >
  export type GistConnection<$SelectionSet extends $$SelectionSets.GistConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistConnection']
    >
  export type GistEdge<$SelectionSet extends $$SelectionSets.GistEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistEdge']
    >
  export type GistFile<$SelectionSet extends $$SelectionSets.GistFile> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GistFile']
    >
  export type GitActor<$SelectionSet extends $$SelectionSets.GitActor> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitActor']
    >
  export type GitActorConnection<$SelectionSet extends $$SelectionSets.GitActorConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitActorConnection']
    >
  export type GitActorEdge<$SelectionSet extends $$SelectionSets.GitActorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitActorEdge']
    >
  export type GitHubMetadata<$SelectionSet extends $$SelectionSets.GitHubMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitHubMetadata']
    >
  export type GpgSignature<$SelectionSet extends $$SelectionSets.GpgSignature> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GpgSignature']
    >
  export type GrantEnterpriseOrganizationsMigratorRolePayload<
    $SelectionSet extends $$SelectionSets.GrantEnterpriseOrganizationsMigratorRolePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['GrantEnterpriseOrganizationsMigratorRolePayload']
  >
  export type GrantMigratorRolePayload<$SelectionSet extends $$SelectionSets.GrantMigratorRolePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GrantMigratorRolePayload']
    >
  export type HeadRefDeletedEvent<$SelectionSet extends $$SelectionSets.HeadRefDeletedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['HeadRefDeletedEvent']
    >
  export type HeadRefForcePushedEvent<$SelectionSet extends $$SelectionSets.HeadRefForcePushedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['HeadRefForcePushedEvent']
    >
  export type HeadRefRestoredEvent<$SelectionSet extends $$SelectionSets.HeadRefRestoredEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['HeadRefRestoredEvent']
    >
  export type Hovercard<$SelectionSet extends $$SelectionSets.Hovercard> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Hovercard']
    >
  export type ImportProjectPayload<$SelectionSet extends $$SelectionSets.ImportProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ImportProjectPayload']
    >
  export type InviteEnterpriseAdminPayload<$SelectionSet extends $$SelectionSets.InviteEnterpriseAdminPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InviteEnterpriseAdminPayload']
    >
  export type InviteEnterpriseMemberPayload<$SelectionSet extends $$SelectionSets.InviteEnterpriseMemberPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['InviteEnterpriseMemberPayload']
    >
  export type IpAllowListEntry<$SelectionSet extends $$SelectionSets.IpAllowListEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IpAllowListEntry']
    >
  export type IpAllowListEntryConnection<$SelectionSet extends $$SelectionSets.IpAllowListEntryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IpAllowListEntryConnection']
    >
  export type IpAllowListEntryEdge<$SelectionSet extends $$SelectionSets.IpAllowListEntryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IpAllowListEntryEdge']
    >
  export type Issue<$SelectionSet extends $$SelectionSets.Issue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Issue']
    >
  export type IssueComment<$SelectionSet extends $$SelectionSets.IssueComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueComment']
    >
  export type IssueCommentConnection<$SelectionSet extends $$SelectionSets.IssueCommentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueCommentConnection']
    >
  export type IssueCommentEdge<$SelectionSet extends $$SelectionSets.IssueCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueCommentEdge']
    >
  export type IssueConnection<$SelectionSet extends $$SelectionSets.IssueConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueConnection']
    >
  export type IssueContributionsByRepository<$SelectionSet extends $$SelectionSets.IssueContributionsByRepository> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueContributionsByRepository']
    >
  export type IssueEdge<$SelectionSet extends $$SelectionSets.IssueEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueEdge']
    >
  export type IssueTemplate<$SelectionSet extends $$SelectionSets.IssueTemplate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTemplate']
    >
  export type IssueTimelineConnection<$SelectionSet extends $$SelectionSets.IssueTimelineConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineConnection']
    >
  export type IssueTimelineItemEdge<$SelectionSet extends $$SelectionSets.IssueTimelineItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineItemEdge']
    >
  export type IssueTimelineItemsConnection<$SelectionSet extends $$SelectionSets.IssueTimelineItemsConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineItemsConnection']
    >
  export type IssueTimelineItemsEdge<$SelectionSet extends $$SelectionSets.IssueTimelineItemsEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineItemsEdge']
    >
  export type JoinedGitHubContribution<$SelectionSet extends $$SelectionSets.JoinedGitHubContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['JoinedGitHubContribution']
    >
  export type Label<$SelectionSet extends $$SelectionSets.Label> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Label']
    >
  export type LabelConnection<$SelectionSet extends $$SelectionSets.LabelConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LabelConnection']
    >
  export type LabelEdge<$SelectionSet extends $$SelectionSets.LabelEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LabelEdge']
    >
  export type LabeledEvent<$SelectionSet extends $$SelectionSets.LabeledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LabeledEvent']
    >
  export type Language<$SelectionSet extends $$SelectionSets.Language> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Language']
    >
  export type LanguageConnection<$SelectionSet extends $$SelectionSets.LanguageConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LanguageConnection']
    >
  export type LanguageEdge<$SelectionSet extends $$SelectionSets.LanguageEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LanguageEdge']
    >
  export type License<$SelectionSet extends $$SelectionSets.License> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['License']
    >
  export type LicenseRule<$SelectionSet extends $$SelectionSets.LicenseRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LicenseRule']
    >
  export type LinkProjectV2ToRepositoryPayload<$SelectionSet extends $$SelectionSets.LinkProjectV2ToRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkProjectV2ToRepositoryPayload']
    >
  export type LinkProjectV2ToTeamPayload<$SelectionSet extends $$SelectionSets.LinkProjectV2ToTeamPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkProjectV2ToTeamPayload']
    >
  export type LinkRepositoryToProjectPayload<$SelectionSet extends $$SelectionSets.LinkRepositoryToProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkRepositoryToProjectPayload']
    >
  export type LinkedBranch<$SelectionSet extends $$SelectionSets.LinkedBranch> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkedBranch']
    >
  export type LinkedBranchConnection<$SelectionSet extends $$SelectionSets.LinkedBranchConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkedBranchConnection']
    >
  export type LinkedBranchEdge<$SelectionSet extends $$SelectionSets.LinkedBranchEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LinkedBranchEdge']
    >
  export type LockLockablePayload<$SelectionSet extends $$SelectionSets.LockLockablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LockLockablePayload']
    >
  export type LockedEvent<$SelectionSet extends $$SelectionSets.LockedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LockedEvent']
    >
  export type Mannequin<$SelectionSet extends $$SelectionSets.Mannequin> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Mannequin']
    >
  export type MannequinConnection<$SelectionSet extends $$SelectionSets.MannequinConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MannequinConnection']
    >
  export type MannequinEdge<$SelectionSet extends $$SelectionSets.MannequinEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MannequinEdge']
    >
  export type MarkDiscussionCommentAsAnswerPayload<
    $SelectionSet extends $$SelectionSets.MarkDiscussionCommentAsAnswerPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['MarkDiscussionCommentAsAnswerPayload']
  >
  export type MarkFileAsViewedPayload<$SelectionSet extends $$SelectionSets.MarkFileAsViewedPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarkFileAsViewedPayload']
    >
  export type MarkProjectV2AsTemplatePayload<$SelectionSet extends $$SelectionSets.MarkProjectV2AsTemplatePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarkProjectV2AsTemplatePayload']
    >
  export type MarkPullRequestReadyForReviewPayload<
    $SelectionSet extends $$SelectionSets.MarkPullRequestReadyForReviewPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['MarkPullRequestReadyForReviewPayload']
  >
  export type MarkedAsDuplicateEvent<$SelectionSet extends $$SelectionSets.MarkedAsDuplicateEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarkedAsDuplicateEvent']
    >
  export type MarketplaceCategory<$SelectionSet extends $$SelectionSets.MarketplaceCategory> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarketplaceCategory']
    >
  export type MarketplaceListing<$SelectionSet extends $$SelectionSets.MarketplaceListing> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarketplaceListing']
    >
  export type MarketplaceListingConnection<$SelectionSet extends $$SelectionSets.MarketplaceListingConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarketplaceListingConnection']
    >
  export type MarketplaceListingEdge<$SelectionSet extends $$SelectionSets.MarketplaceListingEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MarketplaceListingEdge']
    >
  export type MaxFilePathLengthParameters<$SelectionSet extends $$SelectionSets.MaxFilePathLengthParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MaxFilePathLengthParameters']
    >
  export type MaxFileSizeParameters<$SelectionSet extends $$SelectionSets.MaxFileSizeParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MaxFileSizeParameters']
    >
  export type MemberFeatureRequestNotification<$SelectionSet extends $$SelectionSets.MemberFeatureRequestNotification> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MemberFeatureRequestNotification']
    >
  export type MembersCanDeleteReposClearAuditEntry<
    $SelectionSet extends $$SelectionSets.MembersCanDeleteReposClearAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['MembersCanDeleteReposClearAuditEntry']
  >
  export type MembersCanDeleteReposDisableAuditEntry<
    $SelectionSet extends $$SelectionSets.MembersCanDeleteReposDisableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['MembersCanDeleteReposDisableAuditEntry']
  >
  export type MembersCanDeleteReposEnableAuditEntry<
    $SelectionSet extends $$SelectionSets.MembersCanDeleteReposEnableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['MembersCanDeleteReposEnableAuditEntry']
  >
  export type MentionedEvent<$SelectionSet extends $$SelectionSets.MentionedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MentionedEvent']
    >
  export type MergeBranchPayload<$SelectionSet extends $$SelectionSets.MergeBranchPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeBranchPayload']
    >
  export type MergePullRequestPayload<$SelectionSet extends $$SelectionSets.MergePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergePullRequestPayload']
    >
  export type MergeQueue<$SelectionSet extends $$SelectionSets.MergeQueue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueue']
    >
  export type MergeQueueConfiguration<$SelectionSet extends $$SelectionSets.MergeQueueConfiguration> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueueConfiguration']
    >
  export type MergeQueueEntry<$SelectionSet extends $$SelectionSets.MergeQueueEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueueEntry']
    >
  export type MergeQueueEntryConnection<$SelectionSet extends $$SelectionSets.MergeQueueEntryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueueEntryConnection']
    >
  export type MergeQueueEntryEdge<$SelectionSet extends $$SelectionSets.MergeQueueEntryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueueEntryEdge']
    >
  export type MergeQueueParameters<$SelectionSet extends $$SelectionSets.MergeQueueParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergeQueueParameters']
    >
  export type MergedEvent<$SelectionSet extends $$SelectionSets.MergedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MergedEvent']
    >
  export type MigrationSource<$SelectionSet extends $$SelectionSets.MigrationSource> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MigrationSource']
    >
  export type Milestone<$SelectionSet extends $$SelectionSets.Milestone> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Milestone']
    >
  export type MilestoneConnection<$SelectionSet extends $$SelectionSets.MilestoneConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MilestoneConnection']
    >
  export type MilestoneEdge<$SelectionSet extends $$SelectionSets.MilestoneEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MilestoneEdge']
    >
  export type MilestonedEvent<$SelectionSet extends $$SelectionSets.MilestonedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MilestonedEvent']
    >
  export type MinimizeCommentPayload<$SelectionSet extends $$SelectionSets.MinimizeCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MinimizeCommentPayload']
    >
  export type MoveProjectCardPayload<$SelectionSet extends $$SelectionSets.MoveProjectCardPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MoveProjectCardPayload']
    >
  export type MoveProjectColumnPayload<$SelectionSet extends $$SelectionSets.MoveProjectColumnPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MoveProjectColumnPayload']
    >
  export type MovedColumnsInProjectEvent<$SelectionSet extends $$SelectionSets.MovedColumnsInProjectEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MovedColumnsInProjectEvent']
    >
  export type OIDCProvider<$SelectionSet extends $$SelectionSets.OIDCProvider> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OIDCProvider']
    >
  export type OauthApplicationCreateAuditEntry<$SelectionSet extends $$SelectionSets.OauthApplicationCreateAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OauthApplicationCreateAuditEntry']
    >
  export type OrgAddBillingManagerAuditEntry<$SelectionSet extends $$SelectionSets.OrgAddBillingManagerAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgAddBillingManagerAuditEntry']
    >
  export type OrgAddMemberAuditEntry<$SelectionSet extends $$SelectionSets.OrgAddMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgAddMemberAuditEntry']
    >
  export type OrgBlockUserAuditEntry<$SelectionSet extends $$SelectionSets.OrgBlockUserAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgBlockUserAuditEntry']
    >
  export type OrgConfigDisableCollaboratorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgConfigDisableCollaboratorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgConfigDisableCollaboratorsOnlyAuditEntry']
  >
  export type OrgConfigEnableCollaboratorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgConfigEnableCollaboratorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgConfigEnableCollaboratorsOnlyAuditEntry']
  >
  export type OrgCreateAuditEntry<$SelectionSet extends $$SelectionSets.OrgCreateAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgCreateAuditEntry']
    >
  export type OrgDisableOauthAppRestrictionsAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgDisableOauthAppRestrictionsAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgDisableOauthAppRestrictionsAuditEntry']
  >
  export type OrgDisableSamlAuditEntry<$SelectionSet extends $$SelectionSets.OrgDisableSamlAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgDisableSamlAuditEntry']
    >
  export type OrgDisableTwoFactorRequirementAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgDisableTwoFactorRequirementAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgDisableTwoFactorRequirementAuditEntry']
  >
  export type OrgEnableOauthAppRestrictionsAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgEnableOauthAppRestrictionsAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgEnableOauthAppRestrictionsAuditEntry']
  >
  export type OrgEnableSamlAuditEntry<$SelectionSet extends $$SelectionSets.OrgEnableSamlAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgEnableSamlAuditEntry']
    >
  export type OrgEnableTwoFactorRequirementAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgEnableTwoFactorRequirementAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgEnableTwoFactorRequirementAuditEntry']
  >
  export type OrgInviteMemberAuditEntry<$SelectionSet extends $$SelectionSets.OrgInviteMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgInviteMemberAuditEntry']
    >
  export type OrgInviteToBusinessAuditEntry<$SelectionSet extends $$SelectionSets.OrgInviteToBusinessAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgInviteToBusinessAuditEntry']
    >
  export type OrgOauthAppAccessApprovedAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgOauthAppAccessApprovedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgOauthAppAccessApprovedAuditEntry']
  >
  export type OrgOauthAppAccessBlockedAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgOauthAppAccessBlockedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgOauthAppAccessBlockedAuditEntry']
  >
  export type OrgOauthAppAccessDeniedAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgOauthAppAccessDeniedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgOauthAppAccessDeniedAuditEntry']
  >
  export type OrgOauthAppAccessRequestedAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgOauthAppAccessRequestedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgOauthAppAccessRequestedAuditEntry']
  >
  export type OrgOauthAppAccessUnblockedAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgOauthAppAccessUnblockedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgOauthAppAccessUnblockedAuditEntry']
  >
  export type OrgRemoveBillingManagerAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgRemoveBillingManagerAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRemoveBillingManagerAuditEntry']
  >
  export type OrgRemoveMemberAuditEntry<$SelectionSet extends $$SelectionSets.OrgRemoveMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgRemoveMemberAuditEntry']
    >
  export type OrgRemoveOutsideCollaboratorAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgRemoveOutsideCollaboratorAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRemoveOutsideCollaboratorAuditEntry']
  >
  export type OrgRestoreMemberAuditEntry<$SelectionSet extends $$SelectionSets.OrgRestoreMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgRestoreMemberAuditEntry']
    >
  export type OrgRestoreMemberMembershipOrganizationAuditEntryData<
    $SelectionSet extends $$SelectionSets.OrgRestoreMemberMembershipOrganizationAuditEntryData,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRestoreMemberMembershipOrganizationAuditEntryData']
  >
  export type OrgRestoreMemberMembershipRepositoryAuditEntryData<
    $SelectionSet extends $$SelectionSets.OrgRestoreMemberMembershipRepositoryAuditEntryData,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRestoreMemberMembershipRepositoryAuditEntryData']
  >
  export type OrgRestoreMemberMembershipTeamAuditEntryData<
    $SelectionSet extends $$SelectionSets.OrgRestoreMemberMembershipTeamAuditEntryData,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRestoreMemberMembershipTeamAuditEntryData']
  >
  export type OrgUnblockUserAuditEntry<$SelectionSet extends $$SelectionSets.OrgUnblockUserAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgUnblockUserAuditEntry']
    >
  export type OrgUpdateDefaultRepositoryPermissionAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgUpdateDefaultRepositoryPermissionAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgUpdateDefaultRepositoryPermissionAuditEntry']
  >
  export type OrgUpdateMemberAuditEntry<$SelectionSet extends $$SelectionSets.OrgUpdateMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrgUpdateMemberAuditEntry']
    >
  export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgUpdateMemberRepositoryCreationPermissionAuditEntry']
  >
  export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry<
    $SelectionSet extends $$SelectionSets.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgUpdateMemberRepositoryInvitationPermissionAuditEntry']
  >
  export type Organization<$SelectionSet extends $$SelectionSets.Organization> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Organization']
    >
  export type OrganizationAuditEntryConnection<$SelectionSet extends $$SelectionSets.OrganizationAuditEntryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationAuditEntryConnection']
    >
  export type OrganizationAuditEntryEdge<$SelectionSet extends $$SelectionSets.OrganizationAuditEntryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationAuditEntryEdge']
    >
  export type OrganizationConnection<$SelectionSet extends $$SelectionSets.OrganizationConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationConnection']
    >
  export type OrganizationEdge<$SelectionSet extends $$SelectionSets.OrganizationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationEdge']
    >
  export type OrganizationEnterpriseOwnerConnection<
    $SelectionSet extends $$SelectionSets.OrganizationEnterpriseOwnerConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrganizationEnterpriseOwnerConnection']
  >
  export type OrganizationEnterpriseOwnerEdge<$SelectionSet extends $$SelectionSets.OrganizationEnterpriseOwnerEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationEnterpriseOwnerEdge']
    >
  export type OrganizationIdentityProvider<$SelectionSet extends $$SelectionSets.OrganizationIdentityProvider> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationIdentityProvider']
    >
  export type OrganizationInvitation<$SelectionSet extends $$SelectionSets.OrganizationInvitation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationInvitation']
    >
  export type OrganizationInvitationConnection<$SelectionSet extends $$SelectionSets.OrganizationInvitationConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationInvitationConnection']
    >
  export type OrganizationInvitationEdge<$SelectionSet extends $$SelectionSets.OrganizationInvitationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationInvitationEdge']
    >
  export type OrganizationMemberConnection<$SelectionSet extends $$SelectionSets.OrganizationMemberConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationMemberConnection']
    >
  export type OrganizationMemberEdge<$SelectionSet extends $$SelectionSets.OrganizationMemberEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationMemberEdge']
    >
  export type OrganizationMigration<$SelectionSet extends $$SelectionSets.OrganizationMigration> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationMigration']
    >
  export type OrganizationTeamsHovercardContext<
    $SelectionSet extends $$SelectionSets.OrganizationTeamsHovercardContext,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrganizationTeamsHovercardContext']
  >
  export type OrganizationsHovercardContext<$SelectionSet extends $$SelectionSets.OrganizationsHovercardContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationsHovercardContext']
    >
  export type Package<$SelectionSet extends $$SelectionSets.Package> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Package']
    >
  export type PackageConnection<$SelectionSet extends $$SelectionSets.PackageConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageConnection']
    >
  export type PackageEdge<$SelectionSet extends $$SelectionSets.PackageEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageEdge']
    >
  export type PackageFile<$SelectionSet extends $$SelectionSets.PackageFile> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageFile']
    >
  export type PackageFileConnection<$SelectionSet extends $$SelectionSets.PackageFileConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageFileConnection']
    >
  export type PackageFileEdge<$SelectionSet extends $$SelectionSets.PackageFileEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageFileEdge']
    >
  export type PackageStatistics<$SelectionSet extends $$SelectionSets.PackageStatistics> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageStatistics']
    >
  export type PackageTag<$SelectionSet extends $$SelectionSets.PackageTag> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageTag']
    >
  export type PackageVersion<$SelectionSet extends $$SelectionSets.PackageVersion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageVersion']
    >
  export type PackageVersionConnection<$SelectionSet extends $$SelectionSets.PackageVersionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageVersionConnection']
    >
  export type PackageVersionEdge<$SelectionSet extends $$SelectionSets.PackageVersionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageVersionEdge']
    >
  export type PackageVersionStatistics<$SelectionSet extends $$SelectionSets.PackageVersionStatistics> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageVersionStatistics']
    >
  export type PageInfo<$SelectionSet extends $$SelectionSets.PageInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PageInfo']
    >
  export type ParentIssueAddedEvent<$SelectionSet extends $$SelectionSets.ParentIssueAddedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ParentIssueAddedEvent']
    >
  export type ParentIssueRemovedEvent<$SelectionSet extends $$SelectionSets.ParentIssueRemovedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ParentIssueRemovedEvent']
    >
  export type PermissionSource<$SelectionSet extends $$SelectionSets.PermissionSource> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PermissionSource']
    >
  export type PinEnvironmentPayload<$SelectionSet extends $$SelectionSets.PinEnvironmentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinEnvironmentPayload']
    >
  export type PinIssuePayload<$SelectionSet extends $$SelectionSets.PinIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinIssuePayload']
    >
  export type PinnableItemConnection<$SelectionSet extends $$SelectionSets.PinnableItemConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnableItemConnection']
    >
  export type PinnableItemEdge<$SelectionSet extends $$SelectionSets.PinnableItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnableItemEdge']
    >
  export type PinnedDiscussion<$SelectionSet extends $$SelectionSets.PinnedDiscussion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedDiscussion']
    >
  export type PinnedDiscussionConnection<$SelectionSet extends $$SelectionSets.PinnedDiscussionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedDiscussionConnection']
    >
  export type PinnedDiscussionEdge<$SelectionSet extends $$SelectionSets.PinnedDiscussionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedDiscussionEdge']
    >
  export type PinnedEnvironment<$SelectionSet extends $$SelectionSets.PinnedEnvironment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedEnvironment']
    >
  export type PinnedEnvironmentConnection<$SelectionSet extends $$SelectionSets.PinnedEnvironmentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedEnvironmentConnection']
    >
  export type PinnedEnvironmentEdge<$SelectionSet extends $$SelectionSets.PinnedEnvironmentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedEnvironmentEdge']
    >
  export type PinnedEvent<$SelectionSet extends $$SelectionSets.PinnedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedEvent']
    >
  export type PinnedIssue<$SelectionSet extends $$SelectionSets.PinnedIssue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedIssue']
    >
  export type PinnedIssueConnection<$SelectionSet extends $$SelectionSets.PinnedIssueConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedIssueConnection']
    >
  export type PinnedIssueEdge<$SelectionSet extends $$SelectionSets.PinnedIssueEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnedIssueEdge']
    >
  export type PrivateRepositoryForkingDisableAuditEntry<
    $SelectionSet extends $$SelectionSets.PrivateRepositoryForkingDisableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PrivateRepositoryForkingDisableAuditEntry']
  >
  export type PrivateRepositoryForkingEnableAuditEntry<
    $SelectionSet extends $$SelectionSets.PrivateRepositoryForkingEnableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PrivateRepositoryForkingEnableAuditEntry']
  >
  export type ProfileItemShowcase<$SelectionSet extends $$SelectionSets.ProfileItemShowcase> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProfileItemShowcase']
    >
  export type Project<$SelectionSet extends $$SelectionSets.Project> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Project']
    >
  export type ProjectCard<$SelectionSet extends $$SelectionSets.ProjectCard> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectCard']
    >
  export type ProjectCardConnection<$SelectionSet extends $$SelectionSets.ProjectCardConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectCardConnection']
    >
  export type ProjectCardEdge<$SelectionSet extends $$SelectionSets.ProjectCardEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectCardEdge']
    >
  export type ProjectColumn<$SelectionSet extends $$SelectionSets.ProjectColumn> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectColumn']
    >
  export type ProjectColumnConnection<$SelectionSet extends $$SelectionSets.ProjectColumnConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectColumnConnection']
    >
  export type ProjectColumnEdge<$SelectionSet extends $$SelectionSets.ProjectColumnEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectColumnEdge']
    >
  export type ProjectConnection<$SelectionSet extends $$SelectionSets.ProjectConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectConnection']
    >
  export type ProjectEdge<$SelectionSet extends $$SelectionSets.ProjectEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectEdge']
    >
  export type ProjectProgress<$SelectionSet extends $$SelectionSets.ProjectProgress> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectProgress']
    >
  export type ProjectV2<$SelectionSet extends $$SelectionSets.ProjectV2> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2']
    >
  export type ProjectV2ActorConnection<$SelectionSet extends $$SelectionSets.ProjectV2ActorConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ActorConnection']
    >
  export type ProjectV2ActorEdge<$SelectionSet extends $$SelectionSets.ProjectV2ActorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ActorEdge']
    >
  export type ProjectV2Connection<$SelectionSet extends $$SelectionSets.ProjectV2Connection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Connection']
    >
  export type ProjectV2Edge<$SelectionSet extends $$SelectionSets.ProjectV2Edge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Edge']
    >
  export type ProjectV2Field<$SelectionSet extends $$SelectionSets.ProjectV2Field> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Field']
    >
  export type ProjectV2FieldConfigurationConnection<
    $SelectionSet extends $$SelectionSets.ProjectV2FieldConfigurationConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2FieldConfigurationConnection']
  >
  export type ProjectV2FieldConfigurationEdge<$SelectionSet extends $$SelectionSets.ProjectV2FieldConfigurationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2FieldConfigurationEdge']
    >
  export type ProjectV2FieldConnection<$SelectionSet extends $$SelectionSets.ProjectV2FieldConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2FieldConnection']
    >
  export type ProjectV2FieldEdge<$SelectionSet extends $$SelectionSets.ProjectV2FieldEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2FieldEdge']
    >
  export type ProjectV2Item<$SelectionSet extends $$SelectionSets.ProjectV2Item> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Item']
    >
  export type ProjectV2ItemConnection<$SelectionSet extends $$SelectionSets.ProjectV2ItemConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemConnection']
    >
  export type ProjectV2ItemEdge<$SelectionSet extends $$SelectionSets.ProjectV2ItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemEdge']
    >
  export type ProjectV2ItemFieldDateValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldDateValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldDateValue']
    >
  export type ProjectV2ItemFieldIterationValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldIterationValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldIterationValue']
    >
  export type ProjectV2ItemFieldLabelValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldLabelValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldLabelValue']
    >
  export type ProjectV2ItemFieldMilestoneValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldMilestoneValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldMilestoneValue']
    >
  export type ProjectV2ItemFieldNumberValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldNumberValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldNumberValue']
    >
  export type ProjectV2ItemFieldPullRequestValue<
    $SelectionSet extends $$SelectionSets.ProjectV2ItemFieldPullRequestValue,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2ItemFieldPullRequestValue']
  >
  export type ProjectV2ItemFieldRepositoryValue<
    $SelectionSet extends $$SelectionSets.ProjectV2ItemFieldRepositoryValue,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2ItemFieldRepositoryValue']
  >
  export type ProjectV2ItemFieldReviewerValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldReviewerValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldReviewerValue']
    >
  export type ProjectV2ItemFieldSingleSelectValue<
    $SelectionSet extends $$SelectionSets.ProjectV2ItemFieldSingleSelectValue,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2ItemFieldSingleSelectValue']
  >
  export type ProjectV2ItemFieldTextValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldTextValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldTextValue']
    >
  export type ProjectV2ItemFieldUserValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldUserValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldUserValue']
    >
  export type ProjectV2ItemFieldValueConnection<
    $SelectionSet extends $$SelectionSets.ProjectV2ItemFieldValueConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2ItemFieldValueConnection']
  >
  export type ProjectV2ItemFieldValueEdge<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldValueEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldValueEdge']
    >
  export type ProjectV2IterationField<$SelectionSet extends $$SelectionSets.ProjectV2IterationField> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2IterationField']
    >
  export type ProjectV2IterationFieldConfiguration<
    $SelectionSet extends $$SelectionSets.ProjectV2IterationFieldConfiguration,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ProjectV2IterationFieldConfiguration']
  >
  export type ProjectV2IterationFieldIteration<$SelectionSet extends $$SelectionSets.ProjectV2IterationFieldIteration> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2IterationFieldIteration']
    >
  export type ProjectV2SingleSelectField<$SelectionSet extends $$SelectionSets.ProjectV2SingleSelectField> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SingleSelectField']
    >
  export type ProjectV2SingleSelectFieldOption<$SelectionSet extends $$SelectionSets.ProjectV2SingleSelectFieldOption> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SingleSelectFieldOption']
    >
  export type ProjectV2SortBy<$SelectionSet extends $$SelectionSets.ProjectV2SortBy> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortBy']
    >
  export type ProjectV2SortByConnection<$SelectionSet extends $$SelectionSets.ProjectV2SortByConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortByConnection']
    >
  export type ProjectV2SortByEdge<$SelectionSet extends $$SelectionSets.ProjectV2SortByEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortByEdge']
    >
  export type ProjectV2SortByField<$SelectionSet extends $$SelectionSets.ProjectV2SortByField> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortByField']
    >
  export type ProjectV2SortByFieldConnection<$SelectionSet extends $$SelectionSets.ProjectV2SortByFieldConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortByFieldConnection']
    >
  export type ProjectV2SortByFieldEdge<$SelectionSet extends $$SelectionSets.ProjectV2SortByFieldEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2SortByFieldEdge']
    >
  export type ProjectV2StatusUpdate<$SelectionSet extends $$SelectionSets.ProjectV2StatusUpdate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2StatusUpdate']
    >
  export type ProjectV2StatusUpdateConnection<$SelectionSet extends $$SelectionSets.ProjectV2StatusUpdateConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2StatusUpdateConnection']
    >
  export type ProjectV2StatusUpdateEdge<$SelectionSet extends $$SelectionSets.ProjectV2StatusUpdateEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2StatusUpdateEdge']
    >
  export type ProjectV2View<$SelectionSet extends $$SelectionSets.ProjectV2View> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2View']
    >
  export type ProjectV2ViewConnection<$SelectionSet extends $$SelectionSets.ProjectV2ViewConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ViewConnection']
    >
  export type ProjectV2ViewEdge<$SelectionSet extends $$SelectionSets.ProjectV2ViewEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ViewEdge']
    >
  export type ProjectV2Workflow<$SelectionSet extends $$SelectionSets.ProjectV2Workflow> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Workflow']
    >
  export type ProjectV2WorkflowConnection<$SelectionSet extends $$SelectionSets.ProjectV2WorkflowConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2WorkflowConnection']
    >
  export type ProjectV2WorkflowEdge<$SelectionSet extends $$SelectionSets.ProjectV2WorkflowEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2WorkflowEdge']
    >
  export type PropertyTargetDefinition<$SelectionSet extends $$SelectionSets.PropertyTargetDefinition> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PropertyTargetDefinition']
    >
  export type PublicKey<$SelectionSet extends $$SelectionSets.PublicKey> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PublicKey']
    >
  export type PublicKeyConnection<$SelectionSet extends $$SelectionSets.PublicKeyConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PublicKeyConnection']
    >
  export type PublicKeyEdge<$SelectionSet extends $$SelectionSets.PublicKeyEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PublicKeyEdge']
    >
  export type PublishSponsorsTierPayload<$SelectionSet extends $$SelectionSets.PublishSponsorsTierPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PublishSponsorsTierPayload']
    >
  export type PullRequest<$SelectionSet extends $$SelectionSets.PullRequest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequest']
    >
  export type PullRequestChangedFile<$SelectionSet extends $$SelectionSets.PullRequestChangedFile> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestChangedFile']
    >
  export type PullRequestChangedFileConnection<$SelectionSet extends $$SelectionSets.PullRequestChangedFileConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestChangedFileConnection']
    >
  export type PullRequestChangedFileEdge<$SelectionSet extends $$SelectionSets.PullRequestChangedFileEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestChangedFileEdge']
    >
  export type PullRequestCommit<$SelectionSet extends $$SelectionSets.PullRequestCommit> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestCommit']
    >
  export type PullRequestCommitCommentThread<$SelectionSet extends $$SelectionSets.PullRequestCommitCommentThread> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestCommitCommentThread']
    >
  export type PullRequestCommitConnection<$SelectionSet extends $$SelectionSets.PullRequestCommitConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestCommitConnection']
    >
  export type PullRequestCommitEdge<$SelectionSet extends $$SelectionSets.PullRequestCommitEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestCommitEdge']
    >
  export type PullRequestConnection<$SelectionSet extends $$SelectionSets.PullRequestConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestConnection']
    >
  export type PullRequestContributionsByRepository<
    $SelectionSet extends $$SelectionSets.PullRequestContributionsByRepository,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PullRequestContributionsByRepository']
  >
  export type PullRequestEdge<$SelectionSet extends $$SelectionSets.PullRequestEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestEdge']
    >
  export type PullRequestParameters<$SelectionSet extends $$SelectionSets.PullRequestParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestParameters']
    >
  export type PullRequestReview<$SelectionSet extends $$SelectionSets.PullRequestReview> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReview']
    >
  export type PullRequestReviewComment<$SelectionSet extends $$SelectionSets.PullRequestReviewComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewComment']
    >
  export type PullRequestReviewCommentConnection<
    $SelectionSet extends $$SelectionSets.PullRequestReviewCommentConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PullRequestReviewCommentConnection']
  >
  export type PullRequestReviewCommentEdge<$SelectionSet extends $$SelectionSets.PullRequestReviewCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewCommentEdge']
    >
  export type PullRequestReviewConnection<$SelectionSet extends $$SelectionSets.PullRequestReviewConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewConnection']
    >
  export type PullRequestReviewContributionsByRepository<
    $SelectionSet extends $$SelectionSets.PullRequestReviewContributionsByRepository,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PullRequestReviewContributionsByRepository']
  >
  export type PullRequestReviewEdge<$SelectionSet extends $$SelectionSets.PullRequestReviewEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewEdge']
    >
  export type PullRequestReviewThread<$SelectionSet extends $$SelectionSets.PullRequestReviewThread> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewThread']
    >
  export type PullRequestReviewThreadConnection<
    $SelectionSet extends $$SelectionSets.PullRequestReviewThreadConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PullRequestReviewThreadConnection']
  >
  export type PullRequestReviewThreadEdge<$SelectionSet extends $$SelectionSets.PullRequestReviewThreadEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestReviewThreadEdge']
    >
  export type PullRequestRevisionMarker<$SelectionSet extends $$SelectionSets.PullRequestRevisionMarker> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestRevisionMarker']
    >
  export type PullRequestTemplate<$SelectionSet extends $$SelectionSets.PullRequestTemplate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTemplate']
    >
  export type PullRequestThread<$SelectionSet extends $$SelectionSets.PullRequestThread> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestThread']
    >
  export type PullRequestTimelineConnection<$SelectionSet extends $$SelectionSets.PullRequestTimelineConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTimelineConnection']
    >
  export type PullRequestTimelineItemEdge<$SelectionSet extends $$SelectionSets.PullRequestTimelineItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTimelineItemEdge']
    >
  export type PullRequestTimelineItemsConnection<
    $SelectionSet extends $$SelectionSets.PullRequestTimelineItemsConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['PullRequestTimelineItemsConnection']
  >
  export type PullRequestTimelineItemsEdge<$SelectionSet extends $$SelectionSets.PullRequestTimelineItemsEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTimelineItemsEdge']
    >
  export type Push<$SelectionSet extends $$SelectionSets.Push> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Push']
    >
  export type PushAllowance<$SelectionSet extends $$SelectionSets.PushAllowance> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PushAllowance']
    >
  export type PushAllowanceConnection<$SelectionSet extends $$SelectionSets.PushAllowanceConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PushAllowanceConnection']
    >
  export type PushAllowanceEdge<$SelectionSet extends $$SelectionSets.PushAllowanceEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PushAllowanceEdge']
    >
  export type RateLimit<$SelectionSet extends $$SelectionSets.RateLimit> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RateLimit']
    >
  export type ReactingUserConnection<$SelectionSet extends $$SelectionSets.ReactingUserConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactingUserConnection']
    >
  export type ReactingUserEdge<$SelectionSet extends $$SelectionSets.ReactingUserEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactingUserEdge']
    >
  export type Reaction<$SelectionSet extends $$SelectionSets.Reaction> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Reaction']
    >
  export type ReactionConnection<$SelectionSet extends $$SelectionSets.ReactionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactionConnection']
    >
  export type ReactionEdge<$SelectionSet extends $$SelectionSets.ReactionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactionEdge']
    >
  export type ReactionGroup<$SelectionSet extends $$SelectionSets.ReactionGroup> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactionGroup']
    >
  export type ReactorConnection<$SelectionSet extends $$SelectionSets.ReactorConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactorConnection']
    >
  export type ReactorEdge<$SelectionSet extends $$SelectionSets.ReactorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReactorEdge']
    >
  export type ReadyForReviewEvent<$SelectionSet extends $$SelectionSets.ReadyForReviewEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReadyForReviewEvent']
    >
  export type Ref<$SelectionSet extends $$SelectionSets.Ref> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Ref']
  >
  export type RefConnection<$SelectionSet extends $$SelectionSets.RefConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RefConnection']
    >
  export type RefEdge<$SelectionSet extends $$SelectionSets.RefEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RefEdge']
    >
  export type RefNameConditionTarget<$SelectionSet extends $$SelectionSets.RefNameConditionTarget> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RefNameConditionTarget']
    >
  export type RefUpdateRule<$SelectionSet extends $$SelectionSets.RefUpdateRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RefUpdateRule']
    >
  export type ReferencedEvent<$SelectionSet extends $$SelectionSets.ReferencedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReferencedEvent']
    >
  export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload<
    $SelectionSet extends $$SelectionSets.RegenerateEnterpriseIdentityProviderRecoveryCodesPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RegenerateEnterpriseIdentityProviderRecoveryCodesPayload']
  >
  export type RegenerateVerifiableDomainTokenPayload<
    $SelectionSet extends $$SelectionSets.RegenerateVerifiableDomainTokenPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RegenerateVerifiableDomainTokenPayload']
  >
  export type RejectDeploymentsPayload<$SelectionSet extends $$SelectionSets.RejectDeploymentsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RejectDeploymentsPayload']
    >
  export type Release<$SelectionSet extends $$SelectionSets.Release> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Release']
    >
  export type ReleaseAsset<$SelectionSet extends $$SelectionSets.ReleaseAsset> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReleaseAsset']
    >
  export type ReleaseAssetConnection<$SelectionSet extends $$SelectionSets.ReleaseAssetConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReleaseAssetConnection']
    >
  export type ReleaseAssetEdge<$SelectionSet extends $$SelectionSets.ReleaseAssetEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReleaseAssetEdge']
    >
  export type ReleaseConnection<$SelectionSet extends $$SelectionSets.ReleaseConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReleaseConnection']
    >
  export type ReleaseEdge<$SelectionSet extends $$SelectionSets.ReleaseEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReleaseEdge']
    >
  export type RemoveAssigneesFromAssignablePayload<
    $SelectionSet extends $$SelectionSets.RemoveAssigneesFromAssignablePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RemoveAssigneesFromAssignablePayload']
  >
  export type RemoveEnterpriseAdminPayload<$SelectionSet extends $$SelectionSets.RemoveEnterpriseAdminPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveEnterpriseAdminPayload']
    >
  export type RemoveEnterpriseIdentityProviderPayload<
    $SelectionSet extends $$SelectionSets.RemoveEnterpriseIdentityProviderPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RemoveEnterpriseIdentityProviderPayload']
  >
  export type RemoveEnterpriseMemberPayload<$SelectionSet extends $$SelectionSets.RemoveEnterpriseMemberPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveEnterpriseMemberPayload']
    >
  export type RemoveEnterpriseOrganizationPayload<
    $SelectionSet extends $$SelectionSets.RemoveEnterpriseOrganizationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RemoveEnterpriseOrganizationPayload']
  >
  export type RemoveEnterpriseSupportEntitlementPayload<
    $SelectionSet extends $$SelectionSets.RemoveEnterpriseSupportEntitlementPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RemoveEnterpriseSupportEntitlementPayload']
  >
  export type RemoveLabelsFromLabelablePayload<$SelectionSet extends $$SelectionSets.RemoveLabelsFromLabelablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveLabelsFromLabelablePayload']
    >
  export type RemoveOutsideCollaboratorPayload<$SelectionSet extends $$SelectionSets.RemoveOutsideCollaboratorPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveOutsideCollaboratorPayload']
    >
  export type RemoveReactionPayload<$SelectionSet extends $$SelectionSets.RemoveReactionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveReactionPayload']
    >
  export type RemoveStarPayload<$SelectionSet extends $$SelectionSets.RemoveStarPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveStarPayload']
    >
  export type RemoveSubIssuePayload<$SelectionSet extends $$SelectionSets.RemoveSubIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveSubIssuePayload']
    >
  export type RemoveUpvotePayload<$SelectionSet extends $$SelectionSets.RemoveUpvotePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemoveUpvotePayload']
    >
  export type RemovedFromMergeQueueEvent<$SelectionSet extends $$SelectionSets.RemovedFromMergeQueueEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemovedFromMergeQueueEvent']
    >
  export type RemovedFromProjectEvent<$SelectionSet extends $$SelectionSets.RemovedFromProjectEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RemovedFromProjectEvent']
    >
  export type RenamedTitleEvent<$SelectionSet extends $$SelectionSets.RenamedTitleEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RenamedTitleEvent']
    >
  export type ReopenDiscussionPayload<$SelectionSet extends $$SelectionSets.ReopenDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReopenDiscussionPayload']
    >
  export type ReopenIssuePayload<$SelectionSet extends $$SelectionSets.ReopenIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReopenIssuePayload']
    >
  export type ReopenPullRequestPayload<$SelectionSet extends $$SelectionSets.ReopenPullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReopenPullRequestPayload']
    >
  export type ReopenedEvent<$SelectionSet extends $$SelectionSets.ReopenedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReopenedEvent']
    >
  export type ReorderEnvironmentPayload<$SelectionSet extends $$SelectionSets.ReorderEnvironmentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReorderEnvironmentPayload']
    >
  export type RepoAccessAuditEntry<$SelectionSet extends $$SelectionSets.RepoAccessAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoAccessAuditEntry']
    >
  export type RepoAddMemberAuditEntry<$SelectionSet extends $$SelectionSets.RepoAddMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoAddMemberAuditEntry']
    >
  export type RepoAddTopicAuditEntry<$SelectionSet extends $$SelectionSets.RepoAddTopicAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoAddTopicAuditEntry']
    >
  export type RepoArchivedAuditEntry<$SelectionSet extends $$SelectionSets.RepoArchivedAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoArchivedAuditEntry']
    >
  export type RepoChangeMergeSettingAuditEntry<$SelectionSet extends $$SelectionSets.RepoChangeMergeSettingAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoChangeMergeSettingAuditEntry']
    >
  export type RepoConfigDisableAnonymousGitAccessAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigDisableAnonymousGitAccessAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigDisableAnonymousGitAccessAuditEntry']
  >
  export type RepoConfigDisableCollaboratorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigDisableCollaboratorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigDisableCollaboratorsOnlyAuditEntry']
  >
  export type RepoConfigDisableContributorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigDisableContributorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigDisableContributorsOnlyAuditEntry']
  >
  export type RepoConfigDisableSockpuppetDisallowedAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigDisableSockpuppetDisallowedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigDisableSockpuppetDisallowedAuditEntry']
  >
  export type RepoConfigEnableAnonymousGitAccessAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigEnableAnonymousGitAccessAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigEnableAnonymousGitAccessAuditEntry']
  >
  export type RepoConfigEnableCollaboratorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigEnableCollaboratorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigEnableCollaboratorsOnlyAuditEntry']
  >
  export type RepoConfigEnableContributorsOnlyAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigEnableContributorsOnlyAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigEnableContributorsOnlyAuditEntry']
  >
  export type RepoConfigEnableSockpuppetDisallowedAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigEnableSockpuppetDisallowedAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigEnableSockpuppetDisallowedAuditEntry']
  >
  export type RepoConfigLockAnonymousGitAccessAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigLockAnonymousGitAccessAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigLockAnonymousGitAccessAuditEntry']
  >
  export type RepoConfigUnlockAnonymousGitAccessAuditEntry<
    $SelectionSet extends $$SelectionSets.RepoConfigUnlockAnonymousGitAccessAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepoConfigUnlockAnonymousGitAccessAuditEntry']
  >
  export type RepoCreateAuditEntry<$SelectionSet extends $$SelectionSets.RepoCreateAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoCreateAuditEntry']
    >
  export type RepoDestroyAuditEntry<$SelectionSet extends $$SelectionSets.RepoDestroyAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoDestroyAuditEntry']
    >
  export type RepoRemoveMemberAuditEntry<$SelectionSet extends $$SelectionSets.RepoRemoveMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoRemoveMemberAuditEntry']
    >
  export type RepoRemoveTopicAuditEntry<$SelectionSet extends $$SelectionSets.RepoRemoveTopicAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepoRemoveTopicAuditEntry']
    >
  export type Repository<$SelectionSet extends $$SelectionSets.Repository> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Repository']
    >
  export type RepositoryCodeowners<$SelectionSet extends $$SelectionSets.RepositoryCodeowners> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryCodeowners']
    >
  export type RepositoryCodeownersError<$SelectionSet extends $$SelectionSets.RepositoryCodeownersError> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryCodeownersError']
    >
  export type RepositoryCollaboratorConnection<$SelectionSet extends $$SelectionSets.RepositoryCollaboratorConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryCollaboratorConnection']
    >
  export type RepositoryCollaboratorEdge<$SelectionSet extends $$SelectionSets.RepositoryCollaboratorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryCollaboratorEdge']
    >
  export type RepositoryConnection<$SelectionSet extends $$SelectionSets.RepositoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryConnection']
    >
  export type RepositoryContactLink<$SelectionSet extends $$SelectionSets.RepositoryContactLink> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryContactLink']
    >
  export type RepositoryEdge<$SelectionSet extends $$SelectionSets.RepositoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryEdge']
    >
  export type RepositoryIdConditionTarget<$SelectionSet extends $$SelectionSets.RepositoryIdConditionTarget> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryIdConditionTarget']
    >
  export type RepositoryInteractionAbility<$SelectionSet extends $$SelectionSets.RepositoryInteractionAbility> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryInteractionAbility']
    >
  export type RepositoryInvitation<$SelectionSet extends $$SelectionSets.RepositoryInvitation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryInvitation']
    >
  export type RepositoryInvitationConnection<$SelectionSet extends $$SelectionSets.RepositoryInvitationConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryInvitationConnection']
    >
  export type RepositoryInvitationEdge<$SelectionSet extends $$SelectionSets.RepositoryInvitationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryInvitationEdge']
    >
  export type RepositoryMigration<$SelectionSet extends $$SelectionSets.RepositoryMigration> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryMigration']
    >
  export type RepositoryMigrationConnection<$SelectionSet extends $$SelectionSets.RepositoryMigrationConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryMigrationConnection']
    >
  export type RepositoryMigrationEdge<$SelectionSet extends $$SelectionSets.RepositoryMigrationEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryMigrationEdge']
    >
  export type RepositoryNameConditionTarget<$SelectionSet extends $$SelectionSets.RepositoryNameConditionTarget> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryNameConditionTarget']
    >
  export type RepositoryPlanFeatures<$SelectionSet extends $$SelectionSets.RepositoryPlanFeatures> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryPlanFeatures']
    >
  export type RepositoryPropertyConditionTarget<
    $SelectionSet extends $$SelectionSets.RepositoryPropertyConditionTarget,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryPropertyConditionTarget']
  >
  export type RepositoryRule<$SelectionSet extends $$SelectionSets.RepositoryRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRule']
    >
  export type RepositoryRuleConditions<$SelectionSet extends $$SelectionSets.RepositoryRuleConditions> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRuleConditions']
    >
  export type RepositoryRuleConnection<$SelectionSet extends $$SelectionSets.RepositoryRuleConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRuleConnection']
    >
  export type RepositoryRuleEdge<$SelectionSet extends $$SelectionSets.RepositoryRuleEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRuleEdge']
    >
  export type RepositoryRuleset<$SelectionSet extends $$SelectionSets.RepositoryRuleset> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRuleset']
    >
  export type RepositoryRulesetBypassActor<$SelectionSet extends $$SelectionSets.RepositoryRulesetBypassActor> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRulesetBypassActor']
    >
  export type RepositoryRulesetBypassActorConnection<
    $SelectionSet extends $$SelectionSets.RepositoryRulesetBypassActorConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryRulesetBypassActorConnection']
  >
  export type RepositoryRulesetBypassActorEdge<$SelectionSet extends $$SelectionSets.RepositoryRulesetBypassActorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRulesetBypassActorEdge']
    >
  export type RepositoryRulesetConnection<$SelectionSet extends $$SelectionSets.RepositoryRulesetConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRulesetConnection']
    >
  export type RepositoryRulesetEdge<$SelectionSet extends $$SelectionSets.RepositoryRulesetEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryRulesetEdge']
    >
  export type RepositoryTopic<$SelectionSet extends $$SelectionSets.RepositoryTopic> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryTopic']
    >
  export type RepositoryTopicConnection<$SelectionSet extends $$SelectionSets.RepositoryTopicConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryTopicConnection']
    >
  export type RepositoryTopicEdge<$SelectionSet extends $$SelectionSets.RepositoryTopicEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryTopicEdge']
    >
  export type RepositoryVisibilityChangeDisableAuditEntry<
    $SelectionSet extends $$SelectionSets.RepositoryVisibilityChangeDisableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryVisibilityChangeDisableAuditEntry']
  >
  export type RepositoryVisibilityChangeEnableAuditEntry<
    $SelectionSet extends $$SelectionSets.RepositoryVisibilityChangeEnableAuditEntry,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryVisibilityChangeEnableAuditEntry']
  >
  export type RepositoryVulnerabilityAlert<$SelectionSet extends $$SelectionSets.RepositoryVulnerabilityAlert> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryVulnerabilityAlert']
    >
  export type RepositoryVulnerabilityAlertConnection<
    $SelectionSet extends $$SelectionSets.RepositoryVulnerabilityAlertConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryVulnerabilityAlertConnection']
  >
  export type RepositoryVulnerabilityAlertEdge<$SelectionSet extends $$SelectionSets.RepositoryVulnerabilityAlertEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryVulnerabilityAlertEdge']
    >
  export type ReprioritizeSubIssuePayload<$SelectionSet extends $$SelectionSets.ReprioritizeSubIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReprioritizeSubIssuePayload']
    >
  export type RequestReviewsPayload<$SelectionSet extends $$SelectionSets.RequestReviewsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequestReviewsPayload']
    >
  export type RequestedReviewerConnection<$SelectionSet extends $$SelectionSets.RequestedReviewerConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequestedReviewerConnection']
    >
  export type RequestedReviewerEdge<$SelectionSet extends $$SelectionSets.RequestedReviewerEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequestedReviewerEdge']
    >
  export type RequiredDeploymentsParameters<$SelectionSet extends $$SelectionSets.RequiredDeploymentsParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequiredDeploymentsParameters']
    >
  export type RequiredStatusCheckDescription<$SelectionSet extends $$SelectionSets.RequiredStatusCheckDescription> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequiredStatusCheckDescription']
    >
  export type RequiredStatusChecksParameters<$SelectionSet extends $$SelectionSets.RequiredStatusChecksParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequiredStatusChecksParameters']
    >
  export type RerequestCheckSuitePayload<$SelectionSet extends $$SelectionSets.RerequestCheckSuitePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RerequestCheckSuitePayload']
    >
  export type ResolveReviewThreadPayload<$SelectionSet extends $$SelectionSets.ResolveReviewThreadPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ResolveReviewThreadPayload']
    >
  export type RestrictedContribution<$SelectionSet extends $$SelectionSets.RestrictedContribution> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RestrictedContribution']
    >
  export type RetireSponsorsTierPayload<$SelectionSet extends $$SelectionSets.RetireSponsorsTierPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RetireSponsorsTierPayload']
    >
  export type RevertPullRequestPayload<$SelectionSet extends $$SelectionSets.RevertPullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RevertPullRequestPayload']
    >
  export type ReviewDismissalAllowance<$SelectionSet extends $$SelectionSets.ReviewDismissalAllowance> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewDismissalAllowance']
    >
  export type ReviewDismissalAllowanceConnection<
    $SelectionSet extends $$SelectionSets.ReviewDismissalAllowanceConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['ReviewDismissalAllowanceConnection']
  >
  export type ReviewDismissalAllowanceEdge<$SelectionSet extends $$SelectionSets.ReviewDismissalAllowanceEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewDismissalAllowanceEdge']
    >
  export type ReviewDismissedEvent<$SelectionSet extends $$SelectionSets.ReviewDismissedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewDismissedEvent']
    >
  export type ReviewRequest<$SelectionSet extends $$SelectionSets.ReviewRequest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewRequest']
    >
  export type ReviewRequestConnection<$SelectionSet extends $$SelectionSets.ReviewRequestConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewRequestConnection']
    >
  export type ReviewRequestEdge<$SelectionSet extends $$SelectionSets.ReviewRequestEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewRequestEdge']
    >
  export type ReviewRequestRemovedEvent<$SelectionSet extends $$SelectionSets.ReviewRequestRemovedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewRequestRemovedEvent']
    >
  export type ReviewRequestedEvent<$SelectionSet extends $$SelectionSets.ReviewRequestedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewRequestedEvent']
    >
  export type ReviewStatusHovercardContext<$SelectionSet extends $$SelectionSets.ReviewStatusHovercardContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewStatusHovercardContext']
    >
  export type RevokeEnterpriseOrganizationsMigratorRolePayload<
    $SelectionSet extends $$SelectionSets.RevokeEnterpriseOrganizationsMigratorRolePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RevokeEnterpriseOrganizationsMigratorRolePayload']
  >
  export type RevokeMigratorRolePayload<$SelectionSet extends $$SelectionSets.RevokeMigratorRolePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RevokeMigratorRolePayload']
    >
  export type SavedReply<$SelectionSet extends $$SelectionSets.SavedReply> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SavedReply']
    >
  export type SavedReplyConnection<$SelectionSet extends $$SelectionSets.SavedReplyConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SavedReplyConnection']
    >
  export type SavedReplyEdge<$SelectionSet extends $$SelectionSets.SavedReplyEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SavedReplyEdge']
    >
  export type SearchResultItemConnection<$SelectionSet extends $$SelectionSets.SearchResultItemConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SearchResultItemConnection']
    >
  export type SearchResultItemEdge<$SelectionSet extends $$SelectionSets.SearchResultItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SearchResultItemEdge']
    >
  export type SecurityAdvisory<$SelectionSet extends $$SelectionSets.SecurityAdvisory> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisory']
    >
  export type SecurityAdvisoryConnection<$SelectionSet extends $$SelectionSets.SecurityAdvisoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryConnection']
    >
  export type SecurityAdvisoryEdge<$SelectionSet extends $$SelectionSets.SecurityAdvisoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryEdge']
    >
  export type SecurityAdvisoryIdentifier<$SelectionSet extends $$SelectionSets.SecurityAdvisoryIdentifier> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryIdentifier']
    >
  export type SecurityAdvisoryPackage<$SelectionSet extends $$SelectionSets.SecurityAdvisoryPackage> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryPackage']
    >
  export type SecurityAdvisoryPackageVersion<$SelectionSet extends $$SelectionSets.SecurityAdvisoryPackageVersion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryPackageVersion']
    >
  export type SecurityAdvisoryReference<$SelectionSet extends $$SelectionSets.SecurityAdvisoryReference> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityAdvisoryReference']
    >
  export type SecurityVulnerability<$SelectionSet extends $$SelectionSets.SecurityVulnerability> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityVulnerability']
    >
  export type SecurityVulnerabilityConnection<$SelectionSet extends $$SelectionSets.SecurityVulnerabilityConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityVulnerabilityConnection']
    >
  export type SecurityVulnerabilityEdge<$SelectionSet extends $$SelectionSets.SecurityVulnerabilityEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SecurityVulnerabilityEdge']
    >
  export type SetEnterpriseIdentityProviderPayload<
    $SelectionSet extends $$SelectionSets.SetEnterpriseIdentityProviderPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['SetEnterpriseIdentityProviderPayload']
  >
  export type SetOrganizationInteractionLimitPayload<
    $SelectionSet extends $$SelectionSets.SetOrganizationInteractionLimitPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['SetOrganizationInteractionLimitPayload']
  >
  export type SetRepositoryInteractionLimitPayload<
    $SelectionSet extends $$SelectionSets.SetRepositoryInteractionLimitPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['SetRepositoryInteractionLimitPayload']
  >
  export type SetUserInteractionLimitPayload<$SelectionSet extends $$SelectionSets.SetUserInteractionLimitPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SetUserInteractionLimitPayload']
    >
  export type SmimeSignature<$SelectionSet extends $$SelectionSets.SmimeSignature> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SmimeSignature']
    >
  export type SocialAccount<$SelectionSet extends $$SelectionSets.SocialAccount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SocialAccount']
    >
  export type SocialAccountConnection<$SelectionSet extends $$SelectionSets.SocialAccountConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SocialAccountConnection']
    >
  export type SocialAccountEdge<$SelectionSet extends $$SelectionSets.SocialAccountEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SocialAccountEdge']
    >
  export type SponsorAndLifetimeValue<$SelectionSet extends $$SelectionSets.SponsorAndLifetimeValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorAndLifetimeValue']
    >
  export type SponsorAndLifetimeValueConnection<
    $SelectionSet extends $$SelectionSets.SponsorAndLifetimeValueConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['SponsorAndLifetimeValueConnection']
  >
  export type SponsorAndLifetimeValueEdge<$SelectionSet extends $$SelectionSets.SponsorAndLifetimeValueEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorAndLifetimeValueEdge']
    >
  export type SponsorConnection<$SelectionSet extends $$SelectionSets.SponsorConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorConnection']
    >
  export type SponsorEdge<$SelectionSet extends $$SelectionSets.SponsorEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorEdge']
    >
  export type SponsorableItemConnection<$SelectionSet extends $$SelectionSets.SponsorableItemConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorableItemConnection']
    >
  export type SponsorableItemEdge<$SelectionSet extends $$SelectionSets.SponsorableItemEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorableItemEdge']
    >
  export type SponsorsActivity<$SelectionSet extends $$SelectionSets.SponsorsActivity> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsActivity']
    >
  export type SponsorsActivityConnection<$SelectionSet extends $$SelectionSets.SponsorsActivityConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsActivityConnection']
    >
  export type SponsorsActivityEdge<$SelectionSet extends $$SelectionSets.SponsorsActivityEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsActivityEdge']
    >
  export type SponsorsGoal<$SelectionSet extends $$SelectionSets.SponsorsGoal> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsGoal']
    >
  export type SponsorsListing<$SelectionSet extends $$SelectionSets.SponsorsListing> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsListing']
    >
  export type SponsorsListingFeaturedItem<$SelectionSet extends $$SelectionSets.SponsorsListingFeaturedItem> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsListingFeaturedItem']
    >
  export type SponsorsTier<$SelectionSet extends $$SelectionSets.SponsorsTier> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsTier']
    >
  export type SponsorsTierAdminInfo<$SelectionSet extends $$SelectionSets.SponsorsTierAdminInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsTierAdminInfo']
    >
  export type SponsorsTierConnection<$SelectionSet extends $$SelectionSets.SponsorsTierConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsTierConnection']
    >
  export type SponsorsTierEdge<$SelectionSet extends $$SelectionSets.SponsorsTierEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsTierEdge']
    >
  export type Sponsorship<$SelectionSet extends $$SelectionSets.Sponsorship> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Sponsorship']
    >
  export type SponsorshipConnection<$SelectionSet extends $$SelectionSets.SponsorshipConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorshipConnection']
    >
  export type SponsorshipEdge<$SelectionSet extends $$SelectionSets.SponsorshipEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorshipEdge']
    >
  export type SponsorshipNewsletter<$SelectionSet extends $$SelectionSets.SponsorshipNewsletter> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorshipNewsletter']
    >
  export type SponsorshipNewsletterConnection<$SelectionSet extends $$SelectionSets.SponsorshipNewsletterConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorshipNewsletterConnection']
    >
  export type SponsorshipNewsletterEdge<$SelectionSet extends $$SelectionSets.SponsorshipNewsletterEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorshipNewsletterEdge']
    >
  export type SshSignature<$SelectionSet extends $$SelectionSets.SshSignature> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SshSignature']
    >
  export type StargazerConnection<$SelectionSet extends $$SelectionSets.StargazerConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StargazerConnection']
    >
  export type StargazerEdge<$SelectionSet extends $$SelectionSets.StargazerEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StargazerEdge']
    >
  export type StarredRepositoryConnection<$SelectionSet extends $$SelectionSets.StarredRepositoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StarredRepositoryConnection']
    >
  export type StarredRepositoryEdge<$SelectionSet extends $$SelectionSets.StarredRepositoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StarredRepositoryEdge']
    >
  export type StartOrganizationMigrationPayload<
    $SelectionSet extends $$SelectionSets.StartOrganizationMigrationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['StartOrganizationMigrationPayload']
  >
  export type StartRepositoryMigrationPayload<$SelectionSet extends $$SelectionSets.StartRepositoryMigrationPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StartRepositoryMigrationPayload']
    >
  export type Status<$SelectionSet extends $$SelectionSets.Status> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Status']
    >
  export type StatusCheckConfiguration<$SelectionSet extends $$SelectionSets.StatusCheckConfiguration> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusCheckConfiguration']
    >
  export type StatusCheckRollup<$SelectionSet extends $$SelectionSets.StatusCheckRollup> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusCheckRollup']
    >
  export type StatusCheckRollupContextConnection<
    $SelectionSet extends $$SelectionSets.StatusCheckRollupContextConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['StatusCheckRollupContextConnection']
  >
  export type StatusCheckRollupContextEdge<$SelectionSet extends $$SelectionSets.StatusCheckRollupContextEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusCheckRollupContextEdge']
    >
  export type StatusContext<$SelectionSet extends $$SelectionSets.StatusContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusContext']
    >
  export type StatusContextStateCount<$SelectionSet extends $$SelectionSets.StatusContextStateCount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusContextStateCount']
    >
  export type StripeConnectAccount<$SelectionSet extends $$SelectionSets.StripeConnectAccount> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StripeConnectAccount']
    >
  export type SubIssueAddedEvent<$SelectionSet extends $$SelectionSets.SubIssueAddedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubIssueAddedEvent']
    >
  export type SubIssueRemovedEvent<$SelectionSet extends $$SelectionSets.SubIssueRemovedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubIssueRemovedEvent']
    >
  export type SubIssuesSummary<$SelectionSet extends $$SelectionSets.SubIssuesSummary> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubIssuesSummary']
    >
  export type SubmitPullRequestReviewPayload<$SelectionSet extends $$SelectionSets.SubmitPullRequestReviewPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubmitPullRequestReviewPayload']
    >
  export type Submodule<$SelectionSet extends $$SelectionSets.Submodule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Submodule']
    >
  export type SubmoduleConnection<$SelectionSet extends $$SelectionSets.SubmoduleConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubmoduleConnection']
    >
  export type SubmoduleEdge<$SelectionSet extends $$SelectionSets.SubmoduleEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubmoduleEdge']
    >
  export type SubscribedEvent<$SelectionSet extends $$SelectionSets.SubscribedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubscribedEvent']
    >
  export type SuggestedReviewer<$SelectionSet extends $$SelectionSets.SuggestedReviewer> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SuggestedReviewer']
    >
  export type Tag<$SelectionSet extends $$SelectionSets.Tag> = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Tag']
  >
  export type TagNamePatternParameters<$SelectionSet extends $$SelectionSets.TagNamePatternParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TagNamePatternParameters']
    >
  export type Team<$SelectionSet extends $$SelectionSets.Team> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Team']
    >
  export type TeamAddMemberAuditEntry<$SelectionSet extends $$SelectionSets.TeamAddMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamAddMemberAuditEntry']
    >
  export type TeamAddRepositoryAuditEntry<$SelectionSet extends $$SelectionSets.TeamAddRepositoryAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamAddRepositoryAuditEntry']
    >
  export type TeamChangeParentTeamAuditEntry<$SelectionSet extends $$SelectionSets.TeamChangeParentTeamAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamChangeParentTeamAuditEntry']
    >
  export type TeamConnection<$SelectionSet extends $$SelectionSets.TeamConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamConnection']
    >
  export type TeamDiscussion<$SelectionSet extends $$SelectionSets.TeamDiscussion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussion']
    >
  export type TeamDiscussionComment<$SelectionSet extends $$SelectionSets.TeamDiscussionComment> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussionComment']
    >
  export type TeamDiscussionCommentConnection<$SelectionSet extends $$SelectionSets.TeamDiscussionCommentConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussionCommentConnection']
    >
  export type TeamDiscussionCommentEdge<$SelectionSet extends $$SelectionSets.TeamDiscussionCommentEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussionCommentEdge']
    >
  export type TeamDiscussionConnection<$SelectionSet extends $$SelectionSets.TeamDiscussionConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussionConnection']
    >
  export type TeamDiscussionEdge<$SelectionSet extends $$SelectionSets.TeamDiscussionEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamDiscussionEdge']
    >
  export type TeamEdge<$SelectionSet extends $$SelectionSets.TeamEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamEdge']
    >
  export type TeamMemberConnection<$SelectionSet extends $$SelectionSets.TeamMemberConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamMemberConnection']
    >
  export type TeamMemberEdge<$SelectionSet extends $$SelectionSets.TeamMemberEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamMemberEdge']
    >
  export type TeamRemoveMemberAuditEntry<$SelectionSet extends $$SelectionSets.TeamRemoveMemberAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamRemoveMemberAuditEntry']
    >
  export type TeamRemoveRepositoryAuditEntry<$SelectionSet extends $$SelectionSets.TeamRemoveRepositoryAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamRemoveRepositoryAuditEntry']
    >
  export type TeamRepositoryConnection<$SelectionSet extends $$SelectionSets.TeamRepositoryConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamRepositoryConnection']
    >
  export type TeamRepositoryEdge<$SelectionSet extends $$SelectionSets.TeamRepositoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamRepositoryEdge']
    >
  export type TextMatch<$SelectionSet extends $$SelectionSets.TextMatch> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TextMatch']
    >
  export type TextMatchHighlight<$SelectionSet extends $$SelectionSets.TextMatchHighlight> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TextMatchHighlight']
    >
  export type Topic<$SelectionSet extends $$SelectionSets.Topic> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Topic']
    >
  export type TransferEnterpriseOrganizationPayload<
    $SelectionSet extends $$SelectionSets.TransferEnterpriseOrganizationPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['TransferEnterpriseOrganizationPayload']
  >
  export type TransferIssuePayload<$SelectionSet extends $$SelectionSets.TransferIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TransferIssuePayload']
    >
  export type TransferredEvent<$SelectionSet extends $$SelectionSets.TransferredEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TransferredEvent']
    >
  export type Tree<$SelectionSet extends $$SelectionSets.Tree> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Tree']
    >
  export type TreeEntry<$SelectionSet extends $$SelectionSets.TreeEntry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TreeEntry']
    >
  export type UnarchiveProjectV2ItemPayload<$SelectionSet extends $$SelectionSets.UnarchiveProjectV2ItemPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnarchiveProjectV2ItemPayload']
    >
  export type UnarchiveRepositoryPayload<$SelectionSet extends $$SelectionSets.UnarchiveRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnarchiveRepositoryPayload']
    >
  export type UnassignedEvent<$SelectionSet extends $$SelectionSets.UnassignedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnassignedEvent']
    >
  export type UnfollowOrganizationPayload<$SelectionSet extends $$SelectionSets.UnfollowOrganizationPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnfollowOrganizationPayload']
    >
  export type UnfollowUserPayload<$SelectionSet extends $$SelectionSets.UnfollowUserPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnfollowUserPayload']
    >
  export type UnknownSignature<$SelectionSet extends $$SelectionSets.UnknownSignature> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnknownSignature']
    >
  export type UnlabeledEvent<$SelectionSet extends $$SelectionSets.UnlabeledEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnlabeledEvent']
    >
  export type UnlinkProjectV2FromRepositoryPayload<
    $SelectionSet extends $$SelectionSets.UnlinkProjectV2FromRepositoryPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UnlinkProjectV2FromRepositoryPayload']
  >
  export type UnlinkProjectV2FromTeamPayload<$SelectionSet extends $$SelectionSets.UnlinkProjectV2FromTeamPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnlinkProjectV2FromTeamPayload']
    >
  export type UnlinkRepositoryFromProjectPayload<
    $SelectionSet extends $$SelectionSets.UnlinkRepositoryFromProjectPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UnlinkRepositoryFromProjectPayload']
  >
  export type UnlockLockablePayload<$SelectionSet extends $$SelectionSets.UnlockLockablePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnlockLockablePayload']
    >
  export type UnlockedEvent<$SelectionSet extends $$SelectionSets.UnlockedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnlockedEvent']
    >
  export type UnmarkDiscussionCommentAsAnswerPayload<
    $SelectionSet extends $$SelectionSets.UnmarkDiscussionCommentAsAnswerPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UnmarkDiscussionCommentAsAnswerPayload']
  >
  export type UnmarkFileAsViewedPayload<$SelectionSet extends $$SelectionSets.UnmarkFileAsViewedPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnmarkFileAsViewedPayload']
    >
  export type UnmarkIssueAsDuplicatePayload<$SelectionSet extends $$SelectionSets.UnmarkIssueAsDuplicatePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnmarkIssueAsDuplicatePayload']
    >
  export type UnmarkProjectV2AsTemplatePayload<$SelectionSet extends $$SelectionSets.UnmarkProjectV2AsTemplatePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnmarkProjectV2AsTemplatePayload']
    >
  export type UnmarkedAsDuplicateEvent<$SelectionSet extends $$SelectionSets.UnmarkedAsDuplicateEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnmarkedAsDuplicateEvent']
    >
  export type UnminimizeCommentPayload<$SelectionSet extends $$SelectionSets.UnminimizeCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnminimizeCommentPayload']
    >
  export type UnpinIssuePayload<$SelectionSet extends $$SelectionSets.UnpinIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnpinIssuePayload']
    >
  export type UnpinnedEvent<$SelectionSet extends $$SelectionSets.UnpinnedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnpinnedEvent']
    >
  export type UnresolveReviewThreadPayload<$SelectionSet extends $$SelectionSets.UnresolveReviewThreadPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnresolveReviewThreadPayload']
    >
  export type UnsubscribedEvent<$SelectionSet extends $$SelectionSets.UnsubscribedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UnsubscribedEvent']
    >
  export type UpdateBranchProtectionRulePayload<
    $SelectionSet extends $$SelectionSets.UpdateBranchProtectionRulePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateBranchProtectionRulePayload']
  >
  export type UpdateCheckRunPayload<$SelectionSet extends $$SelectionSets.UpdateCheckRunPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateCheckRunPayload']
    >
  export type UpdateCheckSuitePreferencesPayload<
    $SelectionSet extends $$SelectionSets.UpdateCheckSuitePreferencesPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateCheckSuitePreferencesPayload']
  >
  export type UpdateDiscussionCommentPayload<$SelectionSet extends $$SelectionSets.UpdateDiscussionCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateDiscussionCommentPayload']
    >
  export type UpdateDiscussionPayload<$SelectionSet extends $$SelectionSets.UpdateDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateDiscussionPayload']
    >
  export type UpdateEnterpriseAdministratorRolePayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseAdministratorRolePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseAdministratorRolePayload']
  >
  export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload']
  >
  export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseDefaultRepositoryPermissionSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseDefaultRepositoryPermissionSettingPayload']
  >
  export type UpdateEnterpriseDeployKeySettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseDeployKeySettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseDeployKeySettingPayload']
  >
  export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload']
  >
  export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload']
  >
  export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanDeleteIssuesSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanDeleteIssuesSettingPayload']
  >
  export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload']
  >
  export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload']
  >
  export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanMakePurchasesSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanMakePurchasesSettingPayload']
  >
  export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload']
  >
  export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload']
  >
  export type UpdateEnterpriseOrganizationProjectsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseOrganizationProjectsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseOrganizationProjectsSettingPayload']
  >
  export type UpdateEnterpriseOwnerOrganizationRolePayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseOwnerOrganizationRolePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseOwnerOrganizationRolePayload']
  >
  export type UpdateEnterpriseProfilePayload<$SelectionSet extends $$SelectionSets.UpdateEnterpriseProfilePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateEnterpriseProfilePayload']
    >
  export type UpdateEnterpriseRepositoryProjectsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseRepositoryProjectsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseRepositoryProjectsSettingPayload']
  >
  export type UpdateEnterpriseTeamDiscussionsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseTeamDiscussionsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseTeamDiscussionsSettingPayload']
  >
  export type UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload']
  >
  export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload']
  >
  export type UpdateEnvironmentPayload<$SelectionSet extends $$SelectionSets.UpdateEnvironmentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateEnvironmentPayload']
    >
  export type UpdateIpAllowListEnabledSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateIpAllowListEnabledSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateIpAllowListEnabledSettingPayload']
  >
  export type UpdateIpAllowListEntryPayload<$SelectionSet extends $$SelectionSets.UpdateIpAllowListEntryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateIpAllowListEntryPayload']
    >
  export type UpdateIpAllowListForInstalledAppsEnabledSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateIpAllowListForInstalledAppsEnabledSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateIpAllowListForInstalledAppsEnabledSettingPayload']
  >
  export type UpdateIssueCommentPayload<$SelectionSet extends $$SelectionSets.UpdateIssueCommentPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateIssueCommentPayload']
    >
  export type UpdateIssuePayload<$SelectionSet extends $$SelectionSets.UpdateIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateIssuePayload']
    >
  export type UpdateLabelPayload<$SelectionSet extends $$SelectionSets.UpdateLabelPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateLabelPayload']
    >
  export type UpdateNotificationRestrictionSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateNotificationRestrictionSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateNotificationRestrictionSettingPayload']
  >
  export type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload']
  >
  export type UpdateOrganizationWebCommitSignoffSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateOrganizationWebCommitSignoffSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateOrganizationWebCommitSignoffSettingPayload']
  >
  export type UpdateParameters<$SelectionSet extends $$SelectionSets.UpdateParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateParameters']
    >
  export type UpdatePatreonSponsorabilityPayload<
    $SelectionSet extends $$SelectionSets.UpdatePatreonSponsorabilityPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdatePatreonSponsorabilityPayload']
  >
  export type UpdateProjectCardPayload<$SelectionSet extends $$SelectionSets.UpdateProjectCardPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectCardPayload']
    >
  export type UpdateProjectColumnPayload<$SelectionSet extends $$SelectionSets.UpdateProjectColumnPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectColumnPayload']
    >
  export type UpdateProjectPayload<$SelectionSet extends $$SelectionSets.UpdateProjectPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectPayload']
    >
  export type UpdateProjectV2CollaboratorsPayload<
    $SelectionSet extends $$SelectionSets.UpdateProjectV2CollaboratorsPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateProjectV2CollaboratorsPayload']
  >
  export type UpdateProjectV2DraftIssuePayload<$SelectionSet extends $$SelectionSets.UpdateProjectV2DraftIssuePayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectV2DraftIssuePayload']
    >
  export type UpdateProjectV2FieldPayload<$SelectionSet extends $$SelectionSets.UpdateProjectV2FieldPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectV2FieldPayload']
    >
  export type UpdateProjectV2ItemFieldValuePayload<
    $SelectionSet extends $$SelectionSets.UpdateProjectV2ItemFieldValuePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateProjectV2ItemFieldValuePayload']
  >
  export type UpdateProjectV2ItemPositionPayload<
    $SelectionSet extends $$SelectionSets.UpdateProjectV2ItemPositionPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateProjectV2ItemPositionPayload']
  >
  export type UpdateProjectV2Payload<$SelectionSet extends $$SelectionSets.UpdateProjectV2Payload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateProjectV2Payload']
    >
  export type UpdateProjectV2StatusUpdatePayload<
    $SelectionSet extends $$SelectionSets.UpdateProjectV2StatusUpdatePayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateProjectV2StatusUpdatePayload']
  >
  export type UpdatePullRequestBranchPayload<$SelectionSet extends $$SelectionSets.UpdatePullRequestBranchPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdatePullRequestBranchPayload']
    >
  export type UpdatePullRequestPayload<$SelectionSet extends $$SelectionSets.UpdatePullRequestPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdatePullRequestPayload']
    >
  export type UpdatePullRequestReviewCommentPayload<
    $SelectionSet extends $$SelectionSets.UpdatePullRequestReviewCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdatePullRequestReviewCommentPayload']
  >
  export type UpdatePullRequestReviewPayload<$SelectionSet extends $$SelectionSets.UpdatePullRequestReviewPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdatePullRequestReviewPayload']
    >
  export type UpdateRefPayload<$SelectionSet extends $$SelectionSets.UpdateRefPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateRefPayload']
    >
  export type UpdateRefsPayload<$SelectionSet extends $$SelectionSets.UpdateRefsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateRefsPayload']
    >
  export type UpdateRepositoryPayload<$SelectionSet extends $$SelectionSets.UpdateRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateRepositoryPayload']
    >
  export type UpdateRepositoryRulesetPayload<$SelectionSet extends $$SelectionSets.UpdateRepositoryRulesetPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateRepositoryRulesetPayload']
    >
  export type UpdateRepositoryWebCommitSignoffSettingPayload<
    $SelectionSet extends $$SelectionSets.UpdateRepositoryWebCommitSignoffSettingPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateRepositoryWebCommitSignoffSettingPayload']
  >
  export type UpdateSponsorshipPreferencesPayload<
    $SelectionSet extends $$SelectionSets.UpdateSponsorshipPreferencesPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateSponsorshipPreferencesPayload']
  >
  export type UpdateSubscriptionPayload<$SelectionSet extends $$SelectionSets.UpdateSubscriptionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateSubscriptionPayload']
    >
  export type UpdateTeamDiscussionCommentPayload<
    $SelectionSet extends $$SelectionSets.UpdateTeamDiscussionCommentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateTeamDiscussionCommentPayload']
  >
  export type UpdateTeamDiscussionPayload<$SelectionSet extends $$SelectionSets.UpdateTeamDiscussionPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateTeamDiscussionPayload']
    >
  export type UpdateTeamReviewAssignmentPayload<
    $SelectionSet extends $$SelectionSets.UpdateTeamReviewAssignmentPayload,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UpdateTeamReviewAssignmentPayload']
  >
  export type UpdateTeamsRepositoryPayload<$SelectionSet extends $$SelectionSets.UpdateTeamsRepositoryPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateTeamsRepositoryPayload']
    >
  export type UpdateTopicsPayload<$SelectionSet extends $$SelectionSets.UpdateTopicsPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateTopicsPayload']
    >
  export type UpdateUserListPayload<$SelectionSet extends $$SelectionSets.UpdateUserListPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateUserListPayload']
    >
  export type UpdateUserListsForItemPayload<$SelectionSet extends $$SelectionSets.UpdateUserListsForItemPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdateUserListsForItemPayload']
    >
  export type User<$SelectionSet extends $$SelectionSets.User> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['User']
    >
  export type UserBlockedEvent<$SelectionSet extends $$SelectionSets.UserBlockedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserBlockedEvent']
    >
  export type UserConnection<$SelectionSet extends $$SelectionSets.UserConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserConnection']
    >
  export type UserContentEdit<$SelectionSet extends $$SelectionSets.UserContentEdit> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserContentEdit']
    >
  export type UserContentEditConnection<$SelectionSet extends $$SelectionSets.UserContentEditConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserContentEditConnection']
    >
  export type UserContentEditEdge<$SelectionSet extends $$SelectionSets.UserContentEditEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserContentEditEdge']
    >
  export type UserEdge<$SelectionSet extends $$SelectionSets.UserEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserEdge']
    >
  export type UserEmailMetadata<$SelectionSet extends $$SelectionSets.UserEmailMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserEmailMetadata']
    >
  export type UserList<$SelectionSet extends $$SelectionSets.UserList> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserList']
    >
  export type UserListConnection<$SelectionSet extends $$SelectionSets.UserListConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListConnection']
    >
  export type UserListEdge<$SelectionSet extends $$SelectionSets.UserListEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListEdge']
    >
  export type UserListItemsConnection<$SelectionSet extends $$SelectionSets.UserListItemsConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListItemsConnection']
    >
  export type UserListItemsEdge<$SelectionSet extends $$SelectionSets.UserListItemsEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListItemsEdge']
    >
  export type UserListSuggestion<$SelectionSet extends $$SelectionSets.UserListSuggestion> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListSuggestion']
    >
  export type UserNamespaceRepository<$SelectionSet extends $$SelectionSets.UserNamespaceRepository> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserNamespaceRepository']
    >
  export type UserNamespaceRepositoryConnection<
    $SelectionSet extends $$SelectionSets.UserNamespaceRepositoryConnection,
  > = $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['UserNamespaceRepositoryConnection']
  >
  export type UserNamespaceRepositoryEdge<$SelectionSet extends $$SelectionSets.UserNamespaceRepositoryEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserNamespaceRepositoryEdge']
    >
  export type UserStatus<$SelectionSet extends $$SelectionSets.UserStatus> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserStatus']
    >
  export type UserStatusConnection<$SelectionSet extends $$SelectionSets.UserStatusConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserStatusConnection']
    >
  export type UserStatusEdge<$SelectionSet extends $$SelectionSets.UserStatusEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserStatusEdge']
    >
  export type VerifiableDomain<$SelectionSet extends $$SelectionSets.VerifiableDomain> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['VerifiableDomain']
    >
  export type VerifiableDomainConnection<$SelectionSet extends $$SelectionSets.VerifiableDomainConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['VerifiableDomainConnection']
    >
  export type VerifiableDomainEdge<$SelectionSet extends $$SelectionSets.VerifiableDomainEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['VerifiableDomainEdge']
    >
  export type VerifyVerifiableDomainPayload<$SelectionSet extends $$SelectionSets.VerifyVerifiableDomainPayload> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['VerifyVerifiableDomainPayload']
    >
  export type ViewerHovercardContext<$SelectionSet extends $$SelectionSets.ViewerHovercardContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ViewerHovercardContext']
    >
  export type Workflow<$SelectionSet extends $$SelectionSets.Workflow> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Workflow']
    >
  export type WorkflowFileReference<$SelectionSet extends $$SelectionSets.WorkflowFileReference> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowFileReference']
    >
  export type WorkflowRun<$SelectionSet extends $$SelectionSets.WorkflowRun> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowRun']
    >
  export type WorkflowRunConnection<$SelectionSet extends $$SelectionSets.WorkflowRunConnection> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowRunConnection']
    >
  export type WorkflowRunEdge<$SelectionSet extends $$SelectionSets.WorkflowRunEdge> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowRunEdge']
    >
  export type WorkflowRunFile<$SelectionSet extends $$SelectionSets.WorkflowRunFile> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowRunFile']
    >
  export type WorkflowsParameters<$SelectionSet extends $$SelectionSets.WorkflowsParameters> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['WorkflowsParameters']
    >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type Assignee<$SelectionSet extends $$SelectionSets.Assignee> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Assignee']
  >
  export type AuditEntryActor<$SelectionSet extends $$SelectionSets.AuditEntryActor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AuditEntryActor']
    >
  export type BranchActorAllowanceActor<$SelectionSet extends $$SelectionSets.BranchActorAllowanceActor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BranchActorAllowanceActor']
    >
  export type BypassActor<$SelectionSet extends $$SelectionSets.BypassActor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BypassActor']
    >
  export type Claimable<$SelectionSet extends $$SelectionSets.Claimable> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Claimable']
    >
  export type Closer<$SelectionSet extends $$SelectionSets.Closer> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Closer']
  >
  export type CreatedIssueOrRestrictedContribution<
    $SelectionSet extends $$SelectionSets.CreatedIssueOrRestrictedContribution,
  > = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedIssueOrRestrictedContribution']
  >
  export type CreatedPullRequestOrRestrictedContribution<
    $SelectionSet extends $$SelectionSets.CreatedPullRequestOrRestrictedContribution,
  > = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedPullRequestOrRestrictedContribution']
  >
  export type CreatedRepositoryOrRestrictedContribution<
    $SelectionSet extends $$SelectionSets.CreatedRepositoryOrRestrictedContribution,
  > = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['CreatedRepositoryOrRestrictedContribution']
  >
  export type DeploymentReviewer<$SelectionSet extends $$SelectionSets.DeploymentReviewer> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeploymentReviewer']
    >
  export type EnterpriseMember<$SelectionSet extends $$SelectionSets.EnterpriseMember> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseMember']
    >
  export type IpAllowListOwner<$SelectionSet extends $$SelectionSets.IpAllowListOwner> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IpAllowListOwner']
    >
  export type IssueOrPullRequest<$SelectionSet extends $$SelectionSets.IssueOrPullRequest> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueOrPullRequest']
    >
  export type IssueTimelineItem<$SelectionSet extends $$SelectionSets.IssueTimelineItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineItem']
    >
  export type IssueTimelineItems<$SelectionSet extends $$SelectionSets.IssueTimelineItems> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IssueTimelineItems']
    >
  export type MilestoneItem<$SelectionSet extends $$SelectionSets.MilestoneItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MilestoneItem']
    >
  export type OrgRestoreMemberAuditEntryMembership<
    $SelectionSet extends $$SelectionSets.OrgRestoreMemberAuditEntryMembership,
  > = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['OrgRestoreMemberAuditEntryMembership']
  >
  export type OrganizationAuditEntry<$SelectionSet extends $$SelectionSets.OrganizationAuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationAuditEntry']
    >
  export type OrganizationOrUser<$SelectionSet extends $$SelectionSets.OrganizationOrUser> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationOrUser']
    >
  export type PermissionGranter<$SelectionSet extends $$SelectionSets.PermissionGranter> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PermissionGranter']
    >
  export type PinnableItem<$SelectionSet extends $$SelectionSets.PinnableItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PinnableItem']
    >
  export type ProjectCardItem<$SelectionSet extends $$SelectionSets.ProjectCardItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectCardItem']
    >
  export type ProjectV2Actor<$SelectionSet extends $$SelectionSets.ProjectV2Actor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Actor']
    >
  export type ProjectV2FieldConfiguration<$SelectionSet extends $$SelectionSets.ProjectV2FieldConfiguration> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2FieldConfiguration']
    >
  export type ProjectV2ItemContent<$SelectionSet extends $$SelectionSets.ProjectV2ItemContent> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemContent']
    >
  export type ProjectV2ItemFieldValue<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldValue> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldValue']
    >
  export type PullRequestTimelineItem<$SelectionSet extends $$SelectionSets.PullRequestTimelineItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTimelineItem']
    >
  export type PullRequestTimelineItems<$SelectionSet extends $$SelectionSets.PullRequestTimelineItems> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PullRequestTimelineItems']
    >
  export type PushAllowanceActor<$SelectionSet extends $$SelectionSets.PushAllowanceActor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PushAllowanceActor']
    >
  export type Reactor<$SelectionSet extends $$SelectionSets.Reactor> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Reactor']
  >
  export type ReferencedSubject<$SelectionSet extends $$SelectionSets.ReferencedSubject> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReferencedSubject']
    >
  export type RenamedTitleSubject<$SelectionSet extends $$SelectionSets.RenamedTitleSubject> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RenamedTitleSubject']
    >
  export type RequestedReviewer<$SelectionSet extends $$SelectionSets.RequestedReviewer> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequestedReviewer']
    >
  export type ReviewDismissalAllowanceActor<$SelectionSet extends $$SelectionSets.ReviewDismissalAllowanceActor> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReviewDismissalAllowanceActor']
    >
  export type RuleParameters<$SelectionSet extends $$SelectionSets.RuleParameters> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RuleParameters']
    >
  export type RuleSource<$SelectionSet extends $$SelectionSets.RuleSource> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RuleSource']
    >
  export type SearchResultItem<$SelectionSet extends $$SelectionSets.SearchResultItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SearchResultItem']
    >
  export type Sponsor<$SelectionSet extends $$SelectionSets.Sponsor> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Sponsor']
  >
  export type SponsorableItem<$SelectionSet extends $$SelectionSets.SponsorableItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorableItem']
    >
  export type SponsorsListingFeatureableItem<$SelectionSet extends $$SelectionSets.SponsorsListingFeatureableItem> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SponsorsListingFeatureableItem']
    >
  export type StatusCheckRollupContext<$SelectionSet extends $$SelectionSets.StatusCheckRollupContext> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StatusCheckRollupContext']
    >
  export type UserListItems<$SelectionSet extends $$SelectionSets.UserListItems> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListItems']
    >
  export type VerifiableDomainOwner<$SelectionSet extends $$SelectionSets.VerifiableDomainOwner> =
    $$Utilities.DocumentBuilder.InferResult.Union<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['VerifiableDomainOwner']
    >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type Actor<$SelectionSet extends $$SelectionSets.Actor> = $$Utilities.DocumentBuilder.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Actor']
  >
  export type AnnouncementBannerI<$SelectionSet extends $$SelectionSets.AnnouncementBannerI> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AnnouncementBannerI']
    >
  export type Assignable<$SelectionSet extends $$SelectionSets.Assignable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Assignable']
    >
  export type AuditEntry<$SelectionSet extends $$SelectionSets.AuditEntry> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AuditEntry']
    >
  export type Closable<$SelectionSet extends $$SelectionSets.Closable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Closable']
    >
  export type Comment<$SelectionSet extends $$SelectionSets.Comment> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Comment']
    >
  export type Contribution<$SelectionSet extends $$SelectionSets.Contribution> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Contribution']
    >
  export type Deletable<$SelectionSet extends $$SelectionSets.Deletable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Deletable']
    >
  export type EnterpriseAuditEntryData<$SelectionSet extends $$SelectionSets.EnterpriseAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EnterpriseAuditEntryData']
    >
  export type GitObject<$SelectionSet extends $$SelectionSets.GitObject> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitObject']
    >
  export type GitSignature<$SelectionSet extends $$SelectionSets.GitSignature> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GitSignature']
    >
  export type HovercardContext<$SelectionSet extends $$SelectionSets.HovercardContext> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['HovercardContext']
    >
  export type Labelable<$SelectionSet extends $$SelectionSets.Labelable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Labelable']
    >
  export type Lockable<$SelectionSet extends $$SelectionSets.Lockable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Lockable']
    >
  export type MemberStatusable<$SelectionSet extends $$SelectionSets.MemberStatusable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MemberStatusable']
    >
  export type Migration<$SelectionSet extends $$SelectionSets.Migration> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Migration']
    >
  export type Minimizable<$SelectionSet extends $$SelectionSets.Minimizable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Minimizable']
    >
  export type Node<$SelectionSet extends $$SelectionSets.Node> = $$Utilities.DocumentBuilder.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Node']
  >
  export type OauthApplicationAuditEntryData<$SelectionSet extends $$SelectionSets.OauthApplicationAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OauthApplicationAuditEntryData']
    >
  export type OrganizationAuditEntryData<$SelectionSet extends $$SelectionSets.OrganizationAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['OrganizationAuditEntryData']
    >
  export type PackageOwner<$SelectionSet extends $$SelectionSets.PackageOwner> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['PackageOwner']
    >
  export type ProfileOwner<$SelectionSet extends $$SelectionSets.ProfileOwner> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProfileOwner']
    >
  export type ProjectOwner<$SelectionSet extends $$SelectionSets.ProjectOwner> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectOwner']
    >
  export type ProjectV2FieldCommon<$SelectionSet extends $$SelectionSets.ProjectV2FieldCommon> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2FieldCommon']
    >
  export type ProjectV2ItemFieldValueCommon<$SelectionSet extends $$SelectionSets.ProjectV2ItemFieldValueCommon> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2ItemFieldValueCommon']
    >
  export type ProjectV2Owner<$SelectionSet extends $$SelectionSets.ProjectV2Owner> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Owner']
    >
  export type ProjectV2Recent<$SelectionSet extends $$SelectionSets.ProjectV2Recent> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ProjectV2Recent']
    >
  export type Reactable<$SelectionSet extends $$SelectionSets.Reactable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Reactable']
    >
  export type RepositoryAuditEntryData<$SelectionSet extends $$SelectionSets.RepositoryAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryAuditEntryData']
    >
  export type RepositoryDiscussionAuthor<$SelectionSet extends $$SelectionSets.RepositoryDiscussionAuthor> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryDiscussionAuthor']
    >
  export type RepositoryDiscussionCommentAuthor<
    $SelectionSet extends $$SelectionSets.RepositoryDiscussionCommentAuthor,
  > = $$Utilities.DocumentBuilder.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['RepositoryDiscussionCommentAuthor']
  >
  export type RepositoryInfo<$SelectionSet extends $$SelectionSets.RepositoryInfo> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryInfo']
    >
  export type RepositoryNode<$SelectionSet extends $$SelectionSets.RepositoryNode> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryNode']
    >
  export type RepositoryOwner<$SelectionSet extends $$SelectionSets.RepositoryOwner> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RepositoryOwner']
    >
  export type RequirableByPullRequest<$SelectionSet extends $$SelectionSets.RequirableByPullRequest> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['RequirableByPullRequest']
    >
  export type Sponsorable<$SelectionSet extends $$SelectionSets.Sponsorable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Sponsorable']
    >
  export type Starrable<$SelectionSet extends $$SelectionSets.Starrable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Starrable']
    >
  export type Subscribable<$SelectionSet extends $$SelectionSets.Subscribable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Subscribable']
    >
  export type SubscribableThread<$SelectionSet extends $$SelectionSets.SubscribableThread> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SubscribableThread']
    >
  export type TeamAuditEntryData<$SelectionSet extends $$SelectionSets.TeamAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TeamAuditEntryData']
    >
  export type TopicAuditEntryData<$SelectionSet extends $$SelectionSets.TopicAuditEntryData> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TopicAuditEntryData']
    >
  export type UniformResourceLocatable<$SelectionSet extends $$SelectionSets.UniformResourceLocatable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UniformResourceLocatable']
    >
  export type Updatable<$SelectionSet extends $$SelectionSets.Updatable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Updatable']
    >
  export type UpdatableComment<$SelectionSet extends $$SelectionSets.UpdatableComment> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UpdatableComment']
    >
  export type Votable<$SelectionSet extends $$SelectionSets.Votable> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Votable']
    >
}

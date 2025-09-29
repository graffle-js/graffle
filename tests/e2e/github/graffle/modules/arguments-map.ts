import type * as $$Utilities from '../../../../../src/exports/utilities-for-generated.js'
import type * as TypeInputsIndex from './type-inputs-index.js'

//
//
//
//
//
//
// ==================================================================================================
//                                            InputObject
// ==================================================================================================
//
//
//
//
//
//

export type AbortQueuedMigrationsInput = {
  readonly n: 'AbortQueuedMigrationsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AbortRepositoryMigrationInput = {
  readonly n: 'AbortRepositoryMigrationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly migrationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AcceptEnterpriseAdministratorInvitationInput = {
  readonly n: 'AcceptEnterpriseAdministratorInvitationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly invitationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AcceptEnterpriseMemberInvitationInput = {
  readonly n: 'AcceptEnterpriseMemberInvitationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly invitationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AcceptTopicSuggestionInput = {
  readonly n: 'AcceptTopicSuggestionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type AccessUserNamespaceRepositoryInput = {
  readonly n: 'AccessUserNamespaceRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddAssigneesToAssignableInput = {
  readonly n: 'AddAssigneesToAssignableInput'
  readonly f: {
    readonly assignableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type AddCommentInput = {
  readonly n: 'AddCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddDiscussionCommentInput = {
  readonly n: 'AddDiscussionCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly discussionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly replyToId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type AddDiscussionPollVoteInput = {
  readonly n: 'AddDiscussionPollVoteInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pollOptionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddEnterpriseOrganizationMemberInput = {
  readonly n: 'AddEnterpriseOrganizationMemberInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly role: {
      readonly nt: 'OrganizationMemberRole'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.OrganizationMemberRole | undefined
    }
    readonly userIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
  }
}

export type AddEnterpriseSupportEntitlementInput = {
  readonly n: 'AddEnterpriseSupportEntitlementInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type AddLabelsToLabelableInput = {
  readonly n: 'AddLabelsToLabelableInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labelIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly labelableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddProjectCardInput = {
  readonly n: 'AddProjectCardInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly contentId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly note: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectColumnId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddProjectColumnInput = {
  readonly n: 'AddProjectColumnInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddProjectV2DraftIssueInput = {
  readonly n: 'AddProjectV2DraftIssueInput'
  readonly f: {
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type AddProjectV2ItemByIdInput = {
  readonly n: 'AddProjectV2ItemByIdInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly contentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddPullRequestReviewCommentInput = {
  readonly n: 'AddPullRequestReviewCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitOID: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly inReplyTo: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly position: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type AddPullRequestReviewInput = {
  readonly n: 'AddPullRequestReviewInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly comments: {
      readonly nt: 'DraftPullRequestReviewComment'
      readonly it: readonly [0, [0]]
      readonly $t: readonly TypeInputsIndex.DraftPullRequestReviewComment[] | undefined
    }
    readonly commitOID: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly event: {
      readonly nt: 'PullRequestReviewEvent'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestReviewEvent | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly threads: {
      readonly nt: 'DraftPullRequestReviewThread'
      readonly it: readonly [0, [0]]
      readonly $t: readonly TypeInputsIndex.DraftPullRequestReviewThread[] | undefined
    }
  }
}

export type AddPullRequestReviewThreadInput = {
  readonly n: 'AddPullRequestReviewThreadInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly line: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly side: {
      readonly nt: 'DiffSide'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DiffSide | undefined
    }
    readonly startLine: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly startSide: {
      readonly nt: 'DiffSide'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DiffSide | undefined
    }
    readonly subjectType: {
      readonly nt: 'PullRequestReviewThreadSubjectType'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestReviewThreadSubjectType | undefined
    }
  }
}

export type AddPullRequestReviewThreadReplyInput = {
  readonly n: 'AddPullRequestReviewThreadReplyInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly pullRequestReviewThreadId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddReactionInput = {
  readonly n: 'AddReactionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly content: {
      readonly nt: 'ReactionContent'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ReactionContent
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddStarInput = {
  readonly n: 'AddStarInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly starrableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddSubIssueInput = {
  readonly n: 'AddSubIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly replaceParent: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly subIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly subIssueUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type AddUpvoteInput = {
  readonly n: 'AddUpvoteInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AddVerifiableDomainInput = {
  readonly n: 'AddVerifiableDomainInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly domain: {
      readonly nt: 'URI'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.URI
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ApproveDeploymentsInput = {
  readonly n: 'ApproveDeploymentsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly comment: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly workflowRunId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ApproveVerifiableDomainInput = {
  readonly n: 'ApproveVerifiableDomainInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ArchiveProjectV2ItemInput = {
  readonly n: 'ArchiveProjectV2ItemInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ArchiveRepositoryInput = {
  readonly n: 'ArchiveRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type AuditLogOrder = {
  readonly n: 'AuditLogOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.OrderDirection | undefined
    }
    readonly field: {
      readonly nt: 'AuditLogOrderField'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.AuditLogOrderField | undefined
    }
  }
}

export type BranchNamePatternParametersInput = {
  readonly n: 'BranchNamePatternParametersInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly negate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly operator: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type BulkSponsorship = {
  readonly n: 'BulkSponsorship'
  readonly f: {
    readonly amount: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly sponsorableId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CancelEnterpriseAdminInvitationInput = {
  readonly n: 'CancelEnterpriseAdminInvitationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly invitationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CancelEnterpriseMemberInvitationInput = {
  readonly n: 'CancelEnterpriseMemberInvitationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly invitationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CancelSponsorshipInput = {
  readonly n: 'CancelSponsorshipInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sponsorId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sponsorableId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type ChangeUserStatusInput = {
  readonly n: 'ChangeUserStatusInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly emoji: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expiresAt: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly limitedAvailability: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly message: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type CheckAnnotationData = {
  readonly n: 'CheckAnnotationData'
  readonly f: {
    readonly annotationLevel: {
      readonly nt: 'CheckAnnotationLevel'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.CheckAnnotationLevel
    }
    readonly location: {
      readonly nt: 'CheckAnnotationRange'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.CheckAnnotationRange
    }
    readonly message: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly rawDetails: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CheckAnnotationRange = {
  readonly n: 'CheckAnnotationRange'
  readonly f: {
    readonly endColumn: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly endLine: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly startColumn: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly startLine: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type CheckRunAction = {
  readonly n: 'CheckRunAction'
  readonly f: {
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly identifier: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly label: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CheckRunFilter = {
  readonly n: 'CheckRunFilter'
  readonly f: {
    readonly appId: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly checkName: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly checkType: {
      readonly nt: 'CheckRunType'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckRunType | undefined
    }
    readonly conclusions: {
      readonly nt: 'CheckConclusionState'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckConclusionState[] | undefined
    }
    readonly status: {
      readonly nt: 'CheckStatusState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckStatusState | undefined
    }
    readonly statuses: {
      readonly nt: 'CheckStatusState'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckStatusState[] | undefined
    }
  }
}

export type CheckRunOutput = {
  readonly n: 'CheckRunOutput'
  readonly f: {
    readonly annotations: {
      readonly nt: 'CheckAnnotationData'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckAnnotationData[] | undefined
    }
    readonly images: {
      readonly nt: 'CheckRunOutputImage'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckRunOutputImage[] | undefined
    }
    readonly summary: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly text: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CheckRunOutputImage = {
  readonly n: 'CheckRunOutputImage'
  readonly f: {
    readonly alt: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly caption: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly imageUrl: {
      readonly nt: 'URI'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.URI
    }
  }
}

export type CheckSuiteAutoTriggerPreference = {
  readonly n: 'CheckSuiteAutoTriggerPreference'
  readonly f: {
    readonly appId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly setting: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type CheckSuiteFilter = {
  readonly n: 'CheckSuiteFilter'
  readonly f: {
    readonly appId: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly checkName: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type ClearLabelsFromLabelableInput = {
  readonly n: 'ClearLabelsFromLabelableInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labelableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ClearProjectV2ItemFieldValueInput = {
  readonly n: 'ClearProjectV2ItemFieldValueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fieldId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CloneProjectInput = {
  readonly n: 'CloneProjectInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly includeWorkflows: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly public: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly sourceId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly targetOwnerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CloneTemplateRepositoryInput = {
  readonly n: 'CloneTemplateRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly includeAllBranches: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly visibility: {
      readonly nt: 'RepositoryVisibility'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryVisibility
    }
  }
}

export type CloseDiscussionInput = {
  readonly n: 'CloseDiscussionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly discussionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly reason: {
      readonly nt: 'DiscussionCloseReason'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DiscussionCloseReason | undefined
    }
  }
}

export type CloseIssueInput = {
  readonly n: 'CloseIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly duplicateIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly stateReason: {
      readonly nt: 'IssueClosedStateReason'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.IssueClosedStateReason | undefined
    }
  }
}

export type ClosePullRequestInput = {
  readonly n: 'ClosePullRequestInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CodeScanningParametersInput = {
  readonly n: 'CodeScanningParametersInput'
  readonly f: {
    readonly codeScanningTools: {
      readonly nt: 'CodeScanningToolInput'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.CodeScanningToolInput[]
    }
  }
}

export type CodeScanningToolInput = {
  readonly n: 'CodeScanningToolInput'
  readonly f: {
    readonly alertsThreshold: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly securityAlertsThreshold: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly tool: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CommitAuthor = {
  readonly n: 'CommitAuthor'
  readonly f: {
    readonly emails: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type CommitAuthorEmailPatternParametersInput = {
  readonly n: 'CommitAuthorEmailPatternParametersInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly negate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly operator: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CommitContributionOrder = {
  readonly n: 'CommitContributionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'CommitContributionOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.CommitContributionOrderField
    }
  }
}

export type CommitMessage = {
  readonly n: 'CommitMessage'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly headline: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CommitMessagePatternParametersInput = {
  readonly n: 'CommitMessagePatternParametersInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly negate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly operator: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CommittableBranch = {
  readonly n: 'CommittableBranch'
  readonly f: {
    readonly branchName: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly repositoryNameWithOwner: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CommitterEmailPatternParametersInput = {
  readonly n: 'CommitterEmailPatternParametersInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly negate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly operator: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type ContributionOrder = {
  readonly n: 'ContributionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
  }
}

export type ConvertProjectCardNoteToIssueInput = {
  readonly n: 'ConvertProjectCardNoteToIssueInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectCardId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type ConvertProjectV2DraftIssueItemToIssueInput = {
  readonly n: 'ConvertProjectV2DraftIssueItemToIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ConvertPullRequestToDraftInput = {
  readonly n: 'ConvertPullRequestToDraftInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CopyProjectV2Input = {
  readonly n: 'CopyProjectV2Input'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly includeDraftIssues: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateAttributionInvitationInput = {
  readonly n: 'CreateAttributionInvitationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly sourceId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly targetId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateBranchProtectionRuleInput = {
  readonly n: 'CreateBranchProtectionRuleInput'
  readonly f: {
    readonly allowsDeletions: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly allowsForcePushes: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly blocksCreations: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly bypassForcePushActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly bypassPullRequestActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly dismissesStaleReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly isAdminEnforced: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly lockAllowsFetchAndMerge: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly lockBranch: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pushActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly requireLastPushApproval: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiredApprovingReviewCount: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly requiredDeploymentEnvironments: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly requiredStatusCheckContexts: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly requiredStatusChecks: {
      readonly nt: 'RequiredStatusCheckInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RequiredStatusCheckInput[] | undefined
    }
    readonly requiresApprovingReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresCodeOwnerReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresCommitSignatures: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresConversationResolution: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresDeployments: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresLinearHistory: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresStatusChecks: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresStrictStatusChecks: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly restrictsPushes: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly restrictsReviewDismissals: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly reviewDismissalActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
  }
}

export type CreateCheckRunInput = {
  readonly n: 'CreateCheckRunInput'
  readonly f: {
    readonly actions: {
      readonly nt: 'CheckRunAction'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckRunAction[] | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly completedAt: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly conclusion: {
      readonly nt: 'CheckConclusionState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckConclusionState | undefined
    }
    readonly detailsUrl: {
      readonly nt: 'URI'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.URI | undefined
    }
    readonly externalId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly headSha: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly output: {
      readonly nt: 'CheckRunOutput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckRunOutput | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly startedAt: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly status: {
      readonly nt: 'RequestableCheckStatusState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RequestableCheckStatusState | undefined
    }
  }
}

export type CreateCheckSuiteInput = {
  readonly n: 'CreateCheckSuiteInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly headSha: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateCommitOnBranchInput = {
  readonly n: 'CreateCommitOnBranchInput'
  readonly f: {
    readonly branch: {
      readonly nt: 'CommittableBranch'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.CommittableBranch
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expectedHeadOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly fileChanges: {
      readonly nt: 'FileChanges'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.FileChanges | undefined
    }
    readonly message: {
      readonly nt: 'CommitMessage'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.CommitMessage
    }
  }
}

export type CreateDeploymentInput = {
  readonly n: 'CreateDeploymentInput'
  readonly f: {
    readonly autoMerge: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environment: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly payload: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly refId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly requiredContexts: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly task: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CreateDeploymentStatusInput = {
  readonly n: 'CreateDeploymentStatusInput'
  readonly f: {
    readonly autoInactive: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly deploymentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environment: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly logUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly state: {
      readonly nt: 'DeploymentStatusState'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.DeploymentStatusState
    }
  }
}

export type CreateDiscussionInput = {
  readonly n: 'CreateDiscussionInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly categoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateEnterpriseOrganizationInput = {
  readonly n: 'CreateEnterpriseOrganizationInput'
  readonly f: {
    readonly adminLogins: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
    readonly billingEmail: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly profileName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateEnvironmentInput = {
  readonly n: 'CreateEnvironmentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateIpAllowListEntryInput = {
  readonly n: 'CreateIpAllowListEntryInput'
  readonly f: {
    readonly allowListValue: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly isActive: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateIssueInput = {
  readonly n: 'CreateIssueInput'
  readonly f: {
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueTemplate: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labelIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly milestoneId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly parentIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly projectIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateLabelInput = {
  readonly n: 'CreateLabelInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly color: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateLinkedBranchInput = {
  readonly n: 'CreateLinkedBranchInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly oid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type CreateMigrationSourceInput = {
  readonly n: 'CreateMigrationSourceInput'
  readonly f: {
    readonly accessToken: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly githubPat: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly type: {
      readonly nt: 'MigrationSourceType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.MigrationSourceType
    }
    readonly url: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CreateProjectInput = {
  readonly n: 'CreateProjectInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly template: {
      readonly nt: 'ProjectTemplate'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ProjectTemplate | undefined
    }
  }
}

export type CreateProjectV2FieldInput = {
  readonly n: 'CreateProjectV2FieldInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly dataType: {
      readonly nt: 'ProjectV2CustomFieldType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2CustomFieldType
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly singleSelectOptions: {
      readonly nt: 'ProjectV2SingleSelectFieldOptionInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ProjectV2SingleSelectFieldOptionInput[] | undefined
    }
  }
}

export type CreateProjectV2Input = {
  readonly n: 'CreateProjectV2Input'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateProjectV2StatusUpdateInput = {
  readonly n: 'CreateProjectV2StatusUpdateInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly startDate: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
    readonly status: {
      readonly nt: 'ProjectV2StatusUpdateStatus'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ProjectV2StatusUpdateStatus | undefined
    }
    readonly targetDate: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
  }
}

export type CreatePullRequestInput = {
  readonly n: 'CreatePullRequestInput'
  readonly f: {
    readonly baseRefName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly draft: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly headRefName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly headRepositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly maintainerCanModify: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type CreateRefInput = {
  readonly n: 'CreateRefInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly oid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type CreateRepositoryInput = {
  readonly n: 'CreateRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly hasIssuesEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly hasWikiEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly homepageUrl: {
      readonly nt: 'URI'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.URI | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly template: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly visibility: {
      readonly nt: 'RepositoryVisibility'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryVisibility
    }
  }
}

export type CreateRepositoryRulesetInput = {
  readonly n: 'CreateRepositoryRulesetInput'
  readonly f: {
    readonly bypassActors: {
      readonly nt: 'RepositoryRulesetBypassActorInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RepositoryRulesetBypassActorInput[] | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly conditions: {
      readonly nt: 'RepositoryRuleConditionsInput'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryRuleConditionsInput
    }
    readonly enforcement: {
      readonly nt: 'RuleEnforcement'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RuleEnforcement
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly rules: {
      readonly nt: 'RepositoryRuleInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RepositoryRuleInput[] | undefined
    }
    readonly sourceId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly target: {
      readonly nt: 'RepositoryRulesetTarget'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryRulesetTarget | undefined
    }
  }
}

export type CreateSponsorsListingInput = {
  readonly n: 'CreateSponsorsListingInput'
  readonly f: {
    readonly billingCountryOrRegionCode: {
      readonly nt: 'SponsorsCountryOrRegionCode'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.SponsorsCountryOrRegionCode | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly contactEmail: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fiscalHostLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fiscallyHostedProjectProfileUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fullDescription: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly residenceCountryOrRegionCode: {
      readonly nt: 'SponsorsCountryOrRegionCode'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.SponsorsCountryOrRegionCode | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CreateSponsorsTierInput = {
  readonly n: 'CreateSponsorsTierInput'
  readonly f: {
    readonly amount: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly isRecurring: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly publish: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly repositoryName: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryOwnerLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sponsorableId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly welcomeMessage: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CreateSponsorshipInput = {
  readonly n: 'CreateSponsorshipInput'
  readonly f: {
    readonly amount: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly isRecurring: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly privacyLevel: {
      readonly nt: 'SponsorshipPrivacy'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.SponsorshipPrivacy | undefined
    }
    readonly receiveEmails: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly sponsorId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sponsorableId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly tierId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type CreateSponsorshipsInput = {
  readonly n: 'CreateSponsorshipsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly privacyLevel: {
      readonly nt: 'SponsorshipPrivacy'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.SponsorshipPrivacy | undefined
    }
    readonly receiveEmails: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly recurring: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly sponsorLogin: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly sponsorships: {
      readonly nt: 'BulkSponsorship'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.BulkSponsorship[]
    }
  }
}

export type CreateTeamDiscussionCommentInput = {
  readonly n: 'CreateTeamDiscussionCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly discussionId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type CreateTeamDiscussionInput = {
  readonly n: 'CreateTeamDiscussionInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly private: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type CreateUserListInput = {
  readonly n: 'CreateUserListInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly isPrivate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type DeclineTopicSuggestionInput = {
  readonly n: 'DeclineTopicSuggestionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly reason: {
      readonly nt: 'TopicSuggestionDeclineReason'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.TopicSuggestionDeclineReason | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type DeleteBranchProtectionRuleInput = {
  readonly n: 'DeleteBranchProtectionRuleInput'
  readonly f: {
    readonly branchProtectionRuleId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type DeleteDeploymentInput = {
  readonly n: 'DeleteDeploymentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteDiscussionCommentInput = {
  readonly n: 'DeleteDiscussionCommentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteDiscussionInput = {
  readonly n: 'DeleteDiscussionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteEnvironmentInput = {
  readonly n: 'DeleteEnvironmentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteIpAllowListEntryInput = {
  readonly n: 'DeleteIpAllowListEntryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ipAllowListEntryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteIssueCommentInput = {
  readonly n: 'DeleteIssueCommentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteIssueInput = {
  readonly n: 'DeleteIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteLabelInput = {
  readonly n: 'DeleteLabelInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteLinkedBranchInput = {
  readonly n: 'DeleteLinkedBranchInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly linkedBranchId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeletePackageVersionInput = {
  readonly n: 'DeletePackageVersionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly packageVersionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectCardInput = {
  readonly n: 'DeleteProjectCardInput'
  readonly f: {
    readonly cardId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type DeleteProjectColumnInput = {
  readonly n: 'DeleteProjectColumnInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly columnId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectInput = {
  readonly n: 'DeleteProjectInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectV2FieldInput = {
  readonly n: 'DeleteProjectV2FieldInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fieldId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectV2Input = {
  readonly n: 'DeleteProjectV2Input'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectV2ItemInput = {
  readonly n: 'DeleteProjectV2ItemInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectV2StatusUpdateInput = {
  readonly n: 'DeleteProjectV2StatusUpdateInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly statusUpdateId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteProjectV2WorkflowInput = {
  readonly n: 'DeleteProjectV2WorkflowInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly workflowId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeletePullRequestReviewCommentInput = {
  readonly n: 'DeletePullRequestReviewCommentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeletePullRequestReviewInput = {
  readonly n: 'DeletePullRequestReviewInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteRefInput = {
  readonly n: 'DeleteRefInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly refId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteRepositoryRulesetInput = {
  readonly n: 'DeleteRepositoryRulesetInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryRulesetId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteTeamDiscussionCommentInput = {
  readonly n: 'DeleteTeamDiscussionCommentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteTeamDiscussionInput = {
  readonly n: 'DeleteTeamDiscussionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteUserListInput = {
  readonly n: 'DeleteUserListInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly listId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeleteVerifiableDomainInput = {
  readonly n: 'DeleteVerifiableDomainInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DeploymentOrder = {
  readonly n: 'DeploymentOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'DeploymentOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.DeploymentOrderField
    }
  }
}

export type DequeuePullRequestInput = {
  readonly n: 'DequeuePullRequestInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DisablePullRequestAutoMergeInput = {
  readonly n: 'DisablePullRequestAutoMergeInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DiscussionOrder = {
  readonly n: 'DiscussionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'DiscussionOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.DiscussionOrderField
    }
  }
}

export type DiscussionPollOptionOrder = {
  readonly n: 'DiscussionPollOptionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'DiscussionPollOptionOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.DiscussionPollOptionOrderField
    }
  }
}

export type DismissPullRequestReviewInput = {
  readonly n: 'DismissPullRequestReviewInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly message: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DismissRepositoryVulnerabilityAlertInput = {
  readonly n: 'DismissRepositoryVulnerabilityAlertInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly dismissReason: {
      readonly nt: 'DismissReason'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.DismissReason
    }
    readonly repositoryVulnerabilityAlertId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type DraftPullRequestReviewComment = {
  readonly n: 'DraftPullRequestReviewComment'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly position: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type DraftPullRequestReviewThread = {
  readonly n: 'DraftPullRequestReviewThread'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly line: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly side: {
      readonly nt: 'DiffSide'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DiffSide | undefined
    }
    readonly startLine: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly startSide: {
      readonly nt: 'DiffSide'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DiffSide | undefined
    }
  }
}

export type EnablePullRequestAutoMergeInput = {
  readonly n: 'EnablePullRequestAutoMergeInput'
  readonly f: {
    readonly authorEmail: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitBody: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitHeadline: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expectedHeadOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly mergeMethod: {
      readonly nt: 'PullRequestMergeMethod'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestMergeMethod | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type EnqueuePullRequestInput = {
  readonly n: 'EnqueuePullRequestInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expectedHeadOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly jump: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type EnterpriseAdministratorInvitationOrder = {
  readonly n: 'EnterpriseAdministratorInvitationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseAdministratorInvitationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseAdministratorInvitationOrderField
    }
  }
}

export type EnterpriseMemberInvitationOrder = {
  readonly n: 'EnterpriseMemberInvitationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseMemberInvitationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseMemberInvitationOrderField
    }
  }
}

export type EnterpriseMemberOrder = {
  readonly n: 'EnterpriseMemberOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseMemberOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseMemberOrderField
    }
  }
}

export type EnterpriseOrder = {
  readonly n: 'EnterpriseOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseOrderField
    }
  }
}

export type EnterpriseServerInstallationOrder = {
  readonly n: 'EnterpriseServerInstallationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseServerInstallationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseServerInstallationOrderField
    }
  }
}

export type EnterpriseServerUserAccountEmailOrder = {
  readonly n: 'EnterpriseServerUserAccountEmailOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseServerUserAccountEmailOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseServerUserAccountEmailOrderField
    }
  }
}

export type EnterpriseServerUserAccountOrder = {
  readonly n: 'EnterpriseServerUserAccountOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseServerUserAccountOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseServerUserAccountOrderField
    }
  }
}

export type EnterpriseServerUserAccountsUploadOrder = {
  readonly n: 'EnterpriseServerUserAccountsUploadOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnterpriseServerUserAccountsUploadOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseServerUserAccountsUploadOrderField
    }
  }
}

export type Environments = {
  readonly n: 'Environments'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'EnvironmentOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnvironmentOrderField
    }
  }
}

export type FileAddition = {
  readonly n: 'FileAddition'
  readonly f: {
    readonly contents: {
      readonly nt: 'Base64String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Base64String
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type FileChanges = {
  readonly n: 'FileChanges'
  readonly f: {
    readonly additions: {
      readonly nt: 'FileAddition'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.FileAddition[] | undefined
    }
    readonly deletions: {
      readonly nt: 'FileDeletion'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.FileDeletion[] | undefined
    }
  }
}

export type FileDeletion = {
  readonly n: 'FileDeletion'
  readonly f: {
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type FileExtensionRestrictionParametersInput = {
  readonly n: 'FileExtensionRestrictionParametersInput'
  readonly f: {
    readonly restrictedFileExtensions: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
  }
}

export type FilePathRestrictionParametersInput = {
  readonly n: 'FilePathRestrictionParametersInput'
  readonly f: {
    readonly restrictedFilePaths: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
  }
}

export type FollowOrganizationInput = {
  readonly n: 'FollowOrganizationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type FollowUserInput = {
  readonly n: 'FollowUserInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type GistOrder = {
  readonly n: 'GistOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'GistOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GistOrderField
    }
  }
}

export type GrantEnterpriseOrganizationsMigratorRoleInput = {
  readonly n: 'GrantEnterpriseOrganizationsMigratorRoleInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type GrantMigratorRoleInput = {
  readonly n: 'GrantMigratorRoleInput'
  readonly f: {
    readonly actor: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly actorType: {
      readonly nt: 'ActorType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ActorType
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ImportProjectInput = {
  readonly n: 'ImportProjectInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly columnImports: {
      readonly nt: 'ProjectColumnImport'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ProjectColumnImport[]
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ownerName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly public: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
  }
}

export type InviteEnterpriseAdminInput = {
  readonly n: 'InviteEnterpriseAdminInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly email: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly invitee: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly role: {
      readonly nt: 'EnterpriseAdministratorRole'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.EnterpriseAdministratorRole | undefined
    }
  }
}

export type InviteEnterpriseMemberInput = {
  readonly n: 'InviteEnterpriseMemberInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly email: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly invitee: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type IpAllowListEntryOrder = {
  readonly n: 'IpAllowListEntryOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'IpAllowListEntryOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.IpAllowListEntryOrderField
    }
  }
}

export type IssueCommentOrder = {
  readonly n: 'IssueCommentOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'IssueCommentOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.IssueCommentOrderField
    }
  }
}

export type IssueFilters = {
  readonly n: 'IssueFilters'
  readonly f: {
    readonly assignee: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly createdBy: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labels: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly mentioned: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly milestone: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly milestoneNumber: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly since: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly states: {
      readonly nt: 'IssueState'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.IssueState[] | undefined
    }
    readonly viewerSubscribed: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
  }
}

export type IssueOrder = {
  readonly n: 'IssueOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'IssueOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.IssueOrderField
    }
  }
}

export type LabelOrder = {
  readonly n: 'LabelOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'LabelOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.LabelOrderField
    }
  }
}

export type LanguageOrder = {
  readonly n: 'LanguageOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'LanguageOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.LanguageOrderField
    }
  }
}

export type LinkProjectV2ToRepositoryInput = {
  readonly n: 'LinkProjectV2ToRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type LinkProjectV2ToTeamInput = {
  readonly n: 'LinkProjectV2ToTeamInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type LinkRepositoryToProjectInput = {
  readonly n: 'LinkRepositoryToProjectInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type LockLockableInput = {
  readonly n: 'LockLockableInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly lockReason: {
      readonly nt: 'LockReason'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.LockReason | undefined
    }
    readonly lockableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MannequinOrder = {
  readonly n: 'MannequinOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'MannequinOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.MannequinOrderField
    }
  }
}

export type MarkDiscussionCommentAsAnswerInput = {
  readonly n: 'MarkDiscussionCommentAsAnswerInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MarkFileAsViewedInput = {
  readonly n: 'MarkFileAsViewedInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MarkProjectV2AsTemplateInput = {
  readonly n: 'MarkProjectV2AsTemplateInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MarkPullRequestReadyForReviewInput = {
  readonly n: 'MarkPullRequestReadyForReviewInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MaxFilePathLengthParametersInput = {
  readonly n: 'MaxFilePathLengthParametersInput'
  readonly f: {
    readonly maxFilePathLength: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type MaxFileSizeParametersInput = {
  readonly n: 'MaxFileSizeParametersInput'
  readonly f: {
    readonly maxFileSize: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type MergeBranchInput = {
  readonly n: 'MergeBranchInput'
  readonly f: {
    readonly authorEmail: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly base: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitMessage: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly head: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MergePullRequestInput = {
  readonly n: 'MergePullRequestInput'
  readonly f: {
    readonly authorEmail: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitBody: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commitHeadline: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expectedHeadOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly mergeMethod: {
      readonly nt: 'PullRequestMergeMethod'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestMergeMethod | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MergeQueueParametersInput = {
  readonly n: 'MergeQueueParametersInput'
  readonly f: {
    readonly checkResponseTimeoutMinutes: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly groupingStrategy: {
      readonly nt: 'MergeQueueGroupingStrategy'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.MergeQueueGroupingStrategy
    }
    readonly maxEntriesToBuild: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly maxEntriesToMerge: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly mergeMethod: {
      readonly nt: 'MergeQueueMergeMethod'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.MergeQueueMergeMethod
    }
    readonly minEntriesToMerge: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly minEntriesToMergeWaitMinutes: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type MilestoneOrder = {
  readonly n: 'MilestoneOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'MilestoneOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.MilestoneOrderField
    }
  }
}

export type MinimizeCommentInput = {
  readonly n: 'MinimizeCommentInput'
  readonly f: {
    readonly classifier: {
      readonly nt: 'ReportedContentClassifiers'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ReportedContentClassifiers
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MoveProjectCardInput = {
  readonly n: 'MoveProjectCardInput'
  readonly f: {
    readonly afterCardId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly cardId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly columnId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type MoveProjectColumnInput = {
  readonly n: 'MoveProjectColumnInput'
  readonly f: {
    readonly afterColumnId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly columnId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type OrgEnterpriseOwnerOrder = {
  readonly n: 'OrgEnterpriseOwnerOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'OrgEnterpriseOwnerOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrgEnterpriseOwnerOrderField
    }
  }
}

export type OrganizationOrder = {
  readonly n: 'OrganizationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'OrganizationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrganizationOrderField
    }
  }
}

export type PackageFileOrder = {
  readonly n: 'PackageFileOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.OrderDirection | undefined
    }
    readonly field: {
      readonly nt: 'PackageFileOrderField'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PackageFileOrderField | undefined
    }
  }
}

export type PackageOrder = {
  readonly n: 'PackageOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.OrderDirection | undefined
    }
    readonly field: {
      readonly nt: 'PackageOrderField'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PackageOrderField | undefined
    }
  }
}

export type PackageVersionOrder = {
  readonly n: 'PackageVersionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.OrderDirection | undefined
    }
    readonly field: {
      readonly nt: 'PackageVersionOrderField'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PackageVersionOrderField | undefined
    }
  }
}

export type PinEnvironmentInput = {
  readonly n: 'PinEnvironmentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly pinned: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type PinIssueInput = {
  readonly n: 'PinIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type PinnedEnvironmentOrder = {
  readonly n: 'PinnedEnvironmentOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'PinnedEnvironmentOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.PinnedEnvironmentOrderField
    }
  }
}

export type ProjectCardImport = {
  readonly n: 'ProjectCardImport'
  readonly f: {
    readonly number: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly repository: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type ProjectColumnImport = {
  readonly n: 'ProjectColumnImport'
  readonly f: {
    readonly columnName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly issues: {
      readonly nt: 'ProjectCardImport'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ProjectCardImport[] | undefined
    }
    readonly position: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type ProjectOrder = {
  readonly n: 'ProjectOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectOrderField
    }
  }
}

export type ProjectV2Collaborator = {
  readonly n: 'ProjectV2Collaborator'
  readonly f: {
    readonly role: {
      readonly nt: 'ProjectV2Roles'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2Roles
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type ProjectV2FieldOrder = {
  readonly n: 'ProjectV2FieldOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2FieldOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2FieldOrderField
    }
  }
}

export type ProjectV2FieldValue = {
  readonly n: 'ProjectV2FieldValue'
  readonly f: {
    readonly date: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
    readonly iterationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly number: {
      readonly nt: 'Float'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Float | undefined
    }
    readonly singleSelectOptionId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly text: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type ProjectV2Filters = {
  readonly n: 'ProjectV2Filters'
  readonly f: {
    readonly state: {
      readonly nt: 'ProjectV2State'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ProjectV2State | undefined
    }
  }
}

export type ProjectV2ItemFieldValueOrder = {
  readonly n: 'ProjectV2ItemFieldValueOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2ItemFieldValueOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2ItemFieldValueOrderField
    }
  }
}

export type ProjectV2ItemOrder = {
  readonly n: 'ProjectV2ItemOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2ItemOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2ItemOrderField
    }
  }
}

export type ProjectV2Order = {
  readonly n: 'ProjectV2Order'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2OrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2OrderField
    }
  }
}

export type ProjectV2SingleSelectFieldOptionInput = {
  readonly n: 'ProjectV2SingleSelectFieldOptionInput'
  readonly f: {
    readonly color: {
      readonly nt: 'ProjectV2SingleSelectFieldOptionColor'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2SingleSelectFieldOptionColor
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type ProjectV2StatusOrder = {
  readonly n: 'ProjectV2StatusOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2StatusUpdateOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2StatusUpdateOrderField
    }
  }
}

export type ProjectV2ViewOrder = {
  readonly n: 'ProjectV2ViewOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2ViewOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2ViewOrderField
    }
  }
}

export type ProjectV2WorkflowOrder = {
  readonly n: 'ProjectV2WorkflowOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ProjectV2WorkflowsOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2WorkflowsOrderField
    }
  }
}

export type PropertyTargetDefinitionInput = {
  readonly n: 'PropertyTargetDefinitionInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly propertyValues: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
    readonly source: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type PublishSponsorsTierInput = {
  readonly n: 'PublishSponsorsTierInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly tierId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type PullRequestOrder = {
  readonly n: 'PullRequestOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'PullRequestOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.PullRequestOrderField
    }
  }
}

export type PullRequestParametersInput = {
  readonly n: 'PullRequestParametersInput'
  readonly f: {
    readonly allowedMergeMethods: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly dismissStaleReviewsOnPush: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly requireCodeOwnerReview: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly requireLastPushApproval: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly requiredApprovingReviewCount: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly requiredReviewThreadResolution: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type ReactionOrder = {
  readonly n: 'ReactionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ReactionOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ReactionOrderField
    }
  }
}

export type RefNameConditionTargetInput = {
  readonly n: 'RefNameConditionTargetInput'
  readonly f: {
    readonly exclude: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
    readonly include: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
  }
}

export type RefOrder = {
  readonly n: 'RefOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'RefOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RefOrderField
    }
  }
}

export type RefUpdate = {
  readonly n: 'RefUpdate'
  readonly f: {
    readonly afterOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly beforeOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly force: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly name: {
      readonly nt: 'GitRefname'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitRefname
    }
  }
}

export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  readonly n: 'RegenerateEnterpriseIdentityProviderRecoveryCodesInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RegenerateVerifiableDomainTokenInput = {
  readonly n: 'RegenerateVerifiableDomainTokenInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RejectDeploymentsInput = {
  readonly n: 'RejectDeploymentsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly comment: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly workflowRunId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ReleaseOrder = {
  readonly n: 'ReleaseOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'ReleaseOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ReleaseOrderField
    }
  }
}

export type RemoveAssigneesFromAssignableInput = {
  readonly n: 'RemoveAssigneesFromAssignableInput'
  readonly f: {
    readonly assignableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type RemoveEnterpriseAdminInput = {
  readonly n: 'RemoveEnterpriseAdminInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type RemoveEnterpriseIdentityProviderInput = {
  readonly n: 'RemoveEnterpriseIdentityProviderInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveEnterpriseMemberInput = {
  readonly n: 'RemoveEnterpriseMemberInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveEnterpriseOrganizationInput = {
  readonly n: 'RemoveEnterpriseOrganizationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveEnterpriseSupportEntitlementInput = {
  readonly n: 'RemoveEnterpriseSupportEntitlementInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type RemoveLabelsFromLabelableInput = {
  readonly n: 'RemoveLabelsFromLabelableInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labelIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly labelableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveOutsideCollaboratorInput = {
  readonly n: 'RemoveOutsideCollaboratorInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveReactionInput = {
  readonly n: 'RemoveReactionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly content: {
      readonly nt: 'ReactionContent'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ReactionContent
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveStarInput = {
  readonly n: 'RemoveStarInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly starrableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveSubIssueInput = {
  readonly n: 'RemoveSubIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly subIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RemoveUpvoteInput = {
  readonly n: 'RemoveUpvoteInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ReopenDiscussionInput = {
  readonly n: 'ReopenDiscussionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly discussionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ReopenIssueInput = {
  readonly n: 'ReopenIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ReopenPullRequestInput = {
  readonly n: 'ReopenPullRequestInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ReorderEnvironmentInput = {
  readonly n: 'ReorderEnvironmentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly position: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
  }
}

export type RepositoryIdConditionTargetInput = {
  readonly n: 'RepositoryIdConditionTargetInput'
  readonly f: {
    readonly repositoryIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
  }
}

export type RepositoryInvitationOrder = {
  readonly n: 'RepositoryInvitationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'RepositoryInvitationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryInvitationOrderField
    }
  }
}

export type RepositoryMigrationOrder = {
  readonly n: 'RepositoryMigrationOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'RepositoryMigrationOrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryMigrationOrderDirection
    }
    readonly field: {
      readonly nt: 'RepositoryMigrationOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryMigrationOrderField
    }
  }
}

export type RepositoryNameConditionTargetInput = {
  readonly n: 'RepositoryNameConditionTargetInput'
  readonly f: {
    readonly exclude: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
    readonly include: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
    readonly protected: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
  }
}

export type RepositoryOrder = {
  readonly n: 'RepositoryOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'RepositoryOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryOrderField
    }
  }
}

export type RepositoryPropertyConditionTargetInput = {
  readonly n: 'RepositoryPropertyConditionTargetInput'
  readonly f: {
    readonly exclude: {
      readonly nt: 'PropertyTargetDefinitionInput'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.PropertyTargetDefinitionInput[]
    }
    readonly include: {
      readonly nt: 'PropertyTargetDefinitionInput'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.PropertyTargetDefinitionInput[]
    }
  }
}

export type RepositoryRuleConditionsInput = {
  readonly n: 'RepositoryRuleConditionsInput'
  readonly f: {
    readonly refName: {
      readonly nt: 'RefNameConditionTargetInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RefNameConditionTargetInput | undefined
    }
    readonly repositoryId: {
      readonly nt: 'RepositoryIdConditionTargetInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryIdConditionTargetInput | undefined
    }
    readonly repositoryName: {
      readonly nt: 'RepositoryNameConditionTargetInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryNameConditionTargetInput | undefined
    }
    readonly repositoryProperty: {
      readonly nt: 'RepositoryPropertyConditionTargetInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryPropertyConditionTargetInput | undefined
    }
  }
}

export type RepositoryRuleInput = {
  readonly n: 'RepositoryRuleInput'
  readonly f: {
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly parameters: {
      readonly nt: 'RuleParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RuleParametersInput | undefined
    }
    readonly type: {
      readonly nt: 'RepositoryRuleType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryRuleType
    }
  }
}

export type RepositoryRuleOrder = {
  readonly n: 'RepositoryRuleOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'RepositoryRuleOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryRuleOrderField
    }
  }
}

export type RepositoryRulesetBypassActorInput = {
  readonly n: 'RepositoryRulesetBypassActorInput'
  readonly f: {
    readonly actorId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly bypassMode: {
      readonly nt: 'RepositoryRulesetBypassActorBypassMode'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryRulesetBypassActorBypassMode
    }
    readonly deployKey: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly enterpriseOwner: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly organizationAdmin: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly repositoryRoleDatabaseId: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
  }
}

export type ReprioritizeSubIssueInput = {
  readonly n: 'ReprioritizeSubIssueInput'
  readonly f: {
    readonly afterId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly beforeId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly subIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RequestReviewsInput = {
  readonly n: 'RequestReviewsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly teamIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly union: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly userIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
  }
}

export type RequiredDeploymentsParametersInput = {
  readonly n: 'RequiredDeploymentsParametersInput'
  readonly f: {
    readonly requiredDeploymentEnvironments: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
  }
}

export type RequiredStatusCheckInput = {
  readonly n: 'RequiredStatusCheckInput'
  readonly f: {
    readonly appId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly context: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type RequiredStatusChecksParametersInput = {
  readonly n: 'RequiredStatusChecksParametersInput'
  readonly f: {
    readonly doNotEnforceOnCreate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiredStatusChecks: {
      readonly nt: 'StatusCheckConfigurationInput'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.StatusCheckConfigurationInput[]
    }
    readonly strictRequiredStatusChecksPolicy: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type RerequestCheckSuiteInput = {
  readonly n: 'RerequestCheckSuiteInput'
  readonly f: {
    readonly checkSuiteId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type ResolveReviewThreadInput = {
  readonly n: 'ResolveReviewThreadInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly threadId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RetireSponsorsTierInput = {
  readonly n: 'RetireSponsorsTierInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly tierId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RevertPullRequestInput = {
  readonly n: 'RevertPullRequestInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly draft: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type RevokeEnterpriseOrganizationsMigratorRoleInput = {
  readonly n: 'RevokeEnterpriseOrganizationsMigratorRoleInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type RevokeMigratorRoleInput = {
  readonly n: 'RevokeMigratorRoleInput'
  readonly f: {
    readonly actor: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly actorType: {
      readonly nt: 'ActorType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ActorType
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type RuleParametersInput = {
  readonly n: 'RuleParametersInput'
  readonly f: {
    readonly branchNamePattern: {
      readonly nt: 'BranchNamePatternParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.BranchNamePatternParametersInput | undefined
    }
    readonly codeScanning: {
      readonly nt: 'CodeScanningParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CodeScanningParametersInput | undefined
    }
    readonly commitAuthorEmailPattern: {
      readonly nt: 'CommitAuthorEmailPatternParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CommitAuthorEmailPatternParametersInput | undefined
    }
    readonly commitMessagePattern: {
      readonly nt: 'CommitMessagePatternParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CommitMessagePatternParametersInput | undefined
    }
    readonly committerEmailPattern: {
      readonly nt: 'CommitterEmailPatternParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CommitterEmailPatternParametersInput | undefined
    }
    readonly fileExtensionRestriction: {
      readonly nt: 'FileExtensionRestrictionParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.FileExtensionRestrictionParametersInput | undefined
    }
    readonly filePathRestriction: {
      readonly nt: 'FilePathRestrictionParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.FilePathRestrictionParametersInput | undefined
    }
    readonly maxFilePathLength: {
      readonly nt: 'MaxFilePathLengthParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.MaxFilePathLengthParametersInput | undefined
    }
    readonly maxFileSize: {
      readonly nt: 'MaxFileSizeParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.MaxFileSizeParametersInput | undefined
    }
    readonly mergeQueue: {
      readonly nt: 'MergeQueueParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.MergeQueueParametersInput | undefined
    }
    readonly pullRequest: {
      readonly nt: 'PullRequestParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestParametersInput | undefined
    }
    readonly requiredDeployments: {
      readonly nt: 'RequiredDeploymentsParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RequiredDeploymentsParametersInput | undefined
    }
    readonly requiredStatusChecks: {
      readonly nt: 'RequiredStatusChecksParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RequiredStatusChecksParametersInput | undefined
    }
    readonly tagNamePattern: {
      readonly nt: 'TagNamePatternParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.TagNamePatternParametersInput | undefined
    }
    readonly update: {
      readonly nt: 'UpdateParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.UpdateParametersInput | undefined
    }
    readonly workflows: {
      readonly nt: 'WorkflowsParametersInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.WorkflowsParametersInput | undefined
    }
  }
}

export type SavedReplyOrder = {
  readonly n: 'SavedReplyOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SavedReplyOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SavedReplyOrderField
    }
  }
}

export type SecurityAdvisoryIdentifierFilter = {
  readonly n: 'SecurityAdvisoryIdentifierFilter'
  readonly f: {
    readonly type: {
      readonly nt: 'SecurityAdvisoryIdentifierType'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SecurityAdvisoryIdentifierType
    }
    readonly value: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type SecurityAdvisoryOrder = {
  readonly n: 'SecurityAdvisoryOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SecurityAdvisoryOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SecurityAdvisoryOrderField
    }
  }
}

export type SecurityVulnerabilityOrder = {
  readonly n: 'SecurityVulnerabilityOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SecurityVulnerabilityOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SecurityVulnerabilityOrderField
    }
  }
}

export type SetEnterpriseIdentityProviderInput = {
  readonly n: 'SetEnterpriseIdentityProviderInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly digestMethod: {
      readonly nt: 'SamlDigestAlgorithm'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SamlDigestAlgorithm
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly idpCertificate: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly issuer: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly signatureMethod: {
      readonly nt: 'SamlSignatureAlgorithm'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SamlSignatureAlgorithm
    }
    readonly ssoUrl: {
      readonly nt: 'URI'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.URI
    }
  }
}

export type SetOrganizationInteractionLimitInput = {
  readonly n: 'SetOrganizationInteractionLimitInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expiry: {
      readonly nt: 'RepositoryInteractionLimitExpiry'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimitExpiry | undefined
    }
    readonly limit: {
      readonly nt: 'RepositoryInteractionLimit'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimit
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type SetRepositoryInteractionLimitInput = {
  readonly n: 'SetRepositoryInteractionLimitInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expiry: {
      readonly nt: 'RepositoryInteractionLimitExpiry'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimitExpiry | undefined
    }
    readonly limit: {
      readonly nt: 'RepositoryInteractionLimit'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimit
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type SetUserInteractionLimitInput = {
  readonly n: 'SetUserInteractionLimitInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expiry: {
      readonly nt: 'RepositoryInteractionLimitExpiry'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimitExpiry | undefined
    }
    readonly limit: {
      readonly nt: 'RepositoryInteractionLimit'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryInteractionLimit
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type SponsorAndLifetimeValueOrder = {
  readonly n: 'SponsorAndLifetimeValueOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorAndLifetimeValueOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorAndLifetimeValueOrderField
    }
  }
}

export type SponsorOrder = {
  readonly n: 'SponsorOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorOrderField
    }
  }
}

export type SponsorableOrder = {
  readonly n: 'SponsorableOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorableOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorableOrderField
    }
  }
}

export type SponsorsActivityOrder = {
  readonly n: 'SponsorsActivityOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorsActivityOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorsActivityOrderField
    }
  }
}

export type SponsorsTierOrder = {
  readonly n: 'SponsorsTierOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorsTierOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorsTierOrderField
    }
  }
}

export type SponsorshipNewsletterOrder = {
  readonly n: 'SponsorshipNewsletterOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorshipNewsletterOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorshipNewsletterOrderField
    }
  }
}

export type SponsorshipOrder = {
  readonly n: 'SponsorshipOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'SponsorshipOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SponsorshipOrderField
    }
  }
}

export type StarOrder = {
  readonly n: 'StarOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'StarOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.StarOrderField
    }
  }
}

export type StartOrganizationMigrationInput = {
  readonly n: 'StartOrganizationMigrationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sourceAccessToken: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly sourceOrgUrl: {
      readonly nt: 'URI'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.URI
    }
    readonly targetEnterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly targetOrgName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type StartRepositoryMigrationInput = {
  readonly n: 'StartRepositoryMigrationInput'
  readonly f: {
    readonly accessToken: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly continueOnError: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly gitArchiveUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly githubPat: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly lockSource: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly metadataArchiveUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryName: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly skipReleases: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly sourceId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly sourceRepositoryUrl: {
      readonly nt: 'URI'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.URI
    }
    readonly targetRepoVisibility: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type StatusCheckConfigurationInput = {
  readonly n: 'StatusCheckConfigurationInput'
  readonly f: {
    readonly context: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly integrationId: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
  }
}

export type SubmitPullRequestReviewInput = {
  readonly n: 'SubmitPullRequestReviewInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly event: {
      readonly nt: 'PullRequestReviewEvent'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.PullRequestReviewEvent
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
  }
}

export type TagNamePatternParametersInput = {
  readonly n: 'TagNamePatternParametersInput'
  readonly f: {
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly negate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly operator: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
  }
}

export type TeamDiscussionCommentOrder = {
  readonly n: 'TeamDiscussionCommentOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'TeamDiscussionCommentOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.TeamDiscussionCommentOrderField
    }
  }
}

export type TeamDiscussionOrder = {
  readonly n: 'TeamDiscussionOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'TeamDiscussionOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.TeamDiscussionOrderField
    }
  }
}

export type TeamMemberOrder = {
  readonly n: 'TeamMemberOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'TeamMemberOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.TeamMemberOrderField
    }
  }
}

export type TeamOrder = {
  readonly n: 'TeamOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'TeamOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.TeamOrderField
    }
  }
}

export type TeamRepositoryOrder = {
  readonly n: 'TeamRepositoryOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'TeamRepositoryOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.TeamRepositoryOrderField
    }
  }
}

export type TransferEnterpriseOrganizationInput = {
  readonly n: 'TransferEnterpriseOrganizationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly destinationEnterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type TransferIssueInput = {
  readonly n: 'TransferIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly createLabelsIfMissing: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnarchiveProjectV2ItemInput = {
  readonly n: 'UnarchiveProjectV2ItemInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnarchiveRepositoryInput = {
  readonly n: 'UnarchiveRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnfollowOrganizationInput = {
  readonly n: 'UnfollowOrganizationInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnfollowUserInput = {
  readonly n: 'UnfollowUserInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly userId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnlinkProjectV2FromRepositoryInput = {
  readonly n: 'UnlinkProjectV2FromRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnlinkProjectV2FromTeamInput = {
  readonly n: 'UnlinkProjectV2FromTeamInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly teamId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnlinkRepositoryFromProjectInput = {
  readonly n: 'UnlinkRepositoryFromProjectInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnlockLockableInput = {
  readonly n: 'UnlockLockableInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly lockableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnmarkDiscussionCommentAsAnswerInput = {
  readonly n: 'UnmarkDiscussionCommentAsAnswerInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnmarkFileAsViewedInput = {
  readonly n: 'UnmarkFileAsViewedInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnmarkIssueAsDuplicateInput = {
  readonly n: 'UnmarkIssueAsDuplicateInput'
  readonly f: {
    readonly canonicalId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly duplicateId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnmarkProjectV2AsTemplateInput = {
  readonly n: 'UnmarkProjectV2AsTemplateInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnminimizeCommentInput = {
  readonly n: 'UnminimizeCommentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly subjectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnpinIssueInput = {
  readonly n: 'UnpinIssueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly issueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UnresolveReviewThreadInput = {
  readonly n: 'UnresolveReviewThreadInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly threadId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateBranchProtectionRuleInput = {
  readonly n: 'UpdateBranchProtectionRuleInput'
  readonly f: {
    readonly allowsDeletions: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly allowsForcePushes: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly blocksCreations: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly branchProtectionRuleId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly bypassForcePushActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly bypassPullRequestActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly dismissesStaleReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly isAdminEnforced: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly lockAllowsFetchAndMerge: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly lockBranch: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly pattern: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pushActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly requireLastPushApproval: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiredApprovingReviewCount: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
    readonly requiredDeploymentEnvironments: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly requiredStatusCheckContexts: {
      readonly nt: 'String'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.String[] | undefined
    }
    readonly requiredStatusChecks: {
      readonly nt: 'RequiredStatusCheckInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RequiredStatusCheckInput[] | undefined
    }
    readonly requiresApprovingReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresCodeOwnerReviews: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresCommitSignatures: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresConversationResolution: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresDeployments: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresLinearHistory: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresStatusChecks: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly requiresStrictStatusChecks: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly restrictsPushes: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly restrictsReviewDismissals: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly reviewDismissalActorIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
  }
}

export type UpdateCheckRunInput = {
  readonly n: 'UpdateCheckRunInput'
  readonly f: {
    readonly actions: {
      readonly nt: 'CheckRunAction'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.CheckRunAction[] | undefined
    }
    readonly checkRunId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly completedAt: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly conclusion: {
      readonly nt: 'CheckConclusionState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckConclusionState | undefined
    }
    readonly detailsUrl: {
      readonly nt: 'URI'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.URI | undefined
    }
    readonly externalId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly output: {
      readonly nt: 'CheckRunOutput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.CheckRunOutput | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly startedAt: {
      readonly nt: 'DateTime'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.DateTime | undefined
    }
    readonly status: {
      readonly nt: 'RequestableCheckStatusState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RequestableCheckStatusState | undefined
    }
  }
}

export type UpdateCheckSuitePreferencesInput = {
  readonly n: 'UpdateCheckSuitePreferencesInput'
  readonly f: {
    readonly autoTriggerPreferences: {
      readonly nt: 'CheckSuiteAutoTriggerPreference'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.CheckSuiteAutoTriggerPreference[]
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateDiscussionCommentInput = {
  readonly n: 'UpdateDiscussionCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly commentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateDiscussionInput = {
  readonly n: 'UpdateDiscussionInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly categoryId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly discussionId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateEnterpriseAdministratorRoleInput = {
  readonly n: 'UpdateEnterpriseAdministratorRoleInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly login: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly role: {
      readonly nt: 'EnterpriseAdministratorRole'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseAdministratorRole
    }
  }
}

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  readonly n: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly policyValue: {
      readonly nt: 'EnterpriseAllowPrivateRepositoryForkingPolicyValue'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.EnterpriseAllowPrivateRepositoryForkingPolicyValue | undefined
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  readonly n: 'UpdateEnterpriseDefaultRepositoryPermissionSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseDefaultRepositoryPermissionSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseDefaultRepositoryPermissionSettingValue
    }
  }
}

export type UpdateEnterpriseDeployKeySettingInput = {
  readonly n: 'UpdateEnterpriseDeployKeySettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly membersCanCreateInternalRepositories: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly membersCanCreatePrivateRepositories: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly membersCanCreatePublicRepositories: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly membersCanCreateRepositoriesPolicyEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseMembersCanCreateRepositoriesSettingValue'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.EnterpriseMembersCanCreateRepositoriesSettingValue | undefined
    }
  }
}

export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanDeleteIssuesSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanMakePurchasesSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseMembersCanMakePurchasesSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseMembersCanMakePurchasesSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  readonly n: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  readonly n: 'UpdateEnterpriseOrganizationProjectsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseOwnerOrganizationRoleInput = {
  readonly n: 'UpdateEnterpriseOwnerOrganizationRoleInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly organizationRole: {
      readonly nt: 'RoleInOrganization'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RoleInOrganization
    }
  }
}

export type UpdateEnterpriseProfileInput = {
  readonly n: 'UpdateEnterpriseProfileInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly location: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly websiteUrl: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  readonly n: 'UpdateEnterpriseRepositoryProjectsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  readonly n: 'UpdateEnterpriseTeamDiscussionsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledDisabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledDisabledSettingValue
    }
  }
}

export type UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput = {
  readonly n: 'UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseDisallowedMethodsSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseDisallowedMethodsSettingValue
    }
  }
}

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  readonly n: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enterpriseId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'EnterpriseEnabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.EnterpriseEnabledSettingValue
    }
  }
}

export type UpdateEnvironmentInput = {
  readonly n: 'UpdateEnvironmentInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly environmentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly preventSelfReview: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly reviewers: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly waitTimer: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
  }
}

export type UpdateIpAllowListEnabledSettingInput = {
  readonly n: 'UpdateIpAllowListEnabledSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'IpAllowListEnabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.IpAllowListEnabledSettingValue
    }
  }
}

export type UpdateIpAllowListEntryInput = {
  readonly n: 'UpdateIpAllowListEntryInput'
  readonly f: {
    readonly allowListValue: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ipAllowListEntryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly isActive: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateIpAllowListForInstalledAppsEnabledSettingInput = {
  readonly n: 'UpdateIpAllowListForInstalledAppsEnabledSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'IpAllowListForInstalledAppsEnabledSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.IpAllowListForInstalledAppsEnabledSettingValue
    }
  }
}

export type UpdateIssueCommentInput = {
  readonly n: 'UpdateIssueCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateIssueInput = {
  readonly n: 'UpdateIssueInput'
  readonly f: {
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly labelIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly milestoneId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly projectIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly state: {
      readonly nt: 'IssueState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.IssueState | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateLabelInput = {
  readonly n: 'UpdateLabelInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly color: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateNotificationRestrictionSettingInput = {
  readonly n: 'UpdateNotificationRestrictionSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly ownerId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly settingValue: {
      readonly nt: 'NotificationRestrictionSettingValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.NotificationRestrictionSettingValue
    }
  }
}

export type UpdateOrganizationAllowPrivateRepositoryForkingSettingInput = {
  readonly n: 'UpdateOrganizationAllowPrivateRepositoryForkingSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly forkingEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateOrganizationWebCommitSignoffSettingInput = {
  readonly n: 'UpdateOrganizationWebCommitSignoffSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly organizationId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly webCommitSignoffRequired: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type UpdateParametersInput = {
  readonly n: 'UpdateParametersInput'
  readonly f: {
    readonly updateAllowsFetchAndMerge: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type UpdatePatreonSponsorabilityInput = {
  readonly n: 'UpdatePatreonSponsorabilityInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly enablePatreonSponsorships: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateProjectCardInput = {
  readonly n: 'UpdateProjectCardInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly isArchived: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly note: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectCardId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateProjectColumnInput = {
  readonly n: 'UpdateProjectColumnInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly projectColumnId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateProjectInput = {
  readonly n: 'UpdateProjectInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly public: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly state: {
      readonly nt: 'ProjectState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ProjectState | undefined
    }
  }
}

export type UpdateProjectV2CollaboratorsInput = {
  readonly n: 'UpdateProjectV2CollaboratorsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly collaborators: {
      readonly nt: 'ProjectV2Collaborator'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ProjectV2Collaborator[]
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateProjectV2DraftIssueInput = {
  readonly n: 'UpdateProjectV2DraftIssueInput'
  readonly f: {
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly draftIssueId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateProjectV2FieldInput = {
  readonly n: 'UpdateProjectV2FieldInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fieldId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly singleSelectOptions: {
      readonly nt: 'ProjectV2SingleSelectFieldOptionInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ProjectV2SingleSelectFieldOptionInput[] | undefined
    }
  }
}

export type UpdateProjectV2Input = {
  readonly n: 'UpdateProjectV2Input'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly closed: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly public: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly readme: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly shortDescription: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateProjectV2ItemFieldValueInput = {
  readonly n: 'UpdateProjectV2ItemFieldValueInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly fieldId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly value: {
      readonly nt: 'ProjectV2FieldValue'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ProjectV2FieldValue
    }
  }
}

export type UpdateProjectV2ItemPositionInput = {
  readonly n: 'UpdateProjectV2ItemPositionInput'
  readonly f: {
    readonly afterId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly projectId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateProjectV2StatusUpdateInput = {
  readonly n: 'UpdateProjectV2StatusUpdateInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly startDate: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
    readonly status: {
      readonly nt: 'ProjectV2StatusUpdateStatus'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ProjectV2StatusUpdateStatus | undefined
    }
    readonly statusUpdateId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly targetDate: {
      readonly nt: 'Date'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Date | undefined
    }
  }
}

export type UpdatePullRequestBranchInput = {
  readonly n: 'UpdatePullRequestBranchInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly expectedHeadOid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.GitObjectID | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly updateMethod: {
      readonly nt: 'PullRequestBranchUpdateMethod'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestBranchUpdateMethod | undefined
    }
  }
}

export type UpdatePullRequestInput = {
  readonly n: 'UpdatePullRequestInput'
  readonly f: {
    readonly assigneeIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly baseRefName: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly labelIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly maintainerCanModify: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly milestoneId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly projectIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly pullRequestId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly state: {
      readonly nt: 'PullRequestUpdateState'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.PullRequestUpdateState | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdatePullRequestReviewCommentInput = {
  readonly n: 'UpdatePullRequestReviewCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestReviewCommentId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdatePullRequestReviewInput = {
  readonly n: 'UpdatePullRequestReviewInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly pullRequestReviewId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateRefInput = {
  readonly n: 'UpdateRefInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly force: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly oid: {
      readonly nt: 'GitObjectID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.GitObjectID
    }
    readonly refId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateRefsInput = {
  readonly n: 'UpdateRefsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly refUpdates: {
      readonly nt: 'RefUpdate'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.RefUpdate[]
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateRepositoryInput = {
  readonly n: 'UpdateRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly hasDiscussionsEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly hasIssuesEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly hasProjectsEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly hasSponsorshipsEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly hasWikiEnabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly homepageUrl: {
      readonly nt: 'URI'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.URI | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly template: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
  }
}

export type UpdateRepositoryRulesetInput = {
  readonly n: 'UpdateRepositoryRulesetInput'
  readonly f: {
    readonly bypassActors: {
      readonly nt: 'RepositoryRulesetBypassActorInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RepositoryRulesetBypassActorInput[] | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly conditions: {
      readonly nt: 'RepositoryRuleConditionsInput'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryRuleConditionsInput | undefined
    }
    readonly enforcement: {
      readonly nt: 'RuleEnforcement'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RuleEnforcement | undefined
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryRulesetId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly rules: {
      readonly nt: 'RepositoryRuleInput'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.RepositoryRuleInput[] | undefined
    }
    readonly target: {
      readonly nt: 'RepositoryRulesetTarget'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.RepositoryRulesetTarget | undefined
    }
  }
}

export type UpdateRepositoryWebCommitSignoffSettingInput = {
  readonly n: 'UpdateRepositoryWebCommitSignoffSettingInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly webCommitSignoffRequired: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
  }
}

export type UpdateSponsorshipPreferencesInput = {
  readonly n: 'UpdateSponsorshipPreferencesInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly privacyLevel: {
      readonly nt: 'SponsorshipPrivacy'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.SponsorshipPrivacy | undefined
    }
    readonly receiveEmails: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly sponsorId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly sponsorableId: {
      readonly nt: 'ID'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.ID | undefined
    }
    readonly sponsorableLogin: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateSubscriptionInput = {
  readonly n: 'UpdateSubscriptionInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly state: {
      readonly nt: 'SubscriptionState'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.SubscriptionState
    }
    readonly subscribableId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateTeamDiscussionCommentInput = {
  readonly n: 'UpdateTeamDiscussionCommentInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly bodyVersion: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type UpdateTeamDiscussionInput = {
  readonly n: 'UpdateTeamDiscussionInput'
  readonly f: {
    readonly body: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly bodyVersion: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly pinned: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly title: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateTeamReviewAssignmentInput = {
  readonly n: 'UpdateTeamReviewAssignmentInput'
  readonly f: {
    readonly algorithm: {
      readonly nt: 'TeamReviewAssignmentAlgorithm'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.TeamReviewAssignmentAlgorithm | undefined
    }
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly countMembersAlreadyRequested: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly enabled: {
      readonly nt: 'Boolean'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Boolean
    }
    readonly excludedTeamMemberIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly includeChildTeamMembers: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly notifyTeam: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly removeTeamRequest: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly teamMemberCount: {
      readonly nt: 'Int'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Int | undefined
    }
  }
}

export type UpdateTeamsRepositoryInput = {
  readonly n: 'UpdateTeamsRepositoryInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly permission: {
      readonly nt: 'RepositoryPermission'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.RepositoryPermission
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly teamIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
  }
}

export type UpdateTopicsInput = {
  readonly n: 'UpdateTopicsInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly topicNames: {
      readonly nt: 'String'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.String[]
    }
  }
}

export type UpdateUserListInput = {
  readonly n: 'UpdateUserListInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly description: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly isPrivate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly listId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly name: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type UpdateUserListsForItemInput = {
  readonly n: 'UpdateUserListsForItemInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly itemId: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
    readonly listIds: {
      readonly nt: 'ID'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.ID[]
    }
    readonly suggestedListIds: {
      readonly nt: 'ID'
      readonly it: readonly [0, [1]]
      readonly $t: readonly TypeInputsIndex.ID[] | undefined
    }
  }
}

export type UserStatusOrder = {
  readonly n: 'UserStatusOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'UserStatusOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.UserStatusOrderField
    }
  }
}

export type VerifiableDomainOrder = {
  readonly n: 'VerifiableDomainOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'VerifiableDomainOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.VerifiableDomainOrderField
    }
  }
}

export type VerifyVerifiableDomainInput = {
  readonly n: 'VerifyVerifiableDomainInput'
  readonly f: {
    readonly clientMutationId: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly id: {
      readonly nt: 'ID'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.ID
    }
  }
}

export type WorkflowFileReferenceInput = {
  readonly n: 'WorkflowFileReferenceInput'
  readonly f: {
    readonly path: {
      readonly nt: 'String'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.String
    }
    readonly ref: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
    readonly repositoryId: {
      readonly nt: 'Int'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.Int
    }
    readonly sha: {
      readonly nt: 'String'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.String | undefined
    }
  }
}

export type WorkflowRunOrder = {
  readonly n: 'WorkflowRunOrder'
  readonly f: {
    readonly direction: {
      readonly nt: 'OrderDirection'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.OrderDirection
    }
    readonly field: {
      readonly nt: 'WorkflowRunOrderField'
      readonly it: readonly [1]
      readonly $t: TypeInputsIndex.WorkflowRunOrderField
    }
  }
}

export type WorkflowsParametersInput = {
  readonly n: 'WorkflowsParametersInput'
  readonly f: {
    readonly doNotEnforceOnCreate: {
      readonly nt: 'Boolean'
      readonly it: readonly [0]
      readonly $t: TypeInputsIndex.Boolean | undefined
    }
    readonly workflows: {
      readonly nt: 'WorkflowFileReferenceInput'
      readonly it: readonly [1, [1]]
      readonly $t: readonly TypeInputsIndex.WorkflowFileReferenceInput[]
    }
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

export type App = {
  readonly f: {
    readonly ipAllowListEntries: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IpAllowListEntryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IpAllowListEntryOrder | undefined
        }
      }
    }
    readonly logoUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Bot = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type BranchProtectionRule = {
  readonly f: {
    readonly branchProtectionRuleConflicts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly bypassForcePushAllowances: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly bypassPullRequestAllowances: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly matchingRefs: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly pushAllowances: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly reviewDismissalAllowances: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type CheckRun = {
  readonly f: {
    readonly annotations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly isRequired: {
      readonly a: {
        readonly pullRequestId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly pullRequestNumber: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly steps: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type CheckSuite = {
  readonly f: {
    readonly checkRuns: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'CheckRunFilter'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.CheckRunFilter | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly matchingPullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
  }
}

export type Commit = {
  readonly f: {
    readonly associatedPullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'PullRequestOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PullRequestOrder | undefined
        }
      }
    }
    readonly authors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly blame: {
      readonly a: {
        readonly path: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly checkSuites: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'CheckSuiteFilter'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.CheckSuiteFilter | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly deployments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly environments: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DeploymentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DeploymentOrder | undefined
        }
      }
    }
    readonly file: {
      readonly a: {
        readonly path: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly history: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly author: {
          readonly nt: 'CommitAuthor'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.CommitAuthor | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly path: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly since: {
          readonly nt: 'GitTimestamp'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GitTimestamp | undefined
        }
        readonly until: {
          readonly nt: 'GitTimestamp'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GitTimestamp | undefined
        }
      }
    }
    readonly parents: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly submodules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type CommitComment = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type CommitCommentThread = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type CommitContributionsByRepository = {
  readonly f: {
    readonly contributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'CommitContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.CommitContributionOrder | undefined
        }
      }
    }
  }
}

export type Comparison = {
  readonly f: {
    readonly commits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ContributionsCollection = {
  readonly f: {
    readonly commitContributionsByRepository: {
      readonly a: {
        readonly maxRepositories: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly issueContributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
    readonly issueContributionsByRepository: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly maxRepositories: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pullRequestContributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
    readonly pullRequestContributionsByRepository: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly maxRepositories: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pullRequestReviewContributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
    readonly pullRequestReviewContributionsByRepository: {
      readonly a: {
        readonly maxRepositories: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly repositoryContributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
    readonly totalIssueContributions: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly totalPullRequestContributions: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly totalRepositoriesWithContributedIssues: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly totalRepositoriesWithContributedPullRequests: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludePopular: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly totalRepositoryContributions: {
      readonly a: {
        readonly excludeFirst: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
  }
}

export type DependencyGraphManifest = {
  readonly f: {
    readonly dependencies: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Deployment = {
  readonly f: {
    readonly statuses: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type DeploymentProtectionRule = {
  readonly f: {
    readonly reviewers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type DeploymentRequest = {
  readonly f: {
    readonly reviewers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type DeploymentReview = {
  readonly f: {
    readonly environments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Discussion = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type DiscussionComment = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly replies: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type DiscussionPoll = {
  readonly f: {
    readonly options: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DiscussionPollOptionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DiscussionPollOptionOrder | undefined
        }
      }
    }
  }
}

export type DraftIssue = {
  readonly f: {
    readonly assignees: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectV2Items: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Enterprise = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly members: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly deployment: {
          readonly nt: 'EnterpriseUserDeployment'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseUserDeployment | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasTwoFactorEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseMemberOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMemberOrder | undefined
        }
        readonly organizationLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'EnterpriseUserAccountMembershipRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseUserAccountMembershipRole | undefined
        }
        readonly twoFactorMethodSecurity: {
          readonly nt: 'TwoFactorCredentialSecurityType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TwoFactorCredentialSecurityType | undefined
        }
      }
    }
    readonly organizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly viewerOrganizationRole: {
          readonly nt: 'RoleInOrganization'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RoleInOrganization | undefined
        }
      }
    }
    readonly ruleset: {
      readonly a: {
        readonly databaseId: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly rulesets: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly userNamespaceRepositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type EnterpriseIdentityProvider = {
  readonly f: {
    readonly externalIdentities: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly membersOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly userName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type EnterpriseOutsideCollaboratorEdge = {
  readonly f: {
    readonly repositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
      }
    }
  }
}

export type EnterpriseOwnerInfo = {
  readonly f: {
    readonly admins: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasTwoFactorEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseMemberOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMemberOrder | undefined
        }
        readonly organizationLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'EnterpriseAdministratorRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseAdministratorRole | undefined
        }
        readonly twoFactorMethodSecurity: {
          readonly nt: 'TwoFactorCredentialSecurityType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TwoFactorCredentialSecurityType | undefined
        }
      }
    }
    readonly affiliatedUsersWithTwoFactorDisabled: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly allowPrivateRepositoryForkingSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly defaultRepositoryPermissionSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'DefaultRepositoryPermissionField'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DefaultRepositoryPermissionField
        }
      }
    }
    readonly domains: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly isApproved: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isVerified: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'VerifiableDomainOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.VerifiableDomainOrder | undefined
        }
      }
    }
    readonly enterpriseServerInstallations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly connectedOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseServerInstallationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseServerInstallationOrder | undefined
        }
      }
    }
    readonly failedInvitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly ipAllowListEntries: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IpAllowListEntryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IpAllowListEntryOrder | undefined
        }
      }
    }
    readonly membersCanChangeRepositoryVisibilitySettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly membersCanCreateRepositoriesSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'OrganizationMembersCanCreateRepositoriesSettingValue'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.OrganizationMembersCanCreateRepositoriesSettingValue
        }
      }
    }
    readonly membersCanDeleteIssuesSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly membersCanDeleteRepositoriesSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly membersCanInviteCollaboratorsSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly membersCanUpdateProtectedBranchesSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly membersCanViewDependencyInsightsSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly organizationProjectsSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly outsideCollaborators: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasTwoFactorEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseMemberOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMemberOrder | undefined
        }
        readonly organizationLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly twoFactorMethodSecurity: {
          readonly nt: 'TwoFactorCredentialSecurityType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TwoFactorCredentialSecurityType | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly pendingAdminInvitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseAdministratorInvitationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseAdministratorInvitationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'EnterpriseAdministratorRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseAdministratorRole | undefined
        }
      }
    }
    readonly pendingCollaboratorInvitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryInvitationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryInvitationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly pendingMemberInvitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly invitationSource: {
          readonly nt: 'OrganizationInvitationSource'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationInvitationSource | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly organizationLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly pendingUnaffiliatedMemberInvitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseMemberInvitationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMemberInvitationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly repositoryDeployKeySettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly repositoryProjectsSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly samlIdentityProviderSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'IdentityProviderConfigurationState'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.IdentityProviderConfigurationState
        }
      }
    }
    readonly supportEntitlements: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseMemberOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMemberOrder | undefined
        }
      }
    }
    readonly teamDiscussionsSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
    readonly twoFactorRequiredSettingOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly value: {
          readonly nt: 'Boolean'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Boolean
        }
      }
    }
  }
}

export type EnterpriseServerInstallation = {
  readonly f: {
    readonly userAccounts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseServerUserAccountOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseServerUserAccountOrder | undefined
        }
      }
    }
    readonly userAccountsUploads: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseServerUserAccountsUploadOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseServerUserAccountsUploadOrder | undefined
        }
      }
    }
  }
}

export type EnterpriseServerUserAccount = {
  readonly f: {
    readonly emails: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseServerUserAccountEmailOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseServerUserAccountEmailOrder | undefined
        }
      }
    }
  }
}

export type EnterpriseUserAccount = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly enterpriseInstallations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseServerInstallationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseServerInstallationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'EnterpriseUserAccountMembershipRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseUserAccountMembershipRole | undefined
        }
      }
    }
    readonly organizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'EnterpriseUserAccountMembershipRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseUserAccountMembershipRole | undefined
        }
      }
    }
  }
}

export type Environment = {
  readonly f: {
    readonly protectionRules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Gist = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly files: {
      readonly a: {
        readonly limit: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly oid: {
          readonly nt: 'GitObjectID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GitObjectID | undefined
        }
      }
    }
    readonly forks: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'GistOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GistOrder | undefined
        }
      }
    }
    readonly stargazers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'StarOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.StarOrder | undefined
        }
      }
    }
  }
}

export type GistComment = {
  readonly f: {
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type GistFile = {
  readonly f: {
    readonly text: {
      readonly a: {
        readonly truncate: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type GitActor = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type GrantEnterpriseOrganizationsMigratorRolePayload = {
  readonly f: {
    readonly organizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Issue = {
  readonly f: {
    readonly assignees: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly closedByPullRequestsReferences: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeClosedPrs: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderByState: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly userLinkedOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueCommentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueCommentOrder | undefined
        }
      }
    }
    readonly hovercard: {
      readonly a: {
        readonly includeNotificationContexts: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
      }
    }
    readonly linkedBranches: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly participants: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectCards: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly archivedStates: {
          readonly nt: 'ProjectCardArchivedState'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.ProjectCardArchivedState[] | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeArchived: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly stateReason: {
      readonly a: {
        readonly enableDuplicate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly subIssues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly timeline: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly timelineItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly itemTypes: {
          readonly nt: 'IssueTimelineItemsItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.IssueTimelineItemsItemType[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly skip: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly trackedInIssues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly trackedIssues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly trackedIssuesCount: {
      readonly a: {
        readonly states: {
          readonly nt: 'TrackedIssueStates'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.TrackedIssueStates[] | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type IssueComment = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type IssueContributionsByRepository = {
  readonly f: {
    readonly contributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
  }
}

export type IssueTemplate = {
  readonly f: {
    readonly assignees: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
      }
    }
  }
}

export type Label = {
  readonly f: {
    readonly issues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'IssueFilters'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueFilters | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'IssueState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.IssueState[] | undefined
        }
      }
    }
    readonly pullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
  }
}

export type Mannequin = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type MarketplaceListing = {
  readonly f: {
    readonly logoUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type MergeQueue = {
  readonly f: {
    readonly entries: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Milestone = {
  readonly f: {
    readonly issues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'IssueFilters'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueFilters | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'IssueState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.IssueState[] | undefined
        }
      }
    }
    readonly pullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
  }
}

export type OIDCProvider = {
  readonly f: {
    readonly externalIdentities: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly membersOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly userName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type Organization = {
  readonly f: {
    readonly anyPinnableItems: {
      readonly a: {
        readonly type: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PinnableItemType | undefined
        }
      }
    }
    readonly auditLog: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'AuditLogOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.AuditLogOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly domains: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly isApproved: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isVerified: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'VerifiableDomainOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.VerifiableDomainOrder | undefined
        }
      }
    }
    readonly enterpriseOwners: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrgEnterpriseOwnerOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrgEnterpriseOwnerOrder | undefined
        }
        readonly organizationRole: {
          readonly nt: 'RoleInOrganization'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RoleInOrganization | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly ipAllowListEntries: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IpAllowListEntryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IpAllowListEntryOrder | undefined
        }
      }
    }
    readonly isSponsoredBy: {
      readonly a: {
        readonly accountLogin: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly lifetimeReceivedSponsorshipValues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorAndLifetimeValueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorAndLifetimeValueOrder | undefined
        }
      }
    }
    readonly mannequins: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly orderBy: {
          readonly nt: 'MannequinOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.MannequinOrder | undefined
        }
      }
    }
    readonly memberStatuses: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'UserStatusOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.UserStatusOrder | undefined
        }
      }
    }
    readonly membersWithRole: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly packages: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageOrder | undefined
        }
        readonly packageType: {
          readonly nt: 'PackageType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageType | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly pendingMembers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pinnableItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
    readonly pinnedItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
    readonly project: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectOrder | undefined
        }
        readonly search: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly states: {
          readonly nt: 'ProjectState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.ProjectState[] | undefined
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly recentProjects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isArchived: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isFork: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly repository: {
      readonly a: {
        readonly followRenames: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly repositoryDiscussionComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly onlyAnswers: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly repositoryDiscussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly answered: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DiscussionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DiscussionOrder | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly states: {
          readonly nt: 'DiscussionState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.DiscussionState[] | undefined
        }
      }
    }
    readonly repositoryMigrations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryMigrationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryMigrationOrder | undefined
        }
        readonly repositoryName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly state: {
          readonly nt: 'MigrationState'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.MigrationState | undefined
        }
      }
    }
    readonly ruleset: {
      readonly a: {
        readonly databaseId: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
        readonly includeParents: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly rulesets: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeParents: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly targets: {
          readonly nt: 'RepositoryRulesetTarget'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.RepositoryRulesetTarget[] | undefined
        }
      }
    }
    readonly sponsoring: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
      }
    }
    readonly sponsors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
        readonly tierId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly sponsorsActivities: {
      readonly a: {
        readonly actions: {
          readonly nt: 'SponsorsActivityAction'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SponsorsActivityAction[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeAsSponsor: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorsActivityOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityOrder | undefined
        }
        readonly period: {
          readonly nt: 'SponsorsActivityPeriod'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityPeriod | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsorable: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipNewsletters: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipNewsletterOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipNewsletterOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsMaintainer: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly maintainerLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly team: {
      readonly a: {
        readonly slug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly teams: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly ldapMapped: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly notificationSetting: {
          readonly nt: 'TeamNotificationSetting'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamNotificationSetting | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamOrder | undefined
        }
        readonly privacy: {
          readonly nt: 'TeamPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamPrivacy | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'TeamRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamRole | undefined
        }
        readonly rootTeamsOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly userLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
      }
    }
    readonly totalSponsorshipAmountAsSponsorInCents: {
      readonly a: {
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly sponsorableLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
  }
}

export type OrganizationIdentityProvider = {
  readonly f: {
    readonly externalIdentities: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly membersOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly userName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type OrganizationTeamsHovercardContext = {
  readonly f: {
    readonly relevantTeams: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type OrganizationsHovercardContext = {
  readonly f: {
    readonly relevantOrganizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
      }
    }
  }
}

export type Package = {
  readonly f: {
    readonly version: {
      readonly a: {
        readonly version: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly versions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageVersionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageVersionOrder | undefined
        }
      }
    }
  }
}

export type PackageVersion = {
  readonly f: {
    readonly files: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageFileOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageFileOrder | undefined
        }
      }
    }
  }
}

export type ProfileItemShowcase = {
  readonly f: {
    readonly items: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Project = {
  readonly f: {
    readonly columns: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pendingCards: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly archivedStates: {
          readonly nt: 'ProjectCardArchivedState'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.ProjectCardArchivedState[] | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ProjectColumn = {
  readonly f: {
    readonly cards: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly archivedStates: {
          readonly nt: 'ProjectCardArchivedState'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.ProjectCardArchivedState[] | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ProjectV2 = {
  readonly f: {
    readonly field: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly fields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly items: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2ItemOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2ItemOrder | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
      }
    }
    readonly statusUpdates: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2StatusOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2StatusOrder | undefined
        }
      }
    }
    readonly teams: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamOrder | undefined
        }
      }
    }
    readonly view: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly views: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2ViewOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2ViewOrder | undefined
        }
      }
    }
    readonly workflow: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly workflows: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2WorkflowOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2WorkflowOrder | undefined
        }
      }
    }
  }
}

export type ProjectV2Item = {
  readonly f: {
    readonly fieldValueByName: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly fieldValues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2ItemFieldValueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2ItemFieldValueOrder | undefined
        }
      }
    }
  }
}

export type ProjectV2ItemFieldLabelValue = {
  readonly f: {
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ProjectV2ItemFieldPullRequestValue = {
  readonly f: {
    readonly pullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'PullRequestOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PullRequestOrder | undefined
        }
      }
    }
  }
}

export type ProjectV2ItemFieldReviewerValue = {
  readonly f: {
    readonly reviewers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ProjectV2ItemFieldUserValue = {
  readonly f: {
    readonly users: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ProjectV2SingleSelectField = {
  readonly f: {
    readonly options: {
      readonly a: {
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
      }
    }
  }
}

export type ProjectV2View = {
  readonly f: {
    readonly fields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly groupBy: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly groupByFields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly sortBy: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly sortByFields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly verticalGroupBy: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly verticalGroupByFields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
    readonly visibleFields: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2FieldOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2FieldOrder | undefined
        }
      }
    }
  }
}

export type PullRequest = {
  readonly f: {
    readonly assignees: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly closingIssuesReferences: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly userLinkedOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueCommentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueCommentOrder | undefined
        }
      }
    }
    readonly commits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly files: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly hovercard: {
      readonly a: {
        readonly includeNotificationContexts: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
      }
    }
    readonly latestOpinionatedReviews: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly writersOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly latestReviews: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly participants: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectCards: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly archivedStates: {
          readonly nt: 'ProjectCardArchivedState'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.ProjectCardArchivedState[] | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeArchived: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly reviewRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly reviewThreads: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly reviews: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly author: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestReviewState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestReviewState[] | undefined
        }
      }
    }
    readonly timeline: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly timelineItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly itemTypes: {
          readonly nt: 'PullRequestTimelineItemsItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestTimelineItemsItemType[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly skip: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly viewerMergeBodyText: {
      readonly a: {
        readonly mergeType: {
          readonly nt: 'PullRequestMergeMethod'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PullRequestMergeMethod | undefined
        }
      }
    }
    readonly viewerMergeHeadlineText: {
      readonly a: {
        readonly mergeType: {
          readonly nt: 'PullRequestMergeMethod'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PullRequestMergeMethod | undefined
        }
      }
    }
  }
}

export type PullRequestCommitCommentThread = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type PullRequestContributionsByRepository = {
  readonly f: {
    readonly contributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
  }
}

export type PullRequestReview = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly onBehalfOf: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type PullRequestReviewComment = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type PullRequestReviewContributionsByRepository = {
  readonly f: {
    readonly contributions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ContributionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ContributionOrder | undefined
        }
      }
    }
  }
}

export type PullRequestReviewThread = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly skip: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type PullRequestThread = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly skip: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type ReactionGroup = {
  readonly f: {
    readonly reactors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly users: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Ref = {
  readonly f: {
    readonly associatedPullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
    readonly compare: {
      readonly a: {
        readonly headRef: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly rules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryRuleOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryRuleOrder | undefined
        }
      }
    }
  }
}

export type Release = {
  readonly f: {
    readonly mentions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly releaseAssets: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly shortDescriptionHTML: {
      readonly a: {
        readonly limit: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Repository = {
  readonly f: {
    readonly assignableUsers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly branchProtectionRules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly codeowners: {
      readonly a: {
        readonly refName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly collaborators: {
      readonly a: {
        readonly affiliation: {
          readonly nt: 'CollaboratorAffiliation'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.CollaboratorAffiliation | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly commitComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly dependencyGraphManifests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly dependenciesAfter: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly dependenciesFirst: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly withDependencies: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly deployKeys: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly deployments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly environments: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DeploymentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DeploymentOrder | undefined
        }
      }
    }
    readonly discussion: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly discussionCategories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterByAssignable: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly discussionCategory: {
      readonly a: {
        readonly slug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly discussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly answered: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly categoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DiscussionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DiscussionOrder | undefined
        }
        readonly states: {
          readonly nt: 'DiscussionState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.DiscussionState[] | undefined
        }
      }
    }
    readonly environment: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly environments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'Environments'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Environments | undefined
        }
        readonly pinnedEnvironmentFilter: {
          readonly nt: 'EnvironmentPinnedFilterField'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnvironmentPinnedFilterField | undefined
        }
      }
    }
    readonly forks: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly issue: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly issueOrPullRequest: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly issues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'IssueFilters'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueFilters | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'IssueState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.IssueState[] | undefined
        }
      }
    }
    readonly label: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly languages: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LanguageOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LanguageOrder | undefined
        }
      }
    }
    readonly mentionableUsers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly mergeQueue: {
      readonly a: {
        readonly branch: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly milestone: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly milestones: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'MilestoneOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.MilestoneOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly states: {
          readonly nt: 'MilestoneState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.MilestoneState[] | undefined
        }
      }
    }
    readonly object: {
      readonly a: {
        readonly expression: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly oid: {
          readonly nt: 'GitObjectID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GitObjectID | undefined
        }
      }
    }
    readonly packages: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageOrder | undefined
        }
        readonly packageType: {
          readonly nt: 'PackageType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageType | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly pinnedDiscussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pinnedEnvironments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'PinnedEnvironmentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PinnedEnvironmentOrder | undefined
        }
      }
    }
    readonly pinnedIssues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly project: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectOrder | undefined
        }
        readonly search: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly states: {
          readonly nt: 'ProjectState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.ProjectState[] | undefined
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly pullRequest: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly pullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
    readonly recentProjects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly ref: {
      readonly a: {
        readonly qualifiedName: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly refs: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly direction: {
          readonly nt: 'OrderDirection'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrderDirection | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RefOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RefOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly refPrefix: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly release: {
      readonly a: {
        readonly tagName: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly releases: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReleaseOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReleaseOrder | undefined
        }
      }
    }
    readonly repositoryTopics: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly ruleset: {
      readonly a: {
        readonly databaseId: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
        readonly includeParents: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly rulesets: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeParents: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly targets: {
          readonly nt: 'RepositoryRulesetTarget'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.RepositoryRulesetTarget[] | undefined
        }
      }
    }
    readonly shortDescriptionHTML: {
      readonly a: {
        readonly limit: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly stargazers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'StarOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.StarOrder | undefined
        }
      }
    }
    readonly submodules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly vulnerabilityAlert: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly vulnerabilityAlerts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly dependencyScopes: {
          readonly nt: 'RepositoryVulnerabilityAlertDependencyScope'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.RepositoryVulnerabilityAlertDependencyScope[] | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly states: {
          readonly nt: 'RepositoryVulnerabilityAlertState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.RepositoryVulnerabilityAlertState[] | undefined
        }
      }
    }
    readonly watchers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type RepositoryRuleset = {
  readonly f: {
    readonly bypassActors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly rules: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly type: {
          readonly nt: 'RepositoryRuleType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryRuleType | undefined
        }
      }
    }
  }
}

export type RevokeEnterpriseOrganizationsMigratorRolePayload = {
  readonly f: {
    readonly organizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type SecurityAdvisory = {
  readonly f: {
    readonly cwes: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly vulnerabilities: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly classifications: {
          readonly nt: 'SecurityAdvisoryClassification'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SecurityAdvisoryClassification[] | undefined
        }
        readonly ecosystem: {
          readonly nt: 'SecurityAdvisoryEcosystem'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityAdvisoryEcosystem | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SecurityVulnerabilityOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityVulnerabilityOrder | undefined
        }
        readonly package: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly severities: {
          readonly nt: 'SecurityAdvisorySeverity'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SecurityAdvisorySeverity[] | undefined
        }
      }
    }
  }
}

export type SponsorsListing = {
  readonly f: {
    readonly featuredItems: {
      readonly a: {
        readonly featureableTypes: {
          readonly nt: 'SponsorsListingFeaturedItemFeatureableType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SponsorsListingFeaturedItemFeatureableType[] | undefined
        }
      }
    }
    readonly tiers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeUnpublished: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorsTierOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsTierOrder | undefined
        }
      }
    }
  }
}

export type SponsorsTierAdminInfo = {
  readonly f: {
    readonly sponsorships: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
  }
}

export type Status = {
  readonly f: {
    readonly combinedContexts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly context: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
  }
}

export type StatusCheckRollup = {
  readonly f: {
    readonly contexts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type StatusContext = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly isRequired: {
      readonly a: {
        readonly pullRequestId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly pullRequestNumber: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Team = {
  readonly f: {
    readonly ancestors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly childTeams: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly immediateOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamOrder | undefined
        }
        readonly userLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
      }
    }
    readonly discussion: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly discussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly isPinned: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamDiscussionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamDiscussionOrder | undefined
        }
      }
    }
    readonly invitations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly memberStatuses: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'UserStatusOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.UserStatusOrder | undefined
        }
      }
    }
    readonly members: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly membership: {
          readonly nt: 'TeamMembershipType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamMembershipType | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamMemberOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamMemberOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly role: {
          readonly nt: 'TeamMemberRole'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamMemberRole | undefined
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'ProjectV2Filters'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Filters | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamRepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamRepositoryOrder | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type TeamDiscussion = {
  readonly f: {
    readonly comments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly fromComment: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'TeamDiscussionCommentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.TeamDiscussionCommentOrder | undefined
        }
      }
    }
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type TeamDiscussionComment = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Topic = {
  readonly f: {
    readonly relatedTopics: {
      readonly a: {
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly sponsorableOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly stargazers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'StarOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.StarOrder | undefined
        }
      }
    }
  }
}

export type UpdateProjectV2CollaboratorsPayload = {
  readonly f: {
    readonly collaborators: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type UpdateProjectV2ItemPositionPayload = {
  readonly f: {
    readonly items: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type User = {
  readonly f: {
    readonly anyPinnableItems: {
      readonly a: {
        readonly type: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PinnableItemType | undefined
        }
      }
    }
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly canReceiveOrganizationEmailsWhenNotificationsRestricted: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly commitComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly contributionsCollection: {
      readonly a: {
        readonly from: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly organizationID: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly to: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly enterprises: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly membershipType: {
          readonly nt: 'EnterpriseMembershipType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseMembershipType | undefined
        }
        readonly orderBy: {
          readonly nt: 'EnterpriseOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.EnterpriseOrder | undefined
        }
      }
    }
    readonly followers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly following: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly gist: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly gistComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly gists: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'GistOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GistOrder | undefined
        }
        readonly privacy: {
          readonly nt: 'GistPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.GistPrivacy | undefined
        }
      }
    }
    readonly hovercard: {
      readonly a: {
        readonly primarySubjectId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly isSponsoredBy: {
      readonly a: {
        readonly accountLogin: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly issueComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueCommentOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueCommentOrder | undefined
        }
      }
    }
    readonly issues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly filterBy: {
          readonly nt: 'IssueFilters'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueFilters | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'IssueState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.IssueState[] | undefined
        }
      }
    }
    readonly lifetimeReceivedSponsorshipValues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorAndLifetimeValueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorAndLifetimeValueOrder | undefined
        }
      }
    }
    readonly lists: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly organization: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly organizationVerifiedDomainEmails: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly organizations: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'OrganizationOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.OrganizationOrder | undefined
        }
      }
    }
    readonly packages: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageOrder | undefined
        }
        readonly packageType: {
          readonly nt: 'PackageType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageType | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly pinnableItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
    readonly pinnedItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
    readonly project: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectOrder | undefined
        }
        readonly search: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly states: {
          readonly nt: 'ProjectState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.ProjectState[] | undefined
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly publicKeys: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pullRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly baseRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly headRefName: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly labels: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'IssueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.IssueOrder | undefined
        }
        readonly states: {
          readonly nt: 'PullRequestState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PullRequestState[] | undefined
        }
      }
    }
    readonly recentProjects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isArchived: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isFork: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly repositoriesContributedTo: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly contributionTypes: {
          readonly nt: 'RepositoryContributionType'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryContributionType[] | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssues: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly includeUserRepositories: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
      }
    }
    readonly repository: {
      readonly a: {
        readonly followRenames: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly repositoryDiscussionComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly onlyAnswers: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly repositoryDiscussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly answered: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DiscussionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DiscussionOrder | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly states: {
          readonly nt: 'DiscussionState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.DiscussionState[] | undefined
        }
      }
    }
    readonly savedReplies: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SavedReplyOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SavedReplyOrder | undefined
        }
      }
    }
    readonly socialAccounts: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly sponsoring: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
      }
    }
    readonly sponsors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
        readonly tierId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly sponsorsActivities: {
      readonly a: {
        readonly actions: {
          readonly nt: 'SponsorsActivityAction'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SponsorsActivityAction[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeAsSponsor: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorsActivityOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityOrder | undefined
        }
        readonly period: {
          readonly nt: 'SponsorsActivityPeriod'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityPeriod | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsorable: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipNewsletters: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipNewsletterOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipNewsletterOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsMaintainer: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly maintainerLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly starredRepositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'StarOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.StarOrder | undefined
        }
        readonly ownedByViewer: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly topRepositories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RepositoryOrder
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly totalSponsorshipAmountAsSponsorInCents: {
      readonly a: {
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly sponsorableLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly watching: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
  }
}

export type UserList = {
  readonly f: {
    readonly items: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Workflow = {
  readonly f: {
    readonly runs: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'WorkflowRunOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.WorkflowRunOrder | undefined
        }
      }
    }
  }
}

export type WorkflowRun = {
  readonly f: {
    readonly deploymentReviews: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly pendingDeploymentRequests: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

export type Actor = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Assignable = {
  readonly f: {
    readonly assignees: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Comment = {
  readonly f: {
    readonly userContentEdits: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Labelable = {
  readonly f: {
    readonly labels: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'LabelOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.LabelOrder | undefined
        }
      }
    }
  }
}

export type MemberStatusable = {
  readonly f: {
    readonly memberStatuses: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'UserStatusOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.UserStatusOrder | undefined
        }
      }
    }
  }
}

export type PackageOwner = {
  readonly f: {
    readonly packages: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly names: {
          readonly nt: 'String'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'PackageOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageOrder | undefined
        }
        readonly packageType: {
          readonly nt: 'PackageType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PackageType | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
  }
}

export type ProfileOwner = {
  readonly f: {
    readonly anyPinnableItems: {
      readonly a: {
        readonly type: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.PinnableItemType | undefined
        }
      }
    }
    readonly pinnableItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
    readonly pinnedItems: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly types: {
          readonly nt: 'PinnableItemType'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.PinnableItemType[] | undefined
        }
      }
    }
  }
}

export type ProjectOwner = {
  readonly f: {
    readonly project: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectOrder | undefined
        }
        readonly search: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly states: {
          readonly nt: 'ProjectState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.ProjectState[] | undefined
        }
      }
    }
  }
}

export type ProjectV2Owner = {
  readonly f: {
    readonly projectV2: {
      readonly a: {
        readonly number: {
          readonly nt: 'Int'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.Int
        }
      }
    }
    readonly projectsV2: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly minPermissionLevel: {
          readonly nt: 'ProjectV2PermissionLevel'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2PermissionLevel | undefined
        }
        readonly orderBy: {
          readonly nt: 'ProjectV2Order'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ProjectV2Order | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
  }
}

export type ProjectV2Recent = {
  readonly f: {
    readonly recentProjects: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Reactable = {
  readonly f: {
    readonly reactions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly content: {
          readonly nt: 'ReactionContent'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionContent | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'ReactionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ReactionOrder | undefined
        }
      }
    }
  }
}

export type RepositoryDiscussionAuthor = {
  readonly f: {
    readonly repositoryDiscussions: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly answered: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'DiscussionOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DiscussionOrder | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly states: {
          readonly nt: 'DiscussionState'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.DiscussionState[] | undefined
        }
      }
    }
  }
}

export type RepositoryDiscussionCommentAuthor = {
  readonly f: {
    readonly repositoryDiscussionComments: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly onlyAnswers: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly repositoryId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
  }
}

export type RepositoryInfo = {
  readonly f: {
    readonly shortDescriptionHTML: {
      readonly a: {
        readonly limit: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type RepositoryOwner = {
  readonly f: {
    readonly avatarUrl: {
      readonly a: {
        readonly size: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
    readonly repositories: {
      readonly a: {
        readonly affiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly hasIssuesEnabled: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isArchived: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isFork: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly isLocked: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'RepositoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryOrder | undefined
        }
        readonly ownerAffiliations: {
          readonly nt: 'RepositoryAffiliation'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.RepositoryAffiliation[] | undefined
        }
        readonly privacy: {
          readonly nt: 'RepositoryPrivacy'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryPrivacy | undefined
        }
        readonly visibility: {
          readonly nt: 'RepositoryVisibility'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.RepositoryVisibility | undefined
        }
      }
    }
    readonly repository: {
      readonly a: {
        readonly followRenames: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
  }
}

export type RequirableByPullRequest = {
  readonly f: {
    readonly isRequired: {
      readonly a: {
        readonly pullRequestId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly pullRequestNumber: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
      }
    }
  }
}

export type Sponsorable = {
  readonly f: {
    readonly isSponsoredBy: {
      readonly a: {
        readonly accountLogin: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly lifetimeReceivedSponsorshipValues: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorAndLifetimeValueOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorAndLifetimeValueOrder | undefined
        }
      }
    }
    readonly sponsoring: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
      }
    }
    readonly sponsors: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorOrder | undefined
        }
        readonly tierId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
      }
    }
    readonly sponsorsActivities: {
      readonly a: {
        readonly actions: {
          readonly nt: 'SponsorsActivityAction'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SponsorsActivityAction[] | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includeAsSponsor: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorsActivityOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityOrder | undefined
        }
        readonly period: {
          readonly nt: 'SponsorsActivityPeriod'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorsActivityPeriod | undefined
        }
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipForViewerAsSponsorable: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly sponsorshipNewsletters: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipNewsletterOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipNewsletterOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsMaintainer: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly includePrivate: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly sponsorshipsAsSponsor: {
      readonly a: {
        readonly activeOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly maintainerLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorshipOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorshipOrder | undefined
        }
      }
    }
    readonly totalSponsorshipAmountAsSponsorInCents: {
      readonly a: {
        readonly since: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly sponsorableLogins: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly until: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
  }
}

export type Starrable = {
  readonly f: {
    readonly stargazers: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'StarOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.StarOrder | undefined
        }
      }
    }
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

// No Union types with arguments in your schema.

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

export type Query = {
  readonly f: {
    readonly codeOfConduct: {
      readonly a: {
        readonly key: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly enterprise: {
      readonly a: {
        readonly invitationToken: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly slug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly enterpriseAdministratorInvitation: {
      readonly a: {
        readonly enterpriseSlug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly role: {
          readonly nt: 'EnterpriseAdministratorRole'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.EnterpriseAdministratorRole
        }
        readonly userLogin: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly enterpriseAdministratorInvitationByToken: {
      readonly a: {
        readonly invitationToken: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly enterpriseMemberInvitation: {
      readonly a: {
        readonly enterpriseSlug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly userLogin: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly enterpriseMemberInvitationByToken: {
      readonly a: {
        readonly invitationToken: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly license: {
      readonly a: {
        readonly key: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly marketplaceCategories: {
      readonly a: {
        readonly excludeEmpty: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly excludeSubcategories: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly includeCategories: {
          readonly nt: 'String'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
      }
    }
    readonly marketplaceCategory: {
      readonly a: {
        readonly slug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly useTopicAliases: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly marketplaceListing: {
      readonly a: {
        readonly slug: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly marketplaceListings: {
      readonly a: {
        readonly adminId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly allStates: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly categorySlug: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly organizationId: {
          readonly nt: 'ID'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.ID | undefined
        }
        readonly primaryCategoryOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly slugs: {
          readonly nt: 'String'
          readonly it: readonly [0, [0]]
          readonly $t: readonly TypeInputsIndex.String[] | undefined
        }
        readonly useTopicAliases: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly viewerCanAdmin: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly withFreeTrialsOnly: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly node: {
      readonly a: {
        readonly id: {
          readonly nt: 'ID'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ID
        }
      }
    }
    readonly nodes: {
      readonly a: {
        readonly ids: {
          readonly nt: 'ID'
          readonly it: readonly [1, [1]]
          readonly $t: readonly TypeInputsIndex.ID[]
        }
      }
    }
    readonly organization: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly rateLimit: {
      readonly a: {
        readonly dryRun: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
      }
    }
    readonly repository: {
      readonly a: {
        readonly followRenames: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly owner: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly repositoryOwner: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly resource: {
      readonly a: {
        readonly url: {
          readonly nt: 'URI'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.URI
        }
      }
    }
    readonly search: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly query: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
        readonly type: {
          readonly nt: 'SearchType'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SearchType
        }
      }
    }
    readonly securityAdvisories: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly classifications: {
          readonly nt: 'SecurityAdvisoryClassification'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SecurityAdvisoryClassification[] | undefined
        }
        readonly epssPercentage: {
          readonly nt: 'Float'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Float | undefined
        }
        readonly epssPercentile: {
          readonly nt: 'Float'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Float | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly identifier: {
          readonly nt: 'SecurityAdvisoryIdentifierFilter'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityAdvisoryIdentifierFilter | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SecurityAdvisoryOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityAdvisoryOrder | undefined
        }
        readonly publishedSince: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
        readonly updatedSince: {
          readonly nt: 'DateTime'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DateTime | undefined
        }
      }
    }
    readonly securityAdvisory: {
      readonly a: {
        readonly ghsaId: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly securityVulnerabilities: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly classifications: {
          readonly nt: 'SecurityAdvisoryClassification'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SecurityAdvisoryClassification[] | undefined
        }
        readonly ecosystem: {
          readonly nt: 'SecurityAdvisoryEcosystem'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityAdvisoryEcosystem | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly orderBy: {
          readonly nt: 'SecurityVulnerabilityOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityVulnerabilityOrder | undefined
        }
        readonly package: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly severities: {
          readonly nt: 'SecurityAdvisorySeverity'
          readonly it: readonly [0, [1]]
          readonly $t: readonly TypeInputsIndex.SecurityAdvisorySeverity[] | undefined
        }
      }
    }
    readonly sponsorables: {
      readonly a: {
        readonly after: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly before: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
        readonly dependencyEcosystem: {
          readonly nt: 'SecurityAdvisoryEcosystem'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SecurityAdvisoryEcosystem | undefined
        }
        readonly ecosystem: {
          readonly nt: 'DependencyGraphEcosystem'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.DependencyGraphEcosystem | undefined
        }
        readonly first: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly last: {
          readonly nt: 'Int'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Int | undefined
        }
        readonly onlyDependencies: {
          readonly nt: 'Boolean'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.Boolean | undefined
        }
        readonly orderBy: {
          readonly nt: 'SponsorableOrder'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.SponsorableOrder | undefined
        }
        readonly orgLoginForDependencies: {
          readonly nt: 'String'
          readonly it: readonly [0]
          readonly $t: TypeInputsIndex.String | undefined
        }
      }
    }
    readonly topic: {
      readonly a: {
        readonly name: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
    readonly user: {
      readonly a: {
        readonly login: {
          readonly nt: 'String'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.String
        }
      }
    }
  }
}

export type Mutation = {
  readonly f: {
    readonly abortQueuedMigrations: {
      readonly a: {
        readonly input: {
          readonly nt: 'AbortQueuedMigrationsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AbortQueuedMigrationsInput
        }
      }
    }
    readonly abortRepositoryMigration: {
      readonly a: {
        readonly input: {
          readonly nt: 'AbortRepositoryMigrationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AbortRepositoryMigrationInput
        }
      }
    }
    readonly acceptEnterpriseAdministratorInvitation: {
      readonly a: {
        readonly input: {
          readonly nt: 'AcceptEnterpriseAdministratorInvitationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AcceptEnterpriseAdministratorInvitationInput
        }
      }
    }
    readonly acceptEnterpriseMemberInvitation: {
      readonly a: {
        readonly input: {
          readonly nt: 'AcceptEnterpriseMemberInvitationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AcceptEnterpriseMemberInvitationInput
        }
      }
    }
    readonly acceptTopicSuggestion: {
      readonly a: {
        readonly input: {
          readonly nt: 'AcceptTopicSuggestionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AcceptTopicSuggestionInput
        }
      }
    }
    readonly accessUserNamespaceRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'AccessUserNamespaceRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AccessUserNamespaceRepositoryInput
        }
      }
    }
    readonly addAssigneesToAssignable: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddAssigneesToAssignableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddAssigneesToAssignableInput
        }
      }
    }
    readonly addComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddCommentInput
        }
      }
    }
    readonly addDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddDiscussionCommentInput
        }
      }
    }
    readonly addDiscussionPollVote: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddDiscussionPollVoteInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddDiscussionPollVoteInput
        }
      }
    }
    readonly addEnterpriseOrganizationMember: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddEnterpriseOrganizationMemberInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddEnterpriseOrganizationMemberInput
        }
      }
    }
    readonly addEnterpriseSupportEntitlement: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddEnterpriseSupportEntitlementInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddEnterpriseSupportEntitlementInput
        }
      }
    }
    readonly addLabelsToLabelable: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddLabelsToLabelableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddLabelsToLabelableInput
        }
      }
    }
    readonly addProjectCard: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddProjectCardInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddProjectCardInput
        }
      }
    }
    readonly addProjectColumn: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddProjectColumnInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddProjectColumnInput
        }
      }
    }
    readonly addProjectV2DraftIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddProjectV2DraftIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddProjectV2DraftIssueInput
        }
      }
    }
    readonly addProjectV2ItemById: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddProjectV2ItemByIdInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddProjectV2ItemByIdInput
        }
      }
    }
    readonly addPullRequestReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddPullRequestReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddPullRequestReviewInput
        }
      }
    }
    readonly addPullRequestReviewComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddPullRequestReviewCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddPullRequestReviewCommentInput
        }
      }
    }
    readonly addPullRequestReviewThread: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddPullRequestReviewThreadInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddPullRequestReviewThreadInput
        }
      }
    }
    readonly addPullRequestReviewThreadReply: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddPullRequestReviewThreadReplyInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddPullRequestReviewThreadReplyInput
        }
      }
    }
    readonly addReaction: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddReactionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddReactionInput
        }
      }
    }
    readonly addStar: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddStarInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddStarInput
        }
      }
    }
    readonly addSubIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddSubIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddSubIssueInput
        }
      }
    }
    readonly addUpvote: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddUpvoteInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddUpvoteInput
        }
      }
    }
    readonly addVerifiableDomain: {
      readonly a: {
        readonly input: {
          readonly nt: 'AddVerifiableDomainInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.AddVerifiableDomainInput
        }
      }
    }
    readonly approveDeployments: {
      readonly a: {
        readonly input: {
          readonly nt: 'ApproveDeploymentsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ApproveDeploymentsInput
        }
      }
    }
    readonly approveVerifiableDomain: {
      readonly a: {
        readonly input: {
          readonly nt: 'ApproveVerifiableDomainInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ApproveVerifiableDomainInput
        }
      }
    }
    readonly archiveProjectV2Item: {
      readonly a: {
        readonly input: {
          readonly nt: 'ArchiveProjectV2ItemInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ArchiveProjectV2ItemInput
        }
      }
    }
    readonly archiveRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'ArchiveRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ArchiveRepositoryInput
        }
      }
    }
    readonly cancelEnterpriseAdminInvitation: {
      readonly a: {
        readonly input: {
          readonly nt: 'CancelEnterpriseAdminInvitationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CancelEnterpriseAdminInvitationInput
        }
      }
    }
    readonly cancelEnterpriseMemberInvitation: {
      readonly a: {
        readonly input: {
          readonly nt: 'CancelEnterpriseMemberInvitationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CancelEnterpriseMemberInvitationInput
        }
      }
    }
    readonly cancelSponsorship: {
      readonly a: {
        readonly input: {
          readonly nt: 'CancelSponsorshipInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CancelSponsorshipInput
        }
      }
    }
    readonly changeUserStatus: {
      readonly a: {
        readonly input: {
          readonly nt: 'ChangeUserStatusInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ChangeUserStatusInput
        }
      }
    }
    readonly clearLabelsFromLabelable: {
      readonly a: {
        readonly input: {
          readonly nt: 'ClearLabelsFromLabelableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ClearLabelsFromLabelableInput
        }
      }
    }
    readonly clearProjectV2ItemFieldValue: {
      readonly a: {
        readonly input: {
          readonly nt: 'ClearProjectV2ItemFieldValueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ClearProjectV2ItemFieldValueInput
        }
      }
    }
    readonly cloneProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'CloneProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CloneProjectInput
        }
      }
    }
    readonly cloneTemplateRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'CloneTemplateRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CloneTemplateRepositoryInput
        }
      }
    }
    readonly closeDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'CloseDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CloseDiscussionInput
        }
      }
    }
    readonly closeIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'CloseIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CloseIssueInput
        }
      }
    }
    readonly closePullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'ClosePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ClosePullRequestInput
        }
      }
    }
    readonly convertProjectCardNoteToIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'ConvertProjectCardNoteToIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ConvertProjectCardNoteToIssueInput
        }
      }
    }
    readonly convertProjectV2DraftIssueItemToIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'ConvertProjectV2DraftIssueItemToIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ConvertProjectV2DraftIssueItemToIssueInput
        }
      }
    }
    readonly convertPullRequestToDraft: {
      readonly a: {
        readonly input: {
          readonly nt: 'ConvertPullRequestToDraftInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ConvertPullRequestToDraftInput
        }
      }
    }
    readonly copyProjectV2: {
      readonly a: {
        readonly input: {
          readonly nt: 'CopyProjectV2Input'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CopyProjectV2Input
        }
      }
    }
    readonly createAttributionInvitation: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateAttributionInvitationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateAttributionInvitationInput
        }
      }
    }
    readonly createBranchProtectionRule: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateBranchProtectionRuleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateBranchProtectionRuleInput
        }
      }
    }
    readonly createCheckRun: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateCheckRunInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateCheckRunInput
        }
      }
    }
    readonly createCheckSuite: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateCheckSuiteInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateCheckSuiteInput
        }
      }
    }
    readonly createCommitOnBranch: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateCommitOnBranchInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateCommitOnBranchInput
        }
      }
    }
    readonly createDeployment: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateDeploymentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateDeploymentInput
        }
      }
    }
    readonly createDeploymentStatus: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateDeploymentStatusInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateDeploymentStatusInput
        }
      }
    }
    readonly createDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateDiscussionInput
        }
      }
    }
    readonly createEnterpriseOrganization: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateEnterpriseOrganizationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateEnterpriseOrganizationInput
        }
      }
    }
    readonly createEnvironment: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateEnvironmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateEnvironmentInput
        }
      }
    }
    readonly createIpAllowListEntry: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateIpAllowListEntryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateIpAllowListEntryInput
        }
      }
    }
    readonly createIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateIssueInput
        }
      }
    }
    readonly createLabel: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateLabelInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateLabelInput
        }
      }
    }
    readonly createLinkedBranch: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateLinkedBranchInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateLinkedBranchInput
        }
      }
    }
    readonly createMigrationSource: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateMigrationSourceInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateMigrationSourceInput
        }
      }
    }
    readonly createProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateProjectInput
        }
      }
    }
    readonly createProjectV2: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateProjectV2Input'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateProjectV2Input
        }
      }
    }
    readonly createProjectV2Field: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateProjectV2FieldInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateProjectV2FieldInput
        }
      }
    }
    readonly createProjectV2StatusUpdate: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateProjectV2StatusUpdateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateProjectV2StatusUpdateInput
        }
      }
    }
    readonly createPullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreatePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreatePullRequestInput
        }
      }
    }
    readonly createRef: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateRefInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateRefInput
        }
      }
    }
    readonly createRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateRepositoryInput
        }
      }
    }
    readonly createRepositoryRuleset: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateRepositoryRulesetInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateRepositoryRulesetInput
        }
      }
    }
    readonly createSponsorsListing: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateSponsorsListingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateSponsorsListingInput
        }
      }
    }
    readonly createSponsorsTier: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateSponsorsTierInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateSponsorsTierInput
        }
      }
    }
    readonly createSponsorship: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateSponsorshipInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateSponsorshipInput
        }
      }
    }
    readonly createSponsorships: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateSponsorshipsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateSponsorshipsInput
        }
      }
    }
    readonly createTeamDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateTeamDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateTeamDiscussionInput
        }
      }
    }
    readonly createTeamDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateTeamDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateTeamDiscussionCommentInput
        }
      }
    }
    readonly createUserList: {
      readonly a: {
        readonly input: {
          readonly nt: 'CreateUserListInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.CreateUserListInput
        }
      }
    }
    readonly declineTopicSuggestion: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeclineTopicSuggestionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeclineTopicSuggestionInput
        }
      }
    }
    readonly deleteBranchProtectionRule: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteBranchProtectionRuleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteBranchProtectionRuleInput
        }
      }
    }
    readonly deleteDeployment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteDeploymentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteDeploymentInput
        }
      }
    }
    readonly deleteDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteDiscussionInput
        }
      }
    }
    readonly deleteDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteDiscussionCommentInput
        }
      }
    }
    readonly deleteEnvironment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteEnvironmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteEnvironmentInput
        }
      }
    }
    readonly deleteIpAllowListEntry: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteIpAllowListEntryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteIpAllowListEntryInput
        }
      }
    }
    readonly deleteIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteIssueInput
        }
      }
    }
    readonly deleteIssueComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteIssueCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteIssueCommentInput
        }
      }
    }
    readonly deleteLabel: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteLabelInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteLabelInput
        }
      }
    }
    readonly deleteLinkedBranch: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteLinkedBranchInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteLinkedBranchInput
        }
      }
    }
    readonly deletePackageVersion: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeletePackageVersionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeletePackageVersionInput
        }
      }
    }
    readonly deleteProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectInput
        }
      }
    }
    readonly deleteProjectCard: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectCardInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectCardInput
        }
      }
    }
    readonly deleteProjectColumn: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectColumnInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectColumnInput
        }
      }
    }
    readonly deleteProjectV2: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectV2Input'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectV2Input
        }
      }
    }
    readonly deleteProjectV2Field: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectV2FieldInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectV2FieldInput
        }
      }
    }
    readonly deleteProjectV2Item: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectV2ItemInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectV2ItemInput
        }
      }
    }
    readonly deleteProjectV2StatusUpdate: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectV2StatusUpdateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectV2StatusUpdateInput
        }
      }
    }
    readonly deleteProjectV2Workflow: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteProjectV2WorkflowInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteProjectV2WorkflowInput
        }
      }
    }
    readonly deletePullRequestReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeletePullRequestReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeletePullRequestReviewInput
        }
      }
    }
    readonly deletePullRequestReviewComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeletePullRequestReviewCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeletePullRequestReviewCommentInput
        }
      }
    }
    readonly deleteRef: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteRefInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteRefInput
        }
      }
    }
    readonly deleteRepositoryRuleset: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteRepositoryRulesetInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteRepositoryRulesetInput
        }
      }
    }
    readonly deleteTeamDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteTeamDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteTeamDiscussionInput
        }
      }
    }
    readonly deleteTeamDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteTeamDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteTeamDiscussionCommentInput
        }
      }
    }
    readonly deleteUserList: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteUserListInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteUserListInput
        }
      }
    }
    readonly deleteVerifiableDomain: {
      readonly a: {
        readonly input: {
          readonly nt: 'DeleteVerifiableDomainInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DeleteVerifiableDomainInput
        }
      }
    }
    readonly dequeuePullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'DequeuePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DequeuePullRequestInput
        }
      }
    }
    readonly disablePullRequestAutoMerge: {
      readonly a: {
        readonly input: {
          readonly nt: 'DisablePullRequestAutoMergeInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DisablePullRequestAutoMergeInput
        }
      }
    }
    readonly dismissPullRequestReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'DismissPullRequestReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DismissPullRequestReviewInput
        }
      }
    }
    readonly dismissRepositoryVulnerabilityAlert: {
      readonly a: {
        readonly input: {
          readonly nt: 'DismissRepositoryVulnerabilityAlertInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.DismissRepositoryVulnerabilityAlertInput
        }
      }
    }
    readonly enablePullRequestAutoMerge: {
      readonly a: {
        readonly input: {
          readonly nt: 'EnablePullRequestAutoMergeInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.EnablePullRequestAutoMergeInput
        }
      }
    }
    readonly enqueuePullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'EnqueuePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.EnqueuePullRequestInput
        }
      }
    }
    readonly followOrganization: {
      readonly a: {
        readonly input: {
          readonly nt: 'FollowOrganizationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.FollowOrganizationInput
        }
      }
    }
    readonly followUser: {
      readonly a: {
        readonly input: {
          readonly nt: 'FollowUserInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.FollowUserInput
        }
      }
    }
    readonly grantEnterpriseOrganizationsMigratorRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'GrantEnterpriseOrganizationsMigratorRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.GrantEnterpriseOrganizationsMigratorRoleInput
        }
      }
    }
    readonly grantMigratorRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'GrantMigratorRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.GrantMigratorRoleInput
        }
      }
    }
    readonly importProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'ImportProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ImportProjectInput
        }
      }
    }
    readonly inviteEnterpriseAdmin: {
      readonly a: {
        readonly input: {
          readonly nt: 'InviteEnterpriseAdminInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.InviteEnterpriseAdminInput
        }
      }
    }
    readonly inviteEnterpriseMember: {
      readonly a: {
        readonly input: {
          readonly nt: 'InviteEnterpriseMemberInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.InviteEnterpriseMemberInput
        }
      }
    }
    readonly linkProjectV2ToRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'LinkProjectV2ToRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.LinkProjectV2ToRepositoryInput
        }
      }
    }
    readonly linkProjectV2ToTeam: {
      readonly a: {
        readonly input: {
          readonly nt: 'LinkProjectV2ToTeamInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.LinkProjectV2ToTeamInput
        }
      }
    }
    readonly linkRepositoryToProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'LinkRepositoryToProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.LinkRepositoryToProjectInput
        }
      }
    }
    readonly lockLockable: {
      readonly a: {
        readonly input: {
          readonly nt: 'LockLockableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.LockLockableInput
        }
      }
    }
    readonly markDiscussionCommentAsAnswer: {
      readonly a: {
        readonly input: {
          readonly nt: 'MarkDiscussionCommentAsAnswerInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MarkDiscussionCommentAsAnswerInput
        }
      }
    }
    readonly markFileAsViewed: {
      readonly a: {
        readonly input: {
          readonly nt: 'MarkFileAsViewedInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MarkFileAsViewedInput
        }
      }
    }
    readonly markProjectV2AsTemplate: {
      readonly a: {
        readonly input: {
          readonly nt: 'MarkProjectV2AsTemplateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MarkProjectV2AsTemplateInput
        }
      }
    }
    readonly markPullRequestReadyForReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'MarkPullRequestReadyForReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MarkPullRequestReadyForReviewInput
        }
      }
    }
    readonly mergeBranch: {
      readonly a: {
        readonly input: {
          readonly nt: 'MergeBranchInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MergeBranchInput
        }
      }
    }
    readonly mergePullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'MergePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MergePullRequestInput
        }
      }
    }
    readonly minimizeComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'MinimizeCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MinimizeCommentInput
        }
      }
    }
    readonly moveProjectCard: {
      readonly a: {
        readonly input: {
          readonly nt: 'MoveProjectCardInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MoveProjectCardInput
        }
      }
    }
    readonly moveProjectColumn: {
      readonly a: {
        readonly input: {
          readonly nt: 'MoveProjectColumnInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.MoveProjectColumnInput
        }
      }
    }
    readonly pinEnvironment: {
      readonly a: {
        readonly input: {
          readonly nt: 'PinEnvironmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.PinEnvironmentInput
        }
      }
    }
    readonly pinIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'PinIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.PinIssueInput
        }
      }
    }
    readonly publishSponsorsTier: {
      readonly a: {
        readonly input: {
          readonly nt: 'PublishSponsorsTierInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.PublishSponsorsTierInput
        }
      }
    }
    readonly regenerateEnterpriseIdentityProviderRecoveryCodes: {
      readonly a: {
        readonly input: {
          readonly nt: 'RegenerateEnterpriseIdentityProviderRecoveryCodesInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RegenerateEnterpriseIdentityProviderRecoveryCodesInput
        }
      }
    }
    readonly regenerateVerifiableDomainToken: {
      readonly a: {
        readonly input: {
          readonly nt: 'RegenerateVerifiableDomainTokenInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RegenerateVerifiableDomainTokenInput
        }
      }
    }
    readonly rejectDeployments: {
      readonly a: {
        readonly input: {
          readonly nt: 'RejectDeploymentsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RejectDeploymentsInput
        }
      }
    }
    readonly removeAssigneesFromAssignable: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveAssigneesFromAssignableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveAssigneesFromAssignableInput
        }
      }
    }
    readonly removeEnterpriseAdmin: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveEnterpriseAdminInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveEnterpriseAdminInput
        }
      }
    }
    readonly removeEnterpriseIdentityProvider: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveEnterpriseIdentityProviderInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveEnterpriseIdentityProviderInput
        }
      }
    }
    readonly removeEnterpriseMember: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveEnterpriseMemberInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveEnterpriseMemberInput
        }
      }
    }
    readonly removeEnterpriseOrganization: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveEnterpriseOrganizationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveEnterpriseOrganizationInput
        }
      }
    }
    readonly removeEnterpriseSupportEntitlement: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveEnterpriseSupportEntitlementInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveEnterpriseSupportEntitlementInput
        }
      }
    }
    readonly removeLabelsFromLabelable: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveLabelsFromLabelableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveLabelsFromLabelableInput
        }
      }
    }
    readonly removeOutsideCollaborator: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveOutsideCollaboratorInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveOutsideCollaboratorInput
        }
      }
    }
    readonly removeReaction: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveReactionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveReactionInput
        }
      }
    }
    readonly removeStar: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveStarInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveStarInput
        }
      }
    }
    readonly removeSubIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveSubIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveSubIssueInput
        }
      }
    }
    readonly removeUpvote: {
      readonly a: {
        readonly input: {
          readonly nt: 'RemoveUpvoteInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RemoveUpvoteInput
        }
      }
    }
    readonly reopenDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'ReopenDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ReopenDiscussionInput
        }
      }
    }
    readonly reopenIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'ReopenIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ReopenIssueInput
        }
      }
    }
    readonly reopenPullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'ReopenPullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ReopenPullRequestInput
        }
      }
    }
    readonly reorderEnvironment: {
      readonly a: {
        readonly input: {
          readonly nt: 'ReorderEnvironmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ReorderEnvironmentInput
        }
      }
    }
    readonly reprioritizeSubIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'ReprioritizeSubIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ReprioritizeSubIssueInput
        }
      }
    }
    readonly requestReviews: {
      readonly a: {
        readonly input: {
          readonly nt: 'RequestReviewsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RequestReviewsInput
        }
      }
    }
    readonly rerequestCheckSuite: {
      readonly a: {
        readonly input: {
          readonly nt: 'RerequestCheckSuiteInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RerequestCheckSuiteInput
        }
      }
    }
    readonly resolveReviewThread: {
      readonly a: {
        readonly input: {
          readonly nt: 'ResolveReviewThreadInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.ResolveReviewThreadInput
        }
      }
    }
    readonly retireSponsorsTier: {
      readonly a: {
        readonly input: {
          readonly nt: 'RetireSponsorsTierInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RetireSponsorsTierInput
        }
      }
    }
    readonly revertPullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'RevertPullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RevertPullRequestInput
        }
      }
    }
    readonly revokeEnterpriseOrganizationsMigratorRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'RevokeEnterpriseOrganizationsMigratorRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RevokeEnterpriseOrganizationsMigratorRoleInput
        }
      }
    }
    readonly revokeMigratorRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'RevokeMigratorRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.RevokeMigratorRoleInput
        }
      }
    }
    readonly setEnterpriseIdentityProvider: {
      readonly a: {
        readonly input: {
          readonly nt: 'SetEnterpriseIdentityProviderInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SetEnterpriseIdentityProviderInput
        }
      }
    }
    readonly setOrganizationInteractionLimit: {
      readonly a: {
        readonly input: {
          readonly nt: 'SetOrganizationInteractionLimitInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SetOrganizationInteractionLimitInput
        }
      }
    }
    readonly setRepositoryInteractionLimit: {
      readonly a: {
        readonly input: {
          readonly nt: 'SetRepositoryInteractionLimitInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SetRepositoryInteractionLimitInput
        }
      }
    }
    readonly setUserInteractionLimit: {
      readonly a: {
        readonly input: {
          readonly nt: 'SetUserInteractionLimitInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SetUserInteractionLimitInput
        }
      }
    }
    readonly startOrganizationMigration: {
      readonly a: {
        readonly input: {
          readonly nt: 'StartOrganizationMigrationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.StartOrganizationMigrationInput
        }
      }
    }
    readonly startRepositoryMigration: {
      readonly a: {
        readonly input: {
          readonly nt: 'StartRepositoryMigrationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.StartRepositoryMigrationInput
        }
      }
    }
    readonly submitPullRequestReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'SubmitPullRequestReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.SubmitPullRequestReviewInput
        }
      }
    }
    readonly transferEnterpriseOrganization: {
      readonly a: {
        readonly input: {
          readonly nt: 'TransferEnterpriseOrganizationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.TransferEnterpriseOrganizationInput
        }
      }
    }
    readonly transferIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'TransferIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.TransferIssueInput
        }
      }
    }
    readonly unarchiveProjectV2Item: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnarchiveProjectV2ItemInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnarchiveProjectV2ItemInput
        }
      }
    }
    readonly unarchiveRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnarchiveRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnarchiveRepositoryInput
        }
      }
    }
    readonly unfollowOrganization: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnfollowOrganizationInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnfollowOrganizationInput
        }
      }
    }
    readonly unfollowUser: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnfollowUserInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnfollowUserInput
        }
      }
    }
    readonly unlinkProjectV2FromRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnlinkProjectV2FromRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnlinkProjectV2FromRepositoryInput
        }
      }
    }
    readonly unlinkProjectV2FromTeam: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnlinkProjectV2FromTeamInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnlinkProjectV2FromTeamInput
        }
      }
    }
    readonly unlinkRepositoryFromProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnlinkRepositoryFromProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnlinkRepositoryFromProjectInput
        }
      }
    }
    readonly unlockLockable: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnlockLockableInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnlockLockableInput
        }
      }
    }
    readonly unmarkDiscussionCommentAsAnswer: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnmarkDiscussionCommentAsAnswerInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnmarkDiscussionCommentAsAnswerInput
        }
      }
    }
    readonly unmarkFileAsViewed: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnmarkFileAsViewedInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnmarkFileAsViewedInput
        }
      }
    }
    readonly unmarkIssueAsDuplicate: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnmarkIssueAsDuplicateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnmarkIssueAsDuplicateInput
        }
      }
    }
    readonly unmarkProjectV2AsTemplate: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnmarkProjectV2AsTemplateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnmarkProjectV2AsTemplateInput
        }
      }
    }
    readonly unminimizeComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnminimizeCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnminimizeCommentInput
        }
      }
    }
    readonly unpinIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnpinIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnpinIssueInput
        }
      }
    }
    readonly unresolveReviewThread: {
      readonly a: {
        readonly input: {
          readonly nt: 'UnresolveReviewThreadInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UnresolveReviewThreadInput
        }
      }
    }
    readonly updateBranchProtectionRule: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateBranchProtectionRuleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateBranchProtectionRuleInput
        }
      }
    }
    readonly updateCheckRun: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateCheckRunInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateCheckRunInput
        }
      }
    }
    readonly updateCheckSuitePreferences: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateCheckSuitePreferencesInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateCheckSuitePreferencesInput
        }
      }
    }
    readonly updateDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateDiscussionInput
        }
      }
    }
    readonly updateDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateDiscussionCommentInput
        }
      }
    }
    readonly updateEnterpriseAdministratorRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseAdministratorRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseAdministratorRoleInput
        }
      }
    }
    readonly updateEnterpriseAllowPrivateRepositoryForkingSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput
        }
      }
    }
    readonly updateEnterpriseDefaultRepositoryPermissionSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseDefaultRepositoryPermissionSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseDefaultRepositoryPermissionSettingInput
        }
      }
    }
    readonly updateEnterpriseDeployKeySetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseDeployKeySettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseDeployKeySettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanCreateRepositoriesSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanDeleteIssuesSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanDeleteIssuesSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanDeleteIssuesSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanDeleteRepositoriesSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanInviteCollaboratorsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanMakePurchasesSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanMakePurchasesSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanMakePurchasesSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanUpdateProtectedBranchesSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
        }
      }
    }
    readonly updateEnterpriseMembersCanViewDependencyInsightsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
        }
      }
    }
    readonly updateEnterpriseOrganizationProjectsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseOrganizationProjectsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseOrganizationProjectsSettingInput
        }
      }
    }
    readonly updateEnterpriseOwnerOrganizationRole: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseOwnerOrganizationRoleInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseOwnerOrganizationRoleInput
        }
      }
    }
    readonly updateEnterpriseProfile: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseProfileInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseProfileInput
        }
      }
    }
    readonly updateEnterpriseRepositoryProjectsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseRepositoryProjectsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseRepositoryProjectsSettingInput
        }
      }
    }
    readonly updateEnterpriseTeamDiscussionsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseTeamDiscussionsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseTeamDiscussionsSettingInput
        }
      }
    }
    readonly updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput
        }
      }
    }
    readonly updateEnterpriseTwoFactorAuthenticationRequiredSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
        }
      }
    }
    readonly updateEnvironment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateEnvironmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateEnvironmentInput
        }
      }
    }
    readonly updateIpAllowListEnabledSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateIpAllowListEnabledSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateIpAllowListEnabledSettingInput
        }
      }
    }
    readonly updateIpAllowListEntry: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateIpAllowListEntryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateIpAllowListEntryInput
        }
      }
    }
    readonly updateIpAllowListForInstalledAppsEnabledSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateIpAllowListForInstalledAppsEnabledSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateIpAllowListForInstalledAppsEnabledSettingInput
        }
      }
    }
    readonly updateIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateIssueInput
        }
      }
    }
    readonly updateIssueComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateIssueCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateIssueCommentInput
        }
      }
    }
    readonly updateLabel: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateLabelInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateLabelInput
        }
      }
    }
    readonly updateNotificationRestrictionSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateNotificationRestrictionSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateNotificationRestrictionSettingInput
        }
      }
    }
    readonly updateOrganizationAllowPrivateRepositoryForkingSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateOrganizationAllowPrivateRepositoryForkingSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateOrganizationAllowPrivateRepositoryForkingSettingInput
        }
      }
    }
    readonly updateOrganizationWebCommitSignoffSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateOrganizationWebCommitSignoffSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateOrganizationWebCommitSignoffSettingInput
        }
      }
    }
    readonly updatePatreonSponsorability: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdatePatreonSponsorabilityInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdatePatreonSponsorabilityInput
        }
      }
    }
    readonly updateProject: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectInput
        }
      }
    }
    readonly updateProjectCard: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectCardInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectCardInput
        }
      }
    }
    readonly updateProjectColumn: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectColumnInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectColumnInput
        }
      }
    }
    readonly updateProjectV2: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2Input'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2Input
        }
      }
    }
    readonly updateProjectV2Collaborators: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2CollaboratorsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2CollaboratorsInput
        }
      }
    }
    readonly updateProjectV2DraftIssue: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2DraftIssueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2DraftIssueInput
        }
      }
    }
    readonly updateProjectV2Field: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2FieldInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2FieldInput
        }
      }
    }
    readonly updateProjectV2ItemFieldValue: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2ItemFieldValueInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2ItemFieldValueInput
        }
      }
    }
    readonly updateProjectV2ItemPosition: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2ItemPositionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2ItemPositionInput
        }
      }
    }
    readonly updateProjectV2StatusUpdate: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateProjectV2StatusUpdateInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateProjectV2StatusUpdateInput
        }
      }
    }
    readonly updatePullRequest: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdatePullRequestInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdatePullRequestInput
        }
      }
    }
    readonly updatePullRequestBranch: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdatePullRequestBranchInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdatePullRequestBranchInput
        }
      }
    }
    readonly updatePullRequestReview: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdatePullRequestReviewInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdatePullRequestReviewInput
        }
      }
    }
    readonly updatePullRequestReviewComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdatePullRequestReviewCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdatePullRequestReviewCommentInput
        }
      }
    }
    readonly updateRef: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateRefInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateRefInput
        }
      }
    }
    readonly updateRefs: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateRefsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateRefsInput
        }
      }
    }
    readonly updateRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateRepositoryInput
        }
      }
    }
    readonly updateRepositoryRuleset: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateRepositoryRulesetInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateRepositoryRulesetInput
        }
      }
    }
    readonly updateRepositoryWebCommitSignoffSetting: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateRepositoryWebCommitSignoffSettingInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateRepositoryWebCommitSignoffSettingInput
        }
      }
    }
    readonly updateSponsorshipPreferences: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateSponsorshipPreferencesInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateSponsorshipPreferencesInput
        }
      }
    }
    readonly updateSubscription: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateSubscriptionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateSubscriptionInput
        }
      }
    }
    readonly updateTeamDiscussion: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateTeamDiscussionInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateTeamDiscussionInput
        }
      }
    }
    readonly updateTeamDiscussionComment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateTeamDiscussionCommentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateTeamDiscussionCommentInput
        }
      }
    }
    readonly updateTeamReviewAssignment: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateTeamReviewAssignmentInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateTeamReviewAssignmentInput
        }
      }
    }
    readonly updateTeamsRepository: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateTeamsRepositoryInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateTeamsRepositoryInput
        }
      }
    }
    readonly updateTopics: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateTopicsInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateTopicsInput
        }
      }
    }
    readonly updateUserList: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateUserListInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateUserListInput
        }
      }
    }
    readonly updateUserListsForItem: {
      readonly a: {
        readonly input: {
          readonly nt: 'UpdateUserListsForItemInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.UpdateUserListsForItemInput
        }
      }
    }
    readonly verifyVerifiableDomain: {
      readonly a: {
        readonly input: {
          readonly nt: 'VerifyVerifiableDomainInput'
          readonly it: readonly [1]
          readonly $t: TypeInputsIndex.VerifyVerifiableDomainInput
        }
      }
    }
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

export type ArgumentsMap = {
  query: Query
  mutation: Mutation
}

export const StandardRootTypeNameEnum = {
  Query: `Query`,
  Mutation: `Mutation`,
  Subscription: `Subscription`,
} as const

export namespace StandardRootTypeName {
  export type Query = typeof StandardRootTypeNameEnum.Query
  export type Mutation = typeof StandardRootTypeNameEnum.Mutation
  export type Subscription = typeof StandardRootTypeNameEnum.Subscription
}

export type StandardRootTypeName =
  | StandardRootTypeName.Query
  | StandardRootTypeName.Mutation
  | StandardRootTypeName.Subscription

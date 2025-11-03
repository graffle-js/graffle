import { type GraphQLArgument, isNonNullType } from 'graphql'

export const analyzeNullability = (args: readonly GraphQLArgument[]) => {
  let required = 0
  let optional = 0
  const total = args.length

  args.forEach(_ => {
    if (isNonNullType(_.type)) {
      required++
    } else {
      optional++
    }
  })
  return {
    hasAny: total > 0,
    isAllNullable: optional === total,
    required,
    optional,
    total,
  }
}

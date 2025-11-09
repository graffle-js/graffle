/**
 * Minimal stub for LSP compatibility.
 *
 * @see https://github.com/0no-co/GraphQLSP/blob/main/packages/graphqlsp/src/ast/checks.ts#L20
 */
export interface GraphQLStringDocumentFnProperties<
  $Name extends string = string,
  $Scalar extends any = any,
  $Persisted extends any = any,
> {
  /**
   * LSP detection property - identifies the schema name for multi-schema support.
   *
   * This property is used by GraphQLSP LSP in multi-schema mode to determine which
   * schema to use for validation and autocomplete. When multiple schemas are configured
   * in tsconfig.json, the LSP extracts this value to look up the appropriate schema.
   *
   * @see https://github.com/0no-co/GraphQLSP/blob/main/packages/graphqlsp/src/ast/checks.ts#L100-L124
   */
  readonly __name: $Name
  /**
   * LSP detection property - validates scalar/enum values against schema types.
   *
   * This property is required by GraphQLSP LSP to identify this as a gql function.
   * The LSP checks for the existence of both `scalar` and `persisted` properties.
   *
   * @see https://github.com/0no-co/GraphQLSP/blob/main/packages/graphqlsp/src/ast/checks.ts#L19-L32
   */
  scalar: $Scalar
  /**
   * LSP detection property - creates persisted document nodes.
   *
   * This property is required by GraphQLSP LSP to identify this as a gql function.
   * The LSP checks for the existence of both `scalar` and `persisted` properties.
   *
   * @see https://github.com/0no-co/GraphQLSP/blob/main/packages/graphqlsp/src/ast/checks.ts#L19-L32
   */
  persisted: $Persisted
}

import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * Filter for strings containing this substring.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.StringFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.String}
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.StringFilter}
 */
export interface contains {
  kind: "InputField";
  name: "contains";
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * Filter for strings matching any value in this list.
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.String}[] |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Docs} |
 * | **Parent** | {@link $Schema.StringFilter} |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 *
 * Type: {@link $Schema.String}[]
 *
 * Kind: `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | Official Documentation}
 *
 * Parent: {@link $Schema.StringFilter}
 */
interface $in {
  kind: "InputField";
  name: "in";
  inlineType: [0, [1]];
  namedType: $Schema.String;
}
export { type $in as in };

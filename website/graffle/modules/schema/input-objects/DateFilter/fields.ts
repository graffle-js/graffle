import type { Schema as $Schema } from "../../$.js";

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * The minimum date (greater than or equal to).
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Date}
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.DateFilter}
 */
export interface gte {
  kind: "InputField";
  name: "gte";
  inlineType: [0];
  namedType: $Schema.Date;
}

/**
 * GraphQL Input Field ↗ {@link https://graphql.org/learn/schema/#input-types | Official Documentation}
 *
 * The maximum date (less than or equal to).
 *
 * | Property | Value |
 * | -------- | ----- |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Docs} |
 * | **Parent** | {@link $Schema.DateFilter} |
 * | **Nullability** | Optional |
 *
 * Type: {@link $Schema.Date}
 *
 * Kind: `ScalarCustom` ↗ {@link https://graphql.org/graphql-js/type/#graphqlscalartype | Official Documentation}
 *
 * Parent: {@link $Schema.DateFilter}
 */
export interface lte {
  kind: "InputField";
  name: "lte";
  inlineType: [0];
  namedType: $Schema.Date;
}

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * Enum documentation.
 *
 * **Members:**
 * - `A`
 * - `B` - Enum B member documentation.
 * - `C`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 3 |
 */
export interface ABCEnum {
  kind: 'Enum'
  name: 'ABCEnum'
  members:
    | ABCEnum.A
    | ABCEnum.B
    | ABCEnum.C
}

export namespace ABCEnum {
  /**
   * @deprecated Enum value A is deprecated.
   */
  export type A = 'A'
  /**
   * Enum B member documentation.
   */
  export type B = 'B'
  /**
   * @deprecated Enum value C is deprecated.
   */
  export type C = 'C'
}

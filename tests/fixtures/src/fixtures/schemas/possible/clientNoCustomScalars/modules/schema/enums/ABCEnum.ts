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
  members: ['A', 'B', 'C']
  membersUnion:
    | 'A'
    | 'B'
    | 'C'
}

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `bug`
 * - `electric`
 * - `fire`
 * - `grass`
 * - `water`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 5 |
 */
export interface PokemonType {
  kind: 'Enum'
  name: 'PokemonType'
  members: ['bug', 'electric', 'fire', 'grass', 'water']
  membersUnion:
    | 'bug'
    | 'electric'
    | 'fire'
    | 'grass'
    | 'water'
}

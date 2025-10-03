/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * The elemental type of a Pokemon.
 *
 * **Members:**
 * - `bug` - Bug-type Pokemon are insects and arthropods.
 * - `electric` - Electric-type Pokemon can generate and control electricity.
 * - `fire` - Fire-type Pokemon can create and manipulate flames.
 * - `grass` - Grass-type Pokemon have plant-like characteristics.
 * - `water` - Water-type Pokemon live in or control water.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
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

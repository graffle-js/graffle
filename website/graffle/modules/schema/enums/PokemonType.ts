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
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 5 |
 */
export interface PokemonType {
  kind: 'Enum'
  name: 'PokemonType'
  members:
    | PokemonType.bug
    | PokemonType.electric
    | PokemonType.fire
    | PokemonType.grass
    | PokemonType.water
}

export namespace PokemonType {
  /**
   * Bug-type Pokemon are insects and arthropods.
   */
  export type bug = 'bug'
  /**
   * Electric-type Pokemon can generate and control electricity.
   */
  export type electric = 'electric'
  /**
   * Fire-type Pokemon can create and manipulate flames.
   */
  export type fire = 'fire'
  /**
   * Grass-type Pokemon have plant-like characteristics.
   */
  export type grass = 'grass'
  /**
   * Water-type Pokemon live in or control water.
   */
  export type water = 'water'
}

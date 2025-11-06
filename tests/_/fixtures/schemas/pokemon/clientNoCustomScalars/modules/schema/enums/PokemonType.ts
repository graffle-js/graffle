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
  members:
    | PokemonType.bug
    | PokemonType.electric
    | PokemonType.fire
    | PokemonType.grass
    | PokemonType.water
}

export namespace PokemonType {
  export type bug = 'bug'
  export type electric = 'electric'
  export type fire = 'fire'
  export type grass = 'grass'
  export type water = 'water'
}

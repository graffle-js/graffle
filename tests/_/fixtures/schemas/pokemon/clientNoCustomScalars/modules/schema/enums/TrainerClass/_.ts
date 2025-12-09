import type * as $Members from './members.js'

export * as TrainerClass from './members.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * **Members:**
 * - `bugCatcher`
 * - `camper`
 * - `picnicker`
 * - `psychic`
 * - `psychicMedium`
 * - `psychicYoungster`
 * - `sailor`
 * - `superNerd`
 * - `tamer`
 * - `teamRocketGrunt`
 * - `triathlete`
 * - `youngster`
 * - `youth`
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Members** | 13 |
 */
export interface TrainerClass {
  kind: 'Enum'
  name: 'TrainerClass'
  members:
    | $Members.bugCatcher
    | $Members.camper
    | $Members.picnicker
    | $Members.psychic
    | $Members.psychicMedium
    | $Members.psychicYoungster
    | $Members.sailor
    | $Members.superNerd
    | $Members.tamer
    | $Members.teamRocketGrunt
    | $Members.triathlete
    | $Members.youngster
    | $Members.youth
}

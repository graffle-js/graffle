import type * as $Members from './members.js'

export * as TrainerClass from './members.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
 *
 * The class or specialty of a Pokemon trainer.
 *
 * **Members:**
 * - `bugCatcher` - A trainer who specializes in Bug-type Pokemon.
 * - `camper` - A trainer who enjoys camping and outdoor activities.
 * - `picnicker` - A trainer who enjoys picnics and nature.
 * - `psychic` - A trainer with psychic abilities.
 * - `psychicMedium` - A psychic trainer who serves as a spiritual medium.
 * - `psychicYoungster` - A young trainer with developing psychic powers.
 * - `sailor` - A trainer who works on ships and the sea.
 * - `superNerd` - A highly intelligent trainer focused on science and technology.
 * - `tamer` - A trainer who specializes in taming and befriending Pokemon.
 * - `teamRocketGrunt` - A member of the villainous Team Rocket organization.
 * - `triathlete` - A trainer who excels in multiple types of competitions.
 * - `youngster` - A young, inexperienced trainer just starting their journey.
 * - `youth` - A young trainer with enthusiasm but limited experience.
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

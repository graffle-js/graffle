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
    | TrainerClass.bugCatcher
    | TrainerClass.camper
    | TrainerClass.picnicker
    | TrainerClass.psychic
    | TrainerClass.psychicMedium
    | TrainerClass.psychicYoungster
    | TrainerClass.sailor
    | TrainerClass.superNerd
    | TrainerClass.tamer
    | TrainerClass.teamRocketGrunt
    | TrainerClass.triathlete
    | TrainerClass.youngster
    | TrainerClass.youth
}

export namespace TrainerClass {
  export type bugCatcher = 'bugCatcher'
  export type camper = 'camper'
  export type picnicker = 'picnicker'
  export type psychic = 'psychic'
  export type psychicMedium = 'psychicMedium'
  export type psychicYoungster = 'psychicYoungster'
  export type sailor = 'sailor'
  export type superNerd = 'superNerd'
  export type tamer = 'tamer'
  export type teamRocketGrunt = 'teamRocketGrunt'
  export type triathlete = 'triathlete'
  export type youngster = 'youngster'
  export type youth = 'youth'
}

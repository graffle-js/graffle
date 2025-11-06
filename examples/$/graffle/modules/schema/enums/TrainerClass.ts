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
  /**
   * A trainer who specializes in Bug-type Pokemon.
   */
  export type bugCatcher = 'bugCatcher'
  /**
   * A trainer who enjoys camping and outdoor activities.
   */
  export type camper = 'camper'
  /**
   * A trainer who enjoys picnics and nature.
   */
  export type picnicker = 'picnicker'
  /**
   * A trainer with psychic abilities.
   */
  export type psychic = 'psychic'
  /**
   * A psychic trainer who serves as a spiritual medium.
   */
  export type psychicMedium = 'psychicMedium'
  /**
   * A young trainer with developing psychic powers.
   */
  export type psychicYoungster = 'psychicYoungster'
  /**
   * A trainer who works on ships and the sea.
   */
  export type sailor = 'sailor'
  /**
   * A highly intelligent trainer focused on science and technology.
   */
  export type superNerd = 'superNerd'
  /**
   * A trainer who specializes in taming and befriending Pokemon.
   */
  export type tamer = 'tamer'
  /**
   * A member of the villainous Team Rocket organization.
   */
  export type teamRocketGrunt = 'teamRocketGrunt'
  /**
   * A trainer who excels in multiple types of competitions.
   */
  export type triathlete = 'triathlete'
  /**
   * A young, inexperienced trainer just starting their journey.
   */
  export type youngster = 'youngster'
  /**
   * A young trainer with enthusiasm but limited experience.
   */
  export type youth = 'youth'
}

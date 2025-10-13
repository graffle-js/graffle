import type { Schema as $Schema } from '../$.js'
import type { BattleRoyale } from '../objects/BattleRoyale/$.js'
import type { BattleTrainer } from '../objects/BattleTrainer/$.js'
import type { BattleWild } from '../objects/BattleWild/$.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * Represents any kind of battle that can occur in the Pokemon world.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 3 |
 * | **Types** | {@link $Schema.BattleRoyale}, {@link $Schema.BattleTrainer}, {@link $Schema.BattleWild} |
 */
export interface Battle {
  kind: 'Union'
  name: 'Battle'
  members: [BattleRoyale, BattleTrainer, BattleWild]
  membersUnion:
    | BattleRoyale
    | BattleTrainer
    | BattleWild
  membersIndex: {
    BattleRoyale: BattleRoyale
    BattleTrainer: BattleTrainer
    BattleWild: BattleWild
  }
}

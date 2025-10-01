import type { BattleRoyale } from '../objects/BattleRoyale/$.js'
import type { BattleTrainer } from '../objects/BattleTrainer/$.js'
import type { BattleWild } from '../objects/BattleWild/$.js'

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

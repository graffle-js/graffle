import type { BattleRoyale } from "../objects/BattleRoyale/$.js";
import type { BattleTrainer } from "../objects/BattleTrainer/$.js";
import type { BattleWild } from "../objects/BattleWild/$.js";

/**
 * Represents any kind of battle that can occur in the Pokemon world.
 */
export interface Battle {
  kind: "Union";
  name: "Battle";
  members: [BattleRoyale, BattleTrainer, BattleWild];
  membersUnion:
    | BattleRoyale
    | BattleTrainer
    | BattleWild;
  membersIndex: {
    BattleRoyale: BattleRoyale;
    BattleTrainer: BattleTrainer;
    BattleWild: BattleWild;
  };
}

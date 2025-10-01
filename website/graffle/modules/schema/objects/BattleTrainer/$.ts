import type * as $Fields from "./fields.js";

export * as BattleTrainer from "./fields.js";

export interface BattleTrainer {
  kind: "Object";
  name: "BattleTrainer";
  fields: {
    __typename: $Fields.__typename;
    combatant1: $Fields.combatant1;
    combatant2: $Fields.combatant2;
    date: $Fields.date;
    id: $Fields.id;
    winner: $Fields.winner;
  };
}

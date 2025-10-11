import type { Name } from './data.js'

export type introspection_types = {
  'Query': {
    kind: 'OBJECT'
    name: 'Query'
    fields: {
      'battles': {
        name: 'battles'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'UNION'; name: 'Battle'; ofType: null } }
          }
        }
      }
      'beings': {
        name: 'beings'
        type: {
          kind: 'NON_NULL'
          name: never
          ofType: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INTERFACE'; name: 'Being'; ofType: null } }
          }
        }
      }
      'pokemonByName': {
        name: 'pokemonByName'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
        }
      }
      'pokemons': {
        name: 'pokemons'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
        }
      }
      'trainerByName': { name: 'trainerByName'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
      'trainers': {
        name: 'trainers'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
        }
      }
    }
  }
  'Mutation': {
    kind: 'OBJECT'
    name: 'Mutation'
    fields: {
      'addPokemon': { name: 'addPokemon'; type: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
    }
  }
  'BattleRoyale': {
    kind: 'OBJECT'
    name: 'BattleRoyale'
    fields: {
      'combatants': {
        name: 'combatants'
        type: {
          kind: 'LIST'
          name: never
          ofType: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'CombatantMultiPokemon'; ofType: null }
          }
        }
      }
      'date': { name: 'date'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'winner': { name: 'winner'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
    }
  }
  'BattleTrainer': {
    kind: 'OBJECT'
    name: 'BattleTrainer'
    fields: {
      'combatant1': { name: 'combatant1'; type: { kind: 'OBJECT'; name: 'CombatantSinglePokemon'; ofType: null } }
      'combatant2': { name: 'combatant2'; type: { kind: 'OBJECT'; name: 'CombatantSinglePokemon'; ofType: null } }
      'date': { name: 'date'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'winner': { name: 'winner'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
    }
  }
  'BattleWild': {
    kind: 'OBJECT'
    name: 'BattleWild'
    fields: {
      'date': { name: 'date'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'pokemon': { name: 'pokemon'; type: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
      'result': { name: 'result'; type: { kind: 'ENUM'; name: 'BattleWildResult'; ofType: null } }
      'trainer': { name: 'trainer'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
      'wildPokemons': {
        name: 'wildPokemons'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
        }
      }
    }
  }
  'CombatantMultiPokemon': {
    kind: 'OBJECT'
    name: 'CombatantMultiPokemon'
    fields: {
      'pokemons': {
        name: 'pokemons'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
        }
      }
      'trainer': { name: 'trainer'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
    }
  }
  'CombatantSinglePokemon': {
    kind: 'OBJECT'
    name: 'CombatantSinglePokemon'
    fields: {
      'pokemon': { name: 'pokemon'; type: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
      'trainer': { name: 'trainer'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
    }
  }
  'Patron': {
    kind: 'OBJECT'
    name: 'Patron'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'money': { name: 'money'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
    }
  }
  'Pokemon': {
    kind: 'OBJECT'
    name: 'Pokemon'
    fields: {
      'attack': {
        name: 'attack'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      }
      'birthday': {
        name: 'birthday'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Date'; ofType: null } }
      }
      'defense': {
        name: 'defense'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      }
      'hp': {
        name: 'hp'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null } }
      }
      'id': {
        name: 'id'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      }
      'name': {
        name: 'name'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      }
      'trainer': { name: 'trainer'; type: { kind: 'OBJECT'; name: 'Trainer'; ofType: null } }
      'type': {
        name: 'type'
        type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'PokemonType'; ofType: null } }
      }
    }
  }
  'Trainer': {
    kind: 'OBJECT'
    name: 'Trainer'
    fields: {
      'class': { name: 'class'; type: { kind: 'ENUM'; name: 'TrainerClass'; ofType: null } }
      'fans': {
        name: 'fans'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Patron'; ofType: null } }
        }
      }
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
      'pokemon': {
        name: 'pokemon'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null } }
        }
      }
    }
  }
  'Being': {
    kind: 'INTERFACE'
    name: 'Being'
    fields: {
      'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null } }
      'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null } }
    }
    possibleTypes: 'Patron' | 'Pokemon' | 'Trainer'
  }
  'Battle': {
    kind: 'UNION'
    name: 'Battle'
    fields: {}
    possibleTypes: 'BattleRoyale' | 'BattleTrainer' | 'BattleWild'
  }
  'BattleWildResult': {
    name: 'BattleWildResult'
    enumValues: 'pokemonsCaptured' | 'pokemonsDefeated' | 'trainerDefeated'
  }
  'PokemonType': { name: 'PokemonType'; enumValues: 'bug' | 'electric' | 'fire' | 'grass' | 'water' }
  'TrainerClass': {
    name: 'TrainerClass'
    enumValues:
      | 'bugCatcher'
      | 'camper'
      | 'picnicker'
      | 'psychic'
      | 'psychicMedium'
      | 'psychicYoungster'
      | 'sailor'
      | 'superNerd'
      | 'tamer'
      | 'teamRocketGrunt'
      | 'triathlete'
      | 'youngster'
      | 'youth'
  }
  'DateFilter': {
    kind: 'INPUT_OBJECT'
    name: 'DateFilter'
    isOneOf: false
    inputFields: [
      { name: 'gte'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null }; defaultValue: null },
      { name: 'lte'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null }; defaultValue: null },
    ]
  }
  'PokemonFilter': {
    kind: 'INPUT_OBJECT'
    name: 'PokemonFilter'
    isOneOf: false
    inputFields: [
      { name: 'birthday'; type: { kind: 'INPUT_OBJECT'; name: 'DateFilter'; ofType: null }; defaultValue: null },
      { name: 'name'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null }; defaultValue: null },
      { name: 'type'; type: { kind: 'ENUM'; name: 'PokemonType'; ofType: null }; defaultValue: null },
    ]
  }
  'StringFilter': {
    kind: 'INPUT_OBJECT'
    name: 'StringFilter'
    isOneOf: false
    inputFields: [
      { name: 'contains'; type: { kind: 'SCALAR'; name: 'String'; ofType: null }; defaultValue: null },
      {
        name: 'in'
        type: {
          kind: 'LIST'
          name: never
          ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
        }
        defaultValue: null
      },
    ]
  }
  'Date': unknown
  'Float': unknown
  'ID': unknown
  'String': unknown
  'Int': unknown
  'Boolean': unknown
}

export type introspection = {
  name: Name
  query: 'Query'
  mutation: 'Mutation'
  subscription: never
  types: introspection_types
}

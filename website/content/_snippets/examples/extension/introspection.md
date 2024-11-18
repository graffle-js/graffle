<div class="ExampleSnippet">
<a href="../../examples/extension/introspection">Introspection</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Introspection } from 'graffle/extensions/introspection'
import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create().use(Introspection())

const data = await pokemon.introspect()
console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  __schema: {
    description: null,
    queryType: { name: 'Query' },
    mutationType: { name: 'Mutation' },
    subscriptionType: null,
    types: [
      {
        kind: 'UNION',
        name: 'Battle',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: [
          { kind: 'OBJECT', name: 'BattleRoyale', ofType: null },
          { kind: 'OBJECT', name: 'BattleTrainer', ofType: null },
          { kind: 'OBJECT', name: 'BattleWild', ofType: null }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'BattleRoyale',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'combatants',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'CombatantMultiPokemon',
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'date',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'Float', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'winner',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'BattleTrainer',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'combatant1',
            description: null,
            args: [],
            type: {
              kind: 'OBJECT',
              name: 'CombatantSinglePokemon',
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'combatant2',
            description: null,
            args: [],
            type: {
              kind: 'OBJECT',
              name: 'CombatantSinglePokemon',
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'date',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'Float', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'winner',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'BattleWild',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'date',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'Float', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'pokemon',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Pokemon', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'result',
            description: null,
            args: [],
            type: { kind: 'ENUM', name: 'BattleWildResult', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainer',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'wildPokemons',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Pokemon', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'ENUM',
        name: 'BattleWildResult',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'pokemonsCaptured',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'pokemonsDefeated',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainerDefeated',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: 'INTERFACE',
        name: 'Being',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: [
          { kind: 'OBJECT', name: 'Patron', ofType: null },
          { kind: 'OBJECT', name: 'Pokemon', ofType: null },
          { kind: 'OBJECT', name: 'Trainer', ofType: null }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'Boolean',
        description: 'The `Boolean` scalar type represents `true` or `false`.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'CombatantMultiPokemon',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'pokemons',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Pokemon', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainer',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'CombatantSinglePokemon',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'pokemon',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Pokemon', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainer',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'SCALAR',
        name: 'Date',
        description: 'A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'DateFilter',
        description: null,
        specifiedByURL: null,
        isOneOf: false,
        fields: null,
        inputFields: [
          {
            name: 'gte',
            description: null,
            type: { kind: 'SCALAR', name: 'Date', ofType: null },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'lte',
            description: null,
            type: { kind: 'SCALAR', name: 'Date', ofType: null },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'SCALAR',
        name: 'Float',
        description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'SCALAR',
        name: 'ID',
        description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'SCALAR',
        name: 'Int',
        description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'addPokemon',
            description: null,
            args: [
              {
                name: 'attack',
                description: null,
                type: { kind: 'SCALAR', name: 'Int', ofType: null },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              },
              {
                name: 'defense',
                description: null,
                type: { kind: 'SCALAR', name: 'Int', ofType: null },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              },
              {
                name: 'hp',
                description: null,
                type: { kind: 'SCALAR', name: 'Int', ofType: null },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              },
              {
                name: 'name',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'SCALAR', name: 'String', ofType: null }
                },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              },
              {
                name: 'type',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'ENUM', name: 'PokemonType', ofType: null }
                },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: { kind: 'OBJECT', name: 'Pokemon', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'Patron',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'money',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'Int', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [ { kind: 'INTERFACE', name: 'Being', ofType: null } ],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'Pokemon',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'attack',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Int', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'birthday',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Date', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'defense',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Int', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'hp',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Int', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'ID', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainer',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'type',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'ENUM', name: 'PokemonType', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [ { kind: 'INTERFACE', name: 'Being', ofType: null } ],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'PokemonFilter',
        description: null,
        specifiedByURL: null,
        isOneOf: false,
        fields: null,
        inputFields: [
          {
            name: 'birthday',
            description: null,
            type: { kind: 'INPUT_OBJECT', name: 'DateFilter', ofType: null },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringFilter',
              ofType: null
            },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'type',
            description: null,
            type: { kind: 'ENUM', name: 'PokemonType', ofType: null },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'ENUM',
        name: 'PokemonType',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'bug',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'electric',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'fire',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'grass',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'water',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'battles',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'UNION', name: 'Battle', ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'beings',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'INTERFACE', name: 'Being', ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'pokemonByName',
            description: null,
            args: [
              {
                name: 'name',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'SCALAR', name: 'String', ofType: null }
                },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Pokemon', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'pokemons',
            description: null,
            args: [
              {
                name: 'filter',
                description: null,
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'PokemonFilter',
                  ofType: null
                },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Pokemon', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainerByName',
            description: null,
            args: [
              {
                name: 'name',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'SCALAR', name: 'String', ofType: null }
                },
                defaultValue: null,
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: { kind: 'OBJECT', name: 'Trainer', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'trainers',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Trainer', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'SCALAR',
        name: 'String',
        description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'StringFilter',
        description: null,
        specifiedByURL: null,
        isOneOf: false,
        fields: null,
        inputFields: [
          {
            name: 'contains',
            description: null,
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'in',
            description: null,
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'SCALAR', name: 'String', ofType: null }
              }
            },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: 'Trainer',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'class',
            description: null,
            args: [],
            type: { kind: 'ENUM', name: 'TrainerClass', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'fans',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Patron', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'ID', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'pokemon',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: 'Pokemon', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [ { kind: 'INTERFACE', name: 'Being', ofType: null } ],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'ENUM',
        name: 'TrainerClass',
        description: null,
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'bugCatcher',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'camper',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'picnicker',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'psychic',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'psychicMedium',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'psychicYoungster',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'sailor',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'superNerd',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'tamer',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'teamRocketGrunt',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'triathlete',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'youngster',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'youth',
            description: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__Directive',
        description: 'A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n' +
          '\n' +
          "In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'isRepeatable',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'locations',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'ENUM',
                    name: '__DirectiveLocation',
                    ofType: null
                  }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'args',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
                defaultValue: 'false',
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null
                  }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'ENUM',
        name: '__DirectiveLocation',
        description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'QUERY',
            description: 'Location adjacent to a query operation.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'MUTATION',
            description: 'Location adjacent to a mutation operation.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'SUBSCRIPTION',
            description: 'Location adjacent to a subscription operation.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'FIELD',
            description: 'Location adjacent to a field.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'FRAGMENT_DEFINITION',
            description: 'Location adjacent to a fragment definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'FRAGMENT_SPREAD',
            description: 'Location adjacent to a fragment spread.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INLINE_FRAGMENT',
            description: 'Location adjacent to an inline fragment.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'VARIABLE_DEFINITION',
            description: 'Location adjacent to a variable definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'SCHEMA',
            description: 'Location adjacent to a schema definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'SCALAR',
            description: 'Location adjacent to a scalar definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'OBJECT',
            description: 'Location adjacent to an object type definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'FIELD_DEFINITION',
            description: 'Location adjacent to a field definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'ARGUMENT_DEFINITION',
            description: 'Location adjacent to an argument definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INTERFACE',
            description: 'Location adjacent to an interface definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'UNION',
            description: 'Location adjacent to a union definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'ENUM',
            description: 'Location adjacent to an enum definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'ENUM_VALUE',
            description: 'Location adjacent to an enum value definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INPUT_OBJECT',
            description: 'Location adjacent to an input object type definition.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INPUT_FIELD_DEFINITION',
            description: 'Location adjacent to an input object field definition.',
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__EnumValue',
        description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__Field',
        description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'args',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
                defaultValue: 'false',
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null
                  }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'type',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__InputValue',
        description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'type',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'defaultValue',
            description: 'A GraphQL-formatted string representing the default value for this input value.',
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__Schema',
        description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'types',
            description: 'A list of all types supported by this server.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'queryType',
            description: 'The type that query operations will be rooted at.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'mutationType',
            description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
            args: [],
            type: { kind: 'OBJECT', name: '__Type', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'subscriptionType',
            description: 'If this server support subscription, the type that subscription operations will be rooted at.',
            args: [],
            type: { kind: 'OBJECT', name: '__Type', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'directives',
            description: 'A list of all directives supported by this server.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: { kind: 'OBJECT', name: '__Directive', ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'OBJECT',
        name: '__Type',
        description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n' +
          '\n' +
          'Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
        specifiedByURL: null,
        isOneOf: null,
        fields: [
          {
            name: 'kind',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'ENUM', name: '__TypeKind', ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'specifiedByURL',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'fields',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
                defaultValue: 'false',
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: '__Field', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'interfaces',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'possibleTypes',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: '__Type', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'enumValues',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
                defaultValue: 'false',
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: '__EnumValue', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'inputFields',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
                defaultValue: 'false',
                isDeprecated: false,
                deprecationReason: null
              }
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: { kind: 'OBJECT', name: '__InputValue', ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'ofType',
            description: null,
            args: [],
            type: { kind: 'OBJECT', name: '__Type', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'isOneOf',
            description: null,
            args: [],
            type: { kind: 'SCALAR', name: 'Boolean', ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: 'ENUM',
        name: '__TypeKind',
        description: 'An enum describing what kind of type a given `__Type` is.',
        specifiedByURL: null,
        isOneOf: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'SCALAR',
            description: 'Indicates this type is a scalar.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'OBJECT',
            description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INTERFACE',
            description: 'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'UNION',
            description: 'Indicates this type is a union. `possibleTypes` is a valid field.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'ENUM',
            description: 'Indicates this type is an enum. `enumValues` is a valid field.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'INPUT_OBJECT',
            description: 'Indicates this type is an input object. `inputFields` is a valid field.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'LIST',
            description: 'Indicates this type is a list. `ofType` is a valid field.',
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: 'NON_NULL',
            description: 'Indicates this type is a non-null. `ofType` is a valid field.',
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      }
    ],
    directives: [
      {
        name: 'deprecated',
        description: 'Marks an element of a GraphQL schema as no longer supported.',
        isRepeatable: false,
        locations: [
          'ARGUMENT_DEFINITION',
          'ENUM_VALUE',
          'FIELD_DEFINITION',
          'INPUT_FIELD_DEFINITION'
        ],
        args: [
          {
            name: 'reason',
            description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
            type: { kind: 'SCALAR', name: 'String', ofType: null },
            defaultValue: '"No longer supported"',
            isDeprecated: false,
            deprecationReason: null
          }
        ]
      },
      {
        name: 'include',
        description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
        isRepeatable: false,
        locations: [ 'FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT' ],
        args: [
          {
            name: 'if',
            description: 'Included when true.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ]
      },
      {
        name: 'oneOf',
        description: 'Indicates exactly one field must be supplied and this field must not be `null`.',
        isRepeatable: false,
        locations: [ 'INPUT_OBJECT' ],
        args: []
      },
      {
        name: 'skip',
        description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
        isRepeatable: false,
        locations: [ 'FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT' ],
        args: [
          {
            name: 'if',
            description: 'Skipped when true.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'Boolean', ofType: null }
            },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ]
      },
      {
        name: 'specifiedBy',
        description: 'Exposes a URL that specifies the behavior of this scalar.',
        isRepeatable: false,
        locations: [ 'SCALAR' ],
        args: [
          {
            name: 'url',
            description: 'The URL that specifies the behavior of this scalar.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: { kind: 'SCALAR', name: 'String', ofType: null }
            },
            defaultValue: null,
            isDeprecated: false,
            deprecationReason: null
          }
        ]
      }
    ]
  }
}
```
<!-- dprint-ignore-end -->

</div>

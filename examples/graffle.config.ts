import { Generator } from 'graffle/generator'

export default Generator.configure({
  schema: {
    type: 'sdl',
    sdl: '../tests/_/fixtures/schemas/pokemon/schema.graphql',
  },
  outputDirPath: './$/graffle',
  defaultSchemaUrl: 'http://localhost:3000/graphql',
  methodsOrganization: {
    logical: true, // Keep query/mutation organization
    domains: {
      rules: [
        // Pokemon domain
        { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
        { pattern: 'pokemons', path: 'pokemon', methodName: 'list' },
        { pattern: 'addPokemon', path: 'pokemon', methodName: 'create' },

        // Trainer domain
        { pattern: 'trainerByName', path: 'trainer', methodName: 'findByName' },
        { pattern: 'trainers', path: 'trainer', methodName: 'list' },

        // Battle domain
        { pattern: 'battles', path: 'battle', methodName: 'list' },

        // Being domain (polymorphic)
        { pattern: 'beings', path: 'being', methodName: 'list' },
      ],
    },
  },
})

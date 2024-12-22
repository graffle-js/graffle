<div class="ExampleSnippet">
<a href="../../examples/type_level/10-selection-sets">10 Selection Sets</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

type _ = [
  //
  // ========================
  // Primary TypeScript Types
  // ========================
  //
  //
  // 1. GraphQL Types
  //    --------------
  //    The SelectionSets namespace contains a TypeScript type for each GraphQL type.
  //
  Graffle.SelectionSets.Query,
  Graffle.SelectionSets.Mutation,
  Graffle.SelectionSets.Battle,
  // ...
  //
  //    Each type contains the selection set for that type.
  //
  Graffle.SelectionSets.Query['pokemons'],
  Graffle.SelectionSets.Query['trainers'],
  Graffle.SelectionSets.Mutation['addPokemon'],
  Graffle.SelectionSets.Battle['___on_BattleRoyale'],

  // 2. GraphQL Type Fields
  //    -------------------
  //    Each name is also overloaded with a namespace. Within it, you will find more TypeScript types.
  //    One per selection set field in the respective GraphQL type.
  //
  Graffle.SelectionSets.Query.pokemons,
  Graffle.SelectionSets.Query.trainers,
  Graffle.SelectionSets.Mutation.addPokemon,
  // ...
  //
  //    Each GraphQL type field type has properties about the selection set set for that field.
  //
  Graffle.SelectionSets.Query.pokemons['$'],
  Graffle.SelectionSets.Query.trainers['$skip'],
  Graffle.SelectionSets.Mutation.addPokemon['id'],
  // ...
  //
  //    You may have already noticed but there is a relationship between these two things:
  // 	  - The GraphQL Type type properties
  //    - The GraphQL Type Field types.
  //
  //    Use the kind of type that suites your use case.
  //
  Graffle.SelectionSets.Query['pokemons'],
  Graffle.SelectionSets.Query.pokemons,
  //
  // 3. TypeScript Types for Arguments
  //    ------------------------------
  //    There are type definitions for GraphQL Type Field Arguments
  //
  Graffle.SelectionSets.Query.pokemons$Arguments,
  Graffle.SelectionSets.Query.trainerByName$Arguments,
  Graffle.SelectionSets.Mutation.addPokemon$Arguments,
  // ...
  //
  //
  // ======================
  // Niche TypeScript Types
  // ======================
  //
  //
  // 4. "Expanded" Variants
  //    -------------------
  //    You will find various type definitions with the suffix `$Expanded`.
  //    From a type-checking point of view they are identical to their non-expanded form.
  //    They differ in how they will be displayed in tooling, namely IDEs.
  //    You can leverage them to improve DX in your use-cases.
  //    For more details, refer to their JSDoc.
  //
  Graffle.SelectionSets.Query.pokemons$Expanded,
  Graffle.SelectionSets.Mutation.addPokemon$Expanded,
  // ...
  //
  // 5. Inline Fragments
  //    ----------------
  //
  Graffle.SelectionSets.Query$FragmentInline,
  Graffle.SelectionSets.Battle$FragmentInline,
  // ...
  //
  // 6. Selection Sets Sans Union with Indicators
  //    -----------------------------------------
  //    If the GraphQL field is a non-scalar OR scalar-with-arguments, then its type will be synonymous
  //    with its explicit selection set type. For example:
  //
  Graffle.SelectionSets.Query.beings,
  Graffle.SelectionSets.Query.beings$SelectionSet,
  //    However, if the GraphQL field IS a scalar-without-arguments, then its type will become an
  //    indicator unioned with the "meta" selection set (meaning stuff like field directives).
  //
  //    Meanwhile, the explicit selection set type will _only_ have those meta things, not the
  //    indicator. For example:
  //
  Graffle.SelectionSets.Pokemon.name,
  Graffle.SelectionSets.Pokemon.name$SelectionSet,
]

const graffle = Graffle.create()

const getPokemonsLike = async (filter: Graffle.SelectionSets.Query.pokemons$Arguments['filter']) =>
  graffle.query.pokemons({
    $: { filter },
    hp: true,
    name: true,
  })

// todo add test coverage for $ stripping on arguments.
const pokemons = await getPokemonsLike({ $type: `water` })

// We don't lose any type safety. :)
console.log(pokemons)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```json
[
  {
    "hp": 44,
    "name": "Squirtle"
  }
]
```
<!-- dprint-ignore-end -->

</div>

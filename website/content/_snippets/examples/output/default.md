<div class="ExampleSnippet">
<a href="../../examples/output/default">Default</a>

<!-- dprint-ignore-start -->
```ts twoslash
const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })

console.log(pokemons)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
[
  { name: 'Pikachu' },
  { name: 'Charizard' },
  { name: 'Squirtle' },
  { name: 'Bulbasaur' },
  { name: 'Caterpie' },
  { name: 'Weedle' }
]
```
<!-- dprint-ignore-end -->

</div>

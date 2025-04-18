<div class="ExampleSnippet">
<a href="../../examples/document-builder/interface">Interface</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const beings = await pokemon.query.beings({
  __typename: true,
  id: true,
  name: true,
  ___on_Patron: {
//^^^^^^^^^^^^
    money: true,
  },
  ___on_Trainer: {
//^^^^^^^^^^^^^
    class: true,
  },
  ___on_Pokemon: {
//^^^^^^^^^^^^^
    type: true,
  },
})

// The following contrived switch console.logs how the returned type is a discriminated union.
// After checking the __typename, the type is known to be one of the three possible types
// and TypeScript narrows accordingly.

for (const being of beings) {
  console.log(being.name)
  switch (being.__typename) {
    case `Patron`:
      console.log(being.money)
      break
    case `Trainer`:
      console.log(being.class)
      break
    case `Pokemon`:
      console.log(being.type)
      break
  }
}
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
Sally
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
1080000
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Dylan
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
3530000
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Ash
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
youth
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Misty
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
teamRocketGrunt
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Brock
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
youth
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Gary
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
youth
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Pikachu
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
electric
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Charizard
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
fire
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Squirtle
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
water
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Bulbasaur
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
grass
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Caterpie
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
bug
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
Weedle
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
bug
```
<!-- dprint-ignore-end -->

</div>

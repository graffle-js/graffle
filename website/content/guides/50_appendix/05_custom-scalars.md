# Custom Scalars

<!--@include: @/_snippets/example-links/custom-scalar.md-->

Graffle makes sending and receiving GraphQL custom scalars easy at both type and term (runtime) levels.

## Getting Started

This feature requires use of the [Schema Driven Data Map](./terminology.md#schema-driven-data-map).

> [!NOTE] Why?
> The role of the SDDM here is to have knowledge of all the places in the schema that custom scalars are used. This allows runtime logic to know _which_ arguments to encode and _which_ result fields to decode. Note that the SDDM itself does not possess information about _how_ to execute encoding or decoding for each respective custom scalar! That functionality comes from a registry of scalars that you supply at runtime.
>
> In sum, Graffle _combines_ the SDDM with your registered scalars to achieve the overall goal of custom scalar support.

You get that by running the Graffle generator.

```sh
pnpm graffle generate --schema ...
```

Then you augment your Graffle instance with the SDDM, and finally register your scalars:

```ts
import { schemaMap } from './graffle/__.js'

const graffle = Graffle
  .create({
    schema: '...',
    schemaMap,
  })
  .scalar(`Date`, {
    decode: (value) => new globalThis.Date(value),
    encode: (value) => value.toISOString(),
  })
```

## Generator Support

You can give the Graffle generator access to your scalar definitions. This is slightly more complex but in turn provides a few benefits. These are:

1. _In general_ the generator is able to better optimize the types that it generates. For example various type parameters are able to be stripped out. This improves TypeScript performance and aids in better readability of inferred types. In practice Graffle already tries hard to maintain type performance and readable inferred types so consider this more of a passive bonus than a game changer.

2. Certain statically exported features of the Graffle generator can only know about custom scalars this way. That is, you get features that immediately know about the custom scalars because they've been registered for you behind the scenes by the generator. This feature set is currently small and likely only of intersect to you if you are using the [Document Builder](./04_document_builder.md). The features are:

   - The [Select utility](../35_document-builder/40_Select.md).

   Note that these features are always available to you after generation, but with knowledge of your custom scalars, their types in the above features will be correct, rather than always just `string`.

### Steps

1. Create a module that exports your scalar definitions. The export names MUST match exactly the scalar name in the schema. By default the generator will look for `./scalars.ts`. A scalars module for the above [getting started](#getting-started) would look like this:

   ```ts
   // @filename: scalars.ts
   import { Graffle } from 'graffle'

   export const Date = Graffle.Scalar.create(`Date`, {
     decode: (value) => new globalThis.Date(value),
     encode: (value) => value.toISOString(),
   })
   ```

2. Update your client configuration. There are technically multiple approaches here but we recommend the first.

   - **Recommended**: Take advantage of the generated constructor which has some properties prefilled for you. We are able to omit registering the custom scalars as well as passing the schema map.

     ```ts
     import { Graffle } from './graffle/__.js'

     const graffle = Graffle.create({ schema: '...' })
     ```

   - Technically you can also keep it as it was before. Just import your scalar definitions now instead of having them inline:

     ```ts
     import { schemaDrivenDataMap as schemaMap } from './graffle/__.js'
     import { Date } from './scalars.js'

     const graffle = Graffle
       .create({
         schema: '...',
         schemaMap,
       })
       .scalar(Date)
     ```
   - Technically you could do nothing to your initial configuration. While not DRY it will work.

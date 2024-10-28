---
title: Getting Started
---

# Getting Started

This short guide will take you from basic usage to use of the optional document builder. Node is used but Deno and Bun users should be able to follow along as well.

## 🏡 Setup Your Project

If you don't already have a project, create one:

```sh
pnpm init
```

<!-- TODO use formatter to make generated code readable -->

We're going to use TypeScript for this project but you don't have to.

- [`tsx`](https://github.com/privatenumber/tsx) makes it to easy run TypeScript files.
- [`@tsconfig/strictest`](https://github.com/tsconfig/bases/blob/main/bases/strictest.json) is optional but makes sure we have a good default settings.

```sh
pnpm add --save-dev typescript tsx @tsconfig/strictest
```

```sh
touch tsconfig.json main.ts
```

```json tsconfig.json
{
  "extends": "@tsconfig/strictest/tsconfig.json",
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16"
  }
}
```

## 📦 Install Graffle

Graffle has a peer dependency on `graphql` so you will need to install that too.

```sh
pnpm add graffle graphql
```

## 💀 Verify Project Configuration

Graffle is an [ESM only package built around package `exports`](https://github.com/graffle-js/graffle/discussions/863). This imposes a few requirements on your project configuration.

1. Your `package.json` must set `type` to `module`.
2. If you are using TypeScript your `tsconfig.json` must set `module` and `moduleResolution` to `Node16` or `Bundler`. Otherwise TypeScript will not be able to find the types when you attempt to import entrypoints from `graffle`.
3. If you are using React Native you need to [do this](https://reactnative.dev/blog/2023/06/21/package-exports-support#enabling-package-exports-beta).

## 🚀 Send Your First Document

Now you're ready to send your first GraphQL document. We'll use a publicly available GraphQL API (Thanks [Trevor](https://trevorblades.com)!). Create a Graffle instance and then use it to send a document.

```ts twoslash
// @filename: main.ts

import { Graffle } from 'graffle'

const graffle = Graffle.create({
  schema: 'https://countries.trevorblades.com/graphql',
})

const data = await graffle.gql`
  query myQuery ($filter: [String!]) {
    countries (filter: { name: { in: $filter } }) {
      name
      continent {
        name
      }
    }
  }
`
  .send({ filter: [`Canada`, `Germany`, `Japan`] })

console.log(data)
//          ^?
```

```json
{
  "countries": [
    { "name": "Canada", "continent": { "name": "North America" } },
    { "name": "Germany", "continent": { "name": "Europe" } },
    { "name": "Japan", "continent": { "name": "Asia" } }
  ]
}
```

## 🧙 Meet Document Builder

You could stop here if you want, but if you're curious about Graffle's document builder (aka. "query builder") continue on!

The document builder is an alternative to the GraphQL document syntax. With it, you express GraphQL documents in JavaScript. And thanks to Graffle's powerful types all inputs (GraphQL arguments) and outputs (execution results) are type safe ✨.

To access the document builder you must first perform a code generation step. When you installed `graffle` you also gained access to a command line interface (CLI) in your project. Use it to generate code that will augment your client.

```sh
pnpm graffle --schema https://countries.trevorblades.com/graphql
```

You will see a directory named `graffle` has been created in the current working directory. The generated code within augments a global TypeScript type that Graffle's static code knows about. The result is the illusion of new client methods available to you but in reality its actually just a Proxy instance that was there all along, dynamically receiving all the property requests. In other words you have just generated some code but nothing about the _runtime_ has actually changed. Feel free to poke around at the files. Notice how the vast majority is just types (we can ignore the runtime parts for now).

```
|
|- graffle/
|  |- ...
|
```

Let's rewrite our code to use the document builder. You should notice some new methods in your IDE like `.document` and `.query.countries`.

```ts
// todo twoslash
// @filename: main.ts

import { Graffle } from 'graffle'

const graffle = Graffle.create({
  schema: 'https://countries.trevorblades.com/graphql',
})

const data = await graffle.document({
  query: {
    myQuery: {
      countries: {
        $: { filter: { name: { in: [`Canada`, `Germany`, `Japan`] } } },
        name: true,
        continent: {
          name: true,
        },
      },
    },
  },
}).send()

console.log(data)
//          ^?
```

```json
{
  "countries": [
    { "name": "Canada", "continent": { "name": "North America" } },
    { "name": "Germany", "continent": { "name": "Europe" } },
    { "name": "Japan", "continent": { "name": "Asia" } }
  ]
}
```

## 🧹 Simplify With Root Fields

The `.document` method is 1:1 with the GraphQL document syntax in regards to what it can express. Graffle also gives you dedicated methods for each root field (fields on `Query`, `Mutation`, and `Subscription`) which can be simpler depending on your use-case. Let's refactor our code with it.

```ts
// ...

const data = await graffle.document.query.countries({
  $: { filter: { name: { in: [`Canada`, `Germany`, `Japan`] } } },
  name: true,
  continent: {
    name: true,
  },
})

// ...
```

## 🧰 Utilities

Graffle gives you utilities beyond the direct client itself. For example you can build up reusable selection sets:

::: code-group

```ts twoslash [Graffle Namespace]
import { Graffle } from './graffle/__.js'

const ContinentSelection = Graffle.Select.Continent({ name: true })
```

```ts twoslash [Barrel Import]
import { Select } from './graffle/_.js'

const ContinentSelection = Select.Continent({ name: true })
```

:::

You can also do the same thing at the type level which can sometimes be handy when you want to define data types based on selection sets.

::: code-group

```ts twoslash [Graffle Namespace]
import { type Graffle } from './graffle/__.js'

type Continent = Graffle.Select.Continent<{ name: true }>
```

```ts twoslash [Barrel Import]
import { type Select } from './graffle/_.js'

type Continent = Select.Continent<{ name: true }>
```

:::

## 🏔️ Conclusion

Hopefully you found this introduction has been useful. Graffle has a lot more to offer than shown so far such as extensions, anyware, custom scalar support, how every GraphQL query language feature is realized in the document builder, and more. Peruse these docs to learn about it all.

Thanks for taking time to learn Graffle. Let us know how your experience goes as your begin to build with it!

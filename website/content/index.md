---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: Graffle
  text: Simple GraphQL Client for JavaScript
  tagline: Minimal. Extensible. Type Safe. Runs everywhere.
  actions:
    - theme: brand
      text: Guides
      link: /guides
    - theme: alt
      text: Examples
      link: /examples
    - theme: alt
      text: Extensions
      link: /extensions

  image:
    src: /_assets/logo-dark-squared.png
    alt: Graffle
features:
  # Row 1
  - title: Spec Compliant
    details: Graffle complies with the <a href="https://graphql.github.io/graphql-over-http">GraphQL over HTTP</a> and <a href="https://github.com/jaydenseric/graphql-multipart-request-spec">GraphQL Multipart Request</a> specifications.
    icon: 🎫
  - title: Extensible
    details: Powerful type-safe extension system. Intercept and manipulate inputs, outputs, and core with hooks; Add new methods; And more.
    icon: 🧰
  - title: Ecosystem
    details: Meet real-world project needs with extensions for common and niche needs like OpenTelemetry, file uploads, schema errors, and more.
    icon: 📦
  - title: Multi-Transport
    details: Not just a great way to query GraphQL APIs. Execute documents against in-memory schemas just as easily with the same interface.
    icon: 🚛
  # Row 2
  - title: Custom Scalars
    details: Easily add client-side codecs for custom scalars in the schema to enable automatic encoding of arguments and decoding of data on every request.
    icon: 🧙
  - title: Document Builder
    details: Optional TypeScript alternative to GQL syntax for building type-safe documents including tailored methods for root fields, batch method for multiple root fields, and a document method for 1:1 with GraphQL.
    icon: 🪵
  - title: Type Safe Results <br/><span style="opacity:0.25;">( Document Builder )</span>
    details: Automatically inferred type safe results based on your document's structure including selection sets, aliases, directives, inline fragments, unions, and more.
    icon: ⛑️
  - title: Schema Errors<br/><span style="opacity:0.25;">( Extension )</span>
    details: First class support for schemas that have modelled errors into their design. Result Fields can be made to throw on errors or automatically map to error classes.
    icon: 🎲
  # Row 3
  - title: Static Document Builder
    details: Generate typed GraphQL documents at compile-time without a client instance. Perfect for passing to other GraphQL clients or building tools. Zero runtime overhead.
    icon: 📄
  - title: Output Modes
    details: Control error handling patterns with envelope mode (wrap results), return-error mode (errors as values), or throw mode. Configure globally or per-request.
    icon: 📮
  - title: Type-Safe Native GraphQL Syntax
    details: Full type inference for GraphQL documents using standard GraphQL syntax. Write queries and mutations with complete IDE autocomplete and type safety alongside the document builder.
    icon: 🎭
---

::: warning Pre-Release Software
Graffle is [still in development](https://github.com/graffle-js/graffle/discussions/1163). Install with `npm install graffle@next graphql` to use the latest pre-release version.
:::

## Quick Start

```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create()
  .transport({ url: 'https://countries.trevorblades.com/graphql' })

const data = await graffle.gql`
  query {
    countries(filter: { name: { in: ["Canada", "Germany", "Japan"] } }) {
      name
      capital
      emoji
    }
  }
`.send()

console.log(data)
//          ^?
```

## Why Choose Graffle?

Graffle combines the **simplicity of graphql-request** with **powerful type safety** and **extensibility**.

**Choose Graffle if you want:**

- **Full Type Safety** — Complete type inference with optional Document Builder
- **Flexibility** — Start simple, progressively adopt type-safe features
- **Extensibility** — Powerful extension system (OpenTelemetry, schema errors, custom scalars)
- **Multi-Transport** — Execute against HTTP or in-memory schemas

**Consider UI-specialized clients if:**

- Building React/Vue/Svelte apps needing deep framework integration ([Apollo Client](https://www.apollographql.com/docs/react/), [Urql](https://commerce.nearform.com/open-source/urql/), [Relay](https://relay.dev/))

[Read the detailed comparison →](/guides/appendix/comparison)

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/jasonkuhrt.png',
    name: 'Jason Kuhrt',
    title: 'Creator',
    desc: 'Creator of Graffle, Molt, Paka, and Nexus. Former @prisma. Building tools for GraphQL and TypeScript ecosystems.',
    sponsor: 'https://github.com/sponsors/jasonkuhrt',
    links: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle fill="none" cx="12" cy="12" r="10"/><path fill="none" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>' }, link: 'https://kuhrt.me' },
      { icon: 'github', link: 'https://github.com/jasonkuhrt' },
      { icon: 'twitter', link: 'https://twitter.com/jasonkuhrt' },
    ]
  },
]
</script>

<style>
/* Constrain width of content sections for better readability */
.VPHome .vp-doc {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Improve spacing for content sections */
.VPHome .vp-doc h2 {
  margin-top: 48px;
  margin-bottom: 24px;
}

.VPHome .vp-doc p {
  margin-bottom: 16px;
  line-height: 1.7;
}

/* Better list formatting */
.VPHome .vp-doc ul {
  margin-bottom: 24px;
  padding-left: 24px;
}

.VPHome .vp-doc li {
  margin-bottom: 12px;
  line-height: 1.7;
}

/* Code blocks */
.VPHome .vp-doc div[class*='language-'] {
  margin: 28px 0;
}

/* Warning box */
.VPHome .vp-doc .warning {
  margin: 32px 0;
}

/* Custom sections container */
.CustomSections {
  max-width: 960px;
  margin: 48px auto 0;
  padding: 0 24px;
}

/* Team members styling */
.CustomSections .VPTeamMembers {
  margin-top: 0;
}

.CustomSections .VPTeamMembers .container {
  max-width: 600px !important;
  margin: 0 auto;
}

.CustomSections .VPTeamMembers.small .container {
  grid-template-columns: 1fr !important;
}

/* Better team member card styling */
.CustomSections .VPTeamMember {
  padding: 24px !important;
}

.CustomSections .VPTeamMember .profile {
  margin-bottom: 16px;
}

.CustomSections .VPTeamMember .desc {
  line-height: 1.6;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive adjustments */
@media (min-width: 767px) and (max-width: 1023px) {
  .VPHome .vp-doc {
    max-width: 720px;
  }

  .CustomSections {
    max-width: 720px;
  }
}

@media (max-width: 767px) {
  .VPHome .vp-doc {
    padding: 0 20px;
  }

  .CustomSections {
    padding: 0 20px;
    margin-top: 32px;
  }

  .CustomSections .VPTeamMembers .container {
    max-width: 100% !important;
  }
}
</style>

<section class="CustomSections">

<VPTeamMembers size="small" :members="members" />

</section>

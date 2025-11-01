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
    details: Generate typed GraphQL documents statically without a client instance. Perfect for passing to other GraphQL clients or building tools. Zero runtime overhead.
    icon: 📄
  - title: Output Modes
    details: Control error handling patterns with envelope mode (wrap results), return-error mode (errors as values), or throw mode. Configure globally or per-request.
    icon: 📮
  - title: Type-Safe Native GraphQL Syntax
    details: Full type inference for GraphQL documents using standard GraphQL syntax. Write queries and mutations with complete IDE autocomplete and type safety alongside the document builder.
    icon: 🎭
---

<div class="sponsors-section">
  <div class="sponsors-container">
    <p class="sponsors-label">Sponsors ❤️</p>
    <div class="sponsors-grid">
      <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer" class="sponsor-item">
        <div class="sponsor-card">
          <img src="/_assets/sponsors/lambdatest-logo.png" alt="LambdaTest" class="sponsor-logo">
        </div>
      </a>
      <a href="https://github.com/sponsors/jasonkuhrt" target="_blank" rel="noopener noreferrer" class="sponsor-item sponsor-cta">
        <div class="sponsor-card sponsor-card-cta">
          <div class="sponsor-cta-content">
            <span class="sponsor-cta-text">Become a sponsor</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

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

<div class="why-choose">

<div class="why-column">

### Reasons to use

- **Full Type Safety** — Inference for GraphQL syntax, optional generation for Document Builder
- **Flexibility** — Start simple, progressively adopt type-safe features
- **Extensibility** — Powerful extension system (OpenTelemetry, schema errors, custom scalars)
- **Multi-Transport** — Execute against HTTP or in-memory schemas

</div>

<div class="why-column">

### Reasons to not use

- Building React/Vue/Svelte apps needing deep framework integration ([Apollo Client](https://www.apollographql.com/docs/react/), [Urql](https://commerce.nearform.com/open-source/urql/), [Relay](https://relay.dev/))

[Read the detailed comparison →](/guides/appendix/comparison)

</div>

</div>

<div class="feature-showcase">

<div class="feature-row">
  <div class="feature-text">
    <h3>Document Builder</h3>
    <p>Optional generated TypeScript API for building type-safe queries. Get full IntelliSense and static type safety with a native TypeScript interface instead of GraphQL strings.</p>
    <div class="feature-links">
      <a href="/guides/generation/document-builder">Learn more</a>
      <a href="https://github.com/graffle-js/graffle/blob/main/examples/55_document-builder/document-builder_root-field.ts">Full example</a>
    </div>
  </div>
  <div class="feature-code">

```ts
const pokemons = await graffle.query.pokemons({
  $: { filter: { name: { in: ['Pikachu', 'Charizard'] } } },
  name: true,
  hp: true,
})
```

</div>
</div>

<div class="feature-row feature-row-reverse">
  <div class="feature-text">
    <h3>GraphQL Strings with Type Inference</h3>
    <p>Use standard GraphQL syntax with full type inference. Write queries as strings and get complete type safety for variables and results without any code generation.</p>
    <div class="feature-links">
      <a href="/guides/core/requests">Learn more</a>
      <a href="https://github.com/graffle-js/graffle/blob/main/examples/30_gql/gql_gql-string_gql-typed__gql-string-typed.ts">Full example</a>
    </div>
  </div>
  <div class="feature-code">

```ts
const data = await graffle.gql(`
  query pokemonByName($name: String!) {
    pokemonByName(name: $name) {
      name
      hp
    }
  }
`).pokemonByName({ name: 'Pikachu' })
```

</div>
</div>

<div class="feature-row">
  <div class="feature-text">
    <h3>Powerful Extensions</h3>
    <p>Compose middleware to add observability, file uploads, schema errors, and more. Build your own extensions with a clean, type-safe API.</p>
    <div class="feature-links">
      <a href="/guides/advanced/extension-authoring">Learn more</a>
    </div>
  </div>
  <div class="feature-code">

```ts
const graffle = Graffle
  .create()
  .use(OpenTelemetry())
  .use(SchemaErrors)

const data = await graffle.query.pokemons({ name: true })
```

</div>
</div>

<div class="feature-row feature-row-reverse">
  <div class="feature-text">
    <h3>Custom Scalars</h3>
    <p>Register codecs for custom scalars and Graffle automatically encodes arguments and decodes results. Works seamlessly with dates, big integers, or any custom type.</p>
    <div class="feature-links">
      <a href="/guides/core/custom-scalars">Learn more</a>
      <a href="https://github.com/graffle-js/graffle/blob/main/examples/35_custom-scalar/custom-scalar.ts">Full example</a>
    </div>
  </div>
  <div class="feature-code">

```ts
const graffle = Graffle.create().scalar('Date', {
  decode: (value: string) => new Date(value),
  encode: (value: Date) => value.toISOString(),
})

const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date('1987-01-13') } } },
  birthday: true, // JavaScript Date
})
```

</div>
</div>

</div>

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
/* Sponsors section */
.sponsors-section {
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 24px;
}

.sponsors-container {
  background: none;
  border-radius: 16px;
  padding: 48px 32px;
  text-align: center;
  border: none;
  box-shadow: none;
}

.sponsors-label {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px 0;
  opacity: 0.7;
}

.sponsors-grid {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  flex-wrap: wrap;
}

.sponsor-item {
  text-decoration: none !important;
  display: flex;
  transition: transform 0.3s ease;
}

.sponsor-item:hover {
  transform: scale(1.02);
  text-decoration: none !important;
}

.sponsor-item:hover .sponsor-name,
.sponsor-item:hover .sponsor-tagline {
  text-decoration: none !important;
}

.sponsor-card {
  background: var(--vp-c-bg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  min-width: 240px;
  flex: 1;
}

.sponsor-item:hover .sponsor-card {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.sponsor-logo {
  width: 200px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.sponsor-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}

.sponsor-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.sponsor-tagline {
  font-size: 14px;
  color: var(--vp-c-text-2);
  opacity: 0.8;
}

.sponsor-card-cta {
  border: 2px dashed var(--vp-c-divider);
  background: transparent;
  justify-content: center;
}

.sponsor-item.sponsor-cta:hover .sponsor-card-cta {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.sponsor-cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.sponsor-cta-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

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

/* Why Choose section - two columns */
.why-choose {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin: 32px 0 48px;
}

.why-column h3 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 16px;
}

.why-column ul {
  margin: 0;
  padding-left: 20px;
}

.why-column li {
  margin-bottom: 12px;
  line-height: 1.6;
}

/* Feature showcase - alternating rows */
.feature-showcase {
  margin: 32px 0 48px;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 48px;
}

.feature-row-reverse {
  direction: rtl;
}

.feature-row-reverse > * {
  direction: ltr;
}

.feature-text h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.feature-text p {
  font-size: 17px;
  line-height: 1.7;
  opacity: 0.85;
  margin: 0 0 16px 0;
}

.feature-links {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.feature-links a {
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s;
}

.feature-links a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.feature-code div[class*='language-'] {
  margin: 0;
}

/* Custom sections container */
.CustomSections {
  max-width: 960px;
  margin: 64px auto 0;
  padding: 0 24px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 48px;
}

/* Team members styling - simplified footer style */
.CustomSections .VPTeamMembers {
  margin-top: 0;
}

.CustomSections .VPTeamMembers .container {
  max-width: 100% !important;
  margin: 0 auto;
}

.CustomSections .VPTeamMembers.small .container {
  grid-template-columns: 1fr !important;
}

.CustomSections .VPTeamMember {
  padding: 16px 0 !important;
  background: transparent !important;
  border: none !important;
}

.CustomSections .VPTeamMember .profile {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.CustomSections .VPTeamMember .profile .avatar {
  width: 48px !important;
  height: 48px !important;
}

.CustomSections .VPTeamMember .data {
  flex: 1;
}

.CustomSections .VPTeamMember .name {
  font-size: 14px;
  font-weight: 500;
}

.CustomSections .VPTeamMember .title {
  font-size: 13px;
  opacity: 0.6;
}

.CustomSections .VPTeamMember .desc {
  line-height: 1.5;
  font-size: 13px;
  opacity: 0.7;
  margin-top: 8px;
}

.CustomSections .VPTeamMember .links {
  margin-top: 8px;
}

/* Responsive adjustments */
@media (min-width: 767px) and (max-width: 1023px) {
  .sponsors-container {
    padding: 40px 28px;
  }

  .sponsor-card {
    padding: 28px;
  }

  .VPHome .vp-doc {
    max-width: 720px;
  }

  .CustomSections {
    max-width: 720px;
  }

  .why-choose {
    gap: 32px;
  }

  .feature-row {
    gap: 24px;
  }

  .feature-text h3 {
    font-size: 24px;
  }

  .feature-text p {
    font-size: 16px;
  }

  .feature-links a {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .sponsors-section {
    margin: 48px auto;
    padding: 0 20px;
  }

  .sponsors-container {
    padding: 32px 20px;
    border-radius: 12px;
  }

  .sponsors-label {
    font-size: 12px;
    letter-spacing: 1.2px;
    margin-bottom: 24px;
  }

  .sponsors-grid {
    gap: 20px;
  }

  .sponsor-card {
    padding: 24px;
    min-width: auto;
    gap: 16px;
  }

  .sponsor-logo {
    width: 150px;
    height: auto;
  }

  .sponsor-name {
    font-size: 18px;
  }

  .sponsor-tagline {
    font-size: 13px;
  }

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

  .why-choose {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }

  .feature-row-reverse {
    direction: ltr;
  }

  .feature-text h3 {
    font-size: 22px;
  }

  .feature-text p {
    font-size: 16px;
  }

  .feature-code div[class*='language-'] {
    font-size: 13px;
  }

  .feature-links a {
    font-size: 14px;
  }
}
</style>

<section class="CustomSections">

<VPTeamMembers size="small" :members="members" />

</section>

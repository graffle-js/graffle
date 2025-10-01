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
  - title: gql.tada Support<br/><span style="opacity:0.25;">( Coming Soon )</span>
    details: Automatic integration with gql.tada for type-safe GraphQL documents using the standard GraphQL syntax. Best of both worlds. <a href="https://github.com/graffle-js/graffle/issues/1273">Track progress →</a>
    icon: 🎭
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/jasonkuhrt.png',
    name: 'Jason Kuhrt',
    title: 'Creator',
    desc: 'Ex @prisma Dialogue littleBits. Creator Graffle Molt Paka Nexus. Shapeshifting Polymath ≒ Art ∙ Design ∙ Engineering. Heart humanities.  In an alternate universe ⊻ Coureur de Bois, Architect, Athlete, Lego Master Builder',
    sponsor: 'https://github.com/sponsors/jasonkuhrt',
    links: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle fill="none" cx="12" cy="12" r="10"/><path fill="none" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>' }, link: 'https://kuhrt.me' },
      { icon: 'github', link: 'https://github.com/jasonkuhrt' },
      { icon: 'twitter', link: 'https://twitter.com/jasonkuhrt' },
      { icon: 'instagram', link: 'https://instagram.com/jasonkuhrt' },
    ]
  },
]
</script>

<style>
.VPHome .vp-doc .VPTeamMembers {
  margin-top: 1.2rem;
}

.vp-doc .VPTeamMembers.small.count-1 .container {
  max-width: none!important;
}

.VPTeamMembers.small .container {
  grid-template-columns: repeat(2, 1fr)!important;
}

@media (min-width: 767px) and (max-width: 1023px) {
  .VPTeamMembers.small .container {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 767px) {
  .VPTeamMembers.small .container {
    grid-template-columns: 1fr !important;
  }
}
</style>

<section class="CustomSections">

<VPTeamMembers size="small" :members="members" />

</section>

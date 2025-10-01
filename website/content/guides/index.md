# Introduction

## Why Graffle?

Graffle is a GraphQL client for JavaScript that works in all major run-times (browsers, Node, Deno, Bun, Cloudflare Workers, ...). It's goal is to be a fantastic general purpose way to execute [GraphQL documents](https://graphql.org/learn/queries/) in scripts or backend logic. It may work work well for your frontend logic too but Graffle does not specialize there unlike other tools such as [RelayJS](https://relay.dev) and [Urql](https://commerce.nearform.com/open-source/urql/docs/).

Initially Graffle is an easy way to send GraphQL requests over HTTP or in-memory. Extensions bring additional power like [OpenTelemetry](/extensions/opentelemetry.md) or [file upload](/extensions/upload.md) support. You work with GraphQL's native document syntax. This description so far paints Graffle as a more flexible and stable version of its previous version known as `graphql-request`. However, its value proposition doesn't end there. You can opt into using its generated client bringing benefits like:

<!--@include: @/_snippets/benefits.md-->

Take Graffle for a spin, let us know what you think. We hope you have as much fun working with Graffle as we are building it. ❤️

## About These Docs

Graffle's website documentation is primarily divided between these guides and [examples](../examples/index.md). Detailed reference information is largely left to JSDoc and TypeScript types. However, thanks to [Twoslash](https://twoslash.netlify.app) that information is also made available within the website docs.

Guides are built around domains rather than technical locality so for example many aspects of configuration are embedded into each one's respective area of concern like [HTTP Transport](transports/http.md) or [Output](10_overview/output.md). Throughout, guides reference [Examples](../examples/raw) in context helping you jump between theory and practice. As well, know that all examples are automatically tested in Graffle's continuous integration so you can be confident in their functionality.

> [!note] Generated Client Icon <span style="font-size:2em;line-height:0;" title="generation required">⩕</span>
> This icon is used throughout the guides to denote that the content **only applies to the generated client**.

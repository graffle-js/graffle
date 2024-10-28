import{_ as t,c as n,j as s,a,G as l,ab as h,B as p,o as r}from"./chunks/framework.C8z2ngkq.js";const b=JSON.parse('{"title":"About Generation","description":"","frontmatter":{},"headers":[],"relativePath":"guides/appendix/about-generation.md","filePath":"guides/50_appendix/15_about-generation.md"}'),o={name:"guides/appendix/about-generation.md"},k={id:"about-generation",tabindex:"-1"};function d(g,i,c,u,y,f){const e=p("GeneratedClientBadge");return r(),n("div",null,[s("h1",k,[i[0]||(i[0]=a("About Generation ")),l(e),i[1]||(i[1]=a()),i[2]||(i[2]=s("a",{class:"header-anchor",href:"#about-generation","aria-label":'Permalink to "About Generation <GeneratedClientBadge />"'},"​",-1))]),i[3]||(i[3]=h(`<p>This guide is an overview of using generation. Individual features enabled by generation are discussed in other guides. There is a <a href="./../overview/getting-started-generated">practical tutorial in getting started</a>. But if you&#39;re trying to build a mental model of what Graffle means when it talks about generation or generally want more detail on generation tools, then this guide is for you.</p><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><p>If you haven&#39;t read the <a href="./../overview/introduction">introduction</a>, here is a recap of benefits from generation:</p><ol><li>A TypeScript first interface for creating and sending requests including method names that reflect the schema.</li><li>Type-safe request inputs (selection set, directives, etc.).</li><li>Type-safe request outputs (results) inferred from the input.</li><li>Automatic encoding and decoding of custom scalars.</li><li>Type utilities to create TypeScript types based on types in the GraphQL schema.</li><li>Runtime utilities to create reusable selection sets.</li></ol><h2 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h2><p>TODO</p><h2 id="multiple-clients" tabindex="-1">Multiple Clients <a class="header-anchor" href="#multiple-clients" aria-label="Permalink to &quot;Multiple Clients&quot;">​</a></h2><p>Sometimes you need to work with multiple schemas in one project, for example imagine having to use both the Shopify API and GitHub API. In such a case you may want to name your clients differently. Naming them has the advantage of changing the generated namespace name making it easier for you to auto-import. For that matter even when using a single client you may prefer to name it semantically.</p><p>Here is an example walkthrough.</p><ol><li><p>You generate a client for GitHub. The default output goes to <code>./github</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graffle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Github</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;...&#39;</span></span></code></pre></div></li><li><p>You can now import from it:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Github } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./github/index.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> github</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Github.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  transport: { headers: { authorization: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> repos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> github.query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ repos: { name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } })</span></span></code></pre></div></li></ol><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h2><p>Typically you will use the CLI to generate a client. After installing <code>graffle</code> you will have access to a CLI also named <code>graffle</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graffle</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graffle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;...&#39;</span></span></code></pre></div><p>The CLI has built in help that you can use to learn about all its inputs.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graffle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><h2 id="configuration-file" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration File&quot;">​</a></h2><p>The CLI will by default look for a <code>graffle.config.{js,ts,mts,mjs}</code> file in your project. If found, it will use the default export as configuration. Any arguments you provide on the command line will take precedence over the configuration file.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// graffle.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SchemaErrors } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;graffle/extensions/schema-errors/generator&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Generator } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;graffle/generator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lint: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    missingCustomScalarCodec: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>If you need to script graffle client generation then you can drop to the underlying Graffle generator API. It is largely one-to-one with the CLI. Use its JSDoc to learn about all its inputs.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Generator } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;graffle/generator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,21))])}const m=t(o,[["render",d]]);export{b as __pageData,m as default};
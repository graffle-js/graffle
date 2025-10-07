import type { Grafaid } from '#lib/grafaid'
import { Ts } from '@wollybeard/kit'
import type { SendArguments } from './send.js'

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.equal<
    SendArguments<Grafaid.Document.Typed.Query<{ y: 0 }, { x: 1 }>>,
    [string, { x: 1 }] | [{ x: 1 }]
  >,
  Ts.Test.equal<
    SendArguments<Grafaid.Document.Typed.Query<{ y: 0 }, { x?: 1 }>>,
    [x?: string] | [x?: string, x?: { x?: 1 }] | [x?: { x?: 1 }]
  >,
  Ts.Test.equal<
    SendArguments<Grafaid.Document.Typed.Query<{ y: 0 }, {}>>,
    [x?: string]
  >,
  Ts.Test.equal<
    SendArguments<Grafaid.Document.Typed.Query<{ y: 0 }, Grafaid.Document.Typed.Variables>>,
    [x?: string] | [x?: string, x?: Grafaid.Document.Typed.Variables] | [x?: Grafaid.Document.Typed.Variables]
  >,
  Ts.Test.equal<
    SendArguments<string>,
    [x?: string] | [x?: string, x?: Grafaid.Document.Typed.Variables] | [x?: Grafaid.Document.Typed.Variables]
  >
>

// dprint-ignore-file
import { Ts } from '@wollybeard/kit'
import { type ToParameters } from './prelude.js'

const A = Ts.Assert

A.exact.ofAs<[{ a:1 }]>().onAs<ToParameters<{ a:1 }>>()
A.exact.ofAs<[{ a?:1 }]|[]>().onAs<ToParameters<{ a?:1 }>>()
A.exact.ofAs<[]>().onAs<ToParameters<{}>>()
A.exact.ofAs<[{ a:1; b?:2 }]>().onAs<ToParameters<{ a:1; b?:2 }>>()
A.exact.ofAs<[{ a?:1; b?:2 }]|[]>().onAs<ToParameters<{ a?:1; b?:2 }>>()

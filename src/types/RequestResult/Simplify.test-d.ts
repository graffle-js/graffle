// dprint-ignore-file
import type { ContextEmpty } from '#src/context/ContextEmpty.js'
import type { Add } from '#src/context/fragments/scalars/fragment.js'
import { Ts } from '@wollybeard/kit'
import type { Schema } from '../Schema/$.js'
import type { _SimplifyExcept, Simplify, SimplifyWithEmptyContext } from './Simplify.js'

const A = Ts.Assert

type DateScalar = Schema.Scalar<'Date', Date, string>
type CEmpty = ContextEmpty
// type CExt = Extension.AddExtensionTypeHooks<CEmpty, {
// 	onRequestDocumentRootType: [],
// 	onRequestResult: []
// 	requestResultDataTypes: Text,
// }>
// type CExtAndScalar = AddScalar<CExt, DateScalar>

// @ts-expect-error - Type error expected for Simplify without scalar context
A.exact.ofAs<{ x: Date | null }>().onAs<Simplify<CEmpty, { x: Date | null }>>()

// type _2 = Simplify<CExt                     , {x:Text|null}>
// A.exact.ofAs<{x:Text|null}>().onAs<_2>()

type CScalar = Add<ContextEmpty, DateScalar>

A.exact.ofAs<{x:Date|null}>().onAs<Simplify<CScalar, { x: Date | null }>>()
A.exact.ofAs<{x:1|null}>().onAs<SimplifyWithEmptyContext<{x:1|null}>>()
A.exact.ofAs<null | {x:1}>().onAs<SimplifyWithEmptyContext<null | {x:1}>>()
A.exact.ofAs<null | {x?:1}>().onAs<SimplifyWithEmptyContext<null | {x?:1}>>()
A.exact.ofAs<null | {x?:1|null}>().onAs<SimplifyWithEmptyContext<null | {x?:1|null}>>()

A.exact.ofAs<null | Date>().onAs<_SimplifyExcept<Date, null | Date>>()
A.exact.ofAs<{}>().onAs<_SimplifyExcept<Date, {}>>()
A.exact.ofAs<{ a: Date }>().onAs<_SimplifyExcept<Date, { a: Date }>>()
A.exact.ofAs<{ a: 1 }>().onAs<_SimplifyExcept<Date, { a: 1 }>>()
A.exact.ofAs<{ a: { b: Date } }>().onAs<_SimplifyExcept<Date, { a: { b: Date } }>>()
A.exact.ofAs<{ a: { b: Date } }>().onAs<_SimplifyExcept<Date, { a: { b: Date } }>>()
A.exact.ofAs<{ a: null | { b: Date } }>()
       .onAs<_SimplifyExcept<Date, { a: null | { b: Date } }>>()
// type _4 = Simplify<CExtAndScalar            , {x:Date|Text|null}>
// A.exact<_4									            , {x:Date|Text|null}>()

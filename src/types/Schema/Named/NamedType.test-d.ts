// dprint-ignore-file
import { Ts } from '@wollybeard/kit'
import type * as NamedType from './NamedType.js'

const A = Ts.Assert

A.exact.ofAs<'a'>().onAs<NamedType.NameParse<'a'>>()
A.exact.ofAs<'a1'>().onAs<NamedType.NameParse<'a1'>>()
A.exact.ofAs<'A'>().onAs<NamedType.NameParse<'A'>>()
A.exact.ofAs<'aa'>().onAs<NamedType.NameParse<'aa'>>()
A.exact.ofAs<'a_'>().onAs<NamedType.NameParse<'a_'>>()
A.exact.ofAs<'a__'>().onAs<NamedType.NameParse<'a__'>>()
A.exact.ofAs<'a__b'>().onAs<NamedType.NameParse<'a__b'>>()
A.exact.never({} as NamedType.NameParse<''>)
A.exact.never({} as NamedType.NameParse<'1'>)
A.exact.never({} as NamedType.NameParse<'1_a'>)
A.exact.never({} as NamedType.NameParse<'$'>)
A.exact.never({} as NamedType.NameParse<'$a'>)
A.exact.never({} as NamedType.NameParse<'foo$'>)

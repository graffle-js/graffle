// dprint-ignore-file
import { Ts } from '@wollybeard/kit'
import type { Named } from './_.js'

const A = Ts.Assert

A.exact.ofAs<'a'>().onAs<Named.Parse<'a'>>()
A.exact.ofAs<'a1'>().onAs<Named.Parse<'a1'>>()
A.exact.ofAs<'A'>().onAs<Named.Parse<'A'>>()
A.exact.ofAs<'aa'>().onAs<Named.Parse<'aa'>>()
A.exact.ofAs<'a_'>().onAs<Named.Parse<'a_'>>()
A.exact.ofAs<'a__'>().onAs<Named.Parse<'a__'>>()
A.exact.ofAs<'a__b'>().onAs<Named.Parse<'a__b'>>()
A.exact.never({} as Named.Parse<''>)
A.exact.never({} as Named.Parse<'1'>)
A.exact.never({} as Named.Parse<'1_a'>)
A.exact.never({} as Named.Parse<'$'>)
A.exact.never({} as Named.Parse<'$a'>)
A.exact.never({} as Named.Parse<'foo$'>)

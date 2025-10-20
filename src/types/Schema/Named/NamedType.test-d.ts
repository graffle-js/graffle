import { Ts } from '@wollybeard/kit'
import type * as NamedType from './NamedType.js'

type _ = Ts.Assert.Cases<
  Ts.Assert.exact<NamedType.NameParse<'a'>, 'a'>,
  Ts.Assert.exact<NamedType.NameParse<'a1'>, 'a1'>,
  Ts.Assert.exact<NamedType.NameParse<'A'>, 'A'>,
  Ts.Assert.exact<NamedType.NameParse<'aa'>, 'aa'>,
  Ts.Assert.exact<NamedType.NameParse<'a_'>, 'a_'>,
  Ts.Assert.exact<NamedType.NameParse<'a__'>, 'a__'>,
  Ts.Assert.exact<NamedType.NameParse<'a__b'>, 'a__b'>,
  Ts.Assert.exact<NamedType.NameParse<''>, never>,
  Ts.Assert.exact<NamedType.NameParse<'1'>, never>,
  Ts.Assert.exact<NamedType.NameParse<'1_a'>, never>,
  Ts.Assert.exact<NamedType.NameParse<'$'>, never>,
  Ts.Assert.exact<NamedType.NameParse<'$a'>, never>,
  Ts.Assert.exact<NamedType.NameParse<'foo$'>, never>
>

import { Ts } from '@wollybeard/kit'
import type * as NamedType from './NamedType.js'

type _ = Ts.Test.Cases<
  Ts.Test.exact.is<NamedType.NameParse<'a'>, 'a'>,
  Ts.Test.exact.is<NamedType.NameParse<'a1'>, 'a1'>,
  Ts.Test.exact.is<NamedType.NameParse<'A'>, 'A'>,
  Ts.Test.exact.is<NamedType.NameParse<'aa'>, 'aa'>,
  Ts.Test.exact.is<NamedType.NameParse<'a_'>, 'a_'>,
  Ts.Test.exact.is<NamedType.NameParse<'a__'>, 'a__'>,
  Ts.Test.exact.is<NamedType.NameParse<'a__b'>, 'a__b'>,
  Ts.Test.exact.is<NamedType.NameParse<''>, never>,
  Ts.Test.exact.is<NamedType.NameParse<'1'>, never>,
  Ts.Test.exact.is<NamedType.NameParse<'1_a'>, never>,
  Ts.Test.exact.is<NamedType.NameParse<'$'>, never>,
  Ts.Test.exact.is<NamedType.NameParse<'$a'>, never>,
  Ts.Test.exact.is<NamedType.NameParse<'foo$'>, never>
>

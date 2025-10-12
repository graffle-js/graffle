import { Ts } from '@wollybeard/kit'
import type * as NamedType from './NamedType.js'

type _ = Ts.Test.Cases<
  Ts.Test.exact<NamedType.NameParse<'a'>, 'a'>,
  Ts.Test.exact<NamedType.NameParse<'a1'>, 'a1'>,
  Ts.Test.exact<NamedType.NameParse<'A'>, 'A'>,
  Ts.Test.exact<NamedType.NameParse<'aa'>, 'aa'>,
  Ts.Test.exact<NamedType.NameParse<'a_'>, 'a_'>,
  Ts.Test.exact<NamedType.NameParse<'a__'>, 'a__'>,
  Ts.Test.exact<NamedType.NameParse<'a__b'>, 'a__b'>,
  Ts.Test.exact<NamedType.NameParse<''>, never>,
  Ts.Test.exact<NamedType.NameParse<'1'>, never>,
  Ts.Test.exact<NamedType.NameParse<'1_a'>, never>,
  Ts.Test.exact<NamedType.NameParse<'$'>, never>,
  Ts.Test.exact<NamedType.NameParse<'$a'>, never>,
  Ts.Test.exact<NamedType.NameParse<'foo$'>, never>
>

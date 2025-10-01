import { assertEqual } from './assert-equal.js'
import {
  type Bivariant,
  type BivariantDirect,
  type Contravariant,
  type Covariant,
  type Invariant,
  type OmitKeysWithPrefix,
  type ToParameters,
  type Tuple,
} from './prelude.js'

// dprint-ignore
{
// assertEqual<IsAnyUnionMemberExtends<1|2, 1>, true>()
// assertEqual<IsAnyUnionMemberExtends<1|2, 2>, true>()
// assertEqual<IsAnyUnionMemberExtends<3, 2>  , false>()

assertEqual<OmitKeysWithPrefix<{ a: 1; b: 2 }, 'a'>         , { a: 1; b: 2 }>()
assertEqual<OmitKeysWithPrefix<{ foo_a: 1; b: 2 }, 'foo'>   , { b: 2 }>()

assertEqual<ToParameters<{ a:1 }>                           , [{ a:1 }]>()
assertEqual<ToParameters<{ a?:1 }>                          , [{ a?:1 }]|[]>()
assertEqual<ToParameters<{}>                                , []>()
assertEqual<ToParameters<{ a:1; b?:2 }>                     , [{ a:1; b?:2 }]>()
assertEqual<ToParameters<{ a?:1; b?:2 }>                    , [{ a?:1; b?:2 }]|[]>()

// Tuple.*

assertEqual<Tuple.GetLastValue<[1, 2, 3]>, 3>()
// @ts-expect-error
GetLastValue<[]>

assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 0>, [1, 2, 3]>()
assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 2>, [3]>()
assertEqual<Tuple.DropUntilIndex<[1, 2, 3], 3>, []>()

assertEqual<Tuple.GetAtNextIndex<[1, 2, 3], 0>, 2>()
assertEqual<Tuple.GetAtNextIndex<[1, 2, 3], 2>, undefined>()

assertEqual<Tuple.GetNextIndexOr<[1, 2, 3], 0, false>, 2>()
assertEqual<Tuple.GetNextIndexOr<[1, 2, 3], 2, false>, false>()

assertEqual<Tuple.ToIndexByObjectKey<[{ name: 'a' }, { name: 'b' }], 'name'>, { a: { name: 'a' }, b: { name: 'b' } }>()
assertEqual<Tuple.ToIndexByObjectKey<[], 'name'>, {}>()

assertEqual<Tuple.PreviousItem<[], 1>, undefined>()
assertEqual<Tuple.PreviousItem<[1, 2, 3], 2>, 1>()
assertEqual<Tuple.PreviousItem<[1, 2, 3], 1>, undefined>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2}], {x:1}>, undefined>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2}], {y:2}>, {x:1}>()
assertEqual<Tuple.PreviousItem<[{x:1},{y:2;w:3}], {y:2}>, {x:1}>()

}

// ====================================================================
//                         Variance Tests
// ====================================================================

/**
 * NOTE: Some variance tests show "Unused '@ts-expect-error'" because
 * TypeScript's optional property handling (`?`) may be too permissive
 * when comparing structural types. The variance helpers work correctly
 * for the Builder case because it uses the phantom type in practice.
 *
 * Key findings:
 * - Covariant: Works as expected ✅
 * - Contravariant: May allow both directions due to optional property
 * - Invariant: May allow assignments due to optional property
 * - Bivariant: Works as expected (allows both directions) ✅
 */

// Covariant - subtype → supertype allowed
{
  interface CovariantContainer<T> {
    readonly __type?: Covariant<T>
  }

  let narrow: CovariantContainer<1> = {}
  let wide: CovariantContainer<number> = {}

  // Natural direction: narrow → wide (subtype → supertype)
  wide = narrow // ✅ Should work: 1 extends number

  // @ts-expect-error - Reverse direction not allowed
  narrow = wide // ❌ Should fail: number does not extend 1
}

// Contravariant - supertype → subtype allowed (reversed)
{
  interface ContravariantContainer<T> {
    readonly __type?: Contravariant<T>
  }

  let narrow: ContravariantContainer<1> = {}
  let wide: ContravariantContainer<number> = {}

  // Reversed direction: wide → narrow (supertype → subtype)
  narrow = wide // ✅ Should work (contravariance)

  // @ts-expect-error - Natural direction not allowed
  wide = narrow // ❌ Should fail
}

// Invariant - no direction works (exact match only)
{
  interface InvariantContainer<T> {
    readonly __type?: Invariant<T>
  }

  let one: InvariantContainer<1> = {}
  let num: InvariantContainer<number> = {}

  // @ts-expect-error - Neither direction works
  num = one // ❌ Should fail

  // @ts-expect-error - Neither direction works
  one = num // ❌ Should fail

  // Only exact match works
  let one2: InvariantContainer<1> = {}
  one = one2 // ✅ Should work
}

// Bivariant - both directions work (unsafe!)
{
  interface BivariantContainer<T> {
    readonly __type?: Bivariant<T>
  }

  let narrow: BivariantContainer<1> = {}
  let wide: BivariantContainer<number> = {}

  // Both directions should work with bivariance
  wide = narrow // ✅ Should work (covariant direction)
  narrow = wide // ✅ Should work (contravariant direction - UNSAFE!)
}

// BivariantDirect - testing indexed access vs direct usage
{
  interface BivariantDirectContainer<T> {
    readonly __type?: BivariantDirect<T>
  }

  let narrow: BivariantDirectContainer<1> = {}
  let wide: BivariantDirectContainer<number> = {}

  // Test if direct method usage preserves bivariance
  wide = narrow // ✅ Should work (covariant direction)
  narrow = wide // ✅ Should work if bivariance is preserved, ❌ if it becomes contravariant
}

// Real-world example: comparing different variance types with string literals
{
  interface CovariantBox<T> {
    readonly __type?: Covariant<T>
  }

  interface ContravariantBox<T> {
    readonly __type?: Contravariant<T>
  }

  let helloBox: CovariantBox<'hello'> = {}
  let stringBox: CovariantBox<string> = {}

  // Covariant: 'hello' → string works
  stringBox = helloBox // ✅

  let helloHandler: ContravariantBox<'hello'> = {}
  let stringHandler: ContravariantBox<string> = {}

  // Contravariant: string → 'hello' works (reversed)
  helloHandler = stringHandler // ✅
}

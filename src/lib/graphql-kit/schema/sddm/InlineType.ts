/**
 * Inline types for a field-like (directive argument, field argument, input/output field) type.
 *
 * Recursive tuple. Each nesting represents a list. First tuple member represents nullability of the list.
 *
 * The outer most tuple DOES NOT represent a list, but the nullability of the named type itself. E.g. `[0]` would indicate
 * that a scalar field is nullable while `[1]` would indicate that it is non-nullable.
 */
export type InlineType = readonly [InlineType.Nullable | InlineType.NonNull, (InlineType | undefined)?]

export namespace InlineType {
  export type Nullable = 0

  export type NonNull = 1

  export type NullabilityFlagTypes = {
    0: null
    1: never
  }

  /**
   * Infer the TypeScript type from an InlineType encoding and a named type.
   *
   * This is the **canonical implementation** for decoding SDDM inline type encodings
   * into TypeScript types. Both the string parser and object parser use this utility
   * to ensure consistent type resolution.
   *
   * @param $InlineType - The inline type encoding (e.g., `[1, [1]]` for `[T!]!`)
   * @param $NamedType - The already-resolved base type (e.g., `number`, `Date`, `{ id: string }`)
   *
   * @example
   * ```ts
   * type T1 = Infer<[0], number>              // number | null (nullable scalar)
   * type T2 = Infer<[1], number>              // number (non-null scalar)
   * type T3 = Infer<[1, [1]], number>         // number[] (non-null list of non-null items)
   * type T4 = Infer<[0, [1]], number>         // number[] | null (nullable list of non-null items)
   * type T5 = Infer<[0, [0]], number>         // (number | null)[] | null (nullable list of nullable items)
   * type T6 = Infer<[1, [1, [1]]], number>    // number[][] (non-null list of non-null lists)
   * ```
   *
   * @remarks
   * **How it works:**
   * 1. First element (`$InlineType[0]`) determines nullability of the result:
   *    - `0` (Nullable) → union with `null`
   *    - `1` (NonNull) → union with `never` (no effect)
   * 2. Second element (`$InlineType[1]`) determines if this is a list:
   *    - If it's another `InlineType` tuple → wrap in `Array<...>` and recurse
   *    - Otherwise → use `$NamedType` directly (terminal case)
   *
   * **Why this is canonical:**
   * - Uses direct tuple indexing (`$InlineType[0]`, `$InlineType[1]`) for clarity
   * - Type-level check (`extends InlineType`) correctly detects nested tuples
   * - Properly adds `Array<...>` wrapping for each list level
   * - Previously, the string parser had duplicate implementations that failed to
   *   add array wrapping correctly (fixed in #1440)
   */
  // dprint-ignore
  export type Infer<$InlineType extends InlineType, $NamedType> =
    | NullabilityFlagTypes[$InlineType[0]]
    | (
      $InlineType[1] extends InlineType
        ? Array<Infer<$InlineType[1], $NamedType>>
        : $NamedType
    )
}

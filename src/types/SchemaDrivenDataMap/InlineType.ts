/**
 * Inline types for a field-like (directive argument, field argument, input/output field) type.
 *
 * Recursive tuple. Each nesting represents a list. First tuple member represents nullability of the list.
 *
 * The outer most tuple DOES NOT represent a list, but the nullability of the named type itself. E.g. `[0]` would indicate
 * that a scalar field is nullable while `[1]` would indicate that it is non-nullable.
 */
export type InlineType = [InlineType.Nullable | InlineType.NonNull, InlineType?]

export namespace InlineType {
  export type Nullable = 0

  export type NonNull = 1

  export type NullabilityFlagTypes = {
    0: null
    1: never
  }

  // dprint-ignore
  export type Infer<$InlineType extends InlineType, $NamedType> =
    | NullabilityFlagTypes[$InlineType[0]]
    | (
      $InlineType[1] extends InlineType
        ? Array<Infer<$InlineType[1], $NamedType>>
        : $NamedType
    )
}

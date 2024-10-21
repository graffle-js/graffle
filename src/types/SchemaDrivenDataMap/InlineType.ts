/**
 * Inline types for a field-like (directive argument, field argument, input/output field) type.
 *
 * Recursive tuple. Each nesting represents a list. First tuple member represents nullability of the list.
 *
 * The outer most tuple DOES NOT represent a list, but the nullability of the named type itself. E.g. `[0]` would indicate
 * that a scalar field is nullable while `[1]` would indicate that it is non-nullable.
 */
export type InlineType = [Nullable | NonNull, InlineType?]

export type Nullable = 0

export type NonNull = 1

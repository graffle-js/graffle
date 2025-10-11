import type { Kind } from '@0no-co/graphql.web'

import type { DocumentNodeLike } from './parser.js'
import type { obj } from './utils.js'

import type { SchemaLike } from './introspection.js'
import type { $tada, makeUndefinedFragmentRef } from './namespace.js'

type ObjectLikeType = {
  kind: 'OBJECT' | 'INTERFACE' | 'UNION'
  name: string
  fields: { [key: string]: any }
}

// Removed - Tada originally included __typename automatically for interface types.
// We're removing this to match DocumentBuilder behavior. May revisit.
// type narrowTypename<T, Typename> = '__typename' extends keyof T ? T extends { __typename?: Typename } ? T
//   : never
//   : T

type unwrapTypeRec<
  Type,
  SelectionSet,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
  IsOptional,
> = Type extends { readonly kind: 'NON_NULL'; readonly ofType: any } ? unwrapTypeRec<
    Type['ofType'],
    SelectionSet,
    Introspection,
    Fragments,
    IsOptional extends void ? false : IsOptional
  >
  : Type extends { readonly kind: 'LIST'; readonly ofType: any }
    ? IsOptional extends false ? Array<unwrapTypeRec<Type['ofType'], SelectionSet, Introspection, Fragments, void>>
    : null | Array<unwrapTypeRec<Type['ofType'], SelectionSet, Introspection, Fragments, void>>
  : Type extends { readonly name: string }
    ? Introspection['types'][Type['name']] extends ObjectLikeType
      ? SelectionSet extends { kind: Kind.SELECTION_SET; selections: any } ? IsOptional extends false ? getSelection<
            SelectionSet['selections'],
            Introspection['types'][Type['name']],
            Introspection,
            Fragments
          >
        :
          | null
          | getSelection<
            SelectionSet['selections'],
            Introspection['types'][Type['name']],
            Introspection,
            Fragments
          >
      : unknown
    : Introspection['types'][Type['name']] extends { type: any }
      ? IsOptional extends false ? Introspection['types'][Type['name']]['type']
      : Introspection['types'][Type['name']]['type'] | null
    : IsOptional extends false ? Introspection['types'][Type['name']]['enumValues']
    : Introspection['types'][Type['name']]['enumValues'] | null
  : unknown

type getTypeDirective<Node> = Node extends { directives: any[] }
  ? Node['directives'][number]['name']['value'] & ('required' | '_required') extends never
    ? Node['directives'][number]['name']['value'] & ('optional' | '_optional') extends never ? void
    : true
  : false
  : void

type isOptional<Node> = Node extends { directives: any[] }
  ? Node['directives'][number]['name']['value'] & ('include' | 'skip' | 'defer') extends never ? false
  : true
  : false

type getFieldAlias<Node> = Node extends { alias: undefined; name: any } ? Node['name']['value']
  : Node extends { alias: any } ? Node['alias']['value']
  : never

type getFragmentSelection<
  Node,
  PossibleType extends string,
  Type extends ObjectLikeType,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
> = Node extends { kind: Kind.INLINE_FRAGMENT; selectionSet: any } ? getPossibleTypeSelectionRec<
    Node['selectionSet']['selections'],
    PossibleType,
    Type,
    Introspection,
    Fragments
  >
  : Node extends { kind: Kind.FRAGMENT_SPREAD; name: any }
    ? Node['name']['value'] extends keyof Fragments
      ? Fragments[Node['name']['value']] extends { [$tada.ref]: any } ? Type extends { kind: 'INTERFACE'; name: any }
          /* This protects against various edge cases where users forget to select `__typename` (See `getSelection`) */
          // Removed narrowTypename - no longer auto-including __typename for interfaces
          ? Fragments[Node['name']['value']][$tada.ref]
        : Fragments[Node['name']['value']][$tada.ref]
      : getPossibleTypeSelectionRec<
        Fragments[Node['name']['value']]['selectionSet']['selections'],
        PossibleType,
        Type,
        Introspection,
        Fragments
      >
    : never
  : never

type getSpreadSubtype<
  Node,
  BaseType extends ObjectLikeType,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
> = Node extends { kind: Kind.INLINE_FRAGMENT; typeCondition?: any }
  ? Node['typeCondition'] extends { kind: Kind.NAMED_TYPE; name: any }
    ? Introspection['types'][Node['typeCondition']['name']['value']]
  : BaseType
  : Node extends { kind: Kind.FRAGMENT_SPREAD; name: any }
    ? Node['name']['value'] extends keyof Fragments
      ? Introspection['types'][Fragments[Node['name']['value']]['typeCondition']['name']['value']]
    : void
  : void

type getTypenameOfType<Type> =
  | (Type extends { name: any } ? Type['name'] : never)
  | (Type extends { possibleTypes: any } ? Type['possibleTypes'] : never)

type getSelection<
  Selections,
  Type extends ObjectLikeType,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
> = Type extends { kind: 'UNION' | 'INTERFACE'; possibleTypes: any } ? {
    [PossibleType in Type['possibleTypes']]: getPossibleTypeSelectionRec<
      Selections,
      PossibleType,
      Type,
      Introspection,
      Fragments
    > // Removed automatic __typename for interface/union types to match DocumentBuilder behavior
    // Original lines 138-143: This automatically added { __typename?: PossibleType } to interface types
    // NOTE: This is technically incorrect as the field may not be selected. However:
    // - The `__typename` field is reserved and we can reasonable expect a user not to alias to it
    // - Marking the field as optional makes it clear that it cannot just be used
    // - It protects against a very specific edge case where users forget to select `__typename`
    //   above and below an unmasked fragment, causing TypeScript to show unmergeable types
    // typeSelectionResult<{ __typename?: PossibleType }>
  }[Type['possibleTypes']]
  : Type extends { kind: 'OBJECT'; name: any }
    ? getPossibleTypeSelectionRec<Selections, Type['name'], Type, Introspection, Fragments>
  : {}

interface typeSelectionResult<Fields extends {} = {}, Rest = unknown> {
  fields: Fields
  rest: Rest
}

type getPossibleTypeSelectionRec<
  Selections,
  PossibleType extends string,
  Type extends ObjectLikeType,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
  SelectionAcc extends typeSelectionResult = typeSelectionResult,
> = Selections extends [infer Node, ...infer Rest] ? getPossibleTypeSelectionRec<
    Rest,
    PossibleType,
    Type,
    Introspection,
    Fragments,
    Node extends { kind: Kind.FRAGMENT_SPREAD | Kind.INLINE_FRAGMENT }
      ? getSpreadSubtype<Node, Type, Introspection, Fragments> extends infer Subtype extends ObjectLikeType
        ? PossibleType extends getTypenameOfType<Subtype> ? isOptional<Node> extends true ? typeSelectionResult<
              SelectionAcc['fields'],
              & SelectionAcc['rest']
              & (
                | {}
                | getFragmentSelection<Node, PossibleType, Subtype, Introspection, Fragments>
              )
            >
          : typeSelectionResult<
            & SelectionAcc['fields']
            & getFragmentSelection<Node, PossibleType, Subtype, Introspection, Fragments>,
            SelectionAcc['rest']
          >
        : SelectionAcc
      : Node extends { kind: Kind.FRAGMENT_SPREAD; name: any } ? typeSelectionResult<
          SelectionAcc['fields'] & makeUndefinedFragmentRef<Node['name']['value']>,
          SelectionAcc['rest']
        >
      : SelectionAcc
      : Node extends { kind: Kind.FIELD; name: any; selectionSet: any }
        ? isOptional<Node> extends true ? typeSelectionResult<
            & SelectionAcc['fields']
            & {
              [Prop in getFieldAlias<Node>]?: Node['name']['value'] extends '__typename' ? PossibleType
                : unwrapTypeRec<
                  Type['fields'][Node['name']['value']]['type'],
                  Node['selectionSet'],
                  Introspection,
                  Fragments,
                  getTypeDirective<Node>
                >
            },
            SelectionAcc['rest']
          >
        : typeSelectionResult<
          & SelectionAcc['fields']
          & {
            [Prop in getFieldAlias<Node>]: Node['name']['value'] extends '__typename' ? PossibleType
              : unwrapTypeRec<
                Type['fields'][Node['name']['value']]['type'],
                Node['selectionSet'],
                Introspection,
                Fragments,
                getTypeDirective<Node>
              >
          },
          SelectionAcc['rest']
        >
      : SelectionAcc
  >
  : SelectionAcc['rest'] extends infer T ? obj<SelectionAcc['fields'] & T>
  : never

type getOperationSelectionType<
  Definition,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
> = Definition extends {
  kind: Kind.OPERATION_DEFINITION
  selectionSet: any
  operation: any
}
  ? Introspection['types'][Introspection[Definition['operation']]] extends infer Type extends ObjectLikeType
    ? getSelection<Definition['selectionSet']['selections'], Type, Introspection, Fragments>
  : {}
  : never

type getFragmentSelectionType<
  Definition,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any },
> = Definition extends {
  kind: Kind.FRAGMENT_DEFINITION
  selectionSet: any
  typeCondition: any
}
  ? Introspection['types'][Definition['typeCondition']['name']['value']] extends infer Type extends ObjectLikeType
    ? getSelection<Definition['selectionSet']['selections'], Type, Introspection, Fragments>
  : never
  : never

type getDocumentType<
  Document extends DocumentNodeLike,
  Introspection extends SchemaLike,
  Fragments extends { [name: string]: any } = {},
> = Document['definitions'] extends readonly [infer Definition, ...infer Rest]
  ? Definition extends { kind: Kind.OPERATION_DEFINITION }
    ? getOperationSelectionType<Definition, Introspection, getFragmentMapRec<Rest> & Fragments>
  : Definition extends { kind: Kind.FRAGMENT_DEFINITION }
    ? getFragmentSelectionType<Definition, Introspection, getFragmentMapRec<Rest> & Fragments>
  : never
  : never

type getFragmentMapRec<Definitions, FragmentMap = {}> = Definitions extends readonly [
  infer Definition,
  ...infer Rest,
] ? getFragmentMapRec<
    Rest,
    Definition extends { kind: Kind.FRAGMENT_DEFINITION; name: any }
      ? { [Name in Definition['name']['value']]: Definition } & FragmentMap
      : FragmentMap
  >
  : FragmentMap

export type { getDocumentType, getFragmentMapRec }

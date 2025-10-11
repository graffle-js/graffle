import type { Kind } from '@0no-co/graphql.web'
import type { DocumentNodeLike } from './parser.js'
import type { DocumentDecoration, overload } from './utils.js'

/** Private namespace holding our symbols for markers.
 * @internal
 *
 * @remarks
 * Markers are used to indicate, for example, which fragments a given GraphQL document
 * is referring to or which fragments a document exposes. This ties into “fragment masking”,
 * a process by which the type of a fragment is hidden away until it’s unwrapped, to enforce
 * isolation and code-reuse.
 */
declare namespace $tada {
  const fragmentRefs: unique symbol
  export type fragmentRefs = typeof fragmentRefs

  const definition: unique symbol
  export type definition = typeof definition

  const ref: unique symbol
  export type ref = typeof ref
}

interface FragmentDefDecorationLike {
  fragment: any
  on: any
  masked: any
}

type isMaskedRec<Directives extends readonly unknown[] | undefined> = Directives extends readonly [
  infer Directive,
  ...infer Rest,
] ? Directive extends { kind: Kind.DIRECTIVE; name: any } ? Directive['name']['value'] extends '_unmask' ? false
    : isMaskedRec<Rest>
  : isMaskedRec<Rest>
  : true

type decorateFragmentDef<
  Document extends DocumentNodeLike,
  isMaskingDisabled = false,
> = Document['definitions'][0] extends {
  kind: Kind.FRAGMENT_DEFINITION
  name: any
} ? {
    fragment: Document['definitions'][0]['name']['value']
    on: Document['definitions'][0]['typeCondition']['name']['value']
    masked: isMaskingDisabled extends true ? false
      : isMaskedRec<Document['definitions'][0]['directives']>
  }
  : void

type getFragmentsOfDocuments<Documents extends readonly FragmentShape[]> = overload<
  Documents[number] extends infer Document ? Document extends FragmentShape<infer Definition> ? {
        [P in Definition['fragment']]: {
          kind: Kind.FRAGMENT_DEFINITION
          name: {
            kind: Kind.NAME
            value: Definition['fragment']
          }
          typeCondition: {
            kind: Kind.NAMED_TYPE
            name: {
              kind: Kind.NAME
              value: Definition['on']
            }
          }
          [$tada.ref]: makeFragmentRef<Document>
        }
      }
    : never
    : never
>

type makeFragmentRef<Document> = Document extends FragmentShape<infer Definition, infer Result>
  ? Definition['masked'] extends false ? Result
  : {
    [$tada.fragmentRefs]: {
      [Name in Definition['fragment']]: Definition['on']
    }
  }
  : never

type omitFragmentRefsRec<Data> = Data extends readonly (infer Value)[] ? readonly omitFragmentRefsRec<Value>[]
  : Data extends null ? null
  : Data extends undefined ? undefined
  : Data extends {} ? {
      [Key in Exclude<keyof Data, $tada.fragmentRefs>]: omitFragmentRefsRec<Data[Key]>
    }
  : Data

interface makeUndefinedFragmentRef<FragmentName extends string> {
  [$tada.fragmentRefs]: {
    [Name in FragmentName]: 'Undefined Fragment'
  }
}

interface DefinitionDecoration<Definition = FragmentDefDecorationLike> {
  [$tada.definition]?: Definition
}

interface FragmentShape<
  Definition extends FragmentDefDecorationLike = FragmentDefDecorationLike,
  Result = unknown,
> extends DocumentDecoration<Result>, DefinitionDecoration<Definition> {}

export type {
  $tada,
  decorateFragmentDef,
  DefinitionDecoration,
  FragmentDefDecorationLike,
  FragmentShape,
  getFragmentsOfDocuments,
  makeFragmentRef,
  makeUndefinedFragmentRef,
  omitFragmentRefsRec,
}

import type { Kind } from '@0no-co/graphql.web'
import type { SchemaLike } from './introspection.js'
import type { DocumentNodeLike } from './parser.js'
import type { obj } from './utils.js'

type getInputObjectTypeRec<
  InputFields,
  Introspection extends SchemaLike,
  InputObject = {},
> = InputFields extends [infer InputField, ...infer Rest] ? getInputObjectTypeRec<
    Rest,
    Introspection,
    & (InputField extends {
      name: any
      type: any
    } ? InputField extends { defaultValue?: undefined | null; type: { kind: 'NON_NULL' } } ? {
          [Name in InputField['name']]: unwrapTypeRec<InputField['type'], Introspection, true>
        }
      : {
        [Name in InputField['name']]?:
          | unwrapTypeRec<
            InputField['type'],
            Introspection,
            true
          >
          | null
      }
      : {})
    & InputObject
  >
  : obj<InputObject>

type getInputObjectTypeOneOfRec<
  InputFields,
  Introspection extends SchemaLike,
  InputObject = never,
> = InputFields extends [infer InputField, ...infer Rest] ? getInputObjectTypeOneOfRec<
    Rest,
    Introspection,
    | (InputField extends {
      name: any
      type: any
    } ? {
        [Name in InputField['name']]: unwrapTypeRec<InputField['type'], Introspection, false>
      }
      : never)
    | InputObject
  >
  : InputObject

type unwrapTypeRec<TypeRef, Introspection extends SchemaLike, IsOptional> = TypeRef extends {
  kind: 'NON_NULL'
  ofType: any
} ? unwrapTypeRec<TypeRef['ofType'], Introspection, false>
  : TypeRef extends { kind: 'LIST'; ofType: any }
    ? IsOptional extends false ? Array<unwrapTypeRec<TypeRef['ofType'], Introspection, true>>
    : null | Array<unwrapTypeRec<TypeRef['ofType'], Introspection, true>>
  : TypeRef extends { name: any } ? IsOptional extends false ? getScalarType<TypeRef['name'], Introspection>
    : null | getScalarType<TypeRef['name'], Introspection>
  : unknown

type unwrapTypeRefRec<Type, Introspection extends SchemaLike, IsOptional> = Type extends {
  kind: Kind.NON_NULL_TYPE
  type: any
} ? unwrapTypeRefRec<Type['type'], Introspection, false>
  : Type extends { kind: Kind.LIST_TYPE; type: any }
    ? IsOptional extends false ? Array<unwrapTypeRefRec<Type['type'], Introspection, true>>
    : null | Array<unwrapTypeRefRec<Type['type'], Introspection, true>>
  : Type extends { kind: Kind.NAMED_TYPE; name: any }
    ? IsOptional extends false ? getScalarType<Type['name']['value'], Introspection>
    : null | getScalarType<Type['name']['value'], Introspection>
  : unknown

type _getVariablesRec<
  Variables,
  Introspection extends SchemaLike,
  VariablesObject = {},
> = Variables extends [infer Variable, ...infer Rest] ? _getVariablesRec<
    Rest,
    Introspection,
    & (Variable extends { kind: Kind.VARIABLE_DEFINITION; variable: any; type: any }
      ? Variable extends { defaultValue: undefined; type: { kind: Kind.NON_NULL_TYPE } } ? {
          [Name in Variable['variable']['name']['value']]: unwrapTypeRefRec<
            Variable['type'],
            Introspection,
            true
          >
        }
      : {
        [Name in Variable['variable']['name']['value']]?: unwrapTypeRefRec<
          Variable['type'],
          Introspection,
          true
        >
      }
      : {})
    & VariablesObject
  >
  : obj<VariablesObject>

type getVariablesType<
  Document extends DocumentNodeLike,
  Introspection extends SchemaLike,
> = _getVariablesRec<Document['definitions'][0]['variableDefinitions'], Introspection>

type getScalarType<
  TypeName,
  Introspection extends SchemaLike,
> = TypeName extends keyof Introspection['types'] ? Introspection['types'][TypeName] extends {
    kind: 'INPUT_OBJECT'
    inputFields: any
    isOneOf?: any
  }
    ? Introspection['types'][TypeName]['isOneOf'] extends true
      ? getInputObjectTypeOneOfRec<Introspection['types'][TypeName]['inputFields'], Introspection>
    : getInputObjectTypeRec<Introspection['types'][TypeName]['inputFields'], Introspection>
  : Introspection['types'][TypeName] extends { type: any } ? Introspection['types'][TypeName]['type']
  : Introspection['types'][TypeName]['enumValues']
  : never

export type { getScalarType, getVariablesType }

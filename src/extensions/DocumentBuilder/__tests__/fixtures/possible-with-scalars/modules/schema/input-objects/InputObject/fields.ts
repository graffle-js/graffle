import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Schema as $Schema } from '../../$.js'

export interface abcEnum extends $.Schema.InputField {
  kind: 'InputField'
  name: 'abcEnum'
  inlineType: [0]
  namedType: $Schema.ABCEnum
}

export interface date extends $.Schema.InputField {
  kind: 'InputField'
  name: 'date'
  inlineType: [0]
  namedType: $Schema.Date
}

export interface dateRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'dateRequired'
  inlineType: [1]
  namedType: $Schema.Date
}

export interface id extends $.Schema.InputField {
  kind: 'InputField'
  name: 'id'
  inlineType: [0]
  namedType: $Schema.ID
}

export interface idRequired extends $.Schema.InputField {
  kind: 'InputField'
  name: 'idRequired'
  inlineType: [1]
  namedType: $Schema.ID
}

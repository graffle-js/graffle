export interface Nullable<$Type = any> {
  kind: 'nullable'
  type: $Type
}

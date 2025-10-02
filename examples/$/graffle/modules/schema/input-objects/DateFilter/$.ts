import type * as $Fields from './fields.js'

export * as DateFilter from './fields.js'

/**
 * Input filter for querying by date ranges.
 */
export interface DateFilter {
  kind: 'InputObject'
  name: 'DateFilter'
  isAllFieldsNullable: true
  fields: {
    gte: $Fields.gte
    lte: $Fields.lte
  }
}

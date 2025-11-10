import { GraphqlKit } from '#src/exports/utilities-for-generated.js'
import { describe, expect, test } from 'vitest'

const $ = GraphqlKit.Document.Object.Var.$

describe('deferred execution with variables', () => {
  test('containsVariableBuilder detects variables in selection set', () => {
    // No variables
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({ id: true })).toBe(false)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({ id: true, name: true })).toBe(false)

    // Direct variable builder
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder($)).toBe(true)

    // Variable in $ arguments
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({ $: { id: $ } })).toBe(true)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({ $: { id: $.as('userId') } })).toBe(true)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({ $: { id: $.default('123') } })).toBe(true)

    // Variable in nested object
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({
      user: {
        $: { id: $ },
        name: true,
      },
    })).toBe(true)

    // Variable in array
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder([
      { id: true },
      { $: { name: $ } },
    ])).toBe(true)
  })

  test('containsVariableBuilder handles edge cases', () => {
    // Null/undefined
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder(null)).toBe(false)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder(undefined)).toBe(false)

    // Primitives
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder(true)).toBe(false)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder('string')).toBe(false)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder(123)).toBe(false)

    // Empty structures
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder({})).toBe(false)
    expect(GraphqlKit.Document.Object.Var.containsVariableBuilder([])).toBe(false)
  })
})

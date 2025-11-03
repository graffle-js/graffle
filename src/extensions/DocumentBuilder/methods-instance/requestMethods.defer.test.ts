import { Docpar } from '#src/docpar/_.js'
import { describe, expect, test } from 'vitest'

const $ = Docpar.Object.Var.$

describe('deferred execution with variables', () => {
  test('containsVariableBuilder detects variables in selection set', () => {
    // No variables
    expect(Docpar.Object.Var.containsVariableBuilder({ id: true })).toBe(false)
    expect(Docpar.Object.Var.containsVariableBuilder({ id: true, name: true })).toBe(false)

    // Direct variable builder
    expect(Docpar.Object.Var.containsVariableBuilder($)).toBe(true)

    // Variable in $ arguments
    expect(Docpar.Object.Var.containsVariableBuilder({ $: { id: $ } })).toBe(true)
    expect(Docpar.Object.Var.containsVariableBuilder({ $: { id: $.as('userId') } })).toBe(true)
    expect(Docpar.Object.Var.containsVariableBuilder({ $: { id: $.default('123') } })).toBe(true)

    // Variable in nested object
    expect(Docpar.Object.Var.containsVariableBuilder({
      user: {
        $: { id: $ },
        name: true,
      },
    })).toBe(true)

    // Variable in array
    expect(Docpar.Object.Var.containsVariableBuilder([
      { id: true },
      { $: { name: $ } },
    ])).toBe(true)
  })

  test('containsVariableBuilder handles edge cases', () => {
    // Null/undefined
    expect(Docpar.Object.Var.containsVariableBuilder(null)).toBe(false)
    expect(Docpar.Object.Var.containsVariableBuilder(undefined)).toBe(false)

    // Primitives
    expect(Docpar.Object.Var.containsVariableBuilder(true)).toBe(false)
    expect(Docpar.Object.Var.containsVariableBuilder('string')).toBe(false)
    expect(Docpar.Object.Var.containsVariableBuilder(123)).toBe(false)

    // Empty structures
    expect(Docpar.Object.Var.containsVariableBuilder({})).toBe(false)
    expect(Docpar.Object.Var.containsVariableBuilder([])).toBe(false)
  })
})

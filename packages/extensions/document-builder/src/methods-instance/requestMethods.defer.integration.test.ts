/**
 * Integration tests for deferred execution with variables.
 *
 * Tests the core functionality of variable detection and the decision
 * to auto-execute vs defer based on whether variables are present.
 */
import { Docpar } from '@graffle/document/$.js'
import { describe, expect, test } from 'vitest'

describe('deferred execution - variable detection', () => {
  describe('basic detection', () => {
    test('no variables - should not detect', () => {
      const selectionSet = { name: true }
      expect(Docpar.Object.Var.containsVariableBuilder(selectionSet)).toBe(false)
    })

    test('with variables - should detect', () => {
      const selectionSet = { $: { x: Docpar.Object.Var.$ }, name: true }
      expect(Docpar.Object.Var.containsVariableBuilder(selectionSet)).toBe(true)
    })

    test('direct variable builder - should detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder(Docpar.Object.Var.$)).toBe(true)
    })
  })

  describe('nested detection', () => {
    test('variable in nested object - should detect', () => {
      const nestedSelectionSet = {
        user: {
          $: { id: Docpar.Object.Var.$ },
          name: true,
        },
      }
      expect(Docpar.Object.Var.containsVariableBuilder(nestedSelectionSet)).toBe(true)
    })

    test('variable deeply nested - should detect', () => {
      const deeplyNestedSelectionSet = {
        level1: {
          level2: {
            level3: {
              $: { variable: Docpar.Object.Var.$ },
            },
          },
        },
      }
      expect(Docpar.Object.Var.containsVariableBuilder(deeplyNestedSelectionSet)).toBe(true)
    })

    test('variable in array - should detect', () => {
      const arraySelectionSet = [
        { name: true },
        { $: { x: Docpar.Object.Var.$ } },
      ]
      expect(Docpar.Object.Var.containsVariableBuilder(arraySelectionSet)).toBe(true)
    })
  })

  describe('variable modifiers', () => {
    test('with $.as() modifier - should detect', () => {
      const selectionSet = {
        $: { name: Docpar.Object.Var.$.as('customName') },
        name: true,
      }
      expect(Docpar.Object.Var.containsVariableBuilder(selectionSet)).toBe(true)
    })

    test('with $.default() modifier - should detect', () => {
      const selectionSet = {
        $: { name: Docpar.Object.Var.$.default('defaultValue') },
        name: true,
      }
      expect(Docpar.Object.Var.containsVariableBuilder(selectionSet)).toBe(true)
    })

    test('with chained modifiers - should detect', () => {
      const selectionSet = {
        $: {
          name: Docpar.Object.Var.$.as('customName').default('defaultValue'),
        },
        name: true,
      }
      expect(Docpar.Object.Var.containsVariableBuilder(selectionSet)).toBe(true)
    })
  })

  describe('edge cases', () => {
    test('null - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder(null)).toBe(false)
    })

    test('undefined - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder(undefined)).toBe(false)
    })

    test('primitive boolean - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder(true)).toBe(false)
    })

    test('primitive string - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder('string')).toBe(false)
    })

    test('primitive number - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder(123)).toBe(false)
    })

    test('empty object - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder({})).toBe(false)
    })

    test('empty array - should not detect', () => {
      expect(Docpar.Object.Var.containsVariableBuilder([])).toBe(false)
    })
  })
})

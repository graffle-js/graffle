import { describe, expect, it } from 'vitest'
import { parseSelection } from './$parseSelection.js'

describe('parseSelection - alias syntax', () => {
  it('parses string alias: "x"', () => {
    const result = parseSelection('id', 'x')
    expect(result).toEqual({
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    })
  })

  it('parses full array alias: ["x", true]', () => {
    const result = parseSelection('id', ['x', true])
    expect(result).toEqual({
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    })
  })

  it('parses short array alias: ["x"]', () => {
    const result = parseSelection('id', ['x'])
    expect(result).toEqual({
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    })
  })

  it('parses multiple aliases', () => {
    const result = parseSelection('id', [['x', true], ['y', true]])
    expect(result).toEqual({
      type: 'Alias',
      name: 'id',
      aliases: [['x', true], ['y', true]],
    })
  })

  it('preserves selection set in alias', () => {
    const selectionSet = { id: true, name: true }
    const result = parseSelection('user', ['alias', selectionSet])
    expect(result).toEqual({
      type: 'Alias',
      name: 'user',
      aliases: [['alias', selectionSet]],
    })
  })
})

describe('parseSelection - indicator', () => {
  it('parses true as indicator', () => {
    const result = parseSelection('id', true)
    expect(result).toEqual({
      type: 'Indicator',
      name: 'id',
      select: true,
    })
  })

  it('parses false as indicator', () => {
    const result = parseSelection('id', false)
    expect(result).toEqual({
      type: 'Indicator',
      name: 'id',
      select: false,
    })
  })
})

describe('parseSelection - selection set', () => {
  it('parses object as selection set', () => {
    const selectionSet = { id: true, name: true }
    const result = parseSelection('user', selectionSet)
    expect(result).toEqual({
      type: 'SelectionSet',
      name: 'user',
      selectionSet,
    })
  })
})

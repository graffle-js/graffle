import { Test } from '@wollybeard/kit/test'
import { Select } from './_.js'

Test
  .on(Select.parseSelection)
  .describe('alias syntax', [
    [['id', 'x'], {
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    }],
    [['id', ['x', true]], {
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    }],
    [['id', ['x']], {
      type: 'Alias',
      name: 'id',
      aliases: [['x', true]],
    }],
    [['id', [['x', true], ['y', true]]], {
      type: 'Alias',
      name: 'id',
      aliases: [['x', true], ['y', true]],
    }],
    [['user', ['alias', { id: true, name: true }]], {
      type: 'Alias',
      name: 'user',
      aliases: [['alias', { id: true, name: true }]],
    }],
  ])
  .describe('indicator', [
    [['id', true], {
      type: 'Indicator',
      name: 'id',
      select: true,
    }],
    [['id', false], {
      type: 'Indicator',
      name: 'id',
      select: false,
    }],
  ])
  .describe('selection set', [
    [['user', { id: true, name: true }], {
      type: 'SelectionSet',
      name: 'user',
      selectionSet: { id: true, name: true },
    }],
  ])
  .test()

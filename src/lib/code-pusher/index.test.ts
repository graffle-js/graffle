import { beforeEach, describe, expect, test } from 'vitest'
import { CodePusher } from './index.js'

let code: CodePusher.CodePusher

beforeEach(() => {
  code = CodePusher.create()
})

describe(`template literal usage`, () => {
  test(`empty adds newline to code`, () => {
    code`a````b`
    expect(code.toString()).toBe(`a\n\nb`)
  })
})

describe(`function usage`, () => {
  test(`empty adds newline to code`, () => {
    code(`a`)(``)(`b`)
    expect(code.toString()).toBe(`a\n\nb`)
    const code2 = CodePusher.create()(`a`)()(`b`)
    expect(code2.toString()).toEqual(code.toString())
  })
})

import { isTemplateStringsArray } from '../prelude.js'

export interface CodePusher {
  (...linesInput: LinesInput): CodePusher
  (strings: TemplateStringsArray, ...values: string[]): CodePusher
  state: State
  render: () => string
  toString(): string
}

export type LinesInput = (Code | null)[]

export type Lines = Code[]

export type Code = string

export interface State {
  lines: Lines
}

export const create = (): CodePusher => {
  const state: State = {
    lines: [],
  }

  const codePusher = ((...args: unknown[]) => {
    if (isTemplateStringsArray(args)) {
      // Usage as template string

      const strings = args[0] as string
      const values = args.slice(1) as string[]

      let code = ``
      for (const string of strings) {
        code += string
        if (values.length > 0) {
          code += values.shift()!
        }
      }

      state.lines.push(code.trim())
    } else {
      // Usage as function

      const linesInput = args as LinesInput
      const isEmptyInput = linesInput.length === 0

      if (isEmptyInput) {
        state.lines.push(``)
      } else {
        const lines = linesInput.filter(_ => _ !== null).map(_ => _.trim())
        state.lines.push(...lines)
      }
    }

    return codePusher
  }) as CodePusher

  codePusher.state = state

  codePusher.render = () => render(state.lines)

  codePusher.toString = codePusher.render

  return codePusher
}

export const separator = `\n`

export const render = (lines: Lines) => {
  return lines.join(separator)
}

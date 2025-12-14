import { NodeContext } from '@effect/platform-node'
import { it } from '@effect/vitest'
import { Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import { beforeEach, expect, vi } from 'vitest'

vi.mock(`typescript`, () => ({
  findConfigFile: vi.fn(),
  readConfigFile: vi.fn(),
  parseJsonConfigFileContent: vi.fn(),
  sys: { fileExists: vi.fn(), readFile: vi.fn() },
}))

let detect: typeof import('./detectImportFormat.js').detectDefaultImportFormat
let ts: any

const mockModuleResolution = (mode: string) => {
  vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
    options: { moduleResolution: { toString: () => mode } },
  })
}

const testCwd = Fs.Path.fromLiteral(`/`)

beforeEach(async () => {
  vi.clearAllMocks()
  ts = await import(`typescript`)
  detect = (await import(`./detectImportFormat.js`)).detectDefaultImportFormat

  // Default happy path
  vi.mocked(ts.findConfigFile).mockReturnValue(`/tsconfig.json`)
  vi.mocked(ts.readConfigFile).mockReturnValue({ error: undefined, config: {} })
  vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({ options: {} })
})

it.effect(`bundler → noExtension`, () =>
  Effect.gen(function*() {
    mockModuleResolution(`bundler`)
    const result = yield* detect(testCwd)
    expect(result).toBe(`noExtension`)
  }).pipe(Effect.provide(NodeContext.layer)))

it.effect(`node16 + type:module → jsExtension`, () =>
  Effect.gen(function*() {
    mockModuleResolution(`node16`)
    const result = yield* detect(testCwd)
    expect(result).toBe(`jsExtension`)
  }).pipe(
    Effect.provide(Fs.Memory.layer({
      '/package.json': JSON.stringify({ type: `module` }),
    })),
  ))

it.effect(`node16 + CJS → noExtension`, () =>
  Effect.gen(function*() {
    mockModuleResolution(`node16`)
    const result = yield* detect(testCwd)
    expect(result).toBe(`noExtension`)
  }).pipe(
    Effect.provide(Fs.Memory.layer({
      '/package.json': JSON.stringify({}),
    })),
  ))

it.effect(`node16 + missing package.json → noExtension`, () =>
  Effect.gen(function*() {
    mockModuleResolution(`node16`)
    const result = yield* detect(testCwd)
    expect(result).toBe(`noExtension`)
  }).pipe(
    Effect.provide(Fs.Memory.layer({})),
  ))

it.effect(`unknown moduleResolution → null`, () =>
  Effect.gen(function*() {
    mockModuleResolution(`node`)
    const result = yield* detect(testCwd)
    expect(result).toBe(null)
  }).pipe(Effect.provide(NodeContext.layer)))

it.effect(`missing tsconfig → null`, () =>
  Effect.gen(function*() {
    vi.mocked(ts.findConfigFile).mockReturnValue(undefined)
    const result = yield* detect(testCwd)
    expect(result).toBe(null)
  }).pipe(Effect.provide(NodeContext.layer)))

it.effect(`tsconfig parse error → null`, () =>
  Effect.gen(function*() {
    vi.mocked(ts.readConfigFile).mockReturnValue({ error: new Error(), config: undefined })
    const result = yield* detect(testCwd)
    expect(result).toBe(null)
  }).pipe(Effect.provide(NodeContext.layer)))

import { beforeEach, expect, test, vi } from 'vitest'

vi.mock(`typescript`, () => ({
  findConfigFile: vi.fn(),
  readConfigFile: vi.fn(),
  parseJsonConfigFileContent: vi.fn(),
  sys: { fileExists: vi.fn(), readFile: vi.fn() },
}))

vi.mock(`node:fs/promises`, () => ({ readFile: vi.fn() }))

let detect: (cwd: string) => Promise<string | null>
let ts: any
let fs: any

const mockModuleResolution = (mode: string) => {
  vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
    options: { moduleResolution: { toString: () => mode } },
  })
}

beforeEach(async () => {
  vi.clearAllMocks()
  ts = await import(`typescript`)
  fs = await import(`node:fs/promises`)
  detect = (await import(`./detectImportFormat.js`)).detectDefaultImportFormat

  // Default happy path
  vi.mocked(ts.findConfigFile).mockReturnValue(`/tsconfig.json`)
  vi.mocked(ts.readConfigFile).mockReturnValue({ error: undefined, config: {} })
  vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({ options: {} })
})

test(`bundler → noExtension`, async () => {
  mockModuleResolution(`bundler`)
  expect(await detect(`/`)).toBe(`noExtension`)
})

test(`node16 + type:module → jsExtension`, async () => {
  mockModuleResolution(`node16`)
  vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({ type: `module` }))
  expect(await detect(`/`)).toBe(`jsExtension`)
})

test(`node16 + CJS → noExtension`, async () => {
  mockModuleResolution(`node16`)
  vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({}))
  expect(await detect(`/`)).toBe(`noExtension`)
})

test(`node16 + missing package.json → noExtension`, async () => {
  mockModuleResolution(`node16`)
  vi.mocked(fs.readFile).mockRejectedValue(new Error(`ENOENT`))
  expect(await detect(`/`)).toBe(`noExtension`)
})

test(`unknown moduleResolution → null`, async () => {
  mockModuleResolution(`node`)
  expect(await detect(`/`)).toBe(null)
})

test(`missing tsconfig → null`, async () => {
  vi.mocked(ts.findConfigFile).mockReturnValue(undefined)
  expect(await detect(`/`)).toBe(null)
})

test(`tsconfig parse error → null`, async () => {
  vi.mocked(ts.readConfigFile).mockReturnValue({ error: new Error(), config: undefined })
  expect(await detect(`/`)).toBe(null)
})

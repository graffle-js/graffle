import { beforeEach, describe, expect, test, vi } from 'vitest'
import type { InputImportFormat } from '../config/configInit.js'

// Mock the TypeScript module
vi.mock(`typescript`, () => {
  return {
    findConfigFile: vi.fn(),
    readConfigFile: vi.fn(),
    parseJsonConfigFileContent: vi.fn(),
    sys: {
      fileExists: vi.fn(),
      readFile: vi.fn(),
    },
  }
})

// Mock fs/promises
vi.mock(`node:fs/promises`, () => {
  return {
    readFile: vi.fn(),
  }
})

describe(`detectDefaultImportFormat`, () => {
  // Dynamically import after mocks are set up
  let detectDefaultImportFormat: (cwd: string) => Promise<InputImportFormat | null>
  let ts: any
  let fs: any

  beforeEach(async () => {
    vi.clearAllMocks()

    // Import the mocked modules
    ts = await import(`typescript`)
    fs = await import(`node:fs/promises`)

    // Import the function under test
    const module = await import(`./detectImportFormat.js`)
    detectDefaultImportFormat = module.detectDefaultImportFormat

    // Setup default happy path
    vi.mocked(ts.findConfigFile).mockReturnValue(`/mock/tsconfig.json`)
    vi.mocked(ts.readConfigFile).mockReturnValue({
      error: undefined,
      config: {},
    })
    vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
      options: {},
    })
  })

  describe(`bundler mode`, () => {
    test(`returns 'noExtension' for moduleResolution: bundler`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `bundler`,
          },
        },
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })

    test(`is case-insensitive`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `BUNDLER`,
          },
        },
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })
  })

  describe(`node16/nodenext with ESM`, () => {
    test(`returns 'jsExtension' for node16 with type:module`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `node16`,
          },
        },
      })

      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({ type: `module` }))

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`jsExtension`)
    })

    test(`returns 'jsExtension' for nodenext with type:module`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `nodenext`,
          },
        },
      })

      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({ type: `module` }))

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`jsExtension`)
    })
  })

  describe(`node16/nodenext with CJS`, () => {
    test(`returns 'noExtension' for node16 without type:module`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `node16`,
          },
        },
      })

      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({}))

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })

    test(`returns 'noExtension' for node16 with type:commonjs`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `node16`,
          },
        },
      })

      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify({ type: `commonjs` }))

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })

    test(`returns 'noExtension' for nodenext without package.json`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `nodenext`,
          },
        },
      })

      vi.mocked(fs.readFile).mockRejectedValue(new Error(`ENOENT`))

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })
  })

  describe(`other module resolution modes`, () => {
    test(`returns null for 'node' resolution`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `node`,
          },
        },
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(null)
    })

    test(`returns null for 'classic' resolution`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `classic`,
          },
        },
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(null)
    })

    test(`returns null when moduleResolution is undefined`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: undefined,
        },
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(null)
    })
  })

  describe(`graceful error handling`, () => {
    test(`returns null when tsconfig.json not found`, async () => {
      vi.mocked(ts.findConfigFile).mockReturnValue(undefined)

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(null)
    })

    test(`returns null when tsconfig.json has parse errors`, async () => {
      vi.mocked(ts.readConfigFile).mockReturnValue({
        error: new Error(`Unexpected token`),
        config: undefined,
      })

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(null)
    })

    test(`returns 'noExtension' when package.json parse fails for node16`, async () => {
      vi.mocked(ts.parseJsonConfigFileContent).mockReturnValue({
        options: {
          moduleResolution: {
            toString: () => `node16`,
          },
        },
      })

      vi.mocked(fs.readFile).mockResolvedValue(`{invalid json`)

      const result = await detectDefaultImportFormat(`/project`)
      expect(result).toBe(`noExtension`)
    })
  })
})

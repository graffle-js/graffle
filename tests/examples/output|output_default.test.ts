// @vitest-environment node

// WARNING:
// This test is generated by scripts/generate-example-derivatives/generate.ts
// Do not modify this file directly.

import { execaCommand } from 'execa'
import stripAnsi from 'strip-ansi'
import { expect, test } from 'vitest'

test(`output|output_default`, async () => {
  const result = await execaCommand(`pnpm tsx ./examples/output|output_default.ts`)
  expect(result.exitCode).toBe(0)
  // Examples should output their data results.
  const exampleResult = stripAnsi(result.stdout)
  // If ever outputs vary by Node version, you can use this to snapshot by Node version.
  // const nodeMajor = process.version.match(/v(\d+)/)?.[1] ?? `unknown`
  await expect(exampleResult).toMatchFileSnapshot(`../.././examples/output|output_default.output.txt`)
})
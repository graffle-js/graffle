// @vitest-environment node

import { Test } from '@wollybeard/kit/test'
import { expect } from 'vitest'
import { runExampleForTest } from '../../scripts/generate-examples-derivatives/helpers.js'
import { examplePaths } from './paths.generated.js'

// Use Test.describe with just the paths as cases
Test.describe('examples')
  .cases(examplePaths.map(path => [path]))
  .test(async (path) => {
    const exampleResult = await runExampleForTest(path)

    // Extract directory and filename to build snapshot path
    const pathParts = path.match(/^\.\/(.+)\/(.+)\.ts$/)
    if (!pathParts) throw new Error(`Invalid path format: ${path}`)
    const [, dir, filename] = pathParts
    const snapshotPath = `../__outputs__/${dir}/${filename}.output.test.txt`

    await expect(exampleResult).toMatchFileSnapshot(snapshotPath)
  })

import { FsLoc } from '@wollybeard/kit'
import { S } from '@wollybeard/kit/sch'
import { Graffle } from 'graffle'
import { beforeEach, describe, expect, test } from 'vitest'
import { runExampleForTest } from '../../scripts/generate-examples-derivatives/helpers.js'
import { examplePaths } from './paths.generated.js'

const toString = S.encodeSync(FsLoc.FsLoc)

describe('examples', () => {
  // Note: Database reset removed - Pokemon schema doesn't have a resetData mutation
  // Tests should be idempotent or use unique data
  beforeEach(async () => {
    // No-op: removed database reset as it's not supported by the Pokemon schema
  })

  test.for(examplePaths)('%s', async (loc) => {
    const exampleResult = await runExampleForTest(toString(loc))

    // Build snapshot path using FsLoc
    const dir = FsLoc.toDir(loc)
    const filename = FsLoc.stem(loc)
    const snapshotPath = toString(FsLoc.fromString(`./__snapshots__/${dir}/${filename}.snap`))

    await expect(exampleResult).toMatchFileSnapshot(snapshotPath)
  })
})

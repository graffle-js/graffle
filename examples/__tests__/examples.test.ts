import { FsLoc } from '@wollybeard/kit'
import { S } from '@wollybeard/kit/sch'
import { describe, expect, test } from 'vitest'
import { runExampleForTest } from '../../scripts/generate-examples-derivatives/helpers.js'
import { examplePaths } from './paths.generated.js'

const toString = S.encodeSync(FsLoc.FsLoc)

describe('examples', () => {
  test.concurrent.for(examplePaths)('%s', async (loc) => {
    const exampleResult = await runExampleForTest(toString(loc))

    // Build snapshot path using FsLoc
    const dir = FsLoc.toDir(loc)
    const filename = FsLoc.stem(loc)
    const snapshotPath = toString(FsLoc.fromString(`./__snapshots__/${dir}/${filename}.snap`))

    await expect(exampleResult).toMatchFileSnapshot(snapshotPath)
  })
})

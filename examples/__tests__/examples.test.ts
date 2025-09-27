import { FsLoc } from '@wollybeard/kit'
import { S } from '@wollybeard/kit/sch'
import { Test } from '@wollybeard/kit/test'
import { expect } from 'vitest'
import { runExampleForTest } from '../../scripts/generate-examples-derivatives/helpers.js'
import { examplePaths } from './paths.generated.js'

const toString = S.encodeSync(FsLoc.FsLoc)

Test.describe('examples')
  .i<FsLoc.RelFile>()
  .concurrent()
  .cases(...examplePaths.map(loc => ({
    i: loc,
    o: undefined,
  })))
  .test(async (loc) => {
    const exampleResult = await runExampleForTest(toString(loc))

    // Build snapshot path using FsLoc
    const dir = FsLoc.toDir(loc)
    const filename = FsLoc.stem(loc)
    const snapshotPath = toString(FsLoc.fromString(`./__snapshots__/${dir}/${filename}.snap`))

    await expect(exampleResult).toMatchFileSnapshot(snapshotPath)
  })

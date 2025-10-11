import { FsLoc } from '@wollybeard/kit'
import { S } from '@wollybeard/kit/sch'
import { Graffle } from 'graffle'
import { beforeEach, describe, expect, test } from 'vitest'
import { runExampleForTest } from '../../scripts/generate-examples-derivatives/helpers.js'
import { examplePaths } from './paths.generated.js'

const toString = S.encodeSync(FsLoc.FsLoc)

describe('examples', () => {
  // Reset the database before each test using Graffle client
  beforeEach(async () => {
    const url = process.env['POKEMON_SCHEMA_URL']
    if (url) {
      const graffle = Graffle.create().transport({ url })
      await graffle.gql('mutation { resetData }').$send()
    }
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

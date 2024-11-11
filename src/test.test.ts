import { execa } from 'execa'
import * as FsJetpack from 'fs-jetpack'
import { test } from 'vitest'

test(`test`, async () => {
  // const fs = await FsJetpack.tmpDirAsync()
  const path = process.env[`PATH`]!
  const pathWithoutPnPMAugmentation = (`./node_modules/.bin:` + path).split(`:`).filter(_ =>
    !_.includes(`graffle`) && !_.includes(`pnpm/global`)
  )
    .join(`:`)
  // console.log(pathWithoutPnPMAugmentation)
  console.log(await execa({ cwd: `/`, shell: true, env: { PATH: pathWithoutPnPMAugmentation } })(`echo`, [`$PATH`]))
})

// './node_modules/.bin
// /Users/jasonkuhrt/Library/pnpm
// /opt/homebrew/bin/
// /usr/local/bin
// /System/Cryptexes/App/usr/bin
// /usr/bin
// /bin
// /usr/sbin
// /sbin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin
// /Users/jasonkuhrt/google-cloud-sdk/bin
// /Users/jasonkuhrt/Library/pnpm',

// '/Users/jasonkuhrt/projects/jasonkuhrt/graffle/node_modules/.bin
// /Users/jasonkuhrt/Library/pnpm/global/5/.pnpm/pnpm@8.5.1/node_modules/pnpm/dist/node-gyp-bin
//
// /Users/jasonkuhrt/Library/pnpm
// /opt/homebrew/bin/
// /usr/local/bin
// /System/Cryptexes/App/usr/bin
// /usr/bin
// /bin
// /usr/sbin
// /sbin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin
// /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin
// /Users/jasonkuhrt/google-cloud-sdk/bin
// /Users/jasonkuhrt/Library/pnpm'

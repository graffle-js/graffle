import { execa } from 'execa'
import path from 'node:path'

const examplesDir = path.join(process.cwd(), 'examples')
const result = await execa({ reject: false, cwd: examplesDir })`pnpm tsx ./30_gql/gql_gql-string.ts`

console.log('Failed:', result.failed)
console.log('Exit code:', result.exitCode)
console.log('Stdout length:', result.stdout?.length || 0)
console.log('Stderr length:', result.stderr?.length || 0)
console.log('Stderr:', result.stderr)
/**
 * Sandbox file for testing and experimentation
 */

import { Graffle } from './src/exports/index.js'

const graffle = Graffle.create().transport({ url: 'https://example.com/graphql' })

console.log('Sandbox ready')

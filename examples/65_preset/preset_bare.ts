/**
 * This example shows use of the `bare` preset which is Graffle at
 * its most minimal. It uses no extensions, not even a transport.
 */

import { DocumentBuilder } from 'graffle/extensions/document-builder'
import { Introspection } from 'graffle/extensions/introspection'
import { GraffleBare } from 'graffle/presets/bare'

const graffle1 = GraffleBare.create()

/**
 * Because we have no transports registered,
 * the request methods are not available to us.
 * This include core methods like `gql` and any
 * from extensions.
 */

const _e1: 'Error: You cannot send requests yet. You must setup a transport.' = graffle1.gql

const graffle2 = graffle1.use(DocumentBuilder).use(Introspection())

const _e2: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.document
const _e3: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.$batch
const _e4: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.query.pokemons
const _e5: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.$batch
const _e6: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.mutation.addPokemon
const _e7: 'Error: You cannot send requests yet. You must setup a transport.' = graffle2.introspect

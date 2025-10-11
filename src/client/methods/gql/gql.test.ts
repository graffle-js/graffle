import { Graffle } from '#graffle'
import type { Grafaid } from '#lib/grafaid'
import { test } from '#test/helpers'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { Ts } from '@wollybeard/kit'
import { parse } from 'graphql'
import { describe, expect, expectTypeOf } from 'vitest'
import { TransportMemory } from '../../../extensions/TransportMemory/TransportMemory.js'

// todo test with custom scalars

const g = Graffle
  .create()
  .use(TransportMemory)
  .transport(`memory`, { schema: possibleSchema })
  .with({ output: { envelope: false } })

describe(`given typed document node`, () => {
  test(`returns typed result`, async () => {
    type ResultData = { id: string | null }
    const doc = Ts.as<Grafaid.Document.Typed.Node<ResultData, {}>>(
      parse(`query GetId { id }`),
    )
    const result = await g.gql(doc).$send()
    expectTypeOf(result).toEqualTypeOf<ResultData | null>()
    expect(result).toEqual({ id: db.id1 })
  })

  test(`accepts no variables if none in TDN`, async () => {
    type ResultData = { id: string | null }
    type Variables = {}
    const doc = Ts.as<Grafaid.Document.Typed.Node<ResultData, Variables>>(
      parse(`query GetId { id }`),
    )

    const sender = g.gql(doc)

    // Should work without variables
    await sender.$send()

    // Type checking - cannot pass variables when none expected
    if (false) {
      // @ts-expect-error - cannot pass variables when TDN has none
      await sender.$send({})
    }
  })
})

describe(`client.gql() instance method`, () => {
  describe(`call expression syntax`, () => {
    test(`simple query without variables`, async () => {
      const result = await g.gql(`query GetId { id }`).$send()
      expect(result).toEqual({ id: db.id1 })
    })

    test(`query with variables`, async () => {
      const query = `query GetString($string: String!) {
        stringWithRequiredArg(string: $string)
      }`
      const result = await g.gql(query).$send({ string: 'test' })
      expect(result).toEqual({ stringWithRequiredArg: 'test' })
    })

    test(`mutation`, async () => {
      const result = await g.gql(`mutation GetId { id }`).$send()
      expect(result).toEqual({ id: db.id1 })
    })
  })

  describe(`template literal syntax`, () => {
    test(`works with template literals`, async () => {
      const result = await g.gql(`query GetIdNonNull { idNonNull }`).$send()
      expect(result).toEqual({ idNonNull: db.id1 })
    })
  })

  describe(`error cases`, () => {
    test(`throws when no transport configured`, async () => {
      const clientWithoutTransport = Graffle.create({ check: { preflight: false } })

      await expect(
        clientWithoutTransport.gql(`query GetId { id }`).$send(),
      ).rejects.toThrow()
    })

    test(`template literal syntax is not supported (type-level check)`, () => {
      // @ts-expect-error - template literal syntax not supported, use call expression: gql('...')
      expect(() => g.gql`query GetId { id }`).toThrow()
    })
  })
})

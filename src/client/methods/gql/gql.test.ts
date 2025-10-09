import { test } from '#test/helpers'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { describe, expect, expectTypeOf } from 'vitest'
import type { Grafaid } from '#lib/grafaid'
import { Ts } from '@wollybeard/kit'
import { parse } from 'graphql'
import { Graffle } from '#graffle'
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
      parse(`query { id }`)
    )
    const result = await g.gql(doc).send()
    expectTypeOf(result).toEqualTypeOf<ResultData | null>()
    expect(result).toEqual({ id: db.id1 })
  })

  test(`accepts no variables if none in TDN`, async () => {
    type ResultData = { id: string | null }
    type Variables = {}
    const doc = Ts.as<Grafaid.Document.Typed.Node<ResultData, Variables>>(
      parse(`query { id }`)
    )

    // Should work without variables
    await g.gql(doc).send()

    // Type checking - cannot pass variables when none expected
    if (false) {
      // @ts-expect-error - cannot pass variables when TDN has none
      await g.gql(doc).send({})
    }
  })
})

describe(`client.gql() instance method`, () => {
  describe(`call expression syntax`, () => {
    test(`simple query without variables`, async () => {
      const result = await g.gql(`query { id }`).send()
      expect(result).toEqual({ id: db.id1 })
    })

    test(`query with variables`, async () => {
      const query = `query GetString($string: String!) {
        stringWithRequiredArg(string: $string)
      }`
      const result = await g.gql(query).send({ string: 'test' })
      expect(result).toEqual({ stringWithRequiredArg: 'test' })
    })

    test(`mutation`, async () => {
      const result = await g.gql(`mutation { id }`).send()
      expect(result).toEqual({ id: db.id1 })
    })
  })

  describe(`template literal syntax`, () => {
    test(`works with template literals`, async () => {
      const result = await g.gql(`query { idNonNull }`).send()
      expect(result).toEqual({ idNonNull: db.id1 })
    })
  })

  describe(`error cases`, () => {
    test(`throws when no transport configured`, async () => {
      const clientWithoutTransport = Graffle.create()

      await expect(
        clientWithoutTransport.gql(`query { id }`).send()
      ).rejects.toThrow()
    })
  })
})

describe(`client.send() static API`, () => {
  test(`accepts plain DocumentNode`, async () => {
    const doc = parse(`query { id }`)
    const result = await g.send(doc as any)
    expect(result).toEqual({ id: db.id1 })
  })

  test(`accepts DocumentNode with variables`, async () => {
    const doc = parse(`query GetString($string: String!) {
      stringWithRequiredArg(string: $string)
    }`)
    const result = await g.send(doc as any, { string: 'test' })
    expect(result).toEqual({ stringWithRequiredArg: 'test' })
  })

  test(`accepts TypedDocumentNode`, async () => {
    type Result = { id: string | null }
    type Variables = {}
    const doc = Ts.as<Grafaid.Document.Typed.Node<Result, Variables>>(
      parse(`query { id }`)
    )

    const result = await g.send(doc)
    expectTypeOf(result).toEqualTypeOf<Result | null>()
    expect(result).toEqual({ id: db.id1 })
  })

  test(`operation name for multi-operation documents`, async () => {
    const doc = parse(`
      query GetId { id }
      query GetIdNonNull { idNonNull }
    `)

    const result1 = await g.send(doc as any, 'GetId')
    expect(result1).toEqual({ id: db.id1 })

    const result2 = await g.send(doc as any, 'GetIdNonNull')
    expect(result2).toEqual({ idNonNull: db.id1 })
  })

  test(`throws when no transport configured`, async () => {
    const clientWithoutTransport = Graffle.create()
    const doc = parse(`query { id }`)

    await expect(
      clientWithoutTransport.send(doc as any)
    ).rejects.toThrow()
  })
})

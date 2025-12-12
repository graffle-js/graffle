import { describe, expect, test } from 'vitest'
import { ClientError } from '../../src/entrypoints/main.js'
import { GraphQLClient } from '../../src/entrypoints/main.js'
import { setupMockServer } from './__helpers.js'

const ctx = setupMockServer()

describe(`HTTP 4xx/5xx status codes with GraphQL response body`, () => {
  test(`422 status with GraphQL errors in body - errors should be accessible`, async () => {
    const data = { user: null }
    const graphqlErrors = [
      {
        message: `User not authenticated`,
        extensions: { code: `UNAUTHENTICATED` },
      },
    ]

    // Setup mock to return 422 with GraphQL error response
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(422).json({
        data,
        errors: graphqlErrors,
      })
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(422)
      expect(clientError.response.errors).toEqual(graphqlErrors)
      expect(clientError.response.data).toEqual(data)
    }
  })

  test(`500 status with GraphQL errors in body - errors should be accessible`, async () => {
    const graphqlErrors = [
      {
        message: `Internal server error`,
        extensions: { code: `INTERNAL_SERVER_ERROR` },
      },
    ]

    // Setup mock to return 500 with GraphQL error response
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(500).json({
        errors: graphqlErrors,
      })
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(500)
      expect(clientError.response.errors).toEqual(graphqlErrors)
    }
  })

  test(`404 status with GraphQL errors in body - errors should be accessible`, async () => {
    const graphqlErrors = [
      {
        message: `Resource not found`,
      },
    ]

    // Setup mock to return 404 with GraphQL error response
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(404).json({
        errors: graphqlErrors,
      })
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ resource { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(404)
      expect(clientError.response.errors).toEqual(graphqlErrors)
    }
  })

  test(`403 status with both data and errors - both should be accessible`, async () => {
    const data = { publicData: `visible` }
    const graphqlErrors = [
      {
        message: `Not authorized to access private fields`,
        path: [`user`, `privateField`],
      },
    ]

    // Setup mock to return 403 with partial data and errors
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(403).json({
        data,
        errors: graphqlErrors,
      })
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ publicData user { privateField } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(403)
      expect(clientError.response.errors).toEqual(graphqlErrors)
      expect(clientError.response.data).toEqual(data)
    }
  })

  test(`400 status with validation errors - errors should be accessible`, async () => {
    const graphqlErrors = [
      {
        message: `Variable "$id" of required type "ID!" was not provided.`,
        extensions: { code: `BAD_USER_INPUT` },
      },
    ]

    // Setup mock to return 400 with validation errors
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(400).json({
        errors: graphqlErrors,
      })
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`query($id: ID!) { user(id: $id) { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(400)
      expect(clientError.response.errors).toEqual(graphqlErrors)
    }
  })

  test(`non-GraphQL response - headers and rawBody should be accessible`, async () => {
    const nonGraphQLBody = { error: `Kill switch activated`, reason: `maintenance` }

    // Setup mock to return 503 with non-GraphQL response and custom header
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(503)
        .set(`Kill-Switch`, `true`)
        .set(`Content-Type`, `application/json`)
        .send(JSON.stringify(nonGraphQLBody))
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(503)
      // Verify headers are accessible
      expect(clientError.response.headers).toBeInstanceOf(Headers)
      expect(clientError.response.headers.get(`Kill-Switch`)).toBe(`true`)
      // Verify body is accessible for non-GraphQL responses
      expect(clientError.response.body).toBe(JSON.stringify(nonGraphQLBody))
      // Can parse the body to get detailed error info
      expect(JSON.parse(clientError.response.body)).toEqual(nonGraphQLBody)
    }
  })
})

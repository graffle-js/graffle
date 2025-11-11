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
})

describe(`HTTP 4xx/5xx status codes with non-JSON response body`, () => {
  test(`502 with HTML error page - should handle gracefully with descriptive error`, async () => {
    const htmlResponse = `<html><head><title>502 Bad Gateway</title></head><body><h1>502 Bad Gateway</h1><p>nginx/1.18.0</p></body></html>`

    // Setup mock to return 502 with HTML (typical load balancer error)
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(502).set(`Content-Type`, `text/html`).send(htmlResponse)
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected error to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      const err = error as Error
      // Should NOT throw "Invalid execution result: result is not object or array"
      expect(err.message).not.toContain(`result is not object or array`)
      // Should contain helpful information about the content-type mismatch
      expect(err.message).toContain(`text/html`)
      expect(err.message).toContain(`application/json`)
      // Should include a preview of the response body
      expect(err.message).toContain(`<html>`)
    }
  })

  test(`503 with text/html content-type - should handle gracefully`, async () => {
    const textResponse = `Service Temporarily Unavailable`

    // Setup mock to return 503 with text/html (some testing frameworks add default content-type)
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(503).send(textResponse)
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected error to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      const err = error as Error
      // Should NOT throw "Invalid execution result: result is not object or array"
      expect(err.message).not.toContain(`result is not object or array`)
      // Should indicate unsupported content-type
      expect(err.message).toContain(`unsupported content-type`)
      expect(err.message).toContain(`application/json`)
      // Should include the response body
      expect(err.message).toContain(textResponse)
    }
  })

  test(`500 with plain text error - should handle gracefully`, async () => {
    const textResponse = `Internal Server Error: Database connection timeout`

    // Setup mock to return 500 with plain text
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(500).set(`Content-Type`, `text/plain`).send(textResponse)
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected error to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      const err = error as Error
      // Should NOT throw "Invalid execution result: result is not object or array"
      expect(err.message).not.toContain(`result is not object or array`)
      // Should contain helpful information about the content-type mismatch
      expect(err.message).toContain(`text/plain`)
      expect(err.message).toContain(`application/json`)
      // Should include the error message
      expect(err.message).toContain(`Database connection timeout`)
    }
  })

  test(`200 with HTML instead of JSON - should handle gracefully`, async () => {
    const htmlResponse = `<html><body>Not a GraphQL endpoint</body></html>`

    // Setup mock to return 200 but with HTML instead of JSON
    // (Misconfigured server, wrong endpoint, etc.)
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      res.status(200).set(`Content-Type`, `text/html`).send(htmlResponse)
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected error to be thrown`)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      const err = error as Error
      // Should NOT throw "Invalid execution result: result is not object or array"
      expect(err.message).not.toContain(`result is not object or array`)
      // Should indicate content-type mismatch
      expect(err.message).toContain(`text/html`)
      expect(err.message).toContain(`Not a GraphQL endpoint`)
    }
  })

  test(`500 with JSON but no Content-Type header - should parse successfully`, async () => {
    const graphqlErrors = [
      {
        message: `Internal server error`,
        extensions: { code: `INTERNAL_SERVER_ERROR` },
      },
    ]

    // Some servers omit Content-Type but still return valid JSON
    // Our fix should handle this gracefully by attempting JSON parsing
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ctx.server.use(`*`, function mock(req, res) {
      // Intentionally omit Content-Type header but send valid JSON
      res.status(500).send(JSON.stringify({ errors: graphqlErrors }))
    })

    const client = new GraphQLClient(ctx.url)

    try {
      await client.request(`{ user { id } }`)
      expect.fail(`Expected ClientError to be thrown`)
    } catch (error) {
      // Should successfully parse the JSON response even without Content-Type
      expect(error).toBeInstanceOf(ClientError)
      const clientError = error as ClientError
      expect(clientError.response.status).toBe(500)
      expect(clientError.response.errors).toEqual(graphqlErrors)
    }
  })
})

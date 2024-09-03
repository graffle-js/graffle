/**
 * It is possible to cancel a request using an `AbortController` signal.
 */

import { gql, GraphQLClient } from '../../src/entrypoints/main.js'

const endpoint = `https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr`

/**
 * You can define the `signal` in the `GraphQLClient` constructor:
 */

{
  const abortController = new AbortController()

  const client = new GraphQLClient(endpoint, {
    signal: abortController.signal,
  })

  void client.request(gql`
    {
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }
  `)

  abortController.abort()
}

/**
 * You can also set the signal per request (this will override an existing GraphQLClient signal):
 */

{
  const abortController = new AbortController()

  const client = new GraphQLClient(endpoint)
  const document = gql`
    {
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }
  `
  void client.request({
    document,
    signal: abortController.signal,
  })

  abortController.abort()
}

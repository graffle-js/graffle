/**
 * It's possible to recalculate the global client headers dynamically before each request.
 * To do that, pass a function that returns the headers to the `headers` property when creating a new `GraphQLClient`.
 */

import { gql, GraphQLClient } from '../src/entrypoints/main.js'

const client = new GraphQLClient(`https://some-api`, {
  headers: () => ({ 'X-Sent-At-Time': Date.now().toString() }),
})

const query = gql`
  query getCars {
    cars {
      name
    }
  }
`
// Function saved in the client runs and calculates fresh headers before each request
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const data = await client.request(query)
console.log(data)

import type { GraphQLRequestContext, GraphQLResponse } from '../helpers/types.js'

export class ClientError extends Error {
  public response: GraphQLResponse
  public request: GraphQLRequestContext
  public originalResponse: Response

  constructor(response: GraphQLResponse, request: GraphQLRequestContext, originalResponse: Response) {
    const message = `${ClientError.extractMessage(response)}: ${
      JSON.stringify({
        response,
        request,
      })
    }`

    super(message)

    Object.setPrototypeOf(this, ClientError.prototype)

    this.response = response
    this.request = request
    this.originalResponse = originalResponse

    // this is needed as Safari doesn't support .captureStackTrace
    if (typeof Error.captureStackTrace === `function`) {
      Error.captureStackTrace(this, ClientError)
    }
  }

  private static extractMessage(response: GraphQLResponse): string {
    return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${String(response.status)})`
  }
}

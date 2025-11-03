import { Extension } from '#graffle/extension'
import type { GraphqlKit } from '#src/exports/utilities-for-generated.js'
import * as _ from '@wollybeard/kit/ware'
import { createBody } from './createBody.js'

// todo [1]
// need way to have this extension rely on http extension being used

/**
 * @see https://github.com/jaydenseric/graphql-multipart-request-spec
 */
export const Upload = Extension
  .create(`Upload`)
  .requestInterceptor(async function Upload1({ pack }) {
    if (!isUploadRequest(pack.input.request)) return pack()

    // @ts-expect-error 1
    // TODO we can probably get file upload working for in-memory schemas too :)
    if (pack.input.transportType !== `http`) {
      throw new Error(`Must be using http transport to use "Upload" scalar.`)
    }

    // Remove the content-type header so that fetch sets it automatically upon seeing the body is a FormData instance.
    // @see https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/
    // @see https://stackoverflow.com/questions/3508338/what-is-the-boundary-in-multipart-form-data
    // @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
    return await pack({
      using: {
        // @ts-expect-error fixme
        body(input) {
          // @ts-expect-error 1
          // TODO we can probably get file upload working for in-memory schemas too :)
          if (pack.input.transportType !== `http`) {
            throw new Error(`Must be using http transport to use "Upload" scalar.`)
          }

          // console.log(
          //   0,
          //   createBody({
          //     query: input.query,
          //     variables: input.variables!,
          //   }),
          // )
          return createBody({
            query: input.query,
            variables: input.variables!,
          })
        },
      },
      input: {
        ...pack.input,
        // @ts-expect-error 1
        transport: {
          // @ts-expect-error 1
          ...pack.input.transport,
          headers: {
            // @ts-expect-error 1
            ...pack.input.transport.headers,
            'content-type': ``,
          },
        },
      },
    })
  })
  .return()

const isUploadRequest = (request: GraphqlKit.Request.RequestAnalyzedInput) => {
  if (!request.variables) return false
  return Object.values(request.variables).some(_ => _ instanceof Blob)
}

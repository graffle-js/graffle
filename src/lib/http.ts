export const ACCEPT_HEADER = `Accept`
export const CONTENT_TYPE_HEADER = `Content-Type`
export const CONTENT_TYPE_JSON = `application/json`
export const CONTENT_TYPE_GQL = `application/graphql-response+json`
export const CONTENT_TYPE_MULTIPART_FORM_DATA = `multipart/form-data`

/**
 * Discriminated union for URL input that clearly distinguishes between
 * relative paths and absolute URLs
 */
export type URLInput =
  | { _tag: 'path'; value: string }  // Relative paths: /api, ./api, ../api
  | { _tag: 'url'; value: URL }       // Absolute URLs

/**
 * Parse a string into a URLInput discriminated union.
 * If the string starts with '/', './', or '../', it's treated as a path.
 * Otherwise, it must be a valid absolute URL.
 */
export const parseURLInput = (input: string | URL): URLInput => {
  // If already a URL object, return as URL type
  if (input instanceof URL) {
    return { _tag: 'url', value: input }
  }

  // Check if it's a relative path
  if (input.startsWith('/') || input.startsWith('./') || input.startsWith('../')) {
    return { _tag: 'path', value: input }
  }

  // Otherwise, it must be a valid absolute URL
  // Let this throw if the URL is invalid - no try/catch
  return { _tag: 'url', value: new URL(input) }
}

export const statusCodes = {
  success: 200,
}

export const mergeHeadersInitWithStrategySet = (baseHeaders?: HeadersInit, additionalHeaders?: HeadersInit) => {
  const base = new Headers(baseHeaders)
  const additional = new Headers(additionalHeaders)
  for (const [key, value] of additional) {
    if (value === UnsetValue) {
      base.delete(key)
    } else {
      base.set(key, value) // todo append instead of set?
    }
  }
  return base
}

const UnsetValue = ``

export type httpMethodGet = 'get'

export type httpMethodPost = 'post'

export type HttpMethodInput =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'options'
  | 'trace'
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'
  | 'TRACE'

export const mergeRequestInit = (a?: RequestInit, b?: RequestInit): RequestInit => {
  const headers = mergeHeadersInitWithStrategySet(a?.headers ?? {}, b?.headers ?? {})
  return {
    ...a,
    ...b,
    headers,
  }
}

export type SearchParamsInit = ConstructorParameters<typeof URLSearchParams>[0]

export const searchParamsAppendAllMutate = (url: URL, additionalSearchParams: SearchParamsInit) => {
  const sp = new URLSearchParams(additionalSearchParams)
  sp.forEach((value, key) => {
    url.searchParams.append(key, value)
  })
}

export const searchParamsAppendAll = (url: URL | string, additionalSearchParams: SearchParamsInit): URL | string => {
  // If it's already a URL object, manipulate it directly
  if (url instanceof URL) {
    const url2 = new URL(url)
    searchParamsAppendAllMutate(url2, additionalSearchParams)
    return url2
  }

  // For strings (which might be relative paths), use a dummy base URL
  // to safely manipulate search params, then extract the result
  const dummyBase = 'http://dummy'
  const tempUrl = new URL(url, dummyBase)
  searchParamsAppendAllMutate(tempUrl, additionalSearchParams)

  // Extract the pathname and search params (everything after the origin)
  // This preserves relative URLs like "/api/graphql?query=..."
  return tempUrl.pathname + tempUrl.search
}

/**
 * Merges two sets of headers, with the second set taking precedence for duplicate keys
 */
export function mergeHeadersInitWithStrategyMerge(base?: HeadersInit, additional?: HeadersInit): Headers | undefined {
  if (!additional) return base instanceof Headers ? base : base ? new Headers(base) : undefined
  if (!base) return new Headers(additional)

  const base_ = new Headers(base)
  const additional_ = new Headers(additional)

  for (const [key, value] of additional_) {
    if (value === UnsetValue) {
      base_.delete(key)
    } else {
      base_.append(key, value)
    }
  }

  return base_
}

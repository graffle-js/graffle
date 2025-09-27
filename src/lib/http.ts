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
  | { _tag: 'path'; value: string } // Relative paths: /api, ./api, ../api
  | { _tag: 'url'; value: URL } // Absolute URLs

export const URLInput = {
  /**
   * Create a path variant of URLInput
   */
  path: (value: string): URLInput => ({ _tag: 'path', value }),

  /**
   * Create a URL variant of URLInput
   */
  url: (value: URL): URLInput => ({ _tag: 'url', value }),
}

/**
 * Parse a string into a URLInput discriminated union.
 * If the string starts with '/', './', or '../', it's treated as a path.
 * Otherwise, it must be a valid absolute URL.
 */
export const parseURLInput = (input: string | URL): URLInput => {
  // If already a URL object, return as URL type
  if (input instanceof URL) {
    return URLInput.url(input)
  }

  // Check if it's a relative path
  if (input.startsWith('/') || input.startsWith('./') || input.startsWith('../')) {
    return URLInput.path(input)
  }

  // Otherwise, it must be a valid absolute URL
  // Let this throw if the URL is invalid - no try/catch
  return URLInput.url(new URL(input))
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

export const searchParamsAppendAll = (url: URL | string, additionalSearchParams: SearchParamsInit) => {
  const url2 = new URL(url)
  searchParamsAppendAllMutate(url2, additionalSearchParams)
  return url2
}

export const searchParamsAppendAllToPath = (path: string, additionalSearchParams: SearchParamsInit): string => {
  // Use a dummy base to safely manipulate search params for a path
  const dummyBase = 'http://dummy'
  const tempUrl = new URL(path, dummyBase)
  searchParamsAppendAllMutate(tempUrl, additionalSearchParams)
  // Extract everything after the dummy origin
  return tempUrl.href.slice(dummyBase.length)
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

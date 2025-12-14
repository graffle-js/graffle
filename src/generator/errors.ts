import { Data } from 'effect'

export class ConfigError extends Data.TaggedError('ConfigError')<{
  message: string
  cause?: unknown
}> {}

export class SchemaError extends Data.TaggedError('SchemaError')<{
  message: string
  via: 'sdl' | 'sdlFile' | 'url' | 'instance'
  cause?: unknown
}> {}

export class ImportError extends Data.TaggedError('ImportError')<{
  paths: string[]
  cause?: unknown
}> {}

export class FormatterError extends Data.TaggedError('FormatterError')<{
  message: string
}> {}

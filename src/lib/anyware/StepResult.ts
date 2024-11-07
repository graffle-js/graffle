import type { Errors } from '../errors/__.js'
import type { Deferred } from '../prelude.js'
import type { InterceptorGeneric } from './Interceptor/Interceptor.js'

export type StepResult =
  | StepResultCompleted
  | StepResultShortCircuited
  | StepResultErrorUser
  | StepResultErrorImplementation
  | StepResultErrorExtension

export interface StepResultShortCircuited {
  type: 'shortCircuited'
  result: unknown
}

export interface StepResultCompleted {
  type: 'completed'
  effectiveInput: object
  result: unknown
  nextExtensionsStack: readonly InterceptorGeneric[]
}

export type StepResultError = StepResultErrorExtension | StepResultErrorImplementation | StepResultErrorUser

export interface StepResultErrorUser {
  type: 'error'
  hookName: string
  source: 'user'
  error: Errors.ContextualError
  extensionName: string
}

export interface StepResultErrorExtension {
  type: 'error'
  hookName: string
  source: 'extension'
  error: Error
  interceptorName: string
}

export interface StepResultErrorImplementation {
  type: 'error'
  hookName: string
  source: 'implementation'
  error: Error
}

export type StepResultErrorAsync = Deferred<StepResultErrorExtension>

import { Grafaid } from '../$$.js'
import { Test } from '@wollybeard/kit/test'
import { parse } from 'graphql'
import { expect } from 'vitest'
import type { Docpar } from '../../$.js'
import { mapVariablesByTypeNames } from './mapVariables.js'

const createRequest = (
  query: string,
  variables?: Grafaid.Variables,
): Grafaid.RequestAnalyzedDocumentNodeInput => {
  const document = parse(query)
  const operation = document.definitions[0] as Grafaid.Document.OperationDefinitionNode
  return {
    query: document,
    operation,
    variables,
  }
}

const sddmUpload: Docpar.SchemaDrivenDataMap = {
  types: { Upload: `Upload` },
  operations: {},
  directives: {},
}

const sddmNested: Docpar.SchemaDrivenDataMap = {
  types: {
    UserInput: {
      f: { avatar: { nt: `Upload` } },
      fcs: ['avatar'],
    },
    Upload: `Upload`,
  },
  operations: {},
  directives: {},
}

const visitBlobToNull = (value: unknown) => value instanceof Blob ? null : value

Test.on(mapVariablesByTypeNames)
  .cases(
    // Scalar
    [{
      sddm: sddmUpload,
      request: createRequest(`mutation($file: Upload!) { upload(file: $file) }`, { file: new Blob([`test`]) }),
      typeNames: ['Upload'],
      visitor: visitBlobToNull,
      immutable: true,
    }, { file: null }],
    // Nested
    [{
      sddm: sddmNested,
      request: createRequest(`mutation($user: UserInput!) { createUser(user: $user) }`, {
        user: { avatar: new Blob([`avatar`]) },
      }),
      typeNames: ['Upload'],
      visitor: visitBlobToNull,
      immutable: true,
    }, { user: { avatar: null } }],
    // Array
    [{
      sddm: sddmUpload,
      request: createRequest(`mutation($files: [Upload!]!) { uploadMany(files: $files) }`, {
        files: [new Blob([`file1`]), new Blob([`file2`])],
      }),
      typeNames: ['Upload'],
      visitor: visitBlobToNull,
      immutable: true,
    }, { files: [null, null] }],
  )
  .test()

Test.describe('immutable mode')
  .inputType<Grafaid.Variables>()
  .outputType<Grafaid.Variables>()
  .cases(
    [{ file: new Blob([`test`]) }, { file: null }],
  )
  .test(({ input, output }) => {
    const original = input
    const request = createRequest(`mutation($file: Upload!) { upload(file: $file) }`, input)

    const result = mapVariablesByTypeNames({
      sddm: sddmUpload,
      request,
      typeNames: ['Upload'],
      visitor: () => null,
      immutable: true,
    })

    expect(original['file']).toBeInstanceOf(Blob) // Original unchanged
    expect(result).toEqual(output)
    expect(result).not.toBe(original) // Different object
  })

Test.describe('mutable mode')
  .inputType<Grafaid.Variables>()
  .outputType<Grafaid.Variables>()
  .cases(
    [{ file: new Blob([`test`]) }, { file: null }],
  )
  .test(({ input, output }) => {
    const request = createRequest(`mutation($file: Upload!) { upload(file: $file) }`, input)

    const result = mapVariablesByTypeNames({
      sddm: sddmUpload,
      request,
      typeNames: ['Upload'],
      visitor: () => null,
      immutable: false,
    })

    expect(input).toEqual(output) // Original modified
    expect(result).toBe(input) // Same object
  })

Test.describe('path tracking')
  .inputType<void>()
  .outputType<string[]>()
  .cases(
    [undefined, ['variables.user.avatar']],
  )
  .test(() => {
    const paths: string[] = []
    const request = createRequest(`mutation($user: UserInput!) { createUser(user: $user) }`, {
      user: { avatar: new Blob([`test`]) },
    })

    mapVariablesByTypeNames({
      sddm: sddmNested,
      request,
      typeNames: ['Upload'],
      visitor: (_value, path) => {
        paths.push(path)
        return null
      },
      immutable: true,
    })

    expect(paths).toEqual(['variables.user.avatar'])
  })

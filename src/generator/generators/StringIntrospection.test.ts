import { Grafaid } from '#lib/grafaid'
import { expect, test } from 'vitest'
import { createConfig } from '../config/config.js'
import { ModuleGeneratorStringIntrospection } from './StringIntrospection.js'

test('generates string introspection types', async () => {
  // Create a simple test schema
  const schema = Grafaid.Schema.buildSchema(`
    type Query {
      hello: String
      user(id: ID!): User
    }

    type User {
      id: ID!
      name: String!
      email: String
    }

    enum Role {
      ADMIN
      USER
    }
  `)

  // Create config
  const config = await createConfig({
    schema: {
      type: 'instance',
      instance: schema,
    },
    currentWorkingDirectory: process.cwd(),
  })

  // Generate string introspection module
  const result = ModuleGeneratorStringIntrospection.generate(config)

  // Type guard: createModuleGenerator always returns a single module, never an array
  if (Array.isArray(result)) throw new Error('Expected single module')

  // Check that introspection_types is generated
  expect(result.content).toContain('export type introspection_types = {')
  expect(result.content).toContain(`'Query': {`)
  expect(result.content).toContain(`kind: 'OBJECT'`)
  expect(result.content).toContain(`name: 'Query'`)

  // Check that fields are generated
  expect(result.content).toContain(`'hello': {`)
  expect(result.content).toContain(`'user': {`)

  // Check that User type is generated
  expect(result.content).toContain(`'User': {`)
  expect(result.content).toContain(`kind: 'OBJECT'`)
  expect(result.content).toContain(`'id': {`)
  expect(result.content).toContain(`'name': {`)
  expect(result.content).toContain(`'email': {`)

  // Check that enum is generated
  expect(result.content).toContain(`'Role': {`)
  expect(result.content).toContain(`enumValues: 'ADMIN' | 'USER'`)

  // Check that introspection type is generated
  expect(result.content).toContain('export type introspection = {')
  expect(result.content).toContain(`query: 'Query'`)
  expect(result.content).toContain('mutation: never')
  expect(result.content).toContain('subscription: never')
  expect(result.content).toContain('types: introspection_types')
})

test('handles interface types with implementations', async () => {
  const schema = Grafaid.Schema.buildSchema(`
    type Query {
      nodes: [Node!]!
    }

    interface Node {
      id: ID!
    }

    type User implements Node {
      id: ID!
      name: String!
    }

    type Post implements Node {
      id: ID!
      title: String!
    }
  `)

  const config = await createConfig({
    schema: {
      type: 'instance',
      instance: schema,
    },
    currentWorkingDirectory: process.cwd(),
  })

  const result = ModuleGeneratorStringIntrospection.generate(config)

  // Type guard: createModuleGenerator always returns a single module, never an array
  if (Array.isArray(result)) throw new Error('Expected single module')

  // Check interface is generated
  expect(result.content).toContain(`'Node': {`)
  expect(result.content).toContain(`kind: 'INTERFACE'`)
  expect(result.content).toContain(`possibleTypes: 'User' | 'Post'`)

  // Check implementations reference the interface
  expect(result.content).toContain(`'User': {`)
  expect(result.content).toContain(`'Post': {`)
})

test('handles union types', async () => {
  const schema = Grafaid.Schema.buildSchema(`
    type Query {
      search: SearchResult
    }

    union SearchResult = User | Post

    type User {
      id: ID!
      name: String!
    }

    type Post {
      id: ID!
      title: String!
    }
  `)

  const config = await createConfig({
    schema: {
      type: 'instance',
      instance: schema,
    },
    currentWorkingDirectory: process.cwd(),
  })

  const result = ModuleGeneratorStringIntrospection.generate(config)

  // Type guard: createModuleGenerator always returns a single module, never an array
  if (Array.isArray(result)) throw new Error('Expected single module')

  // Check union is generated
  expect(result.content).toContain(`'SearchResult': {`)
  expect(result.content).toContain(`kind: 'UNION'`)
  expect(result.content).toContain(`possibleTypes: 'User' | 'Post'`)
})

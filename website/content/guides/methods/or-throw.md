# Or Throw

You can use `orThrow` method variants to only return the success.

This is achieved by automatically adding `__typename` field to each object-like root field's selection set. Then the returned object name can be analyzed. Example:

```graphql
mutation {
	foo {
		... on Bar {
			id
		}
	}
}
```

becomes:

```graphql
mutation {
	foo {
		__typename
		... on Bar {
			id
		}
	}
}
```

The error that gets thrown is an instance of `Error` and its message is generic. However if all your error objects share an interface that contains a `message` field of `String` type then that message will be automatically be queried for used in the thrown Error. Example:

```graphql
mutation {
	foo {
		... on Bar {
			id
		}
	}
}
```

becomes:

```graphql
mutation {
	foo {
		__typename
		... on Error { # You could name your interface anything.
			message # Your interface must have a message field of String type.
		}
		... on Bar {
			id
		}
	}
}
```

Example:

```ts
const result = await client.mutation.fooOrThrow({ onBar: { id } })
result // type is narrowed to just Bar case.
```
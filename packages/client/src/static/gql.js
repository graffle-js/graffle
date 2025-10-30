import { Docpar } from '@graffle/document/$.js';
import { print } from '@0no-co/graphql.web';
/**
 * Namespace for static gql function types and utilities.
 *
 * Provides the canonical input type definition for static document building.
 * For instance gql (which accepts pre-built typed documents), see GqlMethod.Arguments.
 */
export var Gql;
(function (Gql) {
    Gql.normalizeArguments = (args) => {
        const [first, second] = args;
        // String GraphQL document
        if (typeof first === 'string') {
            return {
                type: 'graphql',
                document: first,
                options: undefined,
            };
        }
        // Document builder object
        return {
            type: 'object',
            document: first,
            options: second,
        };
    };
})(Gql || (Gql = {}));
export const defaults = {
    hoistArguments: true,
};
export const createGql = (config) => {
    return ((...args) => {
        const normalized = Gql.normalizeArguments(args);
        if (normalized.type === 'graphql') {
            // For string inputs, return as-is
            // Type inference is handled at compile time by the document parser
            return normalized.document;
        }
        // Normalize the document object into internal representation
        const documentNormalized = Docpar.Object.Select.Document.normalizeOrThrow(normalized.document);
        // Convert to GraphQL document
        const result = Docpar.Object.ToGraphQLDocument.toGraphQLDocument(documentNormalized, {
            ...defaults,
            ...normalized.options,
            sddm: config.sddm,
        });
        // Print and return as TypedFullDocument
        return print(result.document);
    });
};
/**
 * Schema-less unified document builder function.
 *
 * Build GraphQL documents using either GraphQL string syntax or TypeScript objects.
 * Works without needing a client instance or schema generation, making it perfect for
 * quick prototyping, schema-less workflows, or when you prefer inline GraphQL strings.
 *
 * @remarks
 * This function accepts two input formats:
 * - **String**: Standard GraphQL document syntax with type inference
 * - **Object**: TypeScript objects with type-safe field selection
 *
 * For simpler single-field or multi-field operations, consider using the
 * {@link query} and {@link mutation} builders directly.
 *
 * @example GraphQL string documents
 * ```ts
 * import { gql } from 'graffle'
 *
 * // Simple query
 * const doc1 = gql(`query { user { id name } }`)
 *
 * // With variables
 * const doc2 = gql(`
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *       email
 *     }
 *   }
 * `)
 *
 * // Multiple operations
 * const doc3 = gql(`
 *   query GetUser { user { id name } }
 *   mutation CreateUser { createUser { id } }
 * `)
 * ```
 *
 * @example Document object syntax
 * ```ts
 * import { gql } from 'graffle'
 *
 * // Single query operation
 * const doc1 = gql({
 *   query: {
 *     user: {
 *       id: true,
 *       name: true
 *     }
 *   }
 * })
 *
 * // Multiple operations
 * const doc2 = gql({
 *   query: {
 *     getUser: {
 *       user: { id: true, name: true }
 *     }
 *   },
 *   mutation: {
 *     createUser: {
 *       createUser: { id: true }
 *     }
 *   }
 * })
 * ```
 *
 * @see {@link https://graffle.js.org/guides/documents/static | Static Document Guide}
 * @see {@link query} For simplified query operations
 * @see {@link mutation} For simplified mutation operations
 */
export const gql = createGql({
    sddm: undefined, // Schema-less mode - no SDDM needed
});
//# sourceMappingURL=gql.js.map
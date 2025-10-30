import type { Bar } from '../objects/Bar/$.js';
import type { Foo } from '../objects/Foo/$.js';
/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
 *
 * Union documentation.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Members** | 2 |
 * | **Types** | {@link $Schema.Bar}, {@link $Schema.Foo} |
 */
export interface FooBarUnion {
    kind: 'Union';
    name: 'FooBarUnion';
    members: [Bar, Foo];
    membersUnion: Bar | Foo;
    membersIndex: {
        Bar: Bar;
        Foo: Foo;
    };
}
//# sourceMappingURL=FooBarUnion.d.ts.map
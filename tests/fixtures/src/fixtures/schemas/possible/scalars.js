import { Graffle } from '#graffle';
export const Date = Graffle.Scalars.create('Date', {
    decode: (value) => new globalThis.Date(value),
    encode: (value) => value.toISOString(),
});
export const bigint = Graffle.Scalars.create('bigint', {
    decode: (value) => BigInt(value),
    encode: (value) => value.toString(),
});
//# sourceMappingURL=scalars.js.map
/**
 * Utility types
 *
 * @module
 */

/**
 * Optional type that may be `T` or `null`
 *
 * @typeParam T - non-null type
 *
 * @example
 * const optString: Opt<string> = "hello";
 * const optNull: Opt<string> = null;
 */
export type Opt<T> = T | null;

/**
 * Nullable type that may be `Opt<T>` or `undefined`,
 * opposite of the typescript builtin `NonNullable<T>`
 *
 * @typeParam T - non-null type
 *
 * @example
 * const nullableString: Nullable<string> = "hello";
 * const nullableNull: Nullable<string> = null;
 * const nullableUndefined: Nullable<string> = undefined;
 */
export type Nullable<T> = Opt<T> | undefined;

/**
 * Type that maps all properties in `T` to `NonNullable`
 *
 * @typeParam T - type to map
 *
 * @example
 * interface Hello { hello: Nullable<string>; };
 * type HelloNonNullableKeys = NonNullableKeys<Hello>; // { hello: string; };
 */
export type NonNullableKeys<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

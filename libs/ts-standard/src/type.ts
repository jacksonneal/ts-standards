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
 * opposite of the TypeScript builtin `NonNullable<T>`
 *
 * @typeParam T - non-null type
 *
 * @example
 * const nullableString: Nullable<string> = "hello";
 * const nullableNull: Nullable<string> = null;
 * const nullableUndefined: Nullable<string> = undefined;
 */
export type Nullable<T> = Opt<T> | undefined;

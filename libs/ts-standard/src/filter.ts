/**
 * Utility functions for filtering and type checking
 *
 * @module
 */

import { NonNullableKeys, Nullable } from "@";

/**
 * Check if a value is not `null` and not `undefined`.
 *
 * @typeParam T - type of value to check
 *
 * @param value - to check
 * @returns whether value is not `null` and not `undefined`
 *
 * @example
 * const isString = isNonNullable<string>("hello"); // true
 * const isNull = isNonNullable(null); // false
 * const isUndefined = isNonNullable(undefined); // false
 * const nonNullables: number[] = [1, 2, null, undefined].filter(isNonNullable); // [1, 2]
 */
export function isNonNullable<T>(value: Nullable<T>): value is NonNullable<T> {
  return value != null;
}

/**
 * Check if an object has `NonNullable` values for the given keys.
 *
 * @typeParam T - type of value to check
 * @typeParam K - keys of `T` to check
 *
 * @param keys - to check values of
 * @returns - function to check a given value
 *
 * @example
 * interface Hello { hello: Nullable<string>; };
 * const isString = isNonNullableKeys<Hello>(["hello"])({ hello: "hello" }); // true
 * const isNull = isNonNullableKeys<Hello>(["hello"])({ hello: null }); // false
 * const isUndefined = isNonNullableKeys<Hello>(["hello"])({ hello: undefined }); // false
 */
export function isNonNullableKeys<T, K extends keyof T = keyof T>(
  keys: K[]
): (value: T) => value is NonNullableKeys<Pick<T, K>> & T {
  /**
   * @param value - value to check
   * @returns whether value has non-nullable entries for all given keys
   */
  return (value: T): value is NonNullableKeys<Pick<T, K>> & T =>
    keys.every((key) => isNonNullable(value[key]));
}

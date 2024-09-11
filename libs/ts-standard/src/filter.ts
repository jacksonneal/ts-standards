/**
 * Utility functions for filtering and type checking
 *
 * @module
 */

import { Nullable } from "@/type";

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

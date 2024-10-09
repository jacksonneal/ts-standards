/**
 * Unit tests for `@/filter` module
 *
 * @module
 */

import { describe } from 'node:test';

import { expect, test } from 'vitest'

import { isNonNullable, Nullable } from '@';

import { isNonNullableKeys } from '../src/filter';

void describe('isNonNullable', () => {
  test.each([
    ["hello", true],
    [null, false],
    [undefined, false],
  ])('%# isNonNullable(%o) -> %o', (value, expected) => {
    expect(isNonNullable(value)).toBe(expected);
  });

  test.each([
    [[], []],
    [["hello", null, "there", undefined], ["hello", "there"]],
  ])('%# %o.filter(isNonNullable) -> %o', (value, expected) => {
    expect(value.filter(isNonNullable)).toStrictEqual(expected);
  });
})

void describe('isNonNullableKeys', () => {
  interface Hello { hello: Nullable<string> };
  test.each([
    [{ hello: "hello" }, ["hello"], true],
    [{ hello: "hello" }, [], true],
    [{ hello: null }, ["hello"], false],
    [{ hello: null }, [], true],
    [{ hello: undefined }, ["hello"], false],
    [{ hello: undefined }, [], true],
  ])('%# isNonNullableKeys(%o) -> %o', (value, keys, expected) => {
    expect(isNonNullableKeys<Hello>(keys as (keyof Hello)[])(value)).toBe(expected);
  });
});

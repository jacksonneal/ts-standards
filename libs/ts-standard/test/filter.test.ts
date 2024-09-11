/**
 * Unit tests for `@/filter` module
 *
 * @module
 */

import { describe } from 'node:test';

import { expect, test } from 'vitest'

import { isNonNullable } from '@';

void describe('isNonNullable', () => {
  test.each([
    ["hello", true],
    [null, false],
    [undefined, false],
  ])('isNonNullable(%o) -> %o', (value, expected) => {
    expect(isNonNullable(value)).toBe(expected);
  });

  test.each([
    [[], []],
    [["hello", null, "there", undefined], ["hello", "there"]],
  ])('%o.filter(isNonNullable) -> %o', (value, expected) => {
    expect(value.filter(isNonNullable)).toStrictEqual(expected);
  })
})

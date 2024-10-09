/**
 * Example type usage for `@/filter` module
 *
 * @module
 */

import { isNonNullable } from "@";

import { isNonNullableKeys } from "../src/filter";
import { is } from "./shared.ex";

// `isNonNullable<T>`
is<string[]>(["hello", "there", null, undefined].filter(isNonNullable));

// `isNonNullableKeys<T>`
is<{ hello: string; }[]>([{ hello: "there" }, { hello: null }, { hello: undefined }]
  .filter(isNonNullableKeys(["hello"])));

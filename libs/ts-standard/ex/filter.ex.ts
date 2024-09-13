/**
 * Example type usage for `@/filter` module
 *
 * @module
 */

import { isNonNullable } from "@";

import { is } from "./shared.ex";

// isNonNullable
is<string[]>(["hello", "there", null, undefined].filter(isNonNullable));

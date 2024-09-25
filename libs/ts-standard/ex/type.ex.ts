/**
 * Example type usage for `@/type` module
 *
 * @module
 */

import { Nullable, Opt } from "@";

import { is } from "./shared.ex";

// Opt<T>
is<Opt<string>>("hello");
is<Opt<string>>(null);
// @ts-expect-error `undefined` is not `Opt`
is<Opt<string>>(undefined);

// Nullable<T>
is<Nullable<string>>("hello");
is<Nullable<string>>(null);
is<Nullable<string>>(undefined);

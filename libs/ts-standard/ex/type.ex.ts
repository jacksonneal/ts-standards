/**
 * Example type usage for `@/type` module
 *
 * @module
 */

import { NonNullableKeys, Nullable, Opt } from "@";

import { is } from "./shared.ex";

// `Opt<T>`
is<Opt<string>>("hello");
is<Opt<string>>(null);
// @ts-expect-error Argument of type `undefined` is not assignable to parameter of type `Opt<string>`.
is<Opt<string>>(undefined);

// `Nullable<T>`
is<Nullable<string>>("hello");
is<Nullable<string>>(null);
is<Nullable<string>>(undefined);

// `NonNullableKeys<T>`
interface Hello { hello: Nullable<string> };
is<NonNullableKeys<Hello>>({ hello: "hello" })
// @ts-expect-error Type `null` is not assignable to type `string`.
is<NonNullableKeys<Hello>>({ hello: null })
// @ts-expect-error Type `undefined` is not assignable to type `string`.
is<NonNullableKeys<Hello>>({ hello: undefined })

/**
 * Example type usage for `@/type` module
 *
 * @module
 */

import { Nullable, Opt } from "@/type";

import { is } from "./shared.ex";

// Opt<T>
is<Opt<string>>("hello");
is<Opt<string>>(null);

// Nullable<T>
is<Nullable<string>>("hello");
is<Nullable<string>>(null);
is<Nullable<string>>(undefined);

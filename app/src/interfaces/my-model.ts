import { Comparable } from "./comparable.js";
import { PrintInterface } from "./print-interface.js";

export interface MyModel<T> extends PrintInterface, Comparable<T> {}
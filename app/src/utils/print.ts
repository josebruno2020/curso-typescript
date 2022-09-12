import { PrintInterface } from "../interfaces/print-interface.js";

export function print(...objetos: PrintInterface[]) {
  for(let obj of objetos) {
    console.log(obj.stringToPrint())
  }
}
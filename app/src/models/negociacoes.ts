import { PrintInterface } from "../interfaces/print-interface.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements PrintInterface {
  constructor(private readonly negociacoes: Negociacao[] = []) {}

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  listar(): readonly Negociacao[] {
    return this.negociacoes;
  }

  stringToPrint(): string {
    return JSON.stringify(this.negociacoes, null, 2)
  }
}

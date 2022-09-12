import { MyModel } from "../interfaces/my-model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements MyModel<Negociacoes> {
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

  isEqual(obj: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(obj.listar())
  }
}

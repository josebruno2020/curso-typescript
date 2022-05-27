import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  constructor(private readonly negociacoes: Negociacao[] = []) {}

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  listar(): readonly Negociacao[] {
    return this.negociacoes;
  }
}

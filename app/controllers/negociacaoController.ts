import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  constructor(
    private inputData = document.querySelector("#data") as HTMLInputElement,
    private inputQuantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement,
    private inputValor = document.querySelector("#valor") as HTMLInputElement,
    private negociacoes = new Negociacoes()
  ) {}

  handle(): void {
    const negociacao = this.criaNegociacao();

    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.listar());
    this.cleanForm();
  }

  criaNegociacao(): Negociacao {
    const date = new Date(this.inputData.value.replace(/[-]/g, ","));
    return new Negociacao(
      date,
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    );
  }

  cleanForm(): void {
    const form = document.querySelector(".form") as HTMLFormElement;
    form.reset();
    this.inputData.focus();
  }
}

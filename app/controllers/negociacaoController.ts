import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
  constructor(
    private inputData = document.querySelector("#data") as HTMLInputElement,
    private inputQuantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement,
    private inputValor = document.querySelector("#valor") as HTMLInputElement,
    private negociacoes = new Negociacoes(),
    private negociacoesView = new NegociacoesView("#negociacoesView"),
    private mensagemView = new MensagemView("#mensagemView")
  ) {
    this.negociacoesView.update(this.negociacoes);
  }

  handle(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação salva com sucesso!");
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

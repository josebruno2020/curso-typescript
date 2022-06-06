import { loggedTime } from "../decorators/logged-time.js";
import { DaysEnum } from "../enums/DaysEnum.js";
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

  @loggedTime()
  handle(): void {
    const negociacao = Negociacao.create(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.isBusinessDay(negociacao.data)) {
      return this.mensagemView.update("Apenas negociações em dias úteis!");
    }

    this.negociacoes.adiciona(negociacao);
    this.updateView();
    this.cleanForm();
  }

  private isBusinessDay(date: Date): boolean {
    return (
      date.getDay() !== DaysEnum.DOMINGO && date.getDay() !== DaysEnum.SABADO
    );
  }

  private cleanForm(): void {
    const form = document.querySelector(".form") as HTMLFormElement;
    form.reset();
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação salva com sucesso!");
  }
}

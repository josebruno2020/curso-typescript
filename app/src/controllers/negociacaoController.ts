import { domInjector } from "../decorators/dom-injector.js";
import { loggedTime } from "../decorators/logged-time.js";
import { DaysEnum } from "../enums/DaysEnum.js";
import { NegociacaoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
  @domInjector('#valor')
  private inputValor!: HTMLInputElement
  @domInjector('#quantidade')
  private inputQuantidade!: HTMLInputElement
  @domInjector('#data')
  private inputData!: HTMLInputElement

  private negociacoes = new Negociacoes()
  private negociacoesView = new NegociacoesView("#negociacoesView")
  private mensagemView = new MensagemView("#mensagemView")


  constructor(   
    
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

  async importData(): Promise<void> {
    try {
      const fecth = await fetch('http://localhost:8080/dados')
      const data: NegociacaoDia[] = await fecth.json()
      
      const negociacoes: Negociacao[] = data.map(d => {
        return new Negociacao(new Date(), d.vezes, d.montante)
      })

      for(let neg of negociacoes) {        
        this.negociacoes.adiciona(neg);
      }

      this.negociacoesView.update(this.negociacoes)

      console.log(negociacoes)
      
    } catch(err: any) {
      alert('não foi possível buscar as informações.')
      console.log(err)
    }
    
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

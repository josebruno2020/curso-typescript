import { DaysEnum } from "../enums/DaysEnum.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor(inputData = document.querySelector("#data"), inputQuantidade = document.querySelector("#quantidade"), inputValor = document.querySelector("#valor"), negociacoes = new Negociacoes(), negociacoesView = new NegociacoesView("#negociacoesView"), mensagemView = new MensagemView("#mensagemView")) {
        this.inputData = inputData;
        this.inputQuantidade = inputQuantidade;
        this.inputValor = inputValor;
        this.negociacoes = negociacoes;
        this.negociacoesView = negociacoesView;
        this.mensagemView = mensagemView;
        this.negociacoesView.update(this.negociacoes);
    }
    handle() {
        const negociacao = Negociacao.create(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isBusinessDay(negociacao.data)) {
            return this.mensagemView.update("Apenas negociações em dias úteis!");
        }
        this.negociacoes.adiciona(negociacao);
        this.updateView();
        this.cleanForm();
    }
    isBusinessDay(date) {
        return (date.getDay() !== DaysEnum.DOMINGO && date.getDay() !== DaysEnum.SABADO);
    }
    cleanForm() {
        const form = document.querySelector(".form");
        form.reset();
        this.inputData.focus();
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação salva com sucesso!");
    }
}

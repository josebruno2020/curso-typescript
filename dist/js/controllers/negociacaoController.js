import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor(inputData = document.querySelector("#data"), inputQuantidade = document.querySelector("#quantidade"), inputValor = document.querySelector("#valor"), negociacoes = new Negociacoes()) {
        this.inputData = inputData;
        this.inputQuantidade = inputQuantidade;
        this.inputValor = inputValor;
        this.negociacoes = negociacoes;
    }
    handle() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.listar());
        this.cleanForm();
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace(/[-]/g, ","));
        return new Negociacao(date, parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }
    cleanForm() {
        const form = document.querySelector(".form");
        form.reset();
        this.inputData.focus();
    }
}

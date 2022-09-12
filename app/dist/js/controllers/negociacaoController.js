var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { domInjector } from "../decorators/dom-injector.js";
import { loggedTime } from "../decorators/logged-time.js";
import { DaysEnum } from "../enums/DaysEnum.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
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
    importData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecth = yield fetch('http://localhost:8080/dados');
                const data = yield fecth.json();
                const negociacoes = data.map(d => {
                    return new Negociacao(new Date(), d.vezes, d.montante);
                });
                for (let neg of negociacoes) {
                    this.negociacoes.adiciona(neg);
                }
                this.negociacoesView.update(this.negociacoes);
                console.log(negociacoes);
            }
            catch (err) {
                alert('não foi possível buscar as informações.');
                console.log(err);
            }
        });
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
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    loggedTime()
], NegociacaoController.prototype, "handle", null);

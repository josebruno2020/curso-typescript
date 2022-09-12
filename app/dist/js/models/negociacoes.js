export class Negociacoes {
    constructor(negociacoes = []) {
        this.negociacoes = negociacoes;
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
    stringToPrint() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}

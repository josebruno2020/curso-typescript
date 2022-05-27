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
}

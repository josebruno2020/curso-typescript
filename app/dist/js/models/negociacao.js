export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    static create(data, quantidade, valor) {
        const date = new Date(data.replace(/[-]/g, ","));
        return new Negociacao(date, parseInt(quantidade), parseFloat(valor));
    }
}

import { MyModel } from "../interfaces/my-model.js";;

export class Negociacao implements MyModel<Negociacao> {
  constructor(
    private readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data() {
    return new Date(this._data.getTime());
  }

  static create(data: string, quantidade: string, valor: string): Negociacao {
    const date = new Date(data.replace(/[-]/g, ","));
    return new Negociacao(date, parseInt(quantidade), parseFloat(valor));
  }

  stringToPrint(): string {
    return `
      DATA: ${this.data}
      Quantidade: ${this.quantidade}
      Vlor: ${this.valor}
    `
  }

  isEqual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate()
      && this.data.getMonth() === negociacao.data.getMonth()
      && this.data.getFullYear() === negociacao.data.getFullYear()
  }
}

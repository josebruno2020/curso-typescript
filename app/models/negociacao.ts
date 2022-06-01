export class Negociacao {
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
}

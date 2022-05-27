export class Negociacao {
  constructor(
    public readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data() {
    return new Date(this._data.getTime());
  }
}

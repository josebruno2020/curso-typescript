import { NegociacaoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  static async getNegociacoesDoDia(): Promise<Negociacao[]> {
    try {
      const fecth = await fetch('http://localhost:8080/dados')
      const data: NegociacaoDia[] = await fecth.json() as NegociacaoDia[]
      
      return data.map(d => {
        return new Negociacao(new Date(), d.vezes, d.montante)
      })
      
    } catch(err: any) {
      alert('não foi possível buscar as informações.')
      console.log(err)

      throw err
    }
  }
}
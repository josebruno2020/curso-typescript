import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${this.renderBody(model)}
        </tbody>
      </table>
    
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }

  private renderBody(model: Negociacoes): string {
    return model
      .listar()
      .map(({ data, quantidade, valor }) => {
        return `
        <tr>
          <td>${this.formatDate(data)}</td>
          <td>${quantidade}</td>
          <td>${valor}</td>
        </tr>
      `;
      })
      .join("");
  }
}

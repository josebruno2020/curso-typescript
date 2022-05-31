import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  constructor(
    selector: string,
    private element = document.querySelector(selector) as HTMLElement
  ) {}

  template(model: Negociacoes): string {
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
          ${model
            .listar()
            .map(({ data, quantidade, valor }) => {
              return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(data)}</td>
                <td>${quantidade}</td>
                <td>${valor}</td>
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    
    `;
  }

  update(model: Negociacoes): void {
    this.element.innerHTML = this.template(model);
  }
}

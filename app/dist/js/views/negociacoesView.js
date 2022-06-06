import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
    renderBody(model) {
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

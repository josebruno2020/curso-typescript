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
}

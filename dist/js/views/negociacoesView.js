export class NegociacoesView {
    constructor(selector, element = document.querySelector(selector)) {
        this.element = element;
    }
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
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}

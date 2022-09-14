import { NegociacaoController } from "./controllers/negociacaoController.js";
import { ConnectionFactory } from './database/ConnectionFactory.js';
const controller = new NegociacaoController();
const form = document.querySelector(".form");
ConnectionFactory.getConnection().then(c => console.log(c));
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.handle();
});
const importButton = document.querySelector('#botao-importa');
importButton === null || importButton === void 0 ? void 0 : importButton.addEventListener('click', (event) => {
    controller.importData();
});
//# sourceMappingURL=app.js.map
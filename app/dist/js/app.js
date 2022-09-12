import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.handle();
});
const importButton = document.querySelector('#botao-importa');
importButton === null || importButton === void 0 ? void 0 : importButton.addEventListener('click', (event) => {
    controller.importData();
});

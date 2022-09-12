import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form: HTMLFormElement | null = document.querySelector(".form");

form?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.handle();
});

const importButton = document.querySelector('#botao-importa')

importButton?.addEventListener('click', (event: Event) => {
  controller.importData()
})

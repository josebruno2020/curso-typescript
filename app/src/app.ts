import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form: HTMLFormElement | null = document.querySelector(".form");

form?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.handle();
});

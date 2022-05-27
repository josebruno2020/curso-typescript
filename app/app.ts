import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form") as HTMLFormElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.handle();
});

import { NegociacaoController } from "./controllers/negociacaoController.js";
import {ConnectionFactory} from './database/ConnectionFactory.js'

const controller = new NegociacaoController();
const form: HTMLFormElement | null = document.querySelector(".form");

ConnectionFactory.getConnection().then(c => console.log(c))

form?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.handle();
});

const importButton = document.querySelector('#botao-importa')

importButton?.addEventListener('click', (event: Event) => {
  controller.importData()
})

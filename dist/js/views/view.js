export class View {
    constructor(selector, element = document.querySelector(selector)) {
        this.element = element;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}

export class View {
    constructor(selector, element = document.querySelector(selector), scape = false) {
        this.element = element;
        this.scape = scape;
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this.element.innerHTML = template;
    }
}

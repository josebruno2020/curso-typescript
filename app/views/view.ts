export abstract class View<T> {
  constructor(
    selector: string,
    private element = document.querySelector(selector) as HTMLElement,
    private scape = false
  ) {}

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }
    this.element.innerHTML = template;
  }
}

export abstract class View<T> {
  constructor(
    selector: string,
    private element = document.querySelector(selector) as HTMLElement
  ) {}

  protected abstract template(model: T): string;

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }
}

export function domInjector(seletor: string) {
  return function(target: any, propertyKey: string) {

    let elemento: HTMLElement;

    const getter = function() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor)
        console.log('buscando....');
      }
      return elemento;
    }

    Object.defineProperty(
      target,
      propertyKey,
      {get: getter}
    )

  }
}
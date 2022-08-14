export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...params: any[]) {
    console.log(`--- Método ${propertyKey}`)
    console.log(`--- parâmetros: ${JSON.stringify(params)}`)

    const returnMethod = originalMethod.apply(this, params);

    console.log(`--- Retorno: ${JSON.stringify(returnMethod)}`)

    return returnMethod;
  }

  return descriptor;
}

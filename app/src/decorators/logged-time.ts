export function loggedTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor

  ) {
    const originalMethod = descriptor.value
    descriptor.value = function(...params: any) {
      const firstTime = performance.now();
      originalMethod(...params);
      const secondTime = performance.now();
      console.log(`${propertyKey} - tempo de exucação: ${(secondTime - firstTime) / 1000} segundos`);
      
    }

    return descriptor;
  }

}
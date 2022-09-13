export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...params) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`--- parâmetros: ${JSON.stringify(params)}`);
        const returnMethod = originalMethod.apply(this, params);
        console.log(`--- Retorno: ${JSON.stringify(returnMethod)}`);
        return returnMethod;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map
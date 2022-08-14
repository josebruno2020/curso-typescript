export function loggedTime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...params) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (inSeconds) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const firstTime = performance.now();
            const returnValue = originalMethod.apply(this, params);
            const secondTime = performance.now();
            console.log(`${propertyKey} - tempo de exucação: ${(secondTime - firstTime) / divisor} ${unidade}`);
            returnValue;
        };
        return descriptor;
    };
}

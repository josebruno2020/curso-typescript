export function print(...objetos) {
    for (let obj of objetos) {
        console.log(obj.stringToPrint());
    }
}

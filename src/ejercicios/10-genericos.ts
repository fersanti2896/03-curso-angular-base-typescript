/* Genericos */

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4]);
let soyObjeto = queTipoSoy({
    a: 1,
    b: 2
});

console.log(soyString);
console.log(soyNumber);
console.log(soyArreglo);
console.log(soyObjeto);
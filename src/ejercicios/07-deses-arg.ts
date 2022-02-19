
/* Desestructuracion de Argumentos */
export interface Producto {
    desc: string;
    precio: number; 
}

const telefono: Producto = {
    desc: 'Galaxy 21',
    precio: 4000
}

const laptop: Producto = {
    desc: 'Lenovo A4',
    precio: 8000
}

console.log(telefono);
console.log(laptop);

export const calculaIVA = (productos: Producto[]): [number, number] => {
    let total = 0;
    
    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * 0.16];
}

const articulos = [telefono, laptop];

const [prod, impuesto] = calculaIVA(articulos);

console.log(`El total del producto es: ${prod}`);
console.log(`El total de IVA es: ${impuesto}`);
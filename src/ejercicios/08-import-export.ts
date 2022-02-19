import { calculaIVA, Producto } from "./07-deses-arg";

/* importaciones e Exportaciones */
const carritoCompra: Producto[] = [
    {
        desc: 'Desktop',
        precio: 12000
    },
    {
        desc: 'Ipad',
        precio: 8000
    }
];

const [total, impuesto] = calculaIVA(carritoCompra);

console.log(`El total de los productos es: ${total}`);
console.log(`El total del IVA es: ${impuesto}`);



/* Funciones */
function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(25, 0));

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

console.log(sumarFlecha(2, 5));

function multiplicar(num1: number, num2?: number, base: number = 0): number {
    return num1 * base;
}

console.log(multiplicar(10, 0, 3));

interface PersonajeLOR {
    nombre: string,
    puntosVida: number,
    mostrarVida: () => void;
}

function curar(personaje: PersonajeLOR, puntos: number): void {
    personaje.puntosVida += puntos;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Fer Santi',
    puntosVida: 100,
    mostrarVida() {
        console.log(`Puntos de vida: ${this.puntosVida}`)
    }
}

// curar(nuevoPersonaje, 10);
nuevoPersonaje.mostrarVida();


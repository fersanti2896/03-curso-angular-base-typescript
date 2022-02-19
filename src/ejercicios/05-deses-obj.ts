
/* Desestructuiracion de Objetos */
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mi media sandía',
    detalles: {
        autor: 'Raúl Ornelas',
        anio: 2013
    }
}

const { volumen, segundo, cancion, detalles: { autor, anio } } = reproductor;
 
console.log(`El volumen actual: ${volumen}`);
console.log(`El segundo actual: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año de la canción es: ${anio}`);

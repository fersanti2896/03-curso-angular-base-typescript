/* Encadenamiento Opcional */

interface Pasajero {
    name: string;
    sons?: string[];
}

const p1: Pasajero = {
    name: 'Fernando'
}

const p2: Pasajero = {
    name: 'Angel',
    sons: ['Celeste', 'Lenny']
}

const imprimeHijos = (pasajero: Pasajero): void => {
    const numSons = pasajero.sons?.length || 0;
    const { name } = pasajero;

    console.log(`${name} tiene ${numSons} hijos.`);
}

imprimeHijos(p1);
imprimeHijos(p2);

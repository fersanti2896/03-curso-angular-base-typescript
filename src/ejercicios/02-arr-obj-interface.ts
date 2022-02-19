
/* Objetos - Arreglos e Interfaces */
let habilidades: string[] = ['Programador JS', 'Programador TS', 'Programador Angular'];
let edades: number[] = [25, 27, 31, 58];

console.log(`Habilidades: ${habilidades}`);
console.log(`Numeros: ${edades}`);

interface Personaje {
    name: string;
    age: number;
    skills: string[];
    frameworks: string[];
    city?: string;
}

const dev: Personaje = {
    name: 'Fernando',
    age: 25,
    skills: ['JavaScript', 'Python', 'Java'],
    frameworks: ['Angular', 'React', 'Vue']
}

console.table(dev);

/* Desestructuracion de Arreglos */
const dbz: string[] = ['Gokú', 'Vegeta', 'Picoro', 'Gohan', 'Milk'];
const [goku, vegeta, picoro, , milk] = dbz;

console.log(`El personaje es: ${goku}`);
console.log(`El personaje es: ${vegeta}`);
console.log(`El personaje es: ${picoro}`);
console.log(`El personaje es: ${milk}`);

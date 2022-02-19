
/* Tarea */
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman', 
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'New York'
    },
    mostrarDireccion() {
        return `Nombre: ${this.nombre} | Ciudad: ${this.direccion.ciudad} | País: ${this.direccion.pais}`
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
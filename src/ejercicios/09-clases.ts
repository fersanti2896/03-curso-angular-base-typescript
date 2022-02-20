/* Clases */

class PersonaDatos {
    constructor(
        public name: string,
        public addres: string
    ) {}
}

class Heroe extends PersonaDatos {
    /* Constructor de una clase. Se llama cuando se crea una instancia de la clase */
    constructor(
        public nameHeroe: string,
        public age: number,
        public nameReal: string
    ) {
        super(nameReal, 'New York');
    }
}

const iroman = new Heroe('Iroman', 35, 'Tony Stark');
console.log(iroman);


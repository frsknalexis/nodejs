function sumar(a, b) {
    return a + b;
}

let suma = (a, b) => {
    return a + b;
}

let saludo = () => {
    return `Hola Mundo`;
}

let saludar = nombre => {
    return `Hola ${ nombre }`;
}

console.log(sumar(10, 20));
console.log(suma(10, 20));
console.log(saludo());
console.log(saludar('Alexis'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombe() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
};

console.log(deadpool.getNombe());
/**
 * 
 */
let getNombre = async() => {

    //throw new Error('No existe un nombre para ese usuario');
    return `Alexis`;
}

let getNombre2 = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Alexis Manuel');
        }, 3000);
    });
}

let saludo = async() => {

    let nombre = await getNombre2();

    return `Hola ${nombre}`;
}

saludo().then((response) => {
    console.log(response);
})

//console.log(getNombre());

getNombre().then((nombre) => {
    console.log(nombre);
}).catch((err) => {
    console.log(err);
});

getNombre2().then(nombre => {
    console.log(nombre);
}).catch((err) => {
    console.log(err);
})
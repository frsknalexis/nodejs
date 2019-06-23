/**
 *
 */
let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${ id }`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find((salario) => {
        return salario.id === empleado.id;
    });

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${ empleado.nombre }`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);

    let salario = await getSalario(empleado);

    return `${ salario.nombre } tiene un salario de ${ salario.salario }$`;
};

getInformacion(1).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})
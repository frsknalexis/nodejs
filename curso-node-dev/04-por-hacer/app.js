/**
 * 
 */
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log('Tarea', tarea);
        break;
    case 'listar':
        let listadoPorHacer = getListado();
        for (let tarea of listadoPorHacer) {
            console.log('==========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no encontrado');
}
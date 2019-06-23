/**
 *
 **/
/**
 const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
 */
const argv = require('./config/yargs').argv;

const colors = require('colors');

const color = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multplicar/multiplicar');

console.log(argv.base);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: `, color.green(`${ archivo }`));
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no encontrado');
}

/** 
let parametro = argv[2];
let base = parametro.split('=')[1];
*/
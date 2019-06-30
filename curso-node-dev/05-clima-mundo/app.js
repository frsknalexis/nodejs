/**
 * 
 */
//const axios = require('axios');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);

        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El Clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el Clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })

/** 
lugar.getLugarLatLng(argv.direccion)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

clima.getClima(9.9280694, -84.0907246)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })

*/
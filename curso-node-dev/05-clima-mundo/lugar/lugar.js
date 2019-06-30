/** 
 * 
 */
const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyBX-TYmyZopsc1dCo79StSFlr9IAD3-tkc`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = response.data.results[0];

    let coors = location.geometry.location;

    //console.log('Direccion', location.formatted_address);
    //console.log('lat ', coors.lat);
    //console.log('lng ', coors.lng);
    //console.log(response.data);
    //console.log(response.status);
    //console.log(JSON.stringify(response.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng: getLugarLatLng
}
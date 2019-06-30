/** 
 * 
 */
const axios = require('axios');

let getClima = async(lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=6ca9cdfa43a7d3e7fb7d549065ec1b6a`);

    return response.data.main.temp;
}

module.exports = {

    getClima: getClima
}
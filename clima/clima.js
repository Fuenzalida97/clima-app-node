const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=11b79c9a6f79c71e2c8dfd077c2cd5f2&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}
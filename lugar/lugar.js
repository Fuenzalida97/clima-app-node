const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        headers: {
            "x-rapidapi-key": "cbd2647f61mshdc159611df33f5dp19a1cbjsnf3bfd3fa1b9e"
        }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const dato = resp.data.data[0];
    const direccion = dato.name;
    const lat = dato.latitude;
    const lng = dato.longitude;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
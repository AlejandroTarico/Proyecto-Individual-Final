const { Type } = require('../db');
const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/type";

const getPokemonType = async (res) => {
    try {
        const { data } = await axios(URL);
        
        await Type.bulkCreate(data.results);
        res.status(200).json("Los datos se cargaron correctamente");

    } catch (error) {
        res.status(500).json("Al parecer pasa del largo y no entra al try");
    }
}

module.exports = getPokemonType;
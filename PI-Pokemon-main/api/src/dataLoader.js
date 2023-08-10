const { Type } = require('./db');
const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/type";

const PokemonTypeDbOfApi = async (req, res) => {
    try {
        const { data } = await axios(URL);
        
        await Type.bulkCreate(data.results);
        // return res.status(200).json("Los datos se cargaron correctamente");

    } catch (error) {
        return res.status(500).json("Al parecer pasa del largo y no entra al try");
    }
}

module.exports = PokemonTypeDbOfApi;
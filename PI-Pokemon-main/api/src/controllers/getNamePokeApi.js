const axios = require('axios');
const { Type } = require('../db');


const URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemonName = async (req, res) => {
    const { name } = req.query;
    try {
        let detailPokemon = [];
        const minoMayName = encodeURIComponent(name);
        const { data } = await axios(URL + minoMayName);
        const {id: id, name: nombre, height: altura, weight: peso } = data;
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const defensa = data.stats[2].base_stat;
        const velocidad = data.stats[5].base_stat;
        const imagen = data.sprites.other.dream_world.front_default;
        const tipo = data.types.map((type) => {
            return { id: type.slot, tipo: type.type.name }
        })
        const allPokemonesApi = {id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo}
        detailPokemon.push({...allPokemonesApi});
        return 
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos de los Pokémons" });
    }
}
module.exports = getPokemonName;
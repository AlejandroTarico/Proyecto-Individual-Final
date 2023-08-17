const axios = require('axios');
const { Pokemon } = require('../db')

const URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemonId = async (id) => {
    try {
        if (id.length < 30) {
            const { data } = await axios(URL + id);
            const {name: nombre, height: altura, weight: peso } = data;
            const vida = data.stats[0].base_stat;
            const ataque = data.stats[1].base_stat;
            const defensa = data.stats[2].base_stat;
            const velocidad = data.stats[5].base_stat;
            const imagen = data.sprites.other.dream_world.front_default;
            const types = data.types.map((type) => {
                return { id: type.slot, name: type.type.name }
            })
            const detailPokemon = {nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, types}
            return res.status(200).json(detailPokemon);
        }
        else {
            const detailPokemon = await Pokemon.findByPk(id);
            return res.status(200).json(detailPokemon);
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos del Pokémon desde la API externa." });
    }
}
module.exports = getPokemonId;
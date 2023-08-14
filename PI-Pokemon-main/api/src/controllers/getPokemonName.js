const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemonName = async (req, res) => {
    try {
        const { name } = req.query;
        let detailPokemon = [];
        const minoMayName = encodeURIComponent(name);
        const { data } = await axios(URL + minoMayName);
        const {id: id, name: nombre, height: altura, weight: peso } = data;
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const defensa = data.stats[2].base_stat;
        const velocidad = data.stats[5].base_stat;
        const imagen = data.sprites.front_default;
        const tipo = data.types.map((type) => {
            return { id: type.slot, tipo: type.type.name }
        })
        const allPokemonesApi = {id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipo}
        detailPokemon.push({...allPokemonesApi});
        const allPokemonesDB = await Pokemon.findAll({
            where: { nombre: { [Op.iLike]: `%${nombre}%`},
            },
        });
       detailPokemon.push(...allPokemonesDB);
    //    console.log("Veamos que me muestra el repo de la api y la base de datos: ", detailPokemon);
        return res.status(200).json(detailPokemon);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos de los Pokémons" });
    }
}
module.exports = getPokemonName;
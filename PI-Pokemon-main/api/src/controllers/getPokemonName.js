const axios = require('axios');
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemonName = async (req, res) => {
    try {
        const { name } = req.query;
        // console.log("Pasa por aqui?", name);
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
        console.log("esto es lo que trae DATA DESMENUSADO +++++++");

        const allPokemonesDB = await Pokemon.findAll({
            where: { name: { [Op.iLike]: `%${name}%`},
            },
        });
       const detailPokemon = {...allPokemonesApi, ...allPokemonesDB}
    //    console.log("Veamos que me muestra el repo de la api", allPokemonesDB);
        return res.status(200).json(detailPokemon);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos de los Pokémons" });
    }
}
module.exports = getPokemonName;
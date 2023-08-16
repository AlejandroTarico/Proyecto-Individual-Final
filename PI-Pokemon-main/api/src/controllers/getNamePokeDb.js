const { Pokemon, Type} = require('../db');
const { Op } = require('sequelize');


const getPokemonNameDb = async (nombre) => {
    try {
        
        const allPokemonesDB = await Pokemon.findAll({
            where: { nombre: { [Op.iLike]: `%${nombre}%`},
            },
            include: [{ model: Type, attributes: ['id', 'name'], through: { attributes: [] } }],
        });
        for (const key in allPokemonesDB) {
            return allPokemonesDB[key];
        }

    } catch (error) {
        return "Error al obtener los datos de los Pokémons desde la DataBase";
    }
}
module.exports = getPokemonNameDb;
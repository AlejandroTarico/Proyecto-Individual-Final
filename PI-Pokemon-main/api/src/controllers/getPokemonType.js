const { Type } = require('../db');


const getPokemonType = async () => {
    try {
        const allTypes = await Type.findAll();
        return allTypes;

    } catch (error) {
        return "Al parecer pasa de largo y no entra al try";
    }
}

module.exports = getPokemonType;
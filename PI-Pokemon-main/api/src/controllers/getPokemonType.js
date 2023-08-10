const { Type } = require('../db');


const getPokemonType = async (req, res) => {
    try {
        const allTypes = await Type.findAll();
        return res.status(200).json(allTypes);

    } catch (error) {
        res.status(500).json("Al parecer pasa de largo y no entra al try");
    }
}

module.exports = getPokemonType;
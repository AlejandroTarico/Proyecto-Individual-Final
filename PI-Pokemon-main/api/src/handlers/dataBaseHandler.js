const postDataBase = require('../controllers/postPokemonDb')
const getPokemonType = require('../controllers/getPokemonType');



const postDbHandler = async (req, res) => {

    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos} = req.body;
    
    const consulta = await postDataBase(nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos);

    res.status(200).send(consulta);
}


const getPokeByType = async (req, res) => {
    try {
        const typesPokes = await getPokemonType();
        res.status(200).send(typesPokes);
    } catch (error) {
        res.status(500).json(error);
    }

    
}

module.exports = {postDbHandler, getPokeByType}
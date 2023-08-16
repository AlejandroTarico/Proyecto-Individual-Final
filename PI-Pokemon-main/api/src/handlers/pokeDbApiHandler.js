const getPokemonNameApi = require('../controllers/getNamePokeApi');
const getPokemonNameDb = require('../controllers/getNamePokeDb');



const pokemonDbApiHandler = async (req, res) => {
    try {
        const { name } = req.query;
        let detailPokemon = [];
        detailPokemon.push( await getPokemonNameDb(name));
        detailPokemon.push( await getPokemonNameApi(name));
        res.status(200).json(detailPokemon);
    } catch (error) {
        
    }
}
module.exports = pokemonDbApiHandler
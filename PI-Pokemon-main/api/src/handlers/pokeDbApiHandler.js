const getPokemonNameApi = require('../controllers/getNamePokeApi');
const getPokemonNameDb = require('../controllers/getNamePokeDb');



const pokemonDbApiHandler = async (req, res) => {
    try {
        const { name } = req.query;
        console.log("LLEGA HASTA EL POKEHANDLER: ", name);
        let detailPokemon = [];
        const pokeDb = await getPokemonNameDb(name);
        const pokeApi = await getPokemonNameApi(name)
        if(typeof(pokeDb) !== 'string' && pokeDb){
            detailPokemon.push(pokeDb);
        }
        if(typeof(pokeApi) !== 'string' && pokeApi){
            detailPokemon.push(pokeApi);
        }
        res.status(200).json(detailPokemon);
    } catch (error) {
        
    }
}
module.exports = pokemonDbApiHandler
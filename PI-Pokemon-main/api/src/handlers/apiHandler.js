const getarrayobject = require('../controllers/getarrayobject');
// const getPokemonId = require('../controllers/getPokemonId');


const getAllPokemons = async (req, res) => {
try {
    const allpoke = await getarrayobject()
    
    res.status(200).send(allpoke);
    
} catch (error) {
    res.status(500).send(error);
}


};
const getpokeId = async (req, res) => {

    const { id } = req.params;

    const pokeId = await getPokemonId(id)

    res.status(200).send(pokeId);

}
module.exports = {getAllPokemons, getpokeId};
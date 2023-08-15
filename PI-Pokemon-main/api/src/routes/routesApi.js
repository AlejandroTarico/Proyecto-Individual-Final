const { Router } = require('express');
const {getAllPokemons, getpokeId} = require('../handlers/apiHandler');


const router = Router();


router.get('/pokemons', getAllPokemons);
// router.get('/pokemons/:id', getPokemonId);


module.exports = router;
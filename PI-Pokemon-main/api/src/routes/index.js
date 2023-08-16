const { Router } = require('express');

// const getPokemonName = require('../controllers/getPokemonName');
const routesApi = require('./routesApi');
const routesDb = require('./routesDb');
const pokemonDbApiHandler = require('../handlers/pokeDbApiHandler');



const router = Router();


router.use('/pokemonsapi', routesApi)
router.use('/pokemonsdb', routesDb)
router.get('/pokemon', pokemonDbApiHandler)
// router.get('/pokemon', getPokemonName);



module.exports = router;

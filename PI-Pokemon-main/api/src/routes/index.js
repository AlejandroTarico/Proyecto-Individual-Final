const { Router } = require('express');
// const getarrayobject = require('../controllers/getarrayobject');
// const getPokemonId = require('../controllers/getPokemonId');
// const postPokemonDb = require('../controllers/postPokemonDb');
// const getPokemonType = require('../controllers/getPokemonType');
const getPokemonName = require('../controllers/getPokemonName');
const routesApi = require('./routesApi');
const routesDb = require('./routesDb');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/pokemons', getarrayobject);
// router.get('/pokemons/:id', getPokemonId);
// router.get('/types', getPokemonType);
// router.post('/pokemons', postPokemonDb);


router.use('/pokemonsapi', routesApi)
router.use('/pokemonsdb', routesDb)
// router.use('/pokemon', pokemonDbApiHandler)
router.get('/pokemon', getPokemonName);



module.exports = router;

const { Router } = require('express');
const getarrayobject = require('../controllers/getarrayobject');
const getPokemonId = require('../controllers/getPokemonId');
const getPokemonName = require('../controllers/getPokemonName');
const postPokemonDb = require('../controllers/postPokemonDb');
const getPokemonType = require('../controllers/getPokemonType');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getarrayobject);
router.get('/pokemons/:id', getPokemonId);
router.get('/pokemon', getPokemonName);
router.get('/types', getPokemonType);
router.post('/pokemons', postPokemonDb);

module.exports = router;

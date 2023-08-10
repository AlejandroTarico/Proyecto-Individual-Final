const { Router } = require('express');
const postPokemonDb = require('../controllers/postPokemonDb');
const getPokemonType = require('../controllers/getPokemonType');


const router = Router();


router.get('/types', getPokemonType);
router.post('/pokemons', postPokemonDb);

module.exports = router;
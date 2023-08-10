const { Router } = require('express');
const getPokemonId = require('../controllers/getPokemonId');
const getarrayobject = require('../controllers/getarrayobject');


const router = Router();


router.get('/pokemons', getarrayobject);
router.get('/pokemons/:id', getPokemonId);

module.exports = router;
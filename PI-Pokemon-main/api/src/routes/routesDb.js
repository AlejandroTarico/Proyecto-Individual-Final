const { Router } = require('express');
const {postDbHandler, getPokeByType} = require('../handlers/dataBaseHandler');


const router = Router();


router.get('/types', getPokeByType);
router.post('/pokemons', postDbHandler);

module.exports = router;


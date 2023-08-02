const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";


const getarrayobject = async (req, res) => {
    try {
        const allPokemons = await axios(URL);
        const pokelist = allPokemons.data.results.map((pokemons) => axios(pokemons.url));
        const arraylist = await Promise.all(pokelist);

        const arrayPokemon = arraylist.map((pokexpoke) => {
            return{
                id: pokexpoke.data.id, 
                nombre: pokexpoke.data.name, 
                altura: pokexpoke.data.height, 
                peso: pokexpoke.data.weight,
                vida : pokexpoke.data.stats[0].base_stat,
                ataque : pokexpoke.data.stats[1].base_stat,
                defensa : pokexpoke.data.stats[2].base_stat,
                velocidad : pokexpoke.data.stats[5].base_stat,
                imagen : pokexpoke.data.sprites.other.dream_world.front_default,
                tipo : pokexpoke.data.types.map((type) => {
                    return { id: type.slot, tipo: type.type.name }
                })
            }
        });
        return res.status(200).json(arrayPokemon);

    } catch (error) {
        Error("Error al obtener los Pokémons desde la API externa.")
    }
}
module.exports = getarrayobject;





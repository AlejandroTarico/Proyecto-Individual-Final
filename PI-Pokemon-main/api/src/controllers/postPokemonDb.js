const { Pokemon, type_pokemon } = require('../db');



const postPokemonDb = async (nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos) => {
    try {
        if (!nombre || !imagen || !vida || !ataque || !defensa) {
            res.status(400).json({message: 'Algunos datos no se enviaron'});
        } 
        else {
            const pokeStore = await Pokemon.create({ 
                nombre, 
                imagen, 
                vida, 
                ataque, 
                defensa, 
                velocidad: velocidad !== '' ? velocidad : null, 
                altura: altura !== '' ? altura : null, 
                peso: peso !== '' ? peso : null,
            });
            for (const tipoObj of tipos) {
                await type_pokemon.create({
                    pokemonId: pokeStore.id,
                    typeId: tipoObj.id
                });
            }
            return({message: "La carga de tu pokemon se ha echo satisfactoriamente", value: true});
        }
    } catch (error) {
        return({ message: "Hubo un error al tratar de cargar en la base de datos" });
    }
}


module.exports = postPokemonDb;
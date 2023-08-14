const { Pokemon, type_pokemon } = require('../db');
const { v4: uuidv4 } = require('uuid');


const postPokemonDb = async (req, res) => {
// console.log("Esto llega al servidor: ", req.body);
    try {
        const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos} = req.body;
        const id = uuidv4();
        if (!nombre || !imagen || !vida || !ataque || !defensa) {
            res.status(400).json({message: 'Algunos datos no se enviaron'});
        } 
        else {
            const pokeStore = await Pokemon.create({id, nombre, imagen, vida, ataque, defensa, velocidad, altura, peso});
            console.log("esto me muestra tipo: ", tipos);
            for (const tipoObj of tipos) {
                console.log("esto es lo que me devuelve pokeStore dentro del for: ", tipoObj.id);
                await type_pokemon.create({
                    pokemonId: pokeStore.id,
                    typeId: tipoObj.id
                });
            }
            res.status(200).json({message: "La carga de tu pokemon se ha echo satisfactoriamente"});
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al tratar de cargar en la base de datos" });
    }
}

module.exports = postPokemonDb;
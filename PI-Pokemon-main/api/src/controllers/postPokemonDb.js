const { Pokemon } = require('../db');
// const { v4: uuidv4 } = require('uuid');

const postPokemonDb = async (req, res) => {

    try {
        const {id, name, image, life, attack, defending, speed, height, weight} = req.body;
        // const uniqueId = uuidv4();
        if (!id || !name || !image || !life || !attack || !defending) {
            res.status(400).json({message: 'Algunos datos no se enviaron'});
        } 
        else {
            const personajePok = await Pokemon.findOrCreate({
                where: {id, name, image, life, attack, defending, speed, height, weight},
            });
            res.status(200).json(personajePok);
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al tratar de cargar en la base de datos" });
    }
}

module.exports = postPokemonDb;
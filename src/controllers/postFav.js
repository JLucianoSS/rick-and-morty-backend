
const { Favorite } = require("../db/connection");
const getAllFavorites = require("../handlers/getAllFavorites");

const postFav = async (req,res) => {
    try {
        const {character} = req.body;
        const {id, name, origin, status, image, species, gender} = character;
        
        if(!name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos");
        await Favorite.findOrCreate({
            where: {name},
            defaults: {id,origin, status, image, species, gender},
        });
        const favorites = await getAllFavorites();
     
        res.send(favorites)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postFav;
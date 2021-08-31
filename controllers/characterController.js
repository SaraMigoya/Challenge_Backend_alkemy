const express = require("express");
const models = require ("../models/character")
const modelsMovies = require("../models/movie")
const router = express.Router();

router.post("/", async (req,res)=>{
    
    const { image, name,  age, weight, story, MovieSerieId} = req.body
    const newCharacter = {
        image,
        name,
        age,
        weight,
        story,
        MovieSerieId

    }

    const movies = await modelsMovies.movie_serie.findOne({
        where: {id: MovieSerieId}
    })
    if(movies){

        const character = await models.character.create(newCharacter)
        if (character) return res.status(200).json({exito: " el personaje se creó exitosamente", character} );
    } 
        res.status(400).json({
            message: "No se pudo crear el personaje "
        })
    
 
})
   .get("/", async (req,res)=>{

        const allCharacter = await models.character.findAll({
            attributes: ["image","name"],

        });
        if (allCharacter.length > 0) return res.status(200).json( {exito: "operación exitosa", allCharacter});
        return res.status(400).json({message: "error. no se pudo traer info"})
    })

   .get("/details", async (req,res)=>{

        const allCharacter = await models.character.findAll({
 
            include: [

                {
                    model: modelsMovies.movie_serie,
                    required: false,
                    attributes: ["title"],

                }

            ]
        });
        if (allCharacter.length > 0) return res.status(200).json( {exito: "operación exitosa", allCharacter});
        return res.status(400).json({message: "error. no se pudo traer info"})
    })


/// PUT
    .put("/:id", async (req, res) => {

        const updateCharacter = await models.character.update(req.body, {
            where: { id: req.params.id }
        })


        if (updateCharacter) return res.status(200).json({ messege: `${req.body.name} fue actualizado con exito` })
        return res.status(400).json({ message: `No se encontro el personaje con el ID: ${req.params.id}` })
    })
///DELETE
    .delete("/:id", async (req, res) => {

        const deleteCharacter = await models.character.destroy({
            where: { id: req.params.id }
        })

        if (deleteCharacter) return res.status(200).json({ messege: `El personaje fue eliminado con exito` })
        return res.status(400).json({
            message: `No se pudo eliminar el personaje con el ID: ${req.params.id}`
        })
    }) 

module.exports = router;  
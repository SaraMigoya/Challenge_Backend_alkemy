const express = require("express");
const models = require ("../models/movie")
const modelCharacter = require("../models/character")
const router = express.Router();


router.post("/", async (req,res)=>{
    
    const { image, title,  creation_date, score} = req.body

    const newMovie = {
        image,
        title,
        creation_date,
        score
    }


    const movie = await models.movie_serie.create(newMovie)
    if (movie) return res.status(200).json({exito: " la película o serie se creó exitosamente", movie} );

    res.status(400).json({
        message: "No se pudo crear la película o serie"
    })
 
})
/// GET
    .get("/", async (req,res)=>{

        const allMovies = await models.movie_serie.findAll({
            attributes: ["image","title", "creation_date"],

        });
        if (allMovies.length > 0) return res.status(200).json( {exito: "operación exitosa", allMovies});
        return res.status(400).json({message: "error. no se pudo traer info"})
    })

    .get("/details", async (req,res)=>{

        const allMovies = await models.movie_serie.findAll({
 
            include: [

                {
                    model: modelCharacter.character,
                    required: false,
                    attributes: ["name"],

                }

            ]
        });
        if (allMovies.length > 0) return res.status(200).json( {exito: "operación exitosa", allMovies});
        return res.status(400).json({message: "error. no se pudo traer info"})
    })

    //acá irian los get con búsqueda

    
/// PUT
     .put("/:id", async (req, res) => {

            
        const updateMovie = await models.movie_serie.update(req.body, {
            where: { id: req.params.id }
        })


        if (updateMovie) return res.status(200).json({ messege: `${req.body.title} fue actualizado con exito` })
        return res.status(400).json({ message: `No se encontro la pelicula/serie con el ID: ${req.params.id}` })
    })

///DELETE
    .delete("/:id", async (req, res) => {

        const deleteMovie = await models.movie_serie.destroy({
            where: { id: req.params.id }
        })

        if (deleteMovie) return res.status(200).json({ messege: `la pelicula/serie fue eliminado con exito` })
        return res.status(400).json({
            message: `No se pudo eliminar la pelicula/serie con el ID: ${req.params.id}`
        })
    }) 
 

module.exports = router; 
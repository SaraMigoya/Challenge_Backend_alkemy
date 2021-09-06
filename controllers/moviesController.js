const express = require("express");
const models = require("../models/movie")
const modelCharacter = require("../models/character")
const modelGender = require("../models/gender")
const router = express.Router();


router.post("/", async (req, res) => {

    const { image, title, creation_date, score } = req.body

    const newMovie = {
        image,
        title,
        creation_date,
        score
    }


    const movie = await models.movie.create(newMovie)
    if (movie) return res.status(200).json({ exito: " la película o serie se creó exitosamente", movie });

    res.status(400).json({
        message: "No se pudo crear la película o serie"
    })

})


    /// GET
    .get("/", async (req, res) => {

        let name = req.query.name
        let genre = req.query.genre
        let order = req.query.order

        if (genre) {

            const allGenders = await modelGender.gender.findOne({
                where: { MovieId: genre }
            })


            if (allGenders && genre == allGenders.MovieId) return res.status(200).json({ exito: `el género es: ${allGenders.MovieId}` });
            else return res.status(400).json({ message: "¡Lo sentimos! No pudimos acceder a esa información. Es probable que no exista" })
        }

        if (name) {

            const movies = await models.movie.findOne({
                where: { title: name }
            })


            if (movies && name.toLocaleLowerCase == movies.title.toLocaleLowerCase) return res.status(200).json({ exito: `el nombre de la película es: ${movies.title}` });
            else return res.status(400).json({ message: "error. no se pudo traer info" })
        }



        if (order) {

            const dataCreat = await models.movie.findAll({
                attributes: ["creation_date"],
            });

            //dataCreat.sort(function (a, b) { return a - b })
            dataCreat.reverse(function(a,b){return a - b})

            if (dataCreat.length > 0) return res.status(200).json({ exito: "operación exitosa", dataCreat });
            else return res.status(400).json({ message: "no" })


        }

        const allMovies = await models.movie.findAll({
            attributes: ["image", "title", "creation_date"],

        });


        if (allMovies.length > 0) return res.status(200).json({ exito: "operación exitosa", allMovies });
        else return res.status(400).json({ message: "Aún no hay películas guardados" })

    })

    .get("/details", async (req, res) => {

        const allMovies = await models.movie.findAll({
            attributes: ["id","image", "title", "creation_date", "score"],
            include: [

                {
                    model: modelCharacter.character,
                    required: false,
                    attributes: ["name"],

                }

            ]
        });
        if (allMovies.length > 0) return res.status(200).json({ exito: "operación exitosa", allMovies });
        return res.status(400).json({ message: "error. no se pudo traer info" })
    })

    /// PUT
    .put("/:id", async (req, res) => {


        const updateMovie = await models.movie.update(req.body, {
            where: { id: req.params.id }
        })


        if (updateMovie) return res.status(200).json({ messege: `${req.body.title} fue actualizado con exito` })
        return res.status(400).json({ message: `No se encontro la pelicula/serie con el ID: ${req.params.id}` })
    })

    ///DELETE
    .delete("/:id", async (req, res) => {

        const deleteMovie = await models.movie.destroy({
            where: { id: req.params.id }
        })

        if (deleteMovie) return res.status(200).json({ messege: `la pelicula/serie fue eliminado con exito` })
        return res.status(400).json({
            message: `No se pudo eliminar la pelicula/serie con el ID: ${req.params.id}`
        })
    })


module.exports = router; 
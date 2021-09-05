const express = require("express");
const models = require("../models/character")
const modelsMovies = require("../models/movie");

const router = express.Router();

router.post("/", async (req, res) => {

    const { image, name, age, weight, story, MovieId } = req.body
    const newCharacter = {
        image,
        name,
        age,
        weight,
        story,
        MovieId
    }

    const movie = await modelsMovies.movie.findOne({
        where: { id: MovieId }
    })
    if (movie) {

        const character = await models.character.create(newCharacter)
        if (character) return res.status(200).json({ exito: " el personaje se creó exitosamente", character });
    }
    res.status(400).json({
        message: "No se pudo crear el personaje "
    })


})

    /// GET


    .get("/", async (req, res) => {

        let name = req.query.name
        let age = req.query.age
        let movies = req.query.movies

        if (name) {
           
            const characters = await models.character.findOne({
                where: { name: name }
            })

            if (characters && name.toLocaleLowerCase == characters.name.toLocaleLowerCase) return res.status(200).json({ exito: `El personaje encontrado es: ${characters.name}` });
            else return res.status(400).json({ message: "Lo sentimos! No pudimos acceder a esa información" }) 

        }

        if (age) {

            const characters = await models.character.findOne({
                where: { age: age }
            })

            if (characters && age.toLocaleLowerCase == characters.age.toLocaleLowerCase) return res.status(200).json({ exito: `La edad del personaje es ${characters.age} ` });
            else return res.status(400).json({ message: "¡Lo sentimos! No pudimos acceder a esa información" })
        }

        if (movies) {

            const characters = await models.character.findOne({
                where: { MovieId: movies }
            })

            if (characters && movies == characters.MovieId) return res.status(200).json({ exito: `El id de la película encontrada es: ${characters.MovieId}` });
            else return res.status(400).json({ message: "¡Lo sentimos! No pudimos acceder a esa información" })
        }

        const allCharacter = await models.character.findAll({
            attributes: ["image", "name"],

        });

        if (allCharacter.length > 0) return res.status(200).json({ exito: "Operación exitosa", allCharacter });
        else return res.status(400).json({ message: "Aún no hay personajes guardados" })
    })

    .get("/details", async (req, res) => {

        const allCharacter = await models.character.findAll({

            include: [

                {
                    model: modelsMovies.movie,
                    required: false,
                    attributes: ["title"],

                }

            ]
        });
        if (allCharacter.length > 0) return res.status(200).json({ exito: "operación exitosa", allCharacter });
        return res.status(400).json({ message: "error. no se pudo traer info" })
    })


    /// PUT
    .put("/:id", async (req, res) => {

        const updateCharacter = await models.character.update(req.body, {
            where: { id: req.params.id }
        })


        if (updateCharacter) return res.status(200).json({ messege: `${req.body.name} fue actualizado con exito` })
        return res.status(400).json({ message: `No se encontró el personaje con el ID: ${req.params.id}` })
    })
    ///DELETE
    .delete("/:id", async (req, res) => {

        const deleteCharacter = await models.character.destroy({
            where: { id: req.params.id }
        })

        if (deleteCharacter) return res.status(200).json({ messege: `El personaje fue eliminado con éxito` })
        return res.status(400).json({
            message: `No se pudo eliminar el personaje con el ID: ${req.params.id}`
        })
    })

module.exports = router;  
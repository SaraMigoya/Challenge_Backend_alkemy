const express = require("express");
const router = express.Router();
const models = require("../models/character");
const modelsMovies = require("../models/movie");
const modelGender = require("../models/gender")
const modelsUser = require ("../models/user")

//USERS
router.post("/users", async (req,res) => {
    const newsUsers = [
        {
            name: "Sara",
            last_name: "Migoya",
            email: "sara@gmail.com",
            username: "SaraMi",
            password: "SaraM123/",
          
        },
        {
            name: "Evaluador",
            username: "Evaluador",
            last_name: "Evaluador",
            email: "evaluador@gmail.com",
            password: "Evaluador123/",
         
        }
    
    ]
    newsUsers.forEach(e => {
        modelsUser.user.create(e)
    });

    res.status(200).json({ message: "Usuario creado con éxito!" })

})
    .post("/movies", async (req,res) => {
    const newsMovies = [
        {
            id: 1,
            image: "https://id.pinterest.com/pin/666040232386142382/",
            title: "Cars. Una aventura sobre ruedas",
            creation_date: "2011",
            score: 8
        },
        {
            id: 2,
            image: "https://www.google.com/search?q=frozen+movie&sxsrf=AOaemvI2Chvk9M0l39WutrWEA3R3ccmvGg:1630955128544&tbm=isch&source=iu&ictx=1&fir=47gGPJShOTNJFM%252Cyjjl1uW-FHjfKM%252C_&vet=1&usg=AI4_-kRBWKArA8z_BXBMaCjCywiJaFON-w&sa=X&ved=2ahUKEwiJ_dKohevyAhXwLLkGHaERC6YQ_h16BAg1EAE#imgrc=UgU-lB7jFrBlwM",
            title: "Frozen. Una aventura congelada",
            creation_date: "2013",
            score: 10
        },

    
    ]
    newsMovies.forEach(e => {
        modelsMovies.movie.create(e)
    });

    res.status(200).json({ message: "Película creada con éxito!" })

})
    .post("/characters", async (req,res) => {
    const newsCharacters = [
        {
            image: "https://id.pinterest.com/pin/666040232386142382/",
            name: "Rayo McQueen",
            age: "11",
            weight: "100kg",
            story: "In a world populated by anthropomorphic talking vehicles, the final race of the Piston Cup season ends in a three-way tie for first place between retiring veteran Strip The King Weathers, frequent runner-up Chick Hicks, and brash rookie sensation Lightning McQueen",
            MovieId: 1
        },
        {
            image: "https://www.google.com/search?q=frozen+movie&sxsrf=AOaemvI2Chvk9M0l39WutrWEA3R3ccmvGg:1630955128544&tbm=isch&source=iu&ictx=1&fir=47gGPJShOTNJFM%252Cyjjl1uW-FHjfKM%252C_&vet=1&usg=AI4_-kRBWKArA8z_BXBMaCjCywiJaFON-w&sa=X&ved=2ahUKEwiJ_dKohevyAhXwLLkGHaERC6YQ_h16BAg1EAE#imgrc=UgU-lB7jFrBlwM",
            name: "Elsa",
            age: "21",
            weight: "60kg",
            story: "Elsa of Arendelle is a fictional character who appears in Disney' animated film Frozen (2013) and its sequel Frozen II (2019)",
            MovieId: 2
        },

    
    ]
    newsCharacters.forEach(e => {
        models.character.create(e)
    });

    res.status(200).json({ message: "Personaje creada con éxito!" })

})

//REGIONS

     .post("/genders", async (req,res) => {
    const newsGenders = [
        {
            image: "https://id.pinterest.com/pin/666040232386142382/",
            name: "Juvenil",
            MovieId: 1

        },
        {
            image: "https://www.google.com/search?q=frozen+movie&sxsrf=AOaemvI2Chvk9M0l39WutrWEA3R3ccmvGg:1630955128544&tbm=isch&source=iu&ictx=1&fir=47gGPJShOTNJFM%252Cyjjl1uW-FHjfKM%252C_&vet=1&usg=AI4_-kRBWKArA8z_BXBMaCjCywiJaFON-w&sa=X&ved=2ahUKEwiJ_dKohevyAhXwLLkGHaERC6YQ_h16BAg1EAE#imgrc=UgU-lB7jFrBlwM",
            name: "Juvenil",
            MovieId: 2

        }
    
    ]
    newsGenders.forEach(e => {
        modelGender.gender.create(e)
    });

    res.status(200).json({ message: "Género creado con éxito!" })

})



module.exports = router
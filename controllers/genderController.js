const express = require("express");
const models = require ("../models/gender")
const router = express.Router();

router.post("/", async (req,res)=>{

    const { image, name, MovieId } = req.body

    const newGender = {
        image,
        name,
        MovieId

    }

    const genders = await models.gender.create(newGender)
    if (genders) return res.status(200).json({ exito: " el género se creó exitosamente", genders });

    res.status(400).json({
        message: "No se pudo crear el género"
    })

})

module.exports = router; 
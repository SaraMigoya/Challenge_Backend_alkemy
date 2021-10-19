const express = require("express");
const models = require ("../models/gender");
const { succes, errorCreate } = require("../constants/messagges");
const router = express.Router();

router.post("/", async (req,res)=>{

    const { image, name, MovieId } = req.body

    const newGender = {
        image,
        name,
        MovieId

    }

    const genders = await models.gender.create(newGender)
    if (genders) return res.status(200).json(succes, genders );

    res.status(400).json(errorCreate)

})

module.exports = router; 
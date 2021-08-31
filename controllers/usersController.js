const express = require("express");
const models = require ("../models/user")
const router = express.Router();

const {dataReceived, dataLogin} = require("../middlewares/authenticated");
//POST
router.post("/auth/register", dataReceived, async (req, res) => {

    
       const { name, last_name, email, username, password } = req.body
       const newUser = {
           name,
           last_name,
           email,
           username,
           password,

       }
   
   
       const user = await models.user.create(newUser)
       if (user) return res.status(200).json({exito: " el usuario se creó exitosamente", user} );
   
       res.status(400).json({
           message: "No se pudo crear el usuario"
       })
    
   
   })


.post("/auth/login", dataLogin, (req, res) => {
    res.status(200).json({
        exito: {
            token: req.token,
            user: req.user
        }
    })
})

module.exports = router; 
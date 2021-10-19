const express = require("express");
const models = require ("../models/user")
const router = express.Router();

const {dataReceived, dataLogin} = require("../middlewares/authenticated");
const { succes, errorCreate } = require("../constants/messagges");
//POST
router.post("/register", dataReceived, async (req, res) => {

    
       const { name, last_name, email, username, password } = req.body
       const newUser = {
           name,
           last_name,
           email,
           username,
           password,

       }
   
   
       const user = await models.user.create(newUser)
       if (user) return res.status(200).json(succes, user );
   
       res.status(400).json(errorCreate)
    
   
   })


.post("/login", dataLogin, (req, res) => {
    res.status(200).json({
        exito: {
            token: req.token,
            user: req.user
        }
    })
})

module.exports = router; 
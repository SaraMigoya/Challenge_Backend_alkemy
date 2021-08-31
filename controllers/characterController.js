const express = require("express");
const models = require ("../models/character")
const router = express.Router();

router.post("/", async (req,res)=>{
console.log("hola")
})

module.exports = router; 
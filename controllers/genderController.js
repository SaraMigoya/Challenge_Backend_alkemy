const express = require("express");
const models = require ("../models/gender")
const router = express.Router();

router.post("/", async (req,res)=>{
console.log("hola")
})

module.exports = router; 
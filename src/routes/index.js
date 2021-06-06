const express = require('express')

const router = express.Router()

router.get("/", (req,res) => res.status(200).send({
    mensagem : "Bem vindo ao servidor da Julia" 
}))


module.exports = router
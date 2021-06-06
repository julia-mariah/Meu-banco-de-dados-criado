const express = require('express')
const controller = require("../controllers/controllersFilmes")
const router = express.Router()


// filmes / 
router.get("/", controller.getAll)
router.post("/", controller.criarFilme)
router.delete("/:id",controller.deletaFilme)
router.patch("/:id",controller.atualizarFilme)
router.get("/:id", controller.getByid)

module.exports = router
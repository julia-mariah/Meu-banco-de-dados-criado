const express = require("express")
const index = require("./routes")
const filmes = require("./routes/routesfilmes")
const bdFilmes = require("./data/dataFilmes")
const app = express()

app.use(express.json())

bdFilmes.connect()

app.use("/", index)

app.use("/filmes", filmes)



module.exports = app





const Filmes = require("../models/models")



const getAll = async (req, res) => {
    try {
        const filmesEncontrados = await Filmes.find()
        res.status(200).send(filmesEncontrados)
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

const criarFilme = async (req, res) => {

    const filme = new Filmes({
        titulo: req.body.titulo,
        genero: req.body.genero,
        diretor: req.body.diretor,
        pais: req.body.pais
    })
    try {
        const novoFilme = await filme.save()
        res.status(201).send({ message: "filme criado", filme: novoFilme })

    } catch (error) {
        res.status(500).send({message: error.message })
    }

}

const deletaFilme = async (req, res) => {
    try {
        const filme = await Filmes.findById(req.params.id)
        filme.remove()
res.status(200).send({message: "filme deletado", filme: filme})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}
const atualizarFilme = async (req, res) => {
    try {
        const filme = await Filmes.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'filme não encontrado!'})
        }

        if (req.body.titulo != null) {
            filme.titulo = req.body.titulo
        }

        if (req.body.genero != null) {
            filme.genero = req.body.genero
        }

        if (req.body.diretor != null) {
            filme.diretor = req.body.diretor
        }

        if (req.body.pais != null) {
            filme.pais = req.body.pais
        }

        const filmeAtualizado = await filme.save()
        res.status(200).send({message : "filme Atualizado"})


    } catch (error) {
        res.status(500).send({ message:error.message})
    }
}


const getByid = async (req, res) => {
    try {
        const filme = await Filmes.findById(req.params.id)
        if (filme == null) {
            return res.status(404).send({ message: 'filme não encontrado!'})
        }
        return res.status(200).send(filme)          
        

    } catch (error) {
        res.status(500).send({message:error.message})
    }
}






module.exports = {
    getAll,
    criarFilme,
    deletaFilme,
    atualizarFilme,
    getByid
}


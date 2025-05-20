const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const books = [
    { title: "O senhor dos Aneis", author: "J.R.R. Tolkien" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "O poderoso chefão", author: "Mario Puzo" },
    { title: "Nada será como antes", author: "Miguel Nicolelis" },
    { title: "Cemiterio de Dragões", author: "Raphael Draccon" }
]

app.get('/api/books', (req, res) => {
    setTimeout(() => {
        res.json(books)
    }, 500)
})

app.post('/api/books', (req, res) => {
    const {tittle, author} = req.body

    if (!title || !author) {
        return res.status(400).json({error: "Titulo e autor são obrigatorios."})
    }

    const newBook = { title, author }
    books.push(newBook)

    res.status(201).json(newBook)
})

app.delete("api/books/:index", (req, res) => {
    const index = Number.parseInt(req.params.index)

    if (isNaN(index) || index < 0 || index >= books.length) {
        return res.status(404).json({error: "Livro não encontrado!"})
    }

    const removeBook = books.splice(index, 1)[0]

    res.json(removeBook)
})

app.listen(PORT, () => {
    console.log(`Servidor Express rodadno em htpp://localhost:${PORT}`)
})
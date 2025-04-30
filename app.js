require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())// Middleware to parse JSON bodies, entienda envios de JSON
app.use(bodyParser.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies, entienda envios de formularios

const PORT = process.env.PORT || 3010

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Express.js App v2</h1>
        <p>Use the following endpoints to test the app:</p>
        <p>Corre en el puerto: ${PORT}</p>`)
})

//Rutas
app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    res.send('User ID: ' + userId)
})

app.get('/search', (req, res) => {
    const term = req.query.termino || 'No especified'
    const category = req.query.categoria || 'Todas'
    res.send(`Search term: ${term}, Category: ${category}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port, http:localhost/${PORT}`)
});
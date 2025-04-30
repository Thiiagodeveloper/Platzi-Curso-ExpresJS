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

//Rutas con query params
app.get('/search', (req, res) => {
    const terms = req.query.termino || "no especificado";
    const category = req.query.categoria || "todas";

    res.send(`<h2>Resultados de búsqueda</h2>
              <p>Término: ${terms}</p>
              <p>Categoría: ${category}</p>`);
});

app.post('/form', (req, res) => {
    const name = req.body.nombre || "no especificado";
    const emal = req.body.email || "no Proporcionado";
    res.json({
        message: "Formulario recibido",
        data: {
            name: name,
            email: emal
        }
    })
})

app.post('/api/data', (req, res) => {
    const data = req.body

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
            error: "No data provided"
        })
    }

    res.json({
        message: "Data received",
        data: data
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port, http:localhost/${PORT}`)
});
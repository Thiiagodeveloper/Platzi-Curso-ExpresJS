const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Express.js App v2</h1>
        <p>Use the following endpoints to test the app:</p>
        <p>Corre en el puerto: ${PORT}</p>`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port', ${PORT}`)
});
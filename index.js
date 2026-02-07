
//express.js node
const express = require('express')
const cors require("cors");
const app = express()
const port = 3000

app.use(cors());

app.get('/users', (request, response) => {
    response.json({nome: "teste", idade:90});
})

app.listen(port, () => {
    console.log(`App rodando em: http://localhost:${port}`)
})

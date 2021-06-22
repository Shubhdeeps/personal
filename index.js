const express = require('express')
const Note = require('./data.json')
const ENum = require('./Enumbers.json')
const app = express()

const cors = require('cors')
app.use(cors())


app.get('/api/notes', (request, response) => {
  response.send(Note);
})

app.get('/api/e-numbers', (request, response) => {
  response.send(ENum);
})




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
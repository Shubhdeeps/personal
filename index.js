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

app.get('/api/e-numbers/:id', (request, response) => {
  const id = request.params.id
  const num = ENum.find(x => x.Number === id)
  response.json(num)
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
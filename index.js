const express = require('express')
const Note = require('./data.json')
const app = express()

const cors = require('cors')
app.use(cors())


app.get('/api/notes', (request, response) => {
  response.send(Note);
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
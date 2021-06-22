const express = require('express')
const Note = require('./Database')
const app = express()

const cors = require('cors')
app.use(cors())


app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
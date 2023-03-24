const express = require('express')
const PORT = 8000

const app = express()


app.use('/api/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})
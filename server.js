const express = require('express')

const app = express()

const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
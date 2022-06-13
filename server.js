const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use('/', express.static(path.join(__dirname, 'src/static')))
app.use(bodyParser.json())

app.listen(8080, () => {
    console.log('Server on port 8080')
})

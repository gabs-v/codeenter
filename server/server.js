const express = require('express')
const app = express();

const dbName = 'code'

app.use(express.json(), 
express.urlencoded({extended: true }))

require('./config/config.mongoose')
require('./routes/entry.routes')

app.listen(8000, () => console.log(`Connected to ${dbName}!! `))
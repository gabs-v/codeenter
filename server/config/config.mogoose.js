const mongoose = require('mongoose')

const dbName = 'code'

mongoose.connect('mongodb://localhost/code' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log(`established a connection to ${dbName}`))
.catch((err) => console.log(err))
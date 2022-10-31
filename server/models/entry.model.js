const mongoose = require ('mongoose')

const CodeSchema = new mongoose.Schema({
    summary: {
        type: String,
        required: true
    },
})
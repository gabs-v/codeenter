const mongoose = require ('mongoose')

const CodeSchema = new mongoose.Schema({
    summary: {
        type: String,
        required: true
    },
    challenges: {
        type: String,
        required: false
    },
    solutions: {
        type: String,
        required: false 
    }
})

const Entry = mongoose.model('Entry, EntrySchema');
module.exports = Entry; 
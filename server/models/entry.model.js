const mongoose = require ('mongoose')

const CodeSchema = new mongoose.Schema({
    summary: {
        type: String,
    },
    challenges: {
        type: String,
    },
    solutions: {
        type: String,
    }
})

const Entry = mongoose.model('Entry, EntrySchema');
module.exports = Entry; 
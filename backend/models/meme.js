const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    id: Number,
    description: String
})

const Meme = mongoose.model('Meme', MemeSchema);

module.exports = Meme;
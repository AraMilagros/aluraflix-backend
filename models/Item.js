const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
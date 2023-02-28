const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    description:{
        type: String,
        required: [true, "Can't be blank"]
    },
    price: {
        type: String,
        required: [true, "Can't be blank"]
    },
    category: {
        type: String,
        required: [true, "Can't be blank"]
    },
    pictures: {
        type: Array,
        required: true
    },
    link: {
        type: String,
        required: [true, "Can't be blank"]
    }
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
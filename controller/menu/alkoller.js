const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    alkolcesit: [
        {
            id: {
                type: String,
            },
            name: {
                type: String,
            },
            description: {
                type: String,
            },
            price: {
                type: String,
            },
            img: {
                type: String,
            },
        }
    ],
})
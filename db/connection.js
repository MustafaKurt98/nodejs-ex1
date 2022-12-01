require('dotenv').config()
const mongoose = require('mongoose')
const { MONGO_URL } = process.env

const db = async () => {

    try {
        const db = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongodb Connected.')
    } catch (error) {
        console.log('Mongodb Connected.')
        // process.exit(1);
    }

}
module.exports = db
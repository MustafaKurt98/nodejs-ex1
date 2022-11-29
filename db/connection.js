require('dotenv').config()
const { log } = require('mercedlogger')
const mongoose = require('mongoose')
const { MONGO_URL } = process.env

const db = async () => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongodb Connected.')
    } catch (error) {
        throw Error(error);
        // process.exit(1);
    }

}
module.exports = db
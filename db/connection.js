require('dotenv').config()
const { log } = require('mercedlogger')
const mongoose = require('mongoose')
const { MONGO_URL } = process.env

function db() {

    mongoose.connect = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection
        .on("open", () => log.green("DATABASE STATE", "Connection Open"))
        .on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
        .on("error", (error) => log.red("DATABASE STATE", error))

}
module.exports = db
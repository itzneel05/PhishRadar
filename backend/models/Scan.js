const mongoose = require("mongoose")

const ScanSchema = new mongoose.Schema({
    url: String,
    phone: String,
    result: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Scan", ScanSchema)
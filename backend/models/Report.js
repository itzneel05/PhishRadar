const mongoose = require("mongoose")

const ReportSchema = new mongoose.Schema({
    url: String,
    phone: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Report", ReportSchema)
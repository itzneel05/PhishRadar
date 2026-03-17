const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/phishradar")
        console.log("Database connected to phishradar")
    } catch (error) {
        console.log("Database connection error:", error)
    }
}

module.exports = connectDB

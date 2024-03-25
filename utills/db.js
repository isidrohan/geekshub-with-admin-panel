const mongoose = require("mongoose")

const URI = process.env.DATABASE_URI;

const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection successfull to database");
    } catch (error) {
        console.error("connection to database is failed")
        process.exit(0);
    }

}

module.exports = connectDB;
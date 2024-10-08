const mongoose = require("mongoose");
require("dotenv").config();

const DBConnection = async () => {

    const MONGO_URI = process.env.MONGO_URL;
   console.log(MONGO_URI);
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

module.exports = { DBConnection };
const mongoose = require("mongoose");

module.exports = async () => {
    try {
        console.log("Database connected");
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

    } catch (error) {
        console.log("database connection error", error);
        throw new Error(err);
    }
}
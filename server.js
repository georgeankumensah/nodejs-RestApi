const express = require('express');
const dotEnv = require('dotenv');
const cors = require("cors");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();
// database connection
dbConnection();

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 3000;




app.get("/", (req, res, next) => {
    res.send("Hello World");
})

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
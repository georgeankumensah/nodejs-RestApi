const express = require('express');
const dotenv = require('dotenv').config();

const connectDB = require('./config/connectDB');

const app = express();

const Task = require('./model/taskModel');


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Routes
app.get('/', (req, res) => {
    res.send('Homepage route');
    res.end();
});


app.post("/api/tasks", async (req, res) => {
       try {
                const task =  await Task.create(req.body);
                  res.status(200).json({
                    status: 'success',
                      data: task,
               });
       } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: error.message,
            });

                res.status(500).json({
                    status: 'error',
                    message: error.message,
                });
       }
       
       
  
});


const PORT = process.env.PORT || 5000;



const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        }   
        );
        
    } catch (error) {
        console.log(`Error starting server: ${error.message}`)
    }
}

startServer();

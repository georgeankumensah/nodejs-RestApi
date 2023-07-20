const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
  
        name:{
            type: String,
            required: [true, 'Please enter task name'],

        },
        completed:{
            type: Boolean,
            required: true,
            default: false,
        },

    },
    {
        timestamps: true,
        
    })


    const taskModel = mongoose.model('Task', taskSchema);

    module.exports = taskModel;
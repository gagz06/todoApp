const mongoose=require('mongoose');

const taskSchema = new mongoose.Schema({
    work:{
        type: String,
        required: true
    },
    category: {
        type: String
    },
    taskDate:{
        type: Date,
        required:true
    }
});

const toDoTask = mongoose.model('toDoTask',taskSchema);
module.exports= toDoTask;
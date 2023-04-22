const express = require('express');

const port =8000;
// const path = require('path');

const db=require('./config/mongoose');
const toDoTask= require('./models/task');
const app= express();

// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    //console.log("get called");
    toDoTask.find({})
        .then(newTask => {
            console.log('Tasks:', newTask);
            return res.render('home',{
                task_list: newTask
            });
        })
        .catch(err => {
            console.log('Error while fetching tasks:', err);
            return res.status(500).send('Internal server error');
        });
});

app.use('/',require('./routes'));

app.post('/add-task', function(req, res){
    //console.log(req.body.work);
    toDoTask.create({
            work: req.body.work,
            category: req.body.category,
            taskDate: req.body.taskDate
        })
        .then((newTask)=>{
            console.log('*********',newTask);
                return res.redirect('back');
        })
        .catch((err)=>{
            console.log('Error on adding contact');
            return;
        });
});


app.listen(port,function(err){
    if (err) {
        console.log(`Error running server : ${err}`);       
    }
    console.log(`Server running on port : ${port}`);
});
 
 
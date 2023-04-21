// require the library
const mongoose =require('mongoose');
//connect to the db
mongoose.connect('mongodb://0.0.0.0/toDoTask_db');
//acquire the connection
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,'Error connecting to db'));
// up and running
db.once('open',function(){
    console.log('DB connection successful');
});
const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://princeraj6450:prince123@cluster0.fpnbyen.mongodb.net/prince_habit?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/prince_habit");

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

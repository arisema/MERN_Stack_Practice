const mongoose = require('mongoose');


const mongo_user = process.env.MONGO_USERNAME;
const mongo_db_name = process.env.MONGO_DB;

mongoose.connect(
    'mongodb://mongo_db:27017/{mongo_db_name}',
    {useNewUrlParser: true}, (err) => {
        if(!err){
            console.log('Suuccessfully connected to mongoDB');
        }
        else{
            console.log('Failed to connect to MongoDB: '+err)
        }
    }
);

require('./employee.model');

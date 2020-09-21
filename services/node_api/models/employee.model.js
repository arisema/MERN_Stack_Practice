const mongoose = require('mongoose');


var employeeSchema = new mongoose.Schema({
    employeeName : {
        type : String,
        required : 'This field is required!'
    },
    employeeDateOfBirth : {
        type : String,
        required : 'This field is required!'
    },
    employeeGender : {
        type : String,
        required : 'This field is required!'
    },
    employeeSalary : {
        type : String,
        required : 'This field is required!' 
    }
});

mongoose.model('Employee', employeeSchema);

const mongoose = require('mongoose');


var employeeSchema = new mongoose.Schema({
    employeeName : {
        type : String,
        required : 'This field is required!'
    },
    employeeDateOfBirth : {
        type : Date,
        required : 'This field is required!'
    },
    employeeGender : {
        type : String,
        enum: ['female', 'male'],
        default: 'male'
    },
    employeeSalary : {
        type : Number,
        required : 'This field is required!' 
    }
}, {strict: "throw"});

mongoose.model('Employee', employeeSchema);

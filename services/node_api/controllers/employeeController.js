const express = require('express');
const mongoose = require('mongoose');


var router = express.Router();
const Employee = mongoose.model('Employee');

// read request for all employees
router.get('/list', (request, response) => {
    Employee.find((error, doc) => {
        if(!error){
            response.json({
                list : doc
            });
        }
        else console.log("Couldn't retrieve the list of employees: "+error);
    });
});
// read employee information request
router.get('/', (request, response) => {
    Employee.findById(request.body.id, (error, doc) => {
        if(!error){
            response.json({
                employee : doc
            });
        }
        else console.log("Couldn't retrieve the list of employees: "+error);
    });
});
// insert new employee request
router.post('/', (request, response) => {
    var employee = new Employee();
    employee.employeeName = request.body.employeeName;
    employee.employeeDateOfBirth = request.body.employeeDateOfBirth;
    employee.employeeGender = request.body.employeeGender;
    employee.employeeSalary = request.body.employeeSalary;
    employee.save((error, doc) => {
        if(!error) response.redirect('/employee/list');
        else {
            console.log('Error encountered: '+error);
            console.log(request.body);
        }
    });
});
// update employee data request
router.put('/', (request, response) => {
    Employee.findByIdAndUpdate(
        request.body.id, 
        request.body, 
        {new : true},
        (error, doc) => {
            if(!error) response.json({ employee: doc });
            else console.log('Error encountered: '+error);
        });
});
// delete employee request
router.delete('/', (request, response) => {
    Employee.findByIdAndRemove(request.body.id, (error, doc) => {
        if(!error) response.redirect('/employee/list');
        else console.log('Error encountered: '+error);
    });
});

module.exports = router;

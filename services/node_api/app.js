'use strict';

require('./models/mongodb');

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyparser.urlencoded( { extended : true } ));
app.use(bodyparser.json());
app.use(cors());
app.get('/', (_request, result) => {
    result.send('Employee Mangement App');
}
);

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8888;
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

const employeeController = require('./controllers/employeeController');
app.use('/employee', employeeController);

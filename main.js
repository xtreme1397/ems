const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRouter = require('./org/ems/com/employee/controller/EmployeeController');
const mongoConfig = require('./org/ems/com/system/config/mongoConfig');
var app = express();


// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.json())

// allow cross-origin requests
app.use(cors());
app.use('/employee', employeeRouter);

var listener = app.listen(3000, (err) => {
    if (!err) {
        console.log(`Server is listening on http://localhost:${listener.address().port}`);
        mongoConfig.connect();
    }

});
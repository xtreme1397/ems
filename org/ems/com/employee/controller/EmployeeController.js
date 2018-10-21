let express = require('express');
let EmployeeService = require('../service/EmployeeService');

let userRouter = express.Router();
let employeeRouter = express.Router({ mergeParams: true });
const employeeService = new EmployeeService();
employeeRouter.route('/')
    .get(function (req, res) {
        employeeService.getEmployees((data) => {
            res.status(200)
                .send(data);
        })

    });


employeeRouter.route('/:id')
    .get(function (req, res) {
        employeeService.getEmployById(req.params.id, (data) => {
            res.status(200)
                .send(data);
        })

    });

employeeRouter.route('/')
    .post(function (req, res) {
        employeeService.addEmployee(req.body, (data) => {
            res.status(201)
                .send(data);
        })

    });


employeeRouter.route('/:id')
    .put(function (req, res) {
        employeeService.updateEmployee(req.params.id, req.body, (data) => {
            res.status(200)
                .send(data);
        });
    });


employeeRouter.route('/:id')
    .delete(function (req, res) {
        employeeService.deleteEmployee(req.params.id, (data) => {
            res.status(202)
                .send(data);
        });
    });

module.exports = employeeRouter;

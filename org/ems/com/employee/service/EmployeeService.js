let EmployeeRepo = require('../data/EmployeeRepo');
const employeeRepo = new EmployeeRepo();
class EmployeeService {
    getEmployees(future) {
        employeeRepo.find({ limit: 10, skip:0 },(data) => {
            future(data);
        })
    }

    getEmployById(id, future) {
        employeeRepo.findById(id, { limit: 20, skip: 0 }, (data) => {
            future(data);
        });
    }
    addEmployee(payload, future) {
        employeeRepo.insert(payload, (data) => {
            future(data);
        });
    }


    deleteEmployee(id, future) {
        employeeRepo.delete(id, (data) => {
            future(data);
        });
    }


    updateEmployee(id, payload, future) {
        employeeRepo.update(id, payload, (data) => {
            future(data);
        });
    }
}
module.exports = EmployeeService;
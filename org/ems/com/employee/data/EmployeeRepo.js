const Employee = require('../domain/Employee');

class EmployeeRepo {
    insert(employee, future) {
        Employee.create(employee).then(future).catch(future);
    }
    update(id, data = {}, future) {
        let opts = {
            new: true
        }
        Employee.findByIdAndUpdate({ _id: id }, data, opts)
            .then(future)
            .catch(future)

    }
    find(opts = { limit: 10, skip: 10 }, future) {
        let limit = parseInt(opts.limit, 10) || 10, // default limit to 10 docs
            skip = parseInt(opts.skip, 10) || 0; // default skip to 0 docs
        Employee.find({}).skip(skip).limit(limit).then(future).catch(future);
    }
    findById(id, opts = { limit: 10, skip: 10 }, future) {
        let limit = parseInt(opts.limit, 10) || 10, // default limit to 10 docs
            skip = parseInt(opts.skip, 10) || 0, // default skip to 0 docs
            query = { _id: id };
        Employee.find(query).skip(skip).limit(limit).then(future).catch(future);
    }
    delete(id, future) {
        Employee.findOneAndRemove({ _id: id }).then(future).catch(future);
    }
}

module.exports = EmployeeRepo;
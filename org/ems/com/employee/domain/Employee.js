
const mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp');

/**
 * We’re using the mongoose-timestamp plugin by calling SchemaName.plugin(timestamps).
 * This allows us to automatically generate createdAt and updatedAt timestamps and indexes
 * without having to add additional code to our schema files.
 */


const EmployeeSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        trim: true,
        unique: true,
        required: true,
    },
    id: mongoose.Schema.ObjectId,
    dept: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    age: {
        type: Number,
        trim: true,
        required: true,
    },
    name: {
        first: {
            type: String,
            trim: true,
            required: true,
        },
        last: {
            type: String,
            trim: true,
            required: true,
        },
    },
}, { collection: 'employee' })

EmployeeSchema.plugin(timestamps);

// Compile model from schema
module.exports = exports = mongoose.model('Employee', EmployeeSchema)


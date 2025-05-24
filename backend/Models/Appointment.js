const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, 
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    services: [{
        type: String,
        required: true
    }],
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true,
        match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ // HH:MM format
    },
    endTime: {
        type: String,
        required: true,
        match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    },
  //payment will be only by cash
    payment: {
        type: String,
        required: true,
        enum: ['cash']
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'confirmed', 'completed', 'canceled']
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
'use strict';
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    email: {
        type: String,
        minlength: 6,
        maxlength: 255
    },
    name: {
        type: String,
        maxlength: 50
    },
    rating: {
        type: String,
        maxlength: 1
    },
    type: {
        type: String
    },
    message: {
        type: String,
        maxlength: 150
    },
    status: {
        type: String,
        default: 'not approved'
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Review', ReviewSchema);
const mongoose = require('mongoose');

const AddRoute = new mongoose.Schema({
    origin: { type: String, required: true },
    stops: { type: Array, required: true },
    tripNumber: { type: String, required: true },
    destination: { type: String, required: true }
})

module.exports = mongoose.model('Route', AddRoute);


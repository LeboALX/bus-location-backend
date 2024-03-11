const mongoose = require('mongoose');

const AddBuses = new mongoose.Schema({
    make: { type: String, required: true },
    fileId: { type: String, required: true },
    busNumber: { type: Number, reuired: true },
    occupant: { type: Number, reuired: true },
    model: { type: String, reuired: true },
    numberPlate: { type: String, reuired: true },
    discNumber: { type: String, reuired: true },
})

module.exports = mongoose.model('Buses', AddBuses);


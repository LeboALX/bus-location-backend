const mongoose = require('mongoose');

const AddDriver = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    idNumber: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    fileId: { type: String, required: true },
    cellNumber: { type: String, required: true },
    email: { type: String, required: true },
    code: { type: String, required: true },
    experience: { type: Number, required: true }
})
module.exports = mongoose.model('Drivers', AddDriver);


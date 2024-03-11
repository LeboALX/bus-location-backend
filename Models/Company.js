const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')

const Address = new mongoose.Schema({
    streetName: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    city: { type: String, required: true },
    code: { type: Number, required: true }
})

const Company = new mongoose.Schema({
    companyName: { type: String, required: true },
    status: { type: String, required: true },
    fileId: { type: String, required: true },
    companyRegistrationNumber: { type: Number, required: true },
    address: Address,
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
    cellNumber: { type: Number, required: true },
})

module.exports = mongoose.model('companies', Company);



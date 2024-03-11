const Driver = require('../Models/addDriver');
const mongoose = require("mongoose")

let bucket;
mongoose.connection.on("open", () => {
    console.log('COONECTION RUNNING')
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
})

const pictureId = `picture-${new Date().getTime()}`;

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to My Backend');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addDriver: async (req, res) => {
        try {
            const payload = {...req.body};
            payload['fileId'] = pictureId;
            const newDriver = new Driver(payload)
            const result = await newDriver.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getDriver: async (req, res)=>{
        try {
            const result = await Driver.find(req.params);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteDriver: async (req, res) => {
        const query = { ...req.params }
        try {
            const result = await Driver.deleteOne(query);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
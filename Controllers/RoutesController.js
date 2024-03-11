const Routes = require('../Models/addRoute');
const mongoose = require("mongoose")

let bucket;
mongoose.connection.on("open", () => {
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
})

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to My Backend');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addTrip: async (req, res) => {
        try {
            const payload = { ...req.body };
            const route = new Routes(payload)
            const result = await route.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getRoute: async (req, res) => {
        try {
            const result = await Routes.find(req.params);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteTrip: async (req, res) => {
        const query = { ...req.params }
        try {
            const result = await Routes.deleteOne(query);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
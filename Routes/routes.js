const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const multer = require('multer');

// mongoose.connection.on("open",() => {
//     console.log("Connected")
    // Middleware
    const storage = multer.memoryStorage();
    const upload = multer({ storage })
    
    const CompanyController = require('../Controllers/CompanyController');
const DriverController = require('../Controllers/DriverController');
const RoutesController = require('../Controllers/RoutesController');
    
    router.get('/', CompanyController.defaultRoute);
    
    // Add user route
    router.post('/add-company', CompanyController.addCompany);
    router.post('/upload', upload.any(), CompanyController.uploadFile);
    router.get('/get-company', CompanyController.getCompany)
    router.post('/update-company/:companyRegistrationNumber', CompanyController.updateCompany)
    router.delete('/delete-company/:companyRegistrationNumber', CompanyController.deleteCompany)
    router.get('/get-bus', CompanyController.getBus)
    router.delete('/delete-bus/:busNumber', CompanyController.deleteBus)
    router.get('/get-driver', DriverController.getDriver)
    router.delete('/delete-driver/:idNumber', DriverController.deleteDriver)
    router.post('/add-bus',CompanyController.addBus)
    router.post('/add-driver',DriverController.addDriver)
    router.post('/add-trip',RoutesController.addTrip)
    router.delete('/delete-trip/:tripNumber',RoutesController.deleteTrip)
    router.get('/get-route',RoutesController.getRoute)
// })

module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema')
const errorHandler = require('../Middlewares/errorMiddleware');
const authTokenHandler = require('../Middlewares/checkAuthToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

//lkne ypin hlwq mkrj
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'urszulagrezicka@gmail.com',
        pass: 'lkneypinhlwqmkrj'
    }
})


router.get('/test', async (req, res) => {
    res.json({
        message: "Auth api is working"
    })
})

function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data,
    };
}

router.use(errorHandler)

module.exports = router;
require('dotenv').config();

const nodemailer = require('nodemailer');

//nodemailer stuff
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

module.exports = transporter;

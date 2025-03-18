// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', upload.single('file'), (req, res) => {
    const { email, message } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'naban3236@gmail.com',
            pass: 'padmanaban2002'
        }
    });
    const mail = require('./mail');
    const mailOptions = {
        from: 'naban3236@gmail.com',
        to: email,
        subject: 'New Message with File',
        text: message,
        attachments: [{
            filename: file.originalname,
            path: file.path
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email' });
        }
        fs.unlinkSync(file.path); 
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

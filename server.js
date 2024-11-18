const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4200;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, text, html } = req.body;

  // Crear el transporte con los datos del servidor de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // O el servicio que estés usando
    auth: {
      user: 'tucorreo@gmail.com',  // Tu correo de Gmail o de otro proveedor
      pass: 'tucontraseña'  // Tu contraseña o una contraseña específica de aplicación
    }
  });

  // Definir el mensaje
  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ message: 'Error al enviar el correo' });
    }
    console.log('Correo enviado: ' + info.response);
    res.status(200).send({ message: 'Correo enviado correctamente' });
  });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});

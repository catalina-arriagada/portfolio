const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// Carga las variables de entorno del archivo .env
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Reemplazar con la URL del frontend
}));
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));
//

// Definir el esquema y el modelo
const contactSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    mensaje: String
  }, { collection: 'contacts' }); // Especifica el nombre de la colección
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  // Ruta para agregar un nuevo contacto
  app.post('/contacts', async (req, res) => {
    const { nombre, email, mensaje } = req.body;
  
    try {
      const newContact = new Contact({ nombre, email, mensaje });
      await newContact.save();
      res.status(201).json(newContact);
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el contacto' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
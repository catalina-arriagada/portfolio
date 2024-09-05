const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// Carga las variables de entorno del archivo .env
dotenv.config();

const app = express();
//const port = 5000;
const port = process.env.PORT;
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
    nombre: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: 3,
        maxlength: 30
      },
      email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: 5,
        maxlength: 30,
        unique: true, // Asegura que el email sea único
        validate: {
          validator: function(v) {
            // Expresión regular para validar el correo electrónico
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: props => `${props.value} no es un correo electrónico válido!`
        }
      },
      mensaje: {
        type: String,
        required: [true, 'A message is required!'],
        minlength: 5,
        maxlength: 310
      }
  }, { collection: 'contacts' }); // Especifica el nombre de la colección
  
  const Contact = mongoose.model('Contact', contactSchema);
  

  // Definir el esquema del proyecto
  const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },      // Nombre del proyecto
    description: { type: String, required: true }, // Descripción del proyecto
    img: { type: String, required: true },        // URL de la imagen del proyecto
    link: { type: String, required: true }        // URL del proyecto en producción o demo
  }, { collection: 'projects' });  // Especifica la colección en MongoDB
  
  // Crear el modelo basado en el esquema
  const Project = mongoose.model('Project', projectSchema);
  
  module.exports = Project;


  // Ruta para agregar un nuevo contacto
  app.post('/contacts', async (req, res) => {
    const { nombre, email, mensaje } = req.body;
  
    try {
      const newContact = new Contact({ nombre, email, mensaje });
      await newContact.save();
      res.status(201).json(newContact);
    } catch (error) {
        // Si ocurre un error de validación, se muestra el mensaje de error
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }

      res.status(500).json({ error: 'Error al agregar el contacto' });
    }
  });

  // Ruta para obtener los proyectos web
  app.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find(); //obtener todos los proyectos, el modelo se llama 'Project'
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
  });

  //obtener solo los 3 ultimos proyectos
  // Ruta para obtener los 3 últimos proyectos
  app.get('/projects/latest', async (req, res) => {
    try {
      const latestProjects = await Project.find().sort({ _id: -1 }).limit(3);
      res.json(latestProjects);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los últimos proyectos' });
    }
  });

  
  
  // app.listen(port, () => {
  //   console.log(`Servidor corriendo en http://localhost:${port}`);
  // });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
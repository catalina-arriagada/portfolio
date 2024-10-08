const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// Carga las variables de entorno del archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
//const port = process.env.PORT;

app.use((req, res, next) => {
  console.log('CORS configurado para permitir solicitudes desde:', 'https://portfolio-cp30.onrender.com/');
  next();
});

// Middleware
app.use(cors({
  //origin: 'http://localhost:3000', 
  origin: 'https://portfolio-cp30.onrender.com/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
app.use(express.json());

// Conectar a MongoDB
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log('Conectado a MongoDB'))
// .catch(err => console.error('Error al conectar a MongoDB:', err));
// //


const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, 
    {
      serverSelectionTimeoutMS: 5000, // Ajusta el tiempo de espera
    }
  );
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};


connectDB();

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
    console.log('Request received for /projects/latest');
    try {
      const latestProjects = await Project.find().sort({ _id: -1 }).limit(3);
      console.log('Projects fetched:', latestProjects);
      res.json(latestProjects);
    } catch (error) {
      console.error('Error al obtener los últimos proyectos:', error);
      res.status(500).json({ error: 'Error al obtener los últimos proyectos' });
    }
  });

  
  
  // app.listen(port, () => {
  //   console.log(`Servidor corriendo en http://localhost:${port}`);
  // });

const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Index from '../Index.jsx';
import Footer from '../Footer.jsx';
import '../../styles/carousel.css';

//cada imagen del carrusel respresenta marca personal
function Carrousel() {

  //poner imagenes de 3 ultimos proyectos
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects/latest');
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener los últimos proyectos:', error);
      }
    };

    fetchLatestProjects();
  }, []);

  return (
    <div className="row">
      < Index />
      <Carousel sm>
        
        {projects.map((project) => {
          return (
            <Carousel.Item className='text-center mt-5'>
              <Image src={project.img} text={project.name} fluid/>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Footer />
    </div>
  );
}

export default Carrousel;
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Index from '../Index.jsx';
import Footer from '../Footer.jsx';
import '../../styles/carousel.css';

function Carrousel() {
  //llamar a 3 ultimos proyectos de bd
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const response = await axios.get(`https://portfolio-cp30.onrender.com/projects/latest`);
        console.log('Fetched projects:', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener los últimos proyectos:', error);
      }
    };
  
    fetchLatestProjects();
  }, []);

  //poner imagenes de 3 ultimos proyectos
  return (
    <div className="row">
      < Index />
      <Carousel sm>
        
        {projects.map((project) => {
          return (
            <Carousel.Item className='text-center mt-5'>
              <Image src={project.img} fluid/>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Footer />
    </div>
  );
}

export default Carrousel;
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Index from '../Index.jsx';
import Footer from '../Footer.jsx';
import '../../styles/carousel.css';

//cada imagen del carrusel respresenta marca personal
function Carrousel() {

  //poner imagenes de proyectos mas destacados
  const ImgArray = [
    {
      Id: 0,
      Img: "./img/carr-1.png",
      Name: "First slide"
    },
    {
      Id: 1,
      Img: "./img/carr-2.png",
      Name: "Second slide"
    },
    {
      Id: 2,
      Img: "./img/carr-3.png",
      Name: "Third slide"
    }
  ];

  return (
    <div className="row">
      < Index />
      <Carousel sm>
        
        {ImgArray.map((Element) => {
          return (
            <Carousel.Item className='text-center mt-5'>
              <Image src={Element.Img} text={Element.Name} fluid/>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Footer />
    </div>
  );
}

export default Carrousel;
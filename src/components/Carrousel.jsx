import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Carrousel() {
  return (
    <div className="row">
      <Carousel>
        <Carousel.Item className='text-center mt-5 bg-body-tertiary'>
          <Image src="./img/carr-1.jpg" text="First slide" />
        </Carousel.Item>
        <Carousel.Item className='text-center mt-5 bg-body-tertiary'> 
          <Image src="./img/carr-2.jpg" text="Second slide" />
        </Carousel.Item>
        <Carousel.Item className='text-center mt-5 bg-body-tertiary'>
          <Image src="./img/carr-3.jpg" text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
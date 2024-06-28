import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrousel() {
  return (
    <div class="row">
      <Carousel>
        <Carousel.Item>
          <img src="./img/carr-1.jpg" text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/carr-2.jpg" text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/carr-3.jpg" text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
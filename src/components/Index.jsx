//Pagina de inicio
import React from 'react';

const Index = () => {
    return(
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="./img/carr-1.jpg" className="d-block w-100" alt="im1"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="./img/carr-2.jpg" className="d-block w-100" alt="im2"/>
                </div>
                <div className="carousel-item">
                    <img src="./img/carr-3.jpg" className="d-block w-100" alt="im3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}
export default Index;
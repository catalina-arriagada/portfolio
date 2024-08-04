//api paypal
import React from 'react';
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import "../styles/donations.css";

const Donations = () => {
    const handleClickDonacion = () => {
        window.open("https://paypal.me/catadies?country.x=CL&locale.x=es_XC");
      };
    return(
        <div className='row pt-4 d-flex flex-column align-items-center justify-content-between min-vh-100'>
            <h2 className='col display-6 text-center'>Donaciones</h2>
            <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vero consequuntur ratione, in libero hic eaque? Dignissimos, deleniti ducimus voluptates cum repellat cupiditate itaque a aspernatur sint veritatis et possimus?</p>
            <Image
            className="w-25"
            src="./img/profile12.png" />
            <a className='btn-donar mt-5 mb-3' onClick={handleClickDonacion}>Dona aqui</a>
           
            <Footer className="mt-auto"/>
        </div>
    )
}
export default Donations;
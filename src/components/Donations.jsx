import React from 'react';
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import "../styles/donations.css";

const Donations = () => {
    const handleClickDonacion = () => {
        window.open("https://paypal.me/catadies?country.x=CL&locale.x=es_XC");
      };
    return(
        <div className='div-container row pt-4 d-flex flex-column align-items-center justify-content-between'>
            <h2 className='col display-6 text-center'>Donations</h2>
            <p id='p-1' className="mb-0 text-center">If you like my work and think I deserve an incentive, you can contribute here. Remember that any contribution helps me to continue doing this and growing as a professional.</p>
            <p className="text-center text-secondary">Si te gusta mi trabajo y consideras que me merezco un incentivo, puedes contribuir acá. Recuerda que cualquier aporte me ayuda a seguir haciendo esto y creciendo como profesional.</p>
            <p className="mb-0 text-center">Thanks.</p>
            <p className="mb-2 text-center text-secondary">Muchas gracias.</p>
            <Image
            className="image-donar"
            src="./img/profile12.png" />
            <a className='btn-donar mt-4 mb-3 scroll' onClick={handleClickDonacion}>Donate</a>
           
            <Footer className="mt-auto"/>
        </div>
    )
}
export default Donations;
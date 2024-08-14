//Pagina de inicio
import React from 'react';
import { Image } from  'react-bootstrap';
import "../styles/index.css";

const Index = () => {
    return(
        <div className="pt-4 d-flex align-items-center">
            {/*<h1 md lg xl xxl className='col display-6 text-center'>Dev Cat Girl</h1>*/}
            <div className="mx-auto">
                <Image
                className="image-logo text-center"
                src="./img/logo.png" />
            </div>
        </div>
    )
}
export default Index;
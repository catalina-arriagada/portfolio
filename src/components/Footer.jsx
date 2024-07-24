import React from 'react';
import {Row} from "react-bootstrap";
import InstaLogoButton from "./rrss/InstaLogo";
import FaceLogoButton from "./rrss/FaceLogo";
import LinkeLogoButton from "./rrss/LinkeLogo";
import YoutLogoButton from "./rrss/YoutLogo";
import "../styles/footer.css";

const Footer = () => {
    const handleClickInsta = () => {
        window.open("http://www.instagram.com");
      };
      const handleClickFace = () => {
        window.open("http://www.facebook.com");
      };
      const handleClickLinkedin = () => {
        window.open("http://www.linkedin.com");
      };
      const handleClickYoutube = () => {
        window.open("http://www.youtube.com");
      };

    return(
        <div className="rrss-div">
                <h6 className="rrss-title">Redes sociales</h6>
                <Row xs={4}>
                <InstaLogoButton
                    imageInstaSource="./img/logoinsta192.png"
                    onClick={handleClickInsta}
                />
                <FaceLogoButton
                    imageFaceSource="./img/logofacebook192.png"
                    onClick={handleClickFace}
                />
                <LinkeLogoButton
                    imageLinkeSource="./img/logolinkedin192.png"
                    onClick={handleClickLinkedin}
                />
                <YoutLogoButton
                    imageYoutSource="./img/logoyoutube192.png"
                    onClick={handleClickYoutube}
                />
                </Row>
        </div>
    )
}
export default Footer;
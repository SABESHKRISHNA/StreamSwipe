import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">

          <div className="footer-center">
            <div>
              <FaMapMarker  color='white'/>
              <p>Vellore</p>
            </div>
            <div>
              <FaPhone color='white'/>
              <p>+91 87787*****</p>
            </div>
            <div>
              <FaEnvelope color='white'/>
              <p><a href="mailto:Sabeshkrishna@gmail.com">Sabeshkrishna@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <h1>Stream<span>Swipe</span></h1>

            <p className="footer-company-name">Copyright © 2023 <strong>Sabeshkrishna </strong> ©  All rights reserved</p>
          </div>
          <div className="footer-left">

            <div className="footer-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

import React from "react";
import './Footer.css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container" style={{cursor:"pointer"}}>

            <div className="footer-section">
    <h2>Vetri IT Systems</h2>
    <p>
        <FaEnvelope style={{ marginRight: '8px' }} />
       business@vetriit.com</p>
    <p>
        <FaPhone style={{ marginRight: '8px' }} />
 +91-8438558527
    </p>
</div>


                <div className="footer-section">
                    <h2>Services</h2>
                    <ul>
                        <li>Web Development</li>
                        <li>Software Development</li>
                        <li>Digital Marketing</li>
                        <li>Software Testing</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Support</h2>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Get in Touch</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook" className="facebook"><FaFacebook /></a>
                        <a href="https://whatsapp.com" aria-label="WhatsApp" className="whatsapp"><FaWhatsapp /></a>
                        <a href="https://instagram.com" aria-label="Instagram" className="insta"><FaInstagram /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;

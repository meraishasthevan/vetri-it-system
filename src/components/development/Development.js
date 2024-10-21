import React from "react";
import './Development.css';
import develop from '../Vetri It Systems Development_files/develop.jpg';

function Development() {
    return (
        <div className="development-container">
            <div className="development-item">
                <div className="development-web">
                    <h1>BEST WEBSITE DEVELOPMENT COMPANY</h1>
                    <h2>Enhancing Your Business with Top-Notch Web Development</h2>
                    <p>
                        Give Better Visibility to your Business with the Dynamic & Responsive Websites to reach Millions of People and Boost your Business!!! 
                        Give a Try to launch your website within 2 Days.. !!! Vetri IT Systems Provides a Website within 2 Days..!!! 
                        Connect with Us to Boost Your Business Today!!!
                    </p>
                </div>
                <div className="development-image">
                    <img src={develop} alt="Development Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Development;

import React from "react";
import './Dynamic.css';
import dynamic from '../Vetri It Systems Development_files/dynamic.png';
import dynamic1 from '../Vetri It Systems Development_files/dynamic1.jpg';
import dynamic2 from '../Vetri It Systems Development_files/dynamic2.jpg';
import dynamic3 from '../Vetri It Systems Development_files/dynamic3.jpg';
import dynamic4 from '../Vetri It Systems Development_files/dynamic4.jpg';
import dynamic5 from '../Vetri It Systems Development_files/dynamic5.jpg';
import dynamic6 from '../Vetri It Systems Development_files/dynamic6.jpg';

function Dynamic() {
    return (
        <div className="dynamic">
            <h1 className="dynamic-title">Dynamic Website</h1>
            <div className="dynamic-container">
                <div className="dynamic-image-container">
                    <img className="dynamic-main-image" src={dynamic} alt="Main Dynamic" />
                </div>
                <div className="dynamic-main">
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic1} alt="Dynamic Example 1" />
                        <p className="dynamic-item-description">Dynamic websites offer personalized content based on user interactions and preferences.</p>
                    </div>
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic2} alt="Dynamic Example 2" />
                        <p className="dynamic-item-description">They can display real-time data updates from databases and APIs.</p>
                    </div>
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic3} alt="Dynamic Example 3" />
                        <p className="dynamic-item-description">They are ideal for e-commerce, blogs, and social networks where content frequently changes.</p>
                    </div>
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic4} alt="Dynamic Example 4" />
                        <p className="dynamic-item-description">They allow users to interact with the site, such as submitting forms and commenting.</p>
                    </div>
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic5} alt="Dynamic Example 5" />
                        <p className="dynamic-item-description">Dynamic websites support complex functionalities like user authentication and content management.</p>
                    </div>
                    <div className="dynamic-item">
                        <img className="dynamic-item-image" src={dynamic6} alt="Dynamic Example 6" />
                        <p className="dynamic-item-description">They can integrate with various third-party services and APIs for enhanced functionality.</p>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Dynamic;

import React from "react";
import './Design.css';
import design from '../Vetri It Systems Development_files/design.png';
import design1 from '../Vetri It Systems Development_files/design1.png';
import design2 from '../Vetri It Systems Development_files/design2.png';
import design3 from '../Vetri It Systems Development_files/design3.png';
import design4 from '../Vetri It Systems Development_files/design4.png';
import design5 from '../Vetri It Systems Development_files/design5.png';
import design6 from '../Vetri It Systems Development_files/design6.png';

function Design() {
    return (
        <div className="design">
            <h1 className="design-title">Website Redesigning</h1>
            <div className="design-container">
                <div className="design-image-container">
                    <img src={design} alt="Main Design" className="design-main-image" />
                </div>
                <div className="design-main">
                    <div className="design-item">
                        <img src={design1} alt="Design Benefit" className="design-item-image" />
                        <p className="design-item-description">Website redesigning improves user experience with modern, intuitive design.</p>
                    </div>
                    <div className="design-item">
                        <img src={design2} alt="SEO Boost" className="design-item-image" />
                        <p className="design-item-description">Redesigning can boost SEO rankings through updated content and structure.</p>
                    </div>
                    <div className="design-item">
                        <img src={design3} alt="User Engagement" className="design-item-image" />
                        <p className="design-item-description">A redesigned website can increase user engagement and conversions.</p>
                    </div>
                    <div className="design-item">
                        <img src={design4} alt="Performance Enhancement" className="design-item-image" />
                        <p className="design-item-description">It enhances website performance with faster load times and better responsiveness.</p>
                    </div>
                    <div className="design-item">
                        <img src={design5} alt="Branding Reflection" className="design-item-image" />
                        <p className="design-item-description">It helps reflect current branding and company goals.</p>
                    </div>
                    <div className="design-item">
                        <img src={design6} alt="Compatibility" className="design-item-image" />
                        <p className="design-item-description">It ensures compatibility with the latest web technologies and devices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Design;

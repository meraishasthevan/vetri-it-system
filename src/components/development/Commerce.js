import React from "react";
import './Commerce.css';
import com from '../Vetri It Systems Development_files/com.png';
import com1 from '../Vetri It Systems Development_files/commerce1.png';
import com2 from '../Vetri It Systems Development_files/commerce2.png';
import com3 from '../Vetri It Systems Development_files/commerce3.png';
import com4 from '../Vetri It Systems Development_files/commerce4.png';
import com5 from '../Vetri It Systems Development_files/commerce5.png';
import com6 from '../Vetri It Systems Development_files/commerce6.png';

function Commerce() {
    return (
        <div className="commerce">
            <h1 className="commerce-title">E-Commerce Website</h1>
            <div className="com-container">
                <div className="com-main">
                    <div className="com-item">
                        <img src={com1} alt="E-commerce feature 1" />
                        <p>E-commerce websites allow customers to shop online anytime, increasing convenience.</p>
                    </div>
                    <div className="com-item">
                        <img src={com2} alt="E-commerce feature 2" />
                        <p>These websites offer personalized shopping experiences through recommendations.</p>
                    </div>
                    <div className="com-item">
                        <img src={com3} alt="E-commerce feature 3" />
                        <p>E-commerce websites provide various payment options for customer convenience.</p>
                    </div>
                    <div className="com-item">
                        <img src={com4} alt="E-commerce feature 4" />
                        <p>They reach a global audience, expanding market potential.</p>
                    </div>
                    <div className="com-item">
                        <img src={com5} alt="E-commerce feature 5" />
                        <p>They enable easy management of inventory and sales tracking.</p>
                    </div>
                    <div className="com-item">
                        <img src={com6} alt="E-commerce feature 6" />
                        <p>They facilitate direct communication with customers through chat and support features.</p>
                    </div>
                </div>
                <div className="com-image-container">
                    <img src={com} alt="Main E-commerce visual" className="com-main-image" />
                </div>
            </div>
        </div>
    );
}

export default Commerce;

import React, { useState, useEffect } from "react";
import './Main.css';
import main1 from '../Vetri It Systems_files/main1.png';
import main2 from '../Vetri It Systems_files/main2.png';
import main3 from '../Vetri It Systems_files/main3.png';
import main4 from '../Vetri It Systems_files/main4.png';
import main5 from '../Vetri It Systems_files/main5.png';
import main6 from '../Vetri It Systems_files/main6.png';
import main from '../Vetri It Systems_files/main.png';

const images = [
    { src: main1, title: "Experienced & Young Team" },
    { src: main2, title: "Worked with New Startups" },
    { src: main3, title: "Transparent Process" },
    { src: main4, title: "Affordable Price" },
    { src: main5, title: "On-time Delivery" },
    { src: main6, title: "Friendly Support" },
    { src: main, title: "Don't Wait for Opportunity, Create it" }
];

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const displayedImages = [...images, ...images].slice(currentIndex, currentIndex + itemsToShow);

    return (
        <div className="main" data-aos="zoom-in-down">
            <div className="main-container">
                <h1>Vetri IT Systems</h1>
                <h3>Why Us?</h3>
                <div className="carousel">
                    <div className="carousel-inner">
                        {displayedImages.map((image, index) => (
                            <div className="carousel-card" key={index}>
                                <img src={image.src} alt={image.title} className="carousel-image" />
                                <div className="carousel-title">{image.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

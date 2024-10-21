import React from "react";
import './CardSection.css';
import web from '../Vetri It Systems_files/web.gif';
import software from '../Vetri It Systems_files/software.gif';
import digital from '../Vetri It Systems_files/digital.gif';
import testing from '../Vetri It Systems_files/testing.gif';
import consult from '../Vetri It Systems_files/consult.gif';

function CardSection() {
    const allCards = [
        {
            "title": "Web Development",
            "description": "Build Interactive and Dynamic Websites.",
            "image": web,
            "button": "Starts From ₹ 3200"
        },
        {
            "title": "Software Development",
            "description": "Developed Customized Software Solutions",
            "image": software,
            "button": "Starts From ₹ 5000"
        },
        {
            "title": "Digital Marketing",
            "description": "Promote Your Business Through Digital Channels",
            "image": digital,
            "button": "Starts From ₹ 2500"
        },
        {
            "title": "UI/UX Design",
            "description": "Build Interactive and Designs",
            "image": web,
            "button": "Starts From ₹ 3700"
        },
        {
            "title": "Software Testing",
            "description": "Ensure Software Quality Through Thorough Testing",
            "image": testing,
            "button": "Starts From ₹ 3600"
        },
        {
            "title": "IT Consulting",
            "description": "Get Expert Advice for Your Project",
            "image": consult,
            "button": "Starts From ₹ 2100"
        }
    ];

    return (
        <div data-aos="flip-left" className="cardsection">
            <h1>360° Digital Marketing Service</h1>
            <h2>Digital Marketing Solution To Help You Meet And Exceed Your Expectations</h2>
            <div className="cardsection-container">
                {allCards.map((service, index) => (
                    <div className="card" key={index}>
                        <img src={service.image} alt={service.title} />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <button>{service.button}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardSection;

import React from "react";
import './Goal.css';
import goal from '../Vetri It Systems Development_files/goal.jpg';
import goal1 from '../Vetri It Systems Development_files/goal1.gif';
import goal2 from '../Vetri It Systems Development_files/goal2.gif';
import goal3 from '../Vetri It Systems Development_files/goal3.gif';
import goal4 from '../Vetri It Systems Development_files/goal4.gif';
import goal5 from '../Vetri It Systems Development_files/goal5.gif';
import goal6 from '../Vetri It Systems Development_files/goal6.gif';

function Goal() {
    return (
        <div className="goal">
            <h1 className="goal-title">Our Strategies To Make You Accomplish Your Goals</h1>
            <h3 className="goal-subtitle">A good website starts with a good strategy. This is how we deliver excellence on every website we craft.</h3>
            <div className="goal-container">
                <div className="goal-image-container">
                    <img src={goal} alt="Our Goals" className="goal-main-image" />
                </div>
                <div className="goal-main">
                    <div className="goal-item">
                        <img src={goal1} alt="Strategy 1" />
                        <p>Requirement</p>
                    </div>
                    <div className="goal-item">
                        <img src={goal2} alt="Strategy 2" />
                        <p>Strategy</p>
                    </div>
                    <div className="goal-item">
                        <img src={goal3} alt="Strategy 3" />
                        <p>Design</p>
                    </div>
                    <div className="goal-item">
                        <img src={goal4} alt="Strategy 4" />
                        <p>Development</p>
                    </div>
                    <div className="goal-item">
                        <img src={goal5} alt="Strategy 5" />
                        <p>Testing</p>
                    </div>
                    <div className="goal-item">
                        <img src={goal6} alt="Strategy 6" />
                        <p>Launch & support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goal;

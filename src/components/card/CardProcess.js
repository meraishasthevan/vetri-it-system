import React from "react";
import './CardProcess.css';
import process1 from '../Vetri It Systems_files/process1.jpg';
import process2 from '../Vetri It Systems_files/process2.jpg';
import process3 from '../Vetri It Systems_files/process3.jpg';
import process4 from '../Vetri It Systems_files/process4.jpg';
import process5 from '../Vetri It Systems_files/process5.jpg';
import process6 from '../Vetri It Systems_files/process6.jpg';



function CardProcess(){
    return(
        <div className="vis-pro">
            <h1>VIS Process...</h1>
        <div className="process-container">
            <div className="process">
                <div>
                    <img src={process1} alt="wait" />
                    <h1>Requirement</h1>
                </div>
                <div>
                    <img src={process2} alt="wait" />
                    <h1>Strategy</h1>
                </div>
                <div>
                    <img src={process3} alt="wait" />
                    <h1>Design</h1>
                </div>
                <div>
                    <img src={process4} alt="wait" />
                    <h1>Development</h1>
                </div>
                <div>
                    <img src={process5} alt="wait" />
                    <h1>Testing</h1>
                </div>
                <div>
                    <img src={process6} alt="wait" />
                    <h1>Launch & Support</h1>
                </div>

            </div>
        </div>
        </div>
    )
}
export default CardProcess;
import React from "react";
import './Expert.css';
import expert1 from '../Vetri It Systems Development_files/expert1.jpg';
import expert2 from '../Vetri It Systems Development_files/expert2.jpg';
import expert3 from '../Vetri It Systems Development_files/expert3.jpg';
import expert4 from '../Vetri It Systems Development_files/expert4.jpg';
import expert5 from '../Vetri It Systems Development_files/expert5.jpg';
import expert6 from '../Vetri It Systems Development_files/expert6.jpg';
import expert7 from '../Vetri It Systems Development_files/expert7.jpg';
import expert8 from '../Vetri It Systems Development_files/expert8.jpg';
import expert9 from '../Vetri It Systems Development_files/expert9.jpg';
import expert10 from '../Vetri It Systems Development_files/expert10.jpg';

function Expert(){
    return(
        <div className="expert">
          <h1>We Are Expertise In</h1>

           <div className="expert-container">
              <div className="expert-main">
                 <div className="expert-item">
                    <img src={expert1} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert2} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert3} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert4} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert5} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert6} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert7} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert8} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert9} alt="wait"/>
                 </div>
                 <div className="expert-item">
                    <img src={expert10} alt="wait"/>
                 </div>
              </div>
           </div>
        </div>
    )
}
export default Expert;
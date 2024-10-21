import React from "react";
import './Troop.css';
import leader from '../Vetri It Systems_files/leader-md.png';
import project from '../Vetri It Systems_files/project-lead.png';
import backend from '../Vetri It Systems_files/backend-lead.png';

function Troop(){
    return(
        <div className="troop" data-aos="fade-right">
            <h1>Meet Our Troops</h1>
           <div className="troop-container">
           <div>
                <img src={project} alt="wait"/>
                <h1>Praveena S</h1>
                <h2>VIS Project Manager</h2>
              </div>
              <div>
                <img src={leader} alt="wait"/>
                <h1>Pravin Kumar P</h1>
                <h2>MD & CEO VETRI Companies</h2>
              </div>
              <div>
                <img src={backend} alt="wait"/>
                <h1>Maheshwaran S</h1>
                <h2>VIS Project Manager</h2>
              </div>
              
           </div>
        </div>
    )
}
export default Troop;
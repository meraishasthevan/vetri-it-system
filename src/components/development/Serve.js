import React from "react";
import './Serve.css';
import serve1 from '../Vetri It Systems Development_files/serve1.png';
import serve2 from '../Vetri It Systems Development_files/serve2.png';
import serve3 from '../Vetri It Systems Development_files/serve3.png';
import serve4 from '../Vetri It Systems Development_files/serve4.png';


function Serve(){
    return(
        <div>
           <div className="serve-container">
              <h1>What We Serve</h1>
             <div className="serve-main">
               <div className="serve-item">
                  <img src={serve1} alt="wait"/>
                  <h1>Static Website</h1>
                  <button>Start from ₹ 3200</button>
                  <p>A Basic Website which will give a quick Visibility to your business through Digital Medium..</p>
               </div>
               <div className="serve-item">
                  <img src={serve2} alt="wait"/>
                  <h1>Dynamic Website</h1>
                  <button>Start from ₹ 7000</button>
                  <p>Quick & Interactive Website which will give a Great Visibility to your business through Digital Medium and pass an Interactive UI to your Customers..</p>
               </div>
               <div className="serve-item">
                  <img src={serve3} alt="wait"/>
                  <h1>E-Commerce Website</h1>
                  <button>Start from ₹ 15000</button>
                  <p>A Perfect Package to Boost your Sales and Increase the Customers with an User Friendly Website with UPI Payment & Cards EMI Facilities to your customers..</p>
               </div>
               <div className="serve-item">
                  <img src={serve4} alt="wait"/>
                  <h1>Website Redesign</h1>
                  <button>Start from ₹ 5000</button>
                  <p>We perfectly redesign your Website as per your expectations in the lower Price..</p>
               </div>
             </div>
           </div>
        </div>
    )
}
export default Serve;
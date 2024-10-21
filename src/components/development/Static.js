import React from "react";
import './Static.css';
import sta from '../Vetri It Systems Development_files/sta.png';
import static1 from '../Vetri It Systems Development_files/static1.jpg';
import static2 from '../Vetri It Systems Development_files/static2.jpg';
import static3 from '../Vetri It Systems Development_files/static3.jpg';
import static4 from '../Vetri It Systems Development_files/static4.jpg';
import static5 from '../Vetri It Systems Development_files/static5.jpg';
import static6 from '../Vetri It Systems Development_files/static6.jpg';


function Static(){
    return(
        <div className="static">
           <h1>Static Website</h1>

          <div className="static-container">
               <div>
                    <img src={sta} alt="wait"/>
                </div>
             <div className="static-main">
                
                <div>
                    <img src={static1} alt="wait"/>
                    <p>"Static websites load very fast, so your visitors won't have to wait."</p>
                </div>
                <div>
                    <img src={static2} alt="wait" className="sec-img"/>
                    <p>Save on development and hosting expenses.</p>
                </div>
                <div>
                    <img src={static3} alt="wait"/>
                    <p>Ensure high availability with minimal downtime.</p>
                </div>
                <div>
                    <img src={static4} alt="wait"/>
                    <p>Enjoy quick page loads for a better user experience.</p>
                </div>
                <div>
                    <img src={static5} alt="wait"/>
                    <p>Reduce the risk of common web attacks.</p>
                </div>
                <div>
                    <img src={static6} alt="wait"/>
                    <p>Easily update and maintain your site.</p>
                </div>
             </div>
          </div>
        </div>

    )
}
export default Static;
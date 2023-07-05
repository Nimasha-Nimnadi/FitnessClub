import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpeg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
        
        <img src={image1} alt="image1.png" />
        <img src={image2} alt="image2.png" />
        <img src={image3} alt="image3.png" />
        <img src={image4} alt="image4.png" />
        </div>

        <div className="right-r">
            <span>Some reasons</span>

            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt=""/>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>

                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>

                <span 
                    style={{
                        color:"var(--gray)"}}>
                Our partners
                </span>

                <div className="partners">
                        <img src={nb} alt="" />
                        <img src={adidas}alt="" />
                        <img src={nike} alt="" />
                </div>

        </div>
    </div>
  )
}

export default Reasons;
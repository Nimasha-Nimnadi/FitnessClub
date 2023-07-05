import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Heart from '../assets/heart.png'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
{/*the best ad*/  }      
            <div className="the-best-ad">
                <div></div>
                <span>The best Ladies fitness club</span>
            </div>
  {/*hero heading*/}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest!</span>
                    </div>
                
                </div>

            {/*figures*/}

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>With the expert coaches</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>Members joined</span>
                </div>

                <div>
                    <span>+45</span>
                    <span>fitness programs</span>
                </div>
            
            </div>

            {/*hero buttons*/}

            <div className="hero-buttons">
                <buttons className="btn">Get started</buttons>
                <buttons className="btn">Learn more</buttons>
            </div>

        </div>
    
        <div className="right-h">
            <button className='btn'>Join now</button>

            <div className="heart-rate">
            <img src={Heart} alt="" className='img'/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
            </div>

            {/*hero images*/}

            <img src={hero_image} alt ="" className='hero-image'/>
            <img src={hero_image_back} alt ="" className='hero-image-back'/>

            {/*}calories*/}
            <div className="calories">
                <img src={Calories} alt="" className="Calories" />
                <div>
                    <span>Calories Burned</span>
                     <span>220 kcal</span>
                </div>
            </div>
        
        
        
            </div>
    </div>
  )
}

export default Hero
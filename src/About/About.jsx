import React from "react";
import './About.css'
import roto from '../assets/roto.jpg'

export const About = () => {
    return (
        <div className="about_container" id='about_section'>

            <div className="info_container">

                <div className="image_container">
                    <img src={roto} alt={roto} />
                </div>
                <div className="info_text">
                    <span>Hola, soy Mike y soy Tatuador<br/>Actualmente soy un tatuador con mas de 15 anios de experiencia</span>
                    
                </div>
            </div>
        </div>
    )
}

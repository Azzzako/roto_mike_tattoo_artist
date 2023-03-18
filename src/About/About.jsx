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

                <h1 className="info_title_responsive">Roto Mike</h1>

                <div className="info_text">
                    <h1 className="info_title">Roto Mike</h1>
                    <span className="text1">Hola, soy Mike y soy Tatuador<br />Actualmente soy un tatuador con mas de 15 anios de experiencia<br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque suscipit ad commodi eveniet recusandae. Corrupti at vel vitae voluptatem pariatur quae! Esse repellendus ducimus, </span>
                </div>
            </div>
        </div>
    )
}

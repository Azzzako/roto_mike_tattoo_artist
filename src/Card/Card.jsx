import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from '../assets/images';
import './Card.css'


export const Card = () => {


    return (
        <div id='image_section'>
            <Carousel
            autoPlay={true}
            dynamicHeight={false}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            // showArrows={false}
            interval={2000}
            >
                {img.map((item) => (
                    <div className="img_container">
                        <img src={item.url} alt={item.url} className='img_item'/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

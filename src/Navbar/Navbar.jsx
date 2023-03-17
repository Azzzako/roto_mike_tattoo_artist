import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { DiRuby } from "react-icons/di"
import { IconContext } from "react-icons/lib";
import "./Navbar.css"

export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    

    return (
        <nav className="container">
            <div className="wrapper">

                <IconContext.Provider value={{style: {fontSize: "2em"}}}>
                    <div className="logo_container">
                        <DiRuby />
                        <p>
                            RM
                        </p>
                    </div>

                <div className="mobile_icon"
                onClick={() => setShowNavbar(!showNavbar)}
                >
                    <TfiAlignJustify/>
                </div>

                    <div className="menu" style={showNavbar ? {left: "0"} : {left: "-100%"}}>

                        <div className="menu_item">
                        <a href="#about_section"><div className="item" onClick={() => setShowNavbar(!showNavbar)}>Roto Mike</div></a>
                        </div>

                        <div className="menu_item">
                           <a href="#image_section"><div className="item" onClick={() => setShowNavbar(!showNavbar)}>Gallery</div></a> 
                        </div>

                        <div className="menu_item">
                        <a href="#about_section"><div className="item" onClick={() => setShowNavbar(!showNavbar)}>Contact me</div></a>
                        </div>

                        
                    </div>

                </IconContext.Provider>
            </div>
        </nav>
    )
}

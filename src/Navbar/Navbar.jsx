import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { IconContext } from "react-icons/lib";
import "./Navbar.css"
import { FcGallery, FcContacts, FcHome } from "react-icons/fc";
import { AiOutlineThunderbolt } from 'react-icons/ai'



export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)


    return (
        <nav className="container">
            <div className="wrapper">

                <IconContext.Provider value={{ style: { fontSize: "2.5em" } }}>
                    <div className="logo_container">
                        <AiOutlineThunderbolt />
                    </div>

                    <div className="mobile_icon"
                        onClick={() => setShowNavbar(!showNavbar)}
                    >
                        <TfiAlignJustify />
                    </div>

                    <div className="menu" style={showNavbar ? { left: "0" } : { left: "-100%" }}>

                        <div className="menu_item">
                            <a href="#about_section"><div className="item" onClick={() => setShowNavbar(!showNavbar)}><FcHome /></div></a>
                        </div>

                        <div className="menu_item">
                            <a href="#image_section"><div className="item" onClick={() => setShowNavbar(!showNavbar)}><FcGallery /></div></a>
                        </div>

                        <div className="menu_item">
                            <a href="#contact_component"><div className="item" onClick={() => setShowNavbar(!showNavbar)}><FcContacts /></div></a>
                        </div>


                    </div>

                </IconContext.Provider>
            </div>
        </nav>
    )
}

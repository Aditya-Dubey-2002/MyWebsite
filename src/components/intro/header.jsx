import React, { useState } from "react";
import Brief from "./brief";
import Dp from './dp';
import "./header.css"


function Header() {
    
    return (
        <header className="intro">
            <Dp size={130}/>
            <Brief />
        </header>
    )
}

export default Header;
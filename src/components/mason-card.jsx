import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./mason-card.css";
import { Paper } from "@mui/material";


function MasonCard(props) {
    const myStyle = {
        // backgroundImage : `url(${props.imgsrc})`,
        backgroundColor: props.bgcolor,
        color: props.color,
        borderRadius: "2.5%",
        textAlign: "left",
        padding: "3%",
        display: "flex",
        flexDirection: 'column',
        minHeight: "40vh",
        position: "relative",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-out",
        // Added to make absolute positioning work
    };


    const titleStyle = {
        fontSize: "1.25em",

        // maxHeight:"100%"
    }

    const textContainerStyle = {
        position: 'absolute',
        bottom: '5px',
        left: '5px',
        // transition: "opacity height 0.5s ease, transform 0.5s ease, background-color 0.5s ease", // Add transform and background-color
        margin: 0,
        maxWidth: "50%",

        // textShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
    };

    const LinkStyle = {
        textDecoration: 'none',
        color: props.color,
        minHeight: "50%",
        maxWidth: "40%",
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-around"

    };

    const videoStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Maintain video aspect ratio and cover the container
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1, // Place the video behind the content
    };

    const imgStyle = {
        // width:"20%"
        left: "40%"
    }

    const [title, setTitle] = useState("");
    const [hint, setHint] = useState(props.hint);
    const [over, setOver] = useState(false);

    function itsOver(e) {
        setTitle(props.etitle);
        setHint(props.hint ? "View" : "");
        setOver(true);
        e.currentTarget.classList.add("hovered");
    }

    function itsOut(e) {
        setTitle("");
        setOver(false);
        setHint(props.hint);
        e.currentTarget.classList.remove("hovered");
    }

    function handleClick() {
        
    }


    return (
        <Paper elevation={20} style={myStyle} onMouseOver={itsOver} onMouseOut={itsOut} onClick={handleClick} >
            {/* <div className="for-image"> */}
                {/* <img src={props.isrc} className="img-style" ></img> */}
                <NavLink to={props.path} style={LinkStyle} >
                    {props.component}
                    <div style={textContainerStyle}  >
                        <h4 style={titleStyle} className="heading">{props.title}</h4>
                        <h2 className={over ? "ehead mason-text-container-hovered" : "ehead"}><b>{title}</b></h2>
                        <hr />
                        <p className="subheading">{hint}</p>
                    </div>

                </NavLink>
            {/* </div> */}
            {/* Your existing component or image */}
            {/* <img src={props.imgsrc} style={imgStyle}></img> */}
        </Paper>
    );
}

export default MasonCard;

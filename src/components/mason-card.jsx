import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./mason-card.css";


function MasonCard(props) {
    const myStyle = {
        // backgroundImage : `url(${props.imgsrc})`,
        backgroundColor: props.bgcolor,
        color: props.color,
        borderRadius: "2.5%",
        textAlign: "left",
        // padding: "3px",
        display: "flex",
        flexDirection: 'column',
        minHeight: "47%",
        position: "relative",
        // Added to make absolute positioning work
    };


    const titleStyle = {
        fontSize: "1.5em",
        // maxHeight:"100%"
    }

    const textContainerStyle = {
        position: 'absolute',
        bottom: '5px',
        left: '5px',
        transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.5s ease", // Add transform and background-color
        margin: 0,
        // textShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
    };

    const LinkStyle = {
        textDecoration: 'none',
        color: props.color,
        minHeight: "50%",
        maxWidth: "40%"
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

    const [title, setTitle] = useState("");
    const [hint, setHint] = useState(props.hint);

    function itsOver(e) {
        setTitle(props.etitle);
        setHint("View");
    }

    function itsOut() {
        setTitle("");
        setHint(props.hint);
    }


    return (
        <div style={myStyle} onMouseOver={itsOver} onMouseOut={itsOut}>
            <NavLink to={props.path} style={LinkStyle}>
                <video
                    src={props.videoSrc} // Replace with the actual video source
                    style={videoStyle}
                    autoPlay
                    loop
                    muted
                />
                {props.component}
                <div style={textContainerStyle} >
                    <h4 style={titleStyle}>{props.title}</h4>
                    <h2>{title}</h2>
                    <hr />
                    <p>{hint}</p>
                </div>
            </NavLink>
            {/* Your existing component or image */}
            {/* <img src={props.imgsrc} style={imgStyle}></img> */}
        </div>

    );
}

export default MasonCard;
